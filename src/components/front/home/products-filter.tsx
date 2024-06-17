"use client";

import { useState } from "react";
import styles from './styles.module.css';
import clsx from "clsx";

export default function FrontProductsFilter() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [sortBy, setSortBy] = useState(false)
    const sortOptions = ["Popular", "Newest", "Oldest", "High", "Low"];

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className="flex flex-wrap items-center justify-between mb-8 md:mb-10">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-2 md:gap-x-4 lg:gap-x-5 font-medium text-sm md:text-sm lg:text-base text-[#171717] mb-4 md:mb-0">
                <button
                    type="button"
                    className={clsx("py-2 md:py-3 px-5 hover:bg-[#171717]/5 rounded-[24px]", { [styles.categoryActive]: activeCategory === "all" })}
                    onClick={() => handleCategoryClick("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    className={clsx("py-2 md:py-3 px-5 hover:bg-[#171717]/5 rounded-[24px]", { [styles.categoryActive]: activeCategory === "tshirt" })}
                    onClick={() => handleCategoryClick("tshirt")}
                >
                    T-Shirt
                </button>
                <button
                    type="button"
                    className={clsx("py-2 md:py-3 px-5 hover:bg-[#171717]/5 rounded-[24px]", { [styles.categoryActive]: activeCategory === "hoodie" })}
                    onClick={() => handleCategoryClick("hoodie")}
                >
                    Hoodie
                </button>
                <button
                    type="button"
                    className={clsx("py-2 md:py-3 px-5 hover:bg-[#171717]/5 rounded-[24px]", { [styles.categoryActive]: activeCategory === "pants" })}
                    onClick={() => handleCategoryClick("pants")}
                >
                    Pants
                </button>
                <button
                    type="button"
                    className={clsx("py-2 md:py-3 px-5 hover:bg-[#171717]/5 rounded-[24px]", { [styles.categoryActive]: activeCategory === "accessories" })}
                    onClick={() => handleCategoryClick("accessories")}
                >
                    Accessories
                </button>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 text-[#171717]">
                <div className="relative">
                    <button onClick={() => setSortBy(!sortBy)} type="button" className="font-medium text-sm md:text-base inline-flex gap-x-2 border border-[#E5E5E5] rounded-[24px] py-2 md:py-3 px-5">
                        Sort By
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10L12 14L16 10" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className={clsx("w-full flex-col absolute top-[110%] left-0 bg-white border border-[#E5E5E5] rounded-lg p-2 z-20", { "flex": sortBy, "hidden": !sortBy })}>
                        {sortOptions.map(option => (
                            <p key={option} className="cursor-pointer py-2 px-3 rounded-md hover:bg-[#171717]/5">
                                {option}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <button type="button" className="font-medium text-sm md:text-base inline-flex gap-x-2 border border-[#E5E5E5] rounded-[24px] py-2 md:py-3 px-5">
                        Filter
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10L12 14L16 10" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
