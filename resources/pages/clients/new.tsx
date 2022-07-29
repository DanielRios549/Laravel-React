import Layout from '$/layout/Main'
import ClientForm from '$/forms/client'
import type { PageProps } from '$/types/page'

export default function NewClient(props: PageProps) {
    const data = {
        name: 'Create Client',
        action: '/clients/new'
    }

    return (
        <Layout {...props}>
            <ClientForm {...data}/>
        </Layout>
    )
}
