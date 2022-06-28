import { Head } from '@inertiajs/inertia-react'
import Common from '$/layout/Common'
import Header from './parts/Header'
import Aside from './parts/Aside'
import type { PageProps } from '$/types/page'
import '$/styles/app.scss'

export default function MainLayout(props: PageProps) {
    return (
        <>
            <Common {...props}/>
            <Header/>
            <Head title={`${props.title} - ${props.appName}`}/>
            <Aside/>
            <main>
                {props.children}
            </main>
        </>
    )
}
