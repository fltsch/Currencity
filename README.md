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

Die Grundidee entstand aus einer persönlichen Frage: *Wie weit reicht mein Budget wirklich, wenn ich ins Ausland reise?* Wechselkurse allein beantworten das nicht — entscheidend ist, was man vor Ort tatsächlich kaufen kann. Daraus entstand das Konzept des **Local Craving Index (LCI)**: eine einzige Zahl, die Kaufkraft konkret und verständlich macht — gemessen an einem lokalen Alltagsgericht.

### Entwicklungsprozess

Der Einstieg war technisch herausfordernd. D3.js und TopoJSON waren neu für mich, und eine interaktive Weltkarte mit Zoom, Pan, Klick- und Touch-Unterstützung zu bauen hat deutlich mehr Zeit gebraucht als erwartet. Besonders iOS Safari hat eigene Regeln: Touch-Events auf SVG-Elementen verhalten sich anders als auf HTML-Elementen, was zu einem eigenen Touch-Handler mit `AbortController` geführt hat — komplett unabhängig vom D3-Zoom.

Die Datenarbeit war aufwändiger als gedacht. Für über 100 Länder mussten drei Gerichte pro Land recherchiert, bewertet und mit realistischen Lokalpreisen versehen werden. Dabei zeigte sich schnell, dass viele Annahmen zu Preisen korrigiert werden mussten — zum Beispiel, dass Pad Thai in Thailand deutlich günstiger ist als zunächst angenommen, oder dass Pad Thai in der App mit einem falschen Fallback-Preis hinterlegt war.

Eine wichtige Erkenntnis beim Live-Test: Der LCI muss konsequent mit Live-Wechselkursen berechnet werden — andernfalls stimmt der Vergleich nicht. Die Formel wurde deshalb in allen drei JS-Dateien (`app.js`, `preise.js`, `lci.js`) identisch gehalten und auf denselben API-Endpunkt ausgerichtet.

### Herausforderungen

- **Touch auf Mobile**: Swipe-to-close für das Panel musste manuell implementiert werden; ein bestehender Bug beim Vergleichs-Overlay (Overlay verschwand beim Wischen nicht vollständig) wurde kurz vor der Abgabe noch behoben.
- **Emoji-Konsistenz**: Bei der finalen Durchsicht wurden zahlreiche Gerichte mit unpassenden Emojis gefunden — ein Krokodil für ein Fischcurry aus Kambodscha, ein Hummer für Paella. 47 Emojis wurden korrigiert.
- **Responsive Design**: Desktop und Mobile haben grundlegend unterschiedliche Layouts — das Panel ist auf Desktop ein Seitensheet, auf Mobile ein Bottom Sheet. Beide mussten unabhängig voneinander korrekt funktionieren.
- **Abgabe-Readiness**: Kurz vor der Abgabe zeigte sich, dass der README-Link auf GitHub Pages zeigte (nicht aktiviert) statt auf Hostpoint. Kleinigkeiten wie diese fallen erst beim kritischen Schlussdurchgang auf.

### KI-Unterstützung

Dieses Projekt wurde mit Unterstützung von Claude (Anthropic) als KI-Coding-Assistent entwickelt. Die KI wurde eingesetzt für: Code-Debugging, CSS-Problemlösungen, JavaScript-Implementierungen sowie die finale Code-Review und Optimierung (u.a. Refactoring von `Intl.NumberFormat`-Instanzen auf Modulebene, Hoist von Konfigurationskonstanten).

Konzept, Design, Datenrecherche (Länder, Gerichte & Preise) und alle inhaltlichen Entscheidungen stammen vom Autor. Die KI hat keine Inhalte erfunden — sie hat geholfen, Ideen umzusetzen und Fehler zu finden.

---

## Autor

**Fabio Flütsch**
Studiengang Multimedia Production (BSc)
FHGR — Interaktive Medien 2, Frühlingssemester 2026
