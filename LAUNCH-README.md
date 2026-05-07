# Mahmoud Radwan — Senior Translator
## Complete launch package — modified site + hosting & budget guide

This is your **full project**, modified and launch-ready, plus a complete guide for shipping it. Drop the contents on top of your existing project (or just use this as your new working copy) and follow the deployment guide below.

---

## What's inside this package

```
Launch-Ready/
├── LAUNCH-README.md             ← you are here
├── CHANGES-DETAILED.md          ← exact line-by-line breakdown of what was edited
├── artifacts/mahmoud-radwan/    ← your full site, modified
│   ├── index.html               (REWRITTEN — full SEO + Schema.org)
│   ├── public/
│   │   ├── favicon.svg          (unchanged from original)
│   │   ├── opengraph.jpg        (unchanged from original)
│   │   ├── manifest.json        (NEW — PWA manifest)
│   │   ├── robots.txt           (NEW)
│   │   └── sitemap.xml          (NEW)
│   └── src/
│       ├── assets/
│       │   └── photo.png        (REPLACED — AI watermark removed)
│       ├── pages/
│       │   └── home.tsx         (PATCHED — see CHANGES-DETAILED.md)
│       └── …                    (everything else unchanged)
└── …                            (lib/, scripts/, package.json, configs — all unchanged)
```

---

## Quick summary of what changed

I touched **6 files total**. Everything else is bit-for-bit identical to your original.

| File | Status | What |
|---|---|---|
| `artifacts/mahmoud-radwan/index.html` | rewritten | Added meta tags, Open Graph, Twitter Card, canonical URL, theme color, manifest link, skip-to-content link, and a Schema.org JSON-LD block (`Person` + `ProfessionalService` + `FAQPage`). |
| `artifacts/mahmoud-radwan/src/pages/home.tsx` | patched | Three changes: (1) footer year auto-updates via `new Date().getFullYear()`, (2) "Multi-Million" stat now reads "2.5M+", (3) contact section completely rebuilt — real form (Formspree) + WhatsApp button + email fallback + location/hours. |
| `artifacts/mahmoud-radwan/src/assets/photo.png` | replaced | AI watermark (sparkle in bottom-right corner) removed via OpenCV content-aware inpainting. Rest of image is identical. |
| `artifacts/mahmoud-radwan/public/robots.txt` | new | Allows all crawlers including AI assistants (GPTBot, ClaudeBot, etc.). Points to sitemap. |
| `artifacts/mahmoud-radwan/public/sitemap.xml` | new | Homepage + section anchors. |
| `artifacts/mahmoud-radwan/public/manifest.json` | new | PWA manifest so the site is installable on Android/iOS. |

See `CHANGES-DETAILED.md` for line-level diffs.

---

## ⚠️ Before deploying — fill in these placeholders

Your modified files contain placeholder strings I couldn't fill in for you. **The site will technically run with them in place but will not work correctly until you replace each one.** Search the project for each placeholder and replace it.

### Required (3)

| Placeholder | Found in | Replace with |
|---|---|---|
| `SITE_URL` | `index.html`, `public/robots.txt`, `public/sitemap.xml` | Your real domain, no `https://`, no trailing slash. Example: `mahmoudradwan.com` |
| `FORMSPREE_ID` | `src/pages/home.tsx` | Your free Formspree form ID (see "Contact form setup" below) |
| `WHATSAPP_NUMBER` | `src/pages/home.tsx` | Your WhatsApp number in international format with no `+` or spaces. Example for Egypt: `201001234567` |

### Strongly recommended (3)

| Placeholder | Found in | Replace with |
|---|---|---|
| `LINKEDIN_URL` | `index.html` (JSON-LD) | Your LinkedIn URL without `https://`, e.g. `www.linkedin.com/in/mahmoud-radwan-translator` |
| `PROZ_URL` | `index.html` (JSON-LD) | Your ProZ profile URL without `https://`, e.g. `www.proz.com/translator/123456` |
| `+PHONE_E164` | `index.html` (JSON-LD ×2) | Your phone in E.164 format, e.g. `+201001234567` |

### One-shot find-and-replace (run from project root)

Edit the right-hand side of each line first, then paste this whole block into your terminal.

```bash
cd artifacts/mahmoud-radwan

# macOS / BSD sed:
find index.html public/robots.txt public/sitemap.xml src/pages/home.tsx -type f \
  -exec sed -i '' \
    -e 's|SITE_URL|mahmoudradwan.com|g' \
    -e 's|FORMSPREE_ID|xrgwabcd|g' \
    -e 's|WHATSAPP_NUMBER|201001234567|g' \
    -e 's|LINKEDIN_URL|www.linkedin.com/in/your-handle|g' \
    -e 's|PROZ_URL|www.proz.com/translator/123456|g' \
    -e 's|+PHONE_E164|+201001234567|g' \
    {} +

# Linux:
find index.html public/robots.txt public/sitemap.xml src/pages/home.tsx -type f \
  -exec sed -i \
    -e 's|SITE_URL|mahmoudradwan.com|g' \
    -e 's|FORMSPREE_ID|xrgwabcd|g' \
    -e 's|WHATSAPP_NUMBER|201001234567|g' \
    -e 's|LINKEDIN_URL|www.linkedin.com/in/your-handle|g' \
    -e 's|PROZ_URL|www.proz.com/translator/123456|g' \
    -e 's|+PHONE_E164|+201001234567|g' \
    {} +
```

---

# Hosting & Domain — full recommendation

## TL;DR — recommended stack ($14.46 first year, $14.46/year ongoing)

| Service | Provider | Cost |
|---|---|---|
| Hosting | **Cloudflare Pages** | $0 forever |
| Domain (.com) | **Cloudflare Registrar** | ~$10.46/year (at-cost) |
| Email (you@yourdomain.com) | **Zoho Mail Free** | $0 forever (5 users, 5GB each) |
| Contact form backend | **Formspree Free** | $0 (50 submissions/mo) |
| SSL | (included with Cloudflare) | $0 |
| CDN + DDoS protection | (included with Cloudflare) | $0 |
| **Total Year 1** | | **~$10.46** |
| **Total ongoing** | | **~$10.46/year** |

That's it. ~$11/year for everything. No Pro tier required, no per-seat fees, no overage risk. The only thing you pay for is the domain itself, and that's at registry cost — not even Cloudflare makes a markup.

---

## Hosting: why Cloudflare Pages, not Vercel or Netlify

Your site is a **static React/Vite build** — it compiles to plain HTML/CSS/JS that any static host can serve. So this isn't really a "what server can run this?" question. It's a "what's the lowest-friction free option?" question.

The three serious free static hosts in 2026 are Vercel, Netlify, and Cloudflare Pages. Here's the reality:

**❌ Vercel** — Vercel's Hobby (free) plan explicitly prohibits commercial use. Their Fair Use Guidelines explicitly prohibit commercial use on the Hobby tier, including client work (even unpaid) and revenue-generating projects. Violations can result in account suspension. Your site sells your services. That's commercial. Free tier is off the table — and Vercel Pro starts at $20/seat/month, which is silly money for a one-page portfolio.

**⚠️ Netlify** — Free tier allows commercial use, but caps bandwidth at 100 GB/month and changed pricing models in late 2025. Workable but not the best.

**✅ Cloudflare Pages** — Cloudflare Pages provides a free tier with unlimited bandwidth, no credit card required, never expires, commercial use allowed. Cloudflare Pages is the only major free host with truly unlimited bandwidth. Free tier limits: unlimited bandwidth, unlimited sites, 500 builds/month. It runs on Cloudflare's global CDN with 300+ edge locations.

For a portfolio site that might suddenly trend on LinkedIn or get hit by a translator association newsletter, "unlimited bandwidth" matters. The 500-builds/month cap is fine — you'd need to push 16+ deploys per day to hit it.

### How to deploy on Cloudflare Pages

You have two options. Pick one.

#### Option A: GitHub-connected (recommended — auto-deploys on every push)

1. **Push the project to a private GitHub repo.** Sign in to https://github.com, create a new private repo named `mahmoud-radwan-site`, then from your project root:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mahmoud-radwan-site.git
   git push -u origin main
   ```

2. **Sign in at https://dash.cloudflare.com.** Sign up if you haven't — no credit card needed.

3. **Workers & Pages → Create → Pages → Connect to Git.** Authorize GitHub, select the repo.

4. **Configure build:**
   - Framework preset: **Vite**
   - Build command: `cd artifacts/mahmoud-radwan && pnpm install && pnpm run build`
   - Build output directory: `artifacts/mahmoud-radwan/dist/public`
   - Root directory: `/` (leave default)

5. **Environment variables** (this site needs both):
   - `PORT` = `3000`
   - `BASE_PATH` = `/`
   - `NODE_VERSION` = `22`

6. **Save and Deploy.** First build takes 2-3 minutes. You get a free `*.pages.dev` URL immediately. Every `git push` after this auto-deploys.

#### Option B: Direct upload (no Git — simpler, manual)

1. Build locally: `cd artifacts/mahmoud-radwan && PORT=3000 BASE_PATH=/ pnpm run build`
2. The build output is in `artifacts/mahmoud-radwan/dist/public/` — zip everything **inside** that folder (not the folder itself).
3. In the Cloudflare dashboard: Workers & Pages → Create → Pages → Upload assets. Drop your zip.
4. To update the site later, repeat steps 1-3.

### Connecting your custom domain (5 minutes)

After your first deployment is live on `*.pages.dev`:

1. **Pages project → Custom domains → Set up a custom domain.**
2. Enter your domain (e.g., `mahmoudradwan.com`). Cloudflare adds it.
3. **If your domain is already registered with Cloudflare** (recommended — see below), DNS is auto-configured. Done.
4. **If your domain is elsewhere**, Cloudflare shows you DNS records to add at your registrar. Add them, wait 5-30 minutes for propagation. Done.

SSL is auto-provisioned. HTTPS will just work. Add the `www` version too — Cloudflare can redirect one to the other automatically.

---

## Domain: why Cloudflare Registrar

Domain registrars all sell the same product (your name in the .com registry). The only differences are price, transparency, and whether they try to upsell you junk. Cloudflare makes $0 profit on domain sales — they sell at cost as a value-add for their main business. For pure at-cost pricing, Cloudflare Registrar (~$10.46/year for .com with zero markup) remains unbeatable.

**Three solid options ranked:**

1. **Cloudflare Registrar** — ~$10.46/year .com, ~$0 markup, free WHOIS privacy, free DNSSEC. Catch: requires that your nameservers stay pointed at Cloudflare. Since you're using Cloudflare Pages anyway, this is an upside not a downside. **My recommendation.**

2. **Porkbun** — ~$11.06/year .com renewal, also free WHOIS privacy. Allows you to point your nameservers anywhere. Slightly more expensive but more flexible. Pick this if you want to keep your domain portable.

3. **Namecheap** — ~$13.98/year .com renewal, frequent first-year promos. Solid if you want one provider for domain + email.

**❌ Avoid GoDaddy.** GoDaddy is no longer recommended following their February 2026 Terms of Service change that reclassified all 21 million customers as "Business Customers," stripping EU consumer protections and adding hostile arbitration terms. Plus they charge $10-15/year extra for WHOIS privacy that should be free.

### Domain name suggestions

Pick one of these patterns (all should be available — verify before buying):

- `mahmoudradwan.com` — cleanest, most authoritative, best for personal brand SEO
- `mahmoud-radwan.com` — fallback if `.com` taken (use only if necessary)
- `mradwan.com` — shorter, less obvious
- `radwantranslations.com` — service-focused, but commits you to a more formal business identity

**Strong recommendation: `mahmoudradwan.com`.** It's your name. It's what people will Google. It's what the JSON-LD schema is built around. Buy `.com` first; consider `.eg` and `.translator` only if you want the matching set.

### How to register on Cloudflare Registrar

1. Sign in to https://dash.cloudflare.com.
2. **Domain Registration → Register Domains.**
3. Search for your domain. Buy it. ($10.46 for .com.)
4. WHOIS privacy is enabled automatically. DNSSEC is one click.
5. Domain is live in 5-30 minutes.

---

## Business email: Zoho Mail Free (you@yourdomain.com)

Receiving "mahmoud@mahmoudradwan.com" is one of the strongest credibility signals you can give a prospective client. It's free.

**Why Zoho free, not Gmail Workspace?** Google Workspace charges $7/user/month from day one. Zoho's free plan is generous: 5GB mailbox, custom domain, ad-free, 99.9% uptime. Free email hosting for one custom domain, up to 5 users, basic security with SSL and 2FA, web access and mobile apps.

**Catches to know:** No IMAP/POP/ActiveSync on free tier — you're limited to Zoho's webmail and apps. Can't fetch mail in Outlook or Apple Mail. 25MB attachment limit. Single domain only.

For a single freelance translator that needs to look professional and is fine using Zoho's webmail or mobile app, this is perfect. If you outgrow it, paid plans start at $1/user/month.

### Setup (15 minutes)

1. Sign up at https://www.zoho.com/mail (pick the free "Forever Free Plan").
2. Add your custom domain.
3. Zoho gives you DNS records (TXT, MX, SPF, DKIM). Add them in Cloudflare dashboard → DNS → Records → Add record.
4. Wait 10-30 minutes for verification.
5. Create your inbox (suggest: `mahmoud@mahmoudradwan.com` and an alias `hello@` or `info@` if you want).
6. Update `index.html` and `home.tsx` to use the new address (replace `mahmoudradwan.translator@gmail.com` with `mahmoud@mahmoudradwan.com`). Or keep the Gmail and just point business cards at your new address — your call.

---

## Contact form: Formspree (free)

The form section in your modified `home.tsx` is wired to Formspree.

1. Sign up at https://formspree.io (free, no credit card).
2. Create a new form. Name it "Mahmoud Radwan Site Contact."
3. Set the notification email to your new Zoho address (or your Gmail).
4. Copy the form's endpoint — looks like `https://formspree.io/f/xrgwabcd`. Take just the ID part: `xrgwabcd`.
5. Replace `FORMSPREE_ID` in `src/pages/home.tsx` with that ID.
6. **Free tier: 50 submissions/month.** That's plenty for a freelance portfolio. If you outgrow it, $10/month gets you 1,000.

---

# Marketing budget — three tiers

These are *all-in monthly costs* including hosting/infrastructure plus paid marketing channels. Pick whichever tier matches where you are now.

## Tier 1 — Bootstrap ($16–$25/month)

Just enough to run the site professionally and execute one paid acquisition channel.

| Item | Cost |
|---|---|
| Hosting (Cloudflare Pages) | $0 |
| Domain | ~$0.87/mo (~$10.46/yr) |
| Zoho Mail free | $0 |
| Formspree free | $0 |
| **ProZ.com Plus membership** | $15/mo |
| Plausible Analytics (optional but recommended) | $9/mo |
| **Total** | **$15.87 – $24.87 / mo** |

**Marketing strategy at this tier:** All organic. ProZ profile gets you LSP inbound. LinkedIn cold outreach (free) for direct clients. Cold email (free) to LSP roster managers. Content posts on LinkedIn and a blog (free, time investment only). Realistic: 1-2 new agency clients/month after month 2.

## Tier 2 — Active growth ($300/month)

Adds two paid acquisition channels and unlocks LinkedIn's Sales Navigator for real outbound.

| Item | Cost |
|---|---|
| Tier 1 base (hosting, domain, ProZ, analytics) | ~$25 |
| **Google Ads** | $200/mo |
| **LinkedIn Sales Navigator (Career)** | $80/mo |
| **Total** | **~$305 / mo** |

**Strategy at this tier:** Google Ads for direct enterprise leads (full RSA copy in `launch-and-marketing-playbook.md`). Sales Navigator for finding and InMailing 20 LSP vendor managers per week. Realistic: 3-5 new agency clients/month plus 1-2 direct enterprise inquiries/week by month 3.

## Tier 3 — Aggressive ($1,500/month)

Adds Meta Ads for MENA direct clients, content help, and lead-enrichment tools.

| Item | Cost |
|---|---|
| Tier 2 base | ~$305 |
| **Google Ads scaled** | +$300 (now $500) |
| **Meta Ads (Facebook + Instagram MENA)** | $300/mo |
| **Sales Navigator Core upgrade** | +$19 (now $99) |
| **ATA membership** (US clients) | $22/mo |
| **Apollo / Hunter.io** (cold-email enrichment) | $50/mo |
| **Calendly + Loom Pro** | $30/mo |
| **Content help** (1 blog + 1 LinkedIn post/wk) | $200/mo |
| **Total** | **~$1,500 / mo** |

**Strategy at this tier:** All channels firing simultaneously. Content compounds. By month 6, the funnel should be self-sustaining at 5-10× return on spend. This is where you go fully booked at premium rates.

See `launch-and-marketing-playbook.md` (the document I delivered separately) for the actual ad copy, cold-email scripts, LinkedIn rewrites, and 90-day execution plan to deploy this budget against.

---

# Deploy checklist

Tear off the steps as you complete them.

### Pre-deploy
- [ ] Buy domain at Cloudflare Registrar (~$10.46/year)
- [ ] Sign up for Cloudflare Pages (free)
- [ ] Sign up for Zoho Mail free, set up `mahmoud@yourdomain.com`
- [ ] Sign up for Formspree free, get your form ID
- [ ] (Optional) Sign up for Plausible Analytics, get your tracking script
- [ ] Run the find-and-replace block above with your real values

### Deploy
- [ ] Push project to GitHub (private repo)
- [ ] Connect Cloudflare Pages to repo, configure build (`pnpm run build`, output `artifacts/mahmoud-radwan/dist/public`)
- [ ] Set environment variables: `PORT=3000`, `BASE_PATH=/`, `NODE_VERSION=22`
- [ ] First build succeeds → site live on `*.pages.dev`
- [ ] Connect custom domain in Cloudflare Pages
- [ ] Verify HTTPS works on your real domain

### Post-deploy verification
- [ ] Visit `https://yourdomain.com/robots.txt` — should display
- [ ] Visit `https://yourdomain.com/sitemap.xml` — should display
- [ ] Test Open Graph at https://www.opengraph.xyz/ — should show preview card
- [ ] Test rich results at https://search.google.com/test/rich-results — should detect Person, ProfessionalService, FAQPage
- [ ] Test contact form — submit a test message, confirm it arrives in your inbox
- [ ] Test WhatsApp button — should open WhatsApp with prefilled message
- [ ] Test on mobile (real phone, not just devtools)
- [ ] Submit sitemap to Google Search Console: https://search.google.com/search-console
- [ ] Submit sitemap to Bing Webmaster Tools: https://www.bing.com/webmasters

### Marketing kickoff
- [ ] Update LinkedIn profile per `launch-and-marketing-playbook.md`
- [ ] Build out ProZ Plus profile per `launch-and-marketing-playbook.md`
- [ ] Send first 10 cold emails to LSPs (template in playbook)
- [ ] Schedule first 4 LinkedIn posts using the templates
- [ ] (If Tier 2+) Activate Google Ads with the RSA copy from playbook

You're live.

---

## Need anything else?

A few things I deliberately left out of this build, with my reasoning, in case you want any of them next:

1. **Arabic version of the site** — needs a content draft + RTL layout work. Maybe ~4-6 hours of additional work. High value for direct GCC and Egyptian clients. Worth doing as v2.
2. **Portfolio card images** — three cards still have empty grey placeholders. Once you can share real document covers (anonymized) or want me to generate illustrative imagery (defense vehicle silhouette, journal cover, automotive), I can drop those in.
3. **Rate card update** — left at your original $0.06/$0.08. Audit recommends $0.09/$0.13 minimum based on 2026 market data. Pricing decision is yours.
4. **Real photo replacement** — current photo had AI watermark removed via inpainting (clean result), but if you want to swap in an authentic photoshoot photo, drop the new file at `src/assets/photo.png` and rebuild.
5. **Analytics snippet** — easy to add once you've picked Plausible vs GA4. Plausible is one line in `<head>`.

Just say the word.
