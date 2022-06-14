import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import style from './style.module.scss'

export default function Aside() {
    const links = [
        ['/', 'Home'],
        [route('clients'), 'Clients'],
        [route('about'), 'About']
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
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li className={current(link[0]) ? style.active : ''} key={index}>
                            <Link href={link[0]}>
                                {link[1]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}