import Layout from '$/layout/Main'
import ClientForm from '$/forms/client'
import type { PageProps } from '$/types/page'
import type { Client } from '$/types/client'

export default function NewClient(props: PageProps) {
    const data = {
        name: 'Edit Client',
        action: '/clients/edit',
        delete: '/clients/remove',
        data: props.data as Client
    }

    return (
        <Layout {...props}>
            {data.name
                ? <ClientForm {...data}/>
                : <span>Client Does not exists.</span>
            }
        </Layout>
    )
}
