
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, House, BottleWine } from "lucide-react";
import CurvedBrush from "@/components/Curved_brush";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#003D16]">

      {/* 404 BACKGROUND IMAGE */}
      <Image
        src="/404.png"
        alt="Noo Stop Zeera 404 background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] md:object-center"
      />

      {/* LEFT CONTENT */}
      <section className="relative z-10 flex min-h-screen w-full items-center px-[7%] py-20 sm:px-[9%] lg:px-[8%]">

        <div className="flex w-full max-w-[650px] flex-col items-start lg:max-w-[580px]">

          {/* Oops! */}
          <div className="relative -rotate-[5deg]">
            <h1 className="text-[clamp(58px,12vw,110px)] font-black italic leading-none tracking-[-0.07em] text-white drop-shadow-md lg:text-[110px]">
              Oops!
            </h1>

            {/* Decorative yellow strokes */}
            <svg
              className="absolute -right-12 top-[20%] h-16 w-12 rotate-12 sm:-right-16 sm:h-20 sm:w-14"
              viewBox="0 0 70 100"
              fill="none"
            >
              <path
                d="M10 30 Q25 5 42 2 Q30 20 10 30"
                fill="#F5D91D"
              />
              <path
                d="M16 48 Q45 28 65 35 Q45 43 16 48"
                fill="#F5D91D"
              />
              <path
                d="M20 65 Q45 58 60 72 Q40 67 20 65"
                fill="#F5D91D"
              />
            </svg>
          </div>

          {/* You've Hit a */}
          <h2 className="relative mt-2 ml-8 -rotate-[5deg] text-[clamp(26px,6vw,52px)] font-black italic leading-tight tracking-[-0.04em] text-white sm:ml-14 lg:ml-20 lg:text-[52px]">
            You&apos;ve Hit a
          </h2>

          {/* Noo Stop. */}
          <div className="relative mt-1 -rotate-[5deg]">
            <h2 className="whitespace-nowrap text-[clamp(49px,10vw,96px)] font-black italic leading-[1.05] tracking-[-0.06em] text-[#F5D91D] lg:text-[96px]">
              Noo Stop.
            </h2>

            <CurvedBrush
              classes="absolute -bottom-5 left-[24%] h-5 w-[70%] sm:-bottom-6 sm:h-7 lg:-bottom-7 lg:h-8"
            />
          </div>

          {/* Description */}
          <p className="mt-12 max-w-[430px] text-center text-lg font-medium leading-snug text-white sm:text-xl md:text-2xl lg:mt-14 lg:text-[26px]">
            Looks like this page took a
            <br />
            refreshing detour.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-9 flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-10">

            {/* Back to Home */}
            <Link
              href="/"
              className="group inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-[#F5D91D] px-6 py-3 text-sm font-bold text-[#123D24] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#A8E629] sm:text-base"
            >
              <House size={20} fill="#123D24" strokeWidth={2} />
              Back to Home
            </Link>

            {/* Explore Product */}
            <Link
              href="/our-product"
              className="group inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border-2 border-white bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#123D24] sm:text-base"
            >
              <BottleWine
                size={20}
                className="text-[#F5D91D] group-hover:text-[#123D24]"
              />
              Explore Noo Stop Zeera
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
