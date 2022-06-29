import Common from '$/layout/Common'
import Form from '$/components/Form'
import type { PageProps } from '$/types/page'
import '$/styles/guest.scss'

export default function Login(props: PageProps) {
    return (
        <>
            <Common {...props}/>
            <Form type="auth" name="Login" action="/login">
                <fieldset>
                    <legend><h1>Login</h1></legend>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </fieldset>
            </Form>
            <Form type="auth" name="Sign Up" action="/signup">
                <fieldset>
                    <legend><h1>Sign Up</h1></legend>

                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" id="name"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </fieldset>
            </Form>
        </>
    )
}
