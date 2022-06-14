import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import style from './style.module.scss'

type Props = {
    title: string
}

export default function ListHeader(props: Props) {
    const link = route(`${props.title.toLowerCase()}/new`)

    return (
        <header className={style.header}>
            <h2>{props.title}</h2>
            <Link href={link}>Novo</Link>
        </header>
    )
}