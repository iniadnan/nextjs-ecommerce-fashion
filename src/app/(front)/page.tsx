import BoxImage from "@/components/front/cards/box-image";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HEADER */}
      <header className="w-full relative px-4 py-4">
        <Image className="h-[700px] w-full object-cover rounded-[20px]" priority={true} src="/images/a289883b71e651780ddbd7bd232e292a.jpg" height={700} width={1408} alt="Banner" />
        <div className="h-full w-full absolute top-0 left-10 flex items-center z-20">
          <div className="w-full max-w-[993px] text-black px-4">
            <h2 className="text-[84px] leading-[84px] mb-10">Discover Innovative Designs, Premium Quality, and Unmatched Style</h2>
            <p className="w-full max-w-[843px] text-xl text-[#212121] mb-10">Immerse Yourself in a World of Fashion Innovation, Where Each Piece is Meticulously Crafted to Combine Superior Quality with Unparalleled Style. From Avant-Garde Designs to Timeless Classics, Our Collection is Curated to Elevate Your Wardrobe and Reflect Your Unique Taste. </p>
            <Link href="/products" className="h-[56px] w-[159px] inline-flex items-center justify-center bg-[#EB4A26] font-medium text-base text-white rounded-[24px]">
              Shop Now
            </Link>
          </div>
        </div>
      </header>
      {/* WE ARE SUPPORTED BY */}
      <section className="w-full px-4 py-4">
        <div className="container bg-white py-20 px-16 rounded-[40px]">
          <h2 className="text-[52px] text-[#171717] text-center mb-10">We Are Supported By</h2>
          <div className="flex items-center justify-center gap-x-6">
            <BoxImage image="Zara_(retailer)-Logo.wine_1.png" alt="Zara" />
            <BoxImage image="Zara_(retailer)-Logo.wine_1.png" alt="Zara" />
            <BoxImage image="Zara_(retailer)-Logo.wine_1.png" alt="Zara" />
            <BoxImage image="Zara_(retailer)-Logo.wine_1.png" alt="Zara" />
            <BoxImage image="Zara_(retailer)-Logo.wine_1.png" alt="Zara" />
            <BoxImage image="Zara_(retailer)-Logo.wine_1.png" alt="Zara" />
          </div>
        </div>
      </section>
      {/* COMING SOON */}
      <section className="w-full px-4 py-4"></section>
      {/* PRODUCTS */}
      <main className="w-full px-4 py-4"></main>
      {/* FAQ */}
      <main className="w-full px-4 py-4"></main>
      {/* BANNER */}
      <section className="w-full h-[563px] relative px-4 overflow-hidden">
        <div className="h-[563px] w-full relative rounded-[20px] overflow-hidden">
          <Image className="h-full w-full object-cover" src="/images/476cf2f57d0eecb08c9ca0126becf8a3-min.png" height={563} width={1408} alt="Banner" />
          <div className="h-full w-full absolute top-0 left-0 bg-[#070707] z-10 opacity-25"></div>
        </div>
        <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center z-20">
          <div className="w-full max-w-[1016px] text-center text-white">
            <h2 className="text-[84px] leading-[84px] mb-4">Unlock the Secret to<br />
              Effortless Style</h2>
            <p className="w-full max-w-[689px] mx-auto mb-6">Discover the secret to effortless style and elevate your fashion game with our expert tips, style guides, and exclusive offers. Subscribe our newsletter to unlock the key fashion success!</p>
            <Link href="/" className="h-[55px] w-[232px] inline-flex items-center justify-center gap-x-2 border-[3px] border-white rounded-[60px]">
              Join Our Newsletter
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7499 6V15.75C18.7499 15.9489 18.6709 16.1397 18.5303 16.2803C18.3896 16.421 18.1988 16.5 17.9999 16.5C17.801 16.5 17.6103 16.421 17.4696 16.2803C17.3289 16.1397 17.2499 15.9489 17.2499 15.75V7.81031L6.53055 18.5306C6.38982 18.6714 6.19895 18.7504 5.99993 18.7504C5.80091 18.7504 5.61003 18.6714 5.4693 18.5306C5.32857 18.3899 5.24951 18.199 5.24951 18C5.24951 17.801 5.32857 17.6101 5.4693 17.4694L16.1896 6.75H8.24993C8.05102 6.75 7.86025 6.67098 7.7196 6.53033C7.57895 6.38968 7.49993 6.19891 7.49993 6C7.49993 5.80109 7.57895 5.61032 7.7196 5.46967C7.86025 5.32902 8.05102 5.25 8.24993 5.25H17.9999C18.1988 5.25 18.3896 5.32902 18.5303 5.46967C18.6709 5.61032 18.7499 5.80109 18.7499 6Z" fill="white" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}