import Layout from '$/layout/Main'
import Card from '$/components/Card'
import type { PageProps } from '$/types/page'
import type { Items } from '$/types/items'

export default function Home(props: PageProps) {
    const count = props.itemsCount
    const cards = count && Object.keys(count) as [keyof Items]

    return (
        <Layout {...props}>
            <section className="cards">
                {cards && cards.map((item, index) => (
                    <Card key={index} name={item}>
                        <p>{count[item]}</p>
                    </Card>
                ))}
            </section>
        </Layout>
    )
}
