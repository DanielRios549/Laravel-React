import { Link } from '@inertiajs/inertia-react'
import Layout from '@/layout/Main'
import Table from '@/components/Table'
import ListHeader from '@/components/ListHeader'
import type { PageProps } from '@/types/page'

export default function Clients(props: PageProps) {
    const users = props.users || []

    return (
        <Layout {...props}>
            <ListHeader title='Users' filter={users?.length >= 1}/>
            {users?.length < 1
                ?
                <p>No User</p>
                :
                <Table columns={['Name', 'Email']}>
                    {users?.map(({ id, name, email }) => (
                        <tr key={id}>
                            <td><Link href={`/users/${id}`}>{name}</Link></td>
                            <td><Link href={`/users/${id}`}>{email}</Link></td>
                        </tr>
                    ))}
                </Table>
            }
        </Layout>
    )
}
