import Layout from '$/layout/Main'
import Form from '$/components/Form'
import type { PageProps } from '$/types/page'

export default function NewClient(props: PageProps) {
    return (
        <Layout {...props}>
            <Form name="Create Client" action="/clients/new">
                <fieldset>
                    <legend><h2>Client Info</h2></legend>

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </fieldset>
            </Form>
        </Layout>
    )
}
