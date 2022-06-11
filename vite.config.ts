import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Autoprefixer from 'autoprefixer'
import laravel from 'vite-plugin-laravel'

export default defineConfig({
	plugins: [
        react(),
		laravel({
			postcss: [
				Autoprefixer(),
			],
		}),
	],
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/main.tsx',
        },
    },
})
