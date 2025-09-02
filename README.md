
# Comforis — Static Site

Focus: GRC, Vulnerability Management, Physical Security, Risk Assessment

## Quick Start (Netlify, free)
1. Create a new GitHub repo and push these files.
2. In Netlify, **New site from Git** → select repo → Build settings: *no build command* (static) → Publish directory `/`.
3. Go to **Domain settings** in Netlify → add `comforis.com` → follow the DNS instructions in Namecheap (create CNAME/A records).
4. Netlify will auto-provision HTTPS (Let's Encrypt).

## Contact Forms
- Forms use Netlify Forms. Submissions will appear in **Netlify → Forms**.
- There are three forms: `contact_personal`, `contact_company`, `contact_government`.

## Customize
- Replace video IDs in `videos.html` (`youtube-nocookie.com` embeddings).
- Update copy across service pages.
- Replace `/assets/img/og.png` and `favicon.svg` as desired.

## Security Headers
- `_headers` enables HSTS, CSP, and other headers on Netlify.

## Local Preview (any static server)
Use VS Code Live Server or Python HTTP server:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Optional: cPanel/Shared Hosting (Namecheap)
- Upload all files to `public_html/` via File Manager or FTP.
- Ensure `robots.txt` and `sitemap.xml` are at the web root.
