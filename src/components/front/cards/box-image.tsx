import Image from "next/image";

export default function BoxImage({ image, alt }: { image: string, alt: string }) {
    return (
        <div className="h-[128px] w-full flex items-center justify-center border border-[#E5E5E5] rounded-[16px]">
            <Image className="h-auto w-auto object-cover" src={`/images/${image}`} height={80} width={115} alt={alt} />
        </div>
    )
}