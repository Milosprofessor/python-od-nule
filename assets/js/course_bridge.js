// ============================================================================
// KURS 4: PYTHONIČNI ALATI & SREDNJI NIVO (MOST KA CS101) — 6 LEKCIJA
// 100% Autorski kurikulum platforme 'Python Od Nule'
// ============================================================================
const LESSONS_KURS_BRIDGE = [
  {
    "id": "cb-stringovi-slicing",
    "title": "1. Napredni Stringovi, Slicing [::-1] i join/split",
    "subtitle": "Odsecanje delova teksta, okretanje stringova i spajanje listi u jednu liniju",
    "difficulty": "Srednji nivo",
    "duration": "20 min",
    "analogy": {
      "icon": "✂️",
      "title": "Slicing je kao makaze za filmsku traku!",
      "text": "Zamisli tekst kao traku sa sličicama numerisanim od 0. Zapis tekst[start:stop:korak] ti omogućava da jednim potezom isečeš početak, kraj, svaki drugi znak, ili čak da pustiš film unazad sa [::-1]!"
    },
    "content": "\n          <p class=\"lead\">U ozbiljnim Python programima retko pišemo petlje da bismo isekli deo teksta, okrenuli reč ili spojili listu reči. Za to koristimo <strong>slicing</strong> i ugrađene metode <code>.split()</code>, <code>.splitlines()</code> i <code>.join()</code>.</p>\n          <h3>1. Slicing: <code>tekst[početak : kraj : korak]</code></h3>\n          <pre><code>rec = \"PROGRAMIRANJE\"\nprint(rec[:7])      # Prvih 7 slova -> \"PROGRAM\"\nprint(rec[-4:])     # Poslednja 4 slova -> \"ANJE\"\nprint(rec[::2])     # Svako drugo slovo -> \"PORMRNE\"\nprint(rec[::-1])    # Obrnuto! -> \"EJNARIMARGORP\"</code></pre>\n          <h3>2. Nerazdvojni par: <code>.split()</code> i <code>.join()</code></h3>\n          <p><code>.split(separator)</code> seče tekst u <strong>listu</strong>, dok <code>separator.join(lista)</code> spaja listu stringova nazad u <strong>jedan tekst</strong> — hiljadama puta brže od sabiranja stringova sa <code>+=</code> u petlji!</p>\n          <pre><code>podaci = \"Ana,Marko,Tara,Vuk\"\nimena = podaci.split(\",\")\nprint(\"Lista:\", imena)\nprint(\"Spojeno:\", \" | \".join(imena))</code></pre>\n          <div class=\"tip-box\">\n            <span class=\"tip-icon\">💡</span>\n            <div><strong>Zašto <code>\"\".join(...)</code> umesto <code>+</code> u petlji?</strong> Stringovi u Pythonu su <em>nepromenljivi (immutable)</em>. Svako <code>s += znak</code> u petlji kopira ceo tekst iznova ($O(n^2)$), dok <code>\"\".join(lista)</code> spaja sve u jednom prolazu ($O(n)$)!</div>\n          </div>\n        ",
    "starterCode": "# 1. Isprobaj Slicing i join/split:\nrec = \"PYTHON\"\nprint(\"Prva 3 slova:\", rec[:3])\nprint(\"Obrnuto:\", rec[::-1])\n\nstavke = [\"HTML\", \"CSS\", \"Python\"]\nprint(\"Tehnologije:\", \" -> \".join(stavke))\n",
    "challenges": [
      {
        "title": "Zadatak 1: Okretač reči pomoću slicinga (Zagrevanje)",
        "instruction": "Napiši funkciju <code>obrni(tekst)</code> koja pomoću slicinga <code>[::-1]</code> vraća obrnut tekst. Pozovi je za <code>'Python'</code> i ispiši rezultat.",
        "starter": "def obrni(tekst):\n    # Vrati obrnut tekst koristeći slicing:\n    pass\n\nprint(obrni('Python'))\n",
        "solution": "def obrni(tekst):\n    return tekst[::-1]\n\nprint(obrni('Python'))",
        "hint": "Dovoljna je jedna linija: return tekst[::-1]"
      },
      {
        "title": "Zadatak 2: Generator URL sluga sa split/join (Primena)",
        "instruction": "Napiši funkciju <code>napravi_slug(naslov)</code> koja pretvara naslov u mala slova, uklanja višak razmaka na krajevima i spaja reči crticom <code>'-'</code> (npr. <code>'  Uvod u Python  '</code> -> <code>'uvod-u-python'</code>).",
        "starter": "def napravi_slug(naslov):\n    # Koristi .strip().lower().split() i '-'.join(...):\n    pass\n\nprint(napravi_slug('  Uvod u Python  '))\n",
        "solution": "def napravi_slug(naslov):\n    delovi = naslov.strip().lower().split()\n    return '-'.join(delovi)\n\nprint(napravi_slug('  Uvod u Python  '))",
        "hint": "naslov.strip().lower().split() automatski deli po bilo kom broju razmaka, a '-'.join(delovi) spaja crticom."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Pogrešan poziv join!)",
        "instruction": "Kolega je napisao <code>lista.join(', ')</code> i program puca sa <code>AttributeError</code>. Ispravi funkciju <code>spoji_zarezom(stavke)</code> da ispravno pozove <code>.join()</code> nad separatorom!",
        "starter": "def spoji_zarezom(stavke):\n    # BUG: lista nema metodu .join()!\n    return stavke.join(', ')\n\nprint(spoji_zarezom(['Ana', 'Vuk', 'Tara']))\n",
        "solution": "def spoji_zarezom(stavke):\n    return ', '.join(stavke)\n\nprint(spoji_zarezom(['Ana', 'Vuk', 'Tara']))",
        "hint": "U Pythonu je .join() metoda stringa-separatora: ', '.join(stavke)."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Inicijali punog imena",
        "instruction": "Napiši funkciju <code>inicijali(puno_ime)</code> koja od imena poput <code>'nikola tesla'</code> ili <code>'  ana marija petrović '</code> vraća velika početna slova spojena tačkom (npr. <code>'N.T.'</code> ili <code>'A.M.P.'</code>).",
        "starter": "def inicijali(puno_ime):\n    # Podeli ime na reči, uzmi prvo veliko slovo svake reči i spoji tačkom:\n    pass\n\nprint(inicijali('nikola tesla'))\nprint(inicijali('ana marija petrović'))\n",
        "solution": "def inicijali(puno_ime):\n    reci = puno_ime.strip().split()\n    slova = [r[0].upper() for r in reci]\n    return '.'.join(slova) + '.'\n\nprint(inicijali('nikola tesla'))\nprint(inicijali('ana marija petrović'))",
        "hint": "Za svaku reč r uzmi r[0].upper(), spoji ih sa '.'.join(...) i dodaj završnu tačku '.'."
      }
    ],
    "quiz": [
      {
        "question": "Šta vraća izraz 'PYTHON'[1:4]?",
        "options": [
          "'YTH'",
          "'PYT'",
          "'YTHO'",
          "'THO'"
        ],
        "correct": 0,
        "explanation": "Indeks 1 je 'Y', 2 je 'T', 3 je 'H', a gornja granica 4 nije uključena."
      },
      {
        "question": "Koji je najčistiji Python način da obrneš string s?",
        "options": [
          "s[::-1]",
          "s.reverse()",
          "reverse(s)",
          "s[-1:0]"
        ],
        "correct": 0,
        "explanation": "Stringovi nemaju .reverse(), a korak -1 u slicingu s[::-1] čita string od kraja ka početku."
      },
      {
        "question": "Koji poziv je sintaksno ispravan za spajanje liste ['a', 'b'] crticom?",
        "options": [
          "'-'.join(['a', 'b'])",
          "['a', 'b'].join('-')",
          "join('-', ['a', 'b'])",
          "'a' + join('b')"
        ],
        "correct": 0,
        "explanation": ".join() je metoda stringa koji služi kao separator između elemenata liste."
      },
      {
        "question": "Šta radi tekst.split() bez argumenata na stringu '  jedan   dva\\ttri  '?",
        "options": [
          "Vraća ['jedan', 'dva', 'tri'] ignorišući višak belina",
          "Vraća praznu listu",
          "Baca grešku jer nema separatora",
          "Ostavlja prazne stringove između razmaka"
        ],
        "correct": 0,
        "explanation": "split() bez argumenata deli po svim belinama (razmaci, tabovi, novi redovi) i automatski uklanja prazne delove."
      }
    ],
    "proTip": {
      "title": "Slicing radi i na listama!",
      "content": "Sve što si naučio za stringove važi i za liste: <code>kopija = lista[:]</code> pravi bezbednu kopiju liste, <code>lista[-3:]</code> uzima poslednja 3 elementa, a <code>lista[::-1]</code> vraća obrnutu kopiju bez menjanja originala!"
    }
  },
  {
    "id": "cb-torke-skupovi",
    "title": "2. Torke (tuple), Skupovi (set) i Napredni Rečnici",
    "subtitle": "Nepromenljivi podaci, raspakivanje (unpacking), skupovne operacije i .items()",
    "difficulty": "Srednji nivo",
    "duration": "22 min",
    "analogy": {
      "icon": "📦",
      "title": "Lista je fascikla, Torka je zapečaćena koverta, a Skup je vreća bez duplikata!",
      "text": "Kada podaci ne smeju slučajno da se promene (npr. GPS koordinate ili RGB boja), stavljaš ih u Torku (tuple). Kada želiš da eliminišeš duplikate i nađeš zajedničke prijatelje za delić sekunde, koristiš Skup (set)!"
    },
    "content": "\n          <p class=\"lead\">Pored listi i osnovnih rečnika, Python ima još dve supermoćne kolekcije: <strong>torke (<code>tuple</code>)</strong> i <strong>skupove (<code>set</code>)</strong>, kao i elegantno <strong>raspakivanje (unpacking)</strong>.</p>\n          <h3>1. Torke (<code>tuple</code>) i Raspakivanje (Unpacking)</h3>\n          <pre><code>tacka = (10, 25)\nx, y = tacka          # Raspakivanje u jednoj liniji!\nx, y = y, x           # Zamena vrednosti bez pomoćne promenljive!\nprint(f\"x={x}, y={y}\")</code></pre>\n          <h3>2. Skupovi (<code>set</code>) — Unija, Presek i Razlika</h3>\n          <pre><code>python_tim = {\"Ana\", \"Vuk\", \"Tara\"}\nweb_tim = {\"Tara\", \"Marko\", \"Vuk\"}\nprint(\"Zajednički (presek &):\", python_tim & web_tim)\nprint(\"Svi (unija |):\", python_tim | web_tim)\nprint(\"Samo Python (razlika -):\", python_tim - web_tim)</code></pre>\n          <h3>3. Napredni prolazak kroz Rečnik pomoću <code>.items()</code></h3>\n          <pre><code>ocene = {\"Ana\": 5, \"Vuk\": 4, \"Tara\": 5}\nfor ime, ocena in ocene.items():\n    print(f\"{ime}: {ocena}\")</code></pre>\n        ",
    "starterCode": "# 1. Raspakivanje torke i skupovne operacije:\na, b = 10, 20\na, b = b, a\nprint(\"Posle zamene:\", a, b)\n\ns1 = {1, 2, 3, 4}\ns2 = {3, 4, 5, 6}\nprint(\"Presek (&):\", s1 & s2)\nprint(\"Unija (|):\", s1 | s2)\n",
    "challenges": [
      {
        "title": "Zadatak 1: Zajednički prijatelji pomoću skupa (Zagrevanje)",
        "instruction": "Napiši funkciju <code>zajednicki(a, b)</code> koja prima dve liste i vraća <strong>sortiranu listu</strong> elemenata koji se pojavljuju u obe liste (koristi <code>set(a) & set(b)</code>).",
        "starter": "def zajednicki(a, b):\n    # Nađi presek skupova i vrati sorted(...):\n    pass\n\nprint(zajednicki(['Ana', 'Vuk', 'Ivo'], ['Vuk', 'Tara', 'Ana']))\n",
        "solution": "def zajednicki(a, b):\n    return sorted(set(a) & set(b))\n\nprint(zajednicki(['Ana', 'Vuk', 'Ivo'], ['Vuk', 'Tara', 'Ana']))",
        "hint": "set(a) & set(b) daje skup zajedničkih elemenata, a sorted(...) ga pretvara u uredno sortiranu listu."
      },
      {
        "title": "Zadatak 2: Funkcija koja vraća torku (min, max) (Primena)",
        "instruction": "Napiši funkciju <code>granice(brojevi)</code> koja vraća torku <code>(min(brojevi), max(brojevi))</code>. Raspakuj rezultat u promenljive <code>najmanji, najveci</code> i ispiši ih.",
        "starter": "def granice(brojevi):\n    # Vrati torku (najmanji, najveci):\n    pass\n\nnajmanji, najveci = granice([15, 3, 42, 8])\nprint(f'Min: {najmanji}, Max: {najveci}')\n",
        "solution": "def granice(brojevi):\n    return (min(brojevi), max(brojevi))\n\nnajmanji, najveci = granice([15, 3, 42, 8])\nprint(f'Min: {najmanji}, Max: {najveci}')",
        "hint": "return (min(brojevi), max(brojevi)) vraća torku od 2 broja koja se automatski raspakuje u dve promenljive."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Prazan set nije {}!)",
        "instruction": "Kolega je napisao <code>s = {}</code> misleći da pravi prazan skup, ali <code>{}</code> u Pythonu pravi prazan <strong>rečnik (dict)</strong> pa <code>s.add(x)</code> puca! Ispravi funkciju <code>jedinstveni_skup(lista)</code>.",
        "starter": "def jedinstveni_skup(lista):\n    # BUG: {} je rečnik, ne skup!\n    s = {}\n    for x in lista:\n        s.add(x)\n    return s\n\nprint(jedinstveni_skup([1, 2, 2, 3]))\n",
        "solution": "def jedinstveni_skup(lista):\n    s = set()\n    for x in lista:\n        s.add(x)\n    return s\n\nprint(jedinstveni_skup([1, 2, 2, 3]))",
        "hint": "Prazan skup se uvek kreira pozivom set(), nikada sa {}!"
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Inverzija rečnika (Ključ <-> Vrednost)",
        "instruction": "Napiši funkciju <code>obrni_recnik(d)</code> koja pomoću <code>.items()</code> pravi novi rečnik gde vrednosti postaju ključevi, a ključevi vrednosti (npr. <code>{'SRB': 'Beograd'}</code> -> <code>{'Beograd': 'SRB'}</code>).",
        "starter": "def obrni_recnik(d):\n    # Prođi kroz d.items() i zameni k i v:\n    pass\n\nprint(obrni_recnik({'SRB': 'Beograd', 'FRA': 'Pariz'}))\n",
        "solution": "def obrni_recnik(d):\n    novi = {}\n    for k, v in d.items():\n        novi[v] = k\n    return novi\n\nprint(obrni_recnik({'SRB': 'Beograd', 'FRA': 'Pariz'}))",
        "hint": "Unutar for k, v in d.items(): samo upiši novi[v] = k."
      }
    ],
    "quiz": [
      {
        "question": "Koja je glavna razlika između liste [1, 2] i torke (1, 2)?",
        "options": [
          "Torka je nepromenljiva (immutable), a lista se može menjati",
          "Torka može čuvati samo brojeve",
          "Lista je uvek brža od torke",
          "Nema nikakve razlike"
        ],
        "correct": 0,
        "explanation": "Torka ne podržava .append() ni izmenu elemenata, pa je sigurnija za fiksne podatke i može biti ključ u rečniku."
      },
      {
        "question": "Koji tip objekta pravi izraz x = {} u Pythonu?",
        "options": [
          "dict (prazan rečnik)",
          "set (prazan skup)",
          "tuple (prazna torka)",
          "list (prazna lista)"
        ],
        "correct": 0,
        "explanation": "{} uvek kreira prazan rečnik. Za prazan skup mora se napisati set()."
      },
      {
        "question": "Šta vraća izraz {1, 2, 3} & {2, 3, 4}?",
        "options": [
          "{2, 3}",
          "{1, 2, 3, 4}",
          "{1, 4}",
          "Grešku TypeError"
        ],
        "correct": 0,
        "explanation": "Operator & nad skupovima računa presek — elemente koji se nalaze u oba skupa."
      },
      {
        "question": "Čemu služi metoda d.items() nad rečnikom?",
        "options": [
          "Vraća parove (ključ, vrednost) za lako raspakivanje u for petlji",
          "Briše sve stavke iz rečnika",
          "Sortira rečnik abecedno",
          "Broji koliko ima slova u rečniku"
        ],
        "correct": 0,
        "explanation": "for k, v in d.items(): je najčistiji način za istovremeni rad sa ključevima i vrednostima."
      }
    ],
    "proTip": {
      "title": "Torka sa jednim elementom zahteva zarez!",
      "content": "<code>(5)</code> je običan broj 5 u zagradama, dok je <code>(5,)</code> prava jednočlana torka! Taj jedan zarez je česta zamka na tehničkim testovima."
    }
  },
  {
    "id": "cb-comprehensions",
    "title": "3. List i Dict Comprehensions (Pythoničke Petlje)",
    "subtitle": "Transformacija i filtriranje kolekcija u jednoj kristalno čistoj i brzoj liniji",
    "difficulty": "Srednji nivo",
    "duration": "22 min",
    "analogy": {
      "icon": "⚡",
      "title": "Fabrička traka u jednoj rečenici!",
      "text": "Umesto da kažeš: 'Napravi praznu kutiju, uzmi svaki broj, proveri da li je paran, kvadriraj ga i ubaci u kutiju', u Pythonu kažeš u jednoj rečenici: [x*x for x in brojevi if x % 2 == 0]!"
    },
    "content": "\n          <p class=\"lead\"><strong>List Comprehension</strong> i <strong>Dict Comprehension</strong> su zaštitni znak iskusnog Python programera — čitljiviji su, kraći i u CPythonu brži od ručnog <code>.append()</code> u petlji. U <strong>CS101 Pro</strong> koristićemo ih stalno!</p>\n          <h3>1. List Comprehension: <code>[izraz for element in kolekcija if uslov]</code></h3>\n          <pre><code>brojevi = [1, 2, 3, 4, 5, 6]\nkvadrati_parnih = [x * x for x in brojevi if x % 2 == 0]\nprint(\"Kvadrati parnih:\", kvadrati_parnih)  # [4, 16, 36]</code></pre>\n          <h3>2. Dict Comprehension: <code>{ključ: vrednost for ...}</code></h3>\n          <pre><code>korisnici = [{\"id\": 1, \"ime\": \"Ana\"}, {\"id\": 2, \"ime\": \"Vuk\"}]\nmapa_po_id = {k[\"id\"]: k[\"ime\"] for k in korisnici}\nprint(\"Indeks:\", mapa_po_id)  # {1: 'Ana', 2: 'Vuk'}</code></pre>\n          <div class=\"tip-box\">\n            <span class=\"tip-icon\">🚀</span>\n            <div><strong>Direktna veza sa CS101 Pro:</strong> Upravo ovakav <code>{k['id']: k['ime'] for k in korisnici}</code> koristićemo u Modulu 9 za munjeviti SQL <code>INNER JOIN</code> u $O(n)$ vremenu!</div>\n          </div>\n        ",
    "starterCode": "# Isprobaj List i Dict Comprehension:\ncene = [100, 250, 400, 80]\nsa_popustom = [int(c * 0.9) for c in cene if c >= 100]\nprint(\"Sa 10% popusta:\", sa_popustom)\n\nreci = [\"python\", \"kod\", \"algoritam\"]\nduzine = {r: len(r) for r in reci}\nprint(\"Dužine reči:\", duzine)\n",
    "challenges": [
      {
        "title": "Zadatak 1: Filtriranje pozitivnih brojeva (Zagrevanje)",
        "instruction": "Napiši funkciju <code>samo_pozitivni(brojevi)</code> koristeći List Comprehension koja vraća novu listu samo sa brojevima strogo većim od 0.",
        "starter": "def samo_pozitivni(brojevi):\n    # Koristi [x for x in ... if ...]:\n    pass\n\nprint(samo_pozitivni([-5, 0, 3, -1, 8]))\n",
        "solution": "def samo_pozitivni(brojevi):\n    return [x for x in brojevi if x > 0]\n\nprint(samo_pozitivni([-5, 0, 3, -1, 8]))",
        "hint": "return [x for x in brojevi if x > 0]"
      },
      {
        "title": "Zadatak 2: Rečnik kvadrata sa Dict Comprehension (Primena)",
        "instruction": "Napiši funkciju <code>mapa_kvadrata(n)</code> koja pomoću Dict Comprehension-a vraća rečnik za brojeve od <code>1</code> do <code>n</code> (uključivo), gde je ključ broj, a vrednost njegov kvadrat (npr. za 3 -> <code>{1: 1, 2: 4, 3: 9}</code>).",
        "starter": "def mapa_kvadrata(n):\n    # Koristi {i: i*i for i in range(1, n+1)}:\n    pass\n\nprint(mapa_kvadrata(4))\n",
        "solution": "def mapa_kvadrata(n):\n    return {i: i * i for i in range(1, n + 1)}\n\nprint(mapa_kvadrata(4))",
        "hint": "Ne zaboravi da range(1, n + 1) uključuje i sam broj n."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Pogrešna pozicija if-else!)",
        "instruction": "Kada u List Comprehension-u imaš i <code>if</code> i <code>else</code> (zamena vrednosti), <code>if-else</code> ide <strong>ISPRED</strong> <code>for</code>, a ne iza! Ispravi funkciju <code>etikete(brojevi)</code> da za parne stavi <code>'paran'</code>, a za neparne <code>'neparan'</code>.",
        "starter": "def etikete(brojevi):\n    # BUG: if-else za transformaciju ide ISPRED for!\n    return ['paran' for x in brojevi if x % 2 == 0]\n\nprint(etikete([1, 2, 3, 4]))\n",
        "solution": "def etikete(brojevi):\n    return ['paran' if x % 2 == 0 else 'neparan' for x in brojevi]\n\nprint(etikete([1, 2, 3, 4]))",
        "hint": "Sintaksa je: ['paran' if x % 2 == 0 else 'neparan' for x in brojevi]."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Heš indeks učenika za brzu pretragu",
        "instruction": "Napiši funkciju <code>indeksiraj_ucenike(lista)</code> koja prima listu rečnika (svaki ima <code>'id'</code> i <code>'ime'</code>) i pomoću Dict Comprehension-a vraća mapu <code>{id: ime}</code> samo za učenike koji imaju <code>'aktivan': True</code>.",
        "starter": "def indeksiraj_ucenike(lista):\n    # Napravi {u['id']: u['ime'] for u in lista if ...}:\n    pass\n\ndb = [\n    {'id': 1, 'ime': 'Ana', 'aktivan': True},\n    {'id': 2, 'ime': 'Ivo', 'aktivan': False},\n    {'id': 3, 'ime': 'Vuk', 'aktivan': True}\n]\nprint(indeksiraj_ucenike(db))\n",
        "solution": "def indeksiraj_ucenike(lista):\n    return {u['id']: u['ime'] for u in lista if u['aktivan']}\n\ndb = [\n    {'id': 1, 'ime': 'Ana', 'aktivan': True},\n    {'id': 2, 'ime': 'Ivo', 'aktivan': False},\n    {'id': 3, 'ime': 'Vuk', 'aktivan': True}\n]\nprint(indeksiraj_ucenike(db))",
        "hint": "Uslov na kraju je jednostavno: if u['aktivan']"
      }
    ],
    "quiz": [
      {
        "question": "Šta proizvodi izraz [x * 2 for x in [1, 2, 3]]?",
        "options": [
          "[2, 4, 6]",
          "[1, 2, 3, 1, 2, 3]",
          "{2, 4, 6}",
          "6"
        ],
        "correct": 0,
        "explanation": "Svaki element liste množi se sa 2 i dobija se nova lista [2, 4, 6]."
      },
      {
        "question": "Gde stoji if kada FILTRIRAMO elemente u List Comprehension-u (bez else)?",
        "options": [
          "Na kraju, posle for dela",
          "Na samom početku, pre izraza",
          "Izvan uglastih zagrada",
          "Nije dozvoljeno filtrirati"
        ],
        "correct": 0,
        "explanation": "Za filtriranje (samo if): [x for x in lista if uslov]. Za if-else transformaciju: [a if uslov else b for x in lista]."
      },
      {
        "question": "Koji tip vraća izraz {x: len(x) for x in ['a', 'bc']}?",
        "options": [
          "dict ({'a': 1, 'bc': 2})",
          "list",
          "set",
          "tuple"
        ],
        "correct": 0,
        "explanation": "Vitičaste zagrade sa dvotačkom (ključ: vrednost) prave Dict Comprehension."
      },
      {
        "question": "Kada NE treba koristiti List Comprehension?",
        "options": [
          "Kada je logika previše složena (3+ ugnježdene petlje) i gubi se čitljivost",
          "Kada lista ima više od 10 elemenata",
          "Kada radimo sa stringovima",
          "Nikada, uvek ga treba forsirati"
        ],
        "correct": 0,
        "explanation": "Čitljivost je uvek na prvom mestu! Ako comprehension postane predugačak, obična for petlja je bolji izbor."
      }
    ],
    "proTip": {
      "title": "Generator izrazi štede RAM memoriju!",
      "content": "Kada sabiraš ili spajaš elemente sa <code>sum(x*x for x in range(1000))</code> ili <code>''.join(chr(b) for b in brojevi)</code>, ne moraš čak ni stavljati uglaste zagrade — Python obrađuje element po element bez pravljenja privremene liste!"
    }
  },
  {
    "id": "cb-lambda-funkcionalni",
    "title": "4. Funkcionalni Python: lambda, sorted(key=...), any, all i zip",
    "subtitle": "Sortiranje složenih objekata po bilo kom polju i brze logičke provere kolekcija",
    "difficulty": "Srednji nivo",
    "duration": "24 min",
    "analogy": {
      "icon": "🎛️",
      "title": "Lambda je mini-funkcija za jednokratnu upotrebu!",
      "text": "Kada sortiraš tabelu igrača po XP poenima ili tražiš najskuplji proizvod, ne moraš da pišeš celu def funkciju od 3 reda samo da bi izvukao jednu kolonu. Napišeš kratku lambda x: x['xp'] direktno tamo gde je potrebna!"
    },
    "content": "\n          <p class=\"lead\">U CS101 Pro i realnom softveru stalno sortiramo liste rečnika, tražimo maksimum po ceni ili proveravamo da li lozinka ispunjava sva pravila. Četiri alata čine ovo bezbolnim: <code>lambda</code>, <code>key=</code>, <code>any()</code>/<code>all()</code> i <code>zip()</code>.</p>\n          <h3>1. <code>lambda</code> + <code>sorted()</code> / <code>max()</code></h3>\n          <pre><code>proizvodi = [\n    {\"naziv\": \"Miš\", \"cena\": 25},\n    {\"naziv\": \"Monitor\", \"cena\": 300},\n    {\"naziv\": \"Tastatura\", \"cena\": 80}\n]\npo_ceni = sorted(proizvodi, key=lambda p: p[\"cena\"], reverse=True)\nnajskuplji = max(proizvodi, key=lambda p: p[\"cena\"])\nprint(\"Najskuplji:\", najskuplji[\"naziv\"])</code></pre>\n          <h3>2. <code>any()</code>, <code>all()</code> i <code>zip()</code></h3>\n          <pre><code>lozinka = \"Tajna123\"\nprint(\"Ima cifru (any)?\", any(c.isdigit() for c in lozinka))\nprint(\"Svi pozitivni (all)?\", all(x > 0 for x in [3, 5, 9]))\n\nimena = [\"Ana\", \"Vuk\"]\npoeni = [95, 88]\nfor ime, p in zip(imena, poeni):\n    print(f\"{ime} -> {p} poena\")</code></pre>\n        ",
    "starterCode": "# Isprobaj lambda, sorted, any, all i zip:\nigraci = [{\"ime\": \"Ana\", \"xp\": 450}, {\"ime\": \"Vuk\", \"xp\": 920}, {\"ime\": \"Tara\", \"xp\": 710}]\nrang = sorted(igraci, key=lambda x: x[\"xp\"], reverse=True)\nfor i, ig in enumerate(rang, 1):\n    print(f\"{i}. {ig['ime']} ({ig['xp']} XP)\")\n",
    "challenges": [
      {
        "title": "Zadatak 1: Sortiranje reči po dužini pomoću key=lambda (Zagrevanje)",
        "instruction": "Napiši funkciju <code>sortiraj_po_duzini(reci)</code> koja pomoću <code>sorted(..., key=lambda r: len(r))</code> vraća novu listu reči poređanu od najkraće ka najdužoj.",
        "starter": "def sortiraj_po_duzini(reci):\n    # Sortiraj reči po len(r):\n    pass\n\nprint(sortiraj_po_duzini(['algoritam', 'kod', 'python', 'a']))\n",
        "solution": "def sortiraj_po_duzini(reci):\n    return sorted(reci, key=lambda r: len(r))\n\nprint(sortiraj_po_duzini(['algoritam', 'kod', 'python', 'a']))",
        "hint": "return sorted(reci, key=lambda r: len(r))"
      },
      {
        "title": "Zadatak 2: Provera da li su svi položili sa all() (Primena)",
        "instruction": "Napiši funkciju <code>svi_polozili(poeni, prag=50)</code> koja pomoću <code>all()</code> vraća <code>True</code> ako je svaki rezultat u listi <code>>= prag</code>, inače <code>False</code>.",
        "starter": "def svi_polozili(poeni, prag=50):\n    # Koristi all(...):\n    pass\n\nprint(svi_polozili([60, 85, 50]))\nprint(svi_polozili([60, 45, 90]))\n",
        "solution": "def svi_polozili(poeni, prag=50):\n    return all(p >= prag for p in poeni)\n\nprint(svi_polozili([60, 85, 50]))\nprint(svi_polozili([60, 45, 90]))",
        "hint": "return all(p >= prag for p in poeni)"
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (max() bez key puca na rečnicima!)",
        "instruction": "U Pythonu 3 ne možeš direktno porediti dva rečnika sa <code>max(artikli)</code> — baca <code>TypeError</code>! Ispravi funkciju <code>najjeftiniji(artikli)</code> da pomoću <code>min(..., key=lambda ...)</code> vrati <strong>naziv</strong> najjeftinijeg artikla.",
        "starter": "def najjeftiniji(artikli):\n    # BUG: min(artikli) ne zna po kom polju da poredi rečnike!\n    naj = min(artikli)\n    return naj['naziv']\n\ndata = [{'naziv': 'Knjiga', 'cena': 900}, {'naziv': 'Olovka', 'cena': 120}]\nprint(najjeftiniji(data))\n",
        "solution": "def najjeftiniji(artikli):\n    naj = min(artikli, key=lambda x: x['cena'])\n    return naj['naziv']\n\ndata = [{'naziv': 'Knjiga', 'cena': 900}, {'naziv': 'Olovka', 'cena': 120}]\nprint(najjeftiniji(data))",
        "hint": "Dodaj key=lambda x: x['cena'] kao drugi argument funkcije min()."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Spajanje dve liste u rečnik uz zip()",
        "instruction": "Napiši funkciju <code>spoji_u_recnik(kljucevi, vrednosti)</code> koja pomoću <code>zip()</code> spaja dve paralelne liste u jedan rečnik (npr. <code>['Ana', 'Vuk']</code> i <code>[100, 200]</code> -> <code>{'Ana': 100, 'Vuk': 200}</code>).",
        "starter": "def spoji_u_recnik(kljucevi, vrednosti):\n    # Koristi dict(zip(...)) ili Dict Comprehension sa zip():\n    pass\n\nprint(spoji_u_recnik(['Ana', 'Vuk'], [100, 200]))\n",
        "solution": "def spoji_u_recnik(kljucevi, vrednosti):\n    return {k: v for k, v in zip(kljucevi, vrednosti)}\n\nprint(spoji_u_recnik(['Ana', 'Vuk'], [100, 200]))",
        "hint": "Najkraće je return dict(zip(kljucevi, vrednosti)) ili {k: v for k, v in zip(kljucevi, vrednosti)}."
      }
    ],
    "quiz": [
      {
        "question": "Šta je lambda funkcija u Pythonu?",
        "options": [
          "Kratka anonimna funkcija od jednog izraza",
          "Specijalna vrsta petlje",
          "Biblioteka za matematiku",
          "Način za čuvanje fajlova"
        ],
        "correct": 0,
        "explanation": "lambda x: x['cena'] je jednolinijska funkcija bez imena koja se najčešće prosleđuje kao key= u sorted/max/min."
      },
      {
        "question": "Kada any([False, False, True]) vraća True?",
        "options": [
          "Čim je bar jedan element tačan (True)",
          "Samo ako su svi elementi tačni",
          "Samo ako je prvi element tačan",
          "Nikada"
        ],
        "correct": 0,
        "explanation": "any() proverava da li BAR JEDAN element zadovoljava uslov, dok all() traži da SVI zadovolje."
      },
      {
        "question": "Čemu služi funkcija zip(['A', 'B'], [1, 2])?",
        "options": [
          "Uparuje elemente po poziciji u parove ('A', 1), ('B', 2)",
          "Kompresuje fajlove u .zip arhivu",
          "Briše duplikate iz lista",
          "Sortira dve liste"
        ],
        "correct": 0,
        "explanation": "U Pythonu zip() zakopčava dve ili više sekvenci poput rajsferšlusa u parove."
      },
      {
        "question": "Šta radi reverse=True u sorted(lista, key=..., reverse=True)?",
        "options": [
          "Sortira opadajuće (od najvećeg ka najmanjem)",
          "Obrće redosled slova u svakoj reči",
          "Menja originalnu listu u mestu",
          "Ignoriše key funkciju"
        ],
        "correct": 0,
        "explanation": "sorted() uvek vraća novu listu, a reverse=True uređuje rezultate od najvećeg ka najmanjem."
      }
    ],
    "proTip": {
      "title": "sorted() vs .sort()",
      "content": "<code>lista.sort()</code> menja originalnu listu i vraća <code>None</code>! Funkcija <code>sorted(lista)</code> čuva original netaknutim i vraća novu sortiranu listu — zato je <code>sorted()</code> bezbedniji izbor unutar funkcija."
    }
  },
  {
    "id": "cb-moduli-pip-venv",
    "title": "5. Profesionalni Rad na Računaru: Moduli, pip i venv",
    "subtitle": "Kako se organizuju pravi projekti u više .py fajlova i instaliraju biblioteke bez haosa",
    "difficulty": "Srednji nivo",
    "duration": "20 min",
    "analogy": {
      "icon": "🧰",
      "title": "venv je odvojena kutija sa alatom za svaki projekat!",
      "text": "Ako praviš igricu i veb-sajt, svaki projekat koristi svoje biblioteke (pip). Virtuelno okruženje (venv) pravi izolovanu radionicu za svaki projekat kako se verzije biblioteka nikada ne bi posvađale!"
    },
    "content": "\n          <p class=\"lead\">Kada tvoj program preraste 100 linija, više ga ne držiš u jednom fajlu. Profesionalci dele kod u <strong>module</strong> (<code>pomocne.py</code> + <code>main.py</code>), koriste <code>if __name__ == \"__main__\":</code> i izoluju pakete pomoću <code>venv</code> i <code>pip</code>.</p>\n          <h3>1. Komande na pravom računaru (Terminal / VS Code)</h3>\n          <pre><code># 1. Kreiraj izolovano virtuelno okruženje za projekat:\n# python -m venv .venv\n# 2. Aktiviraj ga (Windows: .venv\\Scripts\\activate | Linux/Mac: source .venv/bin/activate)\n# 3. Instaliraj paket i sačuvaj spisak zavisnosti:\n# pip install requests\n# pip freeze > requirements.txt</code></pre>\n          <h3>2. Čemu služi <code>if __name__ == \"__main__\":</code>?</h3>\n          <p>Kada fajl pokreneš direktno (<code>python moj_modul.py</code>), Python postavlja <code>__name__ = \"__main__\"</code>. Kada ga neko <em>uveze</em> (<code>import moj_modul</code>), <code>__name__</code> je ime fajla — pa test-kod unutar <code>if __name__ == \"__main__\":</code> neće slučajno krenuti pri uvozu!</p>\n          <pre><code>def formatiraj_paket(ime, verzija=\"1.0.0\"):\n    return f\"{ime.strip().lower()}=={verzija.strip()}\"\n\nif __name__ == \"__main__\":\n    print(\"Direktno pokrenuto:\", formatiraj_paket(\"Requests\", \"2.31.0\"))</code></pre>\n        ",
    "starterCode": "# Simulacija generatora requirements.txt fajla za projekat:\npaketi = [(\"requests\", \"2.31.0\"), (\"pytest\", \"8.0.0\"), (\"flask\", \"3.0.2\")]\nlinije = [f\"{ime}=={ver}\" for ime, ver in paketi]\nprint(\"requirements.txt:\")\nprint(\"\\n\".join(linije))\n",
    "challenges": [
      {
        "title": "Zadatak 1: Formatiranje requirements.txt linije (Zagrevanje)",
        "instruction": "Napiši funkciju <code>formatiraj_paket(ime, verzija)</code> koja uklanja razmake, pretvara ime u mala slova i vraća format <code>'ime==verzija'</code> (npr. <code>'  Flask ', ' 3.0 '</code> -> <code>'flask==3.0'</code>).",
        "starter": "def formatiraj_paket(ime, verzija):\n    # Vrati 'ime==verzija':\n    pass\n\nprint(formatiraj_paket('  Flask ', ' 3.0 '))\n",
        "solution": "def formatiraj_paket(ime, verzija):\n    return f'{ime.strip().lower()}=={verzija.strip()}'\n\nprint(formatiraj_paket('  Flask ', ' 3.0 '))",
        "hint": "Upotrebi f-string sa ime.strip().lower() i verzija.strip()."
      },
      {
        "title": "Zadatak 2: Parsiranje requirements.txt fajla (Primena)",
        "instruction": "Napiši funkciju <code>parsiraj_pakete(tekst)</code> koja prima višelinijski tekst (npr. <code>'flask==3.0\\n# komentar\\npytest==8.0'</code>), ignoriše prazne redove i komentare koji počinju sa <code>#</code>, i vraća rečnik <code>{ime: verzija}</code>.",
        "starter": "def parsiraj_pakete(tekst):\n    # Podeli po redovima, preskoči prazne i #, razdvoji po '==':\n    pass\n\nsample = 'flask==3.0\\n# test paket\\npytest==8.0'\nprint(parsiraj_pakete(sample))\n",
        "solution": "def parsiraj_pakete(tekst):\n    rez = {}\n    for red in tekst.splitlines():\n        r = red.strip()\n        if r and not r.startswith('#') and '==' in r:\n            ime, ver = r.split('==')\n            rez[ime.strip()] = ver.strip()\n    return rez\n\nsample = 'flask==3.0\\n# test paket\\npytest==8.0'\nprint(parsiraj_pakete(sample))",
        "hint": "Proveri if r and not r.startswith('#') and '==' in r:, zatim raspakuj ime, ver = r.split('==')."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Neispravna provera ekstenzije .py!)",
        "instruction": "Kolega proverava da li je fajl Python modul pomoću <code>'.py' in naziv</code>, ali to pogrešno prihvata i <code>'moj.py.bak'</code>! Ispravi funkciju <code>je_python_fajl(naziv)</code> da koristi <code>.endswith('.py')</code> (ne zavisno od velikih/malih slova).",
        "starter": "def je_python_fajl(naziv):\n    # BUG: '.py' in 'skripta.py.bak' vraća True!\n    return '.py' in naziv\n\nprint('app.py ->', je_python_fajl('app.py'))\nprint('app.py.bak ->', je_python_fajl('app.py.bak'))\n",
        "solution": "def je_python_fajl(naziv):\n    return naziv.strip().lower().endswith('.py')\n\nprint('app.py ->', je_python_fajl('app.py'))\nprint('app.py.bak ->', je_python_fajl('app.py.bak'))",
        "hint": "Koristi naziv.strip().lower().endswith('.py')."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Provera nedostajućih paketa",
        "instruction": "Napiši funkciju <code>nedostaju_paketi(potrebni, instalirani)</code> koja prima dve liste imena paketa (ne zavisno od velikih/malih slova) i vraća <strong>sortiranu listu</strong> paketa (malim slovima) koje još treba instalirati pomoću <code>pip</code>.",
        "starter": "def nedostaju_paketi(potrebni, instalirani):\n    # Koristi razliku skupova (potrebni - instalirani):\n    pass\n\nprint(nedostaju_paketi(['Flask', 'Pytest', 'Requests'], ['flask']))\n",
        "solution": "def nedostaju_paketi(potrebni, instalirani):\n    pot = {p.lower() for p in potrebni}\n    inst = {i.lower() for i in instalirani}\n    return sorted(pot - inst)\n\nprint(nedostaju_paketi(['Flask', 'Pytest', 'Requests'], ['flask']))",
        "hint": "Napravi dva skupa malim slovima i vrati sorted(pot - inst)."
      }
    ],
    "quiz": [
      {
        "question": "Čemu služi virtuelno okruženje (venv) u Pythonu?",
        "options": [
          "Izoluje biblioteke svakog projekta da ne bi došlo do sukoba verzija",
          "Ubrzava internet konekciju",
          "Menja temu u VS Code-u",
          "Pretvara Python u JavaScript"
        ],
        "correct": 0,
        "explanation": "Svaki projekat u svom .venv folderu ima sopstvene verzije biblioteka."
      },
      {
        "question": "Zašto se koristi blok if __name__ == '__main__':?",
        "options": [
          "Da se glavni kod pokrene samo kad direktno pokrenemo fajl, a ne kad ga importujemo",
          "Da ubrza petlje za 50%",
          "Zato što Python bez njega ne može da definiše funkcije",
          "Da sakrije lozinke u kodu"
        ],
        "correct": 0,
        "explanation": "Pri uvozu (import) __name__ dobija ime modula, pa se kod u tom if bloku preskače."
      },
      {
        "question": "Čemu služi fajl requirements.txt?",
        "options": [
          "Čuva spisak i verzije svih pip paketa potrebnih za projekat",
          "Čuva lozinke korisnika",
          "Sadrži HTML dizajn sajta",
          "Briše stare Python fajlove"
        ],
        "correct": 0,
        "explanation": "Drugi programer može jednom komandom pip install -r requirements.txt instalirati identično okruženje."
      },
      {
        "question": "Koja komanda instalira biblioteku requests na tvom računaru?",
        "options": [
          "pip install requests",
          "python download requests",
          "import install requests",
          "get requests"
        ],
        "correct": 0,
        "explanation": "pip je zvanični menadžer paketa za Python."
      }
    ],
    "proTip": {
      "title": "Nikada ne kači .venv folder na GitHub!",
      "content": "Uvek stavi <code>.venv/</code> u fajl <code>.gitignore</code>, a na GitHub okači samo mali tekstualni <code>requirements.txt</code>. Tako projekat ima par kilobajta umesto stotina megabajta!"
    }
  },
  {
    "id": "cb-analizator-podataka",
    "title": "6. Mini-Projekat: Analizator Podataka iz Teksta",
    "subtitle": "Spajamo slicing, skupove, comprehensions, lambda i zip u kompletan alat za analizu",
    "difficulty": "Projekat",
    "duration": "25 min",
    "analogy": {
      "icon": "📊",
      "title": "Tvoja prva mini-analitička mašina!",
      "text": "Baš kao što alati za analitiku analiziraju komentare, logove i prodaju, danas u samo dvadesetak linija čistog Pythoničnog koda pravimo analizator teksta i ocena — poslednji korak pred CS101 Pro!"
    },
    "content": "\n          <p class=\"lead\">U završnoj lekciji međukursa spajamo <strong>sve</strong> Pythoničke alate na jednom mestu: čišćenje teksta (<code>.split()</code> / <code>.strip()</code>), uklanjanje duplikata (<code>set</code>), brojanje i filtriranje (<code>comprehensions</code>) i rangiranje (<code>sorted(..., key=lambda ...)</code>).</p>\n          <h3>Primer: Top reči u tekstu u 8 linija!</h3>\n          <pre><code>tekst = \"Python je lak i Python je moćan jer je Python čitljiv\"\nreci = tekst.lower().split()\nbrojac = {r: reci.count(r) for r in set(reci)}\ntop = sorted(brojac.items(), key=lambda par: par[1], reverse=True)\nprint(\"Top 3 reči:\", top[:3])</code></pre>\n          <div class=\"tip-box\">\n            <span class=\"tip-icon\">🎓</span>\n            <div><strong>Spreman si za CS101 Pro!</strong> Kada završiš ova 4 zadatka, svaka linija koda u <strong>Kursu 5 (CS101 Pro)</strong> biće ti potpuno prirodna i jasna.</div>\n          </div>\n        ",
    "starterCode": "# Mini-analizator teksta — spoji sve alate Kursa 4:\ntekst = \"Python kod je čist i Python kod je brz\"\nreci = tekst.lower().split()\njedinstvene = set(reci)\nprint(\"Ukupno reči:\", len(reci))\nprint(\"Jedinstvenih reči:\", len(jedinstvene))\n\nbrojac = {r: reci.count(r) for r in jedinstvene}\ntop = sorted(brojac.items(), key=lambda x: x[1], reverse=True)\nprint(\"Najčešće reči:\", top[:3])\n",
    "challenges": [
      {
        "title": "Zadatak 1: Broj jedinstvenih reči (Zagrevanje)",
        "instruction": "Napiši funkciju <code>broj_jedinstvenih_reci(tekst)</code> koja pretvara tekst u mala slova, deli ga na reči i pomoću <code>set</code> vraća broj jedinstvenih reči.",
        "starter": "def broj_jedinstvenih_reci(tekst):\n    # Vrati len(set(...)):\n    pass\n\nprint(broj_jedinstvenih_reci('Python je super i python je brz'))\n",
        "solution": "def broj_jedinstvenih_reci(tekst):\n    return len(set(tekst.lower().split()))\n\nprint(broj_jedinstvenih_reci('Python je super i python je brz'))",
        "hint": "tekst.lower().split() daje listu reči malim slovima, a len(set(...)) broji jedinstvene."
      },
      {
        "title": "Zadatak 2: Najduža reč u rečenici (Primena)",
        "instruction": "Napiši funkciju <code>najduza_rec(tekst)</code> koja pomoću <code>max(..., key=lambda r: len(r))</code> vraća najdužu reč iz teksta (ako je tekst prazan, vrati <code>''</code>).",
        "starter": "def najduza_rec(tekst):\n    # Podeli tekst i nađi max po dužini:\n    pass\n\nprint(najduza_rec('Učimo Python programiranje danas'))\n",
        "solution": "def najduza_rec(tekst):\n    reci = tekst.split()\n    if not reci:\n        return ''\n    return max(reci, key=lambda r: len(r))\n\nprint(najduza_rec('Učimo Python programiranje danas'))",
        "hint": "Proveri if not reci: return '', pa vrati max(reci, key=lambda r: len(r))."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Top N vraća samo 1 element!)",
        "instruction": "Kolega je napisao <code>sortirano[n]</code> umesto slicing-a <code>sortirano[:n]</code>, pa funkcija vraća samo jedan element ili baca <code>IndexError</code>! Ispravi funkciju <code>top_n_poena(igraci, n)</code> da vrati listu <strong>imena</strong> najboljih <code>n</code> igrača.",
        "starter": "def top_n_poena(igraci, n):\n    sortirano = sorted(igraci, key=lambda x: x['xp'], reverse=True)\n    # BUG: sortirano[n] uzima samo jedan element!\n    return [x['ime'] for x in [sortirano[n]]]\n\ndb = [{'ime': 'Ana', 'xp': 400}, {'ime': 'Vuk', 'xp': 900}, {'ime': 'Tara', 'xp': 700}]\nprint(top_n_poena(db, 2))\n",
        "solution": "def top_n_poena(igraci, n):\n    sortirano = sorted(igraci, key=lambda x: x['xp'], reverse=True)\n    return [x['ime'] for x in sortirano[:n]]\n\ndb = [{'ime': 'Ana', 'xp': 400}, {'ime': 'Vuk', 'xp': 900}, {'ime': 'Tara', 'xp': 700}]\nprint(top_n_poena(db, 2))",
        "hint": "Zameni [sortirano[n]] sa sortirano[:n]."
      },
      {
        "title": "Zadatak 4: 🏆 Diplomski Zadatak Mosta: Kompletan Izveštaj Teksta",
        "instruction": "Napiši funkciju <code>analiziraj(tekst)</code> koja vraća rečnik sa 3 ključa: <code>'ukupno'</code> (ukupan broj reči), <code>'jedinstvenih'</code> (broj različitih reči malim slovima) i <code>'najcesca'</code> (reč koja se najviše puta ponavlja, malim slovima).",
        "starter": "def analiziraj(tekst):\n    # Spoji split, set, brojanje i max(key=lambda...):\n    pass\n\nprint(analiziraj('kod je čist i kod je brz jer je kod umetnost'))\n",
        "solution": "def analiziraj(tekst):\n    reci = tekst.lower().split()\n    if not reci:\n        return {'ukupno': 0, 'jedinstvenih': 0, 'najcesca': ''}\n    brojac = {}\n    for r in reci:\n        brojac[r] = brojac.get(r, 0) + 1\n    naj = max(brojac.items(), key=lambda x: x[1])[0]\n    return {'ukupno': len(reci), 'jedinstvenih': len(brojac), 'najcesca': naj}\n\nprint(analiziraj('kod je čist i kod je brz jer je kod umetnost'))",
        "hint": "Izbroj svaku reč u rečniku brojac, a zatim pronađi maksimum pomoću max(brojac.items(), key=lambda x: x[1])[0]."
      }
    ],
    "quiz": [
      {
        "question": "Šta vraća lista[:3] ako lista ima samo 2 elementa ['A', 'B']?",
        "options": [
          "['A', 'B'] bez ikakve greške!",
          "IndexError",
          "['A', 'B', None]",
          "Praznu listu []"
        ],
        "correct": 0,
        "explanation": "Slicing u Pythonu je bezbedan i nikada ne baca IndexError ako je granica veća od dužine liste."
      },
      {
        "question": "Kako najbrže izbrojimo učestalost reči u jednoj prolaznoj petlji?",
        "options": [
          "brojac[r] = brojac.get(r, 0) + 1",
          "Sortiranjem liste posle svake reči",
          "Pravljenjem 2D matrice",
          "Korišćenjem input()"
        ],
        "correct": 0,
        "explanation": "Heš mapa sa .get(r, 0) + 1 broji sve reči u O(n) linearnom vremenu."
      },
      {
        "question": "Šta vraća izraz max([('a', 2), ('b', 5)], key=lambda x: x[1])[0]?",
        "options": [
          "'b'",
          "5",
          "'a'",
          "('b', 5)"
        ],
        "correct": 0,
        "explanation": "max() pronalazi torku ('b', 5) jer ima najveći x[1]=5, a [0] izvlači samo ključ 'b'."
      },
      {
        "question": "Koji je sledeći logičan korak nakon završetka ovog međukursa?",
        "options": [
          "Kurs 5: Računarstvo i Python Inženjerstvo (CS101 Pro)",
          "Ponovno učenje print('Zdravo')",
          "Brisanje Pythona sa računara",
          "Prelazak na HTML bez koda"
        ],
        "correct": 0,
        "explanation": "Sada imaš sve Pythoničke alate spremne za CS101 Pro: bitove, Big-O, OOP, Regex, TDD, JSON i SQL!"
      }
    ],
    "proTip": {
      "title": "Dobrodošao u srednji nivo Python programiranja!",
      "content": "Sada pišeš kod kao pravi Python inženjer: čist, koncizan i brz. Čeka te <strong>Kurs 5: CS101 Pro</strong> gde ove alate koristimo za prave računarske nauke!"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_KURS_BRIDGE };
}
