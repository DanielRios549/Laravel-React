import { Head } from '@inertiajs/inertia-react'
import Layout from '@/layout/Main'
import type { PageType } from '@/types/page'

export default function Home(props: PageType) {
    return (
        <Layout>
            <Head title={props.title}/>
            Home Page
        </Layout>
    )
}
