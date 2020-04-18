module.exports = {
    plugins: ["@babel/plugin-transform-runtime"],
    presets: [
        ['@babel/preset-env',
        {
            "useBuiltIns": "usage",

        }],
        '@babel/preset-react'
    ],
};