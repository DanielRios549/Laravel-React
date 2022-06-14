
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

const app = document.getElementById('app')

// TODO: Fix hot module replacement

createInertiaApp({
    page: app?.dataset.component,
    resolve: async(name) => {
        let page = null

        try {
            page = (await import(`./pages/${name}.tsx`)).default
        }
        catch {
            page = (await import(`./pages/${name}/index.tsx`)).default
        }

        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <App {...props}/>
            </React.StrictMode>
        )
    },
})
