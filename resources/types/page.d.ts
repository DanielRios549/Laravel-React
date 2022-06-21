import type { Items, ItemsCount } from '$/types/items'
import type { Client } from '$/types/client'
import type { User } from '$/types/user'
import type { Message } from '$/types/message'

export interface AppProps {
    appName: string
    lang: string
    user?: User
    message: Message
}

export interface PageProps extends AppProps {
    title: string
    children: React.ReactNode
    data?: object
    clients?: Client[]
    users?: User[]
    items?: Items[]
    itemsCount?: ItemsCount
}
