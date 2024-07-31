import AsideFilter from "@/components/front/aside-filter";
import Breadcrumb from "@/components/front/breadcrumb";
import CardProduct from "@/components/front/cards/card-product";
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
                <div className="container py-6 md:gap-x-6 md:px-5 lg:px-6 xl:px-10">
                    <Breadcrumb />
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
                        <h1 className="text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] text-[#171717] leading-[40px]">Search Result (48) <span className="text-[#E16F3D]">“Casual”</span></h1>
                        <div className="flex items-center gap-x-2 relative mt-5 md:mt-0">
                            <button type="button" className="font-medium text-sm md:text-base inline-flex md:hidden gap-x-2 border border-[#E5E5E5] rounded-[24px] py-2 md:py-3 px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                                Filter
                            </button>
                            <button type="button" className="font-medium text-sm md:text-base inline-flex gap-x-2 border border-[#E5E5E5] rounded-[24px] py-2 md:py-3 px-5">
                                Sort By
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10L12 14L16 10" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
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