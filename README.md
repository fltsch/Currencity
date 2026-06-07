# Currencity — Local Craving Index

Currencity ist eine interaktive Webanwendung, die zeigt, wie weit das eigene Budget im Ausland reicht. Basierend auf Live-Wechselkursen und lokalen Lebensmittelpreisen wird ein sogenannter **Local Craving Index (LCI)** berechnet: Wie viele Mahlzeiten kann ich mir im Zielland im Vergleich zur Schweiz leisten?

**Live:** [https://im2.fegusimi.myhostpoint.ch](https://im2.fegusimi.myhostpoint.ch)

---

## Funktionen

- **Interaktive Weltkarte** — Klick auf ein Land öffnet ein Seitenpanel mit allen relevanten Informationen
- **Local Craving Index (LCI)** — Berechnet dynamisch die Kaufkraft im Vergleich zur Schweiz
- **Budget-Rechner** — Eingabe des Reisebudgets in CHF oder Heimwährung
- **Drei Preis-Tiers** — Premium, Classic und Budget-Gerichte pro Land
- **Preisindex-Tabelle** — Alle Länder sortierbar und durchsuchbar
- **Live-Wechselkurse** — Werden beim Seitenaufruf über die apip.cc API abgerufen
- **Responsiv** — Optimiert für Desktop und Mobile

---

## API

| API | Zweck | Endpunkt |
|-----|-------|----------|
| [apip.cc](https://apip.cc) | Live-Wechselkurse (USD-basiert) | `https://apip.cc/rates.json` |

Die Wechselkurse werden beim Laden der Seite abgerufen und für alle Berechnungen (LCI, CHF-Umrechnung, Preisanzeige) verwendet. Bei Nichtverfügbarkeit der API greift die App auf statische `dishPriceCHF`-Fallback-Werte zurück.

---

## Seiten

| Datei | Beschreibung |
|-------|-------------|
| `index.html` | Hauptseite mit interaktiver Weltkarte (D3.js) |
| `lci.html` | Erklärungsseite zum Local Craving Index |
| `preise.html` | Vollständige Preistabelle aller Länder mit Suche & Sortierung |

---

## Technologien

- **Vanilla JavaScript** (ES6+, kein Framework)
- **D3.js** & **TopoJSON** — SVG-Weltkarte mit Zoom, Pan und Klickinteraktion
- **Lottie** (`@lottiefiles/lottie-player`) — Animationen im Welcome-Modal und Lade-Indikator
- **CSS Grid & Flexbox** — Layout und responsives Design
- **Intl.NumberFormat** — Lokalisierte Preis- und Zahlenformatierung

---

## Animationen

| Einsatz | Beschreibung |
|---------|-------------|
| Welcome-Modal | Eigene Lottie-Animation (`lottie-laden.json`) erscheint beim Klick auf "Karte erkunden" |
| Panel-Ladeindikator | Lottie-Spinner während dem Laden der Länderdaten |
| Heimatland-Puls | CSS-Animation auf der Weltkarte markiert das Heimatland |
| Flaggen-Wackeln | CSS-Animation im Welcome-Modal |
| Panel-Slide | CSS-Transition beim Öffnen/Schliessen des Seitenpanels |

---

## Lokale Nutzung

Kein Build-Schritt nötig — einfach `index.html` im Browser öffnen:

```bash
# Optional: lokaler Dev-Server (verhindert CORS-Probleme)
python3 -m http.server 8000
# → http://localhost:8000
```

---

## Projektstruktur

```
Currencity/
├── index.html          # Hauptseite (Karte)
├── lci.html            # LCI-Erklärungsseite
├── preise.html         # Preisindex-Tabelle
├── app.js              # Hauptlogik (Karte, Panel, LCI, API)
├── preise.js           # Logik für Preistabelle
├── style.css           # Globale Styles
├── preise.css          # Styles Preisseite
├── lci.css             # Styles LCI-Seite
└── lottie-laden.json   # Eigene Lottie-Animation
```

---

## LCI-Berechnung

```
LCI = (Budget ÷ Preis Classic-Gericht im Zielland)
    ÷ (Budget ÷ CHF 18.50 Rösti in der Schweiz)
```

- **LCI > 1.3** → günstiger als Schweiz (grün)
- **LCI 0.77–1.3** → ähnliches Preisniveau (gelb)
- **LCI < 0.77** → teurer als Schweiz (rot)

Referenz-Heimgericht: Rösti, CHF 18.50

---

## Reflexion

### Projektidee und Entstehung

Die Grundidee entstand aus einer persönlichen Frage: *Wie weit reicht mein Budget wirklich, wenn ich ins Ausland reise?* Wechselkurse allein beantworten das nicht — 1 CHF = 1500 JPY klingt viel, sagt aber nichts darüber aus, was man sich davon kaufen kann. Entscheidend ist, wie viele Mahlzeiten man sich im Zielland leisten kann — im Vergleich zu zuhause. Daraus entstand der **Local Craving Index (LCI)**: eine einzige Zahl, die Kaufkraft konkret und alltagsnah übersetzt, basierend auf einem repräsentativen lokalen Gericht pro Land.

Als Referenz wurde bewusst die Schweiz gewählt — das Projekt richtet sich an Reisende aus der Schweiz, und der Rösti (CHF 18.50) dient als stabiler Anker für den Vergleich. Ein LCI von 2.4× bedeutet: mein Budget reicht im Zielland 2.4-mal so weit wie zu Hause.

### Entwicklungsprozess

**Technischer Aufbau**
Der Einstieg war anspruchsvoll. D3.js und TopoJSON waren neu für mich — eine interaktive Weltkarte mit Zoom, Pan, Klick- und Touch-Unterstützung aufzubauen hat deutlich mehr Zeit gebraucht als erwartet. Besonders iOS Safari hat eigene Regeln: Touch-Events auf SVG-Elementen lassen sich dort nicht mit `preventDefault()` unterbrechen. Die Lösung war ein vollständig eigener Touch-Handler auf dem umgebenden HTML-`div`, verwaltet mit einem `AbortController`, der bei jedem Resize sauber neu aufgebaut wird — komplett unabhängig vom D3-Zoom, der nur noch für Mausrad und programmatische Animationen zuständig ist.

**Daten und Inhalte**
Die Datenarbeit war aufwändiger als erwartet. Für über 100 Länder mussten je drei Gerichte (Premium, Classic, Budget) recherchiert, inhaltlich begründet und mit realistischen Lokalpreisen versehen werden. Dabei stellte sich heraus, dass viele ursprüngliche Annahmen nicht stimmten — zum Beispiel waren mehrere `dishPriceCHF`-Fallback-Werte (statische CHF-Schätzwerte für den Fall, dass die API nicht antwortet) deutlich zu hoch angesetzt, etwa Pad Thai mit 21 CHF statt der realen ~2 CHF. Im Normalbetrieb werden diese Fallback-Werte nie angezeigt — die App rechnet live mit der apip.cc-API —, sie hätten aber bei einem API-Ausfall zu falschen Anzeigen geführt.

**LCI-Formel und API-Konsistenz**
Eine wichtige Erkenntnis war, dass die LCI-Berechnung in allen drei JavaScript-Dateien (`app.js`, `preise.js`, `lci.js`) exakt identisch sein muss — sonst zeigt das Panel einen anderen Wert als die Preistabelle. Die Formel lautet:

```
LCI = Math.floor(budget_lokal / dishPrice) / Math.floor(500 / 18.5)
```

Alle drei Dateien verwenden denselben API-Endpunkt (`apip.cc/rates.json`) und dieselbe Umrechnungslogik. Das wurde in einem gemeinsamen Review-Schritt geprüft und bestätigt.

### Herausforderungen

**Mobile Touch und Swipe-Bugs**
Das Panel auf Mobile hat ein eigenes Swipe-to-close: der Nutzer zieht es nach unten und es schnappt zurück oder schliesst sich. Das Vergleichs-Overlay hatte dieses Verhalten nicht — es existierte kein Touch-Handler dafür. Kurz vor der Abgabe wurde gemeldet, dass das Overlay beim Wischen nach unten nicht vollständig verschwindet. Die Ursache: das Panel hinter dem Overlay reagierte auf den Touch und verschob sich leicht, während das Overlay selbst stehenblieb. Die Lösung war ein eigener Swipe-Handler am Overlay-Header mit einer `translateY`-Animation und einem 300ms-Timeout, bevor `display: none` gesetzt wird. Zusätzlich wurde `schliesse_vergleich_overlay()` so erweitert, dass es `transform` und `transition` vor dem Ausblenden zurücksetzt — damit beim nächsten Öffnen keine alten Stile hängenbleiben.

**Emoji-Konsistenz**
Bei der finalen inhaltlichen Durchsicht wurden zahlreiche Gerichte mit unpassenden Emojis gefunden. Konkrete Beispiele: Ein 🐊 Krokodil stand für *Amok Trei* (ein Fischcurry aus Kambodscha), ein 🦞 Hummer für *Paella* (ein Reisgericht), ein 🥐 Croissant für *Croque Monsieur* (ein Sandwich), ein 🫐 Blaubeere für *Kanelbulle* (ein Zimtschneckchen). Insgesamt wurden 47 Emojis korrigiert — systematisch per Grep und manuellem Abgleich.

**Währungsbezeichnungen**
Der Währungsname für BHD (Bahrain) war an zwei Stellen inkonsistent: In `CURRENCY_NAMES` stand `'Bahrainischer Dinar'` (Deutsch), im Währungswähler `CURRENCY_LIST` hingegen noch `'Bahraini Dinar'` (Englisch). Solche Inkonsistenzen fallen nur bei einem vollständigen Abgleich auf.

**Responsive Design**
Desktop und Mobile haben grundlegend unterschiedliche Layouts: Das Panel ist auf Desktop ein Seitensheet (rechts), auf Mobile ein Bottom Sheet (unten). Beide mussten unabhängig voneinander korrekt funktionieren — inklusive eigener Swipe-Gesten, eigener Header-Höhen und eigenem Verhalten beim Öffnen und Schliessen der Karte.

**Abgabe-Readiness**
Kurz vor der Abgabe zeigte sich, dass der Live-Link im README auf `https://fltsch.github.io/Currencity` zeigte — GitHub Pages war nie aktiviert worden, der Link führte ins Leere. Tatsächlich läuft die App auf Hostpoint (`https://im2.fegusimi.myhostpoint.ch`). Ausserdem war die `.claude/`-Konfigurationsmappe des KI-Assistenten nicht in `.gitignore` eingetragen und hätte mit ins Repository gepusht werden können. Solche Details fallen erst beim strukturierten Schlussdurchgang auf.

**Statisches LCI-Beispiel**
Die Erklärungsseite `lci.html` enthielt ein fest eingetragenes Japan-Beispiel mit einem Ramen-Preis von CHF 9.– — was mit den aktuellen Live-Wechselkursen nicht mehr stimmte (realer Wert: ca. CHF 7.50). Das Beispiel wurde auf die aktuellen Kurse abgeglichen, um Widersprüche zwischen der Erklärung und dem tatsächlichen LCI-Explorer zu vermeiden.

### KI-Unterstützung

Dieses Projekt wurde mit Claude (Anthropic) als KI-Coding-Assistent entwickelt. Die Zusammenarbeit verlief über mehrere Sitzungen und war eng in den Entwicklungsprozess eingebettet — nicht als einmaliger Codegenerator, sondern als iterativer Gesprächspartner.

**Was die KI konkret beigetragen hat:**
- JavaScript-Implementierungen (Touch-Handler, Swipe-Logik, LCI-Berechnung, Animations-Funktionen)
- CSS-Problemlösungen (Panel-Layout, Overlay, Mobile-Breakpoints)
- Systematische Fehlersuche: vollständiger Abgleich aller 47 Emoji-Fehler, Überprüfung aller Währungsnamen, Verifikation der LCI-Formel in allen drei Dateien
- Code-Review vor der Abgabe: Identifikation eines toten `fmt`-Variables, inkonsistenter Fallback-Werte und einer fehlenden Style-Rücksetzung im Overlay
- Refactoring: `Intl.NumberFormat`-Instanzen von inline (bei jedem Aufruf neu erstellt) auf Modulebene verschoben, Konfigurationsobjekte (`TIER_BADGES`, `VGL_TIERS`) und die Hilfsfunktion `lci_label()` aus den Funktionsrümpfen herausgezogen

**Was der Autor selbst erarbeitet hat:**
Konzept, Informationsarchitektur und Design stammen vollständig vom Autor. Die Auswahl der über 100 Länder, die Recherche und Festlegung aller Gerichte und Lokalpreise, die Entscheidung für den LCI als zentrales Konzept sowie das visuelle Erscheinungsbild der App wurden eigenständig entwickelt. Die KI hat keine Inhalte erfunden — sie hat geholfen, Ideen umzusetzen, Fehler zu finden und Code sauber zu halten.

---

## Autor

**Fabio Flütsch**
Studiengang Multimedia Production (BSc)
FHGR — Interaktive Medien 2, Frühlingssemester 2026
