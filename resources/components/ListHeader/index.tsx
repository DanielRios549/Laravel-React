import route from 'ziggy-js'
import Button from '@/components/Button'
import style from './style.module.scss'

type Props = {
    title: string
    filter?: boolean
}

export default function ListHeader(props: Props) {
    const link = route(`${props.title.toLowerCase()}/new`)

    return (
        <section className={style.header}>
            {props.filter && <input type="text" placeholder="Filter"/>}
            <Button type="link" link={link}>New</Button>
        </section>
    )
}