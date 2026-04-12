# mclrrn

A personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It presents my background, skills, projects, and contact details in a responsive single-page layout.

Live site: https://mclrrn.vercel.app

## Features

- Landing section with a personal introduction
- About section with education and experience history
- Skills section for frontend, backend, and tools
- Projects section with featured work and external links
- Contact section with direct links and a message form
- API-powered email submission using Resend
- Responsive navigation with mobile menu support

## Tech Stack

- Next.js 
- React 
- TypeScript
- Tailwind CSS 
- Resend for contact form email delivery
- Remix Icon and Iconify for icons

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, yarn, or bun

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Environment Variables

The contact form uses Resend and expects the following environment variable:

```bash
RESEND_API_KEY=your_resend_api_key
```

If the key is missing, the contact API route at `app/api/contact/route.ts` will not be able to send emails.

## Project Structure

- `app/page.tsx` - main page composition
- `app/layout.tsx` - global metadata and fonts
- `app/globals.css` - global styles
- `app/api/contact/route.ts` - contact form email endpoint
- `app/Components/` - reusable UI sections and shared components
- `data.ts` - portfolio content for about, projects, and skills

## Contact

- Email: porrasmica15@gmail.com
- GitHub: https://github.com/micaporras
- GitLab: https://gitlab.com/porrasmica15
- LinkedIn: https://www.linkedin.com/in/mica-lorraine-d-porras/

## Deployment

This site is ready to deploy on Vercel or any platform that supports Next.js.

## Notes

- The site is designed as a personal portfolio, so most content is driven from `data.ts`.
- The contact form posts to the local API route and sends mail through Resend.
