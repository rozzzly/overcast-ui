module.exports = {
    stories: [
        '../../*/src/**/*.stories.mdx',
        '../../*/src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript'

    },
    features: {
        babelModeV7: true
    }
}