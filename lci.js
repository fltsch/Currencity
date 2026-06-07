'use strict';

// ─────────────────────────────────────────────────────────
//  CURRENCITY — lci.js
//  LCI-Explorer mit Live-Wechselkursen — identische Berechnung wie app.js
//  Formel: Math.floor(budget_lokal / dishPrice) / Math.floor(500 / 18.5)
// ─────────────────────────────────────────────────────────

const CH_PREIS = 18.5;
const BUDGET   = 500;
const P_HEIM   = Math.floor(BUDGET / CH_PREIS); // = 27

// Beispiel-Länder: lokaler Preis + Währung — identisch zu COUNTRIES in app.js
const BEISPIEL_LAENDER = [
  { flag: '🇻🇳', name: 'Vietnam',     emoji: '🍜', gericht: 'Phở Bò',         currency: 'VND', dishPrice: 80000,  beschreibung: 'Aussergewöhnlich günstig — dein Budget reicht mehr als dreimal so weit wie zu Hause.' },
  { flag: '🇵🇱', name: 'Polen',       emoji: '🥟', gericht: 'Pierogi Ruskie', currency: 'PLN', dishPrice: 25,     beschreibung: 'Sehr günstig — du bekommst mehr als doppelt so viele Mahlzeiten wie in der Schweiz.' },
  { flag: '🇯🇲', name: 'Jamaika',     emoji: '🍗', gericht: 'Jerk Chicken',   currency: 'JMD', dishPrice: 1300,   beschreibung: 'Sehr günstig — dein Geld reicht in der Karibik deutlich weiter als zu Hause.' },
  { flag: '🇯🇵', name: 'Japan',       emoji: '🍜', gericht: 'Ramen Bowl',     currency: 'JPY', dishPrice: 1500,   beschreibung: 'Günstiger — dein Budget reicht in Japan deutlich weiter als zu Hause.' },
  { flag: '🇫🇷', name: 'Frankreich',  emoji: '🥐', gericht: 'Croque Monsieur',currency: 'EUR', dishPrice: 9,      beschreibung: 'Günstiger als die Schweiz — du bekommst merklich mehr für dein Geld.' },
  { flag: '🇩🇪', name: 'Deutschland', emoji: '🌭', gericht: 'Currywurst',     currency: 'EUR', dishPrice: 8,      beschreibung: 'Günstiger als die Schweiz — deutlich spürbarer Unterschied beim Essen.' },
  { flag: '🇲🇽', name: 'Mexiko',      emoji: '🌮', gericht: 'Tacos al Pastor',currency: 'MXN', dishPrice: 75,     beschreibung: 'Etwas günstiger — dein Budget reicht in Mexiko leicht weiter als zu Hause.' },
  { flag: '🇨🇭', name: 'Schweiz',     emoji: '🥔', gericht: 'Rösti',           currency: 'CHF', dishPrice: 18.5,  beschreibung: 'Das ist die Referenz — genau dieselbe Kaufkraft wie in der Schweiz.', referenz: true },
  { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'England',     emoji: '🐟', gericht: 'Fish & Chips',  currency: 'GBP', dishPrice: 12,     beschreibung: 'Ähnlich wie die Schweiz — leicht teurer oder günstiger je nach Kurs.' },
  { flag: '🇹🇭', name: 'Thailand',    emoji: '🍜', gericht: 'Pad Thai',        currency: 'THB', dishPrice: 80,     beschreibung: 'Ähnliches Preisniveau wie die Schweiz — Restaurantpreise überraschen oft.' },
  { flag: '🇮🇳', name: 'Indien',      emoji: '🥘', gericht: 'Thali',           currency: 'INR', dishPrice: 200,    beschreibung: 'Ähnliches Niveau — Restaurantpreise in Indien sind höher als erwartet.' },
  { flag: '🇮🇸', name: 'Island',      emoji: '🐟', gericht: 'Plokkfiskur',    currency: 'ISK', dishPrice: 2800,   beschreibung: 'Teurer als die Schweiz — Islands Lebensmittelpreise gehören zu den höchsten Europas.' },
  { flag: '🇳🇴', name: 'Norwegen',    emoji: '🥩', gericht: 'Kjøttkaker',     currency: 'NOK', dishPrice: 145,    beschreibung: 'Deutlich teurer — dein Budget reicht in Norwegen nur halb so weit wie zu Hause.' },
];

let live_kurse = null;

// Identische Berechnung wie app.js
function berechne_lci(land, kurse) {
  if (land.referenz) return 1.0;
  if (kurse && kurse[land.currency] && kurse['CHF']) {
    const budget_lokal = (BUDGET / kurse['CHF']) * kurse[land.currency];
    const p_ziel = Math.floor(budget_lokal / land.dishPrice);
    return p_ziel / P_HEIM;
  }
  // Fallback ohne Kurse: CHF-Preis schätzen via dishPrice
  return 1.0; // Unbekannt ohne Kurse
}

function lci_farbe(lci, referenz) {
  if (referenz)    return 'var(--muted)';
  if (lci >= 1.3)  return 'var(--forest)';
  if (lci <= 0.77) return '#e57373';
  return 'var(--citrus)';
}

function naechster_anker(zielwert, anker_liste) {
  return anker_liste.reduce(function(best, anker) {
    return Math.abs(anker.lci - zielwert) < Math.abs(best.lci - zielwert) ? anker : best;
  });
}

function vergleich_text(lci) {
  if (lci > 1.05) {
    return 'Dein Geld reicht <strong>' + Math.round((lci - 1) * 100) + '% weiter</strong> als in der Schweiz.';
  }
  if (lci < 0.95) {
    return 'Du bekommst <strong>' + Math.round((1 - lci) * 100) + '% weniger</strong> für dein Geld als zu Hause.';
  }
  return 'Gleiche Kaufkraft wie in der Schweiz.';
}

// ── RENDER ──
function render_explorer(lci_wert, anker_liste) {
  const karte = document.getElementById('lci-explorer-karte');
  if (!karte) return;

  const anker = naechster_anker(lci_wert, anker_liste);
  const farbe = lci_farbe(lci_wert, anker.referenz);

  karte.innerHTML =
    '<div class="explorer-lci-badge" style="color:' + farbe + '; border-color:' + farbe + '40;">' +
      lci_wert.toFixed(2) + '×' +
    '</div>' +
    '<p class="explorer-bedeutung">' + anker.beschreibung + '</p>' +
    '<p class="explorer-vergleich">' + vergleich_text(lci_wert) + '</p>' +
    '<div class="explorer-beispiel">' +
      '<span class="explorer-beispiel-label">Beispielland bei diesem LCI</span>' +
      '<div class="explorer-beispiel-land">' +
        '<span class="explorer-flag">' + anker.flag + '</span>' +
        '<div>' +
          '<div class="explorer-land-name">' + anker.name + '</div>' +
          '<div class="explorer-land-gericht">' + anker.emoji + ' ' + anker.gericht +
            ' &nbsp;·&nbsp; LCI ' + anker.lci.toFixed(2) + '×</div>' +
        '</div>' +
      '</div>' +
    '</div>';
}

// ── INIT ──
async function init_explorer() {
  const slider  = document.getElementById('lci-explorer-slider');
  const anzeige = document.getElementById('lci-explorer-anzeige');
  if (!slider) return;

  // Live-Kurse laden (gleiche API wie app.js)
  try {
    const antwort = await fetch('https://apip.cc/rates.json');
    const daten   = await antwort.json();
    live_kurse    = daten.rates;
  } catch (e) {
    console.log('LCI-Explorer: Kurse nicht verfügbar, Fallback aktiv');
  }

  // LCI für alle Anker-Länder mit Live-Kursen berechnen und sortieren
  const anker_liste = BEISPIEL_LAENDER.map(function(l) {
    return Object.assign({}, l, { lci: berechne_lci(l, live_kurse) });
  }).sort(function(a, b) { return a.lci - b.lci; });

  // Slider-Range dynamisch anpassen
  const min_lci = Math.min.apply(null, anker_liste.map(function(a) { return a.lci; }));
  const max_lci = Math.max.apply(null, anker_liste.map(function(a) { return a.lci; }));
  slider.min   = Math.max(0.2, (min_lci - 0.1)).toFixed(2);
  slider.max   = (max_lci + 0.1).toFixed(2);
  slider.value = '1.0';

  function aktualisiere() {
    const wert = parseFloat(slider.value);
    if (anzeige) anzeige.textContent = wert.toFixed(2) + '×';
    render_explorer(wert, anker_liste);
  }

  slider.addEventListener('input', aktualisiere);
  aktualisiere();
}

document.addEventListener('DOMContentLoaded', init_explorer);
