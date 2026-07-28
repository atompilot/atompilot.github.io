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

  window.AtomSearch = { normalize, tokenize, score, matches: (text, query) => score(text, query) > 0 };

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

  const render = () => {
    const query = input.value.trim();
    matches = query
      ? (window.ATOM_SEARCH_INDEX || [])
        .map(item => ({ item, score: score(`${item.title} ${item.type} ${item.summary} ${item.keywords}`, query) }))
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'zh-CN'))
        .slice(0, 8)
      : (window.ATOM_SEARCH_INDEX || [])
        .map((item, index) => ({ item, index, score: 0 }))
        .sort((a, b) => String(b.item.date || '').localeCompare(String(a.item.date || '')) || a.index - b.index);
    activeIndex = Math.min(activeIndex, Math.max(0, matches.length - 1));

    if (!query && !matches.length) {
      results.innerHTML = '<p class="spotlight-empty">目前还没有可展示的公开内容。</p>';
      return;
    }
    if (!matches.length) {
      results.innerHTML = `<p class="spotlight-empty">没有找到“${escapeHtml(query)}”。试试更短的词，或用空格拆分关键词。</p>`;
      return;
    }
    results.innerHTML = `${query ? '' : `<div class="spotlight-results-heading"><strong>全部内容</strong><span>按时间倒序 · ${matches.length} 条</span></div>`}${matches.map(({ item }, index) => `
      <a class="spotlight-result${index === activeIndex ? ' is-active' : ''}" href="${escapeAttribute(item.url)}" data-result-index="${index}">
        <span class="spotlight-result-copy"><span class="spotlight-result-meta"><small>${escapeHtml(item.type)}</small><time datetime="${escapeAttribute(item.date || '')}">${escapeHtml(formatDate(item.date))}</time></span><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.summary)}</span></span>
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
