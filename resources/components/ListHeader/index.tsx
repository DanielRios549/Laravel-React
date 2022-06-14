import style from './style.module.scss'

export default function ListHeader() {
    return (
        <header className={style.header}>
            <h1>Clients</h1>
            <a href="./new">Novo</a>
        </header>
    )
}