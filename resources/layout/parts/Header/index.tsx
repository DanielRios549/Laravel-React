import { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { useConfig } from '$/stores/config'
import style from './style.module.scss'

export default function Header() {
    const user = useConfig(({ config }) => config.user)
    const { title } = usePage().props as any

    const [userMenu, setUserMenu] = useState(false)

    const logout = () => {
        Inertia.delete(route('user/logout'))
    }

    return (
        <header className={style.header}>
            <h2>{title}</h2>
            <figure onClick={() => setUserMenu(!userMenu)}>
                <img src="/images/user.jpg" alt="user image"/>
            </figure>
            <section className={userMenu ? 'open' : ''}>
                <p>{user?.name}</p>
                <button onClick={logout}>Logout</button>
            </section>
        </header>
    )
}
