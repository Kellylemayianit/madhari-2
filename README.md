# Mandhari website (static)

Plain HTML, CSS and a little JavaScript. No build step. All paths are relative, so it works on GitHub Pages (project or user site), a custom domain, or by opening the files locally.

## Deploy on GitHub Pages
1. Create a repo (for example `mandhari-website`) and push these files to the `main` branch (the files go at the top level, not inside a folder).
2. On GitHub: Settings, Pages, "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
3. After a minute the site is at `https://<username>.github.io/<repo>/`. Add a custom domain later under the same Pages settings.

## Before launch (search for these)
- `hello@mandhari.example` and `https://mandhari.example`: your real contact email and domain (footer, robots.txt, sitemap.xml)
- `https://app.example.com`: your deployed web app URL
- The Android download link in the "Get Mandhari" band
- `[date]`, `[status and number]` and other bracketed items in the privacy, terms and data protection pages. These are drafts: get a Kenyan lawyer to review them.

## Notes
- Light and dark mode follow the system, with a Dark/Light button in the navigation (saved in localStorage).
- GitHub Pages cannot set HTTP headers, so the content security policy is a `<meta>` tag instead. It cannot block other sites from framing yours, which is fine for a static site with no logins.
- A missing page on a project site (`/<repo>/...`) may show the 404 page without styling. A custom domain fixes that.
