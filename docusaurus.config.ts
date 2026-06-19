import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'XplurData Docs',
  tagline: 'Full Observability. Zero Vendor Lock-in.',
  favicon: 'img/favicon.ico',

  url: 'https://xplurdata.io',
  baseUrl: '/xddocs/',

  organizationName: 'xplurdata',
  projectName: 'xplurdata',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',          // docs at /docs/ root, not /docs/docs/
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/xplurdata/xplurdata/edit/main/website/',
          showLastUpdateTime: false,
        },
        blog: false,                   // no blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/xplurdata-social.png',

    navbar: {
      title: 'XplurData',
      logo: {
        alt: 'XplurData',
        src: 'img/logo.svg',
        href: 'https://xplurdata.io',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown',
          versions: ['current', '1.0']
        },
        {
          href: 'https://xplurdata.io',
          label: '← Back to Site',
          position: 'right',
        },
        {
          href: 'https://github.com/xplurdata/xplurdata',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction',    to: '/'},
            {label: 'Quick Install',   to: '/quick-install'},
            {label: 'Architecture',    to: '/architecture'},
            {label: 'Sending Logs',    to: '/sending-logs'},
            {label: 'Management',      to: '/management'},
            {label: 'Troubleshooting', to: '/troubleshooting'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub',    href: 'https://github.com/xplurdata/xplurdata'},
            {label: 'LinkedIn',  href: 'https://linkedin.com/company/xplurdata'},
            {label: 'Slack',     href: 'https://join.slack.com/t/xplurdata/shared_invite'},
            {label: 'Twitter/X', href: 'https://twitter.com/xplurdata'},
          ],
        },
        {
          title: 'XplurData',
          items: [
            {label: 'Website',     href: 'https://xplurdata.io'},
            {label: 'Contact',     href: 'https://xplurdata.io#contact'},
            {label: 'Roadmap',     href: 'https://xplurdata.io#roadmap'},
            {label: 'Report Issue', href: 'https://github.com/xplurdata/xplurdata/issues'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XplurData. Apache-2.0 License.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'sql', 'yaml', 'python', 'java', 'go', 'javascript'],
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    algolia: undefined,   // plug in your Algolia keys here when ready
  } satisfies Preset.ThemeConfig,
};

export default config;
