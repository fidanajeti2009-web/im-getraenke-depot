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

## ⚠️ WICHTIGE KORREKTUR (2026-09-01, zweiter Eintrag)

Die zuerst recherchierte Adresse war **FALSCH** (falscher Google-Treffer, andere Firma).

**Richtig, bestätigt durch echtes Lieferschein-Foto vom Praktikum:**
- Firma: **I.M-Getränke Depot UG (haftungsbeschränkt)**
- Adresse: **Berliner Allee 47, 64295 Darmstadt** (nicht Offenbach!)
- Kontakt/Inhaber laut Lieferschein: **Ilhan Mehmetov**
- Telefonnummer: noch NICHT bestätigt (alte Nummer +49 177 3651650 gehörte zum falschen Offenbach-Treffer, nicht mehr verwenden)
- Geschäftsmodell: Cash & Carry / Großhandel für Gastronomie, Kioske, Imbisse und Einzelhandel — nicht nur Endkunden. Verkauft auch palettenweise/Großmengen an andere Betriebe.
- Sortiment laut Fotos/Videos: Getränke (Softdrinks, Wasser, Bier-Kisten), Lebensmittel/Import (v. a. türkische Marken: Käse, Ayran/Joghurt, Konserven, Oliven), Gastro-Einwegbedarf (Servietten, Salatboxen, Menüboxen, Alu-Schalen), Haushalt/Reinigung (Toilettenpapier, Handtuchrollen, Waschmittel)

Falls der andere Laptop schon mit der Offenbach-Adresse gearbeitet hat: bitte NICHT übernehmen, diese Version hier ist korrekt.

## Letzter Stand

### 2026-09-01 (abends) – Laptop Fidan

**Ordner umgezogen:** Das Projekt liegt jetzt unter
`C:\Users\fidan\Documents\Fachabitur\IM-Getraenke-Depot` (vorher direkt in `Documents`).
Auf dem anderen Laptop ist der Pfad egal — einfach `git pull` im vorhandenen Clone.

**Was gemacht wurde:**
- 20 Videos + 32 Fotos vom Handy aus dem Ordner "Praktikum Webseite" geholt
  (liegen unter `Fachabitur\Praktikum Videos` und `Fachabitur\Praktikum Bilder`,
  bewusst NICHT im Repo — zu groß).
- 9 der Videos waren HEVC und liefen unter Windows nicht → mit ffmpeg nach H.264 umgerechnet.
- Videos Frame für Frame ausgewertet (59 Frames) + alle Fotos gesichtet, um Sortiment
  und echte Preise von den Preisschildern abzulesen.
- **Firmendaten korrigiert** (siehe Korrektur-Block oben): Darmstadt statt Offenbach.
- **Seite komplett neu gebaut** mit echten Inhalten:
  - Hero mit echtem Lagerfoto + 2 funktionierende CTA-Buttons
  - Sortiment: 3 Fotokarten (Getränke / Lebensmittel & Import / Gastrobedarf) + Chip-Reihe
  - "Beispielpreise aus dem Lager" mit 4 echten Preisen von den Regalschildern:
    Coca-Cola Kiste 12x1,0 l inkl. Pfand **16,50 EUR**, Servietten weiss Karton 4 kg **9,99 EUR**,
    Handtuchrollen 2-lagig 6 Rollen **14,50 EUR** (statt 18,50), Körfez Ayran 20x250 ml
    **5,99 EUR** (statt 7,60)
  - Dunkle Großhandel-/B2B-Sektion mit Palettenfoto + "Großbestellung anfragen"
  - Öffnungszeiten, Kontakt, Google-Maps-Anfahrt, Footer, Back-to-Top-Button
- 6 optimierte Fotos in `assets/img/` (aus dem eigenen Videomaterial, kein Stockfoto).
- Scroll-Animationen (IntersectionObserver) + Sicherheitsnetz, damit nie ein Abschnitt
  unsichtbar hängen bleibt.
- `impressum.html` neu angelegt (§ 5 TMG), fehlende Pflichtangaben klar markiert.
- README / CLAUDE.md / CONTENT-CHECKLIST auf die richtigen Firmendaten umgestellt.

**Offen — hier kann der andere Claude/Laptop weitermachen:**
1. **Telefonnummer besorgen** (steht überall als "wird noch bestätigt") — wichtigster Punkt,
   ohne Nummer funktioniert die ganze B2B-Sektion nicht richtig.
2. **Echte Öffnungszeiten** eintragen (aktuell überall "auf Anfrage").
3. **Impressum vervollständigen:** Handelsregister-Nr. + Registergericht, USt-IdNr., E-Mail.
4. **Datenschutzerklärung** anlegen (`datenschutz.html`) — Pflicht, u. a. wegen der
   eingebundenen Google-Maps-Karte.
5. Preise/Sortiment vom Chef gegenprüfen lassen, bevor die Seite online geht.
6. GitHub Pages aktivieren, wenn der Inhalt final ist.

**Bitte NICHT machen:** keine neue Adresse/Telefonnummer aus Google übernehmen — genau
das war schon einmal falsch. Nur bestätigte Angaben vom Betrieb selbst.

### 2026-09-01 – Laptop Fidan
- Projekt neu angelegt, Repo erstellt und gepusht: https://github.com/fidanajeti2009-web/im-getraenke-depot
- Basisdaten recherchiert: Odenwaldring 86, 63069 Offenbach, Tel. +49 177 3651650 — ⚠️ FALSCH, siehe Korrektur oben
- Erste Version der Seite gebaut: `index.html` (Hero, Sortiment, Öffnungszeiten, Anfahrt, Kontakt), `css/style.css`, `js/script.js`
- **Offen / nächste Schritte:**
  - Echte Öffnungszeiten bestätigen (aktuell Platzhalter "auf Anfrage")
  - Sortiment/Marken mit dem Laden abstimmen
  - Echtes Logo & Markenfarben besorgen (aktuell Platzhalter Grün `#0f6b3c` / Gold `#e8b23a`)
  - Eigene Fotos vom Laden einbinden statt Platzhaltertext
  - GitHub Pages aktivieren, sobald Inhalt final ist
