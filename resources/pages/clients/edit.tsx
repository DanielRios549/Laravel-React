import Layout from '$/layout/Main'
import Form from '$/components/Form'
import ClientForm from '$/forms/client'
import type { PageProps } from '$/types/page'
import type { Client } from '$/types/client'

export default function NewClient(props: PageProps) {
    const data = props.data as Client

    return (
        <Layout {...props}>
            {data.name
                ? <Form name="Edit User" action="/clients/edit" delete={`/clients/remove/${data.id}`}>
                    <ClientForm {...data}/>
                </Form>
                : <span>Client Does not exists.</span>
            }
        </Layout>
    )
}
