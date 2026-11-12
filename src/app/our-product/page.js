import React from "react";
import { BottleWine, ArrowRight, Bubbles, Wheat } from "lucide-react";
import { FaBottleWater, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Curved_brush from "@/components/Curved_brush";
const page = () => {
  return (
    <div className="flex flex-col mt-0 items-center justify-center   ">
      <section className="relative w-full overflow-hidden lg:h-[580px]">
        {/* Desktop Background */}
        <Image
          src="/our-product/image2.png"
          alt="Noo Stop Zeera"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />

        {/* Mobile + Tablet Background */}
        <Image
          src="/home/mobile-hero.png"
          alt="Noo Stop Zeera"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="block h-auto w-full lg:hidden"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-start px-[6%] pt-[20%] md:px-[7%] md:pt-[30%] lg:items-center lg:px-[10%] lg:pt-0">
          <div className="flex w-full max-w-[750px] flex-col items-start">
            {/* Main Product Name */}
            <div className="relative mb-5 -rotate-[4deg] md:mb-8 lg:mb-10">
              <h1 className="text-[clamp(30px,7vw,48px)] font-black italic leading-tight tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                Noo Stop Zeera
              </h1>

              <Curved_brush classes="absolute -bottom-4 left-[35%] h-5 w-[65%] md:-bottom-6 md:h-7 lg:-bottom-7" />
            </div>

            {/* Tagline */}
            <div className="-rotate-[3deg]">
              <h2 className="flex flex-col font-black italic leading-[0.95] tracking-[-0.04em]">
                <span className="text-[clamp(23px,5vw,36px)] text-[var(--yellow)] md:text-white md:text-4xl lg:text-5xl">
                  A Refreshing
                </span>

                <span className="mt-1 text-[clamp(34px,8vw,52px)] text-white md:text-[var(--yellow)] md:text-6xl lg:text-7xl">
                  Twist of Zeera.
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-[200px]  md:max-w-[430px]  text-xs leading-relaxed text-white font-semibold sm:text-sm md:mt-7 md:text-base lg:text-lg text-shadow-[12px]">
              Discover the refreshing taste of Noo Stop Zeera, a fizzy
              cumin-flavoured beverage created for everyday refreshment.
            </p>

            {/* Action Buttons */}
            <div className="mt-3 flex flex-wrap flex-col md:flex-row items-start md:items-center  gap-2 md:mt-4 md:gap-3">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] md:px-5 md:py-3 md:text-sm"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
              {/* Contact Button */}
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-black/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#123D24] md:px-5 md:py-3 md:text-sm"
              >
                Contact Us
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="w-full px-4 pt-8 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-3 items-center rounded-2xl bg-[#F8F5E7] px-3 py-4 shadow-sm md:px-8">
          {/* Fizzy */}
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
            <Bubbles className="h-7 w-7 text-[var(--secondary)] md:h-10 md:w-10" />
            <span className="text-center text-xs font-bold leading-tight text-[var(--primary)] md:text-base">
              Fizzy <br className="hidden md:block" /> Beverage
            </span>
          </div>

          {/* Zeera */}
          <div className="flex flex-col items-center justify-center gap-2 border-x border-[var(--secondary)]/40 md:flex-row md:gap-4">
            <Wheat className="h-7 w-7 text-[#B58A19] md:h-10 md:w-10" />
            <span className="text-center text-xs font-bold leading-tight text-[var(--primary)] md:text-base">
              Zeera <br className="hidden md:block" /> Flavour
            </span>
          </div>

          {/* Serving */}
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
            <BottleWine className="h-7 w-7 text-[var(--secondary)] md:h-10 md:w-10" />
            <span className="text-center text-xs font-bold leading-tight text-[var(--primary)] md:text-base">
              160 ml <br className="hidden md:block" /> Serving Size
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCT INFORMATION & INGREDIENTS */}
      <section className="w-full px-4 pt-8 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {/* Product Information */}
          <div className="w-full">
            <h2 className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#123D24] to-[#218A35] px-6 py-2 text-lg font-bold text-white">
              Product Information
            </h2>

            <div className="overflow-hidden rounded-xl bg-[#F8F5E7] p-4 md:p-5">
              <div className="divide-y divide-[#123D24]/10">
                {[
                  ["Product Name", "Noo Stop Zeera"],
                  ["Brand", "Noo Stop"],
                  ["Product Category", "Cumin-Flavoured Fizzy Beverage"],
                  ["Serving Size", "160 ml"],
                  [
                    "Shelf Life",
                    "3.5 Months from Manufacture (subject to final label verification)",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[42%_58%] gap-2 py-2 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-[#374151]">{label}</span>
                    <span className="font-semibold text-[#123D24]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="w-full">
            <h2 className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#123D24] to-[#218A35] px-6 py-2 text-lg font-bold text-white">
              Ingredients
            </h2>

            <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-[#F8F5E7] p-5 md:min-h-[235px]">
              <div className="relative z-10 max-w-[55%]">
                <h3 className="mb-3 text-sm font-bold text-[#123D24]">
                  Ingredients:
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  To be updated from the official product label.
                </p>
              </div>

              <Image
                src="/our-product/zeera-leaf.png"
                alt="Zeera seeds and green leaf"
                width={500}
                height={500}
                sizes="(max-width: 767px) 220px, 300px"
                className="absolute -right-8 bottom-0 h-auto w-[65%] max-w-[300px] object-contain md:-right-10 md:w-[70%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION & PACKAGING GALLERY */}
      <section className="w-full px-4 pt-8 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {/* Nutrition Facts */}
          <div className="w-full">
            <h2 className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#123D24] to-[#218A35] px-6 py-2 text-lg font-bold text-white">
              Nutrition Facts
            </h2>

            <div className="rounded-xl bg-[#F8F5E7] p-4 md:p-5">
              <div className="overflow-hidden rounded-lg border border-[#123D24]/15">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead className="bg-[#F4EFD8] text-[#123D24]">
                    <tr>
                      <th className="border-b border-r border-[#123D24]/15 px-3 py-3">
                        Nutrient
                      </th>
                      <th className="border-b border-[#123D24]/15 px-3 py-3 text-center">
                        Per 100 ml
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white/40 text-[#374151]">
                    {[
                      "Energy",
                      "Fat",
                      "Carbohydrates",
                      "Total Sugars",
                      "Added Sugars",
                      "Protein",
                      "Sodium",
                    ].map((nutrient) => (
                      <tr
                        key={nutrient}
                        className="border-b border-[#123D24]/10 last:border-b-0"
                      >
                        <td className="border-r border-[#123D24]/10 px-3 py-2">
                          {nutrient}
                        </td>
                        <td className="px-3 py-2 text-center">—</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Nutritional values will be updated from the final product label.
              </p>
            </div>
          </div>

          {/* Packaging Gallery */}
          <div className="w-full">
            <h2 className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#123D24] to-[#218A35] px-6 py-2 text-lg font-bold text-white">
              Packaging Gallery
            </h2>

            <div className="grid grid-cols-2 gap-3 rounded-xl bg-[#F8F5E7] p-3 sm:gap-4 md:p-4">
              {/* Front View */}
              <div className="flex flex-col items-center justify-between rounded-xl border border-[#123D24]/15 bg-white/40 px-2 pt-4 pb-2">
                <Image
                  src="/our-product/bottle-sample-front.png"
                  alt="Noo Stop Zeera Bottle Front View"
                  width={300}
                  height={400}
                  sizes="(max-width: 767px) 40vw, 220px"
                  className="h-[180px] w-auto max-w-full object-contain sm:h-[230px] md:h-[200px] lg:h-[260px]"
                />

                <span className="mt-3 rounded-full bg-[#123D24] px-5 py-1.5 text-xs font-semibold text-white">
                  Front View
                </span>
              </div>

              {/* Back View */}
              <div className="flex flex-col items-center justify-between rounded-xl border border-[#123D24]/15 bg-white/40 px-2 pt-4 pb-2">
                <Image
                  src="/our-product/bottle-sample-front.png"
                  alt="Noo Stop Zeera Bottle Back View Placeholder"
                  width={300}
                  height={400}
                  sizes="(max-width: 767px) 40vw, 220px"
                  className="h-[180px] w-auto max-w-full object-contain sm:h-[230px] md:h-[200px] lg:h-[260px]"
                />

                <span className="mt-3 rounded-full bg-[#123D24] px-5 py-1.5 text-xs font-semibold text-white">
                  Back View
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURER INFORMATION */}
      <section className="w-full px-4 pt-8 pb-12 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#123D24] to-[#218A35] px-6 py-2 text-lg font-bold text-white">
            Manufacturer Information
          </h2>

          <div className="rounded-xl bg-[#F8F5E7] p-5 md:p-6">
            <p className="text-sm leading-relaxed text-gray-600">
              Manufacturer name, address and FSSAI licence details will be
              updated according to the official product label.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-0 md:px-8 lg:px-12 overflow-hidden mb-5 " >
  <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#1B7F23] via-[#0D5D19] to-[#063E12] shadow-lg">
    <div className="flex flex-col items-center justify-between gap-6 px-4 py-0 md:px-8 md:py-2 lg:py-6 lg:flex-row lg:gap-8 lg:px-10 relative">
      
      {/* LEFT IMAGE */}
      <div className="flex w-full justify-start lg:w-auto  ">
        <Image
          src="/our-product/image4.png"
          alt="Noo Stop Zeera Bottle Splash"
          width={320}
          height={220}
          className="h-auto w-[350px] object-contain sm:w-[380px] md:w-[500px] lg:w-[400px] absolute -bottom-2 -left-3"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="flex w-full flex-1 flex-col items-center text-center lg:items-center -rotate-4 relative left-8 lg:left-20 bottom-3 lg:bottom-0">
        <h2 className=" font-black italic  tracking-[-0.04em] text-white text-xl md:text-3xl lg:text-3xl">
          Want to Know More About
        </h2>

        <div className="relative mt-1 inline-block">
          <h3 className=" font-black italic  tracking-[-0.04em] text-[var(--yellow)]  text-3xl md:text-4xl lg:text-3xl">
            Noo Stop Zeera?
          </h3>

          <Curved_brush classes="absolute -bottom-3 left-[18%] h-4 w-[64%] md:-bottom-4 md:h-5 lg:-bottom-5" />
        </div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="flex w-full flex-row lg:flex-col items-center justify-center gap-1 md:gap-3 sm:flex-row lg:w-auto lg:flex-row relative left-10 md:left-20 lg:left-0 bottom-3 md:bottom-0 lg:bottom-0 ">
        <Link
          href="/contact-us"
          className="group inline-flex min-w-[100px] md:min-w-[220px] lg:min-w-[180px] items-center justify-center gap-2 rounded-full bg-[var(--yellow)] px-2 py-1 lg:px-6 lg:py-3 text-sm font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e6cb18] md:text-base"
        >
          Contact Us
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-w-[100px] md:min-w-[220px] lg:min-w-[180px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-2 py-1 lg:px-6 lg:py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[var(--foreground)] md:text-base"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default page;
