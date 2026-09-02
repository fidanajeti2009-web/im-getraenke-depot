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

### 2026-09-02 – Laptop Adam

**Was gemacht wurde** (nichts an euren Inhalten/Preisen geändert, nur ergänzt und repariert):

*Optik komplett überarbeitet — Texte, Preise und Fotos sind 1:1 geblieben:*
Adams Urteil zur ersten Fassung war: „Hero ist cool, der Rest ist basic." Stimmt — die
Gründe waren System-Schrift (Segoe UI), fünf Abschnitte im exakt gleichen Takt,
Standard-Karten mit Rahmen + Hover-Schatten, briefmarkengroße Fotos und gleichmäßig
verteilte Farben. Neu ist deshalb:
- **Echte Schriften, selbst gehostet:** *Big Shoulders Display* (schmal, industriell,
  für alle Überschriften) gegen *Literata* (warme Serife im Fließtext). Beide liegen als
  woff2 in `assets/fonts/` (228 KB) und werden über `css/fonts.css` eingebunden —
  **bewusst nicht über das Google-Fonts-CDN**, das würde die IP jedes Besuchers an Google
  senden (LG München, 20.01.2022) und der Datenschutzerklärung widersprechen.
- **Neue Palette:** Kraftpapier-Beige als Fläche, fast schwarzes Grün als dominante Farbe,
  Bernstein **nur** für Preise und Aktionen. Radius von 10 px auf 2 px — Regal statt App.
- **Preisband unter dem Hero:** laufendes Bernstein-Band mit den vier echten Regalpreisen.
  Hält beim Hover an, ist `aria-hidden` (die Preise stehen ausgeschrieben weiter unten).
- **Preise sind jetzt das Herzstück:** dunkler Block, riesige Bernstein-Zahlen. Das ist
  der stärkste Inhalt, den ihr habt — den hat sonst kein Wettbewerber online.
- **Sortiment-Fotos groß (4:5) statt 200 px hoch**, ohne Karten-Rahmen, mit sanftem Zoom
  beim Hover. Die Chip-Wolke ist ein „Regal-Index" in Versalien geworden.
- **Hero:** gestaffelter Auftritt beim Laden, kleinere Überdeckung, Foto bleibt sichtbar.
- Palettenfoto mit Bernstein-Eckmarke, auf 540 px Höhe gedeckelt.

*Rechtliches (Punkt 4 der offenen Liste ist damit erledigt):*

*Rechtliches (Punkt 4 der offenen Liste ist damit erledigt):*
- `datenschutz.html` neu angelegt — DSGVO-konform für den echten Stand der Seite:
  Verantwortlicher, GitHub-Pages-Hosting + Server-Logfiles (Art. 6 Abs. 1 lit. f),
  TLS, Google Maps nur nach Einwilligung, Betroffenenrechte, Aufsichtsbehörde Hessen.
- **Google Maps auf 2-Klick-Lösung umgebaut.** Die Karte war fest als `<iframe>` drin, d. h.
  jeder Besucher schickte ungefragt seine IP an Google — genau das ist der Punkt, an dem
  deutsche Seiten abgemahnt werden. Jetzt steht dort eine Box mit Erklärung + Button
  „Karte laden"; vorher geht **keine einzige Anfrage** an Google raus. Alternativ-Link
  „In Google Maps öffnen" daneben.
- `impressum.html` erweitert: § 5 DDG (TMG ist seit Mai 2024 abgelöst), Haftung für
  Inhalte/Links, Urheberrecht, Preishinweis (Beispielpreise unverbindlich),
  § 36 VSBG, Link zur Datenschutzerklärung. Die fehlenden Pflichtangaben sind weiter
  klar als offen markiert.

*Zwei echte Fehler gefunden und behoben:*
- `js/script.js` starb auf jeder Unterseite in Zeile 1 (`getElementById("year")` ist dort
  null) — dadurch wären dort alle `reveal`-Blöcke unsichtbar geblieben. Alle
  DOM-Zugriffe sind jetzt abgesichert.
- Im Footer war „I.M" unsichtbar: dunkler Text (`--color-text`) auf dunklem Footer-Grund.
  Ebenso klebten Impressum/Datenschutz aneinander. Beides korrigiert.
- Zusätzlich: `.reveal` versteckt jetzt nur noch, wenn JavaScript wirklich läuft
  (`html.js`). Ohne JS oder bei einem Skript-Abbruch bleibt die Seite lesbar statt leer.

*Technik/Performance:*
- Alle 6 Fotos zusätzlich als WebP (ffmpeg): **1,79 MB → 696 KB** bei gleicher Optik.
  Eingebunden über `<picture>` mit JPEG-Fallback, die JPEGs bleiben also liegen.
- Hero-Bild ist jetzt ein echtes `<img>` mit `fetchpriority="high"` + `preload` statt
  CSS-Hintergrund → der Browser lädt es früher, der Seitenaufbau wirkt schneller.
- **Hero-Overlay war zu dunkel** (92 % Grün): euer Lagerfoto war praktisch unsichtbar.
  Jetzt links dunkel genug für den Text, rechts sieht man das Lager.
- Alle Bilder haben `width`/`height` → kein Springen beim Laden mehr.
- `prefers-reduced-motion` respektiert, Skip-Link + sichtbarer Fokusring für Tastatur.

*Auffindbarkeit:*
- JSON-LD `WholesaleStore` (Firma, Adresse, Ansprechpartner) — nur bestätigte Daten.
  Telefon und Öffnungszeiten stehen als auskommentierte Vorlage direkt daneben.
- `robots.txt` (KI-Crawler ausdrücklich erlaubt), `sitemap.xml`, `llms.txt`, `404.html`,
  Favicon, Open Graph, canonical.

*Kontrolle:* Seite mit Headless-Chrome auf 1280 px und 390 px geprüft, alle internen Links
und Assets automatisch getestet, JSON-LD validiert.

**⚠️ Zwei Punkte für Fidan:**
1. `assets/img/lager-aktion.jpg` liegt im Repo, ist aber **nirgends eingebunden** — gut so:
   darauf sind zwei Personen klar erkennbar. Vor einer Veröffentlichung braucht es dafür
   die Einwilligung der Abgebildeten (KUG/DSGVO). Ich habe es bewusst nicht verwendet.
2. In `sitemap.xml`, `robots.txt`, `llms.txt` und im JSON-LD steht als Adresse
   `https://fidanajeti2009-web.github.io/im-getraenke-depot/`. Falls eine eigene Domain
   kommt, müssen diese vier Stellen angepasst werden.

**Weiter offen (unverändert, braucht Infos vom Betrieb):**
1. **Telefonnummer** — im HTML steht ein `TODO(Betrieb)`-Kommentar an genau den zwei
   Stellen, wo sie rein muss (Kontaktblock + JSON-LD).
2. **Öffnungszeiten** (Tabelle + JSON-LD-Vorlage steht auskommentiert bereit).
3. **Impressum:** Handelsregister-Nr. + Registergericht, USt-IdNr., E-Mail.
4. Preise/Sortiment vom Chef gegenprüfen lassen.
5. GitHub Pages **noch nicht** aktiviert — bewusst: solange die Impressums-Pflichtangaben
   fehlen, sollte die Seite nicht öffentlich erreichbar sein.


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
