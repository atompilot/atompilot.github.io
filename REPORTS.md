# Public report library

`atompilot.github.io/reports/` is a public, cross-device library for interactive HTML reports.

## When to publish

Publish automatically when a request is for a **report, brief, dashboard, or cross-device HTML reading experience** and the content is safe to make public. A plain HTML prototype, internal project page, or any request marked local/private stays in its source project and is not published here.

Before publishing, remove or block:

- credentials, tokens, API keys, cookies, private URLs, and internal hostnames;
- personal contact details, precise locations, raw health information, and third-party private data;
- proprietary source, customer data, unpublished plans, or material that requires an access-controlled audience.

If public-safety cannot be established from the request and source material, stop and ask rather than publishing.

## Naming and layout

```text
reports/YYYY/MM/<kebab-case-slug>/index.html
reports/YYYY/MM/<kebab-case-slug>/assets/
```

The slug describes the subject, not the tool or agent. Example:

```text
reports/2026/07/github-hot-projects/index.html
```

Every report must contain its title, generation date, source/method note, and a link back to `/reports/`. Give it accurate `description` and `keywords` meta tags, then append its title, summary, keywords, URL, publication date (`date: YYYY-MM-DD`), and important report-internal entries to `/search-index.js` so the site-wide Spotlight search can find it and show the library in reverse chronological order. When an asset is needed, keep it inside the report's own `assets/` directory so the report can move without breaking.

## Library maintenance

- Add the report to `reports/index.html` in the same commit.
- Prefer self-contained HTML/CSS/JS and avoid tracking scripts.
- Keep ordinary reports small; put large binaries, video, or raw datasets elsewhere and link to them.
- GitHub Pages currently limits published sites to 1 GB, has a soft bandwidth limit of 100 GB/month, and branch builds have a soft limit of 10/hour. See GitHub's [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
