
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

const app = document.getElementById('app')

// TODO: Fix hot module replacement

createInertiaApp({
    page: app?.dataset.component,
    resolve: async(name) => (await import(`./pages/${name}.tsx`)).default,
    setup({ el, App, props }) {
        createRoot(el).render(createElement(App, props))
    },
})
