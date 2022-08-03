const envTarget = process.env['TARGET'];
const IS_TEST = 'TEST' in process.env;
const TARGET = (envTarget && envTarget.toLowerCase() === 'esm') ? 'esm' : 'cjs';

module.exports = (api) => {
    api.cache(false);
    return {
        presets: [
            ['@babel/preset-env', {
                targets: {
                    node: 'current'
                }
            }],
            '@babel/preset-typescript',
            '@babel/preset-react',
            // require.resolve('@docusaurus/core/lib/babel/preset')
        ],

        plugins: [
            ['@babel/plugin-transform-runtime', {
                corejs: false,
                helpers: true,
                useESModules: true,
                // By default, it assumes @babel/runtime@7.0.0. Since we use >7.0.0, better to
                // explicitly specify the version so that it can reuse the helper better
                // See https://github.com/babel/babel/issues/10261
                // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
                version: require('@babel/runtime/package.json').version,
                regenerator: true,
                absoluteRuntime: require.resolve(`@babel/runtime/package.json`)
            }],
            '@babel/plugin-proposal-class-properties',
            '@emotion/babel-plugin'
        ].filter(plugin => plugin !== null) // filter out any plugins conditionally set to `null`
    };
};
