import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

export default function Menu() {
    const links = [
        [route('home'), 'Home'],
        [route('about'), 'About']
    ]
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}><Link href={link[0]}>{link[1]}</Link></li>
                ))}
            </ul>
        </nav>
    )
}
