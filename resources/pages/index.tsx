import Layout from '@/layout/Main'
import type { PageProps } from '@/types/page'

export default function Home(props: PageProps) {
    return (
        <Layout {...props}>
            Home Page
        </Layout>
    )
}
