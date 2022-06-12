import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import Autoprefixer from 'autoprefixer'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
	plugins: [
        react(),
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        }
	],
    base: command == 'serve' ? '' : '/build/',
    publicDir: false,
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/main.tsx'
        }
    },
    server: {
        strictPort: true,
        port: 3000
    },
    resolve: {
        alias: {
            '$components': resolve(__dirname, 'resources/components')
        }
    },
    optimizeDeps: {
        include: [
          'react',
          '@inertiajs/inertia',
          '@inertiajs/inertia-react'
        ]
    }
}))
