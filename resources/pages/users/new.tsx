import Layout from '$/layout/Main'
import UserForm from '$/forms/user'
import type { PageProps } from '$/types/page'

export default function NewUser(props: PageProps) {
    const data = {
        name: 'Create User',
        action: '/users/new'
    }

    return (
        <Layout {...props}>
            <UserForm {...data}/>
        </Layout>
    )
}
