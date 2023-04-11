// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NinoDocs',
  tagline: 'アプリ開発する人',
  url: 'https://dninomiya.github.io',
  baseUrl: '/ninodocs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dninomiya', // Usually your GitHub org/user name.
  projectName: 'ninodocs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/dninomiya/ninodocs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/dninomiya/ninodocs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: '/img/preview.png',
      navbar: {
        title: 'NinoDocs',
        logo: {
          alt: 'NinoDoc Logo',
          src: 'img/avatar.png',
        },
        items: [
          {
            href: '/',
            label: 'ドキュメント',
          },
          // {
          //   href: 'https://discord.gg/QeKNfAw6cK',
          //   className: 'header-discord-link',
          //   'aria-label': 'Discord',
          //   position: 'right',
          // },
          // {
          //   href: 'https://www.youtube.com/channel/UCUPq5dKFGnOziaqYI-ejYcg',
          //   className: 'header-youtube-link',
          //   'aria-label': 'YouTube',
          //   position: 'right',
          // },
          {
            href: 'https://twitter.com/d151005',
            className: 'header-twitter-link',
            'aria-label': 'Twitter',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/dninomiya/ninodocs',
          //   className: 'header-github-link',
          //   'aria-label': 'GitHub repository',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'リンク',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/QeKNfAw6cK',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCUPq5dKFGnOziaqYI-ejYcg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/d151005',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dninomiya/ninodocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deer, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['log'],
      },
    }),
};

module.exports = config;
