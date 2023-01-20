// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NinoLog',
  tagline: 'アプリ開発する人',
  url: 'https://dninomiya.github.io',
  baseUrl: '/ninolog',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dninomiya', // Usually your GitHub org/user name.
  projectName: 'ninolog', // Usually your repo name.

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
          editUrl: 'https://github.com/dninomiya/ninolog/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/dninomiya/ninolog/edit/main/',
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
        title: 'NinoLog',
        logo: {
          alt: 'NinoLog Logo',
          src: 'img/logo.PNG',
        },
        items: [
          {
            type: 'doc',
            docId: 'basic/intro',
            position: 'left',
            label: '基礎知識',
            className: 'header-vscode-link',
          },
          {
            type: 'doc',
            docId: 'web/intro',
            position: 'left',
            className: 'header-next-link',
            label: 'Webアプリ',
          },
          {
            type: 'doc',
            docId: 'flutter/intro',
            position: 'left',
            className: 'header-flutter-link',
            label: 'モバイルアプリ',
          },
          {
            type: 'doc',
            docId: 'firebase/intro',
            position: 'left',
            className: 'header-firebase-link',
            label: 'Firebase',
          },
          {
            href: 'https://www.youtube.com/channel/UCUPq5dKFGnOziaqYI-ejYcg',
            className: 'header-youtube-link',
            'aria-label': 'YouTube',
            position: 'right',
          },
          {
            href: 'https://discord.gg/QeKNfAw6cK',
            className: 'header-discord-link',
            'aria-label': 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/dninomiya/ninolog',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
              {
                label: 'NinoLogについて',
                to: '/',
              },
              {
                label: '基礎知識',
                to: '/basic/intro',
              },
              {
                label: 'Webアプリ',
                to: '/web/intro',
              },
              {
                label: 'NinoLogについて',
                to: '/flutter/intro',
              },
              {
                label: 'Firebase',
                to: '/firebase/intro',
              },
            ],
          },
          {
            title: 'リンク',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/QeKNfAw6cK',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/d151005',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCUPq5dKFGnOziaqYI-ejYcg',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dninomiya/ninolog',
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
