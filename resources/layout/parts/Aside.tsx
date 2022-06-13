import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

export default function Aside() {
    const links = [
        [route('home'), 'Home'],
        [route('about'), 'About']
    ]
    return (
        <aside>
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}><Link href={link[0]}>{link[1]}</Link></li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}