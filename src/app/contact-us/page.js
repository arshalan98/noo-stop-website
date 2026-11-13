import React from "react";
import Contact from "@/components/Contact";
import { siteConfig } from "@/lib/config/site";

export const metadata = {
  title: "Contact Us – Customer Support & Enquiries",

  description:
    "Contact Noo Stop for Zeera drink enquiries, customer support, product information, feedback and distribution partnerships. Connect with our team today.",

  alternates: {
    canonical: "/contact-us",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/contact-us",
    siteName: siteConfig.BrandName,
    title: "Contact Noo Stop – We're Here to Help",
    description:
      "Have questions about Noo Stop Zeera? Reach our team for customer support, product enquiries, feedback and business opportunities.",
    images: [
      {
        url: "/og-image.png",
        alt: "Contact Noo Stop – Customer Support and Enquiries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Noo Stop – We're Here to Help",
    description:
      "Get in touch with the Noo Stop team for product enquiries, customer support and business partnerships.",
    images: ["/og-image.png"],
  },
};

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${siteUrl}/contact-us#webpage`,
      name: "Contact Noo Stop",
      url: `${siteUrl}/contact-us`,
      description:
        "Contact Noo Stop for customer support, product enquiries, feedback and business partnerships.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: `${siteUrl}/contact-us`,
        },
      ],
    },
  ],
};
const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Contact />
    </>
  );
};

export default page;
