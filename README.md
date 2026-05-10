# Tutoring website

Static React (Vite) site for math tutoring.

## Put it online

### Option A — Vercel (simplest URL)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import this repository.
3. Leave defaults (Vite: build `npm run build`, output `dist`). Deploy.
4. Share the `*.vercel.app` link, or add your own domain under Project → Settings → Domains.

No extra env vars are required for the current mailto contact form.

### Option B — GitHub Pages (free, stays on GitHub)

1. Push this repo (including `.github/workflows/deploy-pages.yml`).
2. On GitHub: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (not “Deploy from a branch”).
3. The **Deploy to GitHub Pages** workflow runs on every push to `main`. When it finishes, Pages shows a public URL (often `https://<username>.github.io/<repo>/`).

The workflow sets `VITE_BASE_PATH` to `/<repository-name>/` so assets load correctly on a project site.

### Local preview of a production build

```bash
npm run build
npm run preview
```

For a GitHub-style base path locally: `VITE_BASE_PATH=/Tutoring_Website/ npm run build && npm run preview`
