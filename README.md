# I.M Getränke Depot – Website

Praktikumsprojekt: Website für das **my DEPOT** in Offenbach am Main — Cash & Carry /
Großhandel für Gemüse, Getränke und Verpackungen.
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

- **Vollständiger Firmenname + Rechtsform** – Pflichtangabe im Impressum, aktuell offen
- **Vertretungsberechtigte Person** – Pflichtangabe, aktuell offen
- Welcher Name gilt: „my DEPOT" (Fassade/Google/Facebook) oder „I.M Getränke Depot" (Prospekt)?
- Impressum: Handelsregister-Nr. + Registergericht, USt-IdNr., E-Mail ergänzen
- Preise/Sortiment vom Chef gegenprüfen lassen
- GitHub Pages einrichten – erst, wenn die Impressums-Pflichtangaben da sind

## Quelle der Basisdaten

**Stand 02.09.2026:** Odenwaldring 86, 63069 Offenbach am Main, Telefon 0177 3651650,
Mo–Sa 08:00–20:00. Quelle ist der Google-Maps-Eintrag des Ladens („My Depott"), den der
Betrieb selbst gepflegt hat und der von Adam bestätigt wurde.

Die vorher eingetragene Darmstädter Adresse stammte von einem Lieferschein aus dem
Praktikum — vermutlich vom Lieferanten, nicht vom Laden selbst. Deshalb ist auch der
vollständige Firmenname mit Rechtsform wieder offen. Die ganze Begründung steht oben
in `HANDOFF.md`.
