import React from "react";
import Image from "next/image";
import Link from "next/link";
import CurvedBrush from "@/components/Curved_brush";
import {
  ArrowRight,
  Flag,
  Mountain,
  Sparkles,
  Award,
  UsersRound,
  Handshake,
} from "lucide-react";

const values = [
  {
    title: "Refreshment",
    icon: Sparkles,
  },
  {
    title: "Quality",
    icon: Award,
  },
  {
    title: "Customer Experience",
    icon: UsersRound,
  },
  {
    title: "Partnership",
    icon: Handshake,
  },
];

const Page = () => {
  return (
    <main className="w-full overflow-hidden ">
      {/* =========================================
          1. ABOUT US HERO
      ========================================= */}
      <section className="relative w-full overflow-hidden lg:h-[580px]">
        {/* Desktop Background */}
        <Image
          src="/our-product/image2.png"
          alt="Noo Stop About Us"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />

        {/* Mobile + Tablet Background */}
        <Image
          src="/home/mobile-hero.png"
          alt="Noo Stop About Us"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="block h-auto w-full lg:hidden"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-start px-[6%] pt-[20%] md:px-[7%] md:pt-[30%] lg:items-center lg:px-[10%] lg:pt-0">
          <div className="flex w-full max-w-[750px] flex-col items-start">
            <div className="relative -rotate-[4deg]">
              <h1 className="flex flex-col font-black italic leading-[0.95] tracking-[-0.05em]">
                <span className="text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  Meet
                </span>

                <span className="text-5xl text-[var(--yellow)] sm:text-6xl md:text-7xl lg:text-8xl">
                  Noo Stop.
                </span>
              </h1>

              <CurvedBrush classes="absolute -bottom-3 left-[25%] h-4 w-[65%] md:-bottom-5 md:h-6 lg:-bottom-6" />
            </div>

            <h2 className="mt-6 -rotate-[3deg] text-lg font-black italic tracking-[-0.03em] text-white sm:text-2xl md:mt-8 md:text-3xl lg:text-4xl">
              A New Stop for <br className="md:hidden" />
              Refreshment.
            </h2>

            <p className="mt-4 w-[170px] text-xs font-medium leading-relaxed text-white sm:max-w-[350px] sm:text-sm md:mt-5 md:w-[290px] md:max-w-[430px] md:text-base lg:w-[450px] lg:max-w-[500px] lg:text-lg">
              A refreshing beverage brand that brings bold taste and fizzy
              enjoyment to everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          2. OUR STORY
      ========================================= */}
      <section className="relative w-full overflow-hidden bg-[#F8F6ED]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center md:min-h-[340px] md:grid-cols-2 lg:min-h-[400px]">
          {/* LEFT CONTENT */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 md:px-12 md:py-10 lg:px-20">
            <div className="relative mb-5 w-fit -rotate-[3deg]">
              <h2 className="text-4xl font-black italic tracking-[-0.05em] text-[#123D24] sm:text-5xl lg:text-6xl">
                Our Story
              </h2>

              <CurvedBrush classes="absolute -bottom-3 left-[15%] h-4 w-[75%] md:-bottom-4" />

              {/* Yellow decorative strokes */}
              <svg
                className="absolute -right-11 top-2 h-10 w-10 rotate-12"
                viewBox="0 0 70 100"
                fill="none"
              >
                <path d="M10 30 Q25 5 42 2 Q30 20 10 30" fill="#A8E629" />
                <path d="M16 48 Q45 28 65 35 Q45 43 16 48" fill="#A8E629" />
                <path d="M20 65 Q45 58 60 72 Q40 67 20 65" fill="#A8E629" />
              </svg>
            </div>

            <p className="max-w-[480px] text-sm font-medium leading-relaxed text-[#123D24] sm:text-base lg:text-lg">
              Noo Stop is an emerging beverage brand introducing refreshing
              drinks with a distinctive taste. With Noo Stop Zeera, the brand
              brings a fizzy cumin-flavoured beverage designed for everyday
              refreshment.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative ">
            <div className=" " />

            <Image
              src="/home2.png"
              alt="Noo Stop Zeera refreshing drink"
              width={850}
              height={650}
              sizes="(max-width: 767px) 100vw, 50vw"
              className=" inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR VISION
      ========================================= */}
      <section className="w-full px-4 py-5 md:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[24px] bg-gradient-to-r from-[#064A1D] via-[#087022] to-[#024014] text-white">
          {/* Decorative leaves */}
          <Image
            src="/leaves.png"
            alt=""
            width={350}
            height={350}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-12 h-auto w-[180px] opacity-75 md:w-[260px] lg:w-[320px]"
          />

          <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-8 sm:flex-row sm:gap-7 md:px-10 lg:px-14">
            {/* Vision Icon */}
            <div className="flex shrink-0 items-center justify-center gap-1 text-[#F5D91D]">
              <Mountain
                size={72}
                strokeWidth={1.5}
                className="h-16 w-16 md:h-20 md:w-20"
              />
              <Flag
                size={28}
                fill="#F5D91D"
                strokeWidth={1.5}
                className="relative -ml-7 -mt-12"
              />
            </div>

            {/* Divider */}
            <div className="hidden h-[110px] w-[2px] shrink-0 bg-[#A8E629]/70 sm:block" />

            {/* Vision Content */}
            <div className="flex flex-col text-center sm:text-left">
              <h2 className="mb-2 text-4xl font-black italic tracking-[-0.05em] md:text-5xl lg:text-6xl">
                Our Vision
              </h2>

              <p className="max-w-[690px] text-sm leading-relaxed text-white/95 md:text-base lg:text-lg">
                Our vision is to build a recognizable beverage brand that brings
                refreshing experiences to consumers and creates opportunities
                for retailers and distribution partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. INTRODUCING NOO STOP ZEERA
      ========================================= */}

      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/about/image1.png"
          alt="Introducing Noo Stop Zeera"
          width={1000}
          height={1000}
          sizes="100vw"
          className="block h-auto w-full"
        />

        {/* Overlay Content */}
        <div className="absolute left-[50%] top-[53%] z-20 w-[49%] -translate-y-1/2 sm:left-[48%] sm:top-[46%] md:left-[52%] md:top-[47%] md:w-[44%] lg:left-[60%] lg:top-[47%] lg:w-[37%]">
          {/* Heading */}
          <div className="relative w-fit -rotate-[3deg]">
            <h2 className="text-[clamp(18px,4.5vw,30px)] font-black italic leading-[1.05] tracking-[-0.05em] text-[#123D24] md:text-[clamp(32px,4vw,44px)] lg:text-5xl">
              Introducing
            </h2>

            {/* Yellow Highlight */}
            <div className="relative mt-1 inline-block md:mt-2">
              <div className="absolute -inset-x-1 inset-y-1 -rotate-[2deg] bg-[#F5D91D] md:-inset-x-2" />

              <h3 className="relative text-[clamp(19px,4.5vw,32px)] font-black italic leading-tight tracking-[-0.05em] text-[#123D24] md:text-[clamp(30px,3.8vw,42px)] lg:text-[50px]">
                Noo Stop Zeera
              </h3>
            </div>

            {/* Decorative Strokes */}
            <svg
              className="absolute -right-7 top-5 h-7 w-6 rotate-12 md:-right-8 md:-top-7 md:h-10 md:w-8 lg:-right-10 lg:-top-8 lg:h-12 lg:w-10"
              viewBox="0 0 70 100"
              fill="none"
            >
              <path d="M10 30 Q25 5 42 2 Q30 20 10 30" fill="#A8E629" />
              <path d="M16 48 Q45 28 65 35 Q45 43 16 48" fill="#A8E629" />
              <path d="M20 65 Q45 58 60 72 Q40 67 20 65" fill="#A8E629" />
            </svg>
          </div>

          {/* Description */}
          <p className="mt-3 max-w-[420px] text-[10px] font-semibold leading-snug text-[#123D24] sm:text-xs md:mt-5 md:text-base lg:mt-5 lg:text-lg">
            Fizzy cumin-flavoured refreshment for everyday moments.
          </p>
        </div>
      </section>

      {/* =========================================
          5. WHAT WE STAND FOR
      ========================================= */}
      <section className="relative w-full bg-[#F8F6ED] px-4 py-10 md:px-8 md:py-14 lg:px-12">
        {/* Heading */}
        <div className="relative mx-auto mb-9 w-fit text-center">
          <h2 className="relative z-10 -rotate-[2deg] text-3xl font-black italic tracking-[-0.04em] text-[#123D24] sm:text-4xl lg:text-5xl">
            What We Stand For
          </h2>

          <CurvedBrush classes="absolute -bottom-5 left-[20%] h-5 w-[65%]" />
        </div>

        {/* Value Cards */}
        <div className="mx-auto grid max-w-[1150px] grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4 md:gap-4 lg:gap-6">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group flex min-h-[140px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#D4CF52] bg-[#FAF8EB] px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#218A35] hover:shadow-lg md:min-h-[170px]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DFF47F] text-[#123D24] transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                  <Icon
                    size={34}
                    strokeWidth={2.2}
                    className="h-8 w-8 md:h-10 md:w-10"
                  />
                </div>

                <h3 className="max-w-[160px] text-sm font-extrabold leading-tight text-[#123D24] sm:text-base md:text-lg">
                  {value.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          6. DISCOVER NOO STOP ZEERA CTA
      ========================================= */}
      <section className="w-full px-4 pt-0 pb-10 md:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[26px] bg-gradient-to-r from-[#116B20] via-[#0C571A] to-[#064014]">
          {/* Left decorative leaves */}
          <Image
            src="/leaves.png"
            alt=""
            width={300}
            height={300}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-14 h-auto w-[170px] rotate-[-20deg] md:w-[240px]"
          />

          {/* Right decorative leaves */}
          <Image
            src="/leaves.png"
            alt=""
            width={300}
            height={300}
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-auto w-[160px] rotate-[145deg] opacity-80 md:w-[230px]"
          />

          {/* CTA Content */}
          <div className="relative z-10 flex min-h-[165px] flex-col items-center justify-center gap-5 px-5 py-8 text-center md:min-h-[190px]">
            <div className="relative">
              <h2 className="-rotate-[2deg] text-3xl font-black italic tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                Discover{" "}
                <span className="text-[var(--yellow)]">Noo Stop Zeera</span>
              </h2>
            </div>

            <Link
              href="/our-product"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--yellow)] px-7 py-3 text-sm font-bold text-[#123D24] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#A8E629] md:px-9 md:text-base"
            >
              Explore Product
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
