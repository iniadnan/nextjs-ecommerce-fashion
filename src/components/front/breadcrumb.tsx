import Link from "next/link";

export default function Breadcrumb() {
    return (
        <div className="flex items-center gap-x-1 md:gap-x-2 font-medium text-xs sm:text-sm md:text-base text-[#A3A3A3]">
            <Link href="/">Home</Link>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 16L14 12L10 8" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/product">Product</Link>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 16L14 12L10 8" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/product" className="text-[#171717]">Hoodie</Link>
        </div>
    )
}