import { Head } from '@inertiajs/inertia-react'
import Layout from '@/layout/Main'
import type { PageType } from '@/types/page'

export default function About(props: PageType) {
    return (
        <Layout>
            <Head title={props.title}/>
            About Page
        </Layout>
    )
}
