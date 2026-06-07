'use strict';

// ─────────────────────────────────────────────────────────
//  CURRENCITY — app.js
// ─────────────────────────────────────────────────────────

const SCHWEIZ_GERICHTE = {
  premium: { emoji: '🫕', name: 'Fondue (Restaurant)', desc: 'Klassischer Käsefondue im Restaurant, serviert mit Brot und Beilagen.', dishPriceCHF: 42 },
  classic: { emoji: '🥘', name: 'Rösti',               desc: 'Gebratene Kartoffeln, knusprig — das bekannteste Schweizer Alltagsgericht.', dishPriceCHF: 18.5 },
  budget:  { emoji: '🥐', name: 'Gipfeli',              desc: 'Schweizer Gipfeli vom Bäcker — das günstigste klassische Frühstück.', dishPriceCHF: 2.8 }
};

// ─────────────────────────────────────────────────────────
//  CURRENCY NAMEN (ausgeschrieben)
// ─────────────────────────────────────────────────────────
const CURRENCY_NAMES = {
  JPY:'Japanischer Yen', KRW:'Südkoreanischer Won', THB:'Thailändischer Baht',
  INR:'Indische Rupie', CNY:'Chinesischer Yuan', IDR:'Indonesische Rupiah',
  VND:'Vietnamesischer Dong', CHF:'Schweizer Franken', EUR:'Euro',
  GBP:'Britisches Pfund', DKK:'Dänische Krone', NOK:'Norwegische Krone',
  SEK:'Schwedische Krone', ISK:'Isländische Krone', TRY:'Türkische Lira',
  RUB:'Russischer Rubel', CAD:'Kanadischer Dollar', USD:'US-Dollar',
  MXN:'Mexikanischer Peso', CRC:'Costa-ricanischer Colón', COP:'Kolumbianischer Peso',
  BRL:'Brasilianischer Real', PEN:'Peruanischer Sol', CLP:'Chilenischer Peso',
  ARS:'Argentinischer Peso', EGP:'Ägyptisches Pfund', TND:'Tunesischer Dinar',
  DZD:'Algerischer Dinar', MAD:'Marokkanischer Dirham', XOF:'Westafrikanischer CFA-Franc',
  NGN:'Nigerianische Naira', ZAR:'Südafrikanischer Rand', MGA:'Madagassischer Ariary',
  SAR:'Saudi-Riyal', AUD:'Australischer Dollar', NZD:'Neuseeland-Dollar',
  SGD:'Singapur-Dollar', TWD:'Neuer Taiwan-Dollar', MYR:'Malaysischer Ringgit',
  KHR:'Kambodschanischer Riel', LKR:'Sri-lankische Rupie',
  AED:'Dirham (VAE)', ILS:'Israelischer Schekel', JOD:'Jordanischer Dinar',
  PLN:'Polnischer Zloty', CZK:'Tschechische Krone', HUF:'Ungarischer Forint',
  KES:'Kenianischer Schilling', GEL:'Georgischer Lari',
  PHP:'Philippinischer Peso', NPR:'Nepalesische Rupie', MNT:'Mongolischer Tögrög',
  MMK:'Myanmarischer Kyat', RON:'Rumänischer Leu', BGN:'Bulgarischer Lew',
  UAH:'Ukrainische Hrywnja', RSD:'Serbischer Dinar', ETB:'Äthiopischer Birr',
  TZS:'Tansanischer Schilling', GHS:'Ghanaischer Cedi', QAR:'Katarischer Riyal',
  IRR:'Iranischer Rial', CUP:'Kubanischer Peso', BOB:'Bolivianischer Boliviano',
  UYU:'Uruguayischer Peso',
  PKR:'Pakistanische Rupie', LAK:'Laotischer Kip', MVR:'Maledivische Rufiyaa',
  ALL:'Albanischer Lek', MDL:'Moldauischer Leu',
  DOP:'Dominikanischer Peso', JMD:'Jamaikanischer Dollar',
  PYG:'Paraguayischer Guaraní', VES:'Venezolanischer Bolívar',
  RWF:'Ruandischer Franc', NAD:'Namibischer Dollar', UGX:'Ugandischer Schilling',
  FJD:'Fidschianischer Dollar', XPF:'CFP-Franc (Pazifik)', PGK:'Papua-Neuguineanische Kina',
  HKD:'Hongkong-Dollar', MOP:'Macao-Pataca', BND:'Brunei-Dollar', BDT:'Bangladeschischer Taka',
  KWD:'Kuwaitischer Dinar', OMR:'Omanischer Rial', BHD:'Bahrainischer Dinar', IQD:'Irakischer Dinar',
  AZN:'Aserbaidschanischer Manat', AMD:'Armenischer Dram', KZT:'Kasachischer Tenge',
  UZS:'Usbekischer Sum', TJS:'Tadschikischer Somoni', TMT:'Turkmenischer Manat',
  GTQ:'Guatemaltekischer Quetzal', HNL:'Honduranische Lempira', NIO:'Nicaraguanischer Córdoba',
  TTD:'Trinidad-und-Tobago-Dollar', MUR:'Mauritische Rupie', SCR:'Seychellische Rupie',
  BWP:'Botswanischer Pula', ZMW:'Sambischer Kwacha', MZN:'Mosambikanischer Metical',
  LYD:'Libyscher Dinar', MKD:'Nordmazedonischer Denar', BAM:'Bosnisch-Herzegowinische Mark'
};

const COUNTRIES = {
  JP: { name: 'Japan', flag: '🇯🇵', currency: 'JPY', continent: 'Asien', geo: [138, 37, 4],
    dishes: {
      premium: { emoji: '🍣', name: 'Sushi Omakase',    desc: 'Mehrgängiges Sushi-Menü nach Wahl des Küchenchefs — das Nonplusultra der japanischen Küche.', dishPrice: 8000, dishPriceCHF: 49 },
      classic: { emoji: '🍜', name: 'Ramen Bowl',        desc: 'Reichhaltige Brühe mit Weizennudeln, Chashu-Schwein und gekochtem Ei — Japans beliebtestes Alltagsgericht.', dishPrice: 1500, dishPriceCHF: 9 },
      budget:  { emoji: '🐙', name: 'Takoyaki (6 Stk.)', desc: 'Krosse Teigkugeln mit Krake vom Strassenstand, mit Bonito-Flocken und Sosse garniert.', dishPrice: 800, dishPriceCHF: 5 } } },
  KR: { name: 'Südkorea', flag: '🇰🇷', currency: 'KRW', continent: 'Asien', geo: [127, 36, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Korean BBQ (Galbi)', desc: 'Marinierte Rindsrippchen, am Tisch selbst gegrillt — das gesellige Premium-Erlebnis.', dishPrice: 45000, dishPriceCHF: 46 },
      classic: { emoji: '🍲', name: 'Bibimbap',            desc: 'Schüssel mit Reis, buntem Gemüse, Ei und scharfer Gochujang-Paste — Koreas Nationalgericht.', dishPrice: 12000, dishPriceCHF: 13 },
      budget:  { emoji: '🍢', name: 'Tteokbokki',          desc: 'Würzige Reiskuchen in roter Chilisauce — beliebter Strassensnack.', dishPrice: 4000, dishPriceCHF: 4 } } },
  TH: { name: 'Thailand', flag: '🇹🇭', currency: 'THB', continent: 'Asien', geo: [101, 15, 4],
    dishes: {
      premium: { emoji: '🦐', name: 'Prawn Tom Yum',  desc: 'Scharfe, saure Suppe mit Garnelen, Galgant und Kaffernlimette — Bangkoks Restaurantklassiker.', dishPrice: 350, dishPriceCHF: 18 },
      classic: { emoji: '🍜', name: 'Pad Thai',        desc: 'Gebratene Reisnudeln mit Ei, Tamarinde, Erdnüssen und Limette — Thailands bekanntestes Gericht.', dishPrice: 80, dishPriceCHF: 21 },
      budget:  { emoji: '🥟', name: 'Frühlingsrolle',  desc: 'Knusprige, gefüllte Rolle aus Reisteig — überall vom Strassenstand erhältlich.', dishPrice: 25, dishPriceCHF: 3 } } },
  IN: { name: 'Indien', flag: '🇮🇳', currency: 'INR', continent: 'Asien', geo: [78, 22, 3],
    dishes: {
      premium: { emoji: '🍛', name: 'Butter Chicken',  desc: 'Zartes Hähnchen in samtig-cremiger Tomatensauce — Indiens bekanntestes Exportgericht.', dishPrice: 400, dishPriceCHF: 22 },
      classic: { emoji: '🥘', name: 'Thali',            desc: 'Tablett mit bis zu 10 Beilagen: Dal, Reis, Sabzi, Roti — das vollständige indische Mittagessen.', dishPrice: 200, dishPriceCHF: 23 },
      budget:  { emoji: '🥙', name: 'Samosa (2 Stk.)', desc: 'Frittierte Teigtaschen gefüllt mit Kartoffeln und Erbsen — Indiens beliebtester Strassensnack.', dishPrice: 30, dishPriceCHF: 4 } } },
  CN: { name: 'China', flag: '🇨🇳', currency: 'CNY', continent: 'Asien', geo: [104, 35, 3],
    dishes: {
      premium: { emoji: '🦆', name: 'Peking-Ente',      desc: 'Knusprige Ente mit hauchdünner Haut, serviert in Pfannkuchen mit Hoisin-Sauce — über 600 Jahre alt.', dishPrice: 200, dishPriceCHF: 45 },
      classic: { emoji: '🥟', name: 'Dim Sum (4 Stk.)', desc: 'Gedämpfte oder gebratene Teigtaschen mit verschiedenen Füllungen — Kantonesische Tradition.', dishPrice: 45, dishPriceCHF: 12 },
      budget:  { emoji: '🫔', name: 'Jianbing',          desc: 'Dünnes Crêpe aus Maismeig mit Ei, Sauce und knusprigem Waffelblatt — Chinas beliebtestes Strassenfrühstück.', dishPrice: 12, dishPriceCHF: 4 } } },
  ID: { name: 'Indonesien', flag: '🇮🇩', currency: 'IDR', continent: 'Asien', geo: [118, -2, 4],
    dishes: {
      premium: { emoji: '🦞', name: 'Lobster Bakar',      desc: 'Gegrillter Hummer mit Kokossauce und Gewürzen — Spezialität der Meeresfrüchte-Restaurants.', dishPrice: 350000, dishPriceCHF: 32 },
      classic: { emoji: '🍛', name: 'Nasi Goreng',         desc: 'Gebratener Reis mit Ei, Gemüse und Kecap Manis — Indonesiens Nationalgericht.', dishPrice: 45000, dishPriceCHF: 7 },
      budget:  { emoji: '🍢', name: 'Sate Ayam (5 Stk.)', desc: 'Gegrillte Hähnchenspiesse mit Erdnusssauce — der allgegenwärtige Strassensnack.', dishPrice: 15000, dishPriceCHF: 2 } } },
  VN: { name: 'Vietnam', flag: '🇻🇳', currency: 'VND', continent: 'Asien', geo: [108, 16, 4],
    dishes: {
      premium: { emoji: '🦐', name: 'Chả Cá Lã Vọng', desc: 'Gegrillter Fisch mit Dill und Frühlingszwiebeln — ein Hanoi-Klassiker seit über 150 Jahren.', dishPrice: 350000, dishPriceCHF: 20 },
      classic: { emoji: '🍜', name: 'Phở Bò',           desc: 'Klare Rindsbrühe mit Reisnudeln und frischen Kräutern — Vietnams kulturelle Seele in einer Schüssel.', dishPrice: 80000, dishPriceCHF: 6 },
      budget:  { emoji: '🥖', name: 'Bánh Mì',           desc: 'Vietnamesisches Sandwich im Baguette mit Paté, eingelegtem Gemüse und frischen Kräutern.', dishPrice: 25000, dishPriceCHF: 2 } } },
  CH: { name: 'Schweiz', flag: '🇨🇭', currency: 'CHF', continent: 'Europa', geo: [8, 47, 6],
    dishes: {
      premium: { emoji: '🫕', name: 'Fondue (Restaurant)', desc: 'Klassischer Käsefondue im Restaurant — das gesellige Schweizer Premium-Erlebnis.', dishPrice: 42, dishPriceCHF: 42 },
      classic: { emoji: '🥘', name: 'Rösti',               desc: 'Gebratene Kartoffeln, knusprig und goldbraun — das bekannteste Schweizer Alltagsgericht.', dishPrice: 18.5, dishPriceCHF: 18.5 },
      budget:  { emoji: '🥐', name: 'Gipfeli',              desc: 'Schweizer Gipfeli vom Bäcker — das günstigste klassische Frühstück der Eidgenossenschaft.', dishPrice: 2.8, dishPriceCHF: 2.8 } } },
  DE: { name: 'Deutschland', flag: '🇩🇪', currency: 'EUR', continent: 'Europa', geo: [10, 51, 5],
    dishes: {
      premium: { emoji: '🦆', name: 'Ente à l\'Orange',    desc: 'Gebratene Ente mit Orangensauce — das klassische gehobene deutsche Festessen.', dishPrice: 32, dishPriceCHF: 38 },
      classic: { emoji: '🌭', name: 'Currywurst & Pommes', desc: 'Gebratene Bratwurst mit Curryketchup und Pommes frites — Berlins kulinarisches Wahrzeichen.', dishPrice: 8, dishPriceCHF: 14 },
      budget:  { emoji: '🥨', name: 'Brezel',               desc: 'Laugenbrezel mit grobem Salz — das günstigste klassische deutsche Backwerk zum Unterwegs essen.', dishPrice: 2, dishPriceCHF: 4 } } },
  AT: { name: 'Österreich', flag: '🇦🇹', currency: 'EUR', continent: 'Europa', geo: [14, 47, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Tafelspitz',       desc: 'Gekochtes Rindfleisch in Rindsbouillon mit Rösti und Apfelkren — das Wiener Hochküchen-Klassiker.', dishPrice: 34, dishPriceCHF: 40 },
      classic: { emoji: '🍖', name: 'Wiener Schnitzel', desc: 'Dünnes, paniertes Kalbs- oder Schweineschnitzel — das wohl bekannteste österreichische Gericht.', dishPrice: 18, dishPriceCHF: 28 },
      budget:  { emoji: '🥐', name: 'Kipferl',           desc: 'Österreichisches Hörnchen aus Hefeteig — leichter und buttriger als ein Gipfeli.', dishPrice: 1.5, dishPriceCHF: 3 } } },
  FR: { name: 'Frankreich', flag: '🇫🇷', currency: 'EUR', continent: 'Europa', geo: [2, 46, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Entrecôte',       desc: 'Gegrilltes Rindsentrecôte mit Sauce Béarnaise — das klassische französische Bistro-Premium.', dishPrice: 38, dishPriceCHF: 52 },
      classic: { emoji: '🥪', name: 'Croque Monsieur', desc: 'Gegrilltes Schinken-Käse-Sandwich mit Béchamelsauce — das franzözische Bistro-Mittagessen.', dishPrice: 9, dishPriceCHF: 13 },
      budget:  { emoji: '🥖', name: 'Baguette',         desc: 'Frisches Baguette nature aus der Boulangerie — das tägliche Brot Frankreichs.', dishPrice: 1.3, dishPriceCHF: 3 } } },
  IT: { name: 'Italien', flag: '🇮🇹', currency: 'EUR', continent: 'Europa', geo: [12, 42, 5],
    dishes: {
      premium: { emoji: '🍝', name: 'Trüffel-Pasta',   desc: 'Hausgemachte Tagliatelle mit schwarzem Trüffel und Parmesan — Italiens Luxus-Klassiker.', dishPrice: 35, dishPriceCHF: 44 },
      classic: { emoji: '🍕', name: 'Margherita Pizza', desc: 'Neapolitanische Pizza mit San-Marzano-Tomaten, Mozzarella und Basilikum — 1889 kreiert.', dishPrice: 9, dishPriceCHF: 21 },
      budget:  { emoji: '☕', name: 'Espresso',          desc: 'Kleiner, starker Kaffee — in Italien an der Bar stehend getrunken, ein kulturelles Ritual.', dishPrice: 1.5, dishPriceCHF: 4 } } },
  ES: { name: 'Spanien', flag: '🇪🇸', currency: 'EUR', continent: 'Europa', geo: [-3, 40, 5],
    dishes: {
      premium: { emoji: '🥘', name: 'Paella Valenciana', desc: 'Safranreis mit Hühnchen, Kaninchen und grünen Bohnen — Spaniens kulinarisches Aushängeschild.', dishPrice: 28, dishPriceCHF: 36 },
      classic: { emoji: '🥘', name: 'Tortilla Española', desc: 'Dickes Kartoffel-Ei-Omelett — warm oder kalt, zu jeder Tageszeit in ganz Spanien.', dishPrice: 8, dishPriceCHF: 16 },
      budget:  { emoji: '🍢', name: 'Pintxos (3 Stk.)',  desc: 'Kleine baskische Häppchen auf Brot, oft mit Zahnstocher befestigt — Baskenland-Spezialität.', dishPrice: 4, dishPriceCHF: 8 } } },
  PT: { name: 'Portugal', flag: '🇵🇹', currency: 'EUR', continent: 'Europa', geo: [-8, 39, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Bacalhau à Brás', desc: 'Zerzupfter Kabeljau mit Ei, Kartoffelstroh und Oliven — eines von Portugals 365 Stockfischrezepten.', dishPrice: 22, dishPriceCHF: 30 },
      classic: { emoji: '🍗', name: 'Frango Assado',    desc: 'Gegrilltes Hähnchen mit Piri-Piri-Sauce — das portugiesische Alltagsgericht schlechthin.', dishPrice: 10, dishPriceCHF: 18 },
      budget:  { emoji: '🥐', name: 'Pastel de Nata',   desc: 'Cremige Puddingtörtchen aus Blätterteig — Lissabons kulinarische Ikone seit dem 18. Jahrhundert.', dishPrice: 1.2, dishPriceCHF: 3 } } },
  GB: { name: 'England', flag: '🇬🇧', currency: 'GBP', continent: 'Europa', geo: [-2, 52, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Beef Wellington', desc: 'Rindsfilet in Blätterteig eingebacken, mit Duxelles — Englands klassisches Festessen.', dishPrice: 45, dishPriceCHF: 68 },
      classic: { emoji: '🐟', name: 'Fish & Chips',    desc: 'Frittierter Kabeljau mit Pommes frites und Erbsenpüree — Englands Nationalessen seit dem 19. Jh.', dishPrice: 12, dishPriceCHF: 20 },
      budget:  { emoji: '🥪', name: 'Meal Deal',        desc: 'Sandwich, Snack und Getränk als Kombination — das britische Mittags-Budget-Konzept.', dishPrice: 4, dishPriceCHF: 7 } } },
  BE: { name: 'Belgien', flag: '🇧🇪', currency: 'EUR', continent: 'Europa', geo: [4, 50, 6],
    dishes: {
      premium: { emoji: '🦪', name: 'Moules-Frites',   desc: 'Miesmuscheln in Weisswein-Sahnesauce mit handgeschnittenen Pommes frites — Belgiens Nationalgericht.', dishPrice: 28, dishPriceCHF: 34 },
      classic: { emoji: '🍟', name: 'Frittes & Sauce',  desc: 'Belgische Pommes frites, doppelt frittiert, mit Mayonnaise — die Erfinder der echten Fritten.', dishPrice: 6, dishPriceCHF: 10 },
      budget:  { emoji: '🍫', name: 'Praline (3 Stk.)', desc: 'Handgemachte Schokoladenpralinen — Belgien produziert über 220.000 Tonnen Schokolade pro Jahr.', dishPrice: 3, dishPriceCHF: 5 } } },
  NL: { name: 'Niederlande', flag: '🇳🇱', currency: 'EUR', continent: 'Europa', geo: [5, 52, 6],
    dishes: {
      premium: { emoji: '🦪', name: 'Zeeuwse Oesters', desc: 'Frische Austern aus Zeeland — die niederländische Delikatesse schlechthin.', dishPrice: 32, dishPriceCHF: 38 },
      classic: { emoji: '🥘', name: 'Stamppot',          desc: 'Stampfkartoffeln mit Grünkohl oder Möhren, serviert mit Rookworst-Wurst — das holländische Wintergericht.', dishPrice: 12, dishPriceCHF: 18 },
      budget:  { emoji: '🐟', name: 'Haring',            desc: 'Roher gesalzener Hering, gegessen mit Zwiebeln und Essiggurken — Hollands günstigstes Strassengericht.', dishPrice: 3.5, dishPriceCHF: 5 } } },
  DK: { name: 'Dänemark', flag: '🇩🇰', currency: 'DKK', continent: 'Europa', geo: [10, 56, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Smørrebrød Laks', desc: 'Offenes Schwarzbrot-Sandwich mit Räucherlachs und Garnelen — Dänemarks kulinarische Hochkunst.', dishPrice: 220, dishPriceCHF: 42 },
      classic: { emoji: '🥩', name: 'Frikadeller',      desc: 'Dänische Fleischklopse aus Schweine- und Kalbshack mit Rotkohl — das dänische Hausessen.', dishPrice: 120, dishPriceCHF: 28 },
      budget:  { emoji: '🥐', name: 'Wienerbrød',        desc: 'Dänisches Gebäck aus Plunderteig — was wir "Dänisches Plundergebäck" nennen, kommt aus Dänemark.', dishPrice: 30, dishPriceCHF: 6 } } },
  NO: { name: 'Norwegen', flag: '🇳🇴', currency: 'NOK', continent: 'Europa', geo: [10, 64, 4],
    dishes: {
      premium: { emoji: '🐟', name: 'Lachs Smørbrød', desc: 'Offenes Brot mit Räucherlachs und Sauerrahm — Norwegen produziert 60% des weltweiten Atlantiklachses.', dishPrice: 220, dishPriceCHF: 55 },
      classic: { emoji: '🥩', name: 'Kjøttkaker',      desc: 'Norwegische Fleischklösschen in brauner Sauce mit Erbsen — das tägliche Familienessen.', dishPrice: 145, dishPriceCHF: 36 },
      budget:  { emoji: '🌭', name: 'Pølse (Hotdog)',  desc: 'Norwegischer Hotdog mit allem drauf — wird aus dem Kiosk oder Tankstelle geordert, überall erhältlich.', dishPrice: 35, dishPriceCHF: 9 } } },
  SE: { name: 'Schweden', flag: '🇸🇪', currency: 'SEK', continent: 'Europa', geo: [17, 62, 4],
    dishes: {
      premium: { emoji: '🦐', name: 'Kräftor-Buffet', desc: 'Tafelrunde mit Flusskrebsen, gefeiert beim traditionellen Kräftskiva-Fest im August.', dishPrice: 380, dishPriceCHF: 48 },
      classic: { emoji: '🥩', name: 'Köttbullar',      desc: 'Kleine Fleischbällchen aus Schweine- und Rindshack mit Preiselbeeren und Kartoffeln.', dishPrice: 120, dishPriceCHF: 18 },
      budget:  { emoji: '🥐', name: 'Kanelbulle',       desc: 'Süsses Zimtschneckchen — Schweden hat sogar einen eigenen nationalen Kanelbulle-Tag (4. Oktober).', dishPrice: 35, dishPriceCHF: 5 } } },
  FI: { name: 'Finnland', flag: '🇫🇮', currency: 'EUR', continent: 'Europa', geo: [26, 64, 4],
    dishes: {
      premium: { emoji: '🦌', name: 'Rentier-Filet', desc: 'Zartes Rentierfilet aus Lappland, geschmort oder gebraten — das finnische Luxusgericht.', dishPrice: 42, dishPriceCHF: 52 },
      classic: { emoji: '🐟', name: 'Lohikeitto',     desc: 'Cremige Lachssuppe mit Kartoffeln, Lauch und Dill — Finnlands beliebtester Eintopf.', dishPrice: 14, dishPriceCHF: 20 },
      budget:  { emoji: '🥐', name: 'Korvapuusti',    desc: 'Finnisches Zimtschneckchen mit Kardamom — etwas rustikaler als der schwedische Kanelbulle.', dishPrice: 3, dishPriceCHF: 5 } } },
  IS: { name: 'Island', flag: '🇮🇸', currency: 'ISK', continent: 'Europa', geo: [-19, 65, 5],
    dishes: {
      premium: { emoji: '🦞', name: 'Humarsúpa',     desc: 'Cremige Hummerbisque aus frischen isländischen Hummern — die teuerste Spezialität der Insel.', dishPrice: 4500, dishPriceCHF: 42 },
      classic: { emoji: '🐟', name: 'Plokkfiskur',    desc: 'Eintopf aus zerzupftem Kabeljau mit Kartoffeln und Béchamelsauce — Islands Comfort-Food.', dishPrice: 2800, dishPriceCHF: 28 },
      budget:  { emoji: '🌭', name: 'Pylsa (Hotdog)', desc: 'Isländischer Hotdog mit Remoulade und rohen Zwiebeln — selbst US-Präsident Clinton aß hier einen.', dishPrice: 650, dishPriceCHF: 8 } } },
  GR: { name: 'Griechenland', flag: '🇬🇷', currency: 'EUR', continent: 'Europa', geo: [22, 39, 5],
    dishes: {
      premium: { emoji: '🐙', name: 'Gegrillter Oktopus', desc: 'Langsam getrockneter und dann gegrillter Oktopus mit Olivenöl und Zitrone — griechische Meeresfrüchte-Spezialität.', dishPrice: 28, dishPriceCHF: 34 },
      classic: { emoji: '🫕', name: 'Moussaka',            desc: 'Auflauf mit Auberginen, Hackfleisch und Béchamelsauce — Griechenlands Nationalgericht.', dishPrice: 12, dishPriceCHF: 18 },
      budget:  { emoji: '🥙', name: 'Gyros Pita',          desc: 'Drehspiess-Fleisch im Fladenbrot mit Tzatziki und Tomaten — Griechenlands Strassenfood Nr. 1.', dishPrice: 3, dishPriceCHF: 6 } } },
  HR: { name: 'Kroatien', flag: '🇭🇷', currency: 'EUR', continent: 'Europa', geo: [16, 45, 5],
    dishes: {
      premium: { emoji: '🦞', name: 'Hummer-Risotto', desc: 'Cremiges Risotto mit frischem Adriatischen Hummer — Dalmatiens Meeresfrüchte-Luxus.', dishPrice: 35, dishPriceCHF: 42 },
      classic: { emoji: '🥩', name: 'Ćevapčići',      desc: 'Gegrillte gewürzte Fleischwürstchen serviert mit Ajvar und Zwiebeln — Balkan-Klassiker.', dishPrice: 10, dishPriceCHF: 16 },
      budget:  { emoji: '🫓', name: 'Burek',            desc: 'Blätterteig-Pastete mit Fleisch- oder Käsefüllung — das günstigste Frühstück auf dem Balkan.', dishPrice: 2, dishPriceCHF: 4 } } },
  TR: { name: 'Türkei', flag: '🇹🇷', currency: 'TRY', continent: 'Asien / Europa', geo: [35, 39, 4],
    dishes: {
      premium: { emoji: '🐑', name: 'Kuzu Tandır', desc: 'Im Lehmofen langsam geschmorte Lammkeule bis das Fleisch vom Knochen fällt — türkische Festspeise.', dishPrice: 450, dishPriceCHF: 28 },
      classic: { emoji: '🌯', name: 'Döner Kebab',  desc: 'Würziges Fleisch vom Vertikaldrehspiess im Fladenbrot — in der Türkei ein Bruchteil des deutschen Preises.', dishPrice: 160, dishPriceCHF: 13 },
      budget:  { emoji: '🥨', name: 'Simit',         desc: 'Kringsförmiges Sesamkranzgebäck — Istanbuls Strassenfrühstück, wird von Händlern auf dem Kopf getragen.', dishPrice: 15, dishPriceCHF: 2 } } },
  RU: { name: 'Russland', flag: '🇷🇺', currency: 'RUB', continent: 'Europa / Asien', geo: [60, 60, 3],
    dishes: {
      premium: { emoji: '🐟', name: 'Beluga-Kaviar',     desc: 'Eier des Beluga-Störs — das teuerste Nahrungsmittel der Welt, in Russland noch erschwinglich.', dishPrice: 3500, dishPriceCHF: 55 },
      classic: { emoji: '🍲', name: 'Borscht & Brot',    desc: 'Saure Rote-Beete-Suppe mit Sauerrahm und dunklem Brot — die Seele der russischen Küche.', dishPrice: 350, dishPriceCHF: 8 },
      budget:  { emoji: '🥟', name: 'Pelmeni (10 Stk.)', desc: 'Kleine gefüllte Teigtaschen mit Fleisch — Sibiriens Überlebensessen und heute überall beliebt.', dishPrice: 200, dishPriceCHF: 5 } } },
  CA: { name: 'Kanada', flag: '🇨🇦', currency: 'CAD', continent: 'Nordamerika', geo: [-96, 60, 3],
    dishes: {
      premium: { emoji: '🦞', name: 'Homard du Québec', desc: 'Atlantischer Hummer aus dem Golf von St. Lawrence — Québecs Meeresfrüchte-Stolz.', dishPrice: 65, dishPriceCHF: 58 },
      classic: { emoji: '🍟', name: 'Poutine',           desc: 'Pommes frites mit Käsekrümeln und Bratensosse — Québecs Exporterfolg in die Welt.', dishPrice: 14, dishPriceCHF: 14 },
      budget:  { emoji: '🥞', name: 'Maple Pancakes',    desc: 'Dicke Pfannkuchen mit echtem Ahornsirup — Kanada produziert 70% des weltweiten Ahornsirups.', dishPrice: 6, dishPriceCHF: 6 } } },
  US: { name: 'USA', flag: '🇺🇸', currency: 'USD', continent: 'Nordamerika', geo: [-98, 38, 3],
    dishes: {
      premium: { emoji: '🦞', name: 'Lobster Roll', desc: 'Hummerschwanz im gebutterten Hotdog-Brötchen — New Englands kulinarisches Aushängeschild.', dishPrice: 38, dishPriceCHF: 48 },
      classic: { emoji: '🍔', name: 'Smash Burger',  desc: 'Rindspattie auf der heissen Platte zerdrückt — die karamellisierte Kruste macht den Unterschied.', dishPrice: 15, dishPriceCHF: 20 },
      budget:  { emoji: '🌮', name: 'Street Taco',   desc: 'Kleiner Mais-Taco mit Salsa, Koriander und Zwiebeln — das günstigste Strassenfood der USA.', dishPrice: 4, dishPriceCHF: 6 } } },
  MX: { name: 'Mexiko', flag: '🇲🇽', currency: 'MXN', continent: 'Mittelamerika', geo: [-102, 24, 4],
    dishes: {
      premium: { emoji: '🦑', name: 'Mariscos Tostada', desc: 'Knusprige Tortilla mit Meeresfrüchten, Avocado und Limettensauce — mexikanische Küstenküche.', dishPrice: 250, dishPriceCHF: 22 },
      classic: { emoji: '🌮', name: 'Tacos al Pastor',   desc: 'Mariniertes Schweinefleisch vom Spiess mit Ananas und Koriander — ursprünglich aus dem Libanon.', dishPrice: 75, dishPriceCHF: 16 },
      budget:  { emoji: '🫔', name: 'Tamale',             desc: 'Maismeigteig mit Füllung in Maisblatt gedämpft — aztekisches Essen seit über 8000 Jahren.', dishPrice: 20, dishPriceCHF: 4 } } },
  CR: { name: 'Costa Rica', flag: '🇨🇷', currency: 'CRC', continent: 'Mittelamerika', geo: [-84, 10, 6],
    dishes: {
      premium: { emoji: '🦞', name: 'Langosta Entera', desc: 'Ganzer gegrillter Hummer von der Karibik-Küste — Costa Ricas Meeresfrüchte-Luxus.', dishPrice: 18000, dishPriceCHF: 42 },
      classic: { emoji: '🍚', name: 'Casado',           desc: 'Reisgericht mit Bohnen, Fleisch, Salat und Reisfritters — das tägliche Mittagessen Costa Ricas.', dishPrice: 4500, dishPriceCHF: 12 },
      budget:  { emoji: '🌽', name: 'Gallo Pinto',      desc: 'Gebratener Reis mit schwarzen Bohnen — das Frühstück Costa Ricas, morgens, mittags, abends.', dishPrice: 1500, dishPriceCHF: 4 } } },
  CO: { name: 'Kolumbien', flag: '🇨🇴', currency: 'COP', continent: 'Südamerika', geo: [-74, 4, 4],
    dishes: {
      premium: { emoji: '🦞', name: 'Langostinos al Ajillo', desc: 'Riesengarnelen in Knoblauch-Butter — Kolumbiens Karibikküste ist berühmt für Meeresfrüchte.', dishPrice: 85000, dishPriceCHF: 32 },
      classic: { emoji: '🍲', name: 'Bandeja Paisa',           desc: 'Riesenteller mit Bohnen, Reis, Fleisch, Ei, Chicharrón und Arepa — Kolumbiens Nationalgericht.', dishPrice: 25000, dishPriceCHF: 12 },
      budget:  { emoji: '🫓', name: 'Arepa con Queso',         desc: 'Gegrillte Maisfladen mit weissem Käse — überall in Kolumbien, zu jeder Tageszeit.', dishPrice: 5000, dishPriceCHF: 3 } } },
  BR: { name: 'Brasilien', flag: '🇧🇷', currency: 'BRL', continent: 'Südamerika', geo: [-52, -14, 3],
    dishes: {
      premium: { emoji: '🥩', name: 'Churrasco Gaúcho', desc: 'Endloser Grillspiess-Service im Churrascaria — riesige Fleischmengen direkt am Tisch aufgeschnitten.', dishPrice: 120, dishPriceCHF: 32 },
      classic: { emoji: '🍲', name: 'Feijoada',          desc: 'Schwarze Bohnen mit verschiedenen Schweinefleischstücken und Orangenscheiben — Brasiliens Seelengericht.', dishPrice: 45, dishPriceCHF: 16 },
      budget:  { emoji: '🥐', name: 'Pão de Queijo',     desc: 'Kleine Käsebrötchen aus Tapiokamehl — crispy aussen, zähig innen, überall in Brasilien.', dishPrice: 8, dishPriceCHF: 4 } } },
  PE: { name: 'Peru', flag: '🇵🇪', currency: 'PEN', continent: 'Südamerika', geo: [-76, -10, 4],
    dishes: {
      premium: { emoji: '🐟', name: 'Ceviche Mixto', desc: 'Frischer Fisch und Meeresfrüchte in Limettensaft mariniert mit Chili — Lima gilt als Gastronomiemetropole Südamerikas.', dishPrice: 65, dishPriceCHF: 28 },
      classic: { emoji: '🥩', name: 'Lomo Saltado',   desc: 'Rindfleisch-Stir-Fry mit Tomaten, Zwiebeln und Pommes — die peruanische Fusion mit chinesischen Einflüssen.', dishPrice: 35, dishPriceCHF: 16 },
      budget:  { emoji: '🍢', name: 'Anticuchos',     desc: 'Gegrillte Rinderherz-Spiesse mit Ají-Sauce — uraltes Andengericht, heute überall Strassenfood.', dishPrice: 8, dishPriceCHF: 4 } } },
  CL: { name: 'Chile', flag: '🇨🇱', currency: 'CLP', continent: 'Südamerika', geo: [-71, -35, 4],
    dishes: {
      premium: { emoji: '🦞', name: 'Centolla',          desc: 'Patagonische Königskrabbe — Chiles Meeresfrüchte-Luxus aus dem eiskalten Südatlantik.', dishPrice: 28000, dishPriceCHF: 38 },
      classic: { emoji: '🫕', name: 'Pastel de Choclo',  desc: 'Auflauf aus Maisbrei mit Hackfleisch, Zwiebeln, Rosinen und Ei — Chiles Comfort-Food.', dishPrice: 7000, dishPriceCHF: 14 },
      budget:  { emoji: '🌭', name: 'Completo',           desc: 'Chilenischer Hotdog mit Avocado, Sauerkraut und Mayonnaise — grosszügiger als jeder andere Hotdog.', dishPrice: 2000, dishPriceCHF: 4 } } },
  AR: { name: 'Argentinien', flag: '🇦🇷', currency: 'ARS', continent: 'Südamerika', geo: [-64, -34, 3],
    dishes: {
      premium: { emoji: '🥩', name: 'Bife de Chorizo',    desc: 'Saftiges Rindssteak aus der Lende — argentinisches Rindfleisch gilt weltweit als das beste.', dishPrice: 8500, dishPriceCHF: 28 },
      classic: { emoji: '🥟', name: 'Empanadas (3 Stk.)', desc: 'Gefüllte Teigtaschen mit Rindshack, Oliven und Ei — jede argentinische Provinz hat ihr Rezept.', dishPrice: 2500, dishPriceCHF: 10 },
      budget:  { emoji: '🌭', name: 'Choripán',            desc: 'Chorizo-Wurst im knusprigen Brot — das beliebteste Strassenfood Argentiniens.', dishPrice: 800, dishPriceCHF: 4 } } },
  EG: { name: 'Ägypten', flag: '🇪🇬', currency: 'EGP', continent: 'Afrika', geo: [30, 27, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Hamour Masguf',   desc: 'Gegrillter Zackenbarsch mit Gewürzen — Ägyptens Meeresfrüchte-Delikatesse an der Küste.', dishPrice: 450, dishPriceCHF: 18 },
      classic: { emoji: '🫘', name: 'Koshari',           desc: 'Schichtgericht aus Linsen, Reis, Nudeln und scharfer Tomatensauce — Kairos günstiges Nationalgericht.', dishPrice: 80, dishPriceCHF: 5 },
      budget:  { emoji: '🥙', name: 'Falafel Sandwich', desc: 'Knusprige Kichererbsenbällchen im Fladenbrot mit Tahini und Salat — das günstigste Essen Ägyptens.', dishPrice: 20, dishPriceCHF: 1 } } },
  TN: { name: 'Tunesien', flag: '🇹🇳', currency: 'TND', continent: 'Afrika', geo: [9, 34, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Poisson Tunisien', desc: 'Frischer Mittelmeerfisch mit Harissa-Kruste — tunesische Fischrestaurants direkt am Hafen.', dishPrice: 45, dishPriceCHF: 22 },
      classic: { emoji: '🥘', name: 'Couscous Tunisien', desc: 'Dampfgarer Gries mit Lamm, Gemüse und scharfer Brühe — das Freitagsgericht tunesischer Familien.', dishPrice: 18, dishPriceCHF: 11 },
      budget:  { emoji: '🥙', name: 'Fricassé',           desc: 'Kleines frittiertes Sandwich mit Thunfisch, Ei und Harissa — Tunesiens beliebtester Strassensnack.', dishPrice: 3, dishPriceCHF: 2 } } },
  DZ: { name: 'Algerien', flag: '🇩🇿', currency: 'DZD', continent: 'Afrika', geo: [3, 28, 4],
    dishes: {
      premium: { emoji: '🐑', name: 'Méchoui (Lamm)',   desc: 'Ganzes Lamm im Erdofen oder Spiess langsam gegart — das Festessen zu jedem algerischen Anlass.', dishPrice: 3500, dishPriceCHF: 30 },
      classic: { emoji: '🫕', name: 'Couscous Algérien', desc: 'Algerischer Couscous mit sieben Gemüsen und Hammel — jede Region hat ihre eigene Variante.', dishPrice: 800, dishPriceCHF: 8 },
      budget:  { emoji: '🫓', name: 'Msemen',             desc: 'Quadratisches, schichtiges Fladenbrot aus Hartweizengrieß — zum Frühstück mit Honig oder Argan-Öl.', dishPrice: 50, dishPriceCHF: 1 } } },
  MA: { name: 'Marokko', flag: '🇲🇦', currency: 'MAD', continent: 'Afrika', geo: [-6, 32, 5],
    dishes: {
      premium: { emoji: '🐑', name: 'Lamm-Tajine', desc: 'Geschmortes Lamm mit Salzzitronen und Oliven im Kegelgefäss — Marokkos Signature-Gericht.', dishPrice: 80, dishPriceCHF: 27 },
      classic: { emoji: '🫕', name: 'Couscous',     desc: 'Freitagstradition: gedämpfter Hartweizengrieß mit Gemüse und Fleisch — das Nationalgericht Marokkos.', dishPrice: 50, dishPriceCHF: 18 },
      budget:  { emoji: '🫓', name: 'Msemen',        desc: 'Blättriges Fladenbrot vom Strassenstand — zum Frühstück mit Argan-Honig oder als Sandwich.', dishPrice: 5, dishPriceCHF: 3 } } },
  SN: { name: 'Senegal', flag: '🇸🇳', currency: 'XOF', continent: 'Afrika', geo: [-14, 14, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Thiéboudienne', desc: 'Fisch mit Gemüse auf gebräuntem Reis — Senegals Nationalgericht und UNESCO-Kulturerbe.', dishPrice: 8000, dishPriceCHF: 20 },
      classic: { emoji: '🍗', name: 'Poulet Yassa',   desc: 'Hühnchen in Zwiebel-Limetten-Marinade geschmort — eines der bekanntesten westafrikanischen Gerichte.', dishPrice: 4000, dishPriceCHF: 12 },
      budget:  { emoji: '🥜', name: 'Thiakry',         desc: 'Joghurt-Dessert mit Hirse und Kokosnuss — süss und erfrischend, der günstige Strassennachspeise.', dishPrice: 500, dishPriceCHF: 2 } } },
  NG: { name: 'Nigeria', flag: '🇳🇬', currency: 'NGN', continent: 'Afrika', geo: [8, 9, 5],
    dishes: {
      premium: { emoji: '🐐', name: 'Suya-Platte',           desc: 'Gegrillte Fleischspiesse mit Yaji-Gewürzmischung aus Erdnüssen und Chili — Nordnigerianische Spezialität.', dishPrice: 8000, dishPriceCHF: 18 },
      classic: { emoji: '🍲', name: 'Jollof Rice & Chicken', desc: 'Tomatisierter Reis mit Hühnchen — Westafrikas meistdiskutiertes Gericht (Nigeria vs. Ghana).', dishPrice: 3500, dishPriceCHF: 10 },
      budget:  { emoji: '🫘', name: 'Moi Moi',                desc: 'Gedämpfter Bohnenauflauf mit Ei und Fisch — günstiger, eiweissreicher Strassensnack.', dishPrice: 800, dishPriceCHF: 3 } } },
  ZA: { name: 'Südafrika', flag: '🇿🇦', currency: 'ZAR', continent: 'Afrika', geo: [25, -29, 4],
    dishes: {
      premium: { emoji: '🥩', name: 'Braai-Steak', desc: 'Auf Holzkohle gegrilltes Rindssteak — in Südafrika ist das Braai (Grillieren) eine religiöse Erfahrung.', dishPrice: 180, dishPriceCHF: 24 },
      classic: { emoji: '🍞', name: 'Bunny Chow',  desc: 'Ausgehöhltes Weissbrot gefüllt mit Curry — 1940 in Durban erfunden, heute ganz Südafrika.', dishPrice: 80, dishPriceCHF: 18 },
      budget:  { emoji: '🌽', name: 'Mieliepap',   desc: 'Maisbrei (Ugali) mit Chakalaka-Gemüserelish — das günstigste und sättigendste Essen Südafrikas.', dishPrice: 25, dishPriceCHF: 5 } } },
  MG: { name: 'Madagaskar', flag: '🇲🇬', currency: 'MGA', continent: 'Afrika', geo: [47, -20, 5],
    dishes: {
      premium: { emoji: '🦐', name: 'Crevettes Géantes',    desc: 'Riesengarnelen vom Indischen Ozean, gegrillt mit Vanillesauce — Madagaskar exportiert Vanille und Garnelen.', dishPrice: 45000, dishPriceCHF: 14 },
      classic: { emoji: '🍛', name: 'Romazava',               desc: 'Eintopf mit Rindfleisch und Bibasy-Kräutern — das Nationalgericht Madagaskars.', dishPrice: 15000, dishPriceCHF: 6 },
      budget:  { emoji: '🌾', name: 'Vary Sosoa (Reis)',       desc: 'Wässriger Reisbrei — Madagaskars tägliches Budget-Essen, oft dreimal täglich gegessen.', dishPrice: 2000, dishPriceCHF: 1 } } },
  SA: { name: 'Saudi-Arabien', flag: '🇸🇦', currency: 'SAR', continent: 'Naher Osten', geo: [45, 24, 4],
    dishes: {
      premium: { emoji: '🐑', name: 'Kabsa',    desc: 'Duftender Basmatireis mit Lamm, Tomaten und Golf-Gewürzmischung Baharat — das Nationalgericht.', dishPrice: 60, dishPriceCHF: 30 },
      classic: { emoji: '🥙', name: 'Shawarma', desc: 'Würziges Geflügel- oder Rindfleisch vom Spiess im Fladenbrot mit Tahini und Gurke.', dishPrice: 25, dishPriceCHF: 12 },
      budget:  { emoji: '🧆', name: 'Falafel',  desc: 'Knusprige Kichererbsenbällchen im Pita-Brot — günstig, nahrhaft und überall verfügbar.', dishPrice: 8, dishPriceCHF: 6 } } },
  AU: { name: 'Australien', flag: '🇦🇺', currency: 'AUD', continent: 'Ozeanien', geo: [134, -26, 3],
    dishes: {
      premium: { emoji: '🦘', name: 'Känguru-Filet', desc: 'Mageres, zartes Kängurufleisch — eines der nachhaltigsten roten Fleischarten der Welt.', dishPrice: 40, dishPriceCHF: 42 },
      classic: { emoji: '🥑', name: 'Avocado Toast',  desc: 'Sauerteigbrot mit Avocado, Feta und pochiertem Ei — das australische Brunch-Phänomen, das Millenials arm macht.', dishPrice: 18, dishPriceCHF: 22 },
      budget:  { emoji: '☕', name: 'Flat White',      desc: 'Cremiger Espresso-Milchkaffee — in Australien erfunden, von Starbucks in die Welt gebracht.', dishPrice: 5, dishPriceCHF: 5 } } },
  NZ: { name: 'Neuseeland', flag: '🇳🇿', currency: 'NZD', continent: 'Ozeanien', geo: [172, -42, 5],
    dishes: {
      premium: { emoji: '🦞', name: 'Crayfish (Krebse)', desc: 'Frischer Taschenkrebs aus dem Pazifik — Neuseelands Meeresfrüchte-Luxus aus kristallklarem Wasser.', dishPrice: 85, dishPriceCHF: 64 },
      classic: { emoji: '🥧', name: 'Meat Pie',           desc: 'Herzhafte Fleischpastete — Neuseelands beliebtestes Mittagessen, gibt es an jeder Ecke.', dishPrice: 8, dishPriceCHF: 7 },
      budget:  { emoji: '🍟', name: 'Fish & Chips',       desc: 'Frittierter Fisch mit Pommes — in Neuseeland oft am Strand gegessen, eingewickelt in Zeitungspapier.', dishPrice: 5, dishPriceCHF: 4 } } },

  // ── NEUE LÄNDER ──────────────────────────────────────
  SG: { name: 'Singapur', flag: '🇸🇬', currency: 'SGD', continent: 'Asien', geo: [103, 1, 8],
    dishes: {
      premium: { emoji: '🦀', name: 'Chilli Crab',        desc: 'Ganze Krabbe in würziger Chilli-Tomatensauce — Singapurs nationaler Stolz, einst vom CNN zum besten Essen der Welt gewählt.', dishPrice: 120, dishPriceCHF: 110 },
      classic: { emoji: '🍗', name: 'Hainanese Chicken',  desc: 'Zartes Pochiertes Hähnchen auf duftendem Reis mit Ingwer und Chilisauce — Singapurs Nationalgericht seit Generationen.', dishPrice: 8, dishPriceCHF: 7 },
      budget:  { emoji: '🍜', name: 'Laksa',               desc: 'Scharfe Kokos-Curry-Suppe mit Reisnudeln — typisches Hawker-Centre-Gericht für unter 5 SGD.', dishPrice: 5, dishPriceCHF: 5 } } },
  TW: { name: 'Taiwan', flag: '🇹🇼', currency: 'TWD', continent: 'Asien', geo: [121, 24, 6],
    dishes: {
      premium: { emoji: '🦀', name: 'Hairy Crab Menü',    desc: 'Saisondampfkrabbe mit Ingwer-Reiswein — in Taiwan nur im Herbst erhältlich, gilt als Delikatesse.', dishPrice: 1800, dishPriceCHF: 72 },
      classic: { emoji: '🍜', name: 'Beef Noodle Soup',   desc: 'Langsam geschmortes Rindfleisch in würziger Brühe mit dicken Weizennudeln — Taiwans inoffzielles Nationalgericht.', dishPrice: 180, dishPriceCHF: 7 },
      budget:  { emoji: '🫓', name: 'Scallion Pancake',   desc: 'Knuspriger Lauch-Pfannkuchen vom Strassenstand — frühmorgens an jeder Ecke Taipei für unter 2 CHF.', dishPrice: 35, dishPriceCHF: 1.5 } } },
  MY: { name: 'Malaysia', flag: '🇲🇾', currency: 'MYR', continent: 'Asien', geo: [110, 4, 5],
    dishes: {
      premium: { emoji: '🦐', name: 'Butter Prawn',        desc: 'Riesige Riesengarnelen in schaumiger Buttersauce mit Curryleaves — Malaysias Meeresfrüchte-Signature.', dishPrice: 60, dishPriceCHF: 17 },
      classic: { emoji: '🍛', name: 'Nasi Lemak',           desc: 'Kokosreis mit Sambal, Sardellen, Erdnüssen und Ei — Malaysias Frühstücksgericht und Nationalgericht zugleich.', dishPrice: 8, dishPriceCHF: 2 },
      budget:  { emoji: '🫓', name: 'Roti Canai',           desc: 'Hauchdünnes, blättriges Fladenbrot mit Linsencurry — für Centbeträge an jedem Mamak-Stall, 24 Stunden am Tag.', dishPrice: 2, dishPriceCHF: 0.6 } } },
  KH: { name: 'Kambodscha', flag: '🇰🇭', currency: 'KHR', continent: 'Asien', geo: [105, 12, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Amok Trei',            desc: 'Fisch in Kokoscurry gedämpft in einem Bananenblatt — Kambodschas Nationalgericht in Restaurantversion.', dishPrice: 40000, dishPriceCHF: 12 },
      classic: { emoji: '🍲', name: 'Kuy Teav',             desc: 'Reisnudelsuppe mit Schweinefleisch und frischen Kräutern — Kambodschas tägliches Frühstücksgericht.', dishPrice: 8000, dishPriceCHF: 2.5 },
      budget:  { emoji: '🥖', name: 'Num Pang',             desc: 'Kambodschanisches Baguette-Sandwich mit Paté und Pickles — Erbe der französischen Kolonialzeit, für unter 1 USD.', dishPrice: 3000, dishPriceCHF: 1 } } },
  LK: { name: 'Sri Lanka', flag: '🇱🇰', currency: 'LKR', continent: 'Asien', geo: [81, 8, 6],
    dishes: {
      premium: { emoji: '🦀', name: 'Jaffna Crab Curry',   desc: 'Frische Krabbe in aromatischem Tamil-Curry mit Kokosmilch — Spezialität des Nordens, gilt als bestes Currygericht Sri Lankas.', dishPrice: 3500, dishPriceCHF: 14 },
      classic: { emoji: '🥘', name: 'Rice & Curry',         desc: 'Riesiges Thali-Tablett mit bis zu 8 verschiedenen Currys und Reis — die tägliche Hauptmahlzeit Sri Lankas.', dishPrice: 800, dishPriceCHF: 3 },
      budget:  { emoji: '🥞', name: 'Hoppers',              desc: 'Knusprige Reismehl-Schälchen, allein oder mit Ei — das günstigste Frühstück Sri Lankas.', dishPrice: 150, dishPriceCHF: 0.6 } } },
  AE: { name: 'VAE (Dubai)', flag: '🇦🇪', currency: 'AED', continent: 'Naher Osten', geo: [55, 25, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Wagyu Tomahawk',       desc: 'Japanisches Wagyu-Steak am Knochen aus Dubais Luxusrestaurants — das teuerste Steak-Erlebnis im Nahen Osten.', dishPrice: 800, dishPriceCHF: 280 },
      classic: { emoji: '🫕', name: 'Al Harees',            desc: 'Langsam gekochter Weizen mit Lamm oder Hähnchen — traditionelles Emirati-Gericht, besonders im Ramadan.', dishPrice: 55, dishPriceCHF: 20 },
      budget:  { emoji: '🫓', name: 'Shawarma Wrap',        desc: 'Fleisch vom Spiess im dünnen Fladenbrot — Dubais günstigstes Strassenfood für unter 2 USD.', dishPrice: 5, dishPriceCHF: 1.8 } } },
  IL: { name: 'Israel', flag: '🇮🇱', currency: 'ILS', continent: 'Naher Osten', geo: [35, 31, 6],
    dishes: {
      premium: { emoji: '🐟', name: 'St. Peters Fisch',     desc: 'Gegrillter Muscht-Fisch aus dem See Genezareth — Israels Delikatesse mit 2000-jähriger Geschichte.', dishPrice: 120, dishPriceCHF: 42 },
      classic: { emoji: '🥙', name: 'Sabich',               desc: 'Pita mit gebratenem Auberginen, Ei, Hummus und Amba-Sauce — Israels unterschätztes Streetfood-Gericht irakischer Herkunft.', dishPrice: 45, dishPriceCHF: 16 },
      budget:  { emoji: '🧆', name: 'Falafel Pita',         desc: 'Knusprige Kichererbsenbällchen im Pita mit Salat und Tahini — in Tel Aviv gibt es über 1000 Falafel-Stände.', dishPrice: 25, dishPriceCHF: 9 } } },
  JO: { name: 'Jordanien', flag: '🇯🇴', currency: 'JOD', continent: 'Naher Osten', geo: [37, 31, 6],
    dishes: {
      premium: { emoji: '🐑', name: 'Mansaf',               desc: 'Lamm auf Riesenbrot mit fermentierter Ziegenjoghurtsauce — Jordaniens Nationalgericht, traditionell mit der Hand gegessen.', dishPrice: 15, dishPriceCHF: 27 },
      classic: { emoji: '🫘', name: 'Foul Mudammas',        desc: 'Gekochte Favabohnen mit Olivenöl, Zitrone und Kreuzkümmel — das Frühstücksgericht des ganzen Nahen Ostens.', dishPrice: 2.5, dishPriceCHF: 5 },
      budget:  { emoji: '🫓', name: 'Kaak-Brot',            desc: 'Sesam-Ringbrot vom ambulanten Händler — Ammans günstigstes Strassenbrot für Cent-Beträge.', dishPrice: 0.3, dishPriceCHF: 0.6 } } },
  PL: { name: 'Polen', flag: '🇵🇱', currency: 'PLN', continent: 'Europa', geo: [20, 52, 5],
    dishes: {
      premium: { emoji: '🍲', name: 'Żurek z Kiełbasą',     desc: 'Sauerrahm-Roggensuppe mit Weisswurst und Ei im Brotlaib serviert — Polens Hochküchen-Klassiker aus der alten Küche.', dishPrice: 60, dishPriceCHF: 17 },
      classic: { emoji: '🥟', name: 'Pierogi Ruskie',       desc: 'Gekochte Teigtaschen gefüllt mit Kartoffeln, Quark und Zwiebeln — Polens geliebtes Nationalessen.', dishPrice: 25, dishPriceCHF: 7 },
      budget:  { emoji: '🌭', name: 'Zapiekanka',            desc: 'Baguette-Häfte mit Pilzen, Käse und Ketchup — Krakaus Antwort auf die Pizza, seit den 1970ern beliebt.', dishPrice: 12, dishPriceCHF: 3 } } },
  CZ: { name: 'Tschechien', flag: '🇨🇿', currency: 'CZK', continent: 'Europa', geo: [16, 50, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Svíčková na smetaně', desc: 'Rindsfilet in Sahnesauce mit Knödel und Preiselbeeren — Tschechiens elaboriertestes Traditionsgericht.', dishPrice: 450, dishPriceCHF: 22 },
      classic: { emoji: '🥩', name: 'Svíčková (einfach)',   desc: 'Rindsgulasch mit Böhmischen Knödeln und Rotkraut — das tägliche Mittagessen in Prager Kantinen.', dishPrice: 200, dishPriceCHF: 10 },
      budget:  { emoji: '🍺', name: 'Knedlík & Pivo',       desc: 'Böhmischer Knödel mit Bier — in Prag ist Bier billiger als Wasser, Pils für unter 1 CHF.', dishPrice: 60, dishPriceCHF: 3 } } },
  HU: { name: 'Ungarn', flag: '🇭🇺', currency: 'HUF', continent: 'Europa', geo: [19, 47, 6],
    dishes: {
      premium: { emoji: '🦢', name: 'Fogas vom Balaton',    desc: 'Zander aus dem Balaton-See, gebratene Spezialität Ungarns — gilt als der edelste Süsswasserfisch Europas.', dishPrice: 7500, dishPriceCHF: 24 },
      classic: { emoji: '🍲', name: 'Gulyás',               desc: 'Ungarischer Gulasch — Rindsfleisch mit Paprika langsam geschmort, Ursprung des weltberühmten Gerichts.', dishPrice: 3500, dishPriceCHF: 11 },
      budget:  { emoji: '🍩', name: 'Lángos',               desc: 'Frittierter Hefeteig mit Sauerrahm und Käse — Ungarns beliebtester Strassensnack auf jedem Markt.', dishPrice: 900, dishPriceCHF: 3 } } },
  KE: { name: 'Kenia', flag: '🇰🇪', currency: 'KES', continent: 'Afrika', geo: [38, 0, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Nyama Choma',           desc: 'Langsam über Holzkohle gegrilltes Ziegenfleisch — Kenias Festessen, an jedem Wochenende in Nairobi gefeiert.', dishPrice: 1200, dishPriceCHF: 11 },
      classic: { emoji: '🍲', name: 'Ugali & Sukuma Wiki',   desc: 'Fester Maisbrei mit gedünstetem Grünkohl und Bohnen — das tägliche Grundnahrungsmittel von über 40 Millionen Kenianern.', dishPrice: 150, dishPriceCHF: 1.5 },
      budget:  { emoji: '🍩', name: 'Mandazi',               desc: 'Frittiertes Hefeteig-Dreieck, leicht süss — das günstigste Frühstück Ostafrikas, überall für Centbeträge.', dishPrice: 20, dishPriceCHF: 0.2 } } },
  GE: { name: 'Georgien', flag: '🇬🇪', currency: 'GEL', continent: 'Asien / Europa', geo: [44, 42, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Mtsvadi',    desc: 'Saftige Schweinefleischspiesse, über Weinrebenglut gegrillt — Georgiens uralte Festtagstradition.', dishPrice: 55, dishPriceCHF: 19 },
      classic: { emoji: '🥟', name: 'Khinkali',   desc: 'Grosse Teigtaschen gefüllt mit würzigem Fleisch und heisser Brühe — das georgische Nationalgericht, mit der Hand gegessen.', dishPrice: 18, dishPriceCHF: 6 },
      budget:  { emoji: '🫓', name: 'Lobiani',    desc: 'Warmes Hefebrot gefüllt mit gewürzten Bohnen — Georgiens günstigstes und sättigendstes Strassenessen.', dishPrice: 4, dishPriceCHF: 1.5 } } },
  PH: { name: 'Philippinen', flag: '🇵🇭', currency: 'PHP', continent: 'Asien', geo: [122, 12, 5],
    dishes: {
      premium: { emoji: '🐷', name: 'Lechon Baboy',  desc: 'Am Spiess langsam gegrilltes ganzes Schwein mit knuspriger Haut — das Festessen der Philippinen.', dishPrice: 800, dishPriceCHF: 13 },
      classic: { emoji: '🍖', name: 'Adobo',          desc: 'In Essig und Sojasosse geschmortes Hähnchen oder Schwein — das inoffizielle Nationalgericht.', dishPrice: 250, dishPriceCHF: 4 },
      budget:  { emoji: '🥚', name: 'Balut',          desc: 'Gekochtes befruchtetes Entenei mit halbreifem Küken — Filippinos beliebtester Strassensnack.', dishPrice: 25, dishPriceCHF: 0.4 } } },
  NP: { name: 'Nepal', flag: '🇳🇵', currency: 'NPR', continent: 'Asien', geo: [84, 28, 6],
    dishes: {
      premium: { emoji: '🍛', name: 'Newari-Festmahl', desc: 'Mehrgängiges Festessen der Newar-Ethnie aus Kathmandu — Büffelfleisch, Linsen, fermentierte Speisen auf Messingtellern.', dishPrice: 1800, dishPriceCHF: 12 },
      classic: { emoji: '🍚', name: 'Dal Bhat',         desc: 'Reis mit Linsensuppe, Gemüsecurry und Pickles — zweimal täglich gegessen, Nepals Nationalgericht schlechthin.', dishPrice: 500, dishPriceCHF: 3.5 },
      budget:  { emoji: '🥟', name: 'Momo (6 Stk.)',    desc: 'Gedämpfte Teigtaschen mit Fleisch- oder Gemüsefüllung und scharfer Tomatensauce — Nepals beliebtester Strassensnack.', dishPrice: 200, dishPriceCHF: 1.4 } } },
  MN: { name: 'Mongolei', flag: '🇲🇳', currency: 'MNT', continent: 'Asien', geo: [103, 46, 4],
    dishes: {
      premium: { emoji: '🐑', name: 'Khorkhog',      desc: 'Lammfleisch mit heissen Steinen im geschlossenen Kessel gegart — das traditionelle mongolische Festessen in der Steppe.', dishPrice: 45000, dishPriceCHF: 12 },
      classic: { emoji: '🥟', name: 'Buuz (5 Stk.)', desc: 'Gedämpfte Teigtaschen mit Hammelfleisch — zu Tsagaan Sar (Neujahrsfest) in jeder mongolischen Familie.', dishPrice: 8000, dishPriceCHF: 2.2 },
      budget:  { emoji: '🍝', name: 'Tsuivan',        desc: 'Gebratene Nudeln mit Hammelfleisch und Gemüse — günstigstes Alltagsgericht in mongolischen Garküchen.', dishPrice: 5000, dishPriceCHF: 1.35 } } },
  MM: { name: 'Myanmar', flag: '🇲🇲', currency: 'MMK', continent: 'Asien', geo: [96, 19, 5],
    dishes: {
      premium: { emoji: '🍜', name: 'Shan-Nudeln',        desc: 'Reisnudeln mit gegrilltem Hähnchen, Tomatensauce und Sesamöl aus dem Shan-Staat — Myanmars Restaurantklassiker.', dishPrice: 15000, dishPriceCHF: 6.8 },
      classic: { emoji: '🍜', name: 'Mohinga',             desc: 'Würzige Fischsuppe mit Reisnudeln und Bananen-Blütenscheiben — Myanmars geliebtes Frühstücksgericht.', dishPrice: 3000, dishPriceCHF: 1.4 },
      budget:  { emoji: '🥗', name: 'Lahpet Thoke',        desc: 'Salat aus fermentierten Teeblättern mit Erdnüssen, Knoblauch und Sesam — einzigartiger Snack ohne Gegenstück weltweit.', dishPrice: 1500, dishPriceCHF: 0.7 } } },
  RO: { name: 'Rumänien', flag: '🇷🇴', currency: 'RON', continent: 'Europa', geo: [25, 46, 6],
    dishes: {
      premium: { emoji: '🍖', name: 'Mici-Platter',  desc: 'Grosszügige Auswahl gegrillter Fleischröllchen mit Senf, Fladenbrot und Bier — Rumäniens geselliges Grillgericht.', dishPrice: 90, dishPriceCHF: 18 },
      classic: { emoji: '🫕', name: 'Sarmale',        desc: 'In Weisskohlblätter gewickeltes Hackfleisch mit Reis, langsam im Tontopf geschmort — Rumäniens Nationalgericht.', dishPrice: 35, dishPriceCHF: 7 },
      budget:  { emoji: '🌭', name: 'Mici (3 Stk.)', desc: 'Gegrillte Hackfleischröllchen aus Rind, Lamm und Schwein mit Knoblauch — überall vom Strassenstand für Kleingeld.', dishPrice: 15, dishPriceCHF: 3 } } },
  BG: { name: 'Bulgarien', flag: '🇧🇬', currency: 'BGN', continent: 'Europa', geo: [25, 43, 6],
    dishes: {
      premium: { emoji: '🍲', name: 'Kavarma',           desc: 'Schweine- oder Hühnerfleisch mit Pilzen und Paprika im Tontopf gebacken — Bulgariens rustikales Festgericht.', dishPrice: 28, dishPriceCHF: 14 },
      classic: { emoji: '🥗', name: 'Shopska Salata',    desc: 'Tomate, Gurke, Paprika und geriebener Sirene-Käse — Bulgariens bekanntester Salat, auf jeder Speisekarte.', dishPrice: 12, dishPriceCHF: 6 },
      budget:  { emoji: '🥐', name: 'Banitsa',           desc: 'Warmes Blätterteiggebäck gefüllt mit weissem Käse und Ei — Bulgariens universelles Frühstück für Centbeträge.', dishPrice: 2.5, dishPriceCHF: 1.25 } } },
  UA: { name: 'Ukraine', flag: '🇺🇦', currency: 'UAH', continent: 'Europa', geo: [32, 49, 5],
    dishes: {
      premium: { emoji: '🍲', name: 'Borscht-Menü',      desc: 'Vollständiges Abendessen mit Borscht, Varenyky und Holubtsi — Kiews traditionelles Mehrgangmenü.', dishPrice: 380, dishPriceCHF: 8.8 },
      classic: { emoji: '🫕', name: 'Borscht',            desc: 'Rote-Rüben-Suppe mit Kohl, Kartoffeln, Fleisch und einem Klecks Sauerrahm — Ukraines Nationalgericht.', dishPrice: 120, dishPriceCHF: 2.8 },
      budget:  { emoji: '🥟', name: 'Varenyky (5 Stk.)', desc: 'Gekochte Teigtaschen mit Kartoffeln, Hüttenkäse oder Kirschen — Ukraines allerbekanntester Alltagssnack.', dishPrice: 80, dishPriceCHF: 1.85 } } },
  RS: { name: 'Serbien', flag: '🇷🇸', currency: 'RSD', continent: 'Europa', geo: [21, 44, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Roštilj-Platter', desc: 'Gemischter Grillplatter mit Ćevapčići, Pljeskavica und Karadordeva — Serbiens Grillkultur auf einem Teller.', dishPrice: 2500, dishPriceCHF: 21.5 },
      classic: { emoji: '🍔', name: 'Pljeskavica',      desc: 'Grosses gewürztes Hackfleischsteak im Fladenbrot mit Ajvar und Zwiebeln — Serbiens beliebtestes Strassengericht.', dishPrice: 800, dishPriceCHF: 6.9 },
      budget:  { emoji: '🫓', name: 'Burek',             desc: 'Blätterteigpastete mit Fleisch, Käse oder Spinat — in jeder Bäckerei Serbiens ab dem frühen Morgen erhältlich.', dishPrice: 200, dishPriceCHF: 1.7 } } },
  ET: { name: 'Äthiopien', flag: '🇪🇹', currency: 'ETB', continent: 'Afrika', geo: [40, 9, 5],
    dishes: {
      premium: { emoji: '🫓', name: 'Beyainatu',     desc: 'Grosse Injera mit über zehn verschiedenen Wats (Eintöpfen) aus Fleisch und Gemüse — das vollständige äthiopische Festmahl.', dishPrice: 600, dishPriceCHF: 9.7 },
      classic: { emoji: '🥩', name: 'Tibs',           desc: 'In Butter und Gewürzen angebratenes Rind- oder Lammfleisch auf Injera — Äthiopiens beliebtester Restaurantklassiker.', dishPrice: 220, dishPriceCHF: 3.5 },
      budget:  { emoji: '🫕', name: 'Shiro Wat',      desc: 'Cremiges Kichererbsenmehl-Curry auf saurem Injera-Fladenbrot — das günstigste und sättigendste Alltagsessen Äthiopiens.', dishPrice: 70, dishPriceCHF: 1.1 } } },
  TZ: { name: 'Tansania', flag: '🇹🇿', currency: 'TZS', continent: 'Afrika', geo: [35, -6, 5],
    dishes: {
      premium: { emoji: '🦐', name: 'Sansibar-Meeresfrüchte', desc: 'Frisch gegrillte Garnelen, Tintenfisch und Fisch vom Hafen Sansibars — Indik-Meeresfrüchte am Strand genossen.', dishPrice: 30000, dishPriceCHF: 11 },
      classic: { emoji: '🍖', name: 'Ugali na Nyama',          desc: 'Fester Maisbrei mit geschmortem Ziegenfleisch und Tomatensauce — das tägliche Hauptgericht in Tansania.', dishPrice: 6000, dishPriceCHF: 2.2 },
      budget:  { emoji: '🍳', name: 'Chipsi Mayai',             desc: 'Pommes frites in Ei eingebacken — Tansanias beliebtestes Strassenfastfood, überall für Kleingeld erhältlich.', dishPrice: 2000, dishPriceCHF: 0.74 } } },
  GH: { name: 'Ghana', flag: '🇬🇭', currency: 'GHS', continent: 'Afrika', geo: [-1, 8, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Gegrillte Tilapia',  desc: 'Ganze gegrillte Tilapia mit Banku (fermentiertem Maisgebäck) und Pfeffer-Sauce — Ghanas Festessen am Wochenende.', dishPrice: 150, dishPriceCHF: 10 },
      classic: { emoji: '🍛', name: 'Jollof Rice',         desc: 'Im Tontopf mit Tomaten, Paprika und Gewürzen geschmorter Reis mit Hähnchen — Westafrikas beliebteste Mahlzeit.', dishPrice: 55, dishPriceCHF: 3.65 },
      budget:  { emoji: '🍌', name: 'Kelewele',             desc: 'In Ingwer und Chili marinierte, frittierte reife Kochbanane — Ghanas würziger Abend-Strassensnack.', dishPrice: 12, dishPriceCHF: 0.8 } } },
  QA: { name: 'Katar', flag: '🇶🇦', currency: 'QAR', continent: 'Naher Osten', geo: [51, 25, 7],
    dishes: {
      premium: { emoji: '🐪', name: 'Kamelbraten',    desc: 'Zartes Kamelfleisch mit Safranreis und getrockneten Früchten — Katars exklusivste traditionelle Delikatesse.', dishPrice: 280, dishPriceCHF: 71 },
      classic: { emoji: '🍛', name: 'Machboos',        desc: 'Gewürzter Langkornreis mit Lamm oder Huhn und Durreh-Sosse — Katars Nationalgericht, tief verwurzelt in der Beduinenküche.', dishPrice: 65, dishPriceCHF: 16.5 },
      budget:  { emoji: '🥙', name: 'Shawarma',         desc: 'Dünn geschnittenes Fleisch im Fladenbrot mit Tahin und Gemüse — in Dohas Arbeiterviertelläden günstig erhältlich.', dishPrice: 15, dishPriceCHF: 3.8 } } },
  IR: { name: 'Iran', flag: '🇮🇷', currency: 'IRR', continent: 'Naher Osten', geo: [53, 32, 4],
    dishes: {
      premium: { emoji: '🍲', name: 'Ghormeh Sabzi', desc: 'Kräuter-Lamm-Eintopf mit getrockneten Limetten und Kidney-Bohnen — Irans komplexestes und geliebtestes Gericht.', dishPrice: 5000000, dishPriceCHF: 10 },
      classic: { emoji: '🍢', name: 'Kebab Koobideh', desc: 'Gegrilltes Hackfleisch-Spiess auf Safranreis mit gegrillter Tomate — das alltägliche Restaurantgericht im ganzen Land.', dishPrice: 2000000, dishPriceCHF: 4 },
      budget:  { emoji: '🍜', name: 'Ash Reshteh',    desc: 'Dicke Kräutersuppe mit Nudeln, Spinat und Kashk (Molkenprodukt) — Irans traditionelles Winteressen und Festtagssuppe.', dishPrice: 500000, dishPriceCHF: 1 } } },
  CU: { name: 'Kuba', flag: '🇨🇺', currency: 'CUP', continent: 'Mittelamerika', geo: [-80, 22, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Ropa Vieja',     desc: 'Langsam geschmortes, zerzupftes Rindfleisch in Tomaten-Paprika-Sauce mit schwarzen Bohnen und Reis — Kubas Nationalstolz.', dishPrice: 600, dishPriceCHF: 4.6 },
      classic: { emoji: '🍚', name: 'Arroz y Frijoles', desc: 'Schwarze Bohnen auf weissem Reis («Moros y Cristianos») — täglich auf jedem kubanischen Tisch, schlicht und unverzichtbar.', dishPrice: 250, dishPriceCHF: 1.9 },
      budget:  { emoji: '🥪', name: 'Pan con Lechón', desc: 'Saftiges Spanferkel-Sandwich auf knusprigem kubanischem Brot — das günstigste Strassenessen der Insel.', dishPrice: 80, dishPriceCHF: 0.6 } } },
  BO: { name: 'Bolivien', flag: '🇧🇴', currency: 'BOB', continent: 'Südamerika', geo: [-65, -17, 5],
    dishes: {
      premium: { emoji: '🍢', name: 'Anticuchos',  desc: 'Gegrillte Rinderherz-Spiesse mit Erdnuss-Aji-Marinade — Südamerikas unterschätzte Delikatesse, in Bolivien perfektioniert.', dishPrice: 90, dishPriceCHF: 12 },
      classic: { emoji: '🥟', name: 'Salteña',     desc: 'Gebackene Empanada mit würzigem Eintopf aus Fleisch, Erbsen und Ei — Boliviens morgendliches Nationalgebäck.', dishPrice: 12, dishPriceCHF: 1.6 },
      budget:  { emoji: '🍵', name: 'Api Morado', desc: 'Heisses violettes Maisgetränk mit Zimt und Nelken, dazu frittierte Buñuelos — Boliviens günstigstes Frühstück.', dishPrice: 6, dishPriceCHF: 0.8 } } },
  UY: { name: 'Uruguay', flag: '🇺🇾', currency: 'UYU', continent: 'Südamerika', geo: [-56, -33, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Asado',    desc: 'Langsam über Holzkohle gegrillte Rindfleischstücke — Uruguays heilige Grillritual, das Wochenenden und Familienfeste prägt.', dishPrice: 1300, dishPriceCHF: 29 },
      classic: { emoji: '🥪', name: 'Chivito',  desc: 'Gestapeltes Sandwich mit Rindsschnitzel, Schinken, Ei, Mozzarella und Oliven — Uruguays inoffizielles Nationalgericht.', dishPrice: 400, dishPriceCHF: 8.9 },
      budget:  { emoji: '🥐', name: 'Medialuna', desc: 'Buttrige Hörnchen aus uruguayischen Bäckereien — zum Frühstück in Milchkaffee getaucht, das günstigste Strassenfrühstück.', dishPrice: 90, dishPriceCHF: 2 } } },

  // ── NEU: Asien ──
  PK: { name: 'Pakistan', flag: '🇵🇰', currency: 'PKR', continent: 'Asien', geo: [70, 30, 4],
    dishes: {
      premium: { emoji: '🥘', name: 'Karahi Gosht',   desc: 'Im Wok geschmortes Ziegenfleisch mit frischen Tomaten, Ingwer und Chili — Pakistans Restaurantklassiker, in Lahore und Karachi täglich zubereitet.', dishPrice: 2200, dishPriceCHF: 7.10 },
      classic: { emoji: '🍛', name: 'Biryani',          desc: 'Aromatischer Basmati-Reis mit Fleisch, Safran und gebratenen Zwiebeln — das beliebteste Alltagsgericht von Karachi bis Islamabad.', dishPrice: 650, dishPriceCHF: 2.10 },
      budget:  { emoji: '🫓', name: 'Chai + Paratha',   desc: 'Würziger Milchtee mit knusprig gebratenen Vollkornfladen — das günstigste Frühstück Pakistans, an jeder Strassenecke erhältlich.', dishPrice: 120, dishPriceCHF: 0.39 } } },

  LA: { name: 'Laos', flag: '🇱🇦', currency: 'LAK', continent: 'Asien', geo: [103, 18, 6],
    dishes: {
      premium: { emoji: '🍖', name: 'Laap Neua',     desc: 'Gehacktes Büffelfleisch mit Röstreis, frischen Kräutern und Chili — Laos\' feierliches Nationalgericht, in Restaurants aufwendig zubereitet.', dishPrice: 120000, dishPriceCHF: 5.20 },
      classic: { emoji: '🍜', name: 'Khao Piak Sen', desc: 'Cremige Reisnudelsuppe in Hühnerbrühe mit Ingwer und Koriander — das wärmende Alltagsgericht in jedem laotischen Haushalt.', dishPrice: 35000, dishPriceCHF: 1.52 },
      budget:  { emoji: '🥖', name: 'Khao Jee',       desc: 'Baguette-Sandwich mit Ei, Paté und Chili-Sauce — ein kulinarisches Überbleibsel der Französisch-Indochina-Zeit, am Strassenstand.', dishPrice: 15000, dishPriceCHF: 0.65 } } },

  MV: { name: 'Malediven', flag: '🇲🇻', currency: 'MVR', continent: 'Asien', geo: [73, 4, 7],
    dishes: {
      premium: { emoji: '🦞', name: 'Hummer-Dinner',    desc: 'Frischer Hummer auf Kokosreis im Überwasser-Bungalow — das Inbegriff des maledivischen Luxusdinnererlebnisses, teuerster Archipel Asiens.', dishPrice: 1400, dishPriceCHF: 80 },
      classic: { emoji: '🐟', name: 'Garudhiya',         desc: 'Klare Thunfischbrühe mit Reis, Limette und Chili-Paste — das schlichte Nationalgericht der Einheimischen auf den Local Islands.', dishPrice: 220, dishPriceCHF: 12.60 },
      budget:  { emoji: '🥥', name: 'Mas Huni + Roshi',  desc: 'Thunfisch mit geriebenem Kokos und Zwiebeln auf Fladenbrot — das günstigste und authentischste Frühstück der Malediven.', dishPrice: 30, dishPriceCHF: 1.70 } } },

  // ── NEU: Europa ──
  AL: { name: 'Albanien', flag: '🇦🇱', currency: 'ALL', continent: 'Europa', geo: [20, 41, 7],
    dishes: {
      premium: { emoji: '🐏', name: 'Tave Kosi',      desc: 'Im Ofen gebackenes Lamm mit Joghurt-Ei-Kruste — Albaniens wärmstes Nationalgericht, in jedem besseren Restaurant das Aushängeschild.', dishPrice: 2800, dishPriceCHF: 27 },
      classic: { emoji: '🫕', name: 'Fërgesë',          desc: 'Gebratene Paprika, Tomaten und albanischer Schafskäse in der Pfanne — Tiranas einfachstes und beliebtestes Mittagessen.', dishPrice: 750, dishPriceCHF: 7.30 },
      budget:  { emoji: '🫓', name: 'Byrek me Spinaq',  desc: 'Knuspriger Blätterteig mit Spinat und Weichkäse — Albaniens Alltagsgebäck, frisch aus dem Holzofen für wenige Lek.', dishPrice: 150, dishPriceCHF: 1.45 } } },

  IE: { name: 'Irland', flag: '🇮🇪', currency: 'EUR', continent: 'Europa', geo: [-8, 53, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Irischer Lammrücken', desc: 'Ofengebratener Rücken von irischen Weidemämmern mit Colcannon und Jus — Dublins gehobene Restaurantküche auf höchstem Niveau.', dishPrice: 38, dishPriceCHF: 35.50 },
      classic: { emoji: '🐟', name: 'Fish & Chips',          desc: 'Knuspriger Kabeljau im Bierteig mit dicken Pommes und Erbsenmus — Irlands Lieblingsgericht, an der Küste und in jedem Pub.', dishPrice: 18, dishPriceCHF: 16.80 },
      budget:  { emoji: '🍞', name: 'Soda Bread',             desc: 'Irisches Natronbrot mit Butter vom Bäcker — das einfachste Frühstück der Insel, seit Jahrhunderten unverändert und erschwinglichst.', dishPrice: 3.50, dishPriceCHF: 3.30 } } },

  MD: { name: 'Moldau', flag: '🇲🇩', currency: 'MDL', continent: 'Europa', geo: [28, 47, 7],
    dishes: {
      premium: { emoji: '🥩', name: 'Mici mit Mămăligă', desc: 'Gegrillte Hackfleisch-Röllchen auf Polenta mit saurer Sahne und Hausrotwein — Moldaus sonntägliches Restaurantfestmahl.', dishPrice: 380, dishPriceCHF: 19.50 },
      classic: { emoji: '🍲', name: 'Zeamă',              desc: 'Saure Hühnersuppe mit hausgemachten Nudeln und viel Dill — Moldaus heilendes Alltagsgericht, in jeder Küche täglich frisch.', dishPrice: 95, dishPriceCHF: 4.90 },
      budget:  { emoji: '🫓', name: 'Plăcintă',           desc: 'Gefüllte Blätterteig-Pastete mit Kartoffeln, Kohl oder Käse — Moldaus günstigstes Strassengebäck, überall erhältlich.', dishPrice: 28, dishPriceCHF: 1.43 } } },

  // ── NEU: Nordamerika / Karibik ──
  DO: { name: 'Dom. Republik', flag: '🇩🇴', currency: 'DOP', continent: 'Mittelamerika', geo: [-70, 19, 7],
    dishes: {
      premium: { emoji: '🦞', name: 'Langosta a la Plancha', desc: 'Frisch gegrillter Karibik-Hummer mit Knoblauchbutter, serviert am Strand — dominikanisches Festmahl an der Nordküste.', dishPrice: 1600, dishPriceCHF: 25.80 },
      classic: { emoji: '🍚', name: 'La Bandera',             desc: 'Weisser Reis, schwarze Bohnen, Hähnchen und Salat — «die Flagge», das dominikanische Mittagessen, täglich auf jedem Tisch.', dishPrice: 420, dishPriceCHF: 6.80 },
      budget:  { emoji: '🍌', name: 'Mangú',                  desc: 'Gestampfte Kochbanane mit eingelegten Zwiebeln und Käse — das günstigste und sättigendste Frühstück der Insel.', dishPrice: 130, dishPriceCHF: 2.10 } } },

  JM: { name: 'Jamaika', flag: '🇯🇲', currency: 'JMD', continent: 'Mittelamerika', geo: [-77, 18, 8],
    dishes: {
      premium: { emoji: '🦞', name: 'Jerk Lobster',       desc: 'Karibischer Hummer in Scotch-Bonnet-Marinade über Pimentholz gegrillt — das Premiumgericht in Jamaicas Beach-Restaurants.', dishPrice: 4800, dishPriceCHF: 28.70 },
      classic: { emoji: '🍗', name: 'Jerk Chicken',        desc: 'Langsam über Pimentholz gegrilltes Hähnchen in würziger Scotch-Bonnet-Marinade — Jamaicas unbestrittenes Nationalgericht.', dishPrice: 1300, dishPriceCHF: 7.80 },
      budget:  { emoji: '🥧', name: 'Jamaican Beef Patty', desc: 'Flockiges Blätterteig-Gebäck mit würzigem Rindshackfleisch — Jamaicas beliebtester Schnellsnack für wenige Dollar.', dishPrice: 370, dishPriceCHF: 2.22 } } },

  PA: { name: 'Panama', flag: '🇵🇦', currency: 'USD', continent: 'Mittelamerika', geo: [-80, 9, 7],
    dishes: {
      premium: { emoji: '🐟', name: 'Corvina al Ajillo',   desc: 'In Knoblauch und Weisswein geschwenkter Corvina-Seebarsch — Panamas Delikatesse an der Pazifikküste in Restaurants der Casco Viejo.', dishPrice: 38, dishPriceCHF: 34.50 },
      classic: { emoji: '🍲', name: 'Sancocho de Gallina',  desc: 'Sättigender Hühnereintopf mit Maniok, Yam und Koriander — Panamas Nationalgericht, das jeden Sonntag Familien vereint.', dishPrice: 14, dishPriceCHF: 12.70 },
      budget:  { emoji: '🫔', name: 'Empanada de Maíz',     desc: 'Gebratene Maisteigtasche mit Fleisch oder Käse — Panamas günstigstes und sättigstes Strassenessen an jeder Ecke.', dishPrice: 3, dishPriceCHF: 2.73 } } },

  // ── NEU: Südamerika ──
  EC: { name: 'Ecuador', flag: '🇪🇨', currency: 'USD', continent: 'Südamerika', geo: [-78, -2, 6],
    dishes: {
      premium: { emoji: '🦐', name: 'Ceviche de Camarón', desc: 'Frische Garnelen in Limonensaft «gegart» mit Tomaten, Koriander und Chifles — Ecuadors Küstendelikatesse schlechthin.', dishPrice: 28, dishPriceCHF: 25.50 },
      classic: { emoji: '🍲', name: 'Seco de Pollo',       desc: 'Hähnchen in Bier-Chicha-Sauce mit gelbem Reis und Avocado — Ecuadors häufigstes Mittagsmenu vom Markt.', dishPrice: 9, dishPriceCHF: 8.18 },
      budget:  { emoji: '🐟', name: 'Encebollado',          desc: 'Thunfischsuppe mit Yuca und roten Zwiebeln — das ecuadorianische Frühstücksgericht und legendäre Kater-Heilmittel.', dishPrice: 4, dishPriceCHF: 3.64 } } },

  PY: { name: 'Paraguay', flag: '🇵🇾', currency: 'PYG', continent: 'Südamerika', geo: [-58, -23, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Asado Paraguayo', desc: 'Langsam über Quebracho-Holzkohle gegrilltes Rindfleisch — Paraguays geselliges Wochenend-Festmahl im Freien, für Stunden zelebriert.', dishPrice: 130000, dishPriceCHF: 16.05 },
      classic: { emoji: '🍞', name: 'Sopa Paraguaya',   desc: 'Saftiger Mais-Käse-Auflauf mit Zwiebeln — trotz des Namens keine Suppe, sondern Paraguays herzigste Beilage zum Grillfleisch.', dishPrice: 40000, dishPriceCHF: 4.94 },
      budget:  { emoji: '🥐', name: 'Chipa',             desc: 'Knuspriges Maniok-Käse-Brot in Ringform — Paraguays Nationalbäckerei, täglich frisch am Strassenstand oder Busbahnhof.', dishPrice: 9000, dishPriceCHF: 1.11 } } },

  VE: { name: 'Venezuela', flag: '🇻🇪', currency: 'VES', continent: 'Südamerika', geo: [-66, 8, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Pabellón Criollo', desc: 'Zerzupftes Rindfleisch, schwarze Bohnen, weisser Reis und Kochbanane — Venezuelas Nationalfahnen-Gericht, vollständig im Restaurant.', dishPrice: 650, dishPriceCHF: 13 },
      classic: { emoji: '🫔', name: 'Arepa Reina Pepiada', desc: 'Gefüllte Maisflade mit cremigem Avocado-Hähnchen-Salat — Venezuelas beliebtester Strassenfood an jeder Ecke, unabhängig von der Krise.', dishPrice: 200, dishPriceCHF: 4 },
      budget:  { emoji: '🥐', name: 'Cachito de Jamón',    desc: 'Weiches Hörnchen gefüllt mit Schinken — Venezuelas allgegenwärtiges Bäckereifrühstück, süss-salzig, günstig und geliebt.', dishPrice: 55, dishPriceCHF: 1.10 } } },

  // ── NEU: Afrika ──
  RW: { name: 'Ruanda', flag: '🇷🇼', currency: 'RWF', continent: 'Afrika', geo: [30, -2, 8],
    dishes: {
      premium: { emoji: '🍖', name: 'Brochettes de Chèvre', desc: 'Gegrillte Ziegenfleischspiesse mit Ugali und Tomatensalat — Kigalis beliebtestes Abendessen in den Gartenrestaurants der Hauptstadt.', dishPrice: 18000, dishPriceCHF: 13.04 },
      classic: { emoji: '🍚', name: 'Isombe na Ibirayi',     desc: 'Gestampfte Maniokblätter mit Kartoffeln und Palmöl — Ruandas alltägliche Basismahlzeit, kräftig und nahrhaft.', dishPrice: 6000, dishPriceCHF: 4.35 },
      budget:  { emoji: '🍚', name: 'Ubugali',                desc: 'Steifes Maniokmehlgericht, von der Gemeinschaftsschüssel gegessen — Ruandas günstigstes und sättigstes Grundnahrungsmittel.', dishPrice: 1500, dishPriceCHF: 1.09 } } },

  NA: { name: 'Namibia', flag: '🇳🇦', currency: 'NAD', continent: 'Afrika', geo: [18, -22, 5],
    dishes: {
      premium: { emoji: '🦌', name: 'Oryx-Steak',   desc: 'Zartes Filet der Namibischen Oryx-Antilope — Windhoeks exklusivste Wildspezialität in den Steakhouse-Restaurants der Hauptstadt.', dishPrice: 780, dishPriceCHF: 38.05 },
      classic: { emoji: '🍖', name: 'Kapana',         desc: 'Frisch geschnittenes, am offenen Feuer gegrilltes Rindfleisch mit Chili-Sauce — Windhoeks legendäres Strassenessen im Katutura-Quartier.', dishPrice: 190, dishPriceCHF: 9.27 },
      budget:  { emoji: '🍩', name: 'Fatcake',         desc: 'Tief frittierter Teigring, süss oder pikant — Namibias günstigstes und beliebtestes Strassenfrühstück in allen Städten.', dishPrice: 22, dishPriceCHF: 1.07 } } },

  UG: { name: 'Uganda', flag: '🇺🇬', currency: 'UGX', continent: 'Afrika', geo: [32, 1, 7],
    dishes: {
      premium: { emoji: '🐟', name: 'Nile Perch',   desc: 'Frisch gebratener Viktoriasee-Nilbarsch mit Ugali und Erdnusssauce — Kampalas Festmahlzeit in den Restaurantgärten am Seeufer.', dishPrice: 60000, dishPriceCHF: 14.63 },
      classic: { emoji: '🍌', name: 'Matoke',         desc: 'Gedämpfte grüne Kochbananen in Erdnuss-Fleisch-Stew — Ugandas Nationalgericht, das täglich auf jedem Tisch dampft.', dishPrice: 20000, dishPriceCHF: 4.88 },
      budget:  { emoji: '🌯', name: 'Rolex',           desc: 'Ei-Omelette und Gemüse aufgerollt in Chapati — Ugandas berühmtestes Strassengericht, ein Wortspiel aus «Rolled Eggs».', dishPrice: 5500, dishPriceCHF: 1.34 } } },

  // ── NEU: Ozeanien ──
  FJ: { name: 'Fidschi', flag: '🇫🇯', currency: 'FJD', continent: 'Ozeanien', geo: [178, -18, 8],
    dishes: {
      premium: { emoji: '🦀', name: 'Kokoda mit Krabben', desc: 'Fidschi-Ceviche: rohes Fischfilet in Zitronensaft mariniert, mit Kokoscreme und Krabben — das exklusivste Gericht in Resort-Restaurants.', dishPrice: 95, dishPriceCHF: 37.25 },
      classic: { emoji: '🍲', name: 'Lovo-Festmahl',       desc: 'Im heissen Erdofen mit Bananenblättern gegartes Hühnchen und Süsskartoffel — Fidschis traditionelles Gemeinschaftsgericht.', dishPrice: 48, dishPriceCHF: 18.82 },
      budget:  { emoji: '🫓', name: 'Roti mit Curry',       desc: 'Weiches Fladenbrot mit Kichererbsen-Curry — Fidschis indo-fidschianisches Erbe, günstig und überall erhältlich.', dishPrice: 9, dishPriceCHF: 3.53 } } },

  PF: { name: 'Tahiti', flag: '🇵🇫', currency: 'XPF', continent: 'Ozeanien', geo: [-149, -17, 8],
    dishes: {
      premium: { emoji: '🐟', name: 'Poisson Cru',   desc: 'Roher Thunfisch in Limettensaft mariniert mit Kokosmilch, Gurke und Tomate — Tahitis Nationalgericht in seiner Paradiesform.', dishPrice: 4200, dishPriceCHF: 33.07 },
      classic: { emoji: '🍚', name: 'Ma\'a Tahiti',   desc: 'Polynesisches Festmahl: Fisch und Porc Rôti aus dem Erdofen — in Roulottes (Streetfood-Trucks) rund um Papeete erhältlich.', dishPrice: 2400, dishPriceCHF: 18.90 },
      budget:  { emoji: '🥖', name: 'Casse-croûte',   desc: 'Belegtes Baguette mit Thunfisch oder Schinken — Tahitis französisches Erbe im günstigsten Format, in jeder Roulotte täglich.', dishPrice: 900, dishPriceCHF: 7.09 } } },

  PG: { name: 'Papua-Neuguinea', flag: '🇵🇬', currency: 'PGK', continent: 'Ozeanien', geo: [145, -6, 5],
    dishes: {
      premium: { emoji: '🐗', name: 'Mumu-Festmahl', desc: 'Im heissen Erdofen in Bananenblättern gegartes Schweinefleisch mit Süsskartoffeln — PNG\'s grösstes Gemeinschafts- und Zeremoniegericht.', dishPrice: 180, dishPriceCHF: 44.44 },
      classic: { emoji: '🐟', name: 'Fisch mit Sago', desc: 'Gekochter Fisch mit Sagofladen — das tägliche Grundnahrungsmittel in Küstendörfern und auf den Märkten Port Moresbys.', dishPrice: 40, dishPriceCHF: 9.88 },
      budget:  { emoji: '🍌', name: 'Kaukau',          desc: 'Im Feuer gegrillte Süsskartoffel — PNG\'s günstigstes und nährstoffreichstes Alltagsgericht in den Bergdörfern des Hochlands.', dishPrice: 9, dishPriceCHF: 2.22 } } },

  // ── NEU: Asien ──
  HK: { name: 'Hongkong', flag: '🇭🇰', currency: 'HKD', continent: 'Asien', geo: [114.17, 22.32, 9],
    dishes: {
      premium: { emoji: '🦆', name: 'Gebratene Gans',     desc: 'Knusprige kantonesische Gans mit Pflaumensauce — Hongkongs kulinarische Krone, serviert in traditionellen Barbecue-Restaurants.', dishPrice: 420, dishPriceCHF: 52 },
      classic: { emoji: '🍖', name: 'Char Siu Reis',       desc: 'Honig-BBQ-Schweinefleisch über Reis mit Sojasauce — das Hongkonger Alltagsgericht in jeder Cha Chaan Teng.', dishPrice: 75, dishPriceCHF: 9.3 },
      budget:  { emoji: '🧇', name: 'Egg Waffle',           desc: 'Knuspriges Waffelei-Gebäck frisch vom Strassenstand — Hongkongs kulinarisches Wahrzeichen seit den 1950ern.', dishPrice: 22, dishPriceCHF: 2.7 } } },

  MO: { name: 'Macau', flag: '🇲🇴', currency: 'MOP', continent: 'Asien', geo: [113.55, 22.2, 10],
    dishes: {
      premium: { emoji: '🐟', name: 'Bacalhau com Natas', desc: 'Stockfisch mit Sahne und Kartoffeln überbacken — Macaus portugiesisches Erbe auf dem Teller, serviert in historischen Tavernen.', dishPrice: 320, dishPriceCHF: 40 },
      classic: { emoji: '🥩', name: 'Pork Chop Bun',       desc: 'Paniertes Schweinekotelett im Kaisersemmel — Macaus beliebtestes Strassengericht, in jedem lokalen Café erhältlich.', dishPrice: 48, dishPriceCHF: 6 },
      budget:  { emoji: '🥐', name: 'Egg Tart',             desc: 'Cremige Puddingtörtchen aus Blätterteig — das portugiesische Pastel de Nata in seiner macauischen Form.', dishPrice: 12, dishPriceCHF: 1.5 } } },

  BN: { name: 'Brunei', flag: '🇧🇳', currency: 'BND', continent: 'Asien', geo: [114.7, 4.5, 7],
    dishes: {
      premium: { emoji: '🦀', name: 'Ambuyat-Festmahl',   desc: 'Sagomark-Brei mit Krabben, Garnelen und diversen Beilagen — Bruneis traditionelles Nationalessen bei Festlichkeiten.', dishPrice: 48, dishPriceCHF: 37 },
      classic: { emoji: '🍗', name: 'Nasi Katok',           desc: 'Gebratenes Hähnchen mit Reis und sambal — Bruneis günstigstes und beliebtestes Alltagsgericht, überall erhältlich.', dishPrice: 2, dishPriceCHF: 1.55 },
      budget:  { emoji: '🍢', name: 'Kelupis',              desc: 'Klebreis in Nipa-Palmenblätter gewickelt — traditioneller Snack auf Bruneis Märkten.', dishPrice: 0.5, dishPriceCHF: 0.38 } } },

  BD: { name: 'Bangladesch', flag: '🇧🇩', currency: 'BDT', continent: 'Asien', geo: [90, 23.5, 6],
    dishes: {
      premium: { emoji: '🐟', name: 'Ilish Bhapa',         desc: 'Gedämpfter Hilsa-Fisch mit Senfpaste und Kokos — Bangladeschs Nationalfisch und kulinarisches Heiligtum.', dishPrice: 1200, dishPriceCHF: 11.1 },
      classic: { emoji: '🍛', name: 'Beef Bhuna & Roti',   desc: 'Trockenes Rindfleisch-Curry mit Fladenbrot — das Mittagessen der Dhaka-Büroarbeiter in jedem Marktrestaurant.', dishPrice: 250, dishPriceCHF: 2.3 },
      budget:  { emoji: '🍚', name: 'Dal-Bhat',             desc: 'Linsensuppe mit Reis — Bangladeschs günstigstes und nahrhaftes Grundnahrungsmittel täglich auf den Strassen Dhakas.', dishPrice: 60, dishPriceCHF: 0.55 } } },

  // ── NEU: Naher Osten / Zentralasien ──
  KW: { name: 'Kuwait', flag: '🇰🇼', currency: 'KWD', continent: 'Naher Osten', geo: [47.5, 29.5, 7],
    dishes: {
      premium: { emoji: '🐑', name: 'Ouzi',                desc: 'Ganzes Lamm langsam über Reis geschmort, gewürzt mit Safran und Kardamom — Kuwaits festlichstes Nationalgericht.', dishPrice: 15, dishPriceCHF: 49 },
      classic: { emoji: '🍚', name: 'Machboos',             desc: 'Gewürzreis mit Lamm oder Huhn und getrockneten Limetten — Kuwaits alltägliches Nationalgericht in jedem Haushalt.', dishPrice: 4, dishPriceCHF: 13 },
      budget:  { emoji: '☕', name: 'Karak Chai & Samboosa', desc: 'Süsser Kardamom-Tee mit frittierter Teigtasche — Kuwaits günstigstes Frühstück an jedem Strassenstand.', dishPrice: 0.5, dishPriceCHF: 1.65 } } },

  OM: { name: 'Oman', flag: '🇴🇲', currency: 'OMR', continent: 'Naher Osten', geo: [57, 23, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Samak Mishkak',       desc: 'Am Spieß gegrillter Roter Snapper mit Omani-Gewürzen — das Festgericht in Maskat\'s Fischrestaurants am Meer.', dishPrice: 12, dishPriceCHF: 32.5 },
      classic: { emoji: '🍚', name: 'Shuwa',                desc: 'In Bananenblättern eingewickeltes, 48 Stunden im Erdofen gegarter Lamm mit Gewürzreis — Omans Festessen zu Eid.', dishPrice: 3.5, dishPriceCHF: 9.5 },
      budget:  { emoji: '🫓', name: 'Harees & Laban',       desc: 'Weizenbrei mit Hammelfleisch und gesäuertem Joghurt — Omans günstigstes und sättigendstes Ramadan-Frühstück.', dishPrice: 0.8, dishPriceCHF: 2.2 } } },

  BH: { name: 'Bahrain', flag: '🇧🇭', currency: 'BHD', continent: 'Naher Osten', geo: [50.5, 26, 8],
    dishes: {
      premium: { emoji: '🐟', name: 'Hamour-Platte',       desc: 'Gegrillter Zackenbarsch mit Safranreis und Meeresfrüchten — Bahrains exklusivstes Fischgericht in den Corniche-Restaurants.', dishPrice: 18, dishPriceCHF: 49 },
      classic: { emoji: '🍚', name: 'Kabsa',                desc: 'Aromtischer Langkornreis mit Hühnchen, Tomaten und arabischen Gewürzen — das tägliche Mittagessen der Bahrainis.', dishPrice: 4, dishPriceCHF: 10.9 },
      budget:  { emoji: '🧆', name: 'Muhammar & Samboosa', desc: 'Süsser Reiskuchen mit Dattelsirup und frittierte Teigtasche — Bahrains günstigstes traditionelles Frühstück.', dishPrice: 0.8, dishPriceCHF: 2.2 } } },

  IQ: { name: 'Irak', flag: '🇮🇶', currency: 'IQD', continent: 'Naher Osten', geo: [44, 33, 5],
    dishes: {
      premium: { emoji: '🐟', name: 'Masgouf',              desc: 'Am offenen Feuer gegrillter Schuppenkarpfen vom Tigris — Bagdads ältestes und bekanntestes Nationalgericht seit 5000 Jahren.', dishPrice: 40000, dishPriceCHF: 30.8 },
      classic: { emoji: '🍚', name: 'Quzi',                 desc: 'Ganzes langsam gegarter Lamm über Gewürzreis — das irakische Festessen zu Hochzeiten und Feiertagen.', dishPrice: 15000, dishPriceCHF: 11.5 },
      budget:  { emoji: '🧆', name: 'Sambusak',             desc: 'Frittierte Teigtaschen mit Fleisch oder Käsefüllung — Bagdads günstigster Strassensnack an jedem Bazar.', dishPrice: 1000, dishPriceCHF: 0.77 } } },

  AZ: { name: 'Aserbaidschan', flag: '🇦🇿', currency: 'AZN', continent: 'Asien', geo: [47.5, 40.5, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Lula Kebab',           desc: 'Gegrilltes Hackfleisch am Spiess mit Sumach und frischen Kräutern — Bakus Restaurantklassiker in der Altstadt.', dishPrice: 35, dishPriceCHF: 21.2 },
      classic: { emoji: '🍚', name: 'Shah Plov',             desc: 'Safranreis in knuspriger Teigkruste (Gazmaq) mit getrocknetem Obst — Aserbaidschans Festgericht der Könige.', dishPrice: 18, dishPriceCHF: 10.9 },
      budget:  { emoji: '🫓', name: 'Qutab',                 desc: 'Hauchdünnes Fladenbrot gefüllt mit Kräutern oder Granatapfel — Aserbaidschans günstigstes Strassengericht überall in Baku.', dishPrice: 2, dishPriceCHF: 1.2 } } },

  AM: { name: 'Armenien', flag: '🇦🇲', currency: 'AMD', continent: 'Asien', geo: [45, 40, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Khorovats',            desc: 'Armenisches Barbecue mit Lamm, Schwein und Gemüse über Holzkohle — das Nationalgericht zu jedem Fest.', dishPrice: 8000, dishPriceCHF: 20.5 },
      classic: { emoji: '🍇', name: 'Dolma',                 desc: 'Weinblätter gefüllt mit gewürztem Hackfleisch und Reis — Armeniens bekanntestes Alltagsgericht in jedem Haus.', dishPrice: 2500, dishPriceCHF: 6.4 },
      budget:  { emoji: '🫓', name: 'Lavash & Käse',         desc: 'Hauchdünnes Fladenbrot mit Schafskäse und frischen Kräutern — Armeniens täglich günstigstes Frühstück.', dishPrice: 500, dishPriceCHF: 1.3 } } },

  KZ: { name: 'Kasachstan', flag: '🇰🇿', currency: 'KZT', continent: 'Asien', geo: [67, 48, 3],
    dishes: {
      premium: { emoji: '🐴', name: 'Beshbarmak',           desc: 'Gekochtes Pferdefleisch mit breiten Nudeln und Zwiebelsauce — Kasachstans festlichstes Nationalgericht zu Hochzeiten.', dishPrice: 12000, dishPriceCHF: 25.5 },
      classic: { emoji: '🥟', name: 'Manty',                 desc: 'Grosse gedämpfte Teigtaschen gefüllt mit Lammhack und Zwiebeln — das kasachische Mittagsgericht in jedem Marktrestaurant.', dishPrice: 2500, dishPriceCHF: 5.3 },
      budget:  { emoji: '🫓', name: 'Samsa',                 desc: 'Im Tandoor-Ofen gebackene dreieckige Blätterteigpastete mit Lamm — Kasachstans günstiger Strassensnack.', dishPrice: 400, dishPriceCHF: 0.85 } } },

  UZ: { name: 'Usbekistan', flag: '🇺🇿', currency: 'UZS', continent: 'Asien', geo: [64, 41, 4],
    dishes: {
      premium: { emoji: '🍚', name: 'Samarkand Plov',       desc: 'Usbekischer Reispilaf mit Lamm, gelben Möhren, Kichererbsen und Rosinen — das Festessen der Seidenstrasse in seiner edelsten Form.', dishPrice: 250000, dishPriceCHF: 19.5 },
      classic: { emoji: '🥟', name: 'Manti',                 desc: 'Gedämpfte Teigtaschen mit Lammfleisch und Kürbis — in jedem Teehaus Taschkents täglich frisch zubereitet.', dishPrice: 60000, dishPriceCHF: 4.7 },
      budget:  { emoji: '🫓', name: 'Somsa',                 desc: 'Im Tandoor gebackene Blätterteigtasche mit Lamm oder Kürbis — Usbekistans günstigstes und beliebtestes Strassengericht.', dishPrice: 8000, dishPriceCHF: 0.62 } } },

  TJ: { name: 'Tadschikistan', flag: '🇹🇯', currency: 'TJS', continent: 'Asien', geo: [71, 39, 5],
    dishes: {
      premium: { emoji: '🍚', name: 'Oshi Palav',            desc: 'Tadschikischer Plov mit Lamm, Möhren und Kichererbsen — Duschanbes festlichstes Gericht zu Nouruz und Hochzeiten.', dishPrice: 120, dishPriceCHF: 11.1 },
      classic: { emoji: '🫕', name: 'Qurutob',               desc: 'Fladenbrot-Stücke in Qurt-Molke eingeweicht mit Gemüse und Zwiebeln — Tadschikistans günstigstes Nationalgericht.', dishPrice: 40, dishPriceCHF: 3.7 },
      budget:  { emoji: '🫓', name: 'Sambuusa',              desc: 'Im Tandoor gebackene Teigtasche mit Lamm oder Kräutern — der günstigste Strassensnack auf Duschanbes Basaren.', dishPrice: 5, dishPriceCHF: 0.46 } } },

  TM: { name: 'Turkmenistan', flag: '🇹🇲', currency: 'TMT', continent: 'Asien', geo: [59, 40, 5],
    dishes: {
      premium: { emoji: '🐑', name: 'Dymlama',               desc: 'Langsam gedämpftes Lammfleisch mit Kartoffeln, Paprika und Kräutern — Aschgabats gehobenes Nationalrestaurant-Gericht.', dishPrice: 80, dishPriceCHF: 23 },
      classic: { emoji: '🍚', name: 'Plov',                  desc: 'Reispilaf mit Lamm und gelben Möhren — Turkmenistans tägliches Nationalgericht in jedem Teehaus.', dishPrice: 30, dishPriceCHF: 8.7 },
      budget:  { emoji: '🫓', name: 'Çelpek',                desc: 'Frittiertes Fladenbrot — Turkmenistans günstigstes traditionelles Gebäck zum Frühstück oder als Snack.', dishPrice: 3, dishPriceCHF: 0.87 } } },

  // ── NEU: Mittelamerika / Karibik ──
  GT: { name: 'Guatemala', flag: '🇬🇹', currency: 'GTQ', continent: 'Amerika', geo: [-90.5, 15.5, 6],
    dishes: {
      premium: { emoji: '🍲', name: 'Pepián',                desc: 'Traditioneller Eintopf mit Truthahn in Samen-Chili-Sauce — Guatemalas ältestes Nationalgericht, seit der Mayazeit zubereitet.', dishPrice: 120, dishPriceCHF: 15.6 },
      classic: { emoji: '🌶️', name: 'Chiles Rellenos',       desc: 'Mit Hackfleisch und Gemüse gefüllte gebratene Paprika in Tomaten-Eiersauce — Guatemalas beliebtestes Mittagessen.', dishPrice: 55, dishPriceCHF: 7.1 },
      budget:  { emoji: '🫓', name: 'Tortillas con Frijoles', desc: 'Maisfladen mit schwarzen Bohnen — Guatemalas tägliches Grundnahrungsmittel, günstigste Mahlzeit des Landes.', dishPrice: 10, dishPriceCHF: 1.3 } } },

  HN: { name: 'Honduras', flag: '🇭🇳', currency: 'HNL', continent: 'Amerika', geo: [-86.5, 15, 6],
    dishes: {
      premium: { emoji: '🍲', name: 'Tapado',                desc: 'Meeresfrüchte-Kokosmilch-Suppe mit Kochbananen und Yuca — die karibische Küstenspezialität aus Garifuna-Tradition.', dishPrice: 450, dishPriceCHF: 18.4 },
      classic: { emoji: '🌯', name: 'Baleada',               desc: 'Dicke Weizentortilla mit Bohnen, Käse und Rahm — Hondurans populärstes Strassengericht von morgens bis abends.', dishPrice: 70, dishPriceCHF: 2.9 },
      budget:  { emoji: '🫓', name: 'Pupusa',                desc: 'Gefüllter Maisfladen mit Käse oder Bohnen — Zentralamerikas günstigstes und beliebtestes Strassenessen.', dishPrice: 20, dishPriceCHF: 0.82 } } },

  NI: { name: 'Nicaragua', flag: '🇳🇮', currency: 'NIO', continent: 'Amerika', geo: [-85, 12.5, 6],
    dishes: {
      premium: { emoji: '🍖', name: 'Cerdo a la Parrilla',   desc: 'Gegrilltes Schweinefleisch mit Chimichurri und Tostones — das Festessen in Managuas gehobenen Grillrestaurants.', dishPrice: 500, dishPriceCHF: 13.9 },
      classic: { emoji: '🍚', name: 'Gallo Pinto',           desc: 'Gebratener Reis mit roten Bohnen, Koriander und Jocote-Sauce — Nicaraguas Nationalgericht morgens, mittags, abends.', dishPrice: 100, dishPriceCHF: 2.8 },
      budget:  { emoji: '🍪', name: 'Rosquilla',             desc: 'Trockener Maiskeks — Nicaraguas günstigstes traditionelles Gebäck, beliebt zum Kaffee auf jedem Markt.', dishPrice: 15, dishPriceCHF: 0.42 } } },

  TT: { name: 'Trinidad & Tobago', flag: '🇹🇹', currency: 'TTD', continent: 'Amerika', geo: [-61, 10.5, 8],
    dishes: {
      premium: { emoji: '🦀', name: 'Crab & Dumpling',       desc: 'Karibische Königskrabbe in würziger Kokosmilchsauce mit Mehlklössen — Tobagos berühmtestes Gericht in den Strandrestaurants.', dishPrice: 200, dishPriceCHF: 29.9 },
      classic: { emoji: '🥙', name: 'Doubles',               desc: 'Zwei frittierte Mehlfladen mit Kichererbsen-Curry und Tamarinden-Chutney — Trinidads beliebtestes Strassenfrühstück.', dishPrice: 15, dishPriceCHF: 2.2 },
      budget:  { emoji: '🥧', name: 'Aloo Pie',              desc: 'Frittiertes Teiggebäck mit gewürztem Kartoffelmus — günstigster karibischer Strassensnack in Port of Spain.', dishPrice: 8, dishPriceCHF: 1.2 } } },

  // ── NEU: Afrika ──
  MU: { name: 'Mauritius', flag: '🇲🇺', currency: 'MUR', continent: 'Afrika', geo: [57.5, -20, 8],
    dishes: {
      premium: { emoji: '🦞', name: 'Langouste Grillée',     desc: 'Gegrillte Langusten-Hälfte mit Kräuterbutter und tropischen Beilagen — Mauritius\' exklusivstes Meeresfrüchte-Gericht in Strandrestaurants.', dishPrice: 3500, dishPriceCHF: 77.8 },
      classic: { emoji: '🫓', name: 'Dholl Puri',            desc: 'Hauchdünnes Fladenbrot gefüllt mit gelben Erbsen, Curry und Chutney — Mauritius\' beliebtestes Strassengericht aller Kulturen.', dishPrice: 50, dishPriceCHF: 1.1 },
      budget:  { emoji: '🌶️', name: 'Gâteau Piment',         desc: 'Frittierter Chili-Kichererbsenbiskuit — Mauritius\' günstigster und populärster Strassensnack an jedem Markt.', dishPrice: 10, dishPriceCHF: 0.22 } } },

  SC: { name: 'Seychellen', flag: '🇸🇨', currency: 'SCR', continent: 'Afrika', geo: [55.5, -4.6, 8],
    dishes: {
      premium: { emoji: '🐟', name: 'Bouillon Bréde',        desc: 'Gegrillter Red Snapper in Kokosmilch-Curry mit Bok Choy — das kulinarische Juwel der seychellischen Restaurantküche.', dishPrice: 550, dishPriceCHF: 40.7 },
      classic: { emoji: '🍛', name: 'Pwason Roti',           desc: 'Gegrillter Thunfisch mit Chili-Knoblauch-Limetten-Marinade und Brotfrucht — Mahés Alltagsgericht am Fischerkai.', dishPrice: 150, dishPriceCHF: 11.1 },
      budget:  { emoji: '🍚', name: 'Ladob',                 desc: 'Brotfrucht oder Banane in Kokosmilch mit Vanille geschmort — Seychellens günstigstes traditionelles Dessertgericht.', dishPrice: 50, dishPriceCHF: 3.7 } } },

  BW: { name: 'Botswana', flag: '🇧🇼', currency: 'BWP', continent: 'Afrika', geo: [24, -22, 4],
    dishes: {
      premium: { emoji: '🦌', name: 'Kudu-Steak',            desc: 'Gegrilltes Kudufleisch mit Morula-Sauce — das exklusivste Wildfleischgericht in Botswanas Safari-Lodges am Okavango.', dishPrice: 350, dishPriceCHF: 25.9 },
      classic: { emoji: '🍖', name: 'Seswaa & Pap',          desc: 'Zart zerfasertes Rindfleisch über Maismahlzeit — Botswanas Nationalgericht zu jedem Familienfest und Staatszeremonie.', dishPrice: 80, dishPriceCHF: 5.9 },
      budget:  { emoji: '🍩', name: 'Magwinya',              desc: 'Frittierter Teigklumpen — Botswanas günstigstes und beliebtestes Frühstück an jedem Strassenstand in Gaborone.', dishPrice: 5, dishPriceCHF: 0.37 } } },

  ZM: { name: 'Sambia', flag: '🇿🇲', currency: 'ZMW', continent: 'Afrika', geo: [28, -14, 4],
    dishes: {
      premium: { emoji: '🦌', name: 'Impala Steak',          desc: 'Gegrilltes Impalafleisch mit Zitronengras und Chili — das Wildfleischgericht in Sambias Safari-Camps am Sambesi.', dishPrice: 800, dishPriceCHF: 30.8 },
      classic: { emoji: '🫕', name: 'Nshima & Relish',       desc: 'Festgekochte Maisbrei-Polenta mit Bohnen- oder Fleischsauce — Sambias Grundnahrungsmittel dreimal täglich.', dishPrice: 80, dishPriceCHF: 3.1 },
      budget:  { emoji: '🍩', name: 'Vitumbuwa',             desc: 'Süsse frittierte Maismehlteignuggets — Lusaka\'s günstigster Morgensnack auf jedem Stadtmarkt.', dishPrice: 10, dishPriceCHF: 0.38 } } },

  MZ: { name: 'Mosambik', flag: '🇲🇿', currency: 'MZN', continent: 'Afrika', geo: [35, -18, 4],
    dishes: {
      premium: { emoji: '🦐', name: 'Camarão Grelhado',      desc: 'Gegrillte Riesengarnelen mit Piri-Piri und Knoblauchbutter — Maputos berühmtestes Meeresfrüchte-Gericht, weltbekannte Delikatesse.', dishPrice: 2500, dishPriceCHF: 39.7 },
      classic: { emoji: '🦪', name: 'Matata',                desc: 'Venusmuscheln in Erdnuss-Kokos-Sauce mit Kürbis — Mosambiks unverwechselbarster Eintopf der Küstenküche.', dishPrice: 450, dishPriceCHF: 7.1 },
      budget:  { emoji: '🥖', name: 'Pãozinho & Chá',        desc: 'Weiches Brötchen mit Tee — das günstigste portugiesisch geprägte Frühstück Maputos an jedem Bäcker.', dishPrice: 50, dishPriceCHF: 0.79 } } },

  LY: { name: 'Libyen', flag: '🇱🇾', currency: 'LYD', continent: 'Afrika', geo: [18, 27, 4],
    dishes: {
      premium: { emoji: '🐑', name: 'Couscous mit Lamm',     desc: 'Handgerollter Hartweizencouscous mit ganzem Lamm und sieben Gemüsesorten — Libyens Festgericht zu Eid und Familienfeiern.', dishPrice: 80, dishPriceCHF: 16.5 },
      classic: { emoji: '🍲', name: 'Bazeen',                desc: 'Fester Gerstenmehlbrei mit scharfer Fleischsauce — Libyens ursprüngslichstes Nationalgericht, in Tripolis und Bengasi traditionell.', dishPrice: 25, dishPriceCHF: 5.15 },
      budget:  { emoji: '🍯', name: 'Asida',                 desc: 'Weicher Maisbreifladen mit Honig und Butter — Libyens günstigstes traditionelles Frühstück in jedem Haushalt.', dishPrice: 8, dishPriceCHF: 1.65 } } },

  // ── NEU: Europa ──
  MK: { name: 'Nordmazedonien', flag: '🇲🇰', currency: 'MKD', continent: 'Europa', geo: [21.7, 41.6, 7],
    dishes: {
      premium: { emoji: '🥩', name: 'Jagneshki Kotli',       desc: 'Geschmortes Lammfleisch in Tontöpfen mit Paprika und Gewürzen — Nordmazedoniens festlichstes Ofengericht.', dishPrice: 1200, dishPriceCHF: 19.7 },
      classic: { emoji: '🫘', name: 'Tavche Gravche',        desc: 'Weisse Bohnen langsam im Tontopf gebacken mit Paprika und Zwiebeln — Nordmazedoniens nationales Trostgericht.', dishPrice: 350, dishPriceCHF: 5.7 },
      budget:  { emoji: '🫓', name: 'Burek so Sirenje',      desc: 'Blätterteig-Pastete mit weissem Schafskäse — Skopjes günstigstes und beliebtestes Frühstück an jeder Ecke.', dishPrice: 80, dishPriceCHF: 1.3 } } },

  BA: { name: 'Bosnien-Herzegowina', flag: '🇧🇦', currency: 'BAM', continent: 'Europa', geo: [17.7, 44.2, 6],
    dishes: {
      premium: { emoji: '🍲', name: 'Begova Čorba',          desc: 'Cremige Hühnersuppe mit Okra und Zitronensaft — Sarajevos altehrwürdige Beg-Suppe aus osmanischer Kaiserzeit.', dishPrice: 30, dishPriceCHF: 15.4 },
      classic: { emoji: '🌯', name: 'Ćevapi',                desc: 'Gegrillte Rindfleisch-Hackwürstchen im Somun-Fladenbrot mit Kajmak und Ajvar — Bosniens unumstrittenes Nationalgericht.', dishPrice: 10, dishPriceCHF: 5.1 },
      budget:  { emoji: '🥐', name: 'Burek sa Mesom',        desc: 'Spiralförmige Blätterteig-Rolle mit Hackfleischfüllung — Sarajevos günstigstes Frühstück und Strassenessen.', dishPrice: 4, dishPriceCHF: 2.1 } } }
};

const ISO_ZU_CODE = {
  '392':'JP','410':'KR','764':'TH','356':'IN','156':'CN','360':'ID','704':'VN',
  '756':'CH','276':'DE','040':'AT','250':'FR','380':'IT','724':'ES','620':'PT',
  '826':'GB','056':'BE','528':'NL','208':'DK','578':'NO','752':'SE','246':'FI',
  '352':'IS','300':'GR','191':'HR','792':'TR','643':'RU',
  '124':'CA','840':'US','484':'MX','188':'CR','170':'CO','076':'BR','604':'PE',
  '152':'CL','032':'AR',
  '818':'EG','788':'TN','012':'DZ','504':'MA','686':'SN','566':'NG','710':'ZA','450':'MG',
  '682':'SA','036':'AU','554':'NZ',
  '702':'SG','158':'TW','458':'MY','116':'KH','144':'LK',
  '784':'AE','376':'IL','400':'JO',
  '616':'PL','203':'CZ','348':'HU','404':'KE','268':'GE',
  '608':'PH','524':'NP','496':'MN','104':'MM',
  '642':'RO','100':'BG','804':'UA','688':'RS',
  '231':'ET','834':'TZ','288':'GH',
  '634':'QA','364':'IR',
  '192':'CU','068':'BO','858':'UY',
  '586':'PK','418':'LA','462':'MV',
  '008':'AL','372':'IE','498':'MD',
  '214':'DO','388':'JM','591':'PA',
  '218':'EC','600':'PY','862':'VE',
  '646':'RW','516':'NA','800':'UG',
  '242':'FJ','258':'PF','598':'PG',
  '344':'HK','446':'MO','096':'BN','050':'BD',
  '414':'KW','512':'OM','048':'BH','368':'IQ',
  '031':'AZ','051':'AM','398':'KZ','860':'UZ','762':'TJ','795':'TM',
  '320':'GT','340':'HN','558':'NI','780':'TT',
  '480':'MU','690':'SC','072':'BW','894':'ZM','508':'MZ','434':'LY',
  '807':'MK','070':'BA'
};

const HOME_CURRENCIES = {
  CH:{code:'CHF',flag:'🇨🇭'}, DE:{code:'EUR',flag:'🇩🇪'}, AT:{code:'EUR',flag:'🇦🇹'},
  FR:{code:'EUR',flag:'🇫🇷'}, IT:{code:'EUR',flag:'🇮🇹'}, ES:{code:'EUR',flag:'🇪🇸'},
  NL:{code:'EUR',flag:'🇳🇱'}, BE:{code:'EUR',flag:'🇧🇪'}, GR:{code:'EUR',flag:'🇬🇷'},
  FI:{code:'EUR',flag:'🇫🇮'}, PT:{code:'EUR',flag:'🇵🇹'},
  US:{code:'USD',flag:'🇺🇸'}, CA:{code:'CAD',flag:'🇨🇦'}, GB:{code:'GBP',flag:'🇬🇧'},
  JP:{code:'JPY',flag:'🇯🇵'}, KR:{code:'KRW',flag:'🇰🇷'}, CN:{code:'CNY',flag:'🇨🇳'},
  AU:{code:'AUD',flag:'🇦🇺'}, NZ:{code:'NZD',flag:'🇳🇿'}, BR:{code:'BRL',flag:'🇧🇷'},
  IN:{code:'INR',flag:'🇮🇳'}, MX:{code:'MXN',flag:'🇲🇽'}, NO:{code:'NOK',flag:'🇳🇴'},
  SE:{code:'SEK',flag:'🇸🇪'}, DK:{code:'DKK',flag:'🇩🇰'}, RU:{code:'RUB',flag:'🇷🇺'},
  SG:{code:'SGD',flag:'🇸🇬'}, TW:{code:'TWD',flag:'🇹🇼'}, MY:{code:'MYR',flag:'🇲🇾'},
  AE:{code:'AED',flag:'🇦🇪'}, IL:{code:'ILS',flag:'🇮🇱'}, PL:{code:'PLN',flag:'🇵🇱'},
  CZ:{code:'CZK',flag:'🇨🇿'}, HU:{code:'HUF',flag:'🇭🇺'}, KE:{code:'KES',flag:'🇰🇪'},
  GE:{code:'GEL',flag:'🇬🇪'},
  PH:{code:'PHP',flag:'🇵🇭'}, NP:{code:'NPR',flag:'🇳🇵'}, MN:{code:'MNT',flag:'🇲🇳'}, MM:{code:'MMK',flag:'🇲🇲'},
  RO:{code:'RON',flag:'🇷🇴'}, BG:{code:'BGN',flag:'🇧🇬'}, UA:{code:'UAH',flag:'🇺🇦'}, RS:{code:'RSD',flag:'🇷🇸'},
  ET:{code:'ETB',flag:'🇪🇹'}, TZ:{code:'TZS',flag:'🇹🇿'}, GH:{code:'GHS',flag:'🇬🇭'},
  QA:{code:'QAR',flag:'🇶🇦'}, IR:{code:'IRR',flag:'🇮🇷'},
  CU:{code:'CUP',flag:'🇨🇺'}, BO:{code:'BOB',flag:'🇧🇴'}, UY:{code:'UYU',flag:'🇺🇾'},
  PK:{code:'PKR',flag:'🇵🇰'}, LA:{code:'LAK',flag:'🇱🇦'}, MV:{code:'MVR',flag:'🇲🇻'},
  AL:{code:'ALL',flag:'🇦🇱'}, IE:{code:'EUR',flag:'🇮🇪'}, MD:{code:'MDL',flag:'🇲🇩'},
  DO:{code:'DOP',flag:'🇩🇴'}, JM:{code:'JMD',flag:'🇯🇲'}, PA:{code:'USD',flag:'🇵🇦'},
  EC:{code:'USD',flag:'🇪🇨'}, PY:{code:'PYG',flag:'🇵🇾'}, VE:{code:'VES',flag:'🇻🇪'},
  RW:{code:'RWF',flag:'🇷🇼'}, NA:{code:'NAD',flag:'🇳🇦'}, UG:{code:'UGX',flag:'🇺🇬'},
  FJ:{code:'FJD',flag:'🇫🇯'}, PF:{code:'XPF',flag:'🇵🇫'}, PG:{code:'PGK',flag:'🇵🇬'},
  HK:{code:'HKD',flag:'🇭🇰'}, MO:{code:'MOP',flag:'🇲🇴'}, BN:{code:'BND',flag:'🇧🇳'}, BD:{code:'BDT',flag:'🇧🇩'},
  KW:{code:'KWD',flag:'🇰🇼'}, OM:{code:'OMR',flag:'🇴🇲'}, BH:{code:'BHD',flag:'🇧🇭'}, IQ:{code:'IQD',flag:'🇮🇶'},
  AZ:{code:'AZN',flag:'🇦🇿'}, AM:{code:'AMD',flag:'🇦🇲'}, KZ:{code:'KZT',flag:'🇰🇿'}, UZ:{code:'UZS',flag:'🇺🇿'},
  TJ:{code:'TJS',flag:'🇹🇯'}, TM:{code:'TMT',flag:'🇹🇲'},
  GT:{code:'GTQ',flag:'🇬🇹'}, HN:{code:'HNL',flag:'🇭🇳'}, NI:{code:'NIO',flag:'🇳🇮'}, TT:{code:'TTD',flag:'🇹🇹'},
  MU:{code:'MUR',flag:'🇲🇺'}, SC:{code:'SCR',flag:'🇸🇨'}, BW:{code:'BWP',flag:'🇧🇼'},
  ZM:{code:'ZMW',flag:'🇿🇲'}, MZ:{code:'MZN',flag:'🇲🇿'}, LY:{code:'LYD',flag:'🇱🇾'},
  MK:{code:'MKD',flag:'🇲🇰'}, BA:{code:'BAM',flag:'🇧🇦'}
};

const CURRENCY_LIST = [
  {code:'CHF',flag:'🇨🇭',label:'Schweizer Franken'},{code:'EUR',flag:'🇪🇺',label:'Euro'},
  {code:'USD',flag:'🇺🇸',label:'US-Dollar'},{code:'GBP',flag:'🇬🇧',label:'Britisches Pfund'},
  {code:'JPY',flag:'🇯🇵',label:'Japanischer Yen'},{code:'KRW',flag:'🇰🇷',label:'Südkoreanischer Won'},
  {code:'CNY',flag:'🇨🇳',label:'Chinesischer Yuan'},{code:'AUD',flag:'🇦🇺',label:'Australischer Dollar'},
  {code:'NZD',flag:'🇳🇿',label:'Neuseeland-Dollar'},{code:'CAD',flag:'🇨🇦',label:'Kanadischer Dollar'},
  {code:'NOK',flag:'🇳🇴',label:'Norwegische Krone'},{code:'SEK',flag:'🇸🇪',label:'Schwedische Krone'},
  {code:'DKK',flag:'🇩🇰',label:'Dänische Krone'},{code:'ISK',flag:'🇮🇸',label:'Isländische Krone'},
  {code:'INR',flag:'🇮🇳',label:'Indische Rupie'},{code:'BRL',flag:'🇧🇷',label:'Brasilianischer Real'},
  {code:'MXN',flag:'🇲🇽',label:'Mexikanischer Peso'},{code:'CLP',flag:'🇨🇱',label:'Chilenischer Peso'},
  {code:'PEN',flag:'🇵🇪',label:'Peruanischer Sol'},{code:'COP',flag:'🇨🇴',label:'Kolumbianischer Peso'},
  {code:'ARS',flag:'🇦🇷',label:'Argentinischer Peso'},{code:'RUB',flag:'🇷🇺',label:'Russischer Rubel'},
  {code:'TRY',flag:'🇹🇷',label:'Türkische Lira'},{code:'SAR',flag:'🇸🇦',label:'Saudi-Riyal'},
  {code:'MAD',flag:'🇲🇦',label:'Marokkanischer Dirham'},{code:'EGP',flag:'🇪🇬',label:'Ägyptisches Pfund'},
  {code:'TND',flag:'🇹🇳',label:'Tunesischer Dinar'},{code:'DZD',flag:'🇩🇿',label:'Algerischer Dinar'},
  {code:'ZAR',flag:'🇿🇦',label:'Südafrikanischer Rand'},{code:'NGN',flag:'🇳🇬',label:'Nigerianische Naira'},
  {code:'IDR',flag:'🇮🇩',label:'Indonesische Rupiah'},{code:'THB',flag:'🇹🇭',label:'Thailändischer Baht'},
  {code:'VND',flag:'🇻🇳',label:'Vietnamesischer Dong'},{code:'SGD',flag:'🇸🇬',label:'Singapur-Dollar'},
  {code:'TWD',flag:'🇹🇼',label:'Neuer Taiwan-Dollar'},
  {code:'MYR',flag:'🇲🇾',label:'Malaysischer Ringgit'},
  {code:'KHR',flag:'🇰🇭',label:'Kambodschanischer Riel'},
  {code:'LKR',flag:'🇱🇰',label:'Sri-lankische Rupie'},
  {code:'AED',flag:'🇦🇪',label:'Dirham (VAE)'},
  {code:'ILS',flag:'🇮🇱',label:'Israelischer Schekel'},
  {code:'JOD',flag:'🇯🇴',label:'Jordanischer Dinar'},
  {code:'PLN',flag:'🇵🇱',label:'Polnischer Zloty'},
  {code:'CZK',flag:'🇨🇿',label:'Tschechische Krone'},
  {code:'HUF',flag:'🇭🇺',label:'Ungarischer Forint'},
  {code:'KES',flag:'🇰🇪',label:'Kenianischer Schilling'},
  {code:'GEL',flag:'🇬🇪',label:'Georgischer Lari'},
  {code:'PHP',flag:'🇵🇭',label:'Philippinischer Peso'},
  {code:'NPR',flag:'🇳🇵',label:'Nepalesische Rupie'},
  {code:'MNT',flag:'🇲🇳',label:'Mongolischer Tögrög'},
  {code:'MMK',flag:'🇲🇲',label:'Myanmarischer Kyat'},
  {code:'RON',flag:'🇷🇴',label:'Rumänischer Leu'},
  {code:'BGN',flag:'🇧🇬',label:'Bulgarischer Lew'},
  {code:'UAH',flag:'🇺🇦',label:'Ukrainische Hrywnja'},
  {code:'RSD',flag:'🇷🇸',label:'Serbischer Dinar'},
  {code:'ETB',flag:'🇪🇹',label:'Äthiopischer Birr'},
  {code:'TZS',flag:'🇹🇿',label:'Tansanischer Schilling'},
  {code:'GHS',flag:'🇬🇭',label:'Ghanaischer Cedi'},
  {code:'QAR',flag:'🇶🇦',label:'Katarischer Riyal'},
  {code:'IRR',flag:'🇮🇷',label:'Iranischer Rial'},
  {code:'CUP',flag:'🇨🇺',label:'Kubanischer Peso'},
  {code:'BOB',flag:'🇧🇴',label:'Bolivianischer Boliviano'},
  {code:'UYU',flag:'🇺🇾',label:'Uruguayischer Peso'},
  {code:'PKR',flag:'🇵🇰',label:'Pakistanische Rupie'},
  {code:'LAK',flag:'🇱🇦',label:'Laotischer Kip'},
  {code:'MVR',flag:'🇲🇻',label:'Maledivische Rufiyaa'},
  {code:'ALL',flag:'🇦🇱',label:'Albanischer Lek'},
  {code:'MDL',flag:'🇲🇩',label:'Moldauischer Leu'},
  {code:'DOP',flag:'🇩🇴',label:'Dominikanischer Peso'},
  {code:'JMD',flag:'🇯🇲',label:'Jamaikanischer Dollar'},
  {code:'PYG',flag:'🇵🇾',label:'Paraguayischer Guaraní'},
  {code:'VES',flag:'🇻🇪',label:'Venezolanischer Bolívar'},
  {code:'RWF',flag:'🇷🇼',label:'Ruandischer Franc'},
  {code:'NAD',flag:'🇳🇦',label:'Namibischer Dollar'},
  {code:'UGX',flag:'🇺🇬',label:'Ugandischer Schilling'},
  {code:'FJD',flag:'🇫🇯',label:'Fidschianischer Dollar'},
  {code:'XPF',flag:'🇵🇫',label:'CFP-Franc (Pazifik)'},
  {code:'PGK',flag:'🇵🇬',label:'Papua-Neuguineanische Kina'},
  {code:'HKD',flag:'🇭🇰',label:'Hongkong-Dollar'},
  {code:'MOP',flag:'🇲🇴',label:'Macao-Pataca'},
  {code:'BND',flag:'🇧🇳',label:'Brunei-Dollar'},
  {code:'BDT',flag:'🇧🇩',label:'Bangladeschischer Taka'},
  {code:'KWD',flag:'🇰🇼',label:'Kuwaitischer Dinar'},
  {code:'OMR',flag:'🇴🇲',label:'Omanischer Rial'},
  {code:'BHD',flag:'🇧🇭',label:'Bahrainischer Dinar'},
  {code:'IQD',flag:'🇮🇶',label:'Irakischer Dinar'},
  {code:'AZN',flag:'🇦🇿',label:'Aserbaidschanischer Manat'},
  {code:'AMD',flag:'🇦🇲',label:'Armenischer Dram'},
  {code:'KZT',flag:'🇰🇿',label:'Kasachischer Tenge'},
  {code:'UZS',flag:'🇺🇿',label:'Usbekischer Sum'},
  {code:'TJS',flag:'🇹🇯',label:'Tadschikischer Somoni'},
  {code:'TMT',flag:'🇹🇲',label:'Turkmenischer Manat'},
  {code:'GTQ',flag:'🇬🇹',label:'Guatemaltekischer Quetzal'},
  {code:'HNL',flag:'🇭🇳',label:'Honduranische Lempira'},
  {code:'NIO',flag:'🇳🇮',label:'Nicaraguanischer Córdoba'},
  {code:'TTD',flag:'🇹🇹',label:'Trinidad-und-Tobago-Dollar'},
  {code:'MUR',flag:'🇲🇺',label:'Mauritische Rupie'},
  {code:'SCR',flag:'🇸🇨',label:'Seychellische Rupie'},
  {code:'BWP',flag:'🇧🇼',label:'Botswanischer Pula'},
  {code:'ZMW',flag:'🇿🇲',label:'Sambischer Kwacha'},
  {code:'MZN',flag:'🇲🇿',label:'Mosambikanischer Metical'},
  {code:'LYD',flag:'🇱🇾',label:'Libyscher Dinar'},
  {code:'MKD',flag:'🇲🇰',label:'Nordmazedonischer Denar'},
  {code:'BAM',flag:'🇧🇦',label:'Bosnisch-Herzegowinische Mark'}
];

// ── GLOBALE FORMATTER (einmalig erstellt, überall wiederverwendet) ──
const FMT_0    = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 0 });
const FMT_1    = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 1 });
const FMT_2    = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 2 });
const FMT_2FIX = new Intl.NumberFormat('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ── MODUL-KONSTANTEN ──
const TIER_BADGES = {
  premium: { label: '💎 Premium',            klasse: 'tier-badge--premium' },
  classic: { label: '🍽 Classic · Richtwert', klasse: 'tier-badge--classic' },
  budget:  { label: '🪙 Budget',              klasse: 'tier-badge--budget'  }
};

const VGL_TIERS = [
  { key: 'premium', emoji: '💎', label: 'Premium' },
  { key: 'classic', emoji: '🍽', label: 'Classic' },
  { key: 'budget',  emoji: '🪙', label: 'Budget'  }
];

function lci_label(lci) {
  if (lci >= 1.3)  return '<span style="color:var(--forest)">günstiger</span>';
  if (lci <= 0.77) return '<span style="color:var(--red)">teurer</span>';
  return '<span style="color:var(--muted)">ähnlich</span>';
}

// ── GLOBALE VARIABLEN ──
let aktives_land     = null;
let aktiver_tier     = 'classic';
const BUDGET_MAX     = 99999;
let vergleich_modus  = false;
let vergleich_land_1 = null;
let heimwaehrung     = 'CHF';
let heim_flag        = '🇨🇭';
let heimland_iso          = 'CH'; // CHF/Schweiz als sicherer Fallback — wird von erkenne_heimland() überschrieben
let heimland_name         = 'Schweiz';   // Name des Heimlandes für Panel-Anzeige
let heimwaehrung_via_url  = false;       // gesetzt wenn ?waehrung= URL-Param vorhanden
let kurs_cache          = null;
let aktiver_kontinent   = null;
let d3_zoom_obj      = null;
let d3_svg           = null;
let d3_projektion    = null;
let karte_breite     = 0;
let karte_hoehe      = 0;
let karte_gruppe     = null;
let welt_atlas       = null; // gecachte Atlas-Daten, kein Re-Fetch bei Resize
let touch_abort      = null; // AbortController für Touch-Listener
let panel_kurse      = null;        // gespeicherte Kurse für Tier-Wechsel
let panel_land       = null;        // gespeichertes Land für Tier-Wechsel
let panel_budget_ziel = 0;

// ── ZAHL-ANIMATION ──
function zaehle_hoch(el, zielwert, suffix, dauer, dezimal) {
  const start = performance.now();
  const fmt   = dezimal === 1 ? FMT_1 : FMT_0;
  if (el._animation) cancelAnimationFrame(el._animation);
  function tick(now) {
    const t     = Math.min((now - start) / dauer, 1);
    const ease  = 1 - Math.pow(1 - t, 3);
    const wert  = dezimal ? zielwert * ease : Math.round(zielwert * ease);
    el.textContent = fmt.format(wert) + suffix;
    if (t < 1) { el._animation = requestAnimationFrame(tick); }
    else        { el._animation = null; }
  }
  el._animation = requestAnimationFrame(tick);
}

// ── API ──
async function lade_kurse() {
  if (kurs_cache) return kurs_cache;
  try {
    const antwort = await fetch('https://apip.cc/rates.json');
    const daten   = await antwort.json();
    kurs_cache    = daten.rates;
    return kurs_cache;
  } catch (fehler) {
    console.error('Kurse konnten nicht geladen werden:', fehler);
    return false;
  }
}

function umrechnen(betrag, von, nach, kurse) {
  if (von === nach) return betrag;
  return (betrag / kurse[von]) * kurse[nach];
}

// Heimland erkennen
async function erkenne_heimland() {
  let erkannt     = { code: 'CHF', flag: '🇨🇭' };
  let erkannt_iso = 'CH';
  try {
    const antwort      = await fetch('https://apip.cc/json');
    const daten        = await antwort.json();
    const laender_code = daten.country_code || daten.countryCode || '';
    if (laender_code) erkannt_iso = laender_code; // Fallback 'CH' nur überschreiben wenn API antwortet
    const gefunden     = HOME_CURRENCIES[laender_code];
    if (gefunden) erkannt = gefunden;
    // Heimland-Namen aus COUNTRIES oder aus IP-Daten
    const land_code = Object.keys(COUNTRIES).find(function(k) {
      return k === laender_code || ISO_ZU_CODE[String(
        Object.keys(ISO_ZU_CODE).find(function(iso) { return ISO_ZU_CODE[iso] === k; })
      )] === laender_code;
    });
    if (land_code && COUNTRIES[land_code]) {
      heimland_name = COUNTRIES[land_code].name;
    } else if (daten.country_name) {
      // Rohname aus IP-API verwenden wenn Land nicht in unserer Datenbank
      heimland_name = daten.country_name;
    }
    // Wenn erkannt_iso nicht in HOME_CURRENCIES: kein Highlight
    // Nur wenn laender_code auch wirklich zurückgekommen ist (leerer String = Fallback behalten)
    if (laender_code && !HOME_CURRENCIES[laender_code]) {
      erkannt_iso = null;
    }
  } catch (fehler) {
    console.log('IP-Erkennung fehlgeschlagen, verwende CHF');
  }
  heimland_iso = erkannt_iso;
  // URL-Param ?waehrung= hat Priorität — nicht überschreiben
  if (!heimwaehrung_via_url) wende_heimwaehrung_an(erkannt.code, erkannt.flag, false);
  markiere_heimatland();
}

// Heimatland markieren (Citrus-Pulse, weiterhin klickbar)
function markiere_heimatland() {
  if (!karte_gruppe || !heimland_iso) return;
  karte_gruppe.selectAll('.country-land.heimatland').classed('heimatland', false);
  karte_gruppe.selectAll('.country-land')
    .filter(function(d) {
      return ISO_ZU_CODE[String(d.id).padStart(3, '0')] === heimland_iso;
    })
    .classed('heimatland', true);
}

// ── LCI (Classic-Tier, Live-Wechselkurs) ──
// Berechnet: Portionen Classic im Reiseland ÷ Portionen Classic in der Schweiz
// Verwendet budget_ziel (in Lokalwährung) + budget (in Heimwährung)
// Konsistent mit den Balken in zeige_dish_karte()
function berechne_lci(land, budget, budget_ziel, kurse) {
  const p_ziel = Math.floor(budget_ziel / land.dishes.classic.dishPrice);
  const ch_preis = umrechnen(SCHWEIZ_GERICHTE.classic.dishPriceCHF, 'CHF', heimwaehrung, kurse);
  const p_heim = Math.floor(budget / ch_preis);
  if (p_heim === 0) return 1;
  return p_ziel / p_heim;
}

function zeige_lci(lci) {
  const block   = document.getElementById('lci-block');
  const zahl_el = document.getElementById('lci-zahl');
  const sub_el  = document.getElementById('lci-sub');
  if (!block) return;
  block.className = 'lci-block';
  let sub = '';
  if (lci >= 1.3)      { block.classList.add('lci-block--gut');    sub = 'günstiger'; }
  else if (lci <= 0.77){ block.classList.add('lci-block--teuer');  sub = 'teurer'; }
  else                 { block.classList.add('lci-block--mittel'); sub = 'ähnlich CH'; }
  zaehle_hoch(zahl_el, lci, '×', 600, 1);
  sub_el.textContent  = sub;
  block.style.display = 'flex';
}

// ── PANEL ──
function oeffne_panel(land_code) {
  const land = COUNTRIES[land_code];
  if (!land) return;
  if (land_code === heimland_iso) return; // Heimatland ist kein Reiseziel — kein Panel, kein Zoom
  aktives_land = land_code;
  aktiver_tier = 'classic'; // immer mit Classic starten
  aktualisiere_herz_btn(land_code);
  setze_aktiven_nav('nav-karte');
  document.getElementById('panel-flag').textContent    = land.flag;
  document.getElementById('panel-country').textContent = land.name;
  document.getElementById('panel-meta').textContent    =
    `${land.continent}  ·  ${land.currency}  ·  ${CURRENCY_NAMES[land.currency] || land.currency}`;
  document.getElementById('budget-hero-label').textContent =
    `DEIN BUDGET IN ${land.name.toUpperCase()}`;
  document.getElementById('panel').classList.add('open');
  document.body.classList.add('panel-offen');
  aktualisiere_url();
  zoome_auf_land(land_code);
  lade_und_zeige_panel(land_code);
}

function schliesse_panel() {
  document.getElementById('panel').classList.remove('open');
  document.body.classList.remove('panel-offen');
  aktualisiere_url();
  document.getElementById('lci-block').style.display = 'none';
  document.getElementById('vergleich-btn').style.display = 'none';
  document.getElementById('rueck-rechner').style.display = 'none';
  if (d3_svg) d3_svg.selectAll('.country-land').classed('active', false);
  aktives_land = null;
  setze_aktiven_nav('nav-karte');
  if (d3_svg && d3_zoom_obj) {
    d3_svg.transition().duration(700).ease(d3.easeCubicInOut)
      .call(d3_zoom_obj.transform, d3.zoomIdentity)
      .on('end', markiere_heimatland);
  }
}

async function lade_und_zeige_panel(land_code) {
  const land      = COUNTRIES[land_code];
  const budget    = parseFloat(document.getElementById('budget-input').value) || 500;
  const lade_el   = document.getElementById('panel-loading');
  const fehler_el = document.getElementById('panel-error');

  lade_el.style.display = 'flex';
  fehler_el.textContent = '';
  document.getElementById('dish-card-wrap').innerHTML = '';
  document.getElementById('rueck-rechner').style.display = 'none';
  document.getElementById('lci-block').style.display  = 'none';

  try {
    const kurse = await lade_kurse();
    if (!kurse) throw new Error('Kurse nicht verfügbar');
    const umgerechnet = umrechnen(budget, heimwaehrung, land.currency, kurse);
    const kurs        = umgerechnet / budget;
    zaehle_hoch(document.getElementById('panel-converted'), Math.round(umgerechnet), ' ' + land.currency, 650);
    document.getElementById('panel-rate').textContent =
      `1 ${heimwaehrung} = ${kurs >= 100
        ? Math.round(kurs).toLocaleString('de-CH')
        : kurs.toFixed(4)} ${land.currency}`;

    // Craving subtitle mit echten Flaggen
    const heim_land_flag = HOME_CURRENCIES[heimland_iso]
      ? HOME_CURRENCIES[heimland_iso].flag : '🏠';
    document.getElementById('craving-subtitle').innerHTML =
      `<span class="craving-dest">${land.flag} ${land.name}</span>` +
      `<span class="craving-vs">vs.</span>` +
      `<span class="craving-home">${heim_land_flag} ${heimland_name}</span>`;

    // LCI — nach Wechselkursberechnung, mit umgerechnetem Budget + Live-Kursen
    const lci = berechne_lci(land, budget, umgerechnet, kurse);
    zeige_lci(lci);

    // Daten speichern für Tier-Wechsel
    panel_land       = land;
    panel_kurse      = kurse;
    panel_budget_ziel = umgerechnet;

    // Tier-Switcher Buttons aktivieren
    setup_tier_switcher();

    // Dish-Karte anzeigen (Standard: Classic)
    zeige_dish_karte(land, aktiver_tier, budget, umgerechnet, kurse);

    // Rückrechner (ersetzt Fazit)
    zeige_rueck_rechner(land, kurse);

    document.getElementById('vergleich-btn').style.display = 'flex';
    lade_el.style.display = 'none';
  } catch (fehler) {
    lade_el.style.display = 'none';
    fehler_el.textContent = 'Wechselkurs konnte nicht geladen werden.';
    console.error(fehler);
  }
}

// ── TIER SWITCHER ──
function setup_tier_switcher() {
  document.querySelectorAll('.tier-btn').forEach(function(btn) {
    btn.classList.remove('tier-btn--active');
    if (btn.getAttribute('data-tier') === aktiver_tier) {
      btn.classList.add('tier-btn--active');
    }
    btn.onclick = function() {
      aktiver_tier = btn.getAttribute('data-tier');
      document.querySelectorAll('.tier-btn').forEach(function(b) {
        b.classList.toggle('tier-btn--active', b.getAttribute('data-tier') === aktiver_tier);
      });
      if (panel_land && panel_kurse) {
        const budget = parseFloat(document.getElementById('budget-input').value) || 500;
        // Budget_ziel neu berechnen damit es zum aktuellen Budget passt
        const budget_ziel_aktuell = umrechnen(budget, heimwaehrung, panel_land.currency, panel_kurse);
        zeige_dish_karte(panel_land, aktiver_tier, budget, budget_ziel_aktuell, panel_kurse);
      }
    };
  });
}

// ── EINZELNE DISH-KARTE ──
function zeige_dish_karte(land, tier, budget, budget_ziel, kurse) {
  const wrap      = document.getElementById('dish-card-wrap');
  const dish      = land.dishes[tier];
  const ch_dish   = SCHWEIZ_GERICHTE[tier];
  const ch_preis  = umrechnen(ch_dish.dishPriceCHF, 'CHF', heimwaehrung, kurse);

  const p_ziel = Math.floor(budget_ziel / dish.dishPrice);
  const p_heim = Math.floor(budget / ch_preis);
  const max_p  = Math.max(p_ziel, p_heim, 1);
  const b_ziel = Math.min(100, Math.round(p_ziel / max_p * 100));
  const b_heim = Math.min(100, Math.round(p_heim / max_p * 100));

  // Dish-Preis live aus lokalem Preis berechnen (nicht den statischen dishPriceCHF verwenden)
  const dish_preis_heim = umrechnen(dish.dishPrice, land.currency, heimwaehrung, kurse);

  // Heimland-Infos
  const heim_flag_str = HOME_CURRENCIES[heimland_iso]
    ? HOME_CURRENCIES[heimland_iso].flag : '🏠';
  const heim_cur_name = CURRENCY_NAMES[heimwaehrung] || heimwaehrung;

  const badge = TIER_BADGES[tier];
  const is_classic = tier === 'classic';

  const div = document.createElement('div');
  div.className = 'dish-card-single' + (is_classic ? ' dish-card-single--classic' : '');
  div.innerHTML = `
    <!-- Tier-Badge -->
    <div class="tier-badge ${badge.klasse}">${badge.label}</div>

    <!-- Reiseziel-Gericht -->
    <div class="dish-dest">
      <div class="dish-dest-header">
        <div class="dish-emoji-bg dish-emoji-bg--dest">${dish.emoji}</div>
        <div class="dish-info">
          <div class="dish-name">${land.flag} ${land.name}</div>
          <div class="dish-gericht-name">${dish.name}</div>
          <div class="dish-desc">${dish.desc}</div>
        </div>
      </div>
      <div class="dish-price-row">
        <span class="dish-price-lokal">${FMT_0.format(dish.dishPrice)} ${land.currency}</span>
        <span class="dish-price-cur-name">${CURRENCY_NAMES[land.currency] || land.currency}</span>
        <span class="dish-price-chf">≈ ${heimwaehrung} ${FMT_2.format(dish_preis_heim)}</span>
      </div>
    </div>

    <!-- Portionen-Vergleich -->
    <div class="dish-portionen">
      <div class="dish-portionen-row">
        <span class="dish-portionen-flag">${land.flag}</span>
        <span class="dish-portionen-label">${land.name}
          <span class="dish-cur-label">${land.currency} · ${CURRENCY_NAMES[land.currency] || land.currency}</span>
        </span>
        <span class="dish-portionen-count dish-portionen-count--dest">${p_ziel}×</span>
      </div>
      <div class="cbar-track">
        <div class="cbar-fill cbar-fill--dest" id="bar-dest" style="width:0%"></div>
      </div>

      <div class="dish-portionen-row" style="margin-top:4px;">
        <span class="dish-portionen-flag">${heim_flag_str}</span>
        <span class="dish-portionen-label">${heimland_name}
          <span class="dish-cur-label">${heimwaehrung} · ${heim_cur_name}</span>
        </span>
        <span class="dish-portionen-count dish-portionen-count--home">${p_heim}×</span>
      </div>
      <div class="cbar-track">
        <div class="cbar-fill cbar-fill--home" id="bar-home" style="width:0%"></div>
      </div>
    </div>

    <div class="dish-separator"></div>

    <!-- Heimat-Vergleichsgericht -->
    <div class="dish-dest">
      <div class="dish-dest-header">
        <div class="dish-emoji-bg dish-emoji-bg--home">${ch_dish.emoji}</div>
        <div class="dish-info">
          <div class="dish-name">${heim_flag_str} ${heimland_name}</div>
          <div class="dish-gericht-name">${ch_dish.name}</div>
          <div class="dish-desc">${ch_dish.desc}</div>
        </div>
      </div>
      <div class="dish-price-row">
        <span class="dish-price-lokal" style="color:var(--citrus);">${FMT_2.format(ch_preis)} ${heimwaehrung}</span>
        <span class="dish-price-cur-name">${heim_cur_name}</span>
        ${heimwaehrung !== 'CHF' ? `<span class="dish-price-chf">≈ CHF ${ch_dish.dishPriceCHF}</span>` : ''}
      </div>
    </div>
  `;
  wrap.innerHTML = '';
  wrap.appendChild(div);

  setTimeout(function() {
    const bd = document.getElementById('bar-dest');
    const bh = document.getElementById('bar-home');
    if (bd) bd.style.width = b_ziel + '%';
    if (bh) bh.style.width = b_heim + '%';
  }, 100);
}

// ── RÜCKRECHNER ──
function zeige_rueck_rechner(land, kurse) {
  const el = document.getElementById('rueck-rechner');
  document.getElementById('rueck-ziel-waehrung').textContent = land.currency;
  document.getElementById('rueck-heim-waehrung').textContent = heimwaehrung;
  document.getElementById('rueck-sub').textContent =
    `${land.flag} ${land.currency} → ${heimwaehrung}`;
  document.getElementById('rueck-input').value   = '';
  document.getElementById('rueck-ergebnis').textContent = '—';
  el.style.display = 'flex';
}

// Formatiert das Eingabefeld live: Apostrophe als Tausendertrennzeichen
function format_rueck_input() {
  const el = document.getElementById('rueck-input');
  const cursor = el.selectionStart;
  const old_val = el.value;

  // Cursor-Position in "rohen" Zeichen (ohne Apostrophe)
  let raw_cursor = 0;
  for (let i = 0; i < cursor; i++) {
    if (old_val[i] !== "'") raw_cursor++;
  }

  // Rohwert bereinigen: nur Ziffern + ein Dezimaltrenner (Komma oder Punkt)
  const raw = old_val.replace(/'/g, '').replace(/[^\d.,]/g, '');

  // Ganzzahl- und Dezimalteil trennen
  const sep_idx = raw.search(/[.,]/);
  let int_str, rest;
  if (sep_idx >= 0) {
    int_str = raw.slice(0, sep_idx);
    rest    = raw.slice(sep_idx); // Trennzeichen + Dezimalstellen
  } else {
    int_str = raw;
    rest    = '';
  }

  // Apostrophe als Tausendertrennzeichen im Ganzzahlteil einfügen
  const fmt_int = int_str.replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  const new_val = fmt_int + rest;

  // Neue Cursor-Position berechnen: raw_cursor Nicht-Apostrophe vorwärts zählen
  let new_cursor = 0;
  let raw_count  = 0;
  for (let i = 0; i < new_val.length; i++) {
    if (raw_count >= raw_cursor) break;
    new_cursor = i + 1;
    if (new_val[i] !== "'") raw_count++;
  }
  if (raw_count < raw_cursor) new_cursor = new_val.length;

  el.value = new_val;
  try { el.setSelectionRange(new_cursor, new_cursor); } catch(e) {}
}

function update_rueck_rechner() {
  // Apostrophe entfernen und Komma normalisieren vor dem Parsen
  const raw = document.getElementById('rueck-input').value
    .replace(/'/g, '').replace(',', '.');
  const ergebnis_el = document.getElementById('rueck-ergebnis');
  const wert = parseFloat(raw);
  if (!wert || wert <= 0 || !aktives_land || !panel_kurse) {
    ergebnis_el.textContent = '—';
    return;
  }
  const ziel_waehrung = COUNTRIES[aktives_land].currency;
  const result = umrechnen(wert, ziel_waehrung, heimwaehrung, panel_kurse);
  ergebnis_el.textContent = FMT_2FIX.format(result);
}

// ── HEIMWÄHRUNG ──
function wende_heimwaehrung_an(code, flag, manuell = false) {
  heimwaehrung = code; heim_flag = flag;
  document.getElementById('home-flag').textContent           = flag;
  document.getElementById('home-currency-label').textContent = code;
  if (aktives_land) lade_und_zeige_panel(aktives_land);
  if (manuell) aktualisiere_url();
}

// ── WÄHRUNGSWÄHLER ──
function baue_waehrungswähler() {
  const wrap  = document.getElementById('currency-picker-wrap');
  const suche = document.getElementById('currency-search');
  const liste = document.getElementById('currency-list');
  function render_liste(filter) {
    const s = filter.toLowerCase();
    liste.innerHTML = '';
    CURRENCY_LIST.filter(function(w) {
      return !s || w.code.toLowerCase().includes(s) || w.label.toLowerCase().includes(s);
    }).forEach(function(w) {
      const el = document.createElement('button');
      el.className = 'cp-item' + (w.code === heimwaehrung ? ' active' : '');
      el.innerHTML = `<span class="cp-flag">${w.flag}</span><span class="cp-code">${w.code}</span><span class="cp-label">${w.label}</span>`;
      el.addEventListener('click', function() { wende_heimwaehrung_an(w.code, w.flag, true); schliesse_picker(); });
      liste.appendChild(el);
    });
  }
  suche.addEventListener('input', function() { render_liste(suche.value); });
  document.getElementById('budget-bar-trigger').addEventListener('click', function(e) {
    e.stopPropagation();
    wrap.classList.contains('open') ? schliesse_picker() : oeffne_picker();
  });
  document.addEventListener('click', function(e) { if (!wrap.contains(e.target)) schliesse_picker(); });
  function oeffne_picker() {
    wrap.classList.add('open'); suche.value = ''; render_liste('');
    setTimeout(function() {
      const a = liste.querySelector('.cp-item.active');
      if (a) a.scrollIntoView({ block: 'nearest' });
      suche.focus();
    }, 50);
  }
  function schliesse_picker() { wrap.classList.remove('open'); suche.value = ''; }
  render_liste('');
}

// ── NAVIGATION ──
function setze_aktiven_nav(id) {
  document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// ── D3 KARTE ──
async function baue_d3_karte() {
  // Alte Touch-Listener sauber entfernen (AbortController)
  if (touch_abort) { touch_abort.abort(); touch_abort = null; }

  // Vorhandenes SVG entfernen, damit Resize sauber neu baut
  const wrap = document.getElementById('map-wrap');
  wrap.innerHTML = '';

  karte_breite = wrap.clientWidth; karte_hoehe = wrap.clientHeight;
  const svg = d3.select('#map-wrap').append('svg')
    .attr('width', karte_breite).attr('height', karte_hoehe);
  d3_svg = svg;
  svg.append('defs').append('clipPath').attr('id', 'karte-clip')
    .append('rect').attr('width', karte_breite).attr('height', karte_hoehe);
  svg.append('rect').attr('class', 'ocean').attr('width', karte_breite).attr('height', karte_hoehe);

  // Korrekte Skalierung: Minimum aus Breite und Höhe → ganze Welt immer sichtbar
  // geoNaturalEarth1 natürliches Seitenverhältnis 960:500 → Konstanten 6.5 / 3.4
  const skala    = Math.min(karte_breite / 6.5, karte_hoehe / 3.4);
  const min_zoom = 0.35;
  d3_projektion = d3.geoNaturalEarth1()
    .scale(skala).translate([karte_breite / 2, karte_hoehe / 2]);
  const pfad = d3.geoPath().projection(d3_projektion);
  karte_gruppe = svg.append('g').attr('clip-path', 'url(#karte-clip)');
  karte_gruppe.append('path').datum(d3.geoGraticule()()).attr('class', 'graticule').attr('d', pfad);
  if (!welt_atlas) {
    welt_atlas = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
  }
  const welt    = welt_atlas;
  const laender = topojson.feature(welt, welt.objects.countries);
  karte_gruppe.selectAll('.country-land')
    .data(laender.features).enter().append('path')
    .attr('class', function(d) {
      const code = ISO_ZU_CODE[String(d.id).padStart(3, '0')];
      return 'country-land' + (code ? ' available' : '');
    })
    .attr('d', pfad)
    .on('mouseover', function(event, d) {
      const code = ISO_ZU_CODE[String(d.id).padStart(3, '0')];
      if (!code || !COUNTRIES[code]) return;
      zeige_tooltip(event, COUNTRIES[code].flag + ' ' + COUNTRIES[code].name);
    })
    .on('mousemove', function(event) {
      const t = document.getElementById('tooltip');
      t.style.left = (event.clientX + 14) + 'px';
      t.style.top  = (event.clientY - 10) + 'px';
    })
    .on('mouseout', verstecke_tooltip)
    .on('click', function(event, d) {
      const code = ISO_ZU_CODE[String(d.id).padStart(3, '0')];
      if (!code) return;
      if (code === heimland_iso) return; // Heimatland ist kein Reiseziel
      if (vergleich_modus) {
        vergleich_modus = false;
        document.getElementById('vergleich-hint').style.display = 'none';
        karte_gruppe.selectAll('.country-land').classed('active', false);
        d3.select(this).classed('active', true);
        zeige_vergleich_overlay(vergleich_land_1, code);
        return;
      }
      karte_gruppe.selectAll('.country-land').classed('active', false);
      d3.select(this).classed('active', true);
      oeffne_panel(code);
    });
  karte_gruppe.append('path')
    .datum(topojson.mesh(welt, welt.objects.countries, function(a, b) { return a !== b; }))
    .attr('class', 'country-borders').attr('d', pfad);
  // D3 Zoom: Touch-Pointer werden gefiltert, eigener Handler übernimmt
  const zoom = d3.zoom()
    .scaleExtent([min_zoom, 8])
    .filter(function(event) {
      if (event.type === 'pointerdown' && event.pointerType === 'touch') return false;
      return (!event.ctrlKey || event.type === 'wheel') && !event.button;
    })
    .on('zoom', function(event) { karte_gruppe.attr('transform', event.transform); });
  d3_zoom_obj = zoom;
  svg.call(zoom); // Immer registrieren (Mausrad Desktop + zoome_auf_land Animationen)

  if ('ontouchstart' in window) {
    const sn = svg.node();
    // Listener auf dem HTML-Div — iOS Safari ignoriert preventDefault() auf SVG-Elementen.
    const mapWrap = document.getElementById('map-wrap');
    touch_abort = new AbortController();
    const sig = touch_abort.signal;
    let st = null;

    function touch_apply(t) {
      sn.__zoom = t;
      karte_gruppe.attr('transform', t);
    }

    mapWrap.addEventListener('touchstart', function(e) {
      // Nur abfangen wenn Touch innerhalb der Karte (nicht auf Overlay-Elementen darüber)
      if (!sn.contains(e.target) && e.target !== sn) return;
      e.preventDefault();
      d3_svg.interrupt();
      const c = d3.zoomTransform(sn);
      if (e.touches.length === 1) {
        st = { type: 'pan',
               sx: e.touches[0].clientX, sy: e.touches[0].clientY,
               tx: c.x, ty: c.y, k: c.k,
               moved: false, target: e.target };
      } else if (e.touches.length === 2) {
        const a = e.touches[0], b = e.touches[1];
        st = { type: 'pinch',
               ax: a.clientX, ay: a.clientY, bx: b.clientX, by: b.clientY,
               tx: c.x, ty: c.y, k: c.k,
               dist: Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY) };
      } else {
        st = null;
      }
    }, { passive: false, signal: sig });

    mapWrap.addEventListener('touchmove', function(e) {
      if (!st) return;
      e.preventDefault();

      if (st.type === 'pan' && e.touches.length === 1) {
        const dx = e.touches[0].clientX - st.sx;
        const dy = e.touches[0].clientY - st.sy;
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) return;
        st.moved = true;
        touch_apply(d3.zoomIdentity.scale(st.k)
          .translate((st.tx + dx) / st.k, (st.ty + dy) / st.k));

      } else if (e.touches.length >= 2) {
        const a = e.touches[0], b = e.touches[1];
        if (st.type !== 'pinch') {
          const c = d3.zoomTransform(sn);
          st = { type: 'pinch',
                 ax: a.clientX, ay: a.clientY, bx: b.clientX, by: b.clientY,
                 tx: c.x, ty: c.y, k: c.k,
                 dist: Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY) };
          return;
        }
        const nd   = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
        const k2   = Math.max(min_zoom, Math.min(8, st.k * (st.dist < 1 ? 1 : nd / st.dist)));
        const mx   = (a.clientX + b.clientX) / 2;
        const my   = (a.clientY + b.clientY) / 2;
        const smx  = (st.ax + st.bx) / 2;
        const smy  = (st.ay + st.by) / 2;
        const tx_n = mx - (smx - st.tx) * (k2 / st.k);
        const ty_n = my - (smy - st.ty) * (k2 / st.k);
        touch_apply(d3.zoomIdentity.scale(k2).translate(tx_n / k2, ty_n / k2));
      }
    }, { passive: false, signal: sig });

    mapWrap.addEventListener('touchend', function(e) {
      if (!st) return;
      // Tap erkennen: nur bei Single-Touch ohne Bewegung → Land öffnen
      if (st.type === 'pan' && !st.moved && e.changedTouches.length > 0) {
        const el = st.target;
        if (el && el.classList && el.classList.contains('country-land') && el.classList.contains('available')) {
          const datum = d3.select(el).datum();
          if (datum) {
            const code = ISO_ZU_CODE[String(datum.id).padStart(3, '0')];
            if (code && code !== heimland_iso) {
              karte_gruppe.selectAll('.country-land').classed('active', false);
              d3.select(el).classed('active', true);
              if (vergleich_modus) {
                vergleich_modus = false;
                document.getElementById('vergleich-hint').style.display = 'none';
                zeige_vergleich_overlay(vergleich_land_1, code);
              } else {
                oeffne_panel(code);
              }
            }
          }
        } else if (document.getElementById('panel').classList.contains('open')) {
          schliesse_panel();
        }
      }

      const c = d3.zoomTransform(sn);
      if (e.touches.length === 0) {
        st = null;
      } else if (e.touches.length === 1) {
        st = { type: 'pan',
               sx: e.touches[0].clientX, sy: e.touches[0].clientY,
               tx: c.x, ty: c.y, k: c.k,
               moved: false, target: null };
      }
    }, { passive: true, signal: sig });
  }
}

function zoome_auf_land(code) {
  const land = COUNTRIES[code];
  if (!land || !land.geo) return;
  const [lng, lat, zoom_stufe] = land.geo;
  const pixel = d3_projektion([lng, lat]);
  if (!pixel) return;
  const tx = karte_breite / 2 - pixel[0] * zoom_stufe;
  const ty = karte_hoehe  / 2 - pixel[1] * zoom_stufe;
  d3_svg.transition().duration(800).ease(d3.easeCubicInOut)
    .call(d3_zoom_obj.transform, d3.zoomIdentity.translate(tx, ty).scale(zoom_stufe));
}

// ── TOOLTIP ──
function zeige_tooltip(event, text) {
  const t = document.getElementById('tooltip');
  t.textContent = text; t.style.opacity = '1';
  t.style.left = (event.clientX + 14) + 'px'; t.style.top = (event.clientY - 10) + 'px';
}
function verstecke_tooltip() { document.getElementById('tooltip').style.opacity = '0'; }

// ── SHUFFLE ──
function shuffle_land() {
  const codes = Object.keys(COUNTRIES).filter(function(c) { return c !== heimland_iso; });
  const code  = codes[Math.floor(Math.random() * codes.length)];
  if (karte_gruppe) {
    karte_gruppe.selectAll('.country-land').classed('active', false);
    karte_gruppe.selectAll('.country-land')
      .filter(function(d) { return ISO_ZU_CODE[String(d.id).padStart(3, '0')] === code; })
      .classed('active', true);
  }
  oeffne_panel(code);
}

function setze_shuffle_position() {
  const bar = document.getElementById('budget-bar');
  const btn = document.getElementById('shuffle-btn');
  if (!bar || !btn) return;
  const ist_mobile = window.innerWidth <= 768;
  const bar_bottom = ist_mobile ? 14 : 28;
  btn.style.bottom    = (bar_bottom + bar.offsetHeight + 10) + 'px';
  if (ist_mobile) {
    btn.style.left      = '50%';
    btn.style.transform = 'translateX(-50%)';
  } else {
    btn.style.left      = '28px';
    btn.style.transform = 'none';
  }
}

// ── VERGLEICH ──
function starte_vergleich() {
  vergleich_land_1 = aktives_land;
  vergleich_modus  = true;
  schliesse_panel();
  if (karte_gruppe) {
    karte_gruppe.selectAll('.country-land')
      .filter(function(d) { return ISO_ZU_CODE[String(d.id).padStart(3, '0')] === vergleich_land_1; })
      .classed('active', true);
  }
  document.getElementById('vergleich-hint').style.display = 'flex';
}

function schliesse_vergleich_overlay() {
  const vgl_el = document.getElementById('vergleich-overlay');
  vgl_el.style.transform  = '';
  vgl_el.style.transition = '';
  vgl_el.style.display    = 'none';
  vergleich_land_1 = null;
  vergleich_modus  = false;
  if (d3_svg) d3_svg.selectAll('.country-land').classed('active', false);
  if (d3_svg && d3_zoom_obj) {
    d3_svg.transition().duration(700).ease(d3.easeCubicInOut)
      .call(d3_zoom_obj.transform, d3.zoomIdentity)
      .on('end', markiere_heimatland);
  }
}

async function zeige_vergleich_overlay(code1, code2) {
  const land1 = COUNTRIES[code1];
  const land2 = COUNTRIES[code2];
  if (!land1 || !land2) return;

  const kurse = await lade_kurse();
  if (!kurse) return;

  const budget   = parseFloat(document.getElementById('budget-input').value) || 500;
  const budget1  = umrechnen(budget, heimwaehrung, land1.currency, kurse);
  const budget2  = umrechnen(budget, heimwaehrung, land2.currency, kurse);
  const lci1     = berechne_lci(land1, budget, budget1, kurse);
  const lci2     = berechne_lci(land2, budget, budget2, kurse);

  function kopf_html(land, budget_lok, kurs_wert, lci) {
    const kurs_fmt = kurs_wert >= 100
      ? Math.round(kurs_wert).toLocaleString('de-CH')
      : kurs_wert.toFixed(4);
    return `
      <div class="vgl-kopf-flag">${land.flag}</div>
      <div class="vgl-kopf-name">${land.name}</div>
      <div class="vgl-kopf-meta">${land.continent} · ${land.currency}</div>
      <div class="vgl-kopf-budget" data-ziel="${Math.round(budget_lok)}" data-suffix=" ${land.currency}">0 ${land.currency}</div>
      <div class="vgl-kopf-kurs">1 ${heimwaehrung} = ${kurs_fmt} ${land.currency}</div>
      <div class="vgl-kopf-lci">LCI <strong>${lci.toFixed(1)}×</strong> ${lci_label(lci)}</div>`;
  }

  document.getElementById('vgl-kopf-1').innerHTML = kopf_html(land1, budget1, budget1 / budget, lci1);
  document.getElementById('vgl-kopf-2').innerHTML = kopf_html(land2, budget2, budget2 / budget, lci2);
  document.querySelectorAll('.vgl-kopf-budget').forEach(function(el) {
    zaehle_hoch(el, parseInt(el.dataset.ziel), el.dataset.suffix, 650);
  });

  const body = document.getElementById('vergleich-overlay-body');
  body.innerHTML = VGL_TIERS.map(function(tier) {
    const d1    = land1.dishes[tier.key];
    const d2    = land2.dishes[tier.key];
    const chf1  = umrechnen(d1.dishPrice, land1.currency, heimwaehrung, kurse);
    const chf2  = umrechnen(d2.dishPrice, land2.currency, heimwaehrung, kurse);
    const anz1  = Math.floor(budget1 / d1.dishPrice);
    const anz2  = Math.floor(budget2 / d2.dishPrice);
    const g1    = chf1 <= chf2 ? 'guenstiger' : '';
    const g2    = chf2 <= chf1 ? 'guenstiger' : '';
    return `
      <div class="vgl-tier-block">
        <div class="vgl-tier-label">${tier.emoji} ${tier.label}</div>
        <div class="vgl-dish-row">
          <div class="vgl-dish-card ${g1}">
            <div class="vgl-dish-emoji">${d1.emoji}</div>
            <div class="vgl-dish-name">${d1.name}</div>
            <div class="vgl-dish-lokal">${FMT_0.format(d1.dishPrice)} ${land1.currency}</div>
            <div class="vgl-dish-chf">${FMT_2.format(chf1)} ${heimwaehrung}</div>
            <div class="vgl-dish-anzahl">${anz1}× mit Budget</div>
          </div>
          <div class="vgl-vs-col">vs</div>
          <div class="vgl-dish-card ${g2}">
            <div class="vgl-dish-emoji">${d2.emoji}</div>
            <div class="vgl-dish-name">${d2.name}</div>
            <div class="vgl-dish-lokal">${FMT_0.format(d2.dishPrice)} ${land2.currency}</div>
            <div class="vgl-dish-chf">${FMT_2.format(chf2)} ${heimwaehrung}</div>
            <div class="vgl-dish-anzahl">${anz2}× mit Budget</div>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('vergleich-overlay').style.display = 'flex';
}

// ── KONTINENT FILTER ──
const KONTINENTE = [
  { key: 'Asien',       label: 'Asien',       emoji: '🌏', geo: [90,   30],  zoom: 1.8 },
  { key: 'Europa',      label: 'Europa',       emoji: '🌍', geo: [15,   52],  zoom: 3.0 },
  { key: 'Nordamerika', label: 'Nordamerika',  emoji: '🌎', geo: [-100, 48],  zoom: 2.0 },
  { key: 'Südamerika',  label: 'Südamerika',   emoji: '🌎', geo: [-60, -15],  zoom: 2.5 },
  { key: 'Afrika',      label: 'Afrika',       emoji: '🌍', geo: [20,   5],   zoom: 2.2 },
  { key: 'Ozeanien',    label: 'Ozeanien',     emoji: '🌊', geo: [145, -28],  zoom: 2.5 },
];

function kontinent_passt(land_kontinent, filter) {
  if (filter === 'Asien')       return ['Asien', 'Naher Osten'].some(function(k) { return land_kontinent.includes(k); });
  if (filter === 'Europa')      return land_kontinent.includes('Europa');
  if (filter === 'Nordamerika') return ['Nordamerika', 'Mittelamerika'].some(function(k) { return land_kontinent.includes(k); });
  if (filter === 'Südamerika')  return land_kontinent.includes('Südamerika');
  if (filter === 'Afrika')      return land_kontinent.includes('Afrika');
  if (filter === 'Ozeanien')    return land_kontinent.includes('Ozeanien');
  return false;
}

function kontinent_von_koordinaten(lon, lat) {
  if ((lon >= 110 && lat <= 0) || (lon >= 130 && lat <= 15)) return 'Ozeanien';
  if (lon >= -82 && lon <= -34 && lat >= -60 && lat <= 15)   return 'Südamerika';
  if (lon <= -34 && lat >= 5)                                return 'Nordamerika';
  if (lon >= 34  && lon <= 63  && lat >= 12  && lat <= 42)   return 'Asien';
  if (lon >= -18 && lon <= 55  && lat >= -40 && lat <= 40)   return 'Afrika';
  if (lon <= 65  && lat >= 35)                               return 'Europa';
  return 'Asien';
}

function filter_kontinent(filter) {
  if (!karte_gruppe) return;
  karte_gruppe.selectAll('.country-land').each(function(d) {
    if (filter === null) { d3.select(this).classed('gedimmt', false); return; }
    const code = ISO_ZU_CODE[String(d.id).padStart(3, '0')];
    let passt;
    if (code) {
      passt = kontinent_passt(COUNTRIES[code].continent, filter);
    } else {
      const c = d3.geoCentroid(d);
      passt = !!c && kontinent_von_koordinaten(c[0], c[1]) === filter;
    }
    d3.select(this).classed('gedimmt', !passt);
  });
}

function zoome_auf_kontinent(k) {
  if (!d3_svg || !d3_zoom_obj || !d3_projektion) return;
  const pixel = d3_projektion(k.geo);
  if (!pixel) return;
  const tx = karte_breite / 2 - pixel[0] * k.zoom;
  const ty = karte_hoehe  / 2 - pixel[1] * k.zoom;
  d3_svg.transition().duration(800).ease(d3.easeCubicInOut)
    .call(d3_zoom_obj.transform, d3.zoomIdentity.translate(tx, ty).scale(k.zoom));
}

function baue_kontinent_filter() {
  const wrap = document.getElementById('kontinent-filter');

  // ── Welt-Button (Reset) ──
  const welt_btn = document.createElement('button');
  welt_btn.className = 'kontinent-btn aktiv';
  welt_btn.innerHTML = '<span class="kf-emoji">🌐</span><span>Welt</span>';
  welt_btn.addEventListener('click', function() {
    aktiver_kontinent = null;
    document.querySelectorAll('.kontinent-btn').forEach(function(b) { b.classList.remove('aktiv'); });
    welt_btn.classList.add('aktiv');
    filter_kontinent(null);
    if (d3_svg && d3_zoom_obj) {
      d3_svg.transition().duration(700).ease(d3.easeCubicInOut)
        .call(d3_zoom_obj.transform, d3.zoomIdentity)
        .on('end', markiere_heimatland);
    }
  });
  wrap.appendChild(welt_btn);

  // ── Kontinent-Buttons ──
  KONTINENTE.forEach(function(k) {
    const btn = document.createElement('button');
    btn.className = 'kontinent-btn';
    btn.innerHTML = '<span class="kf-emoji">' + k.emoji + '</span><span>' + k.label + '</span>';
    btn.addEventListener('click', function() {
      if (aktiver_kontinent === k.key) {
        aktiver_kontinent = null;
        document.querySelectorAll('.kontinent-btn').forEach(function(b) { b.classList.remove('aktiv'); });
        welt_btn.classList.add('aktiv');
        filter_kontinent(null);
        if (d3_svg && d3_zoom_obj) {
          d3_svg.transition().duration(700).ease(d3.easeCubicInOut)
            .call(d3_zoom_obj.transform, d3.zoomIdentity)
            .on('end', markiere_heimatland);
        }
      } else {
        aktiver_kontinent = k.key;
        document.querySelectorAll('.kontinent-btn').forEach(function(b) { b.classList.remove('aktiv'); });
        btn.classList.add('aktiv');
        filter_kontinent(k.key);
        zoome_auf_kontinent(k);
      }
    });
    wrap.appendChild(btn);
  });
}

// ── LÄNDERSUCHE ──
function baue_suche() {
  const wrap  = document.getElementById('land-suche-wrap');
  const btn   = document.getElementById('land-suche-btn');
  const input = document.getElementById('land-suche-input');
  const liste = document.getElementById('land-suche-liste');

  function render(query) {
    liste.innerHTML = '';
    const q = query.trim().toLowerCase();
    if (!q) return;
    const treffer = Object.entries(COUNTRIES)
      .filter(([, land]) => land.name.toLowerCase().includes(q))
      .slice(0, 8);
    if (treffer.length === 0) {
      liste.innerHTML = '<div class="suche-leer">Kein Land gefunden</div>';
      return;
    }
    treffer.forEach(function([code, land]) {
      const el = document.createElement('div');
      el.className = 'suche-item';
      el.innerHTML = '<span class="suche-item-flag">' + land.flag + '</span>'
        + '<span class="suche-item-name">' + land.name + '</span>'
        + '<span class="suche-item-kontinent">' + land.continent + '</span>';
      el.addEventListener('click', function() {
        if (karte_gruppe) {
          karte_gruppe.selectAll('.country-land').classed('active', false);
          karte_gruppe.selectAll('.country-land')
            .filter(function(d) { return ISO_ZU_CODE[String(d.id).padStart(3, '0')] === code; })
            .classed('active', true);
        }
        zoome_auf_land(code);
        oeffne_panel(code);
        schliesse_suche();
      });
      liste.appendChild(el);
    });
  }

  function oeffne_suche() {
    wrap.classList.add('open');
    setTimeout(function() { input.focus(); }, 50);
  }

  function schliesse_suche() {
    wrap.classList.remove('open');
    input.value = '';
    liste.innerHTML = '';
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    wrap.classList.contains('open') ? schliesse_suche() : oeffne_suche();
  });

  input.addEventListener('input', function() { render(this.value); });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { schliesse_suche(); }
    if (e.key === 'Enter') {
      const erster = liste.querySelector('.suche-item');
      if (erster) erster.click();
    }
  });

  document.addEventListener('click', function(e) {
    if (!wrap.contains(e.target)) schliesse_suche();
  });
}

// ── WELCOME MODAL ──
function setup_modal() {
  const overlay = document.getElementById('modal-overlay');
  const cta     = document.getElementById('modal-cta-btn');
  const modal   = document.getElementById('welcome-modal');
  const schon_gesehen = sessionStorage.getItem('currencity_modal_gesehen');
  if (schon_gesehen === 'true') {
    overlay.style.transition = 'none';
    overlay.classList.add('hidden');
    return;
  }
  function schliesse_modal() {
    overlay.classList.add('hidden');
    modal.classList.remove('laden'); // FIX: #modal-laden pointer-events:auto entfernen
    sessionStorage.setItem('currencity_modal_gesehen', 'true');
    // Heimatland-Highlight sicherstellen (IP-Detection könnte noch laufen)
    setTimeout(markiere_heimatland, 400);
  }
  cta.addEventListener('click', function(e) {
    e.stopPropagation();
    // Lade-Animation einblenden, Modal nach kurzer Pause schliessen
    modal.classList.add('laden');
    setTimeout(schliesse_modal, 3000);
  });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) schliesse_modal(); });
  if (modal) modal.addEventListener('click', function(e) { e.stopPropagation(); });
}

// ─────────────────────────────────────────────────────────
//  URL SHARING
// ─────────────────────────────────────────────────────────
function aktualisiere_url() {
  const params = new URLSearchParams();
  if (aktives_land) params.set('land', aktives_land);
  const budget = parseFloat(document.getElementById('budget-input').value);
  if (budget && budget !== 500) params.set('budget', String(budget));
  if (heimwaehrung !== 'CHF') params.set('waehrung', heimwaehrung);
  const neue_url = params.toString()
    ? window.location.pathname + '?' + params.toString()
    : window.location.pathname;
  history.replaceState(null, '', neue_url);
  // Share-Button ein-/ausblenden
  const share_btn = document.getElementById('share-btn');
  if (share_btn) share_btn.style.display = aktives_land ? 'flex' : 'none';
}

function kopiere_link() {
  aktualisiere_url();
  navigator.clipboard.writeText(window.location.href).then(function() {
    zeige_toast('🔗 Link kopiert!');
  }).catch(function() {
    // Fallback für ältere Browser
    const inp = document.createElement('input');
    inp.value = window.location.href;
    document.body.appendChild(inp);
    inp.select(); document.execCommand('copy');
    document.body.removeChild(inp);
    zeige_toast('🔗 Link kopiert!');
  });
}

function zeige_toast(text) {
  let toast = document.getElementById('share-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'share-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.remove('toast-weg');
  toast.classList.add('toast-aktiv');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function() {
    toast.classList.remove('toast-aktiv');
    toast.classList.add('toast-weg');
  }, 2200);
}

function lese_url_parameter() {
  const p = new URLSearchParams(window.location.search);
  const budget_param   = p.get('budget');
  const waehrung_param = p.get('waehrung');
  const land_param     = p.get('land');

  if (budget_param) {
    const b = parseFloat(budget_param);
    if (b > 0) {
      document.getElementById('budget-input').value = Math.min(b, BUDGET_MAX);
    }
  }
  if (waehrung_param) {
    const w = CURRENCY_LIST.find(function(c) { return c.code === waehrung_param; });
    if (w) {
      heimwaehrung_via_url = true;
      wende_heimwaehrung_an(w.code, w.flag, false);
    }
  }
  if (land_param && COUNTRIES[land_param]) {
    oeffne_panel(land_param);
  }
}

// ─────────────────────────────────────────────────────────
//  FAVORITEN
// ─────────────────────────────────────────────────────────
let favoriten = [];

function lade_favoriten() {
  try {
    const raw = localStorage.getItem('currencity_favoriten');
    favoriten = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(favoriten)) favoriten = [];
    // Ungültige Codes bereinigen
    favoriten = favoriten.filter(function(code) { return !!COUNTRIES[code]; });
  } catch(e) { favoriten = []; }
}

function speichere_favoriten() {
  try { localStorage.setItem('currencity_favoriten', JSON.stringify(favoriten)); } catch(e) {}
}

function toggle_favorit(code) {
  const idx = favoriten.indexOf(code);
  if (idx >= 0) {
    favoriten.splice(idx, 1);
  } else {
    favoriten.push(code);
  }
  speichere_favoriten();
  aktualisiere_herz_btn(code);
  aktualisiere_fav_badge();
  baue_fav_liste();
  // Pop-Animation auf dem Heart-Button auslösen
  const btn = document.getElementById('panel-fav-btn');
  if (btn) {
    btn.classList.remove('pop');
    void btn.offsetWidth; // Reflow erzwingen
    btn.classList.add('pop');
  }
}

function aktualisiere_herz_btn(code) {
  const btn = document.getElementById('panel-fav-btn');
  if (!btn || !code) return;
  const ist_fav = favoriten.includes(code);
  btn.textContent = ist_fav ? '♥' : '♡';
  btn.title       = ist_fav ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen';
  btn.classList.toggle('aktiv', ist_fav);
}

function aktualisiere_fav_badge() {
  const badge = document.getElementById('fav-badge');
  const icon  = document.getElementById('fav-nav-icon');
  if (!badge || !icon) return;
  const count = favoriten.length;
  badge.style.display = count > 0 ? 'flex' : 'none';
  badge.textContent   = count;
  icon.textContent    = count > 0 ? '♥' : '♡';
}

function baue_fav_liste() {
  const liste = document.getElementById('fav-liste');
  if (!liste) return;
  if (favoriten.length === 0) {
    liste.innerHTML = '<div class="fav-leer"><span class="fav-leer-icon">♡</span>Noch keine Favoriten.<br>Klick ♡ im Panel, um<br>Länder zu speichern.</div>';
    return;
  }
  liste.innerHTML = favoriten.map(function(code) {
    const land = COUNTRIES[code];
    if (!land) return '';
    return '<div class="fav-item" data-code="' + code + '">'
      + '<span class="fav-item-flag">' + land.flag + '</span>'
      + '<div class="fav-item-info">'
      +   '<span class="fav-item-name">' + land.name + '</span>'
      +   '<span class="fav-item-cur">' + land.currency + ' · ' + land.continent + '</span>'
      + '</div>'
      + '<button class="fav-item-remove" data-code="' + code + '" title="Entfernen">✕</button>'
      + '</div>';
  }).join('');
  // Klick auf Eintrag → Land öffnen
  liste.querySelectorAll('.fav-item').forEach(function(el) {
    el.addEventListener('click', function(e) {
      if (e.target.classList.contains('fav-item-remove')) return;
      const code = this.dataset.code;
      schliesse_fav_dropdown();
      oeffne_panel(code);
    });
  });
  // Klick auf ✕ → Favorit entfernen
  liste.querySelectorAll('.fav-item-remove').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggle_favorit(this.dataset.code);
    });
  });
}

function schliesse_fav_dropdown() {
  const wrap = document.getElementById('fav-wrap');
  if (wrap) wrap.classList.remove('open');
}

function setup_favoriten() {
  lade_favoriten();
  aktualisiere_fav_badge();
  baue_fav_liste();

  const navBtn = document.getElementById('fav-nav-btn');
  const wrap   = document.getElementById('fav-wrap');
  if (!navBtn || !wrap) return;

  navBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const wird_geoeffnet = !wrap.classList.contains('open');
    wrap.classList.toggle('open');
    if (wird_geoeffnet) {
      // Suche schliessen falls offen
      document.getElementById('land-suche-wrap').classList.remove('open');
    }
  });

  // Klick ausserhalb schliesst das Dropdown
  document.addEventListener('click', function(e) {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });

  // Heart-Button im Panel
  document.getElementById('panel-fav-btn').addEventListener('click', function() {
    if (aktives_land) toggle_favorit(aktives_land);
  });
}

// ── ESCAPE KEY: Panel schliessen ──
function setup_keyboard() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      if (aktives_land) {
        schliesse_panel();
      }
    }
  });
}

// ── INIT ──
async function init() {
  setup_modal();
  await baue_d3_karte();
  erkenne_heimland();
  document.getElementById('panel-close-btn').addEventListener('click', schliesse_panel);
  document.getElementById('budget-input').addEventListener('input', function() {
    if (parseFloat(this.value) > BUDGET_MAX) this.value = BUDGET_MAX;
    if (aktives_land) lade_und_zeige_panel(aktives_land);
  });
  baue_waehrungswähler();
  baue_suche();
  baue_kontinent_filter();
  document.querySelectorAll('.budget-preset').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const wert = parseInt(this.dataset.value);
      document.getElementById('budget-input').value = wert;
      document.querySelectorAll('.budget-preset').forEach(function(b) { b.classList.remove('aktiv'); });
      this.classList.add('aktiv');
      if (aktives_land) lade_und_zeige_panel(aktives_land);
    });
  });
  document.getElementById('budget-input').addEventListener('input', function() {
    document.querySelectorAll('.budget-preset').forEach(function(b) { b.classList.remove('aktiv'); });
  });
  document.getElementById('vergleich-btn').addEventListener('click', starte_vergleich);
  document.getElementById('vergleich-abbrechen').addEventListener('click', function() {
    vergleich_modus = false;
    document.getElementById('vergleich-hint').style.display = 'none';
  });
  document.getElementById('vergleich-overlay-close').addEventListener('click', schliesse_vergleich_overlay);
  document.getElementById('shuffle-btn').addEventListener('click', shuffle_land);
  setze_shuffle_position();
  window.addEventListener('resize', setze_shuffle_position);

  // Karte neu aufbauen wenn Viewport sich ändert (Resize oder iOS-Orientierungswechsel)
  let resize_timer = null;
  window.addEventListener('resize', function() {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(async function() {
      await baue_d3_karte();
      markiere_heimatland();
      if (aktives_land) {
        karte_gruppe.selectAll('.country-land').classed('active', function(d) {
          return ISO_ZU_CODE[String(d.id).padStart(3, '0')] === aktives_land;
        });
      }
    }, 250);
  });
  // Touch-Geräte: Hinweis + Swipe-to-close
  if ('ontouchstart' in window) {
    const hint = document.getElementById('zoom-hint');
    if (hint) hint.textContent = 'Pinch zum Zoomen · Wischen zum Verschieben';
    const modal_step = document.getElementById('modal-step-tap');
    if (modal_step) modal_step.textContent = 'Land auf der Karte antippen';

    // Swipe-to-close: Handle und Hero ziehen schliesst das Panel
    const panel_el  = document.getElementById('panel');
    const handle_el = panel_el.querySelector('.panel-handle');
    const hero_el   = panel_el.querySelector('.panel-hero');
    let swipe_start_y = 0;
    let swipe_aktuell = 0;
    let swipe_aktiv   = false;

    function swipe_start(e) {
      if (!panel_el.classList.contains('open')) return;
      swipe_start_y = e.touches[0].clientY;
      swipe_aktuell = 0;
      swipe_aktiv   = true;
      panel_el.style.transition = 'none';
    }
    function swipe_move(e) {
      if (!swipe_aktiv) return;
      swipe_aktuell = Math.max(0, e.touches[0].clientY - swipe_start_y);
      panel_el.style.transform = 'translateY(' + swipe_aktuell + 'px)';
    }
    function swipe_end() {
      if (!swipe_aktiv) return;
      swipe_aktiv = false;
      panel_el.style.transition = '';
      if (swipe_aktuell > 90) {
        schliesse_panel();
      } else {
        panel_el.style.transform = 'translateY(0)';
      }
    }
    [handle_el, hero_el].forEach(function(el) {
      if (!el) return;
      el.addEventListener('touchstart', swipe_start, { passive: true });
      el.addEventListener('touchmove',  swipe_move,  { passive: true });
      el.addEventListener('touchend',   swipe_end);
    });

    // Swipe-to-close für Vergleich-Overlay (am Header wischen)
    const vgl_overlay = document.getElementById('vergleich-overlay');
    const vgl_header  = document.getElementById('vergleich-overlay-header');
    let vgl_start_y = 0, vgl_delta = 0, vgl_aktiv = false;
    if (vgl_header) {
      vgl_header.addEventListener('touchstart', function(e) {
        if (vgl_overlay.style.display === 'none') return;
        vgl_start_y = e.touches[0].clientY;
        vgl_delta   = 0;
        vgl_aktiv   = true;
        vgl_overlay.style.transition = 'none';
      }, { passive: true });
      vgl_header.addEventListener('touchmove', function(e) {
        if (!vgl_aktiv) return;
        vgl_delta = Math.max(0, e.touches[0].clientY - vgl_start_y);
        vgl_overlay.style.transform = 'translateY(' + vgl_delta + 'px)';
      }, { passive: true });
      vgl_header.addEventListener('touchend', function() {
        if (!vgl_aktiv) return;
        vgl_aktiv = false;
        vgl_overlay.style.transition = 'transform 0.3s var(--ease)';
        if (vgl_delta > 120) {
          vgl_overlay.style.transform = 'translateY(100%)';
          setTimeout(function() { schliesse_vergleich_overlay(); }, 300);
        } else {
          vgl_overlay.style.transform = 'translateY(0)';
          setTimeout(function() { vgl_overlay.style.transition = ''; }, 300);
        }
      });
    }
  }

  // Mobile: Karte antippen schließt das Bottom Sheet
  const mapWrapClick = document.getElementById('map-wrap');
  if (!mapWrapClick) return;
  mapWrapClick.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && document.getElementById('panel').classList.contains('open')) {
      if (e.target.tagName === 'svg' || e.target.classList.contains('ocean') || e.target.classList.contains('graticule')) {
        schliesse_panel();
      }
    }
  });
  setup_favoriten();
  setup_keyboard();
  document.getElementById('share-btn').addEventListener('click', kopiere_link);
  document.getElementById('rueck-input').addEventListener('input', function() {
    format_rueck_input();    // Apostrophe einfügen + Cursor korrekt setzen
    update_rueck_rechner();  // Ergebnis neu berechnen
  });
  lese_url_parameter();
}

init();