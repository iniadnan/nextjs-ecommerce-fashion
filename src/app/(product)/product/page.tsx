import AsideFilter from "@/components/front/aside-filter";
import Breadcrumb from "@/components/front/breadcrumb";
import CardProduct from "@/components/front/cards/card-product";
import FrontProductsFilter from "@/components/front/home/products-filter";
import Pagination from "@/components/front/pagination";
import type { Metadata } from "next";
import { promises as fs } from 'fs';

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

export const metadata: Metadata = {
    title: "Products Fashion"
};

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/src/data/index.json', 'utf8');
    const { brands, categories, products } = JSON.parse(file);
    const showProducts = products.slice(0, 6);
    return (
        <>
            <section className="w-full">
                <div className="container py-6 md:gap-x-6 px-5 md:px-6 lg:px-8 xl:px-10">
                    <Breadcrumb />
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
                        <h1 className="text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] text-[#171717] leading-[40px]">Search Result (48) <span className="text-[#E16F3D]">“Casual”</span></h1>
                        <FrontProductsFilter isShowCategory={false} isShowShortBy={true} isShowFilter={false} />
                    </div>
                </div>
            </section>
            <div className="w-full px-4 pt-10 pb-16">
                <div className="container flex flex-nowrap items-start md:gap-x-6 md:px-5 lg:px-6 xl:px-10">
                    <AsideFilter />
                    <div className="hidden md:block flex-none h-full w-px bg-[#EFEFEF]"></div>
                    <main className="grow">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4 mb-10">
                            {showProducts.map((product: ProductProps) => (
                                <CardProduct key={product.id} title={product.name} image={product.image} slug={product.slug} category="" colors={product.colors} price={product.price} />
                            ))}
                        </div>
                        <Pagination />
                    </main>
                </div>
            </div>
        </>
    )
}