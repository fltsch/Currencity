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

Die Grundidee entstand aus einer persönlichen Frage: Wie weit reicht mein Budget wirklich, wenn ich ins Ausland reise? Wechselkurse allein beantworten das nicht. 1 CHF = 1500 JPY klingt nach viel — aber was kauft man sich davon? Erst wenn man weiss, dass eine Ramen-Bowl in Japan etwa 1500 JPY kostet, wird die Zahl greifbar. Aus dieser Überlegung entstand das Konzept des Local Craving Index: eine einzige Zahl, die Kaufkraft nicht abstrakt, sondern am Massstab eines echten Alltagsgerichts beschreibt. Als Referenz dient die Schweiz — konkret der Rösti zum Preis von CHF 18.50. Ein LCI von 2.4 bedeutet: mein Budget reicht im Zielland 2.4-mal so weit wie zu Hause.

### Wie die Website entstanden ist

Am Anfang stand die Karte. Der Plan war eine interaktive Weltkarte, auf der man Länder anklicken kann und sofort relevante Informationen sieht — Wechselkurs, Gerichte, Kaufkraft. Für die Karte wurde D3.js mit TopoJSON verwendet, beides zum ersten Mal. Der Einstieg war schwieriger als erwartet: Zoom, Pan, Klickinteraktion und Ländererkennung über numerische ISO-Codes mussten manuell implementiert und miteinander verknüpft werden. Hinzu kam, dass die Projektion so skaliert werden musste, dass die gesamte Welt immer sichtbar bleibt — unabhängig davon, ob das Fenster schmal oder breit ist.

Sobald die Karte funktionierte, kam das Panel. Beim Klick auf ein Land öffnet sich ein Seitensheet mit allen Informationen: dem Wechselkurs, dem Budget in Lokalwährung, drei Gerichten in drei Preiskategorien (Premium, Classic, Budget) und dem LCI. Das Panel sollte nicht statisch sein — die Zahlen zählen sich animiert hoch, die Balkengrafik baut sich auf, der Wechselkurs wird live von der apip.cc-API abgerufen. Die Entscheidung, ausschliesslich auf Live-Kurse zu setzen, hatte Konsequenzen für die gesamte Architektur: Alle Berechnungen mussten asynchron ablaufen und auf den gecachten API-Response warten, bevor irgendetwas angezeigt wird.

Parallel zur Karte wurde die Datenbasis aufgebaut. Für über 100 Länder wurden je drei Gerichte recherchiert und mit realistischen Lokalpreisen versehen. Das war zeitintensiv — jedes Gericht brauchte einen Namen, eine kurze Beschreibung, ein passendes Emoji und einen Preis in Lokalwährung. Dabei zeigte sich, dass viele erste Einschätzungen zu Preisen nicht stimmten. So war Pad Thai ursprünglich mit einem Fallback-CHF-Wert von 21 Franken hinterlegt, obwohl es in Thailand umgerechnet rund 2 Franken kostet. Diese Fallback-Werte werden zwar nur angezeigt, wenn die API ausfällt — aber stimmen sollten sie trotzdem.

Als nächstes folgte die Preistabelle auf `preise.html`. Dort sind alle Länder in einer durchsuchbaren, sortierbaren Tabelle aufgelistet — mit Live-CHF-Umrechnung für jedes Gericht und dem berechneten LCI. Die Sortierung nach LCI-Wert macht auf einen Blick sichtbar, wo das Budget am weitesten reicht. Damit die LCI-Werte in der Tabelle mit denen im Panel übereinstimmen, musste die Formel in beiden Dateien identisch implementiert sein. Das galt auch für die dritte Seite, `lci.html`, die den Index erklärt und einen interaktiven Slider enthält, mit dem man verschiedene LCI-Werte durchspielen kann.

Gegen Ende der Entwicklung kamen Features hinzu, die die App deutlich nützlicher machen: ein Rückrechner im Panel, mit dem man einen Betrag in Lokalwährung direkt in die Heimwährung umrechnen kann; ein Währungswähler, der das Heimland automatisch per IP erkennt, aber manuell änderbar ist; eine Favoritenfunktion; und der Ländervergleich, bei dem man zwei Länder direkt gegenüberstellen kann — mit allen drei Gerichtkategorien nebeneinander.

### Was kurz vor der Abgabe noch aufgefallen ist

Beim strukturierten Schlussdurchgang — dem Abgleich des Projekts mit den Abgabekriterien — fielen mehrere Dinge auf, die im laufenden Entwicklungsprozess untergegangen waren.

Der Live-Link im README zeigte auf `https://fltsch.github.io/Currencity` — GitHub Pages war nie aktiviert worden, der Link führte ins Leere. Die App lief tatsächlich auf Hostpoint unter einer anderen Adresse. Der Link wurde korrigiert. Ausserdem war der Ordner `.claude/`, in dem der KI-Assistent seine Konfiguration speichert, nicht in `.gitignore` eingetragen — er wäre mit ins Repository gepusht worden.

Bei der inhaltlichen Überprüfung aller Gerichte und Emojis zeigte sich, wie viele kleine Fehler sich eingeschlichen hatten. Ein 🐊 Krokodil stand für ein Fischcurry aus Kambodscha. Ein 🦞 Hummer stand für Paella, ein spanisches Reisgericht. Ein 🥐 Croissant für Croque Monsieur, ein gegrilltes Sandwich. Insgesamt wurden 47 Emojis korrigiert — nicht im Schnelldurchgang, sondern mit einem systematischen Abgleich jedes einzelnen Gerichts. Ebenfalls gefunden: Der Währungsname für Bahrain stand im Währungswähler noch auf Englisch (`Bahraini Dinar`), während alle anderen Währungen auf Deutsch waren.

Die Erklärungsseite `lci.html` enthielt ein fest eingetragenes Rechenbeispiel für Japan: Ramen Bowl entspricht CHF 9.–, was zu einem LCI von 2.0 führt. Mit den aktuellen Live-Wechselkursen kostet eine Ramen-Bowl aber nur noch rund CHF 7.50, was einem LCI von 2.4 entspricht. Das Beispiel widersprach also dem, was der LCI-Explorer direkt darunter anzeigte. Es wurde auf die aktuellen Werte angepasst.

Zuletzt wurde ein Mobile-Bug behoben, der bis dahin unbemerkt geblieben war: Das Vergleichs-Overlay verschwand beim Wischen nach unten nicht vollständig. Das Panel dahinter reagierte auf den Touch und verschob sich leicht, während das Overlay selbst stehenblieb. Die Lösung war ein eigener Swipe-Handler am Overlay-Header — mit einer `translateY`-Animation, die das Overlay nach unten gleiten lässt, und einem kurzen Timeout, bevor es auf `display: none` gesetzt wird. Damit das Overlay beim nächsten Öffnen wieder korrekt dargestellt wird, mussten `transform` und `transition` beim Schliessen explizit zurückgesetzt werden.

### KI-Unterstützung

Dieses Projekt wurde über mehrere Wochen mit Claude (Anthropic) als KI-Coding-Assistent entwickelt. Die Zusammenarbeit war kein einmaliger Einsatz, sondern verlief iterativ über den gesamten Entwicklungsprozess — von der ersten Kartenimplementierung bis zum finalen Abgabe-Review.

Die KI hat konkret dabei geholfen, technische Probleme zu lösen, die ohne Erfahrung mit D3.js und Touch-APIs schwer zu durchdringen gewesen wären. Der Touch-Handler für iOS Safari — mit `AbortController`, separatem Pan- und Pinch-Tracking und Tap-Erkennung — entstand in engem Austausch. Auch die Swipe-Logik für Panel und Overlay, die LCI-Berechnungsformel, die Animations-Funktionen und zahlreiche CSS-Lösungen für Layout-Probleme auf Mobile wurden gemeinsam erarbeitet.

Beim abschliessenden Review hat die KI alle Gerichte und Emojis systematisch geprüft, die LCI-Formel über alle drei Dateien hinweg verifiziert, Inkonsistenzen in den Währungsbezeichnungen gefunden und mehrere Stellen im Code identifiziert, die zwar funktionierten, aber unnötig waren — etwa eine Variable, die definiert aber nie benutzt wurde, oder `Intl.NumberFormat`-Objekte, die bei jedem Funktionsaufruf neu erstellt wurden, obwohl sie einmal auf Modulebene genügt hätten.

Konzept, Design und alle inhaltlichen Entscheidungen stammen vom Autor. Die Auswahl der über 100 Länder, die Recherche und Festlegung aller Gerichte, Beschreibungen und Lokalpreise, die Idee des LCI und das visuelle Erscheinungsbild der App wurden eigenständig entwickelt. Die KI hat keine Inhalte erfunden — sie hat geholfen, diese Inhalte technisch umzusetzen, zu überprüfen und zu verbessern.

---

## Autor

**Fabio Flütsch**
Studiengang Multimedia Production (BSc)
FHGR — Interaktive Medien 2, Frühlingssemester 2026
