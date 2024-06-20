export default function Pagination() {
    return (
        <div className="h-[32px] flex items-center gap-x-3 text-base text-[#171717]">
            <button type="button" className="h-full flex items-center gap-x-2 px-2 rounded-full border border-[#E5E5E5]">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9863 8L10.9863 12L14.9863 16" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Previous
            </button>
            <button type="button" className="h-full w-[32px] flex items-center rounded-full border border-[#E5E5E5]">1</button>
            <button type="button" className="h-full w-[32px] flex items-center rounded-full border border-[#E5E5E5]">2</button>
            <button type="button" className="h-full w-[32px] flex items-center rounded-full border border-[#E5E5E5]">3</button>
            <button type="button" className="h-full w-[32px] flex items-center rounded-full border border-[#E5E5E5]">4</button>
            <button type="button" className="h-full w-[32px] flex items-center rounded-full border border-[#E5E5E5]">5</button>
            <button type="button" className="h-full flex items-center gap-x-2 px-2 rounded-full border border-[#E5E5E5]">
                Next
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9863 16L14.9863 12L10.9863 8" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    )
}