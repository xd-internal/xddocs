# XplurData Docs

Standalone documentation site built with Docusaurus. No landing page — the docs are the
whole site, served at the domain root.

## Local development

```bash
npm install
npm run start      # http://localhost:3000
npm run build      # production build into ./build
```

## Deploy (GitHub Pages)

1. Push this folder to a repo (e.g. `xplurdata/oss-stack` or a dedicated docs repo) on `main`.
2. Repo → **Settings → Pages → Source → "GitHub Actions."**

The included workflow builds and publishes on every push to `main`.

### Hosting URL
- Default config targets **docs.xplurdata.com** (`url: https://docs.xplurdata.com`,
  `baseUrl: '/'`, `static/CNAME`). Add a DNS **CNAME** record `docs` → `<user>.github.io`,
  then set the custom domain under Settings → Pages.
- For a project page instead (`<user>.github.io/<repo>/`): set `baseUrl: '/<repo>/'` in
  `docusaurus.config.ts` and delete `static/CNAME`. (The header/footer use baseUrl-safe
  paths, so internal links adapt automatically.)

## Theme & chrome

The header and footer match the XplurData main site (cream/green/yellow, Inter + Fira Code).
Brand and marketing links (Features, Product, Architecture, Contact) point to the main site
at **xplurdata.com**; the **Docs** link stays on this site. Styling lives in
`src/css/custom.css` + `src/css/chrome.css`; the header/footer markup is in
`src/theme/Navbar/` and `src/theme/Footer/`.

## Editing

- Pages: `docs/*.md(x)`. Add one → also add it to `sidebars.ts`.
- Tokens (colors/fonts): top of `src/css/custom.css`.
