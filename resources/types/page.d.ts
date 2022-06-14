import type { Client } from '@/types/client'

export interface AppProps {
    appName: string
    lang: string
}

export interface PageProps extends AppProps {
    title: string
    clients?: Client[]
    children: React.ReactNode
}