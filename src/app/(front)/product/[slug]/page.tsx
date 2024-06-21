import Breadcrumb from "@/components/front/breadcrumb";
import CardProduct from "@/components/front/cards/card-product";
import { fontVarien } from '@/styles/fonts';

export default function Page() {
    return (
        <>
            <div className="w-full px-4">
                <div className="w-full py-6 px-10">
                    <Breadcrumb />
                </div>
            </div>
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