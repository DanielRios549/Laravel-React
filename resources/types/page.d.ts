import type { Client } from '@/types/client'
import type { User } from '@/types/user'

export interface AppProps {
    appName: string
    lang: string
    user?: User
}

export interface PageProps extends AppProps {
    title: string
    clients?: Client[]
    children: React.ReactNode
}