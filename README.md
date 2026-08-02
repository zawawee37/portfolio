# Sawawee Sareh-esor — Portfolio

A bilingual, static-first portfolio for a Senior Cloud Platform & Infrastructure Engineer. Built with Astro and deployed as Cloudflare Workers Static Assets.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm test
```

## Deployment

The Cloudflare Worker name is `sawawee-portfolio`. The production custom domain is `portfolio.infratest.click`.

```bash
npx wrangler whoami
npm run deploy:preview
npm run deploy
```

Cloudflare Workers Builds should use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Node.js: `22`

## Public routes

- `/` — English
- `/th/` — Thai
- `/resume/Sawawee-Sareh-esor-Resume.pdf`

## Content policy

Only verified public projects are used as case studies. No confidential client or employer infrastructure details are published.
