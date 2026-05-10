# Tutoring website

Static site (Vite + React). Anyone can open it in a browser using a normal **https://…** link.

## Give people a URL

### Free link in one minute (Vercel)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New… → Project** → import **Tutoring_Website**.
3. Keep the defaults (build: `npm run build`, output folder: `dist`) and click **Deploy**.

Vercel gives you a live address like **`https://tutoring-website.vercel.app`** (the exact name is on the project dashboard). That is a full website URL — paste it, bookmark it, or text it to someone; no path tricks or extra setup.

### Your own domain (optional)

If you buy a domain (e.g. from Namecheap, Google Domains, Cloudflare), add it under the Vercel project **Settings → Domains** and follow their DNS steps. Then people can use something like **`https://yourname.com`** instead of the `.vercel.app` address.
