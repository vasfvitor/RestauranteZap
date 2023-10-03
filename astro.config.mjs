import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

import path from 'path';
import { fileURLToPath } from 'url';
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
