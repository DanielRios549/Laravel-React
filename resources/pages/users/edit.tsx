import Layout from '$/layout/Main'
import UserForm from '$/forms/user'
import type { PageProps } from '$/types/page'
import type { User } from '$/types/user'

export default function EditUser(props: PageProps) {
    const data = {
        name: 'Edit User',
        action: '/users/edit',
        delete: '/users/remove',
        data: props.data as User
    }

    return (
        <Layout {...props}>
            {data.name
                ? <UserForm {...data}/>
                : <span>Client Does not exists.</span>
            }
        </Layout>
    )
}
