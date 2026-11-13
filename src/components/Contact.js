"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppURL } from "@/lib/config/site";
import CurvedBrush from "@/components/Curved_brush";
import {
  ArrowRight,
  Headset,
  Mail,
  MapPin,
  UserRound,
  Phone,
  List,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contact = siteConfig.Contact;

  const phone = contact.Phone?.trim() || "";
  const email = contact.Email?.trim() || "";
  const address = contact.Address?.trim() || "";
  const whatsappNumber = contact.WhatsApp?.replace(/\D/g, "") || "";

  const whatsappURL = getWhatsAppURL();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    const whatsappNumber = siteConfig.Contact.WhatsApp.replace(/\D/g, "");

    if (!whatsappNumber) {
      alert("WhatsApp number is not configured yet.");
      return;
    }

    const text = `Hello Noo Stop! 👋

*New Contact Enquiry*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Subject:* ${subject}

*Message:*
${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const inputClass =
    "w-full rounded-lg border border-[#D4D9C7] bg-white/40 px-4 py-3 text-sm text-[#123D24] outline-none transition-colors placeholder:text-gray-400 focus:border-[#218A35] focus:ring-2 focus:ring-[#218A35]/15";

  const labelClass =
    "mb-2 flex items-center gap-2 text-sm font-semibold text-[#123D24]";

  return (
    <main className="w-full overflow-hidden bg-[#F8F6ED]">
      {/* ======================================
          1. CONTACT HERO
      ====================================== */}
      <section className="relative w-full overflow-hidden lg:h-[580px]">
        {/* Desktop Background */}
        <Image
          src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/noo-stop-zeera-product-hero.png"
          alt="Noo Stop Contact Us"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />

        {/* Mobile + Tablet Background */}
        <Image
          src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/mobile-hero.png"
          alt="Noo Stop Contact Us"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="block h-auto w-full lg:hidden"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-start px-[7%] pt-[22%] md:px-[8%] md:pt-[28%] lg:items-center lg:px-[10%] lg:pt-0">
          <div className="flex max-w-[760px] flex-col items-start">
            {/* Heading */}
            <div className="relative -rotate-[4deg]">
              <h1 className="flex flex-col font-black italic leading-[0.95] tracking-[-0.05em]">
                <span className="text-4xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  We&apos;re Here
                </span>

                <span className="text-5xl text-[var(--yellow)] sm:text-7xl md:text-8xl lg:text-9xl">
                  to Help.
                </span>
              </h1>

              <CurvedBrush classes="absolute -bottom-4 left-[18%] h-5 w-[72%] md:-bottom-6 md:h-7 lg:-bottom-8 lg:h-9" />

              {/* Decorative Strokes */}
              <svg
                className="absolute -right-6 top-[45%] h-14 w-10 rotate-12 md:-right-12 md:h-20 md:w-14"
                viewBox="0 0 70 100"
                fill="none"
              >
                <path d="M10 30 Q25 5 42 2 Q30 20 10 30" fill="#F5D91D" />
                <path d="M16 48 Q45 28 65 35 Q45 43 16 48" fill="#F5D91D" />
                <path d="M20 65 Q45 58 60 72 Q40 67 20 65" fill="#F5D91D" />
              </svg>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-[160px] text-sm font-medium leading-relaxed text-white sm:max-w-[340px] sm:text-base md:mt-10 md:text-lg lg:max-w-[450px] lg:text-xl">
              Have a question about Noo Stop Zeera?
              <br />
              Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================
          2. CONTACT INFORMATION CARDS
      ====================================== */}
      <section className="w-full px-4 py-7 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1250px] grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {/* Customer Care */}
          <div className="flex min-h-[185px] flex-col items-center justify-between rounded-2xl bg-[#F5F1DF] px-3 py-5 text-center md:min-h-[210px] md:px-5">
            <Headset size={42} strokeWidth={2} className="text-[#123D24]" />

            <div>
              <h2 className="text-base font-black italic text-[#123D24] md:text-xl">
                Customer Care
              </h2>

              <p className="mt-1 text-xs text-[#374151] md:text-sm">
                For product and general enquiries.
              </p>
            </div>

            {phone ? (
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="rounded-full bg-[#F5D91D] px-4 py-2 text-xs font-bold text-[#123D24] md:text-sm"
              >
                {phone}
              </a>
            ) : (
              <span className="rounded-full bg-[#F5D91D] px-4 py-2 text-xs font-semibold text-[#123D24]">
                Number coming soon
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex min-h-[185px] flex-col items-center justify-between rounded-2xl bg-[#F5F1DF] px-3 py-5 text-center md:min-h-[210px] md:px-5">
            <Mail size={42} strokeWidth={2} className="text-[#123D24]" />

            <div>
              <h2 className="text-base font-black italic text-[#123D24] md:text-xl">
                Email
              </h2>

              <p className="mt-1 text-xs text-[#374151] md:text-sm">
                Write to us anytime.
              </p>
            </div>

            <a
              href={`mailto:${email}`}
              className="max-w-full break-all rounded-full bg-[#F5D91D] px-3 py-2 text-[11px] font-bold text-[#123D24] md:text-xs"
            >
              {email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex min-h-[185px] flex-col items-center justify-between rounded-2xl bg-[#F5F1DF] px-3 py-5 text-center md:min-h-[210px] md:px-5">
            <FaWhatsapp size={44} className="text-[#123D24]" />

            <div>
              <h2 className="text-base font-black italic text-[#123D24] md:text-xl">
                WhatsApp
              </h2>

              <p className="mt-1 text-xs text-[#374151] md:text-sm">
                Chat with us directly on WhatsApp.
              </p>
            </div>

            {whatsappNumber ? (
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#F5D91D] px-4 py-2 text-xs font-bold text-[#123D24] md:text-sm"
              >
                +{whatsappNumber}
              </a>
            ) : (
              <span className="rounded-full bg-[#F5D91D] px-4 py-2 text-xs font-semibold text-[#123D24]">
                Number coming soon
              </span>
            )}
          </div>

          {/* Business Address */}
          <div className="flex min-h-[185px] flex-col items-center justify-between rounded-2xl bg-[#F5F1DF] px-3 py-5 text-center md:min-h-[210px] md:px-5">
            <MapPin size={44} fill="#123D24" stroke="white" strokeWidth={1.6} />

            <div>
              <h2 className="text-base font-black italic text-[#123D24] md:text-xl">
                Business Address
              </h2>

              <p className="mt-1 text-xs text-[#374151] md:text-sm">
                Our registered business address.
              </p>
            </div>

            <span className="rounded-full bg-[#F5D91D] px-3 py-2 text-xs font-semibold text-[#123D24]">
              {address || "Address will be updated soon"}
            </span>
          </div>
        </div>
      </section>

      {/* ======================================
          3. CONTACT FORM + WHATSAPP CARD
      ====================================== */}
      <section className="w-full px-4 py-4 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.55fr_1fr] lg:gap-6">
          {/* LEFT - CONTACT FORM */}
          <div className="rounded-[24px] border border-[#E5E0CD] bg-[#FAF8ED] p-5 shadow-md sm:p-7 lg:p-8">
            {/* Form Heading */}
            <div className="relative mb-7 w-fit">
              <h2 className="-rotate-[2deg] text-3xl font-black italic tracking-[-0.05em] text-[#123D24] sm:text-4xl lg:text-5xl">
                Send Us a Message
              </h2>

              <svg
                className="absolute -right-8 -top-3 h-10 w-8 rotate-12"
                viewBox="0 0 70 100"
                fill="none"
              >
                <path d="M10 30 Q25 5 42 2 Q30 20 10 30" fill="#218A35" />
                <path d="M16 48 Q45 28 65 35 Q45 43 16 48" fill="#218A35" />
                <path d="M20 65 Q45 58 60 72 Q40 67 20 65" fill="#218A35" />
              </svg>

              <p className="mt-3 text-sm font-medium leading-relaxed text-[#374151] sm:text-base">
                Have a query, suggestion or business enquiry?
                <br />
                Fill out the form and we&apos;ll get back to you soon.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className={labelClass}>
                    <UserRound size={18} />
                    Full Name <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    <Mail size={18} />
                    Email Address <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    <Phone size={18} />
                    Phone Number <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={labelClass}>
                    <List size={18} />
                    Subject <span className="text-red-600">*</span>
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Business Enquiry">Business Enquiry</option>
                    <option value="Distribution Partnership">
                      Distribution Partnership
                    </option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  <MessageSquare size={18} />
                  Message <span className="text-red-600">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Submit */}
              <div className="flex">
                <button
                  type="submit"
                  className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#F5D91D] px-8 py-3 text-sm font-bold text-[#123D24] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A8E629] sm:text-base"
                >
                  Send Message
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT - WHATSAPP CARD */}
          {/* RIGHT - WHATSAPP CARD */}
          <div className="relative h-[550px] md:h-[1050px] lg:h-full w-full overflow-hidden rounded-[24px] bg-[#07551B]">
            {/* Background Image */}
            <Image
              src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/noo-stop-zeera-fizzy-drink-mobile.png"
              alt="Refreshing Noo Stop Zeera drink"
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover object-center"
            />
            {/* Baaki WhatsApp content same rahega */}

            {/* Top dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#004318]/75 via-[#004318]/20 to-transparent" />

            {/* WhatsApp Content */}
            <div className="relative z-10 flex flex-col items-center px-5  pt-4 md:top-20 lg:top-0 md:t-8 text-center sm:pt-10">
              {/* WhatsApp Icon */}
              <div className="relative mb-5 -left-23 md:-left-30">
                <FaWhatsapp size={58} className="text-white drop-shadow-lg" />

                <svg
                  className="absolute -right-10 -top-1 h-12 w-10 rotate-12"
                  viewBox="0 0 70 100"
                  fill="none"
                >
                  <path d="M10 30 Q25 5 42 2 Q30 20 10 30" fill="#F5D91D" />
                  <path d="M16 48 Q45 28 65 35 Q45 43 16 48" fill="#F5D91D" />
                  <path d="M20 65 Q45 58 60 72 Q40 67 20 65" fill="#F5D91D" />
                </svg>
              </div>

              {/* Heading */}
              <div className="-rotate-[4deg]">
                <h2 className="flex flex-col text-4xl font-black italic leading-[0.95] tracking-[-0.04em] sm:text-5xl relative bottom-7">
                  <span className="text-white">Let&apos;s Chat on</span>

                  <span className="text-[#F5D91D]">WhatsApp.</span>
                </h2>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-[290px] text-sm font-medium leading-relaxed text-white sm:text-base -translate-y-10 md:-translate-y-3 lg:-translate-y-8">
                Connect with us directly
                <br />
                for product enquiries.
              </p>

              {/* WhatsApp CTA */}
              {whatsappNumber ? (
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-10 hover:bg-[#1ebe5d] cursor-pointer -translate-y-14 md:-translate-y-3 lg:-translate-y-8"
                >
                  <FaWhatsapp size={19} />
                  Chat on WhatsApp
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              ) : (
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                  <FaWhatsapp size={19} />
                  WhatsApp coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          4. DISCOVER PRODUCT CTA
      ====================================== */}
      <section className="w-full px-4 pt-0 pb-2 md:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#106B20] via-[#0C571A] to-[#034014]">
          {/* Bottle Splash Image */}
          <div className="flex w-full justify-start lg:w-auto  ">
            <Image
              src="https://pub-eca4de83e2b44d3d8ef0ecb6fada2a54.r2.dev/Noo%20stop/noo-stop-zeera-footer-cta-splash.png"
              alt="Noo Stop Zeera Bottle Splash"
              width={1000}
              height={1000}
              className="h-auto w-[600px] object-contain sm:w-[380px] md:w-[500px] lg:w-[550px] absolute -bottom-2 -left-3"
            />
          </div>

          <div className="relative z-10 flex min-h-[160px] flex-col items-center justify-center gap-5 px-5 py-7 pl-[30%] text-center sm:min-h-[180px] md:flex-row md:justify-end md:gap-8 md:pl-[32%] md:pr-8 lg:min-h-[200px] lg:gap-10 lg:pr-12">
            {/* Heading */}
            <div className="relative -rotate-[3deg] lg:-left-25">
              <h2 className="flex flex-col text-2xl font-black italic leading-[0.95] tracking-[-0.04em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
                <span>Discover</span>
                <span className="text-[#F5D91D]">Noo Stop Zeera.</span>
              </h2>

              <CurvedBrush classes="absolute -bottom-4 left-[30%] h-5 w-[65%]" />
            </div>

            {/* Explore Product */}
            <Link
              href="/our-product"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F5D91D] px-5 py-2.5 text-xs font-bold text-[#123D24] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A8E629] sm:text-sm md:px-7 md:py-3"
            >
              Explore Product
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
