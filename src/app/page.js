import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Citrus,
  Smile,
  BottleWine,
  Handshake,
  Flower,
} from "lucide-react";
import { FaHandshake } from "react-icons/fa";
import { siteConfig } from "@/lib/config/site";
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
const ogImageUrl = new URL("/og-image.jpg", siteUrl).toString();

export const metadata = {
  title: {
    absolute: "Noo Stop – Refreshing Fizzy Zeera Drink in India",
  },

  description:
    "Experience Noo Stop Zeera, a refreshing 160 ml fizzy cumin-flavoured drink. Discover its bold zeera taste, explore our brand and connect with us.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.BrandName,
    title: "Noo Stop – A Refreshing Twist of Zeera",
    description:
      "Discover Noo Stop Zeera, a fizzy cumin-flavoured beverage bringing a refreshing twist to everyday moments.",
    images: [
      {
        url: ogImageUrl,
        width: 1731,
        height: 909,
        type: "image/jpeg",
        alt: "Noo Stop Zeera – Fizzy Cumin-Flavoured Drink",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Noo Stop – A Refreshing Twist of Zeera",
    description:
      "Meet Noo Stop Zeera, a refreshing fizzy zeera drink crafted for everyday moments.",
    images: [ogImageUrl],
  },
};
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.BrandName,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: siteConfig.About,
      email: siteConfig.Contact.Email,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.BrandName,
      url: siteUrl,
      description: siteConfig.Description,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};
export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: "Refreshing",
      subtitle: "Fizz",
    },
    {
      icon: Flower,
      title: "Rich Zeera",
      subtitle: "Flavour",
    },
    {
      icon: Smile,
      title: "Perfect for",
      subtitle: "Everyday",
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col mt-0 items-center justify-center   ">
        <section className="relative w-full overflow-hidden lg:h-[580px]">
          {/* Desktop Image */}
          <Image
            src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/hero.png"
            alt="Noo Stop Zeera"
            width={1920}
            height={1080}
            priority
            className="hidden w-full h-auto lg:block lg:absolute lg:top-0 lg:left-0"
            
          />

          {/* Mobile + Tablet Image */}
          <Image
            src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/mobile-hero.png"
            alt="Noo Stop Zeera"
            width={1920}
            height={1080}
            priority
            className="block w-full h-auto lg:hidden"
            
          />

          {/* Hero Heading */}
          <div className="absolute top-[58%] left-[5%] md:left-[5%] lg:left-[10%] md:top-[40%] lg:top-[45%] z-20 -translate-y-1/2">
            <div className="absolute left-[10%] grid md:gap-6 lg:gap-0  md:top-[30%] z-20 -translate-y-1/2">
              <div className=" -rotate-[4deg] md:-rotate-[6deg] origin-center">
                <h1
                  className={`   relative bottom-8 left-0 md:bottom-0 md:left-0 grid  font-black italic  tracking-[-0.04em] md:mt-12  `}
                >
                  {/* Line 1 */}
                  <span className="ml-2 text-xl text-white md:text-4xl lg:text-5xl -translate-y-[0.25em]  md:-translate-y-[0em ] lg:-translate-y-[0.1em]">
                    A Refreshing
                  </span>

                  {/* Line 2 */}
                  <span className="relative ml-2 md:ml-13 mt-1  text-4xl text-[#F5D91D] md:text-5xl lg:text-7xl -translate-y-[0.6em]  md:-translate-y-[0.1em] lg:-translate-y-[0.25em] ">
                    Twist of
                    {/* Three decorative strokes */}
                    <svg
                      className="absolute -right-1 rotate-16 top-0 md:-top-3 lg:top-2 h-16 w-10 md:right-8 lg:-right-3 md:h-22 md:w-16"
                      viewBox="0 0 70 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 30 Q25 5 42 2 Q30 20 10 30" fill="#F5D91D" />
                      <path
                        d="M16 48 Q45 28 65 35 Q45 43 16 48"
                        fill="#F5D91D"
                      />
                      <path
                        d="M20 65 Q45 58 60 72 Q40 67 20 65"
                        fill="#F5D91D"
                      />
                    </svg>
                  </span>

                  {/* Line 3 */}
                  <span className="relative ml-6 md:ml-18 lg:ml-33 mt-1 text-5xl text-white md:text-7xl lg:text-8xl -translate-y-[0.7em]  md:-translate-y-[0.3em] lg:-translate-y-[0.35em]">
                    Zeera.
                    {/* Curved Brush Underline */}
                    <svg
                      className="absolute -bottom-3 md:-bottom-8 lg:-bottom-6 left-0  w-[80%] md:w-[70%] lg:w-full"
                      viewBox="0 0 320 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 25 Q155 -5 315 14 Q165 12 5 32 Z"
                        fill="#F5D91D"
                      />
                      <path
                        d="M35 34 Q160 18 290 25"
                        stroke="#F5D91D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.7"
                      />
                    </svg>
                  </span>
                </h1>
              </div>
              <div className=" flex flex-col items-start gap-4  md:gap-7 lg:gap-4 -translate-y-[2em] ">
                <p className="mt-4 text-xs md:text-lg lg:text-lg text-gray-200 md:text-white w-[80%] md:w-[100%] lg:w-[80%]  relative bottom-7 md:-bottom-9 lg:-bottom-2 md:mt-4">
                  Meet Noo Stop Zeera - a fizzy, refreshing, cumin-flavoured
                  beverage made for your everyday moments.
                </p>
                <div className="flex flex-col md:flex-col lg:flex-row gap-1 md:gap-3 lg:gap-1 relative  bottom-8  md:-bottom-10  lg:-bottom-2">
                  <Link
                    href="/our-product"
                    className="bg-[#F5D91D] text-black px-2 py-1.5 md:px-6 md:py-3 rounded-full font-bold hover:bg-[#e0c51a] cursor-pointer ease-in duration-300 w-[50vw] md:w-[45vw] md:w-auto text-sm md:text-base flex justify-center items-center lg:w-auto"
                  >
                    Discover Noo Stop Zeera
                  </Link>
                  <Link
                    href="/contact-us"
                    className=" lg:ml-4 bg-black/20 text-white border-2 border-[#F5D91D] px-2 py-1.5 md:px-6 md:py-3 rounded-full font-bold hover:bg-[#F5D91D] hover:text-black cursor-pointer ease-in duration-300 text-sm md:text-base flex justify-center items-center w-[50vw] md:w-[45vw] lg:w-auto"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-8 flex w-full flex-col items-center justify-between gap-6 overflow-hidden px-4 pt-0 pb-0 sm:px-6 md:-mb-8 md:flex-row md:gap-4 md:px-4 lg:gap-10 lg:px-0">
          {/* LEFT CONTENT */}
          <div className="flex w-full flex-col justify-center px-2 sm:px-6 md:w-[52%] md:px-2 lg:w-[50%] lg:px-8">
            <div className="relative flex flex-col gap-5 md:-top-1 md:gap-4 md:px-2 lg:gap-5">
              <h2 className="origin-left -rotate-[2deg] text-4xl font-bold italic tracking-[-0.04em] sm:text-5xl md:text-[clamp(28px,3.6vw,38px)] lg:text-6xl">
                Your New <br className="md:hidden lg:block" />
                <span className="text-green-400">Refreshing Stop.</span>
              </h2>

              <p className="w-full max-w-[500px] text-sm leading-relaxed text-gray-600 sm:text-base md:w-full md:text-sm lg:w-[80%] lg:text-base">
                Noo Stop is more than just a drink — it&apos;s a refreshing break in
                your busy day. With the perfect blend of fizzy freshness and
                zeera flavour, Noo Stop brings joy in every sip.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex w-full items-center justify-center md:w-[48%] lg:w-[50%]">
            {/* Decorative SVG */}
            <svg
              className="absolute left-[8%] top-[5%] z-10 h-12 w-9 rotate-13 sm:left-[15%] sm:h-16 sm:w-12 md:-left-[5%] md:top-[8%] md:h-14 md:w-10 lg:-left-[8%] lg:top-[12%] lg:h-22 lg:w-16"
              viewBox="0 0 70 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(70, 0) scale(-1, 1)">
                <path
                  d="M10 30 Q25 5 42 2 Q30 20 10 30 Z"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M16 48 Q45 28 65 35 Q45 43 16 48 Z"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M20 65 Q45 58 60 72 Q40 67 20 65 Z"
                  fill="var(--secondary)"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            <Image
              src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/noo-stop-zeera-drink-glass.png"
              alt="Noo Stop Zeera refreshing drink"
              width={1000}
              height={1000}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </section>

        <section className="relative w-full mt-6 md:mt-0  ">
          <div>
            {/* Background */}
            <Image
              className=" w-full md:w-[100vw] h-auto"
              src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/noo-stop-zeera-bottle-splash.png"
              alt="noo-stop-zeera-bottle-splash"
              width={1000}
              height={1000}
              loading="eager"
            />
          </div>

          {/* Content */}
          <div className="absolute top-20 right-10 md:top-22 lg:top-38 md:-right-8 lg:right-0 flex  flex-col md:flex-row  items-center  w-[50%]  ">
            {/* LEFT SIDE */}
            <div className="flex flex-1 flex-col items-start">
              {/* Heading */}
              <div className="relative bottom-12  left-[25%] md:left-0 md:bottom-0 lg:bottom-0  mb-6 -rotate-[5deg] origin-left">
                <h2 className="flex flex-col items-start font-black italic tracking-[-0.04em] leading-[0.9]">
                  <span className="text-2xl text-white md:text-4xl lg:text-5xl">
                    Noo Stop
                  </span>

                  <span className="relative text-5xl text-[#F5D91D] md:text-7xl lg:text-8xl -translate-y-[0.25em] md:-translate-y-[0.1em]">
                    Zeera
                    {/* Decorative strokes */}
                    <svg
                      className="absolute -right-12 top-0 h-16 w-12 md:-right-16 md:h-20 md:w-16  hidden md:flex"
                      viewBox="0 0 70 100"
                      fill="none"
                    >
                      <path d="M10 30 Q25 5 42 2 Q30 20 10 30" fill="#F5D91D" />
                      <path
                        d="M16 48 Q45 28 65 35 Q45 43 16 48"
                        fill="#F5D91D"
                      />
                      <path
                        d="M20 65 Q45 58 60 72 Q40 67 20 65"
                        fill="#F5D91D"
                      />
                    </svg>
                  </span>
                </h2>
              </div>

              {/* Serving Size */}
              <div className="mb-4 relative bottom-18 left-[25%] md:left-0  md:bottom-0 flex items-center gap-2 text-white">
                <BottleWine
                  size={27}
                  strokeWidth={1.8}
                  className="text-[#F5D91D]"
                />
                <span className="text-xl font-bold">160 ml</span>
              </div>

              {/* Description */}
              <p className="hidden md:flex mb-7 text-base max-w-[340px]  leading-relaxed text-white/90 ">
                A fizzy, refreshing cumin-flavoured drink that keeps you cool
                and fresh.
              </p>

              {/* CTA */}
              <Link
                href="/our-product"
                className="inline-flex items-center gap-2 md:gap-3 rounded-full bg-[#F5D91D] px-4 md:px-7 py-1.5 md:py-3.5 text-sm font-bold text-[#123D24] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A8E629] relative bottom-20 left-[25%] md:left-0  md:bottom-0"
              >
                Explore Product
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex  flex-1 items-center gap-8 md:justify-center">
              {/* Vertical Divider */}
              <div className="hidden h-[300px] w-px bg-[#F5D91D]/70 md:block" />

              {/* Features */}
              <div className="flex flex-col gap-7">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div key={index} className="flex items-center gap-5">
                      {/* Icon Circle */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#F5D91D] text-[#F5D91D]">
                        <Icon size={33} strokeWidth={1.7} />
                      </div>

                      {/* Feature Text */}
                      <div className="flex flex-col text-lg font-semibold leading-tight text-[#FFF4B0]">
                        <span>{feature.title}</span>
                        <span>{feature.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* mobile features */}

          <div className="flex w-full items-center justify-center bg-[var(--secondary)] px-3 py-4 md:px-8 md:py-5 lg:hidden">
            {/* Features */}
            <div className="grid w-full max-w-[900px] grid-cols-3 gap-2 md:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex min-w-0 flex-col items-center justify-start gap-2 text-center md:gap-3"
                  >
                    {/* Icon Circle */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#F5D91D] text-[#F5D91D] sm:h-14 sm:w-14 md:h-16 md:w-16">
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        className="md:h-8 md:w-8"
                      />
                    </div>

                    {/* Feature Text */}
                    <div className="flex flex-col text-[11px] font-semibold leading-tight text-[#FFF4B0] sm:text-sm md:text-base">
                      <span>{feature.title}</span>
                      <span>{feature.subtitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative flex w-full  items-center justify-between overflow-hidden px-5 pt-10 pb-0 sm:px-8 md:min-h-[200px] md:flex-row md:px-10 md:py-4 lg:px-20 mb-3">
          {/* LEFT CONTENT */}
          <div className="flex w-full  flex-col gap-5 md:w-[75%] md:flex-row md:items-center md:gap-4 lg:w-[80%]">
            {/* Icon + Heading + Description */}
            <div className="flex items-start gap-3 sm:gap-4 md:items-center">
              {/* Handshake Icon */}
              <div className="shrink-0 hidden md:block">
                <FaHandshake
                  size={48}
                  className="fill-[var(--secondary)] sm:h-[60px] sm:w-[60px]"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block h-[85px] w-[2px] shrink-0 bg-[var(--primary)] sm:h-[90px] md:h-[80px]" />

              {/* Text */}
              <div className="flex min-w-0 flex-col gap-2">
                <h2 className="bg-[image:var(--tertiary-linear-gradient)] bg-clip-text text-2xl font-bold italic text-transparent sm:text-3xl">
                  Let&apos;s Grow Together
                </h2>

                <p className="max-w-[430px] text-sm leading-relaxed text-gray-600 sm:text-base">
                  Retailers and Distributors join the Noo Stop family and be
                  part of our refreshing journey.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pl-0 sm:pl-16 md:pl-0 ">
              <Link
                href="/b2b-partnership"
                className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--button-primary)] px-3 py-2 md:px-6 md:py-3 text-sm font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--lime)]"
              >
                Become A Partner
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT STORE IMAGE */}
          <div className="relative flex w-full right-16 top-6 md:top-0 md:right-0 items-end justify-center overflow-visible pt-5 md:w-[25%] md:justify-end md:pt-0 lg:w-[20%]">
            <Image
              src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/store.png"
              alt="Noo Stop retail partnership store"
              width={400}
              height={400}
              sizes="(max-width: 767px) 260px, 280px"
              className="h-auto w-[260px] max-w-none shrink-0 object-contain sm:w-[350px] md:w-[200px] lg:w-[280px]"
            />
          </div>
        </section>
      </div>
    </>
  );
}
