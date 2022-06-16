import type { Message as MessageType } from '@/types/message'
import style from './style.module.scss'

type Props = {
    text: string
    type: keyof MessageType
}

export default function Message({ text, type }: Props) {
    return (
        <span className={`${style.message} ${style[type]}`}>{text}</span>
    )
}