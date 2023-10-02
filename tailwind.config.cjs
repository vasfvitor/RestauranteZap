/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    daisyui: {
        themes: [
            {
                lemonade: {
                    ...require('daisyui/src/theming/themes')['[data-theme=lemonade]'],

                    '.btn': {
                        'font-weight': 'bold',
                        'text-transform': 'none',
                    },
                },
            },
        ],
    },
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
