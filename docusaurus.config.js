// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'sijia1120', // 改成你的 GitHub 用户名（部署时用）
  projectName: 'docusaurus',    // 改成你的 GitHub 仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom-cfa-style.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Scarlett Quant Hub",
        logo: {
          alt: "Scarlett Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/docs/questions", label: "📊 Quant", position: "left" },
          { to: "/docs/learning", label: "📚 Learning", position: "left" },
          { to: "/docs/coding", label: "💻 Coding", position: "left" },
          { to: "/docs/machine-learning", label: "🤖 ML", position: "left" },
          { to: "/docs/soft", label: "💬 Soft", position: "left" },
          { to: "/contact", label: "📬 Contact", position: "left" },
          {
            href: "https://github.com/sijia1120/quant-interview-site",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      navbar: {
        title: 'Scarlett Quant Hub',
        logo: {
          alt: 'Scarlett Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: "/docs/questions", label: "📊 Questions", position: "left" },
          { to: "/docs/learning", label: "📚 Learning", position: "left" },
          { to: "/docs/coding", label: "💻 Coding", position: "left" },
          { to: "/docs/machine-learning", label: "🤖 ML", position: "left" },
          { to: "/docs/soft", label: "💬 Soft", position: "left" },
          { to: "/contact", label: "📬 Contact", position: "left" },
          {
            href: "https://github.com/sijia1120/quant-interview-site",
            label: "GitHub",
            position: "right",
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;