import Link from "next/link";
import Image from "next/image";

export default function CardProduct({ title, image, slug, category, colors, price }: { title: string, image: string, slug: string, category: string, colors: string[], price: string }) {
    return (
        <article className="w-full group">
            <Link href={`product/${slug}`} className="h-[300px] md:h-[420px] lg:h-[500px] w-full relative block rounded-[32px] overflow-hidden">
                <Image className="h-full w-full object-cover transition-all transform duration-200 group-hover:scale-110" src={`/images/${image}`} height={488} width={432} alt={title} />
                <p className="absolute top-4 right-4 z-10 bg-white inline-block rounded-full py-3 px-6 font-medium text-[#171717] text-[24px]">{price}</p>
                <div className="w-full absolute bottom-4 z-10 px-4">
                    <div className="flex items-center p-4 bg-white rounded-[25px] overflow-hidden">
                        <div className="flex-1 pr-2 min-w-0">
                            <h3 className="font-medium text-xl text-[#171717] truncate">{title}</h3>
                            <p className="text-base text-[#A3A3A3]">{category}</p>
                        </div>
                        <div className="flex-shrink-0 flex items-center gap-x-2">
                            {colors.map((color, key) => (
                                <span key={key} className={`h-5 w-5 inline-block rounded-full ${color}`}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </article>

    )
}