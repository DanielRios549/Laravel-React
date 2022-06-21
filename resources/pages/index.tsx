import Layout from '$/layout/Main'
import Card from '$/components/Card'
import type { PageProps } from '$/types/page'

export default function Home(props: PageProps) {
    const count = props.itemsCount

    return (
        <Layout {...props}>
            <section className="cards">
                {count && Object.keys(count).map((item, index) => (
                    <Card key={index} name={item}>
                        <p>{count[item]}</p>
                    </Card>
                ))}
            </section>
        </Layout>
    )
}
