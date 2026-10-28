# Elaf Al Ghamdi — Portfolio (review build, unpublished)

React + TypeScript + Vite. One bilingual site (English default, Arabic RTL). No backend, no API keys.

## Run locally
    npm install
    npm run dev        # http://127.0.0.1:5173
    npm run build      # type-check + production build into dist/
    npm run preview    # serve the production build locally

## Where to edit
- `src/data/config.ts` — email, LinkedIn, GitHub, CV path. Set a value to `null` to hide a link.
- `src/data/content.ts` — all bilingual text: hero, about, skills, projects, experience, achievements. Every text has `en` and `ar`.
- `public/images/` — project screenshots. Add images and reference them in a project's `images` list (with alt text).
- `public/cv/` — CV file used by the Download CV button.
- `src/styles.css` — colors and layout tokens are at the top (`:root`).

## Before publishing (not done)
- The CV PDF contains phone numbers (yours and your reference's). Replace it with a version without them, or remove the button.
- `index.html` has `noindex`. Remove it only when you approve publication.
- Fonts load from Google Fonts at runtime; they fall back to system fonts offline.
- Nothing has been deployed. Deployment steps will follow your approval.
