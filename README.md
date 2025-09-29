# Alain Julien — Portfolio (React + Vite)

Modernized BI portfolio using **React**, **Vite**, **TailwindCSS**, **Framer Motion**, and **lucide-react**.

## Local Dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
# output in dist/
```

## Deploy on Vercel (via GitHub)
1. Create a new GitHub repo and push this folder's contents.
2. In Vercel: **Add New Project → Import Git Repository**.
3. Framework preset: **Vite** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy. Add a custom domain if you want.

## Assets
Place images in `/public` and reference as `/your-image.png`.

## Notes
- Keep your headline/tagline/summary consistent across LinkedIn and resume.
- Update project links (GitHub, dashboard, live links) in `src/App.jsx`.
