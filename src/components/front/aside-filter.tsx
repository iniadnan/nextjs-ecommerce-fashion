import Link from "next/link";

export default function AsideFilter() {
    return (
        <aside className="flex-none w-[267px] flex flex-col gap-y-6">
            <div>
                <h3 className="font-medium text-base text-[#151515] mb-4">Categories</h3>
                <div className="flex flex-col gap-y-3 text-[#111111]">
                    <Link href="/" className="flex items-start justify-between">
                        Hoodie
                        <span className="bg-[#FFEAE5] font-semibold text-xs text-[#EB4A26] py-2 px-4 rounded-full">320</span>
                    </Link>
                    <Link href="/" className="flex items-start justify-between">
                        Crop Top
                        <span className="bg-[#FFEAE5] font-semibold text-xs text-[#EB4A26] py-2 px-4 rounded-full">112</span>
                    </Link>
                    <Link href="/" className="flex items-start justify-between">
                        Jeans
                        <span className="bg-[#FFEAE5] font-semibold text-xs text-[#EB4A26] py-2 px-4 rounded-full">32</span>
                    </Link>
                    <Link href="/" className="flex items-start justify-between">
                        Blouse
                        <span className="bg-[#FFEAE5] font-semibold text-xs text-[#EB4A26] py-2 px-4 rounded-full">48</span>
                    </Link>
                </div>
            </div>
            <div className="h-px w-full bg-[#F4F6F8]"></div>
            <div>
                <h3 className="font-medium text-base text-[#151515] mb-4">Brands</h3>
                <div className="flex flex-col gap-y-4 text-[#111111]">
                    <Link href="/">Adidas</Link>
                    <Link href="/">33 Degrees</Link>
                    <Link href="/">108 Stitches</Link>
                    <Link href="/">Uniqlo</Link>
                    <Link href="/">Calvin Klein</Link>
                </div>
            </div>
            <div className="h-px w-full bg-[#F4F6F8]"></div>
            <div>
                <h3 className="font-medium text-base text-[#151515] mb-4">Color</h3>
                <div className="flex flex-wrap p-2">
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                    <Link href="/" className="h-[42px] w-[42px] flex items-center justify-center group">
                        <span className="inline-block h-[34px] w-[34px] transition-all duration-150 group-hover:h-full group-hover:w-full bg-[#F4DE6E] rounded-full"></span>
                    </Link>
                </div>
            </div>
            <div className="h-px w-full bg-[#F4F6F8]"></div>
            <div>
                <h3 className="font-medium text-base text-[#151515] mb-4">Price</h3>
            </div>
            <button type="button" className="w-full py-1.5 rounded-full border border-[#EB4A26] hover:bg-[#EB4A26] text-center font-medium text-sm text-[#EB4A26] hover:text-white">
                Apply Price
            </button>
        </aside>
    )
}