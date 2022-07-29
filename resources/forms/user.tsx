import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Form from '$/components/Form'
import type { User } from '$/types/user'

interface Props {
    name: string
    action: string
    delete?: string
    data?: Partial<User>
}

export default function UserForm(props: Props) {
    const { id, name, email } = props?.data || {}

    const schema = {
        name: Yup.string().required('You need to choose a name'),
        email: Yup.string().required('You need to choose an email').email('Choose a valid email, please'),
        password: Yup.number().required('You need to choose a password').min(8, 'The password should have at least 8 characters.')
    }

    return (
        <Form name={props.name} action={props.action} delete={`${props?.delete}/${id}`} validate={schema}>
            <fieldset>
                <legend><h2>User Info</h2></legend>
                {id && <input type="text" name="id" value={id} readOnly hidden/>}

                <label htmlFor="name">Name:</label>
                <Field type="text" name="name" id="name" defaultValue={name}/>
                <ErrorMessage name="name" component="span"/>

                <label htmlFor="email">Email:</label>
                <Field type="text" name="email" id="email" defaultValue={email}/>
                <ErrorMessage name="email" component="span"/>

                <label htmlFor="email">Password:</label>
                <Field type="password" name="password" id="password"/>
                <ErrorMessage name="password" component="span"/>
            </fieldset>
        </Form>
    )
}
