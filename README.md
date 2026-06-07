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

## KI-Unterstützung

Dieses Projekt wurde mit Unterstützung von Claude (Anthropic) als KI-Coding-Assistent entwickelt.
Die KI wurde eingesetzt für: Code-Debugging, CSS-Problemlösungen und JavaScript-Implementierungen.
Konzept, Design, Datenrecherche (Länder & Preise) und alle inhaltlichen Entscheidungen
stammen vom Autor.

---

## Autor

**Fabio Flütsch**
Studiengang Multimedia Production (BSc)
FHGR — Interaktive Medien 2, Frühlingssemester 2026
