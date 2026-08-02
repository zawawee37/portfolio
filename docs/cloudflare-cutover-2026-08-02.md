# Cloudflare production cutover — 2026-08-02

Captured at 16:10 ICT before changing `portfolio.infratest.click`.

## Previous public state

- IPv4: `104.21.72.192`, `172.67.154.138` (TTL 300)
- IPv6: `2606:4700:3035::ac43:9a8a`, `2606:4700:3031::6815:48c0` (TTL 300)
- CNAME: none returned by public DNS
- HTTP: `302 Found`
- Cloudflare Access team domain: `system-engineer.cloudflareaccess.com`
- Access application audience: `e367c9e53882ae4771d04491c9b748638ce2bf873e49e89ebcf3b297aaf3d7d6`

No signed redirect tokens or session cookies are stored in this record.

## Worker versions retained for rollback

- Initial workers.dev deployment: `0a5dbb01-447e-4bbd-bdda-0cafa3b1d798`
- Verified preview version: `9c75927a-6e37-4642-9cf2-2cf17fbbb7e8`
- Verified preview URL: `https://9c75927a-sawawee-portfolio.zawawee37.workers.dev`

The verified preview returned HTTP 200 for English, Thai, resume and sitemap routes, HTTP 404 with the custom page for an unknown route, the intended security headers, and `X-Robots-Tag: noindex`.

## Cutover status

- The verified version is deployed at 100% of Worker traffic.
- The custom-domain trigger is not attached yet.
- Cloudflare rejected the custom domain with API error `100117` because the hostname still has externally managed DNS records.
- The previous Access application still returns HTTP 302 for the production hostname.

Before retrying the custom-domain trigger, remove only the `portfolio.infratest.click` public hostname from Cloudflare Access and remove the existing DNS records whose exact name is `portfolio.infratest.click`. Do not change other Access applications or DNS names.
