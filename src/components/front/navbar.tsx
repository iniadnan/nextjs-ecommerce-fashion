"use client"

import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { fontVarien, fontRoboto } from '@/styles/fonts';

export default function FrontNavbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const element = document.querySelector('nav');

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsSticky(entry.intersectionRatio < 1),
            { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className={clsx("sticky top-0 z-50 w-full transition-all duration-200", { 'px-0': isSticky, 'px-2.5 md:px-4': !isSticky })}>
            <div className={clsx("h-[70px] md:h-[92px] w-full bg-white", { 'rounded-0': isSticky, 'rounded-[16px] md:rounded-[20px]': !isSticky })}>
                <div className="container h-full flex items-center justify-between flex-nowrap">
                    <div className="hidden sm:block">
                        <h2 className={fontVarien.className}>
                            <Link href="/" className="text-lg md:text-[21px] lg:text-[24px] text-[#131313] uppercase">UrbanElegance</Link>
                        </h2>
                    </div>
                    <div className={`${fontRoboto.className} hidden md:flex items-center md:gap-x-6 lg:gap-x-8 md:text-base lg:text-lg text-[#131313]`}>
                        <Link href="/">Discover</Link>
                        <Link href="/">Product</Link>
                        <Link href="/">Mens</Link>
                        <Link href="/">Womens</Link>
                        <Link href="/">Kids</Link>
                    </div>
                    <div className="flex items-center gap-x-3 md:gap-x-4">
                        <div className="relative h-[40px] sm:h-[44px]">
                            <input
                                id="icon-username"
                                type="text"
                                placeholder="Search Outift"
                                className="h-full w-full text-base text-[#131313] placeholder:text-[#949494] pl-10 bg-[#F0F0F0] rounded-full peer"
                            />
                            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#949494] peer-focus:text-[#131313]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.58317 17.5001C13.9554 17.5001 17.4998 13.9557 17.4998 9.58341C17.4998 5.21116 13.9554 1.66675 9.58317 1.66675C5.21092 1.66675 1.6665 5.21116 1.6665 9.58341C1.6665 13.9557 5.21092 17.5001 9.58317 17.5001Z" stroke="currentcolor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.3332 18.3334L16.6665 16.6667" stroke="currentcolor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <button type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.80994 2L5.18994 5.63" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.1899 2L18.8099 5.63" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="#292D32" strokeWidth="1.5" />
                                <path d="M9.75977 14V17.55" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M14.3599 14V17.55" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.43994V9.76994" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M15.3299 18.8201C15.3299 20.6501 13.8299 22.1501 11.9999 22.1501C11.0899 22.1501 10.2499 21.7701 9.64992 21.1701C9.04992 20.5701 8.66992 19.7301 8.66992 18.8201" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
                            </svg>
                        </button>
                        <button type="button" className="md:hidden">
                            <Bars3Icon className="size-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
