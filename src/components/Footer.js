"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppURL } from "@/lib/config/site";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Our Product", href: "/our-product" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms", href: "/terms-of-service" },
];

const IndianFlag = () => (
  <svg
    viewBox="0 0 36 24"
    width="27"
    height="18"
    role="img"
    aria-label="Indian flag"
    className="shrink-0 rounded-[2px]"
  >
    <rect width="36" height="8" fill="#FF9933" />
    <rect y="8" width="36" height="8" fill="#FFFFFF" />
    <rect y="16" width="36" height="8" fill="#138808" />
    <circle
      cx="18"
      cy="12"
      r="3.2"
      fill="none"
      stroke="#000080"
      strokeWidth="0.6"
    />
    {Array.from({ length: 24 }, (_, i) => {
      const angle = (i * Math.PI) / 12;

      return (
        <line
          key={i}
          x1={18 + Math.cos(angle) * 0.5}
          y1={12 + Math.sin(angle) * 0.5}
          x2={18 + Math.cos(angle) * 3}
          y2={12 + Math.sin(angle) * 3}
          stroke="#000080"
          strokeWidth="0.23"
        />
      );
    })}
  </svg>
);

const Footer = () => {
   const [currentYear, setCurrentYear] = useState(null)
 
  useEffect(() => {
     setCurrentYear(new Date().getFullYear())
  }, [])
  
   

  const socialLinks = [
    {
      name: "WhatsApp",
      href: getWhatsAppURL(),
      icon: FaWhatsapp,
    },
    {
      name: "Instagram",
      href: siteConfig.Socials?.Instagram,
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: siteConfig.Socials?.Facebook,
      icon: FaFacebookF,
    },
    {
      name: "YouTube",
      href: siteConfig.Socials?.YouTube,
      icon: FaYoutube,
    },
  ].filter(({ href }) => href && href !== "#");

  return (
    <footer className="relative isolate w-full overflow-hidden bg-[var(--primary)] text-white">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[var(--secondary)]/20 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-24 -z-10 h-64 w-64 rounded-full bg-[var(--lime)]/10 blur-[100px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-5 sm:px-8 lg:px-12 lg:pt-12">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1fr_1.2fr] lg:gap-14">

          {/* BRAND AREA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <Link href="/" aria-label="Noo Stop Home">
              <Image
                src="/logo.png"
                alt="Noo Stop Logo"
                width={140}
                height={120}
                className="h-auto w-[110px] object-contain sm:w-[125px]"
              />
            </Link>

            <h2 className="mt-4 text-[25px] leading-tight font-black italic tracking-tight sm:text-[30px]">
              <span className="text-white">Desi Swad.</span>
              <span className="mt-1 block text-[var(--yellow)]">
                Fizz Ka Naya Andaaz.
              </span>
            </h2>

            <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-white/70 sm:text-sm">
              Discover Noo Stop Zeera — a refreshing
              twist of zeera, made for your everyday
              moments.
            </p>

            {/* India Badge */}
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
              <IndianFlag />
              <span className="text-xs font-semibold tracking-wide text-white/90">
                Made in India
              </span>
              <span className="text-[var(--yellow)]">✦</span>
            </div>
          </div>

          {/* LINKS AND SOCIALS */}
          <div className="flex flex-col justify-center gap-7">

            {/* NAVIGATION */}
            <nav aria-label="Footer navigation">

              <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--lime)] lg:text-left">
                Quick Links
              </p>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:gap-y-5">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-block text-[13px] font-medium text-white/80 transition-colors duration-200 hover:text-[var(--yellow)] sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SEPARATOR */}
            <div className="h-px w-full bg-white/15" />

            {/* SOCIALS */}
            {socialLinks.length > 0 && (
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-white">
                    Stay Connected
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    Follow the refreshing journey.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      title={name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--yellow)] hover:bg-[var(--yellow)] hover:text-[var(--primary)]"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-9 border-t border-white/15 pt-5 lg:mt-12">

          <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">

            <p className="text-[11px] text-white/55 sm:text-xs">
              © {currentYear} Noo Stop. All rights reserved.
            </p>

            <p className="text-[11px] font-medium tracking-wide text-white/55 sm:text-xs">
              A Refreshing Twist of Zeera.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
