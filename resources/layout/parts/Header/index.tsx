import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { clickToggle } from '$/lib/clickToggle'
import { useConfig } from '$/stores/config'
import style from './style.module.scss'

export default function Header() {
    const user = useConfig(({ config }) => config.user)
    const { title } = usePage().props as any

    const logout = () => {
        Inertia.delete(route('user/logout'))
    }

    return (
        <header className={style.header}>
            <h2>{title}</h2>
            <figure onClick={(event) => clickToggle(event, 'next')}>
                <img src="/images/user.jpg" alt="user image"/>
            </figure>
            <section>
                <p>{user?.name}</p>
                <button onClick={logout}>Logout</button>
            </section>
        </header>
    )
}
