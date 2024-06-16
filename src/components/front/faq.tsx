"use client"

import clsx from "clsx";
import { useState } from "react"

export default function Faq() {

    const [faqActive, setFaqActive] = useState<number>(0);

    return (
        <section>
            <article className="flex items-start gap-x-10 p-6 border-b border-[#ACACAC] text-[#111111]">
                <div className="grow">
                    <h3 className="font-medium text-[24px] leading-[31.2px]">How long does it take for my order to be delivered?</h3>
                    <p className={clsx('font-medium text-base opacity-75 pt-4', { 'hidden': faqActive !== 0 })}>Delivery times vary depending on your location and the shipping method chosen.<br /> Typically, orders are delivered within 3-5 business days.</p>
                </div>
                <button type="button" className="h-10 w-10 flex-none" onClick={() => setFaqActive(0)}>
                    {faqActive === 0 ? (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    ) : (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    )}
                </button>
            </article>
            <article className="flex items-start gap-x-10 p-6 border-b border-[#ACACAC] text-[#111111]">
                <div className="grow">
                    <h3 className="font-medium text-[24px] leading-[31.2px]">How can I determine the right price for the home I want to buy/sell?</h3>
                    <p className={clsx('font-medium text-base opacity-75 pt-4', { 'hidden': faqActive !== 1 })}>Delivery times vary depending on your location and the shipping method chosen.<br /> Typically, orders are delivered within 3-5 business days.</p>
                </div>
                <button type="button" className="h-10 w-10 flex-none" onClick={() => setFaqActive(1)}>
                    {faqActive === 1 ? (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    ) : (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    )}
                </button>
            </article>
            <article className="flex items-start gap-x-10 p-6 border-b border-[#ACACAC] text-[#111111]">
                <div className="grow">
                    <h3 className="font-medium text-[24px] leading-[31.2px]">How do I reset my password or access my account if I forget my password?</h3>
                    <p className={clsx('font-medium text-base opacity-75 pt-4', { 'hidden': faqActive !== 2 })}>Delivery times vary depending on your location and the shipping method chosen.<br /> Typically, orders are delivered within 3-5 business days.</p>
                </div>
                <button type="button" className="h-10 w-10 flex-none" onClick={() => setFaqActive(2)}>
                    {faqActive === 2 ? (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    ) : (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    )}
                </button>
            </article>
            <article className="flex items-start gap-x-10 p-6 border-b border-[#ACACAC] text-[#111111]">
                <div className="grow">
                    <h3 className="font-medium text-[24px] leading-[31.2px]">Do you offer any loyalty programs or discounts for loyal customers?</h3>
                    <p className={clsx('font-medium text-base opacity-75 pt-4', { 'hidden': faqActive !== 3 })}>Delivery times vary depending on your location and the shipping method chosen.<br /> Typically, orders are delivered within 3-5 business days.</p>
                </div>
                <button type="button" className="h-10 w-10 flex-none" onClick={() => setFaqActive(3)}>
                    {faqActive === 3 ? (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    ) : (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    )}
                </button>
            </article>
            <article className="flex items-start gap-x-10 p-6 border-b border-[#ACACAC] text-[#111111]">
                <div className="grow">
                    <h3 className="font-medium text-[24px] leading-[31.2px]">Is this website secure for online shopping?</h3>
                    <p className={clsx('font-medium text-base opacity-75 pt-4', { 'hidden': faqActive !== 4 })}>Delivery times vary depending on your location and the shipping method chosen.<br /> Typically, orders are delivered within 3-5 business days.</p>
                </div>
                <button type="button" className="h-10 w-10 flex-none" onClick={() => setFaqActive(4)}>
                    {faqActive === 4 ? (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    ) : (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    )}
                </button>
            </article>
        </section>
    )
}