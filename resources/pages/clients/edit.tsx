import Layout from '$/layout/Main'
import Form from '$/components/Form'
import type { PageProps } from '$/types/page'
import type { Client } from '$/types/client'

export default function NewClient(props: PageProps) {
    const { id, name, email } = props.data as Client

    return (
        <Layout {...props}>
            {name
                ? <Form name="Edit User" action="/clients/edit" delete={`/clients/remove/${id}`}>
                    <fieldset>
                        <legend><h2>Client Info</h2></legend>
                        <input type="text" name="id" value={id} readOnly hidden/>

                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" defaultValue={name}/>

                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" defaultValue={email}/>
                    </fieldset>
                </Form>
                : <span>Client Does not exists.</span>
            }
        </Layout>
    )
}
