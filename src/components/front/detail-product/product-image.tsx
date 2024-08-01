"use client"

import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function ProductImage({ imagePrimary }: { imagePrimary: string }) {
    const swiperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                spaceBetween: 16,
                observer: true,
                resizeObserver: true,
                observeSlideChildren: true,
                breakpoints: {
                    300: {
                        slidesPerView: 3,
                        direction: "horizontal",
                        spaceBetween: 14,
                    },
                    768: {
                        slidesPerView: 4,
                        direction: "horizontal",
                        spaceBetween: 14,
                    },
                    1024: {
                        direction: "vertical",
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    1240: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    }
                }
            });

            return () => {
                swiper.destroy();
            };
        }
    }, []);
    return (
        <div className="flex-none flex flex-wrap md:flex-nowrap gap-x-4 h-auto md:h-[500px] lg:h-[580px] xl:h-[662px] w-full md:w-[500px] lg:w-[580px] xl:w-[650px]">
            <div className="order-2 md:order-1 flex md:flex-col gap-4 flex-wrap flex-none w-full md:w-[143px]">
                <div className="w-full h-full relative">
                    <div ref={swiperRef} className="h-full w-full swiper-container relative overflow-hidden">
                        <div className="swiper-wrapper">
                            <Image className="swiper-slide cursor-pointer w-[143px] object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/product-1.jpg`} height={622} width={485} alt="Image" />
                            <Image className="swiper-slide cursor-pointer w-[143px] object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/product-2.jpg`} height={622} width={485} alt="Image" />
                            <Image className="swiper-slide cursor-pointer w-[143px] object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/product-3.jpg`} height={622} width={485} alt="Image" />
                            <Image className="swiper-slide cursor-pointer w-[143px] object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/product-4.jpg`} height={622} width={485} alt="Image" />
                            <Image className="swiper-slide cursor-pointer w-[143px] object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/product-5.jpg`} height={622} width={485} alt="Image" />
                            <Image className="swiper-slide cursor-pointer w-[143px] object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/product-6.jpg`} height={622} width={485} alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[400px] md:h-[500px] lg:h-[580px] xl:h-[662px] order-1 md:order-2 grow mb-2.5 md:mb-3 lg:mb-0">
                <Image className="h-full w-full object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/${imagePrimary}`} height={622} width={485} alt="Image" />
            </div>
        </div>
    )
}