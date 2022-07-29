import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Form from '$/components/Form'
import type { Client } from '$/types/client'

interface Props {
    name: string
    action: string
    delete?: string
    data?: Partial<Client>
}

export default function ClientForm(props: Props) {
    const { id, name, email } = props?.data || {}
    const remove = props?.delete && `${props?.delete}/${id}`

    const schema = {
        name: Yup.string().required('You need to choose a name'),
        email: Yup.string().required('You need to choose an email').email('Choose a valid email, please')
    }

    return (
        <Form name={props.name} action={props.action} delete={remove} validate={schema}>
            <fieldset>
                <legend><h2>Client Info</h2></legend>
                {id && <input type="text" name="id" value={id} readOnly hidden/>}

                <label htmlFor="name">Name:</label>
                <Field type="text" name="name" id="name" defaultValue={name}/>
                <ErrorMessage name="name" component="span"/>

                <label htmlFor="email">Email:</label>
                <Field type="text" name="email" id="email" defaultValue={email}/>
                <ErrorMessage name="email" component="span"/>
            </fieldset>
        </Form>
    )
}
