const theme = require('./theme');
const Layout = require('./Layout');
const Heading = require('./Heading');

module.exports.parameters = {
    viewMode: 'docs',
    previewTabs: {
        'storybook/docs/panel': { index: -1 }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        sort: 'requiredFirst',
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        theme,
        getPage: () => Layout,
        components: {
            SubHeading: Heading
        }
    }
}