// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SIP-HASS',
  tagline: 'SIP for Home Assistant',
  url: 'https://sip-hass-docs.github.io',
  baseUrl: '/sip-hass-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TECH7Fox',
  projectName: 'sip-hass-docs.github.io',
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
      {hashed: true}
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['./sip-hass-card/src/sip-core.ts'],
        excludeExternals: false,
        out: "docs/developers/card/api",
        readme: "none",
        mergeReadme: true,
        tsconfig: './sip-hass-card/src/tsconfig.json',
        groupOrder: ["Classes", "Interfaces", "Enums"],
        sidebar: { pretty: true },
        textContentMappings: {
          "title.indexPage": "SIP Core API",
          "title.memberPage": "{name}",
        },
        parametersFormat: "table",
        interfacePropertiesFormat: "table",
        propertyMembersFormat: "table",
        indexFormat: "table",
        typeDeclarationFormat: "table",
        enumMembersFormat: "table",
        classPropertiesFormat: "table",
        tableColumnSettings: {
          hideDefaults: true,
          hideModifiers: true,
        },
        useCodeBlocks: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/TECH7Fox/sip-hass-docs/edit/main/',
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
      announcementBar: {
        id: 'support_us',
        content: 'If you like SIP-HASS, please give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/TECH7Fox/sip-hass-card">GitHub</a> and consider <a target="_blank" rel="noopener noreferrer" href="https://github.com/sponsors/TECH7Fox">sponsoring</a>.',
        backgroundColor: 'dodgerblue',
        textColor: 'white',
        isCloseable: true,
      },
      navbar: {
        title: 'SIP-HASS',
        logo: {
          alt: 'My Site Logo',
          src: './img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/introduction',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'add-on/introduction',
            position: 'left',
            label: 'Add-on',
          },
          {
            type: 'doc',
            docId: 'card/introduction',
            position: 'left',
            label: 'Card',
          },
          {
            type: 'doc',
            docId: 'integration/introduction',
            position: 'left',
            label: 'Integration',
          },
          {
            type: 'doc',
            docId: 'developers/introduction',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'doc',
            docId: 'showcase/introduction',
            position: 'left',
            label: 'Showcase',
          },
          {
            href: 'https://github.com/TECH7Fox/sip-hass-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'Github repository',
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
                to: '/docs/tutorial/introduction',
              },
              {
                label: 'Add-on',
                to: '/docs/add-on/introduction',
              },
              {
                label: 'Card',
                to: '/docs/card/introduction',
              },
              {
                label: 'Integration',
                to: '/docs/integration/introduction',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Add-on',
                to: '/docs/developers/add-on/introduction'
              },
              {
                label: 'Card',
                to: '/docs/developers/card/introduction'
              },
              {
                label: 'Integration',
                to: '/docs/developers/integration'
              },
              {
                label: 'Docs',
                to: '/docs/developers/docs'
              },
            ],
          },
          {
            title: 'Issues',
            items: [
              {
                label: 'Add-on',
                href: 'https://github.com/TECH7Fox/asterisk-hass-addons/issues',
              },
              {
                label: 'Card',
                href: 'https://github.com/TECH7Fox/sip-hass-card/issues',
              },
              {
                label: 'Integration',
                href: 'https://github.com/TECH7Fox/asterisk-hass-integration/issues',
              },
              {
                label: 'Docs',
                href: 'https://github.com/TECH7Fox/sip-hass-docs/issues',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Home Asssitant forum',
                href: 'https://community.home-assistant.io/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/qxnDtHbwuD',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TECH7Fox/sip-hass-docs',
              },
              {
                label: 'Become a sponsor',
                href: 'https://github.com/sponsors/TECH7Fox',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jordy Kuhne`,
      },
      prism: {
        additionalLanguages: ['editorconfig'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
