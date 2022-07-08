import Layout from '$/layout/Main'
import Form from '$/components/Form'
import UserForm from '$/forms/user'
import type { PageProps } from '$/types/page'
import type { User } from '$/types/user'

export default function EditUser(props: PageProps) {
    const data = props.data as User

    return (
        <Layout {...props}>
            {data.name
                ? <Form name="Edit User" action="/users/edit" delete={`/users/remove/${data.id}`}>
                    <UserForm {...data}/>
                </Form>
                : <span>Client Does not exists.</span>
            }
        </Layout>
    )
}
