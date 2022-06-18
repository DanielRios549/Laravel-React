import Layout from '@/layout/Main'
import Form from '@/components/Form'
import type { PageProps } from '@/types/page'
import type { User } from '@/types/user'

export default function EditUser(props: PageProps) {
    const { id, name, email } = props.data as User

    return (
        <Layout {...props}>
            <Form name="Edit User" action="/users/edit">
                <fieldset>
                    <legend><h2>User Info</h2></legend>
                    <input type="text" name="id" value={id} readOnly hidden/>

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" defaultValue={name}/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" defaultValue={email}/>

                    <label htmlFor="email">Password:</label>
                    <input type="password" name="password" id="password"/>
                </fieldset>
            </Form>
        </Layout>
    )
}
