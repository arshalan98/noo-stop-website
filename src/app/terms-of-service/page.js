import LegalPageShell from "@/components/legal/LegalPageShell";
import { siteConfig } from "@/lib/config/site";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
const ogImageUrl = new URL("/og-image.png", siteUrl).toString();

export const metadata = {
  title: "Terms of Service",
  description:
    "Read Noo Stop's terms of service for using our informational beverage website, product information, contact forms and WhatsApp links.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/terms-and-conditions`,
    siteName: siteConfig.BrandName,
    title: "Terms of Service | Noo Stop",
    description:
      "Understand the terms for using Noo Stop's informational website and contacting our team.",
    images: [{
      url: ogImageUrl,
      width: 1200,
      height: 630,
      type: "image/png",
      alt: "Noo Stop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Noo Stop",
    description: "Important information about using the Noo Stop website.",
    images: [ogImageUrl],
  },
};

const sections = [
  {
    id: "about-these-terms",
    title: "About these terms",
    paragraphs: [
      `These Terms of Service explain the rules for accessing and using the ${siteConfig.BrandName} website. By using this website, you agree to use it lawfully and in accordance with these terms. If you do not agree, please stop using the site.`,
      "The website is operated as an online presence for our beverage brand and is intended primarily for visitors in India.",
    ],
  },
  {
    id: "website-purpose",
    title: "What this website offers",
    paragraphs: [
      `This is an informational website featuring ${siteConfig.Product.Name}, our brand, product information and ways to contact us. It does not currently provide online shopping, user accounts, payment processing or order checkout.`,
      "A message or business enquiry sent through the site does not automatically create an order, sale, distributor appointment or other contractual relationship.",
    ],
  },
  {
    id: "product-information",
    title: "Product information and accuracy",
    paragraphs: [
      "We aim to keep product descriptions, pack sizes, ingredients, nutritional information, pricing references and other details accurate and current. However, information may be updated as labels, packaging or products change.",
      "For ingredients, allergens, nutritional values, maximum retail price, manufacture details, expiry and usage instructions, refer to the official product packaging and label for the specific bottle you purchase.",
      "Website content is for general information and is not intended as medical, dietary or professional advice.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use of our website",
    paragraphs: [
      "You may browse and use this website for lawful personal or business-information purposes. Please do not misuse the website or interfere with other visitors' access.",
    ],
    bullets: [
      "Do not attempt unauthorized access to website systems or services.",
      "Do not send spam, fraudulent requests, threats or unlawful material through our contact options.",
      "Do not copy our branding, images or content for commercial use without permission, except where law allows it.",
    ],
  },
  {
    id: "contact-and-whatsapp",
    title: "Enquiries and WhatsApp communication",
    paragraphs: [
      "Our contact form opens WhatsApp with a prepared message. You decide whether to send that message. There is no on-site database that stores form enquiries.",
      "When you contact us, please provide accurate information and do not send confidential passwords, payment card details or inappropriate content. We may respond using the details and channel you provide.",
      "WhatsApp is a third-party service with its own terms and privacy policies. Please read our Privacy Policy for more on information handling.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Branding and intellectual property",
    paragraphs: [
      `The ${siteConfig.BrandName} name, logos, website design, graphics, photographs and written material belong to ${siteConfig.BrandName} or their respective rights holders, unless otherwise stated.`,
      "You may view website content for ordinary personal use. No ownership rights are transferred to you by accessing this website.",
    ],
  },
  {
    id: "external-services",
    title: "Links and external services",
    paragraphs: [
      "This site may link to third-party platforms such as WhatsApp or social media. Those services are not operated by Noo Stop, and their own terms and privacy practices apply.",
      "We are not responsible for third-party websites or services to the extent permitted by applicable law.",
    ],
  },
  {
    id: "availability-and-liability",
    title: "Website availability and responsibility",
    paragraphs: [
      "We try to keep the website available and its information accurate, but temporary downtime, technical issues or unintentional errors may occur. We may change, suspend or update website content and features when necessary.",
      "To the extent permitted by applicable law, we are not liable for losses arising solely from interruptions, technical errors or reliance on outdated website information. Nothing in these terms excludes rights or responsibilities that cannot legally be excluded, including applicable consumer rights.",
    ],
  },
  {
    id: "governing-law",
    title: "Applicable law and updates",
    paragraphs: [
      "These terms are governed by applicable laws of India. Any disputes will be handled in accordance with those laws and applicable jurisdiction rules.",
      "We may update these terms as the website or our services change. Revised terms and their last-updated date will be shown here.",
    ],
  },
];

export default function page() {
  return (
    <LegalPageShell
      type="terms"
      title="Terms of Service"
      description="The straightforward guidelines for using our website, reading about our products and getting in touch with Noo Stop."
      summary="This site is here to introduce Noo Stop and help you contact us. There is no online checkout or payment processing. Product information is informative; always check the official bottle label for current details."
      highlights={[
        "Information-focused website",
        "No online checkout or payments",
        "Official product label takes priority",
      ]}
      sections={sections}
    />
  );
}