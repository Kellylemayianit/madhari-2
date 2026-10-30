# Mandhari website (static)

Plain HTML, CSS and a little JavaScript. No build step.

## Before launch (search for these)
- `hello@mandhari.example` and `https://mandhari.example`: your real contact email and domain (footer, robots.txt, sitemap.xml)
- `https://app.example.com`: your deployed web app URL
- Android download link in the "Get Mandhari" band
- `[date]`, `[status and number]` and other bracketed items in the privacy, terms and data protection pages. These are drafts: get a Kenyan lawyer to review them.

## Deploy on Vercel
Import the repo, choose "Other" as the framework preset, leave the build command empty. `vercel.json` adds security headers (CSP, HSTS and more), clean URLs and cache rules.

## Notes
- Light and dark mode follow the system and can be toggled (saved in localStorage).
- The CSP allows only your own files plus Google Fonts. If you add analytics or other scripts, update `vercel.json`.
