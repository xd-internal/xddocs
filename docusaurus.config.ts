import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ─────────────────────────────────────────────────────────────────────────────
// CHOOSE WHERE THE DOCS LIVE — edit `url` + `baseUrl` to match ONE row:
//
//   docs.xplurdata.com (custom subdomain, recommended):
//     url='https://docs.xplurdata.com'      baseUrl='/'      (+ keep static/CNAME)
//   xplurdata.github.io/oss-stack-docs/ (no DNS work):
//     url='https://xplurdata.github.io'     baseUrl='/oss-stack-docs/'  (delete static/CNAME)
// ─────────────────────────────────────────────────────────────────────────────

const config: Config = {
  title: 'XplurData Docs',
  tagline: 'Self-hosted observability stack — ingest, store and explore your data at scale',
  favicon: 'img/logo.svg',

  url: 'https://xplurdata.io',
  baseUrl: '/xddocs/',

  organizationName: 'xplurdata',   // GitHub org
  projectName: 'oss-stack-docs',   // repo name
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Fonts matching the XplurData site: Inter (body/UI) + Fira Code (mono).
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: "/docs",            // docs served under /docs
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/xplurdata/oss-stack/tree/main/',
        },
        blog: false,                          // docs-only site
        theme: {
          customCss: ['./src/css/custom.css', './src/css/chrome.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'go', 'java', 'ruby', 'php', 'rust', 'toml', 'csharp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
