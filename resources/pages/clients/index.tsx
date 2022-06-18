import { Link } from '@inertiajs/inertia-react'
import Layout from '@/layout/Main'
import Table from '@/components/Table'
import ListHeader from '@/components/ListHeader'
import type { PageProps } from '@/types/page'

export default function Clients(props: PageProps) {
    const clients = props.clients || []

    return (
        <Layout {...props}>
            <ListHeader title='Clients' filter={clients?.length >= 1}/>
            {clients?.length < 1
                ?
                <p>No Clients</p>
                :
                <Table columns={['Name', 'Email']}>
                    {clients?.map(({ id, name, email }) => (
                        <tr key={id}>
                            <td><Link href={`/clients/${id}`}>{name}</Link></td>
                            <td><Link href={`/clients/${id}`}>{email}</Link></td>
                        </tr>
                    ))}
                </Table>
            }
        </Layout>
    )
}
