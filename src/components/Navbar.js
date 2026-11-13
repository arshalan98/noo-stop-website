"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Product", href: "/our-product" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50  bg-transparent w-[90vw] md:w-full">
      <div className="flex items-center  justify-between px-5 py-3 md:px-10 lg:px-20 lg:py-4">
        {/* Logo */}
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            className="h-auto w-16 object-contain lg:h-20 lg:w-20"
            src="/logo.png"
            alt="Noo Stop Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <div
          className={`hidden items-center justify-center gap-4 rounded-xl px-10 py-2 shadow-md backdrop-blur-md transition-colors duration-300 lg:flex ${
            isScrolled ? "bg-[#123D24]/50" : "bg-[#123D24]/40"
          }`}
        >
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.href} className="group">
                <Link
                  href={link.href}
                  className="font-medium text-white transition-colors duration-300 hover:text-[var(--yellow)]"
                >
                  {link.name}
                </Link>

                <span className="block h-0.5 w-0 bg-[var(--yellow)] transition-all duration-300 ease-in-out group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/contact-us">
            <Button className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--button-primary)] px-3 py-1.5 text-sm font-semibold text-black transition-all ease-in-out hover:scale-x-105 hover:rotate-3">
              Get in touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md lg:hidden translate-x-10 md:-translate-x-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        id="mobile-navigation"
        className={`absolute left-[10%] top-18 w-[80vw] overflow-hidden
    border-t border-white/10 bg-[#123D24]/30 shadow-xl backdrop-blur-xl
    transition-[max-height,opacity,transform,visibility]
    duration-500 ease-in-out lg:hidden
    ${
      isMenuOpen
        ? "visible max-h-[500px] opacity-100 "
        : "invisible max-h-0 opacity-0 duration-500 ease-in-out"
    }`}
      >
        <div className="flex flex-col gap-6 px-6 py-7 md:px-10">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-white/10 pb-3 text-lg font-medium text-white transition-colors duration-300 hover:text-[var(--yellow)]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <Link
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="group flex w-fit items-center justify-center gap-2 rounded-xl bg-[var(--button-primary)] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[var(--lime)]"
          >
            Get in touch
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
