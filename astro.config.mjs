import path from 'path';
import { fileURLToPath } from 'url';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: 'https://test-growthbook.restaurantezap.pages.dev/',

    integrations: [
        tailwind(),
        svelte(),
        prefetch({
            // Only prefetch links with an href that begins with `/products`
            selector: "a[href^='/passo/']",
        }),
    ],
    vite: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
            },
        },
    },

    build: {
        assetsPrefix: 'https://test-growthbook.restaurantezap.pages.dev',
    },
});
