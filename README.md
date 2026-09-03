# ST Access Scaffolding

Static, mobile-first one-page website. It has no framework or build step.

## Run locally

Open `index.html` directly in a browser, or from this folder run:

```bash
python3 -m http.server 51977
```

Then visit `http://localhost:51977`.

## Assets

- `assets/st-access-logo-primary.png` is the main mark used in the header banner; it has no Ltd or phone number.
- `assets/st-access-logo-contact.png` is the separate contact version used in the footer; it includes 07963 351252 and `st@accessscaffolding.uk`, with no Ltd line.
- `assets/scaffold-edinburgh-hero.png` is an original image generated specifically for this site: it depicts Scottish-style residential scaffolding rather than US construction imagery.

The enquiry form posts to the existing PayPilot transactional-mail API at `/api/v1/public/st-access/contact`. The backend accepts only the site fields, rate-limits the public endpoint and always sends to `st@accessscaffolding.uk`. The public API route must be deployed to `api.pios.site` separately from this static site.
