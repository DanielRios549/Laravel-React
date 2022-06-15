import Form from '@/components/Form'
import type { PageProps } from '@/types/page'
import '@/styles/app.scss'

export default function Login(props: PageProps) {
    return (
        <main>
            <Form type="auth" name="Login" action="/login">
                <fieldset>
                    <legend><h1>Login Page</h1></legend>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </fieldset>
            </Form>
        </main>
    )
}
