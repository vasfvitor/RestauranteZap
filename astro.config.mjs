import path from 'path';
import { fileURLToPath } from 'url';

import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    vite: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
              },
            /*
            alias: {
              '~': path.resolve('./src/')
            }
            */
        },
    },
});
