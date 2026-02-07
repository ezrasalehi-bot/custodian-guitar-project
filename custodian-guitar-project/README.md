# The Custodian Guitar Project (Next.js + Vercel)

This repo is ready to upload to GitHub and deploy on Vercel.

## Local dev
```bash
npm install
npm run dev
```

## Email submissions (Formspree)
1. Create a free Formspree form and copy the endpoint (example: `https://formspree.io/f/xxxxxx`)
2. In `app/submit/page.tsx`, replace `YOUR_FORM_ID` with your real id.
3. Deploy.

## After you have your live URL / domain
Replace `https://example.com` in:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
