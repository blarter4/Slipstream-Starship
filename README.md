# Slipstream Minimal Site

A super‑clean, SpaceX/Tesla‑inspired site you can host anywhere (GitHub Pages, Netlify, Vercel, S3, or your own box).

## Files
- `index.html` — semantic structure
- `styles.css` — modern, responsive styling (no frameworks)
- `script.js` — small enhancements (nav, reveal‑on‑scroll, demo form)
- `assets/` — logo, hero art, favicon, placeholder

## Quick start
Open `index.html` locally or deploy the folder as‑is.

### GitHub Pages
1. Create a repo and push these files to the repo root (or `docs/`).
2. In **Settings → Pages**, choose the branch (`main`) and root folder.
3. Save; your site goes live in a minute.

### Custom domain / self‑host
Serve the folder with any static server (nginx, Caddy, Apache) or a CLI like:
```
python3 -m http.server 8080
```
Then visit `http://localhost:8080`.

## Customizing
- Replace images in `assets/`.
- Update colors by editing CSS `:root` variables.
- Swap the demo join form in `script.js` with your backend or service.
