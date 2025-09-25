# Gui Oba – Personal Portfolio

Modern single-page portfolio built with **React**, **Vite**, and **Tailwind CSS** to highlight projects, experience, and contact details. All vector illustrations were drawn in-house and the site is deployed on **Vercel**.

## Live Site
- https://guioba.vercel.app

## Highlights
- Responsive layout with a hero banner, project gallery, personal bio, and contact form.
- Reusable `ProjectCard` components backed by React Router for future multi-page support.
- Tailwind utility classes paired with custom SVG assets for a clean, minimal aesthetic.
- Email contact form with `mailto:` submission and prominent social links.

## Tech Stack
- React 19 + React Router
- Vite 6 for development and bundling
- Tailwind CSS 4 with the Vite plugin
- PapaParse for lightweight CSV parsing (ready for data-driven sections)

## Getting Started
### Prerequisites
- Node.js 18+ (LTS recommended)
- npm (comes bundled with Node)

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Then open http://localhost:5173/ in your browser.

### Production Build
```bash
npm run build
```
The optimized output is generated in the `dist/` directory.

### Preview a Build Locally
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Project Structure
```text
.
├── public/
│   └── Favicon.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Deployment
The site is hosted on Vercel. Pushes to the main branch trigger an automated build that runs `npm install`, `npm run build`, and then serves the output from `dist/`.

## Customization Tips
- Update project data inside `src/components/ProjectCard.jsx` and `src/pages/Home.jsx`.
- Replace the SVGs under `src/assets/` to refresh branding or add new illustrations.
- Tailwind styling relies on the defaults bundled with `@tailwindcss/vite`; add a `tailwind.config.js` if you need to override design tokens or extend the theme.

## Contact
Have feedback or opportunities to share? Reach out via the contact form on the site or connect on [LinkedIn](https://www.linkedin.com/in/guilherme-oba/) and [GitHub](https://github.com/Gui-Oba).
