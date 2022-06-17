import type { User } from '@/types/user'
import type { Client } from '@/types/client'

export type Items = {
    users: User[]
    clients: Client[]
}

export type ItemsCount = {
    [key in keyof Items]: number
}
