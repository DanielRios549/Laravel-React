export interface AppProps {
    appName: string
    lang: string
}

export interface PageProps extends AppProps {
    title: string
    children: React.ReactNode
}