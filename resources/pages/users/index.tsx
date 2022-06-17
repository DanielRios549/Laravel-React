import Layout from '@/layout/Main'
import Table from '@/components/Table'
import type { PageProps } from '@/types/page'
import ListHeader from '@/components/ListHeader'

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
                            <td>{name}</td>
                            <td>{email}</td>
                        </tr>
                    ))}
                </Table>
            }
        </Layout>
    )
}
