import { Head } from '@inertiajs/inertia-react'
import Header from './parts/Header'
import Aside from './parts/Aside'
import { useConfig } from '@/stores/config'
import type { PageProps } from '@/types/page'
import '@/styles/app.scss'

export default function MainLayout(props: PageProps) {
    const setConfig = useConfig(state => state.set)

    const { appName, lang, user } = props
    setConfig({ appName, lang, user })

    return (
        <>
            <Header/>
            <Head title={`${props.title} - ${appName}`}/>
            <Aside/>
            <main>
                {props.children}
            </main>
        </>
    )
}