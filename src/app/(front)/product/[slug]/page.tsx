import Breadcrumb from "@/components/front/breadcrumb";
import ButtonColor from "@/components/front/buttons/button-color";
import CardProduct from "@/components/front/cards/card-product";
import { fontVarien } from '@/styles/fonts';
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Detail Product -"
};

export default function Page() {
    return (
        <>
            <div className="w-full px-4">
                <div className="w-full py-6 px-10">
                    <Breadcrumb />
                </div>
            </div>
            {/* MAIN PRODUCT */}
            <main className="w-full px-4">
                <div className="w-full flex flex-nowrap gap-x-10 py-6 px-10">
                    <div className="flex-none w-[650px]">
                        <Image className="h-full w-full object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/2bd7f1f53dbd0b611e9e1006b243f782.png`} height={622} width={485} alt={"Hello"} />
                    </div>
                    <div className="grow text-[#111111] mb-4">
                        <section className="flex flex-col gap-y-4 mb-4">
                            <h2 className="font-semibold text-lg">Uniqlo</h2>
                            <h1 className="font-bold text-[28px] leading-[33.89px]">UNIQLO U WIDE FIT PARACHUTE CARGO PANTS</h1>
                            <p className="font-bold text-[24px]">$59.90</p>
                        </section>
                        <div className="mb-4">
                            <h3 className="font-semibold text-base mb-4">Product Information</h3>
                            <p className="text-[#7E7E7E]">The Uniqlo U collection is the realization of a dedicated and skilled team of international designers based at our Paris Research and Development Center led by Artistic Director Christophe Lemaire.</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-medium text-lg mb-3">Colour: <strong>Natural</strong></p>
                            <div className="flex items-center gap-3">
                                <ButtonColor title="Beiga" color="bg-[#F2D7A1]" />
                                <ButtonColor title="Black" color="bg-[#000000]" />
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="font-medium text-lg mb-3">Size: <strong>XXL</strong></p>
                            <div className="flex items-center gap-3">
                                <button className="h-[45px] w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] rounded-[35px]" type="button">M</button>
                                <button className="h-[45px] w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] rounded-[35px]" type="button">L</button>
                                <button className="h-[45px] w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] rounded-[35px]" type="button">XL</button>
                                <button className="h-[45px] w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] rounded-[35px]" type="button">XXL</button>
                            </div>
                        </div>
                        <div className="flex flex-nowrap items-center gap-x-4 font-medium text-base mb-8">
                            <button type="button" className="h-[43px] w-1/2 text-[#EB4A26] border border-[#EB4A26] rounded-full">Add To Wishlist</button>
                            <button type="button" className="h-[43px] w-1/2 bg-[#EB4A26] text-white border border-[#EB4A26] rounded-full">Buy Now</button>
                        </div>
                        <div className="flex items-center font-medium text-base text-[#A3A3A3] border-b border-red-400 mb-8">
                            <button type="button" className="h-[48px] px-5">Details</button>
                            <button type="button" className="h-[48px] px-5">Reviews</button>
                            <button type="button" className="h-[48px] px-5">Discussion</button>
                        </div>
                        <div className="mb-8">
                            <h3 className="font-medium mb-4">Description</h3>
                            <div className="text-sm text-[#7E7E7E]">
                                <p>The Uniqlo U collection is the realization of a dedicated and skilled team of international designers based at our Paris Research and Development Center led by Artistic Director Christophe Lemaire.</p><br />
                                <p>- Cotton-nylon fabric.</p>
                                <p>- Voluminous wide cut with tucks.</p>
                                <p>- Comfortable elastic waist with a relaxed feel.</p>
                                <p>- Paneled fabric and darts at the knees for easy
                                    movement.</p>
                                <p>- Gusseted cargo pockets offer plenty of storage.</p>
                                <p>- Adjust the hems to create your own style.</p>
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="font-medium mb-4">Size</p>
                            <Image className="w-full h-auto" src="/images/product-size.png" height={181} width={644} alt="Size Product" />
                        </div>
                    </div>
                </div>
            </main>
            {/* OUR PRODUCT */}
            <div className="w-full px-4">
                <div className="w-full py-10">
                    <h2 className={`${fontVarien.className} text-[40px] text-[#111111] mb-10`}></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <CardProduct title="UNIQLO METAL GEAR UT (SHORT SLEEVE GRAPHIC T-SHIRT" image="2bd7f1f53dbd0b611e9e1006b243f782.png" slug="" category="Tshirt" colors={["bg-[#000000]", "bg-[#1F2E94]", "bg-[#E2DBCA]"]} price="$12.90" />
                        <CardProduct title="UNIQLO METAL GEAR UT (SHORT SLEEVE GRAPHIC T-SHIRT" image="2bd7f1f53dbd0b611e9e1006b243f782.png" slug="" category="Tshirt" colors={["bg-[#000000]", "bg-[#1F2E94]", "bg-[#E2DBCA]"]} price="$12.90" />
                        <CardProduct title="UNIQLO METAL GEAR UT (SHORT SLEEVE GRAPHIC T-SHIRT" image="2bd7f1f53dbd0b611e9e1006b243f782.png" slug="" category="Tshirt" colors={["bg-[#000000]", "bg-[#1F2E94]", "bg-[#E2DBCA]"]} price="$12.90" />
                    </div>
                </div>
            </div>
        </>
    )
}