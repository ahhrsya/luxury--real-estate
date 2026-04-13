# PRD: Luxury Real Estate Landing Page
**Version:** 2.0  
**Status:** Ready for Generation  
**Tool:** Antigravity  
**Style Reference:** living.paisana.studio + PP Editorial New typography

---

## 1. Project Overview

A single-page luxury real estate landing page targeting high-net-worth individuals and property investors across Dubai, London, and the Gulf region. The page communicates exclusivity, trust, and premium lifestyle through restrained visual design and precise copy — influenced by the "New Luxury" editorial language seen on living.paisana.studio.

The overall feel is: narrative-first, emotionally driven, visually quiet but deeply intentional. Every element earns its place.

**Brand Name (placeholder):** Aurum Estates  
**Tagline:** Where Rarity Meets Residence.  
**Primary Market:** Dubai / UAE  
**Secondary Market:** UK, Monaco, Saudi Arabia

---

## 2. Style Direction

### Primary Reference
**living.paisana.studio** — the defining reference for this project.

What to extract from it:
- Headline and italic mixed in the same sentence (upright bold + italic bold alternating)
- Very large display type that bleeds near the edges
- Minimal navigation — almost invisible until needed
- No decorative elements — everything is pure typography and image
- Sections feel like editorial magazine spreads, not website sections
- Sparse white space used as a design element, not empty space
- Copy is narrative and poetic, never bullet-point-driven

---

## 3. Goals

- Generate qualified leads through a private inquiry form
- Communicate brand positioning as a boutique, advisory-led agency
- Showcase featured properties in an editorial format, not transactional
- Build trust through social proof, team presence, and brand philosophy

---

## 4. Target Audience

| Segment | Profile |
|---|---|
| Primary | HNW property investors aged 35 to 60, Dubai or GCC-based, net worth $5M+ |
| Secondary | Expat executives relocating to Dubai or London for premium residential |
| Tertiary | Portfolio investors seeking off-market UAE real estate opportunities |

**Psychographic:** Values privacy, exclusivity, personalized service, and discretion. Responds to aspiration and lifestyle storytelling over feature lists.

---

## 5. Design Direction

### Aesthetic
Ultra-premium editorial luxury. Restrained, narrative-first. Every section reads like a page from a high-end print magazine brought to screen. No gradients. No decorative UI. Only typography, space, and image.

### Color Palette
| Token | Value | Usage |
|---|---|---|
| --color-bg | #0D0C0A | Main background (dark mode) |
| --color-surface | #131210 | Card and section surfaces |
| --color-surface-2 | #1A1815 | Elevated cards |
| --color-text | #EAE6DF | Primary text |
| --color-text-muted | #7A7672 | Secondary text, captions |
| --color-text-faint | #424040 | Tertiary labels |
| --color-accent | #B8975A | Gold — CTAs, highlights, thin dividers |
| --color-accent-hover | #CEAD74 | Hover state |
| --color-divider | #252220 | Section dividers |
| --color-border | #2E2B27 | Card borders |

### Typography

**Primary Display Font: PP Editorial New**  
Source: pangrampangram.com/products/editorial-new  
Style reference: image provided (mixed upright + italic in headline, very tight tracking)

| Role | Font | Weight | Size | Letter Spacing | Line Height |
|---|---|---|---|---|---|
| Hero H1 | PP Editorial New | Ultrabold 800 | clamp(3.5rem, 7vw, 7rem) | -0.03em | 1.02 |
| Section H2 | PP Editorial New | Bold 700 | clamp(2.5rem, 4.5vw, 4.5rem) | -0.02em | 1.05 |
| Sub-heading H3 | PP Editorial New | Medium 500 | clamp(1.5rem, 2.5vw, 2.5rem) | -0.01em | 1.1 |
| Mixed Italic (em) | PP Editorial New Italic | Ultrabold 800 | same as upright | -0.03em | same |
| Body | Satoshi | 400 | 1rem (16px) | 0 | 1.75 |
| Eyebrow / Label | Satoshi | 500, uppercase | 0.75rem | +0.12em | 1.4 |
| Navigation links | Satoshi | 400 | 0.875rem | +0.04em | 1 |

**Font Load:**
```html
<!-- PP Editorial New via Pangram Pangram CDN (after license purchase) -->
<link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css">

<!-- Satoshi via Fontshare -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
```

**Fallback stack:**
```css
font-family: 'PP Editorial New', 'Playfair Display', 'Times New Roman', serif;
```

### CSS Typography Implementation

```css
:root {
  --font-display: 'PP Editorial New', 'Playfair Display', Georgia, serif;
  --font-body: 'Satoshi', system-ui, sans-serif;
}

.display-headline {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3.5rem, 7vw, 7rem);
  letter-spacing: -0.03em;
  line-height: 1.02;
}

/* Italic word mixed inside upright headline — like the reference image */
.display-headline em {
  font-style: italic;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.section-heading {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.eyebrow {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.body-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0;
  line-height: 1.75;
  color: var(--color-text-muted);
}
```

### Imagery Style
- Full-bleed cinematic photography: interior architecture, skyline, natural light
- Dark overlay on hero (opacity 0.4) for text legibility
- Property cards: landscape crop, 3:2 ratio
- No stock photo energy — all images must feel editorial and art-directed

### Motion
- Subtle fade-in on scroll: opacity 0 to 1, translateY 20px to 0, 600ms ease-out
- Horizontal gold line animates width 0 to 100% on section enter
- CTA button: soft gold glow on hover
- Property card: image scale 1.03 on hover, overlay darkens slightly
- Headline words stagger-reveal on first load (each word 80ms delay)

---

## 6. Page Structure & Content

---

### SECTION 1 — Navigation (Sticky)

**Layout:** Fixed top, transparent with blur backdrop (backdrop-filter: blur(12px))  
**Left:** SVG logo wordmark "AURUM ESTATES" in PP Editorial New  
**Center (desktop):** Properties · About · Services · Journal · Contact  
**Right:** "Schedule a Viewing" — gold outlined button, Satoshi 500  
**Mobile:** Hamburger with full-screen overlay nav  

---

### SECTION 2 — Hero

**Layout:** 100vh full-bleed image or video loop. Dark overlay bottom 60%.

```
EYEBROW (Satoshi, tracked gold, --text-xs):
Exclusively Curated by Aurum Estates

H1 (PP Editorial New Ultrabold, mixed italic, clamp 3.5rem to 7rem):
Where Rarity
Meets Residence.

BODY (Satoshi 400, max-width 520px, muted):
A curated portfolio of ultra-premium properties across Dubai,
London, and Monaco. For those who seek more than an address.
They seek a statement.

PRIMARY CTA (gold filled, Satoshi 500):
Schedule a Private Viewing

SECONDARY CTA (ghost, white outlined, Satoshi 400):
Explore Properties
```

**Bottom stat strip (full width above fold bottom):**
`$2.4B+ Transacted` · `340+ Private Clients` · `12 Years of Excellence`

---

### SECTION 3 — Value Proposition Strip

**Layout:** Three equal columns, center-aligned, generous padding.  
**Separator:** Thin vertical gold lines between columns.

| Column | Heading | Copy |
|---|---|---|
| 1 | Curated Exclusivity | Only properties that meet our standards of architecture, privacy, and prestige enter our portfolio. |
| 2 | White-Glove Service | From first inquiry to final signature, a dedicated concierge guides every step of your journey. |
| 3 | Proven Intelligence | Deep market expertise across four continents and $2.4B in successfully closed transactions. |

---

### SECTION 4 — Featured Properties

**Layout:** 2+1 asymmetric editorial grid. One large card left, two stacked right.

**Per Card:**
```
BADGE (gold pill): New Release / Off-Market / Price Upon Request

PROPERTY NAME (PP Editorial New Bold):
Penthouse XXIII, Palm Jumeirah

TAGLINE (Satoshi italic, muted):
Above the city. Beyond imagination.

DETAILS (Satoshi tracked caps, --text-xs):
4 Bedrooms  ·  6,200 sqft  ·  Private Infinity Pool

CTA (gold underline link):
View Residence →
```

---

### SECTION 5 — The Experience

**Layout:** Full-bleed split. Left 55% cinematic image, right 45% copy on dark surface.

```
EYEBROW: The Aurum Standard

H2 (PP Editorial New Bold Italic, section-heading size):
This Is Not Just a Home.
It Is How You Choose to Live.

BODY (Satoshi, line-height 1.8):
The right residence does not only shelter you. It reflects who you are
and amplifies everything you have built. Every corner of these properties
is a deliberate statement: in material, in light, in silence.

Step into a lobby that commands respect. Wake up to views that recalibrate
your sense of scale. Entertain in spaces that turn guests into believers.

This is what living at the top genuinely feels like.

CTA (gold text link):
Discover Our Philosophy →
```

---

### SECTION 6 — About

**Layout:** Left 45% editorial portrait or office photo, right 55% narrative copy.

```
EYEBROW: Our Story

H2 (PP Editorial New, mixed upright + italic):
Built on Conviction.
Guided by Taste.

BODY (Satoshi, line-height 1.8):
Aurum Estates was founded with a single conviction: that finding the
right home should feel as considered as any great life decision.

Over the past twelve years, we have advised clients across four
continents on acquisitions ranging from private beachfront estates
in Zanzibar to sky residences above the Dubai skyline. What has
remained constant is our refusal to treat real estate as a
transaction. Every client deserves undivided attention, honest
counsel, and access to opportunities that rarely reach the open market.

We do not measure success by volume. We measure it by the moment a
client walks into a property and knows, without a word, that this is the one.

THREE TRUST SUBPOINTS (icon + Satoshi text):
[Calendar]  Founded in 2013. Trusted by over 340 private clients across 18 nationalities.
[Globe]     Offices in Dubai, London, and Monaco. Advisory reach across four continents.
[Lock]      Strict confidentiality protocols. Every inquiry is protected by a full NDA.

CTA (gold outlined button):
Meet Our Team →
```

---

### SECTION 7 — Social Proof

**Sub A — Numbers (4-column stat row):**
Each: number in PP Editorial New display size, label in Satoshi tracked caps.
```
$2.4B+           340+             12              98%
Properties    Private Clients   Years of       Client
  Sold                         Excellence    Satisfaction
```

**Sub B — Testimonial:**
```
[Large decorative gold quotation mark SVG]

QUOTE (PP Editorial New Italic, --text-xl, max-width 720px, centered):
"Working with Aurum changed my understanding of what service means.
They did not just find me a property. They found me the right life."

ATTRIBUTION (Satoshi 400, --text-sm, muted):
Khalid Al-Mansouri
Private Equity Executive, Abu Dhabi
```

**Sub C — Partner logos (muted/white):**
Forbes · Financial Times · Arabian Business · Sotheby's · Christie's

---

### SECTION 8 — Why Choose Us

**Layout:** Left 45% narrative, right 55% advantage list with gold mark icons.

```
EYEBROW: Our Approach

H2 (PP Editorial New):
An Advisor,
Not Just an Agent.

BODY (left):
Most real estate firms show you what is available. We show you what is right.
Our approach is research-first, relationship-driven, and built around one
principle: your outcome matters more than our commission.

ADVANTAGE LIST (right, Satoshi, each preceded by thin gold mark):
  Off-market access to exclusive listings
  Full legal and due diligence support
  Multi-currency and cross-border transaction expertise
  Post-purchase property management available
  Strict privacy and NDA protocols for all clients
  Dedicated single point of contact throughout the process
```

---

### SECTION 9 — Meet the Team

**Layout:** Horizontal card row, 3 team members.

**Per Card:**
```
PHOTO: Editorial portrait, square crop, subtle grain overlay

NAME (PP Editorial New Bold): Alexandra Voss
TITLE (Satoshi tracked caps, gold, --text-xs): Senior Property Advisor
SPECIALISATION (Satoshi, muted): Ultra-premium residential · Dubai Marina · Palm Jumeirah
QUOTE (Satoshi italic): "Every client deserves undivided attention and a home they will never want to leave."
CTA (gold underline): Connect with Alexandra →
```

---

### SECTION 10 — CTA Section (The Close)

**Layout:** Full-width dark section, centered, inline form.  
**Background:** Deep charcoal with noise texture, thin gold top border.

```
EYEBROW: Private Access

H2 (PP Editorial New Light Italic, --text-3xl):
The Finest Properties Are Reserved
for Those Who Ask First.

BODY (Satoshi, muted, max-width 560px, centered):
Many of our most exclusive listings never reach the open market. Share your
preferences below and we will match you with properties suited to your vision.

FORM FIELDS:
Full Name  ·  Email Address  ·  Phone Number  ·  Budget Range (dropdown)  ·  Property Type (dropdown)

PRIMARY CTA (gold filled):
Request Private Access

MICROCOPY (Satoshi --text-xs, faint, centered):
Your information is treated with complete confidentiality.
No unsolicited communications, ever.
```

---

### SECTION 11 — Footer

```
COL 1: Logo + tagline
  AURUM ESTATES (PP Editorial New)
  Redefining the Meaning of Home.
  [Instagram] [LinkedIn] [WhatsApp]

COL 2: Properties
  Featured Listings / Off-Market Portfolio / New Releases / Property Search

COL 3: Company
  About Us / Our Team / Services / Journal / Contact

COL 4: Contact
  Dubai Office
  Level 42, One Za'abeel Tower
  +971 4 XXX XXXX
  hello@aurumestates.com

BASE BAR:
© 2026 Aurum Estates · Privacy Policy · Terms of Use · RERA License No. XXXXX
```

---

## 7. Responsive Behavior

| Breakpoint | Key Changes |
|---|---|
| Desktop 1280px+ | Full layout as described above |
| Tablet 768px | 2-col grids collapse to single column, hero stats stack vertically |
| Mobile 375px | All sections single column, hamburger nav, form stacks fully |

---

## 8. Interactions & Motion

| Element | Behavior |
|---|---|
| Section enter | Fade in + translateY(20px to 0), 600ms ease-out |
| Headline on load | Words stagger-reveal, each word 80ms delay |
| Gold accent line | Width animates 0 to 100% on section enter |
| CTA Primary | Soft gold glow on hover, scale 1.02 |
| Property card | Image scale 1.03 on hover, overlay darkens |
| Nav links | Gold underline slides in from left on hover |
| Scroll indicator | Subtle bounce loop |
| Form submit | Button text: "Sending..." then "Received. We will be in touch." |

---

## 9. SEO & Meta

```html
<title>Aurum Estates | Ultra-Premium Real Estate in Dubai & Beyond</title>
<meta name="description" content="Curated luxury properties in Dubai, London, and Monaco. Private inquiry, off-market access, and white-glove service for discerning buyers.">
<meta property="og:title" content="Aurum Estates | Where Rarity Meets Residence">
<meta property="og:description" content="Ultra-premium real estate advisory. $2.4B in transactions. 340+ private clients served.">
```

---

## 10. Design References

### Style Reference (Primary)
| Website | URL | What to Extract |
|---|---|---|
| **PAISANA Living** | living.paisana.studio | Overall editorial tone, mixed italic headline, section pacing, minimal nav, narrative copy |

### Live Brand References
| Brand | URL | What to Study |
|---|---|---|
| Sotheby's International Realty | sothebysrealty.com | Hero structure, editorial photography standard, about page tone |
| Carolwood Estates | carolwoodre.com | Visual hierarchy, agent cards, boutique brand feel |
| Knight Frank | knightfrank.com | Long-form trust copy, advisor positioning language |
| Avantgarde Properties Dubai | avantgarde-properties.com | Dubai market tone, about section structure |
| Douglas Elliman | elliman.com | Property card layout, CTA placement, color restraint |

### Design Gallery References
| Platform | URL | Filter / Notes |
|---|---|---|
| Landbook | land-book.com | Filter "Real Estate" category |
| Godly | godly.website/?types=["interior-design"] | Interior Design filter — closest to luxury property |
| Awwwards | awwwards.com/websites/real-estate | Sort by Site of the Day |
| Awwwards Luxury | awwwards.com/websites/luxury | Luxury brand filter |
| Landingfolio | landingfolio.com/inspiration/landing-page/real-estate | Real estate landing pages only |
| Minimal Gallery | minimal.gallery/tag/real-estate | Hand-curated, strictest quality |

### Typography References
| Font | Source | Notes |
|---|---|---|
| PP Editorial New | pangrampangram.com/products/editorial-new | Primary display font — buy license before production |
| Satoshi | api.fontshare.com | Free, body and UI text |
| Playfair Display | fonts.google.com | Free fallback if Editorial New not licensed yet |

---

## 11. Assets Needed

| Asset | Description |
|---|---|
| Hero background | Full-bleed cinematic interior or skyline, dark tone, ultra high resolution |
| About section photo | Editorial portrait of team or Dubai office interior |
| Property card images | 3 property photos, landscape, luxury residential |
| Team portraits | 3 editorial-style portraits, neutral dark background |
| Lifestyle section | Architecture interior, natural light, dramatic composition |
| Logo | SVG wordmark "AURUM ESTATES" in PP Editorial New |
| Gold divider SVG | Thin horizontal 1px line, color #B8975A |

---

*PRD Version 2.0 — Updated with PP Editorial New typography spec, tight letter-spacing implementation, and PAISANA Living as primary style reference. Ready for Antigravity generation.*
