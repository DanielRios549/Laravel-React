import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Button from '$/components/Button'
import style from './style.module.scss'

type Props = {
    title: string
    filter?: boolean
}

export default function ListHeader(props: Props) {
    const current = props.title.toLowerCase()
    const link = route(`${current}/new`)
    const search = new URLSearchParams(location.search).get('filter') || ''

    const filter = (event: any) => {
        const value = event.target.value
        let url = route(current, { filter: value })

        if (value === '') {
            url = route(`${current}`)
        }

        Inertia.get(url)
    }

    return (
        <section className={style.header}>
            <input type="texta"
                autoFocus
                placeholder="Filter"
                value={search}
                onChange={filter}
            />
            <Button type="link" link={link}>New</Button>
        </section>
    )
}