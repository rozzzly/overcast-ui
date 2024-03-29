const path = require('path');
// const daintyOceanicNext = require('./syntax-theme.js');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'My Site',
    tagline: 'Dinosaurs are cool',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        '@docusaurus/theme-live-codeblock',
        ['docusaurus-plugin-module-alias', {
            alias: {
                '@overcast-ui/core': path.resolve(__dirname, '../core/src'),
                '@overcast-ui/utils': path.resolve(__dirname, '../utils/src'),
                '@overcast-ui/theme': path.resolve(__dirname, '../theme/src'),
            }
        }],
        ['docusaurus-plugin-react-docgen-typescript', {
            // pass in a single string or an array of strings
            src: ['../core/src/**/*.tsx'],
            global: true,
            parserOptions: {
                propFilter: (prop, component) => {
                  if (prop.parent) {
                    return !prop.parent.fileName.includes('@types/react');
                  }

                  return true;
                },
                shouldExtractLiteralValuesFromEnum: true,
                shouldRemoveUndefinedFromOptional: true,
            }
        }],
        // sidebar: {
        //     A
        // },
        ['docusaurus-plugin-typedoc', {
            entryPoints: ['../core/src/index.ts'],
            entryPointStrategy: 'packages',
            tsconfig: './tsconfig.json',
            // to: 'docs/api/',
            // label: 'API',
            out: 'api',
            sidebar: {
              categoryLabel: 'api',
              position: 0,
              fullNames: true
            },
        }]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false
            },
            navbar: {
                title: 'overcast-ui',
                logo: {
                    alt: 'overcast-ui',
                    src: './img/logo-wide.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/facebook/docusaurus',
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
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
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
                copyright: `Copyright © ${new Date().getFullYear()} Patrick Lienau. Built with Docusaurus.`,
            },
            prism: {
                theme: {plain: {}, styles: []},
                darkTheme: {plain: {}, styles: []}
            },
        }),
});
