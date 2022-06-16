import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { useConfig } from '@/stores/config'
import style from './style.module.scss'

export default function Header() {
    const user = useConfig(({config}) => config.user)
    const { title } = usePage().props as any

    const logout = () => {
        Inertia.delete(route('user/logout'))
    }

    return (
        <header className={style.header}>
            <header>
                <h1>Mini CRM</h1>
                <h2>{title}</h2>
            </header>
            <section>
                <h3>{user?.name}</h3>
                <button onClick={logout}>Logout</button>
            </section>
        </header>
    );
}
