import Layout from '@/layout/Main'
import Table from '@/components/Table'
import type { PageProps } from '@/types/page'
import ListHeader from '@/components/ListHeader'

export default function Clients(props: PageProps) {
    const clients = props.clients || []

    return (
        <Layout {...props}>
            <ListHeader title='Clients'/>
            {clients?.length < 1
                ?
                <p>No Clients</p>
                :
                <Table columns={['Name', 'Email']}>
                    {clients?.map(({id, name, email}) => (
                        <tr key={id}><td>{name}</td><td>{email}</td></tr>
                    ))}
                </Table>
            }
        </Layout>
    )
}
