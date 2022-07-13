import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { useConfig } from '$/stores/config'
import Button from '$/components/Button'
import Message from '$/components/Message'
import style from './style.module.scss'

type Props = {
    name?: string
    action: string
    type?: 'add' | 'auth'
    delete?: string
    children: React.ReactNode
    submit?: (event: any) => void
    testid?: string
}

export default function Form(props: Props) {
    const { error, success, form } = useConfig(({ config }) => config.message) || {}
    const { url } = usePage()

    // Used in pages where two or more form are displayed
    // At this point, only in login page
    const explicitForm = (url === '/login' && form) ? form === props.name : true

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        Inertia.post(props.action || '', data)
    }

    const remove = () => {
        const confirmation = window.confirm('Continue? ')

        confirmation && Inertia.delete(props.delete || '')
    }

    return (
        <form
            data-testid={props.testid}
            className={`${props.type === 'auth' && style.auth} ${style.form}`}
            action={props.action}
            method="POST"
            onSubmit={props.submit || submit}>

            {(explicitForm && error) && <Message text={error} type="error"/>}
            {(explicitForm && success) && <Message text={success} type="success"/>}

            {props.children}

            <fieldset>
                {props.delete && <Button type="reset" action={remove}>Delete</Button>}
                <Button type="submit">{props.name}</Button>
            </fieldset>
        </form>
    )
}
