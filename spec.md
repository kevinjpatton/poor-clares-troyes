# Poor Clares of Troyes — Website Revamp

**Type:** static

## What this is
A bilingual (English / French) website for the Poor Clares of Perpetual
Adoration at the Monastère Notre-Dame des Anges, 26 rue Mitantier, Troyes,
France. It replaces their current Wix site
(clarissesdetroyes.wixsite.com/english) with one site that shows who the
sisters are and what they do, sells their violin CDs, presents their albs,
carries their news, and makes contacting and donating easy. A small family
team (the site's owner, with Claude) maintains it, adding about one news
post per quarter.

## Pedagogical intent
Visitors are mostly family, friends and fellow Catholics who want news of
the sisters, plus people who want to support them. The one thing a visitor
should take away from the homepage is that **the sisters' prayer never
stops**: Perpetual Adoration of Jesus in the Blessed Sacrament, in a spirit
of thanksgiving, is the reason the community exists. Everything else on the
site follows from it: the work, the sales and the donations sustain that
prayer.

The moment that makes it land: a line on the homepage that tells the
visitor what time it is in Troyes right now and that, at this very moment,
a sister is in adoration before the Blessed Sacrament (proposed).

## The surface
A single scrolling site with a sticky top bar holding the community name,
section navigation and an **EN / FR** language switch.

Sections, in order:

1. **Home / Adoration (hero).** A large photo of the sisters or the
   monstrance in the chapel, the welcome text ("Situated in the heart of the
   city, close to the Cathedral of Saint Peter and Saint Paul…"), the
   charism of Perpetual Adoration, and the "right now in Troyes" line
   (proposed).
2. **Who we are.**
   - *Our community:* an international community (sisters from the United
     States, India and Poland since 2013) working to revive its French
     roots. Includes the pear tree grafted from one planted by Saint Clare.
   - *Our monastery:* Notre-Dame des Anges, the "cradle" of the Order, and
     its restoration.
   - *Our spiritual life.*
   - *In memory of Mgr Bernard Savourat,* their former chaplain. The French
     site reports his death, so he is not presented as the current
     chaplain. The text is a short tribute based on the sisters' French
     notice.
   - *Vocations:* for young women discerning a vocation.
3. **Our work.** The sewing room (albs; Artisanat Monastique orders such as
   procession dresses for little girls, vests and ties for boys,
   tablecloths and napkins), the vegetable garden, and the daily work of
   the house.
4. **Shop.**
   - *Violin CDs* recorded by Sister Marie Antoinette, a former
     professional violinist. Proceeds go to the monastery restoration.
     - CD1: Vivaldi *The Four Seasons* and Veracini *Concert Sonata*, with
       organist Michael Matthes, Troyes Cathedral.
     - CD2: Bach *Two Concertos* and Handel *Three Sonatas*, with Michael
       Matthes, Troyes Cathedral.
     - CD3: *Saint Thaïs* (Massenet's "Meditation" and other pieces,
       recorded in Hanceville, Alabama, plus Bach's Toccata and Fugue in D
       minor for solo violin). Shown as **"Coming soon"**.
     - CD1 and CD2 each have a card with cover image, price, a **Buy with
       PayPal** button and the quantity table: 1 = 20 € + 1 € postage,
       2 = 40 € + 2 €, 3 = 60 € + 3 €, 4 = 80 € + 4 €, 5 = 100 € (free
       shipping). These follow the English CD page. The sisters' French
       page differs (see Open questions).
     - While a CD's PayPal link is empty, its button reads **"PayPal link
       needed"** and does nothing.
   - *Albs:* description (children's albs for altar servers and First
     Communicants, a monastic-style pattern for priests and deacons
     designed by tailor friends, washable and practically wrinkle-free)
     with a clear **"Ordering coming soon"** label and no order button.
5. **News.** Posts listed newest first, each with date, title, short text,
   an optional photo and an optional link. Launch posts are taken from the
   existing sites: the September 2023 and January 2020 newsletters, "Ten
   years of renovations" (Easter 2018), the 2014 Silver Jubilee, and the
   Franciscan fraternity. Below the posts: the *Sentinels of the Dawn*
   explanation, a "Subscribe" email link, and the newsletter PDF archive.
   In English it lists the English editions (2007 to January 2020); in
   French it lists the French editions (2007 to September 2023).
6. **Gallery and media.** The restoration photo gallery (12 photos with
   captions), the audio track "À toi Dieu" (1'46") with a play control,
   a "Ten years of renovations" card linking the Easter 2018 newsletter
   (the old video page had no video), and a Notre-Dame de Paris card. The
   card summarises the 2019 fire and the *Le Figaro* editorial in a few
   sentences; it does not reprint the editorial, which is copyrighted.
7. **Contact and visit.** Address, telephone +33 (0)3 25 42 97 32, email
   secretariat.clarissesdetroyes@gmail.com, "We speak French and English",
   an embedded map with an "Open in Google Maps" link (two minutes' walk
   from the cathedral), and the times for Mass, the Office, the Rosary and
   chapel opening, taken from the sisters' French site ("Nos horaires"),
   with a note to check before travelling.
8. **Donate.** A prominent button to the Fondation des Monastères donation
   page (https://don.fondationdesmonasteres.org/soutenir) with the
   step-by-step instructions from the current site (switch to English,
   choose "allocate my donation to a monastic community", search
   "Clarisses Troyes", select *MONASTERE DES CLARISSES DE L ADORATION
   PERPETUELLE (10000 TROYES)*). Includes the note that French tax
   receipts apply only in France, that donations by bank transfer or check
   are accepted from anywhere, a short explanation of the Fondation, and
   the sisters' thank-you. The bank transfer and check option links to an
  email to the sisters, since no bank details are published.

A footer repeats the address, email and phone, and gives the language
switch again.

Photos of the sisters, the chapel, the monstrance, the sewing room and the
garden from the current site are used throughout.

## Behavior
- **EN / FR switch:** swaps every piece of text on the page, including
  navigation, news posts, shop labels and donation instructions, without
  reloading or losing the scroll position. The choice is remembered for the
  visitor's next visit.
- **Navigation links:** scroll smoothly to their section. On phones they
  collapse into a menu button.
- **"Right now in Troyes" line (proposed):** shows the current time in
  Troyes (Europe/Paris time zone, whatever the visitor's own time zone)
  and a sentence saying that a sister is in adoration right now. It
  updates every minute and appears in the chosen language.
- **Buy with PayPal:** opens that CD's PayPal payment link in a new tab.
- **Fondation des Monastères button:** opens the donation page in a new
  tab.
- **Email / phone:** the email opens the visitor's mail app (`mailto:`) and
  the phone number dials on phones (`tel:`).
- **Newsletter PDFs:** open in a new tab.
- **Subscribe to newsletter:** opens an email to the secretariat with the
  subject "Newsletter subscription".
- **Audio play control:** plays and pauses "À toi Dieu".
- **Gallery:** clicking a photo opens it enlarged with its caption.
  Previous/next arrows and Escape (or a close button) work in the enlarged
  view.

## Data
All content is embedded. The one runtime exception is the Google Maps
frame on the Visit section; the address and an "Open in Google Maps" link
remain readable if it fails to load. Fonts and icons come from Google
Fonts and the Font Awesome CDN, as for every gadget.

- **Site text:** every string in English and French, kept in one content
  file (`data/content.js`), along with the email addresses, phone number,
  donation URL and PayPal links. English text comes from the current
  English site. French text is chosen for accuracy: the sisters' own
  wording from their French Wix site
  (clarissesdetroyes.wixsite.com/clarissesdetroyes) wherever a matching
  passage exists. Claude translates only what has no French original, and
  those strings are marked `// TR` for the sisters to review.
- **News posts:** a separate data file (`data/news.js`) holding a list of
  posts, with instructions for adding one at the top of the file. Each post
  has a date (`YYYY-MM-DD`, or `YYYY-MM` to show month and year only),
  an English and a French title, text and link label, an optional photo
  path and an optional link. This is the only file edited routinely
  (about quarterly). New photos go in `assets/images/news/`.
- **Images:** downloaded from the current Wix sites (static.wixstatic.com,
  account 824fc3_…), resized to at most 1600 px, renamed descriptively and
  stored in `assets/images/`. They are never hot-linked.
- **Audio:** "À toi Dieu" downloaded from the current site into
  `assets/audio/a-toi-dieu.mp3`.
- **Newsletter PDFs:** downloaded from both sites into `assets/pdf/en/`
  (25 editions) and `assets/pdf/fr/` (28 editions), about 127 MB in total.
  The French Easter 2021 edition is missing because the sisters' own
  server refuses it (HTTP 403).
- **CD prices and quantity table:** as listed under The surface, taken from
  the current English CD orders page.
- **Mass and prayer times:** from the French site's "Nos horaires" page:
  weekday Mass 11:00, Sunday Mass 9:00, Lauds 6:20, Terce and Sext 10:35,
  Readings and None 14:00, Rosary 17:00, Vespers ≈17:25 (Saturday 18:00),
  Compline 20:00, chapel open 8:00–12:00 and 14:00–18:00.

## Architecture
A foldered static site:

```
index.html
spec.md
css/styles.css
js/app.js           language switch, nav, Troyes clock, gallery, rendering
data/content.js     all EN/FR site text
data/news.js        news posts (the file edited each quarter)
assets/images/      photos from the current site (+ news/ for news photos)
assets/audio/       a-toi-dieu.mp3
assets/pdf/en/      English newsletters
assets/pdf/fr/      French newsletters
```

Visual style follows the house convention: a dark navy gradient
background, card layout, coral–gold–teal accents with gradient accent
bars, and Font Awesome icons. The gold carries the Adoration and monstrance
theme.

## Edge cases
- **First run:** the page opens in the visitor's browser language (French
  if the browser prefers French, otherwise English) at the hero section, with the Troyes clock already showing
  the correct time (no blank or "loading" state).
- **Empty news:** if the news list is empty, the News section shows a
  short message in the chosen language ("News coming soon") instead of an
  empty area. The newsletter archive still shows.
- **Phone width (≈375 px):** single column, nav collapses into a menu
  button, the CD quantity table stays readable without sideways
  scrolling, and tap targets are at least 44 px.
- **Long text:** French text runs longer than English. Buttons, nav items
  and cards must not overflow or clip in either language.
- **Midnight in Troyes:** the clock line reads correctly at any hour
  (e.g. "3:12 am"); the point is that adoration continues through the
  night.
- **Missing photo in a news post:** the post shows without an image and
  with no broken-image icon.
- **Audio length unreadable:** if the browser cannot read the track's
  length, the player assumes 1'46" instead of showing 0:00.
- **Photos loading late:** photos reserve their space before loading, so
  menu links land at the right section even while images are still
  loading.

## Out of scope for v1
- Taking payments on the site itself (all payments go through PayPal or
  the Fondation des Monastères)
- An alb ordering form or alb prices
- A content management system or admin login
- A newsletter sign-up backend (subscription is by email only)
- A prayer-intention form
- Live data of any kind
- Pruning sections: everything from the current site comes over, and
  pruning happens after the sisters have reviewed the draft

## Open questions
- **PayPal links for CD1 and CD2:** the current buttons are embedded Wix
  widgets and their URLs could not be read. These must come from the
  sisters (or the Wix PayPal settings).
- **CD availability and postage:** the French CD page (newer than the
  English one) says CD1 and CD2 are out of stock and being restocked, CD3
  *Sainte Thaïs* is on sale by PayPal, and postage is 2 €. The build
  follows the English page. The sisters should confirm which is current.
- **Main email address:** the English site gives
  secretariat.clarissesdetroyes@gmail.com; the French site gives
  clarisses.troyes@gmail.com (and atelier.clarisses.troyes@gmail.com for
  albs). The build uses the secretariat address.
- **Mass and prayer times:** taken from the French site; the sisters
  should confirm they are still current.
- **French translations** marked `// TR` in `data/content.js` need the
  sisters' review.
- **Domain:** clarissesdetroyes.com currently redirects to an unrelated
  gambling spam site, so the domain appears to have lapsed or been taken
  over. Whether to recover it for the new site is the sisters' decision.
- **Deployment size:** the newsletter PDFs total about 127 MB, which may
  exceed hosting upload limits. If so, older editions could link to their
  existing Wix-hosted copies instead.
