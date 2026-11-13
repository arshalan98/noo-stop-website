
import Image from "next/image";
import Link from "next/link";
import { House, BottleWine } from "lucide-react";
import CurvedBrush from "@/components/Curved_brush";

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#003D16]">
      {/* DESKTOP BACKGROUND ONLY */}
      <Image
        src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/404.png"
        alt="Noo Stop Zeera 404 background"
        fill
        priority
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-cover object-center lg:block"
      />

      {/* DESKTOP GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#003D16]/40 via-[#003D16]/10 to-transparent lg:block" />

      {/* MOBILE BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-[25%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#218A35]/40 blur-[100px]" />

        <div className="absolute -left-24 bottom-10 h-[250px] w-[250px] rounded-full bg-[#A8E629]/10 blur-[90px]" />

        <div className="absolute -right-24 top-20 h-[230px] w-[230px] rounded-full bg-[#F5D91D]/10 blur-[90px]" />

        {/* Decorative Leaf - Top Right */}
        <Image
          src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/fresh-green-leaves-water-drops.png"
          alt=""
          width={280}
          height={280}
          aria-hidden="true"
          className="absolute -right-20 top-12 w-[190px] rotate-[-25deg] opacity-40 sm:w-[250px]"
        />

        {/* Decorative Leaf - Bottom Left */}
        <Image
          src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/fresh-green-leaves-water-drops.png"
          alt=""
          width={280}
          height={280}
          aria-hidden="true"
          className="absolute -bottom-12 -left-24 w-[220px] rotate-[145deg] opacity-35 sm:w-[280px]"
        />

        {/* Decorative Circles */}
        <div className="absolute left-[-100px] top-[35%] h-[200px] w-[200px] rounded-full border border-[#A8E629]/15" />

        <div className="absolute right-[-120px] bottom-[20%] h-[260px] w-[260px] rounded-full border border-[#F5D91D]/15" />

        {/* Small Decorative Dots */}
        <div className="absolute left-[12%] top-[24%] h-2 w-2 rounded-full bg-[#A8E629]/70" />

        <div className="absolute right-[15%] top-[42%] h-3 w-3 rounded-full bg-[#F5D91D]/60" />

        <div className="absolute left-[20%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-white/50" />
      </div>

      {/* MAIN CONTENT */}
      <section className="relative z-10 flex min-h-screen w-full items-center justify-center px-5 pb-16 pt-28 sm:px-8 lg:justify-start lg:px-[8%] lg:py-24">
        <div className="flex w-full max-w-[520px] flex-col items-center text-center lg:max-w-[580px] lg:items-start lg:text-left">

          {/* MOBILE 404 NUMBER */}
          <div className="relative mb-8 lg:hidden">
            <div className="absolute inset-0 scale-110 rounded-full bg-[#A8E629]/10 blur-[55px]" />

            <h1 className="relative -rotate-[5deg] text-[clamp(110px,29vw,180px)] font-black italic leading-none tracking-[-0.1em] text-[#F5D91D] drop-shadow-[0_8px_0_#0F2E1B]">
              404
            </h1>

            <div className="absolute -bottom-4 left-[20%] h-2 w-[65%] -rotate-[5deg] rounded-full bg-[#A8E629]" />
          </div>

          {/* OOPS HEADING */}
          <div className="relative -rotate-[5deg]">
            <h2 className="text-[clamp(54px,12vw,90px)] font-black italic leading-none tracking-[-0.07em] text-white drop-shadow-md lg:text-[110px]">
              Oops!
            </h2>

            {/* Decorative Yellow Strokes */}
            <svg
              className="absolute -right-9 top-[15%] h-12 w-9 rotate-12 sm:-right-12 sm:h-16 sm:w-12 lg:-right-16 lg:h-20 lg:w-14"
              viewBox="0 0 70 100"
              fill="none"
              aria-hidden="true"
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

          {/* SUBHEADING */}
          <h2 className="relative mt-3 -rotate-[5deg] text-[clamp(25px,6vw,42px)] font-black italic leading-tight tracking-[-0.04em] text-white lg:ml-16 lg:text-[52px]">
            You&apos;ve Hit a
          </h2>

          {/* NOO STOP HEADING */}
          <div className="relative mt-2 -rotate-[5deg]">
            <h2 className="whitespace-nowrap text-[clamp(43px,10vw,76px)] font-black italic leading-[1.1] tracking-[-0.06em] text-[#F5D91D] lg:text-[96px]">
              Noo Stop.
            </h2>

            <CurvedBrush
              classes="absolute -bottom-3 left-[24%] h-4 w-[70%] sm:-bottom-5 sm:h-6 lg:-bottom-7 lg:h-8"
            />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-12 max-w-[420px] text-center text-base font-medium leading-relaxed text-white/90 sm:text-xl lg:mt-14 lg:text-[26px] lg:leading-snug">
            Looks like this page took a
            <br />
            refreshing detour.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex w-full max-w-[380px] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-10 lg:justify-start">

            {/* BACK TO HOME */}
            <Link
              href="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F5D91D] px-5 py-3.5 text-sm font-bold text-[#123D24] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#A8E629] sm:w-auto sm:min-w-[180px] sm:px-6 sm:text-base"
            >
              <House size={19} strokeWidth={2.5} />
              Back to Home
            </Link>

            {/* EXPLORE PRODUCT */}
            <Link
              href="/our-product"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white bg-white/5 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#123D24] sm:w-auto sm:min-w-[220px] sm:px-6 sm:text-base"
            >
              <BottleWine
                size={19}
                className="text-[#F5D91D] transition-colors group-hover:text-[#123D24]"
              />
              Explore Noo Stop Zeera
            </Link>
          </div>

          {/* ERROR LABEL */}
          <p className="mt-9 text-xs font-medium uppercase tracking-[0.25em] text-white/50 lg:mt-10">
            Error 404 · Page Not Found
          </p>
        </div>
      </section>
    </main>
  );
}
