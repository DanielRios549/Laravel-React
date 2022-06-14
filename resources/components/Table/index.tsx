import style from './style.module.scss'

type Props = {
    columns: string[]
    children: React.ReactNode
}

export default function Table(props: Props) {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    {props.columns.map((column) => (
                        <th key={Math.random()}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}