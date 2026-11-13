import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config/site";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["800", "900"],
  style: ["italic"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteConfig.BrandName} | ${siteConfig.Tagline}`,
    template: `%s | ${siteConfig.BrandName}`,
  },

  description: siteConfig.Description,

  applicationName: siteConfig.BrandName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.BrandName,
    title: `${siteConfig.BrandName} | ${siteConfig.Tagline}`,
    description: siteConfig.Description,
    images: [
      {
        url: "/hero.png",
        alt: siteConfig.ProductName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.BrandName} | ${siteConfig.Tagline}`,
    description: siteConfig.Description,
    images: ["/hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col  `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
