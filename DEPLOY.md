# Deploying to Vercel

This project is configured to deploy on **Vercel** as a static SPA. All
routes (home, shop, product detail, cart, checkout, order confirmed) run
client-side, so no server functions are required.

## One-time setup

1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel will detect `vercel.json` automatically. No env vars are required.
4. Click **Deploy**.

## Or deploy from your terminal

```bash
npm i -g vercel
vercel
```

Accept the defaults — `vercel.json` already provides:

- `buildCommand`: `bun run build`
- `outputDirectory`: `.output/public`
- SPA rewrite (`/* → /index.html`) so deep links like `/product/atlas-coat`
  and `/checkout` work on refresh.
- 1-year immutable caching for hashed assets in `/assets/*`.

## Notes

- The cart persists via `localStorage`, so order data stays per-browser.
- Payment is simulated client-side for portfolio demo purposes.
- If you later add real backend logic, switch to a Node SSR host
  (e.g. Vercel + a TanStack Start Node adapter, or Lovable Cloud).
