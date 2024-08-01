"use client"

import React, { useEffect, useRef, useState } from 'react';
import { fontVarien } from '@/styles/fonts';
import CardProduct from "@/components/front/cards/card-product";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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

export default function OurProdcutSwiper({ products }: { products: ProductProps[] }) {
    const swiperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                observer: true,
                resizeObserver: true,
                observeSlideChildren: true,
                navigation: {
                    nextEl: '.blog-swiper-button-next',
                    prevEl: '.blog-swiper-button-prev',
                },
                breakpoints: {
                    300: {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    1240: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }
            });

            return () => {
                swiper.destroy();
            };
        }
    }, []);
    return (
        <div className="w-full">
            <div className="container py-10 px-5 md:px-6 lg:px-6 xl:px-10">
                <h2 className={`${fontVarien.className} text-[40px] text-[#111111] mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10`}>Our Product</h2>
                <div ref={swiperRef} className="w-full swiper-container relative overflow-hidden">
                    <div className="swiper-wrapper">
                        {products.map((product: ProductProps) => (
                            <CardProduct isSwiper={true} key={product.id} title={product.name} image={product.image} slug={product.slug} category="" colors={product.colors} price={product.price} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}