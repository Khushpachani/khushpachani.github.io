# Khush Pachani — Cybersecurity Portfolio

Live at **https://suid0.in** (also reachable via https://khushpachani.github.io, which redirects)

Black, terminal-themed portfolio built with React + TypeScript + SCSS.

## Updating content

All text (profile, skills, experience, projects, certifications, education, resume link)
lives in **`src/data/portfolio.ts`**. Edit that file, commit, and push to `main`.

Styles live in `src/index.scss` (colors are the CSS variables at the top).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to the `gh-pages` branch. GitHub Pages serves that branch.

## Running locally (optional, needs Node.js 18+)

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build in ./build
```
