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
            '@babel/preset-react'
        ],
        plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-class-properties',
            '@emotion/babel-plugin'
        ].filter(plugin => plugin !== null) // filter out any plugins conditionally set to `null`
    };
};
