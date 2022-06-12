
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

// TODO: Fix page typings
// TODO: Fix hot module replacement

createInertiaApp({
    page: {
        url: '/'
    },
    resolve: async(name) => {
        const name2 = 'index'
        const page = (await import(`./pages/${name2}.tsx`)).default

        // TODO: Figure out why name is undefined
        console.log('Name: ', name)

        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(createElement(App, props))
    },
})
