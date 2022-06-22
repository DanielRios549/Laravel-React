import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svg from 'vite-plugin-svgr'
import autoprefixer from 'autoprefixer'
import custommedia from 'postcss-custom-media'
import mediaminmax from 'postcss-media-minmax'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
                custommedia(),
                mediaminmax()
            ]
        }
    },
	plugins: [
        react(),
        svg({
            exportAsDefault: true,
            svgrOptions: {
                svgo: true,
                svgoConfig: {
                    multipass: true,
                    full: true
                }
            }
        }),
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
            '$': resolve(__dirname, 'resources')
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
