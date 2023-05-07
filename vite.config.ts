import { sveltekit } from '@sveltejs/kit/vite';
// import type { UserConfig } from 'vite';
import { defineConfig } from 'vitest/config';

// const config: UserConfig = {
//     plugins: [sveltekit()],
// };

// export default config;

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
});
