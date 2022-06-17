import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import style from './style.module.scss'

type Props = {
    name: string
    children?: React.ReactNode
}

export default function Card({ name, children }: Props) {
    return (
        <article className={style.card} onClick={() => Inertia.get(route(name))}>
            <header><h2>{name}</h2></header>
            {children}
        </article>
    )
}
