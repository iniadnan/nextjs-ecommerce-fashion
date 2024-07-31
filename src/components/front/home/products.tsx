import CardProduct from "../cards/card-product"

type ProductProps = {
    id: number,
    name: string,
    brandId: number,
    categoryId: number,
    description: string,
    price: number,
    image: string,
    created_at: string,
    total_buy: number,
    colors: string[],
    slug: string,
}

export default function FrontHomeProducts({ products }: { products: ProductProps[] }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product: ProductProps) => (
                <CardProduct key={product.id} title={product.name} image={product.image} slug={product.slug} category="" colors={product.colors} price={product.price} />
            ))}
        </section>
    )
}