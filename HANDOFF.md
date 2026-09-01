# Sync-Punkt für beide Claude-Instanzen

Dieses Projekt wird von zwei Personen an zwei Rechnern gebaut, jede mit eigenem Claude.
Diese Datei ist der gemeinsame Speicherstand: hier steht immer, was zuletzt gemacht wurde
und was als Nächstes dran ist – damit beide Seiten synchron bleiben, ohne sich extra
abstimmen zu müssen.

## Regeln (für Claude, bei jeder Session in diesem Repo)

1. **Vor dem Arbeiten:** `git pull`, dann diese Datei lesen ("Letzter Stand" unten).
2. **Beim Arbeiten:** `CLAUDE.md` beachten (Struktur, Stack-Entscheidung, offene Punkte).
3. **Nach dem Arbeiten:** Abschnitt "Letzter Stand" unten aktualisieren (neuer Eintrag oben:
   Datum, wer, was gemacht, was offen/als Nächstes), dann committen und `git push`.
4. Keine neuen Frameworks/Build-Tools einführen, ohne es hier zu vermerken – das Projekt
   ist bewusst plain HTML/CSS/JS.

## Letzter Stand

### 2026-09-01 – Laptop Fidan
- Projekt neu angelegt, Repo erstellt und gepusht: https://github.com/fidanajeti2009-web/im-getraenke-depot
- Basisdaten recherchiert: I.M Getränke Depot, Odenwaldring 86, 63069 Offenbach am Main, Tel. +49 177 3651650
- Erste Version der Seite gebaut: `index.html` (Hero, Sortiment, Öffnungszeiten, Anfahrt, Kontakt), `css/style.css`, `js/script.js`
- **Offen / nächste Schritte:**
  - Echte Öffnungszeiten bestätigen (aktuell Platzhalter "auf Anfrage")
  - Sortiment/Marken mit dem Laden abstimmen
  - Echtes Logo & Markenfarben besorgen (aktuell Platzhalter Grün `#0f6b3c` / Gold `#e8b23a`)
  - Eigene Fotos vom Laden einbinden statt Platzhaltertext
  - GitHub Pages aktivieren, sobald Inhalt final ist
