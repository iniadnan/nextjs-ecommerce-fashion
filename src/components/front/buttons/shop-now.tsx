import Link from "next/link";

export default function ShopNow({ text, link, classList }: { text: string, link: string, classList: string }) {
    return (
        <div className={`relative border border-[#070707] rounded-full overflow-hidden ${classList}`}>
            <Link href={link} className="h-full w-full relative z-10 inline-flex justify-center items-center gap-x-2 font-semibold text-base text-[#070707] group-hover:text-white">
                {text}
                <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2499 6V15.75C19.2499 15.9489 19.1709 16.1397 19.0303 16.2803C18.8896 16.421 18.6988 16.5 18.4999 16.5C18.301 16.5 18.1103 16.421 17.9696 16.2803C17.8289 16.1397 17.7499 15.9489 17.7499 15.75V7.81031L7.03055 18.5306C6.88982 18.6714 6.69895 18.7504 6.49993 18.7504C6.30091 18.7504 6.11003 18.6714 5.9693 18.5306C5.82857 18.3899 5.74951 18.199 5.74951 18C5.74951 17.801 5.82857 17.6101 5.9693 17.4694L16.6896 6.75H8.74993C8.55102 6.75 8.36025 6.67098 8.2196 6.53033C8.07895 6.38968 7.99993 6.19891 7.99993 6C7.99993 5.80109 8.07895 5.61032 8.2196 5.46967C8.36025 5.32902 8.55102 5.25 8.74993 5.25H18.4999C18.6988 5.25 18.8896 5.32902 19.0303 5.46967C19.1709 5.61032 19.2499 5.80109 19.2499 6Z" fill="currentcolor" />
                </svg>
            </Link>
            <span className="absolute top-full left-0 h-full w-full bg-black transform transition-all duration-200 group-hover:top-0"></span>
        </div>
    )
}