import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function CardProduct({ title, image, slug, category, colors, price, isSwiper }: { title: string, image: string, slug: string, category: string, colors: string[], price: number, isSwiper?: boolean }) {
    return (
        <article className={clsx("w-full group", { 'swiper-slide': isSwiper })}>
            <Link href={isSwiper ? slug : `product/${slug}`} className="h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] xl:h-[500px] w-full relative block rounded-[20px] md:rounded-[24px] lg:rounded-[28px] xl:rounded-[32px] overflow-hidden">
                <Image className="h-full w-full object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/${image}`} height={488} width={432} alt={title} />
                <p className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-10 bg-white inline-block rounded-full py-1.5 sm:py-2 md:py-2.5 xl:py-3 px-3 sm:px-4 md:px-5 xl:px-6 font-medium text-[#171717] text-base sm:text-lg md:text-[21px] lg:text-[21px] xl:text-[24px]">${price}</p>
                <div className="w-full absolute bottom-2 lg:bottom-3 xl:bottom-4 z-10 px-2 lg:px-3 xl:px-4">
                    <div className="flex flex-wrap md:flex-nowrap items-center p-3 md:p-3 xl:p-4 bg-white rounded-[16px] md:rounded-[20px] lg:rounded-[22px] xl:rounded-[25px] overflow-hidden">
                        <div className="w-full md:w-auto flex-1 pr-2 min-w-0">
                            <h3 className="font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#171717] truncate">{title}</h3>
                            <p className="text-[10px] sm:text-xs md:text-base text-[#A3A3A3]">{category}</p>
                        </div>
                        <div className="w-full md:w-auto flex-shrink-0 flex items-center gap-x-2 mt-1 md:mt-0">
                            {colors.map((color, key) => (
                                <span key={key} className={`h-3 lg:h-5 w-3 lg:w-5 inline-block rounded-full`} style={{ backgroundColor: color }}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </article>

    )
}