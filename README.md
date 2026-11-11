# thuannm-precio.github.io

Portfolio site for Thuan Nguyen, full-stack developer. Static Astro site, deployed to GitHub Pages
by `.github/workflows/deploy.yml` on every push to `main`.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # static build into dist/
npm run covers     # render covers/upwork-*.png (1000x750) and public/og/*.png (1200x630)
```

`npm run covers` uses the locally installed Google Chrome through `playwright-core`.

## Where things live

- `src/data/site.ts`: profile facts, case receipts, lab list and the Upwork link. Every figure is measured.
- `src/pages/`: home, `work/snapprompt`, `work/keyward`, `work/enterprise`, `lab`.
- `src/components/Receipt.astro`: the per-project receipt card.
- `src/scripts/hero-scene.ts`: the optional three.js hero, loaded only on wide screens without reduced motion.
- `tools/covers/`: one HTML template and the content for every cover and Open Graph image.
