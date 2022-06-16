import { Inertia } from '@inertiajs/inertia'
import { useConfig } from '@/stores/config'
import Button from '@/components/Button'
import Message from '@/components/Message'
import style from './style.module.scss'

type Props = {
    name?: string
    action: string
    type?: 'add' | 'auth'
    children: React.ReactNode
}

export default function NewClient(props: Props) {
    const { error, success } = useConfig(({config}) => config.message)

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        Inertia.post(props.action || '', data)
    }
    return (
        <>
            {error && <Message text={error} type="error"/>}
            {success && <Message text={success} type="success"/>}
            <form
                className={`${props.type === 'auth' && style.auth} ${style.form}`}
                action={props.action}
                method="POST"
                onSubmit={submit}>
                {props.children}

                <Button type="submit">{props.name}</Button>
            </form>
        </>
    )
}