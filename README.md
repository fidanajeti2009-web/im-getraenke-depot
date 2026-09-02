# I.M Getränke Depot – Website

Praktikumsprojekt: Website für das **I.M-Getränke Depot UG** in Darmstadt — Cash & Carry / Großhandel.
Gebaut als einfache statische Seite (HTML/CSS/JS, kein Build-Schritt) – bewusst simpel gehalten,
damit zwei Personen an zwei Rechnern problemlos parallel daran arbeiten können.

## Struktur

```
index.html        – Startseite
impressum.html    – Impressum (§ 5 DDG)
datenschutz.html  – Datenschutzerklärung
404.html          – Fehlerseite
css/style.css     – Design-System (Farben/Schriften als Variablen in :root)
css/fonts.css     – @font-face für die selbst gehosteten Schriften
js/script.js      – Menü, Scroll-Reveal, Maps-Einwilligung, Footer-Jahr
assets/img/       – Fotos als .webp + .jpg (Fallback über <picture>)
assets/fonts/     – Big Shoulders Display + Literata (woff2)
robots.txt · sitemap.xml · llms.txt · assets/favicon.svg
```

## Lokal ansehen

Nicht per Doppelklick öffnen – über einen lokalen Server, sonst laden die Schriften nicht:

```
python -m http.server 8000
```

Dann `http://localhost:8000` im Browser aufrufen.

## Wichtig beim Weiterbauen

- **Keine Schriften vom Google-CDN einbinden** – die liegen lokal in `assets/fonts/`.
  Ein `<link>` auf fonts.googleapis.com sendet die IP jedes Besuchers an Google.
- **Google Maps lädt erst nach Klick** – das feste `<iframe>` nicht wieder einbauen.
- **`assets/img/lager-aktion.jpg` nicht verwenden** – darauf sind Personen erkennbar.
- Details und Design-Regeln stehen in `CLAUDE.md`, der Verlauf in `HANDOFF.md`.

## Bekannte offene Punkte (TODO)

- **Telefonnummer** – fehlt überall, im HTML mit `TODO(Betrieb)` markiert
- Echte Öffnungszeiten bestätigen (aktuell "auf Anfrage")
- Impressum: Handelsregister-Nr. + Registergericht, USt-IdNr., E-Mail ergänzen
- Preise/Sortiment vom Chef gegenprüfen lassen
- GitHub Pages einrichten – erst, wenn die Impressums-Pflichtangaben da sind

## Quelle der Basisdaten

Firma und Adresse bestätigt über ein echtes Lieferschein-Foto aus dem Praktikum:
I.M-Getränke Depot UG (haftungsbeschränkt), Berliner Allee 47, 64295 Darmstadt,
Ansprechpartner Ilhan Mehmetov.

Die zuerst per Google recherchierte Offenbacher Adresse (Odenwaldring 86) war ein
falscher Treffer und gehört zu einer anderen Firma — nicht mehr verwenden.
Die Telefonnummer ist weiterhin unbestätigt.
