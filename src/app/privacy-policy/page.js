import LegalPageShell from "@/components/legal/LegalPageShell";
import { siteConfig } from "@/lib/config/site";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
const ogImageUrl = new URL("/og-image.png", siteUrl).toString();

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read Noo Stop's privacy policy to learn how contact form enquiries, WhatsApp messages and basic website technical information are handled.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/privacy-policy`,
    siteName: siteConfig.BrandName,
    title: "Privacy Policy | Noo Stop",
    description:
      "Learn how Noo Stop handles contact enquiries through WhatsApp and protects your privacy.",
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
    title: "Privacy Policy | Noo Stop",
    description:
      "Our approach to privacy, contact enquiries and WhatsApp communication.",
    images: [ogImageUrl],
  },
};

const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    paragraphs: [
      `${siteConfig.BrandName} is an Indian beverage brand. This website shares information about ${siteConfig.Product.Name} and helps visitors contact our team for questions, feedback and business enquiries.`,
      `For questions about this policy or personal information you have shared with us, email ${siteConfig.Contact.Email}.`,
    ],
  },
  {
    id: "information-you-provide",
    title: "Information you choose to provide",
    paragraphs: [
      "Our contact form asks for your name, email address, phone number, enquiry subject and message. You may also contact us directly by phone, email or WhatsApp.",
      "You do not need to create an account, subscribe to a newsletter or provide payment information to browse this website.",
    ],
  },
  {
    id: "whatsapp-enquiries",
    title: "How our WhatsApp contact form works",
    paragraphs: [
      "When you select Send Message, your form details are used to prepare a WhatsApp message and open WhatsApp. The website does not submit your enquiry to a Noo Stop database or save it in an on-site enquiry system.",
      "Opening the WhatsApp link may share the prepared message details with WhatsApp. Our team receives your message when you choose to send it in WhatsApp. WhatsApp handles information under its own privacy practices and terms.",
    ],
    note: "Please avoid including passwords, payment card numbers or other highly sensitive information in your message.",
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    paragraphs: [
      "We use information you voluntarily send to respond to enquiries, provide product information, handle feedback or discuss retailer and distributor opportunities.",
      "This website does not offer newsletter sign-ups or marketing subscriptions. We do not sell your contact information or use the contact form to automatically subscribe you to promotional messages.",
    ],
  },
  {
    id: "technical-information",
    title: "Website technology, cookies and logs",
    paragraphs: [
      "Our website is primarily a static informational website. Based on its current intended setup, we do not intentionally use advertising pixels, marketing trackers or newsletter cookies.",
      "Like most websites, hosting and security providers may process technical data such as IP addresses, browser information, request times and basic server logs to deliver, secure and troubleshoot the website. These technical records are separate from our WhatsApp contact enquiries.",
      "If analytics, marketing tools or additional data-collection features are introduced later, this policy should be updated to explain them before they are used.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services and sharing",
    paragraphs: [
      "We use third-party website hosting services to make this site available and WhatsApp to enable direct conversations. Those providers may process data under their own privacy policies.",
      "We may share enquiry details only where reasonably necessary to handle your request, operate our services, comply with law or protect legitimate rights. We do not sell personal information to advertisers.",
    ],
    link: {
      href: "https://www.whatsapp.com/legal/privacy-policy",
      label: "Read WhatsApp's Privacy Policy",
    },
  },
  {
    id: "retention-and-security",
    title: "Data retention and security",
    paragraphs: [
      "This website does not maintain a database of submitted contact forms. Messages you send through WhatsApp or email may remain in our business communication records for as long as reasonably needed to respond, follow up, manage legitimate business needs or meet legal requirements.",
      "We take reasonable steps to protect information in our control, but no internet-based communication or third-party platform can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "your-choices",
    title: "Your privacy choices",
    paragraphs: [
      `You can choose not to send an enquiry. You may contact us at ${siteConfig.Contact.Email} to ask about personal information you previously shared, request a correction or request deletion where applicable. We will review requests in accordance with applicable law and any legitimate retention requirements.`,
      "You can also use WhatsApp's own privacy, message and account controls. We cannot independently control information retained by WhatsApp or other external services.",
    ],
  },
  {
    id: "children-and-updates",
    title: "Children and policy updates",
    paragraphs: [
      "This website is intended to provide general brand and product information, and it is not designed to solicit personal information from children. If you believe a child has shared personal information with us, please contact us.",
      "We may revise this policy when our website, services or legal obligations change. The updated version and its revision date will appear on this page.",
    ],
  },
];

const page = () => {
  return (
    <div>
      <LegalPageShell
        type="privacy"
        title="Privacy Policy"
        description="Your trust matters. Here is a clear explanation of what happens when you browse our website or reach out to our team."
        summary="Noo Stop is an informational website. Our contact form prepares a WhatsApp message instead of storing an enquiry in our website database. WhatsApp and our hosting provider may process information separately."
        highlights={[
          "No account or newsletter required",
          "Contact form opens WhatsApp",
          "No on-site enquiry database",
        ]}
        sections={sections}
      />
    </div>
  );
};

export default page;
