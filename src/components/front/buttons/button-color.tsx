export default function ButtonColor({ title, color, active }: { title: string; color: string; active?: string; }) {
    return (
        <button type="button" className="h-[42px] flex items-center gap-x-2 text-lg text-[#222730] border border-[#D0D0D0] rounded-full px-4">
            <span className={`inline-block h-4 w-4 rounded-full ${color}`}></span>
            <span>{title}</span>
        </button>
    )
}