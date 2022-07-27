import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Common from '$/layout/Common'
import Form from '$/components/Form'
import type { PageProps } from '$/types/page'
import '$/styles/guest.scss'

export default function Login(props: PageProps) {
    const error = {
        nameRequired: 'A Name is required',
        emailRequired: 'A Email is required',
        emailValid: 'Choose a valid email, please',
        passRequired: 'Choose a password, please',
        passValid: 'A password should have at least 8 characters'
    }
    const validate = {
        login: {
            email: Yup.string().required(error.emailRequired).email(error.emailValid),
            password: Yup.string().required(error.passRequired).min(8, error.passValid)
        },
        signup: {
            name: Yup.string().required(error.nameRequired),
            email: Yup.string().required(error.emailRequired).email(error.emailValid),
            password: Yup.string().required(error.passRequired).min(8, error.passValid)
        }
    }
    return (
        <>
            <Common {...props}/>
            <Form type="auth" name="Login" action="/login" validate={validate.login}>
                <fieldset>
                    <legend><h1>Login</h1></legend>

                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email"/>
                    <ErrorMessage name="email" component="span"/>

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password"/>
                    <ErrorMessage name="password" component="span"/>
                </fieldset>
            </Form>
            <Form type="auth" name="Sign Up" action="/signup" validate={validate.signup}>
                <fieldset>
                    <legend><h1>Sign Up</h1></legend>

                    <label htmlFor="name">Name</label>
                    <Field type="name" name="name" id="name"/>
                    <ErrorMessage name="name" component="span"/>

                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email"/>
                    <ErrorMessage name="email" component="span"/>

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password"/>
                    <ErrorMessage name="password" component="span"/>
                </fieldset>
            </Form>
        </>
    )
}
