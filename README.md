# Noo Stop Website

The public website for **Noo Stop Zeera**, an Indian beverage brand. The site includes brand and product information, contact options, legal pages, and metadata for search engines and social link previews.

## Tech stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Lucide React and React Icons

## Features

- Responsive home, product, about, and contact pages
- Product details, ingredients, and nutrition information
- Contact form that prepares an enquiry and opens WhatsApp; enquiries are not stored by a website backend
- Privacy Policy and Terms of Service pages
- Open Graph and Twitter metadata, JSON-LD structured data, `robots.txt`, and `sitemap.xml`
- Product and hero imagery served from a public Cloudflare R2 bucket

## Pages

| Route | Description |
| --- | --- |
| `/` | Brand home page |
| `/our-product` | Noo Stop Zeera product details |
| `/about-us` | Brand story and vision |
| `/contact-us` | Contact details and WhatsApp enquiry form |
| `/privacy-policy` | Privacy information |
| `/terms-of-service` | Website terms |

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm

### Install and run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site uses `http://localhost:3000` as the default site URL when `NEXT_PUBLIC_SITE_URL` is not set.

To set a different local or preview URL, create or update `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-preview-domain.example
```

Restart the development server after changing the value. Do not commit `.env.local`; environment files are ignored by Git.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  app/                 App Router pages, shared layout, metadata, robots, sitemap
  components/          Shared navigation, footer, contact, and legal components
  lib/config/site.js   Brand, product, business, and contact content
public/
  logo.png             Brand logo
  og-image.jpg         Compressed social preview image
  og-image.png         Original social preview image
```

## Configuration and content

- Update brand, product, business, contact, and social details in [`src/lib/config/site.js`](./src/lib/config/site.js).
- Page content and route-specific metadata live in the corresponding files under [`src/app`](./src/app).
- The shared header and footer are included by [`src/app/layout.js`](./src/app/layout.js).
- `NEXT_PUBLIC_SITE_URL` is used to generate canonical URLs, Open Graph URLs, the sitemap, and the robots sitemap URL. Set it to the full canonical domain, including `https://`.
- For production, configure `NEXT_PUBLIC_SITE_URL` in the hosting provider's environment settings as `https://www.noostopzeera.com`, then rebuild/redeploy. Do not use a temporary ngrok address in the production environment.
- External product imagery is allowed by the remote image pattern in [`next.config.mjs`](./next.config.mjs). If the image host changes, update that configuration too.

## Social sharing previews

The site uses `public/og-image.jpg` for Open Graph and Twitter previews. The image is served at `/og-image.jpg`; metadata builds its absolute URL from `NEXT_PUBLIC_SITE_URL`.

Social apps may cache a link preview separately for each page URL. After changing preview metadata or the image, deploy the update and test with a fresh URL (for example, add a temporary query such as `?v=2`). The image itself should be publicly reachable over HTTPS.

## Deployment

The project can be deployed to Vercel or another host that supports Next.js. Set the production `NEXT_PUBLIC_SITE_URL` environment variable before building so canonical URLs and social metadata use the public domain.
