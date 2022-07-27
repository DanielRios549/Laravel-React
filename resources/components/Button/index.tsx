import { Link } from '@inertiajs/inertia-react'
import style from './style.module.scss'

type Props = {
    type: 'link' | 'submit' | 'reset'
    link?: string
    action?: () => void
    disabled?: boolean
    testid?: string
    children: React.ReactNode
}

export default function Button(props: Props) {
    return (
        props.type === 'link'
            ? <Link className={style.button} href={props.link || '#'} data-testid={props.testid}>
                {props.children}
            </Link>
            : <button className={style.button} type={props.type} onClick={props.action} data-testid={props.testid} disabled={props.disabled}>
                {props.children}
            </button>
    )
}
