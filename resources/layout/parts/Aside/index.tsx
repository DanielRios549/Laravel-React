import { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import style from './style.module.scss'
import { useConfig } from '$/stores/config'
import type { IconType } from 'react-icons'

export default function Aside() {
    const [open, setOpen] = useState(false)
    const icons = useConfig(({ icons }) => icons)
    const Menu = icons['menu']

    const links: [string, string, IconType][] = [
        ['/', 'Home', icons['dash']],
        [route('clients'), 'Clients', icons['clients']],
        [route('about'), 'About', icons['about']]
    ]

    const current = (link: string) => {
        let check = link.split('/').at(-1)

        if (check?.trim() === '') {
            check = 'home'
        }

        return check === route().current()
    }

    return (
        <aside className={`${style.aside} ${open ? 'open' : ''}`}>
            <header>
                <h1>Mini CRM</h1>
                <button onClick={() => setOpen(!open)}>
                    <Menu/>
                </button>
            </header>
            <nav>
                <ul>
                    {links.map(([link, name, Icon], index) => (
                        <li className={current(link) ? style.active : ''} key={index}>
                            <Link href={link}>
                                <Icon/>
                                <span>{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}