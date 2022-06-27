import { Link } from '@inertiajs/inertia-react'
import style from './style.module.scss'

type Props = {
    type: 'link' | 'submit' | 'reset'
    link?: string
    action?: () => void
    children: React.ReactNode
}

export default function Button(props: Props) {
    return (
        props.type === 'link'
        ?
        <Link className={style.button} href={props.link || "#"}>{props.children}</Link>
        :
        <button className={style.button} type={props.type} onClick={props.action}>{props.children}</button>
    )
}