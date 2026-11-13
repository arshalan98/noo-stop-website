"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppURL } from "@/lib/config/site";
import { FaWhatsapp, FaInstagram, FaFacebookF ,FaYoutube } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/our-product" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms", href: "/terms-of-service" },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: "WhatsApp",
      href: getWhatsAppURL(),
      icon: FaWhatsapp,
    },
    {
      name: "Instagram",
      href: siteConfig.Socials.Instagram,
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: siteConfig.Socials.Facebook,
      icon: FaFacebookF,
    },
    {
      name: "YouTube",
      href: siteConfig.Socials.YouTube,
      icon: FaYoutube,
    },
  ].filter((social) => social.href && social.href !== "#");

  return (
    <footer className="w-full bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 md:px-10 md:py-7 lg:px-12 lg:py-6">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[1fr_auto] md:gap-y-6 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Noo Stop Home"
            className="mx-auto w-fit shrink-0 md:mx-0"
          >
            <Image
              src="/logo.png"
              alt="Noo Stop Logo"
              width={120}
              height={100}
              className="h-auto w-[105px] object-contain sm:w-[115px] md:w-[110px] lg:w-[100px]"
            />
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="w-full md:col-span-2 md:row-start-2 lg:col-span-1 lg:row-start-auto"
          >
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:mx-auto sm:max-w-[420px] md:flex md:max-w-none md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-3 lg:justify-end lg:gap-x-4 lg:text-xs xl:text-sm">
              {footerLinks.map((link) => (
                <li key={link.name} className="min-w-0">
                  <Link
                    href={link.href}
                    className="inline-block transition-colors duration-200 hover:text-[var(--yellow)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 md:col-start-2 md:row-start-1 lg:col-auto lg:row-auto lg:border-l lg:border-white/25 lg:pl-5">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--yellow)] hover:bg-white/10 hover:text-[var(--yellow)] md:h-9 md:w-9"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>

          {/* Copyright - Desktop */}
          <p className="hidden whitespace-nowrap text-xs text-white/65 lg:block">
            © {currentYear} Noo Stop.
          </p>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="mt-7 border-t border-white/15 pt-5 md:mt-6 lg:hidden">
          <p className="text-center text-xs text-white/65">
            © {currentYear} Noo Stop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
