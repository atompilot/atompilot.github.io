(() => {
  const normalize = value => String(value || '')
    .toLocaleLowerCase('zh-CN')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '');

  const tokenize = query => normalize(query)
    .trim()
    .split(/[\s,，、;；|]+/)
    .filter(Boolean);

  const scoreToken = (text, token) => {
    const exactAt = text.indexOf(token);
    if (exactAt !== -1) return 300 - Math.min(exactAt, 120);

    // Fuzzy matching stays inside one word: it avoids joining unrelated text
    // such as the end of a repository owner and the start of its project name.
    return text.split(/[^\p{L}\p{N}]+/u).reduce((best, word) => {
      let cursor = -1;
      let first = -1;
      for (const character of token) {
        cursor = word.indexOf(character, cursor + 1);
        if (cursor === -1) return best;
        if (first === -1) first = cursor;
      }
      const span = cursor - first + 1;
      if (span > Math.max(token.length * 2, token.length + 3)) return best;
      return Math.max(best, Math.max(1, 80 - span - first / 10));
    }, 0);
  };

  const score = (text, query) => {
    const terms = tokenize(query);
    if (!terms.length) return 0;
    const searchable = normalize(text);
    const scores = terms.map(term => scoreToken(searchable, term));
    return scores.every(Boolean) ? scores.reduce((total, value) => total + value, 0) : 0;
  };

  // `matches` filters in-report lists, where an empty query must show everything.
  // Spotlight keeps using `score`, which returns 0 for an empty query so the
  // dialog stays empty until something is typed.
  window.AtomSearch = { normalize, tokenize, score, matches: (text, query) => !tokenize(query).length || score(text, query) > 0 };

  const createDialog = () => {
    const dialog = document.createElement('dialog');
    dialog.className = 'spotlight';
    dialog.setAttribute('aria-label', '全站搜索');
    dialog.innerHTML = `
      <div class="spotlight-panel">
        <div class="spotlight-input-row">
          <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m16 16 4.1 4.1"></path></svg>
          <input type="search" autocomplete="off" placeholder="搜索项目、报告或关键词" aria-label="搜索项目、报告或关键词" />
          <kbd class="spotlight-key">ESC</kbd>
        </div>
        <div class="spotlight-hint">支持模糊匹配与空格分词，例如 <span>github agent</span></div>
        <div class="spotlight-results" aria-live="polite"></div>
        <div class="spotlight-footer"><span>↑ ↓ 选择</span><span>↵ 打开</span><span>⌘ F 唤起</span></div>
      </div>`;
    document.body.append(dialog);
    return dialog;
  };

  const dialog = createDialog();
  const input = dialog.querySelector('input');
  const results = dialog.querySelector('.spotlight-results');
  let activeIndex = 0;
  let matches = [];
  let returnFocus = null;

  const formatDate = value => {
    const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return match ? `${match[1]}.${match[2]}.${match[3]}` : '日期未标注';
  };

  // Second-level entries point inside a report; they are indexed as `报告内…`
  // and share the parent's path once the query string or anchor is dropped.
  const isChild = item => /^报告内/.test(String(item.type || ''));
  const basePath = url => String(url || '').split(/[?#]/)[0];
  const searchableText = item => `${item.title} ${item.type} ${item.summary} ${item.keywords}`;
  const MAX_GROUPS = 6;
  const MAX_CHILDREN_PER_GROUP = 4;
  const MAX_ROWS = 14;

  const buildMatches = query => {
    const index = window.ATOM_SEARCH_INDEX || [];

    // With no query there is nothing to rank sub-topics by, so the list stays at
    // the report level and only expands into topics once something is typed.
    if (!query) {
      return index
        .map((item, order) => ({ item, order, score: 0, depth: 0 }))
        .filter(entry => !isChild(entry.item))
        .sort((a, b) => String(b.item.date || '').localeCompare(String(a.item.date || '')) || a.order - b.order);
    }

    const parentByPath = new Map();
    index.forEach((item, order) => {
      if (!isChild(item) && !parentByPath.has(basePath(item.url))) parentByPath.set(basePath(item.url), { item, order });
    });

    const groups = new Map();
    index.forEach((item, order) => {
      const value = score(searchableText(item), query);
      if (!value) return;
      const path = basePath(item.url);
      if (!groups.has(path)) groups.set(path, { path, parent: null, children: [], score: 0, order: Infinity });
      const group = groups.get(path);
      if (isChild(item)) group.children.push({ item, order, score: value });
      else if (!group.parent || value > group.parent.score) group.parent = { item, order, score: value };
      group.score = Math.max(group.score, value);
      group.order = Math.min(group.order, order);
    });

    // A topic can match while its report does not. Pull the report in as the
    // group head so the hit is never shown detached from what it belongs to.
    groups.forEach(group => {
      if (group.parent || !group.children.length) return;
      const fallback = parentByPath.get(group.path);
      if (fallback) group.parent = { ...fallback, score: 0, isContext: true };
    });

    const rows = [];
    const ranked = [...groups.values()].sort((a, b) => b.score - a.score || a.order - b.order).slice(0, MAX_GROUPS);
    for (const group of ranked) {
      const children = group.children
        .sort((a, b) => b.score - a.score || a.order - b.order)
        .slice(0, MAX_CHILDREN_PER_GROUP);
      // Keep groups whole: stop before a group that would be cut in half.
      if (rows.length && rows.length + (group.parent ? 1 : 0) + children.length > MAX_ROWS) break;
      if (group.parent) rows.push({ ...group.parent, depth: 0, hasChildren: children.length > 0 });
      children.forEach((child, position) => rows.push({
        ...child,
        depth: group.parent ? 1 : 0,
        isLastChild: position === children.length - 1
      }));
    }
    return rows;
  };

  const render = () => {
    const query = input.value.trim();
    matches = buildMatches(query);
    activeIndex = Math.min(activeIndex, Math.max(0, matches.length - 1));

    if (!query && !matches.length) {
      results.innerHTML = '<p class="spotlight-empty">目前还没有可展示的公开内容。</p>';
      return;
    }
    if (!matches.length) {
      results.innerHTML = `<p class="spotlight-empty">没有找到“${escapeHtml(query)}”。试试更短的词，或用空格拆分关键词。</p>`;
      return;
    }
    const topics = matches.filter(entry => entry.depth).length;
    const heading = query
      ? `<div class="spotlight-results-heading"><strong>搜索结果</strong><span>${matches.length - topics} 份内容${topics ? ` · ${topics} 个主题` : ''}</span></div>`
      : `<div class="spotlight-results-heading"><strong>全部内容</strong><span>按时间倒序 · ${matches.length} 条</span></div>`;
    results.innerHTML = `${heading}${matches.map(({ item, depth, isContext, hasChildren, isLastChild }, index) => `
      <a class="spotlight-result${depth ? ' is-child' : ''}${isLastChild ? ' is-last-child' : ''}${isContext ? ' is-context' : ''}${hasChildren ? ' has-children' : ''}${index === activeIndex ? ' is-active' : ''}" href="${escapeAttribute(item.url)}" data-result-index="${index}">
        <span class="spotlight-result-copy"><span class="spotlight-result-meta"><small>${escapeHtml(depth ? String(item.type).split('·').pop().trim() : item.type)}</small>${depth ? '' : `<time datetime="${escapeAttribute(item.date || '')}">${escapeHtml(formatDate(item.date))}</time>`}</span><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.summary)}</span></span>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13"></path><path d="m13 6 6 6-6 6"></path></svg>
      </a>`).join('')}`;
    results.querySelector('.spotlight-result.is-active')?.scrollIntoView({ block: 'nearest' });
  };

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const escapeAttribute = escapeHtml;

  const open = trigger => {
    returnFocus = trigger || document.activeElement;
    activeIndex = 0;
    input.value = '';
    render();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    window.setTimeout(() => input.focus(), 0);
  };

  const close = () => {
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    if (returnFocus && typeof returnFocus.focus === 'function') returnFocus.focus();
  };

  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-site-search]');
    if (trigger) {
      event.preventDefault();
      open(trigger);
    }
  });

  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'f') {
      event.preventDefault();
      if (!dialog.open) open(document.activeElement);
      return;
    }
    if (!dialog.open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    }
    if (event.key === 'ArrowDown' && matches.length) {
      event.preventDefault();
      activeIndex = (activeIndex + 1) % matches.length;
      render();
    }
    if (event.key === 'ArrowUp' && matches.length) {
      event.preventDefault();
      activeIndex = (activeIndex - 1 + matches.length) % matches.length;
      render();
    }
    if (event.key === 'Enter' && matches[activeIndex]) {
      event.preventDefault();
      window.location.assign(matches[activeIndex].item.url);
    }
  });

  input.addEventListener('input', () => {
    activeIndex = 0;
    render();
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    close();
  });
})();
