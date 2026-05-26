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
  KES:'Kenianischer Schilling', GEL:'Georgischer Lari'
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
      budget:  { emoji: '🌯', name: 'Tteokbokki',          desc: 'Würzige Reiskuchen in roter Chilisauce — beliebter Strassensnack.', dishPrice: 4000, dishPriceCHF: 4 } } },
  TH: { name: 'Thailand', flag: '🇹🇭', currency: 'THB', continent: 'Asien', geo: [101, 15, 4],
    dishes: {
      premium: { emoji: '🦐', name: 'Prawn Tom Yum',  desc: 'Scharfe, saure Suppe mit Garnelen, Galgant und Kaffernlimette — Bangkoks Restaurantklassiker.', dishPrice: 350, dishPriceCHF: 18 },
      classic: { emoji: '🍜', name: 'Pad Thai',        desc: 'Gebratene Reisnudeln mit Ei, Tamarinde, Erdnüssen und Limette — Thailands bekanntestes Gericht.', dishPrice: 80, dishPriceCHF: 21 },
      budget:  { emoji: '🌯', name: 'Frühlingsrolle',  desc: 'Knusprige, gefüllte Rolle aus Reisteig — überall vom Strassenstand erhältlich.', dishPrice: 25, dishPriceCHF: 3 } } },
  IN: { name: 'Indien', flag: '🇮🇳', currency: 'INR', continent: 'Asien', geo: [78, 22, 3],
    dishes: {
      premium: { emoji: '🍛', name: 'Butter Chicken',  desc: 'Zartes Hähnchen in samtig-cremiger Tomatensauce — Indiens bekanntestes Exportgericht.', dishPrice: 400, dishPriceCHF: 22 },
      classic: { emoji: '🥘', name: 'Thali',            desc: 'Tablett mit bis zu 10 Beilagen: Dal, Reis, Sabzi, Roti — das vollständige indische Mittagessen.', dishPrice: 200, dishPriceCHF: 23 },
      budget:  { emoji: '🥙', name: 'Samosa (2 Stk.)', desc: 'Frittierte Teigtaschen gefüllt mit Kartoffeln und Erbsen — Indiens beliebtester Strassensnack.', dishPrice: 30, dishPriceCHF: 4 } } },
  CN: { name: 'China', flag: '🇨🇳', currency: 'CNY', continent: 'Asien', geo: [104, 35, 3],
    dishes: {
      premium: { emoji: '🦆', name: 'Peking-Ente',      desc: 'Knusprige Ente mit hauchdünner Haut, serviert in Pfannkuchen mit Hoisin-Sauce — über 600 Jahre alt.', dishPrice: 200, dishPriceCHF: 45 },
      classic: { emoji: '🥟', name: 'Dim Sum (4 Stk.)', desc: 'Gedämpfte oder gebratene Teigtaschen mit verschiedenen Füllungen — Kantonesische Tradition.', dishPrice: 45, dishPriceCHF: 12 },
      budget:  { emoji: '🍡', name: 'Jianbing',          desc: 'Dünnes Crêpe aus Maismeig mit Ei, Sauce und knusprigem Waffelblatt — Chinas beliebtestes Strassenfrühstück.', dishPrice: 12, dishPriceCHF: 4 } } },
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
      classic: { emoji: '🥨', name: 'Currywurst & Pommes', desc: 'Gebratene Bratwurst mit Curryketchup und Pommes frites — Berlins kulinarisches Wahrzeichen.', dishPrice: 8, dishPriceCHF: 14 },
      budget:  { emoji: '🍺', name: 'Brezel',               desc: 'Laugenbrezel mit grobem Salz — das günstigste klassische deutsche Backwerk zum Unterwegs essen.', dishPrice: 2, dishPriceCHF: 4 } } },
  AT: { name: 'Österreich', flag: '🇦🇹', currency: 'EUR', continent: 'Europa', geo: [14, 47, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Tafelspitz',       desc: 'Gekochtes Rindfleisch in Rindsbouillon mit Rösti und Apfelkren — das Wiener Hochküchen-Klassiker.', dishPrice: 34, dishPriceCHF: 40 },
      classic: { emoji: '🍖', name: 'Wiener Schnitzel', desc: 'Dünnes, paniertes Kalbs- oder Schweineschnitzel — das wohl bekannteste österreichische Gericht.', dishPrice: 18, dishPriceCHF: 28 },
      budget:  { emoji: '🥐', name: 'Kipferl',           desc: 'Österreichisches Hörnchen aus Hefeteig — leichter und buttriger als ein Gipfeli.', dishPrice: 1.5, dishPriceCHF: 3 } } },
  FR: { name: 'Frankreich', flag: '🇫🇷', currency: 'EUR', continent: 'Europa', geo: [2, 46, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Entrecôte',       desc: 'Gegrilltes Rindsentrecôte mit Sauce Béarnaise — das klassische französische Bistro-Premium.', dishPrice: 38, dishPriceCHF: 52 },
      classic: { emoji: '🥐', name: 'Croque Monsieur', desc: 'Gegrilltes Schinken-Käse-Sandwich mit Béchamelsauce — das franzözische Bistro-Mittagessen.', dishPrice: 9, dishPriceCHF: 13 },
      budget:  { emoji: '🥖', name: 'Baguette',         desc: 'Frisches Baguette nature aus der Boulangerie — das tägliche Brot Frankreichs.', dishPrice: 1.3, dishPriceCHF: 3 } } },
  IT: { name: 'Italien', flag: '🇮🇹', currency: 'EUR', continent: 'Europa', geo: [12, 42, 5],
    dishes: {
      premium: { emoji: '🍝', name: 'Trüffel-Pasta',   desc: 'Hausgemachte Tagliatelle mit schwarzem Trüffel und Parmesan — Italiens Luxus-Klassiker.', dishPrice: 35, dishPriceCHF: 44 },
      classic: { emoji: '🍕', name: 'Margherita Pizza', desc: 'Neapolitanische Pizza mit San-Marzano-Tomaten, Mozzarella und Basilikum — 1889 kreiert.', dishPrice: 9, dishPriceCHF: 21 },
      budget:  { emoji: '☕', name: 'Espresso',          desc: 'Kleiner, starker Kaffee — in Italien an der Bar stehend getrunken, ein kulturelles Ritual.', dishPrice: 1.5, dishPriceCHF: 4 } } },
  ES: { name: 'Spanien', flag: '🇪🇸', currency: 'EUR', continent: 'Europa', geo: [-3, 40, 5],
    dishes: {
      premium: { emoji: '🦞', name: 'Paella Valenciana', desc: 'Safranreis mit Hühnchen, Kaninchen und grünen Bohnen — Spaniens kulinarisches Aushängeschild.', dishPrice: 28, dishPriceCHF: 36 },
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
      premium: { emoji: '🐟', name: 'Zeeuwse Oesters', desc: 'Frische Austern aus Zeeland — die niederländische Delikatesse schlechthin.', dishPrice: 32, dishPriceCHF: 38 },
      classic: { emoji: '🥘', name: 'Stamppot',          desc: 'Stampfkartoffeln mit Grünkohl oder Möhren, serviert mit Rookworst-Wurst — das holländische Wintergericht.', dishPrice: 12, dishPriceCHF: 18 },
      budget:  { emoji: '🐟', name: 'Haring',            desc: 'Roher gesalzener Hering, gegessen mit Zwiebeln und Essiggurken — Hollands günstigstes Strassengericht.', dishPrice: 3.5, dishPriceCHF: 5 } } },
  DK: { name: 'Dänemark', flag: '🇩🇰', currency: 'DKK', continent: 'Europa', geo: [10, 56, 5],
    dishes: {
      premium: { emoji: '🦞', name: 'Smørrebrød Laks', desc: 'Offenes Schwarzbrot-Sandwich mit Räucherlachs und Garnelen — Dänemarks kulinarische Hochkunst.', dishPrice: 220, dishPriceCHF: 42 },
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
      classic: { emoji: '🍢', name: 'Köttbullar',      desc: 'Kleine Fleischbällchen aus Schweine- und Rindshack mit Preiselbeeren und Kartoffeln.', dishPrice: 120, dishPriceCHF: 18 },
      budget:  { emoji: '🫐', name: 'Kanelbulle',       desc: 'Süsses Zimtschneckchen — Schweden hat sogar einen eigenen nationalen Kanelbulle-Tag (4. Oktober).', dishPrice: 35, dishPriceCHF: 5 } } },
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
      classic: { emoji: '🥗', name: 'Moussaka',            desc: 'Auflauf mit Auberginen, Hackfleisch und Béchamelsauce — Griechenlands Nationalgericht.', dishPrice: 12, dishPriceCHF: 18 },
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
      classic: { emoji: '🍛', name: 'Casado',           desc: 'Reisgericht mit Bohnen, Fleisch, Salat und Reisfritters — das tägliche Mittagessen Costa Ricas.', dishPrice: 4500, dishPriceCHF: 12 },
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
      classic: { emoji: '🍗', name: 'Lomo Saltado',   desc: 'Rindfleisch-Stir-Fry mit Tomaten, Zwiebeln und Pommes — die peruanische Fusion mit chinesischen Einflüssen.', dishPrice: 35, dishPriceCHF: 16 },
      budget:  { emoji: '🌽', name: 'Anticuchos',     desc: 'Gegrillte Rinderherz-Spiesse mit Ají-Sauce — uraltes Andengericht, heute überall Strassenfood.', dishPrice: 8, dishPriceCHF: 4 } } },
  CL: { name: 'Chile', flag: '🇨🇱', currency: 'CLP', continent: 'Südamerika', geo: [-71, -35, 4],
    dishes: {
      premium: { emoji: '🦞', name: 'Centolla',          desc: 'Patagonische Königskrabbe — Chiles Meeresfrüchte-Luxus aus dem eiskalten Südatlantik.', dishPrice: 28000, dishPriceCHF: 38 },
      classic: { emoji: '🥩', name: 'Pastel de Choclo',  desc: 'Auflauf aus Maisbrei mit Hackfleisch, Zwiebeln, Rosinen und Ei — Chiles Comfort-Food.', dishPrice: 7000, dishPriceCHF: 14 },
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
      budget:  { emoji: '🥙', name: 'Msemen',        desc: 'Blättriges Fladenbrot vom Strassenstand — zum Frühstück mit Argan-Honig oder als Sandwich.', dishPrice: 5, dishPriceCHF: 3 } } },
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
      premium: { emoji: '🦞', name: 'Hairy Crab Menü',    desc: 'Saisondampfkrabbe mit Ingwer-Reiswein — in Taiwan nur im Herbst erhältlich, gilt als Delikatesse.', dishPrice: 1800, dishPriceCHF: 72 },
      classic: { emoji: '🥩', name: 'Beef Noodle Soup',   desc: 'Langsam geschmortes Rindfleisch in würziger Brühe mit dicken Weizennudeln — Taiwans inoffzielles Nationalgericht.', dishPrice: 180, dishPriceCHF: 7 },
      budget:  { emoji: '🥟', name: 'Scallion Pancake',   desc: 'Knuspriger Lauch-Pfannkuchen vom Strassenstand — frühmorgens an jeder Ecke Taipei für unter 2 CHF.', dishPrice: 35, dishPriceCHF: 1.5 } } },
  MY: { name: 'Malaysia', flag: '🇲🇾', currency: 'MYR', continent: 'Asien', geo: [110, 4, 5],
    dishes: {
      premium: { emoji: '🦞', name: 'Butter Prawn',        desc: 'Riesige Riesengarnelen in schaumiger Buttersauce mit Curryleaves — Malaysias Meeresfrüchte-Signature.', dishPrice: 60, dishPriceCHF: 17 },
      classic: { emoji: '🍛', name: 'Nasi Lemak',           desc: 'Kokosreis mit Sambal, Sardellen, Erdnüssen und Ei — Malaysias Frühstücksgericht und Nationalgericht zugleich.', dishPrice: 8, dishPriceCHF: 2 },
      budget:  { emoji: '🥜', name: 'Roti Canai',           desc: 'Hauchdünnes, blättriges Fladenbrot mit Linsencurry — für Centbeträge an jedem Mamak-Stall, 24 Stunden am Tag.', dishPrice: 2, dishPriceCHF: 0.6 } } },
  KH: { name: 'Kambodscha', flag: '🇰🇭', currency: 'KHR', continent: 'Asien', geo: [105, 12, 5],
    dishes: {
      premium: { emoji: '🐊', name: 'Amok Trei',            desc: 'Fisch in Kokoscurry gedämpft in einem Bananenblatt — Kambodschas Nationalgericht in Restaurantversion.', dishPrice: 40000, dishPriceCHF: 12 },
      classic: { emoji: '🍲', name: 'Kuy Teav',             desc: 'Reisnudelsuppe mit Schweinefleisch und frischen Kräutern — Kambodschas tägliches Frühstücksgericht.', dishPrice: 8000, dishPriceCHF: 2.5 },
      budget:  { emoji: '🥖', name: 'Num Pang',             desc: 'Kambodschanisches Baguette-Sandwich mit Paté und Pickles — Erbe der französischen Kolonialzeit, für unter 1 USD.', dishPrice: 3000, dishPriceCHF: 1 } } },
  LK: { name: 'Sri Lanka', flag: '🇱🇰', currency: 'LKR', continent: 'Asien', geo: [81, 8, 6],
    dishes: {
      premium: { emoji: '🦞', name: 'Jaffna Crab Curry',   desc: 'Frische Krabbe in aromatischem Tamil-Curry mit Kokosmilch — Spezialität des Nordens, gilt als bestes Currygericht Sri Lankas.', dishPrice: 3500, dishPriceCHF: 14 },
      classic: { emoji: '🥘', name: 'Rice & Curry',         desc: 'Riesiges Thali-Tablett mit bis zu 8 verschiedenen Currys und Reis — die tägliche Hauptmahlzeit Sri Lankas.', dishPrice: 800, dishPriceCHF: 3 },
      budget:  { emoji: '🥞', name: 'Hoppers',              desc: 'Knusprige Reismehl-Schälchen, allein oder mit Ei — das günstigste Frühstück Sri Lankas.', dishPrice: 150, dishPriceCHF: 0.6 } } },
  AE: { name: 'VAE (Dubai)', flag: '🇦🇪', currency: 'AED', continent: 'Naher Osten', geo: [55, 25, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Wagyu Tomahawk',       desc: 'Japanisches Wagyu-Steak am Knochen aus Dubais Luxusrestaurants — das teuerste Steak-Erlebnis im Nahen Osten.', dishPrice: 800, dishPriceCHF: 280 },
      classic: { emoji: '🥙', name: 'Al Harees',            desc: 'Langsam gekochter Weizen mit Lamm oder Hähnchen — traditionelles Emirati-Gericht, besonders im Ramadan.', dishPrice: 55, dishPriceCHF: 20 },
      budget:  { emoji: '🫓', name: 'Shawarma Wrap',        desc: 'Fleisch vom Spiess im dünnen Fladenbrot — Dubais günstigstes Strassenfood für unter 2 USD.', dishPrice: 5, dishPriceCHF: 1.8 } } },
  IL: { name: 'Israel', flag: '🇮🇱', currency: 'ILS', continent: 'Naher Osten', geo: [35, 31, 6],
    dishes: {
      premium: { emoji: '🐟', name: 'St. Peters Fisch',     desc: 'Gegrillter Muscht-Fisch aus dem See Genezareth — Israels Delikatesse mit 2000-jähriger Geschichte.', dishPrice: 120, dishPriceCHF: 42 },
      classic: { emoji: '🥙', name: 'Sabich',               desc: 'Pita mit gebratenem Auberginen, Ei, Hummus und Amba-Sauce — Israels unterschätztes Streetfood-Gericht irakischer Herkunft.', dishPrice: 45, dishPriceCHF: 16 },
      budget:  { emoji: '🧆', name: 'Falafel Pita',         desc: 'Knusprige Kichererbsenbällchen im Pita mit Salat und Tahini — in Tel Aviv gibt es über 1000 Falafel-Stände.', dishPrice: 25, dishPriceCHF: 9 } } },
  JO: { name: 'Jordanien', flag: '🇯🇴', currency: 'JOD', continent: 'Naher Osten', geo: [37, 31, 6],
    dishes: {
      premium: { emoji: '🐑', name: 'Mansaf',               desc: 'Lamm auf Riesenbrot mit fermentierter Ziegenjoghurtsauce — Jordaniens Nationalgericht, traditionell mit der Hand gegessen.', dishPrice: 15, dishPriceCHF: 27 },
      classic: { emoji: '🥙', name: 'Foul Mudammas',        desc: 'Gekochte Favabohnen mit Olivenöl, Zitrone und Kreuzkümmel — das Frühstücksgericht des ganzen Nahen Ostens.', dishPrice: 2.5, dishPriceCHF: 5 },
      budget:  { emoji: '🫓', name: 'Kaak-Brot',            desc: 'Sesam-Ringbrot vom ambulanten Händler — Ammans günstigstes Strassenbrot für Cent-Beträge.', dishPrice: 0.3, dishPriceCHF: 0.6 } } },
  PL: { name: 'Polen', flag: '🇵🇱', currency: 'PLN', continent: 'Europa', geo: [20, 52, 5],
    dishes: {
      premium: { emoji: '🦆', name: 'Żurek z Kiełbasą',     desc: 'Sauerrahm-Roggensuppe mit Weisswurst und Ei im Brotlaib serviert — Polens Hochküchen-Klassiker aus der alten Küche.', dishPrice: 60, dishPriceCHF: 17 },
      classic: { emoji: '🥟', name: 'Pierogi Ruskie',       desc: 'Gekochte Teigtaschen gefüllt mit Kartoffeln, Quark und Zwiebeln — Polens geliebtes Nationalessen.', dishPrice: 25, dishPriceCHF: 7 },
      budget:  { emoji: '🌭', name: 'Zapiekanka',            desc: 'Baguette-Häfte mit Pilzen, Käse und Ketchup — Krakaus Antwort auf die Pizza, seit den 1970ern beliebt.', dishPrice: 12, dishPriceCHF: 3 } } },
  CZ: { name: 'Tschechien', flag: '🇨🇿', currency: 'CZK', continent: 'Europa', geo: [16, 50, 6],
    dishes: {
      premium: { emoji: '🦆', name: 'Svíčková na smetaně', desc: 'Rindsfilet in Sahnesauce mit Knödel und Preiselbeeren — Tschechiens elaboriertestes Traditionsgericht.', dishPrice: 450, dishPriceCHF: 22 },
      classic: { emoji: '🥩', name: 'Svíčková (einfach)',   desc: 'Rindsgulasch mit Böhmischen Knödeln und Rotkraut — das tägliche Mittagessen in Prager Kantinen.', dishPrice: 200, dishPriceCHF: 10 },
      budget:  { emoji: '🍺', name: 'Knedlík & Pivo',       desc: 'Böhmischer Knödel mit Bier — in Prag ist Bier billiger als Wasser, Pils für unter 1 CHF.', dishPrice: 60, dishPriceCHF: 3 } } },
  HU: { name: 'Ungarn', flag: '🇭🇺', currency: 'HUF', continent: 'Europa', geo: [19, 47, 6],
    dishes: {
      premium: { emoji: '🦢', name: 'Fogas vom Balaton',    desc: 'Zander aus dem Balaton-See, gebratene Spezialität Ungarns — gilt als der edelste Süsswasserfisch Europas.', dishPrice: 7500, dishPriceCHF: 24 },
      classic: { emoji: '🍲', name: 'Gulyás',               desc: 'Ungarischer Gulasch — Rindsfleisch mit Paprika langsam geschmort, Ursprung des weltberühmten Gerichts.', dishPrice: 3500, dishPriceCHF: 11 },
      budget:  { emoji: '🥐', name: 'Lángos',               desc: 'Frittierter Hefeteig mit Sauerrahm und Käse — Ungarns beliebtester Strassensnack auf jedem Markt.', dishPrice: 900, dishPriceCHF: 3 } } },
  KE: { name: 'Kenia', flag: '🇰🇪', currency: 'KES', continent: 'Afrika', geo: [38, 0, 5],
    dishes: {
      premium: { emoji: '🥩', name: 'Nyama Choma',           desc: 'Langsam über Holzkohle gegrilltes Ziegenfleisch — Kenias Festessen, an jedem Wochenende in Nairobi gefeiert.', dishPrice: 1200, dishPriceCHF: 11 },
      classic: { emoji: '🍲', name: 'Ugali & Sukuma Wiki',   desc: 'Fester Maisbrei mit gedünstetem Grünkohl und Bohnen — das tägliche Grundnahrungsmittel von über 40 Millionen Kenianern.', dishPrice: 150, dishPriceCHF: 1.5 },
      budget:  { emoji: '🍢', name: 'Mandazi',               desc: 'Frittiertes Hefeteig-Dreieck, leicht süss — das günstigste Frühstück Ostafrikas, überall für Centbeträge.', dishPrice: 20, dishPriceCHF: 0.2 } } },
  GE: { name: 'Georgien', flag: '🇬🇪', currency: 'GEL', continent: 'Asien / Europa', geo: [44, 42, 6],
    dishes: {
      premium: { emoji: '🥩', name: 'Mtsvadi',    desc: 'Saftige Schweinefleischspiesse, über Weinrebenglut gegrillt — Georgiens uralte Festtagstradition.', dishPrice: 55, dishPriceCHF: 19 },
      classic: { emoji: '🥟', name: 'Khinkali',   desc: 'Grosse Teigtaschen gefüllt mit würzigem Fleisch und heisser Brühe — das georgische Nationalgericht, mit der Hand gegessen.', dishPrice: 18, dishPriceCHF: 6 },
      budget:  { emoji: '🫓', name: 'Lobiani',    desc: 'Warmes Hefebrot gefüllt mit gewürzten Bohnen — Georgiens günstigstes und sättigendstes Strassenessen.', dishPrice: 4, dishPriceCHF: 1.5 } } }
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
  '616':'PL','203':'CZ','348':'HU','404':'KE','268':'GE'
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
  GE:{code:'GEL',flag:'🇬🇪'}
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
  {code:'GEL',flag:'🇬🇪',label:'Georgischer Lari'}
];

// ── GLOBALE VARIABLEN ──
let aktives_land     = null;
let aktiver_tier     = 'classic';   // Standard-Tier
let heimwaehrung     = 'CHF';
let heim_flag        = '🇨🇭';
let heimland_iso     = null;
let heimland_name    = 'Schweiz';   // Name des Heimlandes für Panel-Anzeige
let kurs_cache       = null;
let d3_zoom_obj      = null;
let d3_svg           = null;
let d3_projektion    = null;
let karte_breite     = 0;
let karte_hoehe      = 0;
let karte_gruppe     = null;
let panel_kurse      = null;        // gespeicherte Kurse für Tier-Wechsel
let panel_land       = null;        // gespeichertes Land für Tier-Wechsel
let panel_budget_ziel = 0;

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
    erkannt_iso        = laender_code;
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
    // Wenn erkannt_iso nicht in HOME_CURRENCIES: Flagge als leeres Zeichen
    if (!HOME_CURRENCIES[laender_code]) {
      erkannt_iso = null; // Flagge wird als 🏠 angezeigt
    }
  } catch (fehler) {
    console.log('IP-Erkennung fehlgeschlagen, verwende CHF');
  }
  heimland_iso = erkannt_iso;
  wende_heimwaehrung_an(erkannt.code, erkannt.flag, false);
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
  zahl_el.textContent = lci.toFixed(1) + '×';
  sub_el.textContent  = sub;
  block.style.display = 'flex';
}

// ── PANEL ──
function oeffne_panel(land_code) {
  const land = COUNTRIES[land_code];
  if (!land) return;
  aktives_land = land_code;
  aktiver_tier = 'classic'; // immer mit Classic starten
  setze_aktiven_nav('nav-karte');
  document.getElementById('panel-flag').textContent    = land.flag;
  document.getElementById('panel-country').textContent = land.name;
  document.getElementById('panel-meta').textContent    =
    `${land.continent}  ·  ${land.currency}  ·  ${CURRENCY_NAMES[land.currency] || land.currency}`;
  document.getElementById('budget-hero-label').textContent =
    `DEIN BUDGET IN ${land.name.toUpperCase()}`;
  document.getElementById('panel').classList.add('open');
  document.body.classList.add('panel-offen');
  zoome_auf_land(land_code);
  lade_und_zeige_panel(land_code);
}

function schliesse_panel() {
  document.getElementById('panel').classList.remove('open');
  document.body.classList.remove('panel-offen');
  document.getElementById('lci-block').style.display = 'none';
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
  document.getElementById('fazit-box').style.display  = 'none';
  document.getElementById('lci-block').style.display  = 'none';

  try {
    const kurse = await lade_kurse();
    if (!kurse) throw new Error('Kurse nicht verfügbar');
    const umgerechnet = umrechnen(budget, heimwaehrung, land.currency, kurse);
    const kurs        = umgerechnet / budget;
    const fmt = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 0 });
    document.getElementById('panel-converted').textContent =
      fmt.format(Math.round(umgerechnet)) + ' ' + land.currency;
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

    // Fazit
    zeige_fazit(land, budget, umgerechnet, kurse);

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

  const fmt_l = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 0 });
  const fmt_h = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 2 });

  // Heimland-Infos
  const heim_flag_str = HOME_CURRENCIES[heimland_iso]
    ? HOME_CURRENCIES[heimland_iso].flag : '🏠';
  const heim_cur_name = CURRENCY_NAMES[heimwaehrung] || heimwaehrung;

  // Tier-Badge Konfiguration
  const tier_badges = {
    premium: { label: '💎 Premium',  klasse: 'tier-badge--premium' },
    classic: { label: '🍽 Classic · Richtwert', klasse: 'tier-badge--classic' },
    budget:  { label: '🪙 Budget',   klasse: 'tier-badge--budget'  }
  };
  const badge = tier_badges[tier];
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
        <span class="dish-price-lokal">${fmt_l.format(dish.dishPrice)} ${land.currency}</span>
        <span class="dish-price-cur-name">${CURRENCY_NAMES[land.currency] || land.currency}</span>
        <span class="dish-price-chf">≈ CHF ${dish.dishPriceCHF}</span>
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

      <div class="dish-portionen-row" style="margin-top:6px;">
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
        <span class="dish-price-lokal" style="color:var(--citrus);">${fmt_h.format(ch_preis)} ${heimwaehrung}</span>
        <span class="dish-price-cur-name">${heim_cur_name}</span>
        <span class="dish-price-chf">CHF ${ch_dish.dishPriceCHF}</span>
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

function zeige_fazit(land, budget, budget_ziel, kurse) {
  const ch_preis = umrechnen(SCHWEIZ_GERICHTE.classic.dishPriceCHF, 'CHF', heimwaehrung, kurse);
  const p_ziel   = Math.floor(budget_ziel / land.dishes.classic.dishPrice);
  const p_heim   = Math.floor(budget / ch_preis);
  const fazit_box  = document.getElementById('fazit-box');
  const fazit_text = document.getElementById('fazit-text');
  if (p_heim === 0) return;
  const v = p_ziel / p_heim;
  let text = '';
  if (v > 1.3)       text = `${land.name} ist ~${Math.round((v-1)*100)}% günstiger als dein Heimatland für Classic-Gerichte.`;
  else if (v < 0.77) text = `${land.name} ist ~${Math.round((1/v - 1)*100)}% teurer als dein Heimatland. Budget gut einteilen.`;
  else               text = `Ähnliche Kaufkraft wie zu Hause — ${land.name} liegt im Durchschnitt. 👌`;
  fazit_text.textContent = text;
  fazit_box.style.display = 'flex';
}

// ── HEIMWÄHRUNG ──
function wende_heimwaehrung_an(code, flag, manuell = false) {
  heimwaehrung = code; heim_flag = flag;
  document.getElementById('home-flag').textContent           = flag;
  document.getElementById('home-currency-label').textContent = code;
  if (aktives_land) lade_und_zeige_panel(aktives_land);
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
  const wrap = document.getElementById('map-wrap');
  karte_breite = wrap.clientWidth; karte_hoehe = wrap.clientHeight;
  const svg = d3.select('#map-wrap').append('svg')
    .attr('width', karte_breite).attr('height', karte_hoehe);
  d3_svg = svg;
  svg.append('defs').append('clipPath').attr('id', 'karte-clip')
    .append('rect').attr('width', karte_breite).attr('height', karte_hoehe);
  svg.append('rect').attr('class', 'ocean').attr('width', karte_breite).attr('height', karte_hoehe);
  d3_projektion = d3.geoNaturalEarth1()
    .scale(karte_breite / 6.5).translate([karte_breite / 2, karte_hoehe / 2]);
  const pfad = d3.geoPath().projection(d3_projektion);
  karte_gruppe = svg.append('g').attr('clip-path', 'url(#karte-clip)');
  karte_gruppe.append('path').datum(d3.geoGraticule()()).attr('class', 'graticule').attr('d', pfad);
  const welt    = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
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
      if (!code) return;
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
      karte_gruppe.selectAll('.country-land').classed('active', false);
      d3.select(this).classed('active', true);
      oeffne_panel(code);
    });
  karte_gruppe.append('path')
    .datum(topojson.mesh(welt, welt.objects.countries, function(a, b) { return a !== b; }))
    .attr('class', 'country-borders').attr('d', pfad);
  const zoom = d3.zoom().scaleExtent([0.8, 8])
    .on('zoom', function(event) { karte_gruppe.attr('transform', event.transform); });
  d3_zoom_obj = zoom;
  svg.call(zoom);
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
  const codes = Object.keys(COUNTRIES);
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
  btn.style.bottom = (28 + bar.offsetHeight + 10) + 'px';
  btn.style.left   = '28px';
}

// ── WELCOME MODAL ──
function setup_modal() {
  const overlay = document.getElementById('modal-overlay');
  const cta     = document.getElementById('modal-cta-btn');
  const modal   = document.getElementById('welcome-modal');
  const lottie_wrap = document.getElementById('modal-lottie');
  if (lottie_wrap) {
    lottie_wrap.innerHTML = '<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_uwR49r.json" background="transparent" speed="1" style="width:72px;height:72px;pointer-events:none;" loop autoplay></lottie-player>';
  }
  const schon_gesehen = sessionStorage.getItem('currencity_modal_gesehen');
  if (schon_gesehen === 'true') {
    overlay.style.transition = 'none';
    overlay.classList.add('hidden');
    return;
  }
  function schliesse_modal() {
    overlay.classList.add('hidden');
    sessionStorage.setItem('currencity_modal_gesehen', 'true');
  }
  cta.addEventListener('click', function(e) { e.stopPropagation(); schliesse_modal(); });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) schliesse_modal(); });
  if (modal) modal.addEventListener('click', function(e) { e.stopPropagation(); });
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
    if (aktives_land) lade_und_zeige_panel(aktives_land);
  });
  baue_waehrungswähler();
  document.getElementById('shuffle-btn').addEventListener('click', shuffle_land);
  setze_shuffle_position();
  window.addEventListener('resize', setze_shuffle_position);
  setup_keyboard();
}

init();