import Layout from '$/layout/Main'
import Form from '$/components/Form'
import ClientForm from '$/forms/client'
import type { PageProps } from '$/types/page'

export default function NewClient(props: PageProps) {
    return (
        <Layout {...props}>
            <Form name="Create Client" action="/clients/new">
                <ClientForm/>
            </Form>
        </Layout>
    )
}
