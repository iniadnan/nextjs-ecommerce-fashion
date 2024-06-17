import { fontVarien } from '@/styles/fonts';

export default function FrontTitleSection({ title, classList }: { title: string; classList?: string }) {
    return (
        <h2 className={`${fontVarien.className} text-[30px] sm:text-[35px] md:text-[40px] lg:text-[48px] xl:text-[52px] text-[#111111] leading-[40px] sm:leading-[42px] md:leading-[48px] lg:leading-[56px] xl:leading-[62.4px] ${classList}`}>{title}</h2>
    )
}