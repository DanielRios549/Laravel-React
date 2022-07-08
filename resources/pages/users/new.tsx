import Layout from '$/layout/Main'
import Form from '$/components/Form'
import UserForm from '$/forms/user'
import type { PageProps } from '$/types/page'

export default function NewUser(props: PageProps) {
    return (
        <Layout {...props}>
            <Form name="Create User" action="/users/new">
                <UserForm/>
            </Form>
        </Layout>
    )
}
