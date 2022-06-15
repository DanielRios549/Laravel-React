import { Inertia } from '@inertiajs/inertia'
import Button from '@/components/Button'
import style from './style.module.scss'

type Props = {
    name?: string
    action: string
    type?: 'add' | 'auth'
    children: React.ReactNode
}

export default function NewClient(props: Props) {
    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        Inertia.post(props.action || '', data)
    }
    return (
        <form
            className={`${props.type === 'auth' && style.auth} ${style.form}`}
            action=""
            method="POST"
            onSubmit={submit}>
            {props.children}

            <Button type="submit">{props.name}</Button>
        </form>
    )
}