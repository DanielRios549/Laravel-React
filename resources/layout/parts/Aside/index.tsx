import { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { useLocalStorage } from '$/lib/useStorage'
import style from './style.module.scss'
import { useConfig } from '$/stores/config'
import type { IconType } from 'react-icons'
import type { AppProps } from '$/types/page'

export default function Aside() {
    const [open, setOpen] = useState(false)
    const name = usePage().props.appName as string

    const icons = useConfig(({ icons }) => icons)
    const [theme, setTheme] = useLocalStorage<AppProps['theme']>('theme', 'light')

    const Icons = {
        Menu: icons.menu,
        Theme: icons[theme]
    }

    useEffect(() => {
        document.body.classList.add(theme)
    }, [theme])

    const links: [string, string, IconType][] = [
        ['/', 'Home', icons.dash],
        [route('clients'), 'Clients', icons.clients],
        [route('about'), 'About', icons.about]
    ]

    const current = (link: string) => {
        let check = link.split('/').at(-1)

        if (check?.trim() === '') {
            check = 'home'
        }

        return check === route().current()
    }

    const changeTheme = () => {
        document.body.classList.remove(theme)
        setTheme(theme !== 'dark' ? 'dark' : 'light')
    }

    return (
        <aside className={`${style.aside} ${open ? 'open' : ''}`}>
            <header>
                <h1>{name}</h1>
                <button onClick={changeTheme}><Icons.Theme/></button>
                <button onClick={() => setOpen(!open)}>
                    <Icons.Menu/>
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
