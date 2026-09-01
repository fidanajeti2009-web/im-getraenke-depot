# Projekt: I.M Getränke Depot – Website

Praktikums-Projekt (gemeinsam mit einem zweiten Claude auf einem anderen Laptop).
Statische Website (kein Build-Schritt) für den Getränkeladen I.M Getränke Depot,
Odenwaldring 86, 63069 Offenbach am Main.

## Struktur
- `index.html` – komplette Seite in einer Datei (Sections: Hero, Sortiment, Öffnungszeiten, Anfahrt, Kontakt)
- `css/style.css` – Styling, Farbvariablen oben in `:root`
- `js/script.js` – mobiles Menü + Footer-Jahr

## Stack-Entscheidung
Bewusst plain HTML/CSS/JS ohne Framework/Build-Tool, damit beide Mitwirkenden
(zwei Claude-Instanzen auf zwei Rechnern) ohne Setup-Reibung direkt editieren können.
Vor einem Wechsel auf ein Framework bitte erst absprechen.

## Offene Punkte / nächste Schritte
- Echte Öffnungszeiten bestätigen (aktuell Platzhalter)
- Sortiment/Marken mit dem Laden abstimmen
- Echtes Logo & Markenfarben einsetzen (aktuell Platzhalter-Grün `#0f6b3c` / Gold `#e8b23a`)
- Eigene Fotos statt Platzhaltertext
- GitHub Pages Deployment aktivieren, sobald Inhalt final ist

## Pipeline
Kein Build nötig – `index.html` direkt im Browser öffnen oder `npx serve` für lokalen Server.
Deploy: GitHub Pages über Repo-Settings → Pages → Branch `main` (noch nicht aktiviert).
