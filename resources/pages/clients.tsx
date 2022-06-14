import Layout from '@/layout/Main'
import type { PageProps } from '@/types/page'

export default function Clients(props: PageProps) {
    const clients = props.clients

    return (
        <Layout {...props}>
            {clients?.map(({id, name, email}) => (
                <p key={id}>{name} - {email}</p>
            ))}
        </Layout>
    )
}
