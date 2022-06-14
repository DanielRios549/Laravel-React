import Button from '@/components/Button'
import style from './style.module.scss'

type Props = {
    name?: string
    children: React.ReactNode
}

export default function NewClient(props: Props) {
    return (
        <form className={style.form} action="" method="post">
            {props.children}
            <Button type="submit">Create {props.name}</Button>
        </form>
    )
}