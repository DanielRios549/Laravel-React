import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import './index.css'

InertiaProgress.init()

createInertiaApp({
    id: 'app',
    resolve: (name: string) => {
        const pages = import.meta.glob('./pages/**/*.tsx')

        for (const path in pages) {
            if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
            return typeof pages[path] === 'function'
                ? pages[path]()
                : pages[path]
            }
        }

        throw new Error(`Page not found: ${name}`)
    },
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})
