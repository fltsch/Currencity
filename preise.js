'use strict';

// ─────────────────────────────────────────────────────────
//  CURRENCITY — preise.js
//  Searchbar + sortierbare Tabelle + Variante B (Lokal + CHF)
// ─────────────────────────────────────────────────────────

const KONTAKT_EMAIL = 'fabio.fluetsch@stud.fhgr.ch';

let formular_land_code = null;
let aktuelle_kurse     = null;
let sort_spalte        = 'name';
let sort_dir           = 'asc';
let such_filter        = '';   // aktueller Suchbegriff

// ─────────────────────────────────────────────────────────
//  HILFSFUNKTIONEN
// ─────────────────────────────────────────────────────────
function formatiere_lokal(preis, waehrung) {
  return new Intl.NumberFormat('de-CH', { maximumFractionDigits: 2 }).format(preis) + ' ' + waehrung;
}

function sortierwert(code, spalte) {
  const land = COUNTRIES[code];
  if (spalte === 'name') return land.name.toLowerCase();
  if (spalte === 'lci')  return berechne_lci_tabelle(code);
  // Für Tier-Spalten: live CHF-Äquivalent verwenden wenn Kurse vorhanden
  if (spalte === 'premium' || spalte === 'classic' || spalte === 'budget') {
    const dish = land.dishes[spalte];
    if (aktuelle_kurse && aktuelle_kurse[land.currency] && aktuelle_kurse['CHF']) {
      return (dish.dishPrice / aktuelle_kurse[land.currency]) * aktuelle_kurse['CHF'];
    }
    return dish.dishPriceCHF; // Fallback auf statischen Wert
  }
  return 0;
}

// Gefilterte + sortierte Codes zurückgeben
function gefilterte_codes() {
  const suchbegriff = such_filter.toLowerCase();
  return Object.keys(COUNTRIES)
    .filter(function(code) {
      if (!suchbegriff) return true;
      const land = COUNTRIES[code];
      return land.name.toLowerCase().includes(suchbegriff)
        || land.currency.toLowerCase().includes(suchbegriff)
        || land.continent.toLowerCase().includes(suchbegriff);
    })
    .sort(function(a, b) {
      const va = sortierwert(a, sort_spalte);
      const vb = sortierwert(b, sort_spalte);
      if (va < vb) return sort_dir === 'asc' ? -1 : 1;
      if (va > vb) return sort_dir === 'asc' ?  1 : -1;
      return 0;
    });
}

// ─────────────────────────────────────────────────────────
//  TABELLE AUFBAUEN
// ─────────────────────────────────────────────────────────
async function baue_preistabelle() {
  try {
    const antwort = await fetch('https://apip.cc/rates.json');
    const daten   = await antwort.json();
    aktuelle_kurse = daten.rates;

    // Zeitstempel
    const jetzt = new Date();
    const fmt   = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const el_abgerufen = document.getElementById('api-abgerufen');
    if (el_abgerufen) el_abgerufen.textContent = 'Abgerufen: ' + jetzt.toLocaleString('de-CH', fmt);

    const el_update = document.getElementById('api-update');
    if (el_update) {
      if (daten.date) {
        el_update.textContent = daten.date;
      } else {
        el_update.textContent = 'Täglich';
      }
    }
  } catch (fehler) {
    console.log('Kurse nicht verfügbar');
    const el_abgerufen = document.getElementById('api-abgerufen');
    const el_update    = document.getElementById('api-update');
    if (el_abgerufen) el_abgerufen.textContent = 'Nicht verfügbar';
    if (el_update)    el_update.textContent    = 'Nicht verfügbar';
  }

  render_zeilen();
  setup_sortierung();
  setup_suche();
}

// ─────────────────────────────────────────────────────────
//  LCI BERECHNEN FÜR TABELLE
//  Classic-Tier basiert, CHF-Referenz: Rösti CHF 18.5
// ─────────────────────────────────────────────────────────
function berechne_lci_tabelle(code) {
  const land = COUNTRIES[code];
  // Wenn Live-Kurse verfügbar: echten LCI mit Wechselkurs berechnen
  // (konsistent mit der Panel-Berechnung)
  if (aktuelle_kurse && aktuelle_kurse[land.currency] && aktuelle_kurse['CHF']) {
    const budget      = 500; // Referenzbudget CHF
    // Budget in Lokalwährung umrechnen
    const budget_lokal = (budget / aktuelle_kurse['CHF']) * aktuelle_kurse[land.currency];
    const p_ziel = Math.floor(budget_lokal / land.dishes.classic.dishPrice);
    // Schweizer Referenz: Rösti CHF 18.5
    const p_heim = Math.floor(budget / 18.5);
    if (p_heim === 0) return 1;
    return p_ziel / p_heim;
  }
  // Fallback ohne Kurse: dishPriceCHF als Näherung
  const p_ziel = Math.floor(500 / land.dishes.classic.dishPriceCHF);
  const p_heim = Math.floor(500 / 18.5);
  if (p_heim === 0) return 1;
  return p_ziel / p_heim;
}

function lci_html(code) {
  const lci = berechne_lci_tabelle(code);
  let farbe = '';
  let label = '';
  if (lci >= 1.3)      { farbe = 'var(--forest)';  label = 'günstiger'; }
  else if (lci <= 0.77){ farbe = '#e57373';         label = 'teurer'; }
  else                 { farbe = 'var(--citrus)';   label = 'ähnlich'; }
  return `<div class="zelle-lci">
    <div class="lci-wert" style="color:${farbe}">${lci.toFixed(1)}×</div>
    <div class="lci-tag" style="color:${farbe}">${label}</div>
  </div>`;
}

// ─────────────────────────────────────────────────────────
//  ZEILEN RENDERN
// ─────────────────────────────────────────────────────────
function render_zeilen() {
  const liste = document.getElementById('preise-liste');
  const leer  = document.getElementById('preise-leer');
  const count = document.getElementById('preise-count');
  liste.innerHTML = '';

  const codes = gefilterte_codes();

  // Zähler aktualisieren
  const gesamt = Object.keys(COUNTRIES).length;
  if (count) {
    count.textContent = such_filter
      ? `${codes.length} von ${gesamt}`
      : `${gesamt} Länder`;
  }

  // Kein Ergebnis
  if (codes.length === 0) {
    if (leer) {
      leer.style.display = 'block';
      const term_el = document.getElementById('preise-leer-term');
      if (term_el) term_el.textContent = such_filter;
    }
    return;
  }
  if (leer) leer.style.display = 'none';

  codes.forEach(function(code) {
    const land = COUNTRIES[code];

    let kurs_text = '—';
    if (aktuelle_kurse && aktuelle_kurse[land.currency] && aktuelle_kurse['CHF']) {
      const kurs = aktuelle_kurse[land.currency] / aktuelle_kurse['CHF'];
      kurs_text  = `1 CHF = ${kurs >= 100 ? Math.round(kurs).toLocaleString('de-CH') : kurs.toFixed(4)} ${land.currency}`;
    }

    function gericht_html(dish) {
      let chf_sub = '';
      if (aktuelle_kurse && aktuelle_kurse[land.currency] && aktuelle_kurse['CHF']) {
        const chf_live = (dish.dishPrice / aktuelle_kurse[land.currency]) * aktuelle_kurse['CHF'];
        const chf_fmt  = chf_live < 10
          ? chf_live.toFixed(2)
          : chf_live.toFixed(1);
        chf_sub = `<span class="gericht-preis-chf">≈ CHF ${chf_fmt}</span>`;
      } else if (dish.dishPriceCHF) {
        chf_sub = `<span class="gericht-preis-chf">CHF ${dish.dishPriceCHF}</span>`;
      }
      return `
        <div class="zelle-gericht">
          <div class="gericht-name">${dish.emoji} ${dish.name}</div>
          <div class="gericht-preise">
            <span class="gericht-preis-lokal">${formatiere_lokal(dish.dishPrice, land.currency)}</span>
            ${chf_sub}
          </div>
        </div>
      `;
    }

    const zeile = document.createElement('div');
    zeile.className = 'preise-zeile';
    zeile.id        = `zeile-${code}`;
    zeile.innerHTML = `
      <div class="zelle-land">
        <span class="zelle-flag">${land.flag}</span>
        <div>
          <div class="zelle-name">${land.name}</div>
          <div class="zelle-waehrung">${land.continent} · ${land.currency}</div>
        </div>
      </div>
      ${gericht_html(land.dishes.premium)}
      ${gericht_html(land.dishes.classic)}
      ${gericht_html(land.dishes.budget)}
      ${lci_html(code)}
      <div class="zelle-kurs">
        <span class="live-dot"></span>
        <span>${kurs_text}</span>
      </div>
      <div class="zelle-aktion">
        <button class="btn-melden" data-code="${code}">✎ Preis melden</button>
      </div>
    `;
    liste.appendChild(zeile);
  });

  // Event Listener für Buttons
  liste.querySelectorAll('.btn-melden').forEach(function(button) {
    button.addEventListener('click', function() {
      toggle_formular(button.getAttribute('data-code'), button);
    });
  });
}

// ─────────────────────────────────────────────────────────
//  SUCHE
// ─────────────────────────────────────────────────────────
function setup_suche() {
  const suche = document.getElementById('land-suche');
  if (!suche) return;
  suche.addEventListener('input', function() {
    such_filter = suche.value.trim();
    schliesse_formular();
    render_zeilen();
  });
}

// ─────────────────────────────────────────────────────────
//  SORTIERUNG
// ─────────────────────────────────────────────────────────
function setup_sortierung() {
  document.querySelectorAll('.sortierbar').forEach(function(header) {
    header.addEventListener('click', function() {
      const spalte = header.getAttribute('data-sort');
      sort_dir     = (sort_spalte === spalte && sort_dir === 'asc') ? 'desc' : 'asc';
      sort_spalte  = spalte;
      document.querySelectorAll('.sortierbar').forEach(function(h) {
        h.classList.remove('aktiv');
        const icon = h.querySelector('.sort-icon');
        if (icon) icon.textContent = '↕';
      });
      header.classList.add('aktiv');
      const icon = header.querySelector('.sort-icon');
      if (icon) icon.textContent = sort_dir === 'asc' ? '↑' : '↓';
      schliesse_formular();
      render_zeilen();
    });
  });
}

// ─────────────────────────────────────────────────────────
//  FORMULAR
// ─────────────────────────────────────────────────────────
function toggle_formular(code, button) {
  const formular = document.getElementById('preise-formular');
  if (formular_land_code === code && formular.style.display !== 'none') {
    schliesse_formular(); return;
  }
  document.querySelectorAll('.btn-melden').forEach(function(btn) {
    btn.classList.remove('aktiv'); btn.textContent = '✎ Preis melden';
  });
  document.querySelectorAll('.preise-zeile').forEach(function(z) { z.classList.remove('aktiv'); });
  button.classList.add('aktiv'); button.textContent = '▲ Schliessen';
  const zeile = document.getElementById(`zeile-${code}`);
  if (zeile) zeile.classList.add('aktiv');
  formular_land_code = code;
  const land = COUNTRIES[code];
  document.getElementById('formular-titel').textContent =
    `Preiskorrektur vorschlagen — ${land.flag} ${land.name}`;
  const dropdown = document.getElementById('formular-gericht');
  dropdown.innerHTML = '<option value="">Gericht wählen…</option>';
  [
    { wert: 'premium', label: `💎 Premium — ${land.dishes.premium.name} (aktuell: ${formatiere_lokal(land.dishes.premium.dishPrice, land.currency)})` },
    { wert: 'classic', label: `🍽 Classic — ${land.dishes.classic.name} (aktuell: ${formatiere_lokal(land.dishes.classic.dishPrice, land.currency)})` },
    { wert: 'budget',  label: `🪙 Budget — ${land.dishes.budget.name} (aktuell: ${formatiere_lokal(land.dishes.budget.dishPrice, land.currency)})` }
  ].forEach(function(g) {
    const opt = document.createElement('option');
    opt.value = g.wert; opt.textContent = g.label;
    dropdown.appendChild(opt);
  });
  // Label und Placeholder auf Lokalwährung setzen
  document.getElementById('formular-preis-label').textContent = `NEUER PREIS (${land.currency})`;
  document.getElementById('formular-preis').placeholder = `z.B. ${land.dishes.classic.dishPrice}`;
  document.getElementById('formular-preis').value = '';
  // Placeholder beim Wechsel des Gerichts aktualisieren
  dropdown.onchange = function() {
    const g = this.value ? land.dishes[this.value] : null;
    document.getElementById('formular-preis').placeholder = g ? `z.B. ${g.dishPrice}` : 'Betrag…';
  };
  if (zeile) {
    zeile.after(formular);
    formular.style.display = 'block';
    formular.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function schliesse_formular() {
  document.getElementById('preise-formular').style.display = 'none';
  document.querySelectorAll('.btn-melden').forEach(function(btn) {
    btn.classList.remove('aktiv'); btn.textContent = '✎ Preis melden';
  });
  document.querySelectorAll('.preise-zeile').forEach(function(z) { z.classList.remove('aktiv'); });
  formular_land_code = null;
  document.getElementById('formular-gericht').value     = '';
  document.getElementById('formular-preis').value       = '';
  document.getElementById('formular-begruendung').value = '';
}

// ─────────────────────────────────────────────────────────
//  EMAIL
// ─────────────────────────────────────────────────────────
function sende_email() {
  if (!formular_land_code) return;
  const land         = COUNTRIES[formular_land_code];
  const gericht_wert = document.getElementById('formular-gericht').value;
  const neuer_preis  = document.getElementById('formular-preis').value;
  const begruendung  = document.getElementById('formular-begruendung').value;
  if (!gericht_wert) { alert('Bitte wähle ein Gericht aus.'); return; }
  if (!neuer_preis)  { alert('Bitte gib einen neuen Preis ein.'); return; }
  const gericht = land.dishes[gericht_wert];
  const betreff = `Preiskorrektur — ${land.name} / ${gericht.name}`;
  const inhalt  = [
    `Land: ${land.name} (${formular_land_code})`,
    `Gericht: ${gericht.name} (${gericht_wert})`,
    `Aktueller Lokalpreis: ${formatiere_lokal(gericht.dishPrice, land.currency)}`,
    `Vorgeschlagener neuer Lokalpreis: ${formatiere_lokal(parseFloat(neuer_preis), land.currency)}`,
    begruendung ? `Begründung: ${begruendung}` : '',
    '', '---', 'Gesendet via Currencity Preisindex'
  ].filter(function(z) { return z !== undefined; }).join('\n');
  window.location.href =
    `mailto:${KONTAKT_EMAIL}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(inhalt)}`;
}

// ─────────────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────────────
async function init_preise() {
  await baue_preistabelle();
  document.getElementById('formular-senden').addEventListener('click', sende_email);
  document.getElementById('formular-abbrechen').addEventListener('click', schliesse_formular);
}

init_preise();
