const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const babel = {
    presets: [
        ['@babel/preset-env', {
            modules: false,
        }],
        '@babel/preset-typescript',
        '@babel/preset-react'
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                useESModules: true
            }
        ],
        '@emotion/babel-plugin'
    ]
};

module.exports = {
    stories: [
        '../stories/**/*.mdx'
    ],
    addon: [
        '@storybook/addon-links',
        '@storybook/addon-actions',
        '@storybook/addon-viewport',
        '@storybook/addon-docs/register',
        '@storybook/addon-controls',
        '@storybook/addon-backgrounds',
        '@storybook/addon-toolbars',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
        '@storybook/addon-interactions'
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
            //     the docs page from the markdown
            test: /\.mdx$/,
            use: [
                {
                    // Need to add babel-loader as dependency: `yarn add -D babel-loader`
                    loader: 'babel-loader',
                    // may or may not need this line depending on your app's setup
                    options: {
                        ...babel
                    //     plugins: ['@babel/plugin-transform-react-jsx'],
                    },
                },
                {
                    loader: '@mdx-js/loader'
                },
            ],
        });
        // 2b. Run `source-loader` on story files to show their source code
        //     automatically in `DocsPage` or the `Source` doc block.
        // config.module.rules.push({
        //     test: /\.(stories|story)\.[tj]sx?$/,
        //     loader: require.resolve('@storybook/source-loader'),
        //     exclude: [/node_modules/],
        //     enforce: 'pre',
        // });
        return config;
    },

    babel: async (options) => ({
        ...babel
    }),
    features: {
        babelModeV7: true
    },
    framework: '@storybook/react',
    core: {
        'builder': '@storybook/builder-webpack5'
    }
}