import Layout from '$/layout/Main'
import Form from '$/components/Form'
import type { PageProps } from '$/types/page'

export default function NewUser(props: PageProps) {
    return (
        <Layout {...props}>
            <Form name="Create User" action="/users/new">
                <fieldset>
                    <legend><h2>User Info</h2></legend>

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>

                    <label htmlFor="email">Password:</label>
                    <input type="password" name="password" id="password"/>
                </fieldset>
            </Form>
        </Layout>
    )
}
