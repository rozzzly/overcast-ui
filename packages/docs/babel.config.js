const envTarget = process.env['TARGET'];
const IS_TEST = 'TEST' in process.env;
const TARGET = (envTarget && envTarget.toLowerCase() === 'esm') ? 'esm' : 'cjs';

module.exports = (api) => {
    api.cache(false);
    return {
        presets: [
            ['@babel/preset-env', {
                modules: (TARGET === 'esm') ? false : 'commonjs',
            }],
            '@babel/preset-typescript',
            '@babel/preset-react'
        ],
        plugins: [
            // (IS_TEST
            //     ? null // do not include `babel-plugin-module-extension-resolver` when jest is in use
            //     : ['babel-plugin-module-extension-resolver']
            // ),
            [
                '@babel/plugin-transform-runtime',
                {
                    useESModules: TARGET === 'esm'
                }
            ],
            '@babel/plugin-proposal-class-properties',
            '@emotion/babel-plugin'
        ].filter(plugin => plugin !== null) // filter out any plugins conditionally set to `null`
    };
};
