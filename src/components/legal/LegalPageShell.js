import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  FileText,
  ExternalLink,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

const LAST_UPDATED = "13 November 2026";

export default function LegalPageShell({
  type,
  title,
  description,
  summary,
  highlights,
  sections,
}) {
  const isPrivacy = type === "privacy";
  const Icon = isPrivacy ? ShieldCheck : FileText;
  const slug = isPrivacy ? "privacy-policy" : "terms-and-conditions";
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ).replace(/\/$/, "");
  const pageUrl = `${siteUrl}/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: `${title} | ${siteConfig.BrandName}`,
        description,
        url: pageUrl,
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: title, item: pageUrl },
        ],
      },
    ],
  };
  const otherPage = isPrivacy
    ? { href: "/terms-and-conditions", title: "Terms of Service" }
    : { href: "/privacy-policy", title: "Privacy Policy" };

  return (
    <main className="min-w-0 bg-[#F8F6ED] text-[#123D24]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Branded hero */}
      <header className="relative isolate overflow-hidden bg-[#123D24] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-52 h-[440px] w-[440px] rounded-full border-[75px] border-[#218A35]/35 sm:-right-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-52 -left-40 h-[330px] w-[330px] rounded-full border-[60px] border-[#A8E629]/10"
        />
        <div className="relative mx-auto max-w-[1250px] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pt-23">
          

          <div className="flex items-center justify-between gap-8">
            <div className="max-w-[760px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#A8E629] backdrop-blur-sm">
                <Icon size={16} aria-hidden="true" />
                Noo Stop · Legal
              </div>
              <h1 className="text-5xl font-black italic leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                {title}<span className="text-[#F5D91D]">.</span>
              </h1>
              <p className="mt-6 max-w-[650px] text-base leading-8 text-white/85 sm:text-lg">
                {description}
              </p>
              <p className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/70">
                <CalendarDays size={17} aria-hidden="true" />
                Last updated: {LAST_UPDATED}
              </p>
            </div>

            <div aria-hidden="true" className="hidden shrink-0 lg:block">
              <div className="flex h-52 w-52 rotate-[-9deg] items-center justify-center rounded-[45px] border border-white/20 bg-[#218A35]/70 shadow-[0_25px_90px_rgba(0,0,0,0.15)]">
                <Icon size={108} strokeWidth={1.15} className="text-[#F5D91D]" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-[1250px] px-4 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        {/* Short and readable summary */}
        <div className="relative -mt-10 rounded-[24px] border border-[#E6E4D5] bg-white p-6 shadow-[0_14px_45px_rgba(18,61,36,0.09)] sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F4D4] text-[#218A35]">
              <Icon size={25} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                The simple version
              </h2>
              <p className="mt-2 max-w-[900px] text-sm leading-7 text-[#475569] sm:text-base">
                {summary}
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 border-t border-[#E8E9DF] pt-6 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-2.5 text-sm font-semibold text-[#123D24]">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#218A35]" aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
          {/* Sticky desktop index; still visible on mobile */}
          <aside className="lg:sticky lg:top-24">
            <nav aria-label="On this page" className="rounded-[22px] border border-[#E3E6D8] bg-[#F1F1E6] p-5 sm:p-6">
              <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.13em] text-[#123D24]">
                On this page
              </h2>
              <ol className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="group flex items-start gap-3 rounded-lg px-2 py-2 text-sm text-[#516055] transition-colors hover:bg-white hover:text-[#218A35]">
                      <span className="font-bold tabular-nums text-[#218A35]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Policy text */}
          <div className="space-y-5">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-28 rounded-[22px] border border-[#E5E7DB] bg-white px-5 py-6 shadow-[0_4px_20px_rgba(18,61,36,0.035)] sm:px-8 sm:py-8"
              >
                <div className="mb-5 flex items-start gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5D91D] text-sm font-black text-[#123D24]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`${section.id}-heading`} className="pt-1 text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-3 text-sm leading-7 text-[#4B5563] sm:text-[15px] sm:leading-8">
                  {section.paragraphs?.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                  {section.bullets?.length > 0 && (
                    <ul className="space-y-2 pl-5 marker:text-[#218A35] list-disc">
                      {section.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="pl-1">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.link && (
                    <a href={section.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#218A35] underline underline-offset-4 hover:text-[#123D24]">
                      {section.link.label} <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                  {section.note && (
                    <div className="mt-5 rounded-xl border-l-4 border-[#A8E629] bg-[#F6F8EA] px-4 py-3 text-[#33513B]">
                      {section.note}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Clear route to contact and the other policy */}
        <div className="mt-10 grid gap-4 rounded-[24px] bg-[#123D24] p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
          <div>
            <h2 className="text-2xl font-black italic tracking-tight sm:text-3xl">
              Have a question<span className="text-[#F5D91D]">?</span>
            </h2>
            <p className="mt-2 text-sm leading-7 text-white/80">
              Contact {siteConfig.BrandName} at{" "}
              <a className="font-bold text-[#A8E629] underline underline-offset-4 hover:text-[#F5D91D]" href={`mailto:${siteConfig.Contact.Email}`}>
                {siteConfig.Contact.Email}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#F5D91D] px-5 py-3 text-sm font-bold text-[#123D24] transition-colors hover:bg-[#A8E629]">
              <Mail size={17} aria-hidden="true" /> Contact Us
            </Link>
            <Link href={otherPage.href} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
              {otherPage.title} <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}