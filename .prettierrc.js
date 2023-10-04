/** @type {import('prettier').Config} */
module.exports = {
    printWidth: 120,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,

    plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],

    overrides: [
        { files: '*.astro', options: { parser: 'astro' } },
        { files: '*.svelte', options: { parser: 'svelte' } },
    ],
};
