const { create } = require('@storybook/theming');

module.exports = create({
    base: 'dark',
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://place-hold.it/350x150',
    brandTarget: '_self',
    appBg: '#1f2931',
    appContentBg: '#30404d',
    appBorderRadius: 6,
    barBg: '#30404d',
    fontBase: '"Roboto", sans-serif',
    fontCode: '"Roboto Mono", monospace'
});