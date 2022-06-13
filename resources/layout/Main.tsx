import Header from './parts/Header'
import Aside from './parts/Aside'
import '@/styles/app.scss'

type Props = {
    children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Header/>
            <Aside/>
            <main>
                {children}
            </main>
        </>
    )
}