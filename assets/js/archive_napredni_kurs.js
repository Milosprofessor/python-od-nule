/** Arhiviran kurs za kasniju upotrebu: Majstor Logike (OOP, Rečnici, Algoritmi) */
const KURS_MAJSTOR_LOGIKE = {
  "id": "kurs-2",
  "title": "2. Python Majstor Logike",
  "badge": "Srednji nivo (Stariji brat)",
  "icon": "⚡",
  "tagline": "Stariji brat: Rečnici, skupovi, slicing, comprehensions, try/except, OOP i RPG avantura",
  "lessons": [
    {
      "id": "k2-recnici",
      "title": "1. Rečnici (dict) – Telefonski imenik i parovi podataka",
      "icon": "📖",
      "category": "Strukture podataka",
      "summary": "Otkrij najmoćniju strukturu u Pythonu: parovi ključ-vrednost za trenutan pristup u O(1) vremenu.",
      "content": "\n      <p class=\"lead\">U prvom kursu smo upoznali liste. Ali šta ako imamo 10.000 korisnika i želimo broj telefona osobe po imenu? Sa listom bi morao da pregledaš redom svakog. Zato postoje <strong>Rečnici</strong> (eng. <em>Dictionaries</em>)!</p>\n\n      <div class=\"analogy-card\">\n        <div class=\"analogy-icon\">📚</div>\n        <div class=\"analogy-text\">\n          <strong>Zamisli pravi rečnik:</strong> Na levoj strani je reč koju tražiš (<strong>ključ</strong>), a na desnoj njeno značenje (<strong>vrednost</strong>). U Pythonu to pišemo kao <code>ključ: vrednost</code> unutar vitičastih zagrada <code>{ }</code>.\n        </div>\n      </div>\n\n      <h3>Kako se pravi i koristi rečnik?</h3>\n      <pre><code class=\"language-python\"># Pravljenje rečnika:\nstudent = {\n    \"ime\": \"Jovan\",\n    \"smer\": \"Informatika\",\n    \"prosek\": 9.4\n}\n\n# Pristup vrednosti:\nprint(student[\"ime\"])  # Ispisuje: Jovan\n\n# Dodavanje ili izmena vrednosti:\nstudent[\"godina_studija\"] = 3\nstudent[\"prosek\"] = 9.5  # Izmena postojeće vrednosti</code></pre>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-icon\">🛡️</span>\n        <div>\n          <strong>Zlatno pravilo: Koristi <code>.get()</code></strong><br>\n          Ako potražiš ključ koji ne postoji sa <code>student[\"stipendija\"]</code>, Python će se srušiti sa greškom <em>KeyError</em>!<br>\n          Metoda <code>student.get(\"stipendija\", \"Nema stipendiju\")</code> bezbedno vraća rezervnu vrednost umesto rušenja.\n        </div>\n      </div>\n\n      <h3>Prolazak kroz rečnik:</h3>\n      <pre><code class=\"language-python\">for kljuc, vrednost in student.items():\n    print(f\"{kljuc}: {vrednost}\")</code></pre>\n    ",
      "starterCode": "# Profil heroja u igrici\nheroj = {\n    \"ime\": \"Aragorn\",\n    \"klasa\": \"Rendžer\",\n    \"nivo\": 5,\n    \"oruzje\": \"Vilenjački mač\",\n    \"zlato\": 120\n}\n\nprint(f\"Heroj {heroj['ime']} nosi {heroj['oruzje']}.\")\n\n# Dodajemo oklop:\nheroj[\"oklop\"] = \"Lančana košulja\"\n\n# Sigurno čitanje nepostojećeg ključa:\ntitula = heroj.get(\"titula\", \"Nema titulu\")\nprint(\"Titula:\", titula)\n\nprint(\"\\nCeo inventar heroja:\")\nfor k, v in heroj.items():\n    print(f\" - {k.capitalize()}: {v}\")\n",
      "challenges": [
        {
          "title": "Zadatak 1: Oprema i zlatnici (Zagrevanje)",
          "instruction": "Kreiraj rečnik 'inventar' koji ima 'zlatnici': 100 i 'napici': 3. Zatim uvećaj zlatnike za 50, a broj napitaka smanji za 1. Ispiši izmenjeni rečnik.",
          "starter": "# Tvoj kod ovde:\ninventar = {\n    \"zlatnici\": 100,\n    \"napici\": 3\n}\n\n# Izmeni vrednosti i ispiši:\n",
          "solution": "inventar = {\"zlatnici\": 100, \"napici\": 3}\ninventar[\"zlatnici\"] += 50\ninventar[\"napici\"] -= 1\nprint(inventar)",
          "hint": "Iskoristi inventar['zlatnici'] += 50 i inventar['napici'] -= 1, pa pozovi print(inventar)."
        },
        {
          "title": "Zadatak 2: Brojač reči u rečenici (Glavni izazov)",
          "instruction": "Prebroj koliko se puta svaka reč pojavljuje u tekstu. Koristi for petlju i metodu brojac.get(rec, 0) + 1 da napuniš rečnik 'brojac'.",
          "starter": "tekst = \"vuk vuk lisica vuk medved lisica\"\nreci = tekst.split()\nbrojac = {}\n\n# Tvoj kod za brojanje ovde:\n\n\nprint(\"Statistika reči:\", brojac)\n",
          "solution": "tekst = \"vuk vuk lisica vuk medved lisica\"\nreci = tekst.split()\nbrojac = {}\nfor rec in reci:\n    brojac[rec] = brojac.get(rec, 0) + 1\nprint(\"Statistika reči:\", brojac)",
          "hint": "Za svaku reč u listi 'reci', postavi: brojac[rec] = brojac.get(rec, 0) + 1."
        },
        {
          "title": "Zadatak 3: Mini rečnik stranih reči (Pro izazov)",
          "instruction": "Napravi mini englesko-srpski rečnik sa 4 reči. Pitaj korisnika za reč pomoću input(), a zatim pomoću .get() ispiši prevod ili 'Reč nije pronađena!'.",
          "starter": "prevodilac = {\n    \"apple\": \"jabuka\",\n    \"book\": \"knjiga\",\n    \"cat\": \"mačka\",\n    \"dog\": \"pas\"\n}\n\n# Pitaj korisnika i ispiši prevod:\n",
          "solution": "prevodilac = {\"apple\": \"jabuka\", \"book\": \"knjiga\", \"cat\": \"mačka\", \"dog\": \"pas\"}\nupit = input(\"Unesi englesku reč: \").lower().strip()\nrezultat = prevodilac.get(upit, \"Reč nije pronađena u bazi!\")\nprint(f\"Prevod: {rezultat}\")",
          "hint": "Kombinuj input() sa prevodilac.get(upit, 'Reč nije pronađena!')."
        }
      ],
      "quiz": {
        "question": "Šta se dešava ako pokušaš da pročitaš rečnik['nepoznato'] kada ključ ne postoji?",
        "options": [
          {
            "text": "Python vraća None i nastavlja normalno.",
            "correct": false,
            "explanation": "To bi se desilo samo ako koristiš metodu .get('nepoznato')!"
          },
          {
            "text": "Program se ruši sa greškom KeyError.",
            "correct": true,
            "explanation": "Tačno! Direktan pristup nepostojećem ključu preko uglastih zagrada baca KeyError."
          },
          {
            "text": "Python automatski dodaje taj ključ sa vrednošću 0.",
            "correct": false,
            "explanation": "Ne, Python nikada ne kreira ključ sam od sebe prilikom čitanja."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: Hash tabele i O(1) brzina",
        "content": "Rečnici u Pythonu koriste <strong>Hash tabelu</strong>. Kada zatražiš <code>d['kljuc']</code>, Python izračuna hash kod (npr. <code>hash('kljuc')</code>) koji ga momentalno usmerava na tačnu adresu u RAM memoriji. Zato je brzina pristupa prosečno <strong>O(1)</strong> (konstantno vreme), bez obzira da li rečnik ima 5 ili 5.000.000 stavki!"
      }
    },
    {
      "id": "k2-torke-skupovi",
      "title": "2. Torke i Skupovi (tuple i set) – Nepromenljivost i unikatnost",
      "icon": "💎",
      "category": "Strukture podataka",
      "summary": "Zaštiti važne podatke od menjanja uz tuple i očisti sve duplikate uz pomoć moćnih skupova.",
      "content": "\n      <p class=\"lead\">U Pythonu postoje još dve izuzetno važne kolekcije: <strong>Torke (Tuples)</strong> koje čuvaju podatke \"uklesane u kamenu\" i <strong>Skupovi (Sets)</strong> koji eliminišu sve duplikate.</p>\n\n      <h3>1. Torke (Tuples) – Nepromenljive liste 🔒</h3>\n      <p>Torka se piše u običnim zagradama <code>( )</code>. Kada je jednom napraviš, <strong>niko je ne može promeniti</strong> (nema dodavanja, brisanja, niti menjanja elemenata!).</p>\n      <pre><code class=\"language-python\"># Koordinate, RGB boje, dimenzije ekrana:\nbeograd_gps = (44.8176, 20.4633)\nsirina, visina = (1920, 1080) # Magično raspakivanje (unpacking)!</code></pre>\n\n      <h3>2. Skupovi (Sets) – Samo jedinstveni podaci 🎯</h3>\n      <p>Skup se piše u vitičastim zagradama <code>{ }</code> (bez dvotačke). On <strong>automatski briše sve duplikate</strong> i omogućava matematičke operacije:</p>\n      <ul>\n        <li><code>A | B</code> – <strong>Unija</strong> (svi elementi iz oba skupa)</li>\n        <li><code>A & B</code> – <strong>Presek</strong> (samo zajednički elementi)</li>\n        <li><code>A - B</code> – <strong>Razlika</strong> (elementi koji su u A, ali ne u B)</li>\n      </ul>\n    ",
      "starterCode": "# 1. Torka i raspakivanje:\ntacka = (10, 25)\nx, y = tacka\nprint(f\"Koordinate: X={x}, Y={y}\")\n\n# 2. Skup automatski briše duplikate:\nimena = [\"Ana\", \"Petar\", \"Ana\", \"Miloš\", \"Petar\", \"Stefan\"]\nunikatna_imena = set(imena)\nprint(\"Jedinstvena imena:\", unikatna_imena)\n\n# Skupovne operacije:\nfanovi_igara = {\"Fortnite\", \"Minecraft\", \"CS:GO\"}\nfanovi_druga = {\"Minecraft\", \"Valorant\", \"Roblox\"}\n\nzajednicke_igre = fanovi_igara & fanovi_druga\nprint(\"Igre koje oba igrača vole:\", zajednicke_igre)\n",
      "challenges": [
        {
          "title": "Zadatak 1: Očisti duple mejlove (Zagrevanje)",
          "instruction": "Imamo listu prijavljenih email adresa sa duplikatima. Pretvori je u skup pomoću set(), pa ispiši koliko ima stvarno jedinstvenih prijava pomoću len().",
          "starter": "prijave = [\"a@mail.com\", \"b@mail.com\", \"a@mail.com\", \"c@mail.com\", \"b@mail.com\"]\n\n# Tvoj kod ovde:\n\n",
          "solution": "prijave = [\"a@mail.com\", \"b@mail.com\", \"a@mail.com\", \"c@mail.com\", \"b@mail.com\"]\njedinstveni = set(prijave)\nprint(f\"Ukupno jedinstvenih: {len(jedinstveni)}\")\nprint(\"Mejlovi:\", jedinstveni)",
          "hint": "Iskoristi jedinstveni = set(prijave) i len(jedinstveni)."
        },
        {
          "title": "Zadatak 2: Pronađi zajedničke prijatelje (Glavni izazov)",
          "instruction": "Dva korisnika imaju svoje skupove prijatelja. Pronađi i ispiši njihove zajedničke prijatelje (koristeći presek &), kao i prijatelje koje ima samo prvi korisnik (razlika -).",
          "starter": "prijatelji_marko = {\"Ana\", \"Stefan\", \"Milica\", \"Nikola\"}\nprijatelji_ivan = {\"Milica\", \"Jovana\", \"Stefan\", \"Luka\"}\n\n# Pronađi zajedničke i one koje samo Marko ima:\n\n",
          "solution": "prijatelji_marko = {\"Ana\", \"Stefan\", \"Milica\", \"Nikola\"}\nprijatelji_ivan = {\"Milica\", \"Jovana\", \"Stefan\", \"Luka\"}\n\nzajednicki = prijatelji_marko & prijatelji_ivan\nsamo_marko = prijatelji_marko - prijatelji_ivan\n\nprint(\"Zajednički prijatelji:\", zajednicki)\nprint(\"Samo Marko poznaje:\", samo_marko)",
          "hint": "Iskoristi & za presek i - za razliku skupova."
        },
        {
          "title": "Zadatak 3: Pomeranje tačke u prostoru (Pro izazov)",
          "instruction": "Napiši funkciju 'pomeri_tacku(tacka, dx, dy)' gde je tacka torka (x, y). Funkcija treba da vrati novu torku sa pomerenim koordinatama (x + dx, y + dy).",
          "starter": "def pomeri_tacku(tacka, dx, dy):\n    # Raspakuj tacku i vrati novu torku:\n    pass\n\npocetna = (5, 10)\nnova = pomeri_tacku(pocetna, 3, -2)\nprint(\"Nova pozicija:\", nova) # Treba da bude (8, 8)\n",
          "solution": "def pomeri_tacku(tacka, dx, dy):\n    x, y = tacka\n    return (x + dx, y + dy)\n\npocetna = (5, 10)\nnova = pomeri_tacku(pocetna, 3, -2)\nprint(\"Nova pozicija:\", nova)",
          "hint": "Raspakuj x, y = tacka i vrati (x + dx, y + dy)."
        }
      ],
      "quiz": {
        "question": "Koja je ključna razlika između liste i torke (tuple)?",
        "options": [
          {
            "text": "Torka može da sadrži samo brojeve, a lista i tekst.",
            "correct": false,
            "explanation": "I torka i lista mogu da čuvaju bilo koje tipove podataka."
          },
          {
            "text": "Torka je nepromenljiva (immutable) – ne može se menjati nakon kreiranja.",
            "correct": true,
            "explanation": "Tačno! Torke garantuju integritet podataka jer ih nijedan deo programa ne može nehotice izmeniti."
          },
          {
            "text": "Liste nemaju indekse, a torke imaju.",
            "correct": false,
            "explanation": "Oba tipa podržavaju indeksiranje i počinju od 0."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: Zašto torka može biti ključ u rečniku, a lista ne?",
        "content": "Pošto je torka nepromenljiva (immutable), njen hash kod se nikada ne menja (ona je <em>hashable</em>). Zbog toga torku možeš koristiti kao ključ u rečniku (npr. <code>mapa[(x, y)] = 'Zid'</code>), dok lista nikada ne može biti ključ jer je mutabilna i promena sadržaja bi pokvarila hash tabelu!"
      }
    },
    {
      "id": "k2-slicing-stringovi",
      "title": "3. Majstorstvo nad Stringovima i Slicing (Seckanje)",
      "icon": "✂️",
      "category": "Rad sa tekstom",
      "summary": "Seckaj tekst i liste kao samuraj uz moćnu [start:stop:step] sintaksu i obrtanje unazad.",
      "content": "\n      <p class=\"lead\">U Pythonu ne moraš da prolaziš kroz tekst slovo po slovo. Tehnika <strong>Slicing</strong> (seckanje) omogućava ti da izvučeš bilo koji deo teksta ili liste u jednoj sekundi!</p>\n\n      <h3>Magična formula: <code>[početak : kraj : korak]</code></h3>\n      <ul>\n        <li><code>tekst[0:4]</code> – uzima slova od indeksa 0 do 3 (kraj se ne računa!)</li>\n        <li><code>tekst[4:]</code> – uzima sve od indeksa 4 do kraja</li>\n        <li><code>tekst[:3]</code> – uzima prva tri karaktera</li>\n        <li><code>tekst[::-1]</code> – <strong>Najčuveniji trik u Pythonu:</strong> obrće tekst unazad!</li>\n      </ul>\n\n      <h3>Najkorisnije metode za rad sa tekstom:</h3>\n      <table class=\"simple-table\">\n        <tr><th>Metoda</th><th>Šta radi?</th><th>Primer</th></tr>\n        <tr><td><code>.split()</code></td><td>Deli tekst na reči po razmaku ili zarezu</td><td><code>\"a,b\".split(\",\") -> ['a', 'b']</code></td></tr>\n        <tr><td><code>.join()</code></td><td>Spaja listu reči u jedan tekst</td><td><code>\"-\".join(['a', 'b']) -> \"a-b\"</code></td></tr>\n        <tr><td><code>.strip()</code></td><td>Uklanja nevidljive razmake sa krajeva</td><td><code>\"  cao  \".strip() -> \"cao\"</code></td></tr>\n        <tr><td><code>.replace()</code></td><td>Menja deo teksta drugim tekstom</td><td><code>\"Auto\".replace(\"A\", \"O\")</code></td></tr>\n      </table>\n    ",
      "starterCode": "# Majstorstvo seckanja teksta:\nrec = \"Programiranje\"\n\nprint(\"Prva 4 slova:\", rec[:4])\nprint(\"Sredina (od 3 do 7):\", rec[3:7])\nprint(\"Svako drugo slovo:\", rec[::2])\nprint(\"Obrnuto unazad:\", rec[::-1])\n\n# Formatiranje i čišćenje:\nporuka = \"   jabuka,kruška,šljiva,grožđe   \"\ncisto = poruka.strip()\nvoce = cisto.split(\",\")\nprint(\"\\nLista voća:\", voce)\n\nponovo_spojeno = \" ➔ \".join(voce)\nprint(\"Spojeno lepo:\", ponovo_spojeno)\n",
      "challenges": [
        {
          "title": "Zadatak 1: Detektor palindroma (Zagrevanje)",
          "instruction": "Reč je palindrom ako se isto čita i sa leve i sa desne strane (npr. 'radar', 'oko', 'ana'). Napiši program koji proverava da li je data reč palindrom pomoću rec == rec[::-1].",
          "starter": "rec = \"radar\"\n\n# Proveri da li je palindrom:\nif rec == rec[::-1]:\n    print(f\"Reč '{rec}' je PALINDROM! 🎉\")\nelse:\n    print(f\"Reč '{rec}' nije palindrom.\")\n",
          "solution": "rec = \"radar\"\nif rec == rec[::-1]:\n    print(f\"Reč '{rec}' je PALINDROM! 🎉\")\nelse:\n    print(f\"Reč '{rec}' nije palindrom.\")",
          "hint": "Trik je u poređenju: rec == rec[::-1]."
        },
        {
          "title": "Zadatak 2: Cenzor nepristojnih reči (Glavni izazov)",
          "instruction": "U datoj rečenici, zameni zabranjenu reč 'ružno' sa tri zvezdice '***', a višak razmaka na krajevima ukloni sa .strip(). Ispiši očišćeni tekst.",
          "starter": "komentar = \"   Ovo je stvarno ružno ponašanje!   \"\n\n# Cenzuriši i očisti komentar:\n\n",
          "solution": "komentar = \"   Ovo je stvarno ružno ponašanje!   \"\nocisceno = komentar.strip().replace(\"ružno\", \"***\")\nprint(ocisceno)",
          "hint": "Iskoristi ulančavanje: komentar.strip().replace('ružno', '***')."
        },
        {
          "title": "Zadatak 3: Parser datuma (Pro izazov)",
          "instruction": "Korisnik unosi datum u formatu 'YYYY-MM-DD' (npr. '2026-11-07'). Raščlani ga sa .split('-') i ispiši u našem formatu 'DD.MM.YYYY.'.",
          "starter": "datum_iso = \"2026-11-07\"\n\n# Podeli datum i ispiši kao 07.11.2026.:\n\n",
          "solution": "datum_iso = \"2026-11-07\"\ndelovi = datum_iso.split(\"-\")\ngodina, mesec, dan = delovi\nprint(f\"{dan}.{mesec}.{godina}.\")",
          "hint": "Nakon delovi = datum_iso.split('-'), raspakuj: godina, mesec, dan = delovi i spoji u f-string."
        }
      ],
      "quiz": {
        "question": "Šta tačno vraća izraz: 'Antigravity'[0:4]?",
        "options": [
          {
            "text": "'Anti'",
            "correct": true,
            "explanation": "Bravo! Indeksi 0, 1, 2, 3 daju slova 'A', 'n', 't', 'i' (indeks 4 nije uključen)."
          },
          {
            "text": "'Antig'",
            "correct": false,
            "explanation": "Netačno. Gornja granica u slicing-u se nikada ne uključuje."
          },
          {
            "text": "'nti'",
            "correct": false,
            "explanation": "Indeks 0 je slovo 'A', tako da počinje sa 'A'."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: String Interning i Immutability",
        "content": "U Pythonu su stringovi <em>immutable</em> (nepromenljivi). Svaki put kada pozoveš <code>.replace()</code> ili <code>+</code>, Python u pozadini kreira potpuno novi string u memoriji. Takođe, Python primenjuje tehniku <strong>String Interning</strong> – pamti samo jednu instancu često korišćenih kratkih stringova radi uštede memorije i brzog poređenja referenci!"
      }
    },
    {
      "id": "k2-comprehensions",
      "title": "4. Moćne Liste: List Comprehensions & Statistika",
      "icon": "⚡",
      "category": "Napredne liste",
      "summary": "Piši elegantan, munjevit i čitljiv Pythonic kod u jednoj liniji umesto dugačkih for petlji.",
      "content": "\n      <p class=\"lead\">Programeri koji dolaze iz drugih jezika često pišu for petlju sa pet linija koda samo da bi napravili novu listu. U Pythonu, to rešavamo u <strong>jednoj jedinoj, prelepoj liniji</strong>!</p>\n\n      <h3>Šta je List Comprehension?</h3>\n      <p>Zamena za petlju sa ugrađenim filterom:</p>\n      <pre><code class=\"language-python\"># Staromodan način:\nkvadrati = []\nfor x in range(5):\n    kvadrati.append(x**2)\n\n# Pythonic moćan način (List Comprehension):\nkvadrati = [x**2 for x in range(5)]\n# Rezultat: [0, 1, 4, 9, 16]</code></pre>\n\n      <h3>Sa uslovom (Filtriranjem):</h3>\n      <pre><code class=\"language-python\"># Uzmi samo parne brojeve i kvadriraj ih:\nparni_kvadrati = [x**2 for x in range(10) if x % 2 == 0]</code></pre>\n\n      <h3>Ugrađeni statistički alati u Pythonu:</h3>\n      <ul>\n        <li><code>sum(lista)</code> – sabira sve brojeve</li>\n        <li><code>min(lista)</code> i <code>max(lista)</code> – najmanji i najveći broj</li>\n        <li><code>sorted(lista, reverse=True)</code> – sortira bez menjanja originala</li>\n      </ul>\n    ",
      "starterCode": "# Analitika ocena đaka\nocene = [5, 4, 2, 5, 3, 5, 1, 4, 5, 3]\n\n# 1. Samo petice:\npetice = [o for o in ocene if o == 5]\nprint(f\"Broj petica: {len(petice)}\")\n\n# 2. Statistika:\nprosek = sum(ocene) / len(ocene)\nprint(f\"Prosečna ocena odeljenja: {prosek:.2f}\")\nprint(f\"Najviša ocena: {max(ocene)}, Najniža: {min(ocene)}\")\n\n# 3. Rang lista sortirana od najveće:\nrang_lista = sorted(ocene, reverse=True)\nprint(\"Rang lista:\", rang_lista)\n",
      "challenges": [
        {
          "title": "Zadatak 1: Samo pozitivni brojevi (Zagrevanje)",
          "instruction": "Imamo listu brojeva [-5, 12, -3, 8, 0, 19, -1]. Napravi novu listu koja sadrži samo brojeve veće od nule, koristeći list comprehension.",
          "starter": "brojevi = [-5, 12, -3, 8, 0, 19, -1]\n\n# Napiši list comprehension ovde:\npozitivni = []\n\nprint(\"Pozitivni brojevi:\", pozitivni)\n",
          "solution": "brojevi = [-5, 12, -3, 8, 0, 19, -1]\npozitivni = [x for x in brojevi if x > 0]\nprint(\"Pozitivni brojevi:\", pozitivni)",
          "hint": "Sintaksa: [x for x in brojevi if x > 0]."
        },
        {
          "title": "Zadatak 2: Celzijus u Farenhajte (Glavni izazov)",
          "instruction": "Za listu temperatura u Celzijusima [0, 15, 22, 30], napravi novu listu sa Farenhajtima pomoću formule: c * 1.8 + 32 u jednoj liniji.",
          "starter": "celzijus = [0, 15, 22, 30]\n\n# Pretvori u Farenhajte:\nfarenhajt = []\n\nprint(\"U Farenhajtima:\", farenhajt)\n",
          "solution": "celzijus = [0, 15, 22, 30]\nfarenhajt = [c * 1.8 + 32 for c in celzijus]\nprint(\"U Farenhajtima:\", farenhajt)",
          "hint": "Iskoristi: [c * 1.8 + 32 for c in celzijus]."
        },
        {
          "title": "Zadatak 3: Duge reči i velika slova (Pro izazov)",
          "instruction": "Iz liste reči ['pas', 'programiranje', 'kod', 'antigravity', 'dan'] izvuci samo one koje imaju više od 4 slova, ali ih pretvori u velika slova (.upper()).",
          "starter": "reci = [\"pas\", \"programiranje\", \"kod\", \"antigravity\", \"dan\"]\n\n# Tvoj kod ovde:\n\n",
          "solution": "reci = [\"pas\", \"programiranje\", \"kod\", \"antigravity\", \"dan\"]\nduge_reci = [r.upper() for r in reci if len(r) > 4]\nprint(\"Duge reči velikim slovima:\", duge_reci)",
          "hint": "Kombinuj r.upper() sa uslovom if len(r) > 4."
        }
      ],
      "quiz": {
        "question": "Šta je glavna prednost List Comprehensiona u odnosu na klasičnu for petlju sa append()?",
        "options": [
          {
            "text": "Comprehension automatski briše listu iz memorije.",
            "correct": false,
            "explanation": "Comprehension kreira novu listu, ne briše je."
          },
          {
            "text": "Kod je kraći, čitljiviji i brže se izvršava na nivou Python interpretera.",
            "correct": true,
            "explanation": "Bravo! U CPythonu postoji optimizovana instrukcija LIST_APPEND koja radi znatno brže."
          },
          {
            "text": "Comprehension radi samo sa brojevima.",
            "correct": false,
            "explanation": "Radi sa bilo kojim objektima (stringovima, objektima, rečnicima)."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: Zašto je Comprehension brži od .append()?",
        "content": "U običnoj petlji, Python mora pri svakom prolazu da izvrši <em>attribute lookup</em> za <code>.append</code> i pozove funkciju. Kod List Comprehension-a, interpreter koristi specijalni C bajtkod <code>LIST_APPEND</code> koji direktno puni memorijski bafer bez pozivanja metode u svakoj iteraciji!"
      }
    },
    {
      "id": "k2-try-except",
      "title": "5. Rad sa Greškama (try-except) – Programi koji ne pucaju",
      "icon": "🛡️",
      "category": "Bezbednost koda",
      "summary": "Nauči kako profesionalci hvataju greške i prave programe otporne na loš unos korisnika.",
      "content": "\n      <p class=\"lead\">Zamisli da bankomatu ponudiš karticu, a on se ugasi i izbaci crveni ekran sa 50 linija teksta jer je nestalo papira za račun. Loš program! Dobar program <strong>hvata greške</strong> i nastavlja da radi.</p>\n\n      <div class=\"analogy-card\">\n        <div class=\"analogy-icon\">🦺</div>\n        <div class=\"analogy-text\">\n          <strong>Sigurnosna mreža (try - except):</strong> Blok <code>try</code> kaže: <em>\"Pokušaj da uradiš ovo rizično\"</em>. Ako dođe do greške, Python ne ruši ceo program već odmah skače u blok <code>except</code> gde imamo plan B!\n        </div>\n      </div>\n\n      <h3>Četiri stuba obrade grešaka:</h3>\n      <pre><code class=\"language-python\">try:\n    broj = int(input(\"Unesi ceo broj: \"))\n    rezultat = 100 / broj\nexcept ValueError:\n    print(\"Nisi uneo cifre, već slova!\")\nexcept ZeroDivisionError:\n    print(\"Deljenje nulom nije moguće!\")\nelse:\n    print(\"Bravo, računanje je uspelo! Rezultat:\", rezultat)\nfinally:\n    print(\"Ovaj blok se UVEK izvršava (npr. zatvaranje fajla).\")</code></pre>\n    ",
      "starterCode": "# Isprobaj kalkulator otporan na greške!\ntry:\n    x = float(input(\"Unesi prvi broj: \"))\n    y = float(input(\"Unesi drugi broj: \"))\n    kolicnik = x / y\nexcept ValueError:\n    print(\"⚠️ Greška: Moraš uneti broj, a ne slova!\")\nexcept ZeroDivisionError:\n    print(\"⚠️ Greška: Ne može se deliti sa nulom!\")\nelse:\n    print(f\"✅ Rezultat deljenja: {x} / {y} = {kolicnik}\")\nfinally:\n    print(\"Hvala što koristiš naš kalkulator!\")\n",
      "challenges": [
        {
          "title": "Zadatak 1: Neprobojan unos broja (Zagrevanje)",
          "instruction": "Napiši funkciju 'siguran_unos()' koja u while petlji pita korisnika za ceo broj i ponavlja pitanje sve dok korisnik ne unese ispravan broj bez rušenja.",
          "starter": "def siguran_unos():\n    while True:\n        try:\n            unos = int(input(\"Unesi ceo broj: \"))\n            return unos\n        except ValueError:\n            print(\"To nije ceo broj! Probaj ponovo...\")\n\nbroj = siguran_unos()\nprint(f\"Uspešno si uneo broj: {broj}\")\n",
          "solution": "def siguran_unos():\n    while True:\n        try:\n            unos = int(input(\"Unesi ceo broj: \"))\n            return unos\n        except ValueError:\n            print(\"To nije ceo broj! Probaj ponovo...\")\n\nbroj = siguran_unos()\nprint(f\"Uspešno si uneo broj: {broj}\")",
          "hint": "Iskoristi while True: sa try i return unutar njega, a except ValueError ispisuje poruku."
        },
        {
          "title": "Zadatak 2: Siguran pristup listi (Glavni izazov)",
          "instruction": "Napiši funkciju 'dohvati_element(lista, indeks)' koja pokušava da vrati element na zadatom indeksu, a u slučaju IndexError-a vraća tekst 'Nepostojeći indeks!'.",
          "starter": "stavke = [\"Telefon\", \"Laptop\", \"Sat\"]\n\ndef dohvati_element(lista, indeks):\n    # Tvoj try-except kod ovde:\n    pass\n\nprint(dohvati_element(stavke, 1)) # Treba: Laptop\nprint(dohvati_element(stavke, 10)) # Treba: Nepostojeći indeks!\n",
          "solution": "stavke = [\"Telefon\", \"Laptop\", \"Sat\"]\n\ndef dohvati_element(lista, indeks):\n    try:\n        return lista[indeks]\n    except IndexError:\n        return \"Nepostojeći indeks!\"\n\nprint(dohvati_element(stavke, 1))\nprint(dohvati_element(stavke, 10))",
          "hint": "U try bloku uradi return lista[indeks], a u except IndexError vrati poruku."
        },
        {
          "title": "Zadatak 3: Pretvori i saberi (Pro izazov)",
          "instruction": "Napiši funkciju koja prima listu stringova ['10', 'pet', '20', '30'], pretvara u int samo one koji mogu i sabira ih, preskačući one sa greškom.",
          "starter": "podaci = [\"10\", \"pet\", \"20\", \"trideset\", \"40\"]\n\ndef saberi_validne(lista):\n    ukupno = 0\n    for stavka in lista:\n        # Pokušaj konverziju u int i dodaj u ukupno:\n        pass\n    return ukupno\n\nprint(\"Ukupan zbir validnih:\", saberi_validne(podaci)) # 10 + 20 + 40 = 70\n",
          "solution": "podaci = [\"10\", \"pet\", \"20\", \"trideset\", \"40\"]\n\ndef saberi_validne(lista):\n    ukupno = 0\n    for stavka in lista:\n        try:\n            ukupno += int(stavka)\n        except ValueError:\n            pass\n    return ukupno\n\nprint(\"Ukupan zbir validnih:\", saberi_validne(podaci))",
          "hint": "Unutar petlje stavi try: ukupno += int(stavka) except ValueError: pass."
        }
      ],
      "quiz": {
        "question": "Kada se tačno izvršava blok koda pod oznakom 'finally'?",
        "options": [
          {
            "text": "Samo ako se desila greška.",
            "correct": false,
            "explanation": "To radi blok 'except'."
          },
          {
            "text": "Samo ako NEMA greške.",
            "correct": false,
            "explanation": "To radi blok 'else'."
          },
          {
            "text": "Uvek, bez obzira da li je bilo greške ili je sve prošlo uspešno.",
            "correct": true,
            "explanation": "Odlično! 'finally' se koristi za završne operacije, kao što je čišćenje resursa ili zatvaranje konekcije."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: EAFP stil Pythona",
        "content": "Python zajednica se vodi filozofijom <strong>EAFP</strong> (<em>Easier to Ask for Forgiveness than Permission</em> - Lakše je tražiti oproštaj nego dozvolu). Umesto da pišeš deset <code>if</code> uslova da proveriš pre nego što nešto uradiš (LBYL pristup), u Pythonu se radnja jednostavno izvrši u <code>try</code> bloku, a izuzetak se obradi samo ako se desi!"
      }
    },
    {
      "id": "k2-funkcije-scope",
      "title": "6. Napredne Funkcije – Default argumenti, *args i Scope",
      "icon": "🧰",
      "category": "Modularnost",
      "summary": "Piši izuzetno fleksibilne funkcije sa podrazumevanim vrednostima, proizvoljnim brojem argumenata i razumevanjem dometa.",
      "content": "\n      <p class=\"lead\">U prvom kursu smo naučili osnovne funkcije. Sada podižemo veštinu na nivo pravih inženjera: funkcije koje primaju koliko god argumenata poželiš!</p>\n\n      <h3>1. Podrazumevane (Default) vrednosti</h3>\n      <p>Ako korisnik ne prosledi argument, funkcija koristi unapred pripremljenu vrednost:</p>\n      <pre><code class=\"language-python\">def pozdrav(ime, titula=\"gospodin\"):\n    return f\"Poštovani {titula} {ime}, dobrodošli!\"\n\nprint(pozdrav(\"Marko\")) # Koristi \"gospodin\"\nprint(pozdrav(\"Jelena\", \"gospođa\")) # Koristi \"gospođa\"</code></pre>\n\n      <h3>2. Magični <code>*args</code> – Prima neograničeno mnogo argumenata</h3>\n      <p>Zvezdica <code>*</code> ispred imena argumenta pakuje sve prosleđene vrednosti u <strong>torku</strong>:</p>\n      <pre><code class=\"language-python\">def saberi_sve(*brojevi):\n    return sum(brojevi)\n\nprint(saberi_sve(5, 10))        # 15\nprint(saberi_sve(1, 2, 3, 4, 5)) # 15</code></pre>\n\n      <h3>3. Scope (Domet promenljivih):</h3>\n      <p>Promenljiva napravljena <strong>unutar</strong> funkcije je <em>lokalna</em> i nestaje čim se funkcija završi. Spoljne promenljive su <em>globalne</em>.</p>\n    ",
      "starterCode": "# 1. Primer naručivanja pice:\ndef naruci_picu(velicina=\"Porodična\", sos=\"Paradajz\"):\n    return f\"Naručena {velicina} pica sa sosom: {sos}.\"\n\nprint(naruci_picu())\nprint(naruci_picu(\"Mala\", \"Ljuti sos\"))\n\n# 2. Primer funkcije sa *args:\ndef statistika_igraca(ime, *poeni):\n    if not poeni:\n        return f\"{ime} nema zabeleženih poena.\"\n    return f\"Igrač {ime} | Odigrao mečeva: {len(poeni)} | Prosek: {sum(poeni)/len(poeni):.1f}\"\n\nprint(statistika_igraca(\"Nikola\", 25, 30, 18, 42))\n",
      "challenges": [
        {
          "title": "Zadatak 1: Pozdrav na više jezika (Zagrevanje)",
          "instruction": "Napiši funkciju 'pozdravi(ime, jezik=\"srpski\")'. Ako je jezik 'srpski', vraća 'Zdravo, {ime}!', a ako je 'engleski', vraća 'Hello, {ime}!'.",
          "starter": "def pozdravi(ime, jezik=\"srpski\"):\n    # Tvoj kod ovde:\n    pass\n\nprint(pozdravi(\"Stefan\")) # Zdravo, Stefan!\nprint(pozdravi(\"John\", \"engleski\")) # Hello, John!\n",
          "solution": "def pozdravi(ime, jezik=\"srpski\"):\n    if jezik == \"engleski\":\n        return f\"Hello, {ime}!\"\n    return f\"Zdravo, {ime}!\"\n\nprint(pozdravi(\"Stefan\"))\nprint(pozdravi(\"John\", \"engleski\"))",
          "hint": "Proveri if jezik == 'engleski' pa vrati englesku poruku, inače vrati srpsku."
        },
        {
          "title": "Zadatak 2: Super Množilac (*args) (Glavni izazov)",
          "instruction": "Napiši funkciju 'pomnozi_sve(*brojevi)' koja prima proizvoljan broj argumenata i vraća njihov matematički proizvod (npr. pomnozi_sve(2, 3, 4) -> 24). Ako nema brojeva, vraća 1.",
          "starter": "def pomnozi_sve(*brojevi):\n    proizvod = 1\n    # Prođi kroz brojeve i pomnoži:\n    \n    return proizvod\n\nprint(pomnozi_sve(2, 3, 4)) # 24\nprint(pomnozi_sve(5, 5))    # 25\n",
          "solution": "def pomnozi_sve(*brojevi):\n    proizvod = 1\n    for b in brojevi:\n        proizvod *= b\n    return proizvod\n\nprint(pomnozi_sve(2, 3, 4))\nprint(pomnozi_sve(5, 5))",
          "hint": "Iskoristi for b in brojevi: proizvod *= b."
        },
        {
          "title": "Zadatak 3: Fleksibilni račun sa popustom (Pro izazov)",
          "instruction": "Funkcija 'kreiraj_racun(osnovica, porez=20, popust=0)' računa finalnu cenu: osnovica + (osnovica * porez / 100) - popust. Testiraj je sa različitim parametrima.",
          "starter": "def kreiraj_racun(osnovica, porez=20, popust=0):\n    # Izračunaj i vrati:\n    pass\n\nprint(\"Račun 1:\", kreiraj_racun(1000)) # 1200\nprint(\"Račun 2:\", kreiraj_racun(1000, porez=10, popust=100)) # 1000\n",
          "solution": "def kreiraj_racun(osnovica, porez=20, popust=0):\n    sa_porezom = osnovica + (osnovica * porez / 100)\n    return sa_porezom - popust\n\nprint(\"Račun 1:\", kreiraj_racun(1000))\nprint(\"Račun 2:\", kreiraj_racun(1000, porez=10, popust=100))",
          "hint": "Formula je: osnovica + (osnovica * porez / 100) - popust."
        }
      ],
      "quiz": {
        "question": "Šta se dešava ako promenljivu definišeš unutar funkcije (npr. x = 5), a pokušaš da je ispišeš van funkcije?",
        "options": [
          {
            "text": "Python je ispisuje bez problema.",
            "correct": false,
            "explanation": "Lokalne promenljive ne postoje van funkcije."
          },
          {
            "text": "Prijavljuje se greška NameError: name 'x' is not defined.",
            "correct": true,
            "explanation": "Tačno! Sve promenljive unutar funkcije imaju lokalni opseg (Local Scope) i uništavaju se po završetku funkcije."
          },
          {
            "text": "Promenljiva automatski dobija vrednost None.",
            "correct": false,
            "explanation": "Ne, promenljiva uopšte nije registrovana u globalnom prostoru imena."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: Zašto NIKADA ne stavljati def f(x=[]) ?",
        "content": "Čuvena Python klopka: Podrazumevani argumenti se evaluiraju <strong>samo jednom, u trenutku definisanja funkcije</strong>, a ne pri svakom pozivu! Ako staviš praznu listu <code>def dodaj(x, l=[])</code>, ista lista u memoriji će se deliti kroz sve buduće pozive funkcije! Pravilan način je uvek: <code>def dodaj(x, l=None): if l is None: l = []</code>."
      }
    },
    {
      "id": "k2-oop-klase",
      "title": "7. Uvod u OOP (Klase i Objekti) – Modeluj stvarni svet",
      "icon": "🏗️",
      "category": "Objektno programiranje",
      "summary": "Kreiraj sopstvene tipove podataka: nauči šta su klase, objekti, konstruktor __init__ i self.",
      "content": "\n      <p class=\"lead\">Do sada smo koristili ugrađene tipove (int, str, list). Ali šta ako praviš igricu sa zmajevima ili bankovni sistem? Vreme je da naučiš <strong>Objektno Orijentisano Programiranje (OOP)</strong>!</p>\n\n      <div class=\"analogy-card\">\n        <div class=\"analogy-icon\">🍪</div>\n        <div class=\"analogy-text\">\n          <strong>Klasa je modla za kolače, objekat je gotov kolač:</strong><br>\n          Klasa je <strong>nacrt (šablon)</strong>. Iz jedne klase <code>Automobil</code> možeš napraviti 100 različitih objekata (crveni Audi, plavi BMW...).\n        </div>\n      </div>\n\n      <h3>Struktura jedne klase:</h3>\n      <pre><code class=\"language-python\">class Pas:\n    # Konstruktor - poziva se kada pravimo novog psa:\n    def __init__(self, ime, rasa):\n        self.ime = ime      # Atribut (osobina)\n        self.rasa = rasa\n\n    # Metoda (akcija koju pas ume da radi):\n    def laj(self):\n        print(f\"{self.ime} kaže: Av Av! 🐶\")\n\n# Pravimo objekte:\npas1 = Pas(\"Bobi\", \"Zlatni retriver\")\npas2 = Pas(\"Maks\", \"Nemački ovčar\")\n\npas1.laj()  # Bobi kaže: Av Av!</code></pre>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-icon\">💡</span>\n        <div><strong>Šta je to <code>self</code>?</strong> Reč <code>self</code> je način na koji objekat kaže <em>\"ja lično\"</em>. Kada pozoveš <code>pas1.laj()</code>, Python automatski prosleđuje <code>pas1</code> kao argument <code>self</code>.</div>\n      </div>\n    ",
      "starterCode": "# Klasa za karaktere u video igrici\nclass Heroj:\n    def __init__(self, ime, zdravlje, snaga):\n        self.ime = ime\n        self.zdravlje = zdravlje\n        self.snaga = snaga\n        \n    def napadni(self, meta):\n        print(f\"⚔️ {self.ime} napada {meta.ime} i zadaje {self.snaga} štete!\")\n        meta.primi_stetu(self.snaga)\n        \n    def primi_stetu(self, steta):\n        self.zdravlje -= steta\n        if self.zdravlje <= 0:\n            print(f\"💀 {self.ime} je poražen!\")\n        else:\n            print(f\"❤️ {self.ime} ima još {self.zdravlje} HP.\")\n\n# Kreiramo dva heroja:\nratnik = Heroj(\"Konan\", 100, 20)\nbauk = Heroj(\"Goblin\", 35, 10)\n\nratnik.napadni(bauk)\nratnik.napadni(bauk)\n",
      "challenges": [
        {
          "title": "Zadatak 1: Klasa Pas (Zagrevanje)",
          "instruction": "Kreiraj klasu 'Pas' sa atributima ime i godine. Dodaj metodu 'predstavi_se()' koja ispisuje 'Ja sam {ime} i imam {godine} godine.'. Napravi objekat i pozovi metodu.",
          "starter": "# Napiši klasu Pas:\nclass Pas:\n    # Definiši __init__ i metodu:\n    pass\n\n# Napravi psa i pozovi metodu:\n",
          "solution": "class Pas:\n    def __init__(self, ime, godine):\n        self.ime = ime\n        self.godine = godine\n    def predstavi_se(self):\n        print(f\"Ja sam {self.ime} i imam {self.godine} godine.\")\n\nmoj_pas = Pas(\"Žuća\", 3)\nmoj_pas.predstavi_se()",
          "hint": "U klasi definiši def __init__(self, ime, godine): self.ime = ime; self.godine = godine."
        },
        {
          "title": "Zadatak 2: Bankovni račun (Glavni izazov)",
          "instruction": "Napravi klasu 'BankovniRacun' sa vlasnikom i stanjem. Dodaj metode 'uplati(iznos)' i 'podigni(iznos)' koja odbija isplatu ako nema dovoljno novca.",
          "starter": "class BankovniRacun:\n    def __init__(self, vlasnik, pocetno_stanje=0):\n        self.vlasnik = vlasnik\n        self.stanje = pocetno_stanje\n        \n    def uplati(self, iznos):\n        # Dopuni:\n        pass\n        \n    def podigni(self, iznos):\n        # Dopuni sa proverom:\n        pass\n\nracun = BankovniRacun(\"Petar\", 1000)\nracun.uplati(500)\nracun.podigni(2000) # Treba da javi: Nema dovoljno sredstava!\n",
          "solution": "class BankovniRacun:\n    def __init__(self, vlasnik, pocetno_stanje=0):\n        self.vlasnik = vlasnik\n        self.stanje = pocetno_stanje\n    def uplati(self, iznos):\n        self.stanje += iznos\n        print(f\"Uplaćeno {iznos}. Novo stanje: {self.stanje}\")\n    def podigni(self, iznos):\n        if iznos <= self.stanje:\n            self.stanje -= iznos\n            print(f\"Podignuto {iznos}. Preostalo: {self.stanje}\")\n        else:\n            print(\"⚠️ Nema dovoljno sredstava na računu!\")\n\nracun = BankovniRacun(\"Petar\", 1000)\nracun.uplati(500)\nracun.podigni(2000)",
          "hint": "U podigni() proveri if iznos <= self.stanje: pa oduzmi, inače ispiši upozorenje."
        },
        {
          "title": "Zadatak 3: Lekoviti napitak (Pro izazov)",
          "instruction": "U klasi Heroj iz primera dodaj metodu 'izleci_se(kolicina)' koja povećava zdravlje, ali pazi da nikada ne pređe maksimalnih 100 poena!",
          "starter": "# Dopuni metodu izleci_se:\nclass Heroj:\n    def __init__(self, ime, hp=100):\n        self.ime = ime\n        self.hp = hp\n        self.max_hp = 100\n        \n    def izleci_se(self, kolicina):\n        # Tvoj kod:\n        pass\n\nh = Heroj(\"Marko\", hp=70)\nh.izleci_se(50) # Treba da se zaustavi na 100!\nprint(\"Trenutni HP:\", h.hp)\n",
          "solution": "class Heroj:\n    def __init__(self, ime, hp=100):\n        self.ime = ime\n        self.hp = hp\n        self.max_hp = 100\n    def izleci_se(self, kolicina):\n        self.hp = min(self.max_hp, self.hp + kolicina)\n        print(f\"{self.ime} se izlečio na {self.hp} HP!\")\n\nh = Heroj(\"Marko\", hp=70)\nh.izleci_se(50)\nprint(\"Trenutni HP:\", h.hp)",
          "hint": "Iskoristi min funkciju: self.hp = min(self.max_hp, self.hp + kolicina)."
        }
      ],
      "quiz": {
        "question": "Koja je uloga konstruktora __init__ u klasi?",
        "options": [
          {
            "text": "Briše objekat kada završimo sa radom.",
            "correct": false,
            "explanation": "Za brisanje se koristi destruktor __del__."
          },
          {
            "text": "Automatski se poziva pri kreiranju novog objekta radi postavljanja početnih vrednosti atributa.",
            "correct": true,
            "explanation": "Bravo! __init__ (inicijalizator) postavlja atribute objekta onog trenutka kada ga napraviš."
          },
          {
            "text": "Služi samo za ispis podataka u konzolu.",
            "correct": false,
            "explanation": "Ne, to radi funkcija print() ili dunder metoda __str__."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: Sve je objekat i dunder metode",
        "content": "U Pythonu je bukvalno <strong>sve objekat</strong> – čak i običan broj <code>5</code> je instanca ugrađene klase <code>int</code>! Kada napišeš <code>str(objekat)</code> ili <code>print(objekat)</code>, Python u pozadini poziva takozvanu <em>dunder</em> (double underscore) metodu <code>__str__()</code> definisanu u toj klasi."
      }
    },
    {
      "id": "k2-algoritmi",
      "title": "8. Algoritamsko razmišljanje – Pretraga i Rešavanje Problema",
      "icon": "🧠",
      "category": "Algoritmi",
      "summary": "Kako računari pronalaze iglu u plastu sena: uporedi Linearnu i Binarnu pretragu u O(log n) koraka.",
      "content": "\n      <p class=\"lead\">Razlika između prosečnog i vrhunskog programera nije u poznavanju komandi, već u <strong>algoritamskom razmišljanju</strong>: kako rešiti problem što brže i uz što manje resursa!</p>\n\n      <h3>Linearna vs. Binarna pretraga</h3>\n      <ul>\n        <li><strong>Linearna pretraga (O(n)):</strong> Proveravaš redom jedan po jedan element. Za 1.000.000 stavki, u najgorem slučaju treba ti 1.000.000 koraka!</li>\n        <li><strong>Binarna pretraga (O(log n)):</strong> Ako je lista sortirana, otvoriš tačno u sredinu! Ako je traženi broj veći, odbaciš celu levu polovinu. Za 1.000.000 stavki, potrebno je <strong>samo 20 koraka</strong>!</li>\n      </ul>\n\n      <div class=\"analogy-card\">\n        <div class=\"analogy-icon\">📖</div>\n        <div class=\"analogy-text\">\n          <strong>Traženje reči u rečniku:</strong> Kada u rečniku tražiš reč na slovo \"P\", ne listaš od slova \"A\" stranicu po stranicu! Otvoriš na pola, vidiš slovo \"M\", znaš da je \"P\" desno i prepoloviš preostali deo!\n        </div>\n      </div>\n    ",
      "starterCode": "# Implementacija binarne pretrage\ndef binarna_pretraga(sortirana_lista, cilj):\n    levo = 0\n    desno = len(sortirana_lista) - 1\n    broj_koraka = 0\n    \n    while levo <= desno:\n        broj_koraka += 1\n        sredina = (levo + desno) // 2\n        vrednost = sortirana_lista[sredina]\n        \n        if vrednost == cilj:\n            return f\"Pronađen broj {cilj} na indeksu {sredina} u samo {broj_koraka} koraka! 🎯\"\n        elif vrednost < cilj:\n            levo = sredina + 1\n        else:\n            desno = sredina - 1\n            \n    return f\"Broj {cilj} ne postoji u listi.\"\n\nbrojevi = [3, 7, 12, 19, 25, 33, 42, 55, 68, 79, 91, 104, 150]\nprint(binarna_pretraga(brojevi, 55))\nprint(binarna_pretraga(brojevi, 100))\n",
      "challenges": [
        {
          "title": "Zadatak 1: Linearna pretraga (Zagrevanje)",
          "instruction": "Napiši funkciju 'linearna_pretraga(lista, trazeno)' koja ručno pomoću for petlje traži element i vraća njegov indeks, ili -1 ako ga nema (bez korišćenja .index() metode).",
          "starter": "def linearna_pretraga(lista, trazeno):\n    # Prođi sa for petljom i vrati indeks:\n    pass\n\nimena = [\"Ana\", \"Petar\", \"Miloš\", \"Jovana\"]\nprint(linearna_pretraga(imena, \"Miloš\")) # Treba da vrati 2\nprint(linearna_pretraga(imena, \"Stefan\")) # Treba da vrati -1\n",
          "solution": "def linearna_pretraga(lista, trazeno):\n    for i in range(len(lista)):\n        if lista[i] == trazeno:\n            return i\n    return -1\n\nimena = [\"Ana\", \"Petar\", \"Miloš\", \"Jovana\"]\nprint(linearna_pretraga(imena, \"Miloš\"))\nprint(linearna_pretraga(imena, \"Stefan\"))",
          "hint": "Iskoristi for i in range(len(lista)): if lista[i] == trazeno: return i. Na kraju return -1."
        },
        {
          "title": "Zadatak 2: Najčešći element u listi (Glavni izazov)",
          "instruction": "Napiši funkciju 'najcesci_broj(lista)' koja pronalazi broj koji se najviše puta ponavlja u listi pomoću rečnika brojača.",
          "starter": "podaci = [1, 3, 2, 3, 4, 3, 2, 1, 3, 5]\n\ndef najcesci_broj(lista):\n    brojac = {}\n    # Napuni brojac i nađi ključ sa najvećom vrednošću:\n    pass\n\nprint(\"Najčešći broj je:\", najcesci_broj(podaci)) # 3\n",
          "solution": "podaci = [1, 3, 2, 3, 4, 3, 2, 1, 3, 5]\n\ndef najcesci_broj(lista):\n    brojac = {}\n    for x in lista:\n        brojac[x] = brojac.get(x, 0) + 1\n    return max(brojac, key=brojac.get)\n\nprint(\"Najčešći broj je:\", najcesci_broj(podaci))",
          "hint": "Iskoristi brojac.get(x, 0) + 1 pa vrati max(brojac, key=brojac.get)."
        },
        {
          "title": "Zadatak 3: Dva sabirka (Two Sum) (Pro izazov)",
          "instruction": "Čuveni Google intervju zadatak: data je lista brojeva i ciljni zbir. Pronađi DVA broja čiji je zbir jednak cilju i vrati ih u torki.",
          "starter": "def pronadji_par(brojevi, cilj):\n    vidjeni = set()\n    for b in brojevi:\n        potreban = cilj - b\n        if potreban in vidjeni:\n            return (potreban, b)\n        vidjeni.add(b)\n    return None\n\nrezultat = pronadji_par([2, 7, 11, 15], 9)\nprint(\"Pronađeni par:\", rezultat) # (2, 7)\n",
          "solution": "def pronadji_par(brojevi, cilj):\n    vidjeni = set()\n    for b in brojevi:\n        potreban = cilj - b\n        if potreban in vidjeni:\n            return (potreban, b)\n        vidjeni.add(b)\n    return None\n\nrezultat = pronadji_par([2, 7, 11, 15], 9)\nprint(\"Pronađeni par:\", rezultat)",
          "hint": "Skup omogućava proveru 'if potreban in vidjeni' u brzini O(1)!"
        }
      ],
      "quiz": {
        "question": "Koliko je maksimalno koraka potrebno binarnoj pretrazi da pronađe podatak u sortiranoj listi od 1.000.000 elemenata?",
        "options": [
          {
            "text": "Oko 500.000 koraka.",
            "correct": false,
            "explanation": "Toliko bi u proseku trebalo linearnoj pretrazi."
          },
          {
            "text": "Tačno 20 koraka!",
            "correct": true,
            "explanation": "Neverovatno ali tačno! 2 na 20. stepen je 1.048.576. Zbog logaritamske složenosti O(log n), 20 polovljenja rešava milion elemenata!"
          },
          {
            "text": "1.000.000 koraka.",
            "correct": false,
            "explanation": "To je najgori slučaj linearne pretrage."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: Timsort algoritam u Pythonu",
        "content": "Ugrađene funkcije <code>sort()</code> i <code>sorted()</code> u Pythonu koriste <strong>Timsort</strong> (algoritam koji je kreirao Tim Peters 2002. godine). To je hibrid Merge Sorta i Insertion Sorta koji je posebno optimizovan za podatke iz stvarnog sveta koji su već delimično sortirani!"
      }
    },
    {
      "id": "k2-rpg-projekat",
      "title": "9. Veliki Završni Projekat: RPG Avantura! ⚔️",
      "icon": "🎮",
      "category": "Završni projekat",
      "summary": "Spoj klase, rečnike, petlje, greške i nasumičnost u kompletnu borbenu igru protiv Zmaja!",
      "content": "\n      <p class=\"lead\">Dobrodošao u veliko finale drugog kursa! Ovde spajamo sve naučeno: <strong>OOP klase, nasleđivanje, rečnike inventara, try-except obradu i petlju igre</strong> u pravu tekstualnu RPG igru.</p>\n\n      <h3>Arhitektura našeg RPG projekta:</h3>\n      <ul>\n        <li><code>Bice</code> – osnovna klasa za sva stvorenja (ime, HP, snaga)</li>\n        <li><code>Heroj</code> – nasleđuje Biće, dodaje manu za magije i napitke za lečenje</li>\n        <li><code>while</code> petlja – srce igre (traje dok su oba karaktera živa)</li>\n        <li>Interaktivni meni sa izborom akcija: <em>[1] Napad mačem, [2] Vatrena kugla, [3] Napitak</em></li>\n      </ul>\n      <p>Isprobaj igru u editoru desno, a zatim reši izazove ispod i dodaj nove super-moći!</p>\n    ",
      "starterCode": "# ⚔️ RPG TEKSTUALNA AVANTURA: BATTLE FOR THE REALM 🐉\nimport random\n\nclass Bice:\n    def __init__(self, ime, hp, snaga):\n        self.ime = ime\n        self.max_hp = hp\n        self.hp = hp\n        self.snaga = snaga\n        \n    def napad(self, meta):\n        steta = random.randint(self.snaga - 3, self.snaga + 3)\n        print(f\"💥 {self.ime} udara i nanosi {steta} štete!\")\n        meta.hp = max(0, meta.hp - steta)\n\nclass Heroj(Bice):\n    def __init__(self, ime):\n        super().__init__(ime, hp=100, snaga=18)\n        self.napici = 2\n        self.mana = 30\n        \n    def magija(self, meta):\n        if self.mana >= 15:\n            self.mana -= 15\n            steta = 35\n            print(f\"✨ {self.ime} baca VATRENU KUGLU i prži neprijatelja za {steta} štete! (Mana: {self.mana})\")\n            meta.hp = max(0, meta.hp - steta)\n            return True\n        else:\n            print(\"⚠️ Nemaš dovoljno mane za magiju!\")\n            return False\n            \n    def popij_napitak(self):\n        if self.napici > 0:\n            self.napici -= 1\n            leceno = 35\n            self.hp = min(self.max_hp, self.hp + leceno)\n            print(f\"🧪 Popio si napitak! Zdravlje: {self.hp}/{self.max_hp} HP. Preostalo napitaka: {self.napici}\")\n            return True\n        else:\n            print(\"⚠️ Nemaš više napitaka!\")\n            return False\n\nprint(\"=== DOBRODOŠAO U TAMNICU ZMAJA ===\")\nime_igraca = input(\"Unesi ime svog heroja: \") or \"Hrabri Vitez\"\nheroj = Heroj(ime_igraca)\nzmaj = Bice(\"Crveni Zmaj\", hp=90, snaga=14)\n\nwhile heroj.hp > 0 and zmaj.hp > 0:\n    print(f\"\\n[{heroj.ime}: {heroj.hp}/{heroj.max_hp} HP | Mana: {heroj.mana}]  VS  [{zmaj.ime}: {zmaj.hp}/{zmaj.max_hp} HP]\")\n    print(\"Izaberi potez: [1] Napad mačem  [2] Vatrena Kugla  [3] Napitak\")\n    \n    izbor = input(\"Tvoj izbor: \")\n    odigrao = False\n    \n    if izbor == \"1\":\n        heroj.napad(zmaj)\n        odigrao = True\n    elif izbor == \"2\":\n        odigrao = heroj.magija(zmaj)\n    elif izbor == \"3\":\n        odigrao = heroj.popij_napitak()\n    else:\n        print(\"❌ Nevažeći izbor!\")\n        \n    if zmaj.hp <= 0:\n        print(f\"\\n🎉 POBEDA! {heroj.ime} je porazio strašnog zmaja! Osvojio si riznicu blaga! 🏆👑\")\n        break\n        \n    if odigrao:\n        print(f\"\\n🔥 Zmaj uzvraća napad:\")\n        zmaj.napad(heroj)\n        \n    if heroj.hp <= 0:\n        print(f\"\\n💀 {heroj.ime} je pao u boju... Tamnica ostaje neosvojena!\")\n        break\n",
      "challenges": [
        {
          "title": "Zadatak 1: Porazi Zmaja (Zagrevanje)",
          "instruction": "Pokreni igru, unesi svoje ime i primeni strategiju: koristi Vatrenu kuglu dva puta dok imaš mane, a napitak sačuvaj kada ti HP padne ispod 40!",
          "starter": "# Pokreni gotov kod iz desnog editora i pobedi Zmaja!",
          "solution": "# Taktički savet:\n# Krug 1: [2] Magija (Zmaj pada na 55 HP)\n# Krug 2: [2] Magija (Zmaj pada na 20 HP)\n# Krug 3: [1] Napad mačem (Zmaj pada na 0 HP i pobeđuješ!)",
          "hint": "Iskoristi prvo obe magije (troše po 15 mane, imaš 30 mane) za brzih 70 poena štete!"
        },
        {
          "title": "Zadatak 2: Štit i Odbrana (Glavni izazov)",
          "instruction": "Dodaj novu akciju: [4] Štit 🛡️. Kada igrač izabere štit, postavi promenljivu blokira = True, a kada zmaj napadne, ako blokira == True, šteta se prepolovljava!",
          "starter": "# U igru dodaj opciju [4] Štit:\n# elif izbor == \"4\":\n#     blokira = True\n#     print(\"Podigao si štit!\")\n",
          "solution": "# U glavnoj petlji igre:\n# if izbor == \"4\":\n#     print(f\"🛡️ {heroj.ime} podiže štit! Sledeći napad je prepolovljen.\")\n#     odigrao = True\n#     blokira = True\n# U delu gde zmaj napada:\n# if blokira:\n#     steta //= 2\n#     blokira = False",
          "hint": "Definiši promenljivu blokira = False pre svakog kruga, pa ako je izabran štit smanji zmajevu štetu."
        },
        {
          "title": "Zadatak 3: Bes zmaja (Kritični udarac) (Pro izazov)",
          "instruction": "Dodaj logiku zmaju: ako mu zdravlje padne ispod 30 HP, on upada u bes (Rage mode) i dobija +10 dodatne snage na svaki sledeći napad!",
          "starter": "# U klasi Bice ili unutar petlje:\n# if zmaj.hp < 30:\n#     print(\"⚠️ ZMAJ JE BESAN! Njegova snaga raste!\")\n",
          "solution": "# U delu gde zmaj napada:\n# if zmaj.hp < 30:\n#     print(\"😡 Zmaj je pobesneo od rana! Napada dvostruko jače!\")\n#     zmaj.snaga = 24",
          "hint": "Pre napada zmaja proveri if zmaj.hp < 30: zmaj.snaga += 5."
        }
      ],
      "quiz": {
        "question": "Koja je glavna prednost korišćenja OOP klasa pri razvoju igara?",
        "options": [
          {
            "text": "Igra automatski dobija 3D grafiku.",
            "correct": false,
            "explanation": "OOP je arhitektonski šablon za organizaciju koda, ne grafički endžin."
          },
          {
            "text": "Modularnost: lako je dodati 50 novih čudovišta ili oružja bez prepisivanja postojećeg koda.",
            "correct": true,
            "explanation": "Apsolutno tačno! Možeš naslediti klasu Bice i kreirati 'Goblina', 'Vampira' ili 'Čarobnjaka' u samo nekoliko linija koda."
          },
          {
            "text": "Program zauzima nula bajtova u RAM memoriji.",
            "correct": false,
            "explanation": "Nijedan program ne zauzima nula bajtova."
          }
        ]
      },
      "proTip": {
        "title": "Ispod haube: Arhitektura igara (OOP vs ECS)",
        "content": "U profesionalnom razvoju igara (GameDev), klasična OOP hijerarhija se često kombinuje sa <strong>ECS</strong> (<em>Entity-Component-System</em>) arhitekturom. Umesto dubokog nasleđivanja, likovi se grade od nezavisnih komponenti (npr. RenderComponent, PhysicsComponent, HealthComponent) što sprečava takozvani 'problem krute hijerarhije'!"
      }
    }
  ]
};
if (typeof module !== "undefined") module.exports = { KURS_MAJSTOR_LOGIKE };
