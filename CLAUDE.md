# Projekt: I.M Getränke Depot – Website

**WICHTIG:** Zuerst `HANDOFF.md` lesen – dort steht der gemeinsame Speicherstand mit dem
anderen Laptop/Claude (letzter Stand, offene Punkte) und die Regeln für Pull/Push.

Praktikums-Projekt (gemeinsam mit einem zweiten Claude auf einem anderen Laptop).
Statische Website (kein Build-Schritt) für das I.M-Getränke Depot UG (haftungsbeschränkt),
Berliner Allee 47, 64295 Darmstadt — Cash & Carry / Großhandel für Gastronomie,
Kioske, Imbisse und Einzelhandel (Getränke, türkische Lebensmittel, Gastro-Einwegbedarf),
liefert auch palettenweise. Ansprechpartner: Ilhan Mehmetov.

## Struktur
- `index.html` – Startseite (Hero, Preisband, Sortiment, Beispielpreise, Großhandel,
  Öffnungszeiten/Kontakt, Anfahrt)
- `impressum.html`, `datenschutz.html`, `404.html`
- `css/style.css` – Design-System, alle Farben/Schriften als Variablen oben in `:root`
- `css/fonts.css` – `@font-face` für die selbst gehosteten Schriften
- `js/script.js` – mobiles Menü, Footer-Jahr, Scroll-Reveal, Maps-Einwilligung, Hero-Auftritt
- `assets/img/` – Fotos als `.webp` **und** `.jpg` (Fallback über `<picture>`)
- `assets/fonts/` – Big Shoulders Display + Literata als woff2
- `robots.txt`, `sitemap.xml`, `llms.txt`, `assets/favicon.svg`

## Stack-Entscheidung
Bewusst plain HTML/CSS/JS ohne Framework/Build-Tool, damit beide Mitwirkenden
(zwei Claude-Instanzen auf zwei Rechnern) ohne Setup-Reibung direkt editieren können.
Vor einem Wechsel auf ein Framework bitte erst absprechen.

## Regeln, die beim Weiterbauen gelten
1. **Keine Schriften vom Google-CDN.** Schriften liegen lokal in `assets/fonts/`.
   Ein `<link>` auf fonts.googleapis.com würde die IP jedes Besuchers an Google senden
   und der Datenschutzerklärung widersprechen.
2. **Google Maps nur nach Klick.** Die Karte wird erst per Button nachgeladen
   (`js/script.js`, `#mapConsent`). Kein festes `<iframe>` wieder einbauen.
3. **Keine erfundenen Firmendaten.** Telefon, Öffnungszeiten, HRB und USt-IdNr. sind offen
   und im HTML mit `TODO(Betrieb)` markiert. Nur eintragen, was der Betrieb bestätigt hat.
4. **`assets/img/lager-aktion.jpg` nicht einbinden** – darauf sind Personen erkennbar,
   dafür bräuchte es deren Einwilligung (KUG/DSGVO).
5. Neue Fotos immer als WebP **und** JPEG über `<picture>` einbinden, mit `width`/`height`
   und `loading="lazy"` (außer dem Hero-Bild).
6. Farben und Schriftgrößen nur über die Variablen in `:root` ändern.

## Design-System (Kurzfassung)
- Flächen: Kraftpapier-Beige `--paper` / `--paper-2`, dunkle Blöcke `--dark`
- Marke: Grün `--green` (Logo, Links), Bernstein `--amber` **nur** für Preise und Aktionen
- Schrift: `--font-display` Big Shoulders Display (Versalien, alle Überschriften),
  `--font-body` Literata (Fließtext)
- Radius 2 px, kein weicher App-Look

## Pipeline
Kein Build nötig – `index.html` direkt im Browser öffnen oder `python -m http.server`
für einen lokalen Server (nötig, damit die Schriften laden).
Deploy: GitHub Pages über Repo-Settings → Pages → Branch `main`
(**noch nicht aktiviert** – solange die Impressums-Pflichtangaben fehlen, bleibt sie offline).
