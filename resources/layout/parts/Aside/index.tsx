import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import Dash from '$/icons/dashboard.svg'
import Menu from '$/icons/menu.svg'
import style from './style.module.scss'

export default function Aside() {
    const links = [
        ['/', 'Home', Dash],
        [route('clients'), 'Clients', Dash],
        [route('about'), 'About', Dash]
    ]

    const current = (link: string) => {
        let check = link.split('/').at(-1)

        if (check?.trim() === '') {
            check = 'home'
        }

        return check === route().current()
    }

    return (
        <aside className={style.aside}>
            <button onClick={(event) => event.currentTarget.classList.toggle('open')}><Menu/></button>
            <nav>
                <ul>
                    {links.map(([link, name, Icon], index) => (
                        <li className={current(link) ? style.active : ''} key={index}>
                            <Link href={link}>
                                <Icon/>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}