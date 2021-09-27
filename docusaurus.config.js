/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React-chatbot-kit',
  tagline: 'The simple way to build chatbots',
  url: 'https://FredrikOseberg.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FredrikOseberg', // Usually your GitHub org/user name.
  projectName: 'react-chatbot-kit-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'react-chatbot-kit',
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/FredrikOseberg/react-chatbot-kit',
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
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/FredrikOseberg/react-chatbot-kit',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} react-chatbot-kit, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
