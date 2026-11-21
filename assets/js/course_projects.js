// ============================================================================
// KURS 5: VOĐENI PROJEKTI NA RAČUNARU (10 REALNIH APLIKACIJA)
// 100% Autorski kurikulum platforme 'Python Od Nule'
// ============================================================================
const LESSONS_KURS_PROJECTS = [
  {
    "id": "gp-01-generator-lozinki",
    "title": "1. Pametni Generator i Revizor Lozinki (CLI)",
    "subtitle": "Projekat #1 • Validacija entropije, uklanjanje dvosmislenih znakova i ocenjivanje snage",
    "difficulty": "Projekat 1/10",
    "duration": "30 min",
    "analogy": {
      "icon": "🔐",
      "title": "Bravar za digitalnu bezbednost na tvom računaru!",
      "text": "Pravi generator lozinki ne baca samo nasumična slova — on garantuje da lozinka sadrži sve klase karaktera, izbacuje zbunjujuće znakove (0 vs O, 1 vs l) i zna da izračuna ocenu bezbednosti svake lozinke!"
    },
    "content": "\n          <p class=\"lead\">Tvoj prvi vođeni projekat za <strong>VS Code na računaru</strong> jeste ozbiljan bezbednosni CLI alat <code>lozinka_pro.py</code>. Kombinuješ <code>random</code>, <code>set</code>, <code>any()</code>, <code>''.join()</code> i defanzivnu validaciju.</p>\n          <h3>📁 Plan projekta na računaru (<code>lozinka_pro/main.py</code>)</h3>\n          <pre><code># Arhitektura fajla lozinka_pro.py:\n# 1. oceni_lozinku(s)        -> vraća skor 0..5 po 5 kriterijuma\n# 2. ocisti_dvosmislene(s)   -> izbacuje zbunjujuće '0', 'O', '1', 'l', 'I'\n# 3. generisi_sigurnu(duzina)-> garantuje bar 1 veliko, 1 malo, 1 cifru i 1 simbol\n# 4. izvestaj_lozinki(lista) -> klasifikuje listu u SLABA / SREDNJA / JAKA</code></pre>\n          <div class=\"tip-box\">\n            <span class=\"tip-icon\">💻</span>\n            <div><strong>Kako da radiš vođene projekte:</strong> Rešavaj korake 1 → 4 redom ovde uz automatske <code>assert</code> testove, a zatim klikni <strong>„Preuzmi .py”</strong>, otvori fajl u VS Code-u i dodaj svoj <code>while True</code> meni za rad na računaru!</div>\n          </div>\n        ",
    "starterCode": "# PROJEKAT 01: Pametni Revizor Lozinki (Polazni prototip)\nSIMBOLI = \"!@#$%^&*\"\n\ndef oceni_lozinku(s):\n    skor = 0\n    if len(s) >= 8: skor += 1\n    if len(s) >= 12: skor += 1\n    if any(c.isupper() for c in s): skor += 1\n    if any(c.isdigit() for c in s): skor += 1\n    if any(c in SIMBOLI for c in s): skor += 1\n    return skor\n\nfor test in [\"1234\", \"Tajna123\", \"SuperTajna#2026\"]:\n    print(f\"{test:<18} -> skor: {oceni_lozinku(test)}/5\")\n",
    "challenges": [
      {
        "title": "Korak 1: Filter dvosmislenih znakova (Čitljivost)",
        "instruction": "U praksi korisnici često pomešaju <code>0</code> i <code>O</code> ili <code>1</code>, <code>l</code> i <code>I</code>. Napiši funkciju <code>bez_dvosmislenih(alfabet)</code> koja vraća novi string bez znakova iz skupa <code>{'0', 'O', '1', 'l', 'I'}</code>.",
        "starter": "def bez_dvosmislenih(alfabet):\n    # Izbaci '0', 'O', '1', 'l', 'I' pomoću join + comprehension:\n    pass\n\nprint(bez_dvosmislenih('Ab0O1lI9Z'))\n",
        "solution": "def bez_dvosmislenih(alfabet):\n    zabrana = {'0', 'O', '1', 'l', 'I'}\n    return ''.join(z for z in alfabet if z not in zabrana)\n\nprint(bez_dvosmislenih('Ab0O1lI9Z'))",
        "hint": "Napravi zabrana = {'0', 'O', '1', 'l', 'I'} i vrati ''.join(z for z in alfabet if z not in zabrana)."
      },
      {
        "title": "Korak 2: Detaljni ocenjivač snage (0–5 poena)",
        "instruction": "Napiši funkciju <code>oceni_lozinku(s)</code> koja daje po +1 poen za: dužinu <code>>= 8</code>, dužinu <code>>= 12</code>, bar jedno veliko slovo, bar jednu cifru i bar jedan simbol iz <code>'!@#$%^&*'</code>.",
        "starter": "def oceni_lozinku(s):\n    # Izračunaj ukupan skor od 0 do 5:\n    pass\n\nprint(oceni_lozinku('SuperTajna#2026'))\n",
        "solution": "def oceni_lozinku(s):\n    simboli = '!@#$%^&*'\n    skor = 0\n    if len(s) >= 8: skor += 1\n    if len(s) >= 12: skor += 1\n    if any(c.isupper() for c in s): skor += 1\n    if any(c.isdigit() for c in s): skor += 1\n    if any(c in simboli for c in s): skor += 1\n    return skor\n\nprint(oceni_lozinku('SuperTajna#2026'))",
        "hint": "Koristi 5 nezavisnih if provera sa any(c.isupper() ...), any(c.isdigit() ...) i any(c in simboli ...)."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Slaba lozinka prolazi zbog 'or'!)",
        "instruction": "Kolega je napisao uslov sa <code>or</code> umesto <code>and</code>, pa lozinka <code>'aaaaaaaa'</code> prolazi kao bezbedna! Ispravi funkciju <code>je_bezbedna(s)</code> tako da zahteva <strong>SVE</strong>: dužina <code>>= 8</code>, bar 1 veliko slovo, bar 1 malo slovo i bar 1 cifru.",
        "starter": "def je_bezbedna(s):\n    # BUG: koristi 'or' umesto 'and'!\n    return len(s) >= 8 or any(c.isupper() for c in s) or any(c.isdigit() for c in s)\n\nprint('aaaaaaaa ->', je_bezbedna('aaaaaaaa'))\nprint('Tajna123 ->', je_bezbedna('Tajna123'))\n",
        "solution": "def je_bezbedna(s):\n    return (\n        len(s) >= 8\n        and any(c.isupper() for c in s)\n        and any(c.islower() for c in s)\n        and any(c.isdigit() for c in s)\n    )\n\nprint('aaaaaaaa ->', je_bezbedna('aaaaaaaa'))\nprint('Tajna123 ->', je_bezbedna('Tajna123'))",
        "hint": "Zameni or sa and i dodaj proveru any(c.islower() for c in s)."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Masovni revizor lozinki",
        "instruction": "Napiši funkciju <code>revizija_lozinki(lista)</code> koja svaku lozinku iz liste ocenjuje po pravilu: <code>len >= 12</code> + veliko + cifra = <code>'JAKA'</code>; <code>len >= 8</code> + (veliko ili cifra) = <code>'SREDNJA'</code>; ostalo = <code>'SLABA'</code>. Vrati rečnik <code>{'JAKA': n1, 'SREDNJA': n2, 'SLABA': n3}</code>.",
        "starter": "def revizija_lozinki(lista):\n    # Klasifikuj i prebroj sve lozinke u rečnik:\n    pass\n\nprint(revizija_lozinki(['123', 'Tajna123', 'MegaSigurna2026']))\n",
        "solution": "def revizija_lozinki(lista):\n    rez = {'JAKA': 0, 'SREDNJA': 0, 'SLABA': 0}\n    for s in lista:\n        vel = any(c.isupper() for c in s)\n        cif = any(c.isdigit() for c in s)\n        if len(s) >= 12 and vel and cif:\n            rez['JAKA'] += 1\n        elif len(s) >= 8 and (vel or cif):\n            rez['SREDNJA'] += 1\n        else:\n            rez['SLABA'] += 1\n    return rez\n\nprint(revizija_lozinki(['123', 'Tajna123', 'MegaSigurna2026']))",
        "hint": "Inicijalizuj rez = {'JAKA': 0, 'SREDNJA': 0, 'SLABA': 0} i uvećavaj odgovarajući ključ u if/elif/else."
      }
    ],
    "quiz": [
      {
        "question": "Zašto u generatorima lozinki izbacujemo znakove 0, O, 1, l, I?",
        "options": [
          "Jer ih korisnici lako pomešaju pri ručnom prekucavanju",
          "Jer Python ne podržava slovo O",
          "Da bi lozinka bila kraća",
          "Zato što usporavaju CPU"
        ],
        "correct": 0,
        "explanation": "U mnogim fontovima 0 i O ili 1 i l izgledaju gotovo identično."
      },
      {
        "question": "Zašto je na pravom računaru za kriptografske lozinke modul secrets bolji od random?",
        "options": [
          "secrets koristi kriptografski bezbedan generator operativnog sistema",
          "random ne ume da bira slova",
          "secrets je stariji modul",
          "Nema razlike"
        ],
        "correct": 0,
        "explanation": "Na PC-u u Pythonu 3.6+ za realne lozinke uvek koristimo secrets.choice() umesto random.choice()."
      },
      {
        "question": "Koja je razlika između provere sa 'or' i 'and' kod validacije lozinke?",
        "options": [
          "'and' zahteva da SVA pravila budu ispunjena, dok 'or' pušta lozinku čim ispuni samo jedno",
          "'or' je stroži",
          "Oba rade isto",
          "'and' radi samo za brojeve"
        ],
        "correct": 0,
        "explanation": "Kod bezbednosnih pravila uvek povezujemo obavezne zahteve operatorom and."
      },
      {
        "question": "Zašto je provera 'z not in zabrana' brža kada je zabrana skup (set) nego lista?",
        "options": [
          "Skup proverava pripadnost u O(1) vremenu pomoću heš tabele",
          "Skup ima manje znakova",
          "Lista ne podržava not in",
          "Skup automatski šifruje lozinku"
        ],
        "correct": 0,
        "explanation": "Pretraga u set-u je konstantnog vremena O(1)."
      }
    ],
    "proTip": {
      "title": "Nadogradnja na PC-u: modul secrets",
      "content": "Kada ovaj fajl prebaciš u VS Code na računaru, zameni <code>import random</code> sa ugrađenim <code>import secrets</code> i <code>secrets.choice()</code> — tako tvoj generator dostiže bankarski standard bezbednosti!"
    }
  },
  {
    "id": "gp-02-budzet-menadzer",
    "title": "2. Lični Menadžer Budžeta i Troškova (CSV)",
    "subtitle": "Projekat #2 • Grupisanje po kategorijama, procenti potrošnje, alarm limita i CSV obrada",
    "difficulty": "Projekat 2/10",
    "duration": "30 min",
    "analogy": {
      "icon": "💰",
      "title": "Tvoj lični finansijski analitičar u Pythonu!",
      "text": "Umesto da na kraju meseca pitaš gde je nestao novac, ova aplikacija čita tvoje CSV račune, sabira troškove po kategorijama, računa tačne procente i pali crveni alarm čim pređeš budžet!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #2 gradimo aplikaciju <code>budzet_app.py</code> za analizu ličnih finansija. Vežbaš <strong>CSV parsiranje</strong>, <strong>grupisanje rečnicima</strong>, <strong>zaokruživanje procenata</strong> i <strong>detekciju prekoračenja budžeta</strong>.</p>\n          <h3>📁 Plan projekta na računaru (<code>budzet_app/budzet.py</code>)</h3>\n          <pre><code># Format fajla troskovi.csv:\n# datum,kategorija,iznos\n# 2026-11-01,Hrana,1200\n# 2026-11-02,Prevoz,450\n# 2026-11-03,Hrana,800</code></pre>\n        ",
    "starterCode": "# PROJEKAT 02: Menadžer Budžeta (CSV prototip)\ncsv_podaci = \"\"\"Hrana,1200\nPrevoz,450\nHrana,800\nKnjige,1550\"\"\"\n\npo_kat = {}\nfor red in csv_podaci.splitlines():\n    kat, iznos = red.split(\",\")\n    po_kat[kat] = po_kat.get(kat, 0) + float(iznos)\n\nukupno = sum(po_kat.values())\nfor k, v in po_kat.items():\n    print(f\"{k:<10} | {v:>8.2f} RSD ({v/ukupno*100:.1f}%)\")\n",
    "challenges": [
      {
        "title": "Korak 1: Parsiranje CSV troškova u listu rečnika",
        "instruction": "Napiši funkciju <code>ucitaj_csv(tekst)</code> koja preskače prazne redove i svaku liniju <code>'Kategorija,Iznos'</code> pretvara u rečnik <code>{'kategorija': ..., 'iznos': float(...)}</code>.",
        "starter": "def ucitaj_csv(tekst):\n    # Parsiraj redove u listu rečnika:\n    pass\n\nprint(ucitaj_csv('Hrana,1200\\nPrevoz,450'))\n",
        "solution": "def ucitaj_csv(tekst):\n    rez = []\n    for red in tekst.splitlines():\n        r = red.strip()\n        if r and ',' in r:\n            kat, izn = r.split(',')\n            rez.append({'kategorija': kat.strip(), 'iznos': float(izn.strip())})\n    return rez\n\nprint(ucitaj_csv('Hrana,1200\\nPrevoz,450'))",
        "hint": "Koristi tekst.splitlines(), podeli po zarezu i pretvori iznos u float()."
      },
      {
        "title": "Korak 2: Procentualni udeo svake kategorije",
        "instruction": "Napiši funkciju <code>procenti_kategorija(stavke)</code> koja prima listu rečnika (<code>kategorija</code>, <code>iznos</code>) i vraća rečnik <code>{kategorija: procenat}</code> zaokružen na 1 decimalu (<code>round(..., 1)</code>). Za praznu listu vrati <code>{}</code>.",
        "starter": "def procenti_kategorija(stavke):\n    # Izračunaj sumu po kategoriji i procenat od ukupnog zbira:\n    pass\n\ntest = [{'kategorija': 'Hrana', 'iznos': 750}, {'kategorija': 'Prevoz', 'iznos': 250}]\nprint(procenti_kategorija(test))\n",
        "solution": "def procenti_kategorija(stavke):\n    if not stavke:\n        return {}\n    po_kat = {}\n    for s in stavke:\n        k = s['kategorija']\n        po_kat[k] = po_kat.get(k, 0) + s['iznos']\n    ukupno = sum(po_kat.values())\n    if ukupno == 0:\n        return {}\n    return {k: round((v / ukupno) * 100, 1) for k, v in po_kat.items()}\n\ntest = [{'kategorija': 'Hrana', 'iznos': 750}, {'kategorija': 'Prevoz', 'iznos': 250}]\nprint(procenti_kategorija(test))",
        "hint": "Prvo saberi iznose u po_kat, izračunaj ukupno = sum(po_kat.values()), pa Dict Comprehension sa round(v / ukupno * 100, 1)."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Negativan trošak kvari budžet!)",
        "instruction": "Ako neko unese negativan iznos, funkcija <code>dodaj_trosak(lista, kategorija, iznos)</code> ga dodaje i veštački smanjuje potrošnju! Ispravi je da prihvati samo <code>iznos > 0</code> (vraća <code>True</code> ako je dodat, <code>False</code> ako je odbijen).",
        "starter": "def dodaj_trosak(lista, kategorija, iznos):\n    # BUG: prihvata i negativne ili nulte iznose!\n    lista.append({'kategorija': kategorija, 'iznos': iznos})\n    return True\n\nt = []\nprint('Negativan odbijen?', not dodaj_trosak(t, 'Hrana', -500))\n",
        "solution": "def dodaj_trosak(lista, kategorija, iznos):\n    if iznos <= 0:\n        return False\n    lista.append({'kategorija': kategorija, 'iznos': iznos})\n    return True\n\nt = []\nprint('Negativan odbijen?', not dodaj_trosak(t, 'Hrana', -500))",
        "hint": "Dodaj guard clause: if iznos <= 0: return False na sam vrh funkcije."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Alarm prekoračenih limita",
        "instruction": "Napiši funkciju <code>prekoraceni_limiti(potrosnja, limiti)</code> koja prima dva rečnika (npr. <code>{'Hrana': 15000, 'Prevoz': 3000}</code> i <code>{'Hrana': 12000, 'Prevoz': 4000}</code>) i vraća <strong>sortiranu listu kategorija</strong> gde je potrošnja strogo veća od limita.",
        "starter": "def prekoraceni_limiti(potrosnja, limiti):\n    # Pronađi sve kategorije gde je potrosnja[k] > limiti[k]:\n    pass\n\nprint(prekoraceni_limiti({'Hrana': 15000, 'Prevoz': 3000, 'Zabava': 6000}, {'Hrana': 12000, 'Prevoz': 4000, 'Zabava': 5000}))\n",
        "solution": "def prekoraceni_limiti(potrosnja, limiti):\n    return sorted([k for k, v in potrosnja.items() if k in limiti and v > limiti[k]])\n\nprint(prekoraceni_limiti({'Hrana': 15000, 'Prevoz': 3000, 'Zabava': 6000}, {'Hrana': 12000, 'Prevoz': 4000, 'Zabava': 5000}))",
        "hint": "Proveri if k in limiti and v > limiti[k] unutar List Comprehension-a i sortiraj rezultat sa sorted()."
      }
    ],
    "quiz": [
      {
        "question": "Zašto u finansijskoj aplikaciji uvek proveravamo if ukupno == 0 pre računanja procenta?",
        "options": [
          "Da sprečimo ZeroDivisionError kada nema troškova",
          "Da uštedimo struju",
          "Zato što Python ne ume da deli sa 100",
          "Da sakrijemo velike račune"
        ],
        "correct": 0,
        "explanation": "Deljenje nulom ruši program — guard clause za prazan skup podataka je obavezan."
      },
      {
        "question": "Zašto za CSV podatke koristimo float(iznos) umesto da ih ostavimo kao string?",
        "options": [
          "Zato što stringovi sabiranjem lepe tekst ('10'+'20'='1020') umesto matematičkog zbira",
          "Stringovi ne mogu u rečnik",
          "float je kraći za kucanje",
          "CSV fajl ne čuva brojeve"
        ],
        "correct": 0,
        "explanation": "Podaci iz fajla uvek stižu kao tekst i moraju se konvertovati u float ili int za računanje."
      },
      {
        "question": "Šta proverava uslov 'k in limiti' pre 'v > limiti[k]'?",
        "options": [
          "Sprečava KeyError ako postoji kategorija bez definisanog limita",
          "Briše ključ k iz rečnika",
          "Sortira rečnik",
          "Pretvara k u broj"
        ],
        "correct": 0,
        "explanation": "Short-circuit evaluacija operatora and garantuje da se limiti[k] čita samo ako ključ zaista postoji."
      },
      {
        "question": "Koja je prednost čuvanja budžeta u CSV formatu na računaru?",
        "options": [
          "Fajl možeš odmah otvoriti i u Excel-u ili Google Sheets-u za grafikone",
          "CSV fajl se automatski šifruje",
          "CSV radi samo na Linuxu",
          "Nema prednosti"
        ],
        "correct": 0,
        "explanation": "CSV je univerzalni tabelarni format čitljiv i Pythonu i svim programima za tabele."
      }
    ],
    "proTip": {
      "title": "Trajno čuvanje na računaru",
      "content": "U VS Code-u dodaj funkciju <code>sacuvaj_csv(putanja, stavke)</code> sa <code>with open(putanja, 'w', encoding='utf-8') as f:</code> — tako tvoj lični budžet preživljava gašenje računara!"
    }
  },
  {
    "id": "gp-03-imenik-kontakata",
    "title": "3. Napredni Telefonski Imenik sa Pretragom",
    "subtitle": "Projekat #3 • Normalizacija brojeva (+381), pretraga po prefiksu i grupisanje po oznakama",
    "difficulty": "Projekat 3/10",
    "duration": "30 min",
    "analogy": {
      "icon": "📱",
      "title": "Mini-imenik pametnog telefona u terminalu!",
      "text": "Kad na telefonu ukucaš 'an', on odmah pronalazi i 'Ana Petrović' i 'Milan Kostić', a brojeve poput '064 123-456' uredno čisti u jedinstven format +38164123456!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #3 praviš <code>imenik.py</code> sa stvarnom logikom pametnog telefona: čišćenje i normalizacija brojeva, brza pretraga nezavisna od velikih/malih slova, i grupisanje kontakata po oznakama (<code>Porodica</code>, <code>Posao</code>, <code>Prijatelji</code>).</p>\n          <h3>📁 Plan strukture podataka</h3>\n          <pre><code>kontakti = [\n    {\"ime\": \"Ana Petrović\", \"tel\": \"+38164111222\", \"grupa\": \"Posao\"},\n    {\"ime\": \"Vuk Nikolić\", \"tel\": \"+38163999888\", \"grupa\": \"Porodica\"}\n]</code></pre>\n        ",
    "starterCode": "# PROJEKAT 03: Pametni Imenik (Prototip pretrage)\nkontakti = [\n    {\"ime\": \"Ana Petrović\", \"tel\": \"+38164111222\", \"grupa\": \"Posao\"},\n    {\"ime\": \"Vuk Nikolić\", \"tel\": \"+38163999888\", \"grupa\": \"Porodica\"},\n    {\"ime\": \"Anđela Ilić\", \"tel\": \"+38165222333\", \"grupa\": \"Posao\"}\n]\n\nupit = \"an\"\npronadjeni = [k[\"ime\"] for k in kontakti if upit.lower() in k[\"ime\"].lower()]\nprint(\"Rezultati za 'an':\", pronadjeni)\n",
    "challenges": [
      {
        "title": "Korak 1: Normalizator srpskih brojeva telefona",
        "instruction": "Napiši funkciju <code>normalizuj_broj(tel)</code> koja uklanja razmake, crtice i kose crte (<code>' '</code>, <code>'-'</code>, <code>'/'</code>), a ako broj počinje sa <code>'0'</code>, zamenjuje vodeću nulu sa <code>'+381'</code> (npr. <code>'064 123-456'</code> -> <code>'+38164123456'</code>).",
        "starter": "def normalizuj_broj(tel):\n    # Očisti razmake/crtice/kose crte i zameni početnu 0 sa +381:\n    pass\n\nprint(normalizuj_broj('064 123-456'))\nprint(normalizuj_broj('+381 63/999-888'))\n",
        "solution": "def normalizuj_broj(tel):\n    cisto = tel.replace(' ', '').replace('-', '').replace('/', '')\n    if cisto.startswith('0'):\n        cisto = '+381' + cisto[1:]\n    return cisto\n\nprint(normalizuj_broj('064 123-456'))\nprint(normalizuj_broj('+381 63/999-888'))",
        "hint": "Očisti sa .replace(), a zatim proveri if cisto.startswith('0'): cisto = '+381' + cisto[1:]."
      },
      {
        "title": "Korak 2: Pretraga kontakata po delu imena ili broja",
        "instruction": "Napiši funkciju <code>pretrazi(kontakti, upit)</code> koja vraća sortiranu listu <strong>imena</strong> svih kontakata kod kojih se <code>upit</code> (malim slovima) pojavljuje u <code>ime</code> ILI u <code>tel</code>.",
        "starter": "def pretrazi(kontakti, upit):\n    # Pretraži i ime i tel (case-insensitive) i vrati sorted listu imena:\n    pass\n\ndb = [{'ime': 'Ana', 'tel': '+38164111'}, {'ime': 'Vuk', 'tel': '+38163222'}]\nprint(pretrazi(db, '641'))\n",
        "solution": "def pretrazi(kontakti, upit):\n    u = upit.strip().lower()\n    return sorted([k['ime'] for k in kontakti if u in k['ime'].lower() or u in k['tel'].lower()])\n\ndb = [{'ime': 'Ana', 'tel': '+38164111'}, {'ime': 'Vuk', 'tel': '+38163222'}]\nprint(pretrazi(db, '641'))",
        "hint": "Spusti upit u mala slova i proveri u in k['ime'].lower() or u in k['tel'].lower()."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Duplikat kontakta prolazi zbog velikog slova!)",
        "instruction": "Kolega proverava da li ime već postoji bez <code>.lower()</code>, pa <code>'ana'</code> i <code>'Ana'</code> ulaze duplo u imenik! Ispravi funkciju <code>dodaj_kontakt(kontakti, ime, tel)</code> da odbije duplikat (vraća <code>False</code> ako ime već postoji bez obzira na velika/mala slova, inače dodaje i vraća <code>True</code>).",
        "starter": "def dodaj_kontakt(kontakti, ime, tel):\n    # BUG: poredi bez .lower()!\n    if any(k['ime'] == ime for k in kontakti):\n        return False\n    kontakti.append({'ime': ime, 'tel': tel})\n    return True\n\ndb = [{'ime': 'Ana', 'tel': '064111'}]\nprint('Duplikat blokiran?', not dodaj_kontakt(db, 'ana', '064999'))\n",
        "solution": "def dodaj_kontakt(kontakti, ime, tel):\n    if any(k['ime'].lower() == ime.strip().lower() for k in kontakti):\n        return False\n    kontakti.append({'ime': ime.strip(), 'tel': tel})\n    return True\n\ndb = [{'ime': 'Ana', 'tel': '064111'}]\nprint('Duplikat blokiran?', not dodaj_kontakt(db, 'ana', '064999'))",
        "hint": "Uporedi k['ime'].lower() == ime.strip().lower()."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Grupisanje kontakata po grupi",
        "instruction": "Napiši funkciju <code>grupisi_kontakte(kontakti)</code> koja vraća rečnik gde je ključ naziv grupe, a vrednost sortirana lista imena u toj grupi (npr. <code>{'Posao': ['Ana', 'Marko'], 'Porodica': ['Vuk']}</code>).",
        "starter": "def grupisi_kontakte(kontakti):\n    # Grupiši imena po ključu 'grupa' i sortiraj svaku listu:\n    pass\n\ndb = [{'ime': 'Marko', 'grupa': 'Posao'}, {'ime': 'Ana', 'grupa': 'Posao'}, {'ime': 'Vuk', 'grupa': 'Porodica'}]\nprint(grupisi_kontakte(db))\n",
        "solution": "def grupisi_kontakte(kontakti):\n    rez = {}\n    for k in kontakti:\n        g = k['grupa']\n        if g not in rez:\n            rez[g] = []\n        rez[g].append(k['ime'])\n    return {g: sorted(imena) for g, imena in rez.items()}\n\ndb = [{'ime': 'Marko', 'grupa': 'Posao'}, {'ime': 'Ana', 'grupa': 'Posao'}, {'ime': 'Vuk', 'grupa': 'Porodica'}]\nprint(grupisi_kontakte(db))",
        "hint": "Dodaj svako ime u rez[g], a na kraju sortiraj svaku listu pomoću Dict Comprehension-a."
      }
    ],
    "quiz": [
      {
        "question": "Zašto normalizujemo telefonske brojeve pre čuvanja u bazu?",
        "options": [
          "Da se '064-123' i '+381 64 123' prepoznaju kao isti broj",
          "Da bi zauzimali više memorije",
          "Zato što Python ne prima crtice",
          "Da sakrijemo pozivni broj"
        ],
        "correct": 0,
        "explanation": "Jedinstveni kanonski format sprečava duplikate i olakšava pretragu."
      },
      {
        "question": "Šta vraća izraz '064123'[1:]?",
        "options": [
          "'64123'",
          "'0'",
          "'06412'",
          "'321460'"
        ],
        "correct": 0,
        "explanation": "Slicing [1:] skida prvi karakter (indeks 0) i vraća ostatak stringa."
      },
      {
        "question": "Zašto je any(k['ime'].lower() == ...) dobro rešenje za proveru duplikata?",
        "options": [
          "Staje čim nađe prvo poklapanje i čitljivo je u jednoj liniji",
          "Automatski briše duplikate",
          "Sortira listu kontakata",
          "Radi samo za brojeve"
        ],
        "correct": 0,
        "explanation": "any() je kratak, jasan i prekida petlju na prvom pronađenom duplikatu."
      },
      {
        "question": "Koji format fajla je najbolji za čuvanje ugnježdenih kontakata (ime, tel, grupa) na računaru?",
        "options": [
          "JSON (json.dumps / json.loads)",
          "Obična slika PNG",
          "MP3 audio",
          "Prazan fajl"
        ],
        "correct": 0,
        "explanation": "JSON prirodno čuva liste rečnika bez komplikovanog parsiranja zareza."
      }
    ],
    "proTip": {
      "title": "Izvoz u vCard (.vcf)",
      "content": "Na svom računaru možeš dodati funkciju koja iz tvoje liste kontakata generiše standardni <code>.vcf</code> tekst fajl — možeš ga direktno uvesti u svoj Android ili iPhone telefon!"
    }
  },
  {
    "id": "gp-04-flashcards-ucenje",
    "title": "4. Pametne Kartice za Učenje (Spaced Repetition)",
    "subtitle": "Projekat #4 • Adaptivno ponavljanje teških pojmova, bodovanje tačnosti i prioritizacija",
    "difficulty": "Projekat 4/10",
    "duration": "30 min",
    "analogy": {
      "icon": "🧠",
      "title": "Tvoj sopstveni Anki / Duolingo algoritam!",
      "text": "Obične kartice mešaju sve nasumično. Pametne kartice prate gde si pogrešio i automatski ti češće vraćaju reči sa nižom tačnošću dok ih ne savladaš!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #4 praviš aplikaciju <code>kartice_ucenje.py</code> inspirisanu naučnom tehnikom <strong>ponavljanja sa razmakom (Spaced Repetition)</strong>. Svaka kartica ima polja <code>pitanje</code>, <code>odgovor</code>, <code>tacno</code> i <code>netacno</code>.</p>\n          <h3>📁 Model kartice i prioritet</h3>\n          <pre><code>kartice = [\n    {\"pitanje\": \"list\", \"odgovor\": \"promenljiva lista\", \"tacno\": 4, \"netacno\": 0},\n    {\"pitanje\": \"tuple\", \"odgovor\": \"nepromenljiva torka\", \"tacno\": 1, \"netacno\": 3}\n]</code></pre>\n        ",
    "starterCode": "# PROJEKAT 04: Pametne Kartice za Učenje\nkartice = [\n    {\"pitanje\": \"list\", \"odgovor\": \"lista\", \"tacno\": 4, \"netacno\": 0},\n    {\"pitanje\": \"tuple\", \"odgovor\": \"torka\", \"tacno\": 1, \"netacno\": 3},\n    {\"pitanje\": \"set\", \"odgovor\": \"skup\", \"tacno\": 0, \"netacno\": 0}\n]\n\ndef uspesnost(k):\n    ukupno = k[\"tacno\"] + k[\"netacno\"]\n    return 0.0 if ukupno == 0 else round(k[\"tacno\"] / ukupno * 100, 1)\n\nfor k in kartice:\n    print(f\"{k['pitanje']:<8} -> uspešnost: {uspesnost(k)}%\")\n",
    "challenges": [
      {
        "title": "Korak 1: Provera odgovora otporna na razmake i velika slova",
        "instruction": "Napiši funkciju <code>proveri_odgovor(kartica, unos)</code> koja poredi <code>unos</code> sa <code>kartica['odgovor']</code> (ignorišući razmake na krajevima i velika/mala slova). Ako je tačno, uvećaj <code>kartica['tacno']</code> za 1 i vrati <code>True</code>; inače uvećaj <code>kartica['netacno']</code> za 1 i vrati <code>False</code>.",
        "starter": "def proveri_odgovor(kartica, unos):\n    # Normalizuj oba teksta, ažuriraj brojač i vrati True/False:\n    pass\n\nk = {'pitanje': 'set', 'odgovor': 'Skup', 'tacno': 0, 'netacno': 0}\nprint(proveri_odgovor(k, '  skup '), k)\n",
        "solution": "def proveri_odgovor(kartica, unos):\n    if unos.strip().lower() == kartica['odgovor'].strip().lower():\n        kartica['tacno'] += 1\n        return True\n    kartica['netacno'] += 1\n    return False\n\nk = {'pitanje': 'set', 'odgovor': 'Skup', 'tacno': 0, 'netacno': 0}\nprint(proveri_odgovor(k, '  skup '), k)",
        "hint": "Uporedi unos.strip().lower() == kartica['odgovor'].strip().lower()."
      },
      {
        "title": "Korak 2: Izdvajanje kartica za obnavljanje",
        "instruction": "Napiši funkciju <code>teske_kartice(kartice)</code> koja vraća listu <strong>pitanja</strong> svih kartica kod kojih je <code>netacno > tacno</code> (ili koje još nisu vežbane: <code>tacno == 0 and netacno == 0</code>).",
        "starter": "def teske_kartice(kartice):\n    # Vrati listu pitanja koje treba ponovo vežbati:\n    pass\n\ndb = [{'pitanje': 'A', 'tacno': 3, 'netacno': 0}, {'pitanje': 'B', 'tacno': 1, 'netacno': 2}, {'pitanje': 'C', 'tacno': 0, 'netacno': 0}]\nprint(teske_kartice(db))\n",
        "solution": "def teske_kartice(kartice):\n    return [k['pitanje'] for k in kartice if k['netacno'] > k['tacno'] or (k['tacno'] == 0 and k['netacno'] == 0)]\n\ndb = [{'pitanje': 'A', 'tacno': 3, 'netacno': 0}, {'pitanje': 'B', 'tacno': 1, 'netacno': 2}, {'pitanje': 'C', 'tacno': 0, 'netacno': 0}]\nprint(teske_kartice(db))",
        "hint": "Koristi List Comprehension sa uslovom k['netacno'] > k['tacno'] or (k['tacno'] == 0 and k['netacno'] == 0)."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Deljenje nulom kod nove kartice!)",
        "instruction": "Funkcija <code>procenat_znanja(k)</code> puca sa <code>ZeroDivisionError</code> kada kartica ima 0 tačnih i 0 netačnih pokušaja! Ispravi je da vrati <code>0.0</code> ako još nema pokušaja, inače procenat zaokružen na 1 decimalu.",
        "starter": "def procenat_znanja(k):\n    # BUG: puca kada su tacno=0 i netacno=0!\n    return round(k['tacno'] / (k['tacno'] + k['netacno']) * 100, 1)\n\nprint(procenat_znanja({'tacno': 0, 'netacno': 0}))\n",
        "solution": "def procenat_znanja(k):\n    ukupno = k['tacno'] + k['netacno']\n    if ukupno == 0:\n        return 0.0\n    return round(k['tacno'] / ukupno * 100, 1)\n\nprint(procenat_znanja({'tacno': 0, 'netacno': 0}))",
        "hint": "Prvo izračunaj ukupno = k['tacno'] + k['netacno'] i ako je 0 vrati 0.0."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Pametni redosled učenja",
        "instruction": "Napiši funkciju <code>sledeci_redosled(kartice)</code> koja sortira kartice tako da <strong>najteže (sa najviše netačnih, tj. najvećim <code>netacno - tacno</code>) idu PRVE</strong>, i vraća listu njihovih pitanja.",
        "starter": "def sledeci_redosled(kartice):\n    # Sortiraj opadajuće po (netacno - tacno) i vrati listu pitanja:\n    pass\n\ndb = [{'pitanje': 'Lako', 'tacno': 5, 'netacno': 0}, {'pitanje': 'Tesko', 'tacno': 0, 'netacno': 4}, {'pitanje': 'Srednje', 'tacno': 2, 'netacno': 2}]\nprint(sledeci_redosled(db))\n",
        "solution": "def sledeci_redosled(kartice):\n    sortirano = sorted(kartice, key=lambda k: k['netacno'] - k['tacno'], reverse=True)\n    return [k['pitanje'] for k in sortirano]\n\ndb = [{'pitanje': 'Lako', 'tacno': 5, 'netacno': 0}, {'pitanje': 'Tesko', 'tacno': 0, 'netacno': 4}, {'pitanje': 'Srednje', 'tacno': 2, 'netacno': 2}]\nprint(sledeci_redosled(db))",
        "hint": "Koristi sorted(kartice, key=lambda k: k['netacno'] - k['tacno'], reverse=True)."
      }
    ],
    "quiz": [
      {
        "question": "Zašto Spaced Repetition algoritam stavlja teže kartice na vrh reda?",
        "options": [
          "Zato što mozak najbrže uči kad obnavlja pojmove neposredno pre nego što ih zaboravi",
          "Da bi aplikacija duže trajala",
          "Zato što Python ne ume da meša liste",
          "Da bi lakše kartice bile obrisane"
        ],
        "correct": 0,
        "explanation": "Ciljano ponavljanje slabih tačaka drastično skraćuje vreme učenja."
      },
      {
        "question": "Šta radi izraz sorted(kartice, key=lambda k: k['netacno'] - k['tacno'], reverse=True)?",
        "options": [
          "Vraća novu listu gde su kartice sa najvećim viškom grešaka na početku",
          "Menja kartice i briše tačne",
          "Vraća samo jedan broj",
          "Sortira abecedno po pitanju"
        ],
        "correct": 0,
        "explanation": "Najveća razlika netacno - tacno znači najveći prioritet za ponavljanje."
      },
      {
        "question": "Zašto menjanje rečnika kartica['tacno'] += 1 unutar funkcije ostaje sačuvano spolja?",
        "options": [
          "Rečnici u Pythonu su promenljivi (mutable) i prosleđuju se po referenci",
          "Samo zato što funkcija ima return",
          "Zato što je to globalna konstanta",
          "Ne ostaje sačuvano"
        ],
        "correct": 0,
        "explanation": "Izmena polja mutabilnog rečnika direktno ažurira taj objekat u memoriji."
      },
      {
        "question": "Kako sprečavamo da slučajan razmak u odgovoru poništi znanje učenika?",
        "options": [
          "Sa .strip().lower() na oba teksta pre poređenja",
          "Zabranom razmaka na tastaturi",
          "Korišćenjem int()",
          "Nikako"
        ],
        "correct": 0,
        "explanation": "Normalizacija ulaza čini aplikaciju prijateljskom i pravednom."
      }
    ],
    "proTip": {
      "title": "Dodaj JSON čuvanje napretka",
      "content": "Na računaru snimi listu <code>kartice</code> u <code>moj_spil.json</code> posle svake sesije — tako tvoja aplikacija pamti tačno koje reči si naučio ove nedelje!"
    }
  },
  {
    "id": "gp-05-analizator-logova",
    "title": "5. Analizator Serverskih Logova (DevOps Alat)",
    "subtitle": "Projekat #5 • Parsiranje log linija, analiza HTTP grešaka i detekcija hakerskih IP adresa",
    "difficulty": "Projekat 5/10",
    "duration": "35 min",
    "analogy": {
      "icon": "🛡️",
      "title": "Radar sistem za bezbednost veb servera!",
      "text": "Svaki veb server dnevno zapiše hiljade redova u log fajl. Nijedan inženjer ih ne čita ručno — piše Python skriptu koja za 0.1 sekundu pronađe sve 500 greške i IP adrese koje pokušavaju da probiju lozinku!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #5 ulaziš u svet <strong>DevOps i Backend inženjerstva</strong>! Praviš <code>log_radar.py</code> koji analizira tekstualne logove formata <code>'IP|NIVO|RUTA|STATUS'</code> (npr. <code>'192.168.1.5|ERROR|/login|401'</code>).</p>\n          <h3>📁 Format realnog log zapisa</h3>\n          <pre><code>log = \"\"\"10.0.0.1|INFO|/home|200\n10.0.0.9|ERROR|/login|401\n10.0.0.9|ERROR|/login|401\n10.0.0.9|ERROR|/login|401\n10.0.0.2|ERROR|/pay|500\"\"\"</code></pre>\n        ",
    "starterCode": "# PROJEKAT 05: DevOps Analizator Serverskih Logova\nlog = \"\"\"10.0.0.1|INFO|/home|200\n10.0.0.9|ERROR|/login|401\n10.0.0.9|ERROR|/login|401\n10.0.0.2|ERROR|/pay|500\"\"\"\n\ngreske = [red for red in log.splitlines() if \"|ERROR|\" in red]\nprint(\"Ukupno ERROR zapisa:\", len(greske))\nfor g in greske:\n    print(\" ->\", g)\n",
    "challenges": [
      {
        "title": "Korak 1: Parser jedne log linije",
        "instruction": "Napiši funkciju <code>parsiraj_log_red(red)</code> koja liniju <code>'10.0.0.1|ERROR|/login|401'</code> razdvaja po <code>'|'</code> i vraća rečnik <code>{'ip': ..., 'nivo': ..., 'ruta': ..., 'status': int(...)}</code>.",
        "starter": "def parsiraj_log_red(red):\n    # Razdvoji po '|' i vrati strukturiran rečnik:\n    pass\n\nprint(parsiraj_log_red('10.0.0.9|ERROR|/login|401'))\n",
        "solution": "def parsiraj_log_red(red):\n    ip, nivo, ruta, status = red.strip().split('|')\n    return {'ip': ip, 'nivo': nivo, 'ruta': ruta, 'status': int(status)}\n\nprint(parsiraj_log_red('10.0.0.9|ERROR|/login|401'))",
        "hint": "Raspakuj 4 promenljive sa ip, nivo, ruta, status = red.strip().split('|') i pretvori status u int(status)."
      },
      {
        "title": "Korak 2: Brojanje zahteva po nivou (INFO / WARN / ERROR)",
        "instruction": "Napiši funkciju <code>statistika_nivoa(log_tekst)</code> koja prolazi kroz sve neprazne redove loga i vraća rečnik sa brojem pojavljivanja svakog nivoa (npr. <code>{'INFO': 2, 'ERROR': 3}</code>).",
        "starter": "def statistika_nivoa(log_tekst):\n    # Prebroj svaki nivo iz 2. kolone (indeks 1):\n    pass\n\nsample = '1.1.1.1|INFO|/|200\\n2.2.2.2|ERROR|/api|500\\n3.3.3.3|ERROR|/login|401'\nprint(statistika_nivoa(sample))\n",
        "solution": "def statistika_nivoa(log_tekst):\n    rez = {}\n    for red in log_tekst.splitlines():\n        if red.strip():\n            nivo = red.strip().split('|')[1]\n            rez[nivo] = rez.get(nivo, 0) + 1\n    return rez\n\nsample = '1.1.1.1|INFO|/|200\\n2.2.2.2|ERROR|/api|500\\n3.3.3.3|ERROR|/login|401'\nprint(statistika_nivoa(sample))",
        "hint": "Drugi element posle split('|') je nivo (indeks 1). Sabiraj ga sa rez[nivo] = rez.get(nivo, 0) + 1."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Poređenje statusa kao stringa vs broja!)",
        "instruction": "Kolega proverava <code>status >= '500'</code> kao string — u leksikografskom poređenju stringova <code>'99' >= '500'</code> je <code>True</code>! Ispravi funkciju <code>kriticne_rute(log_tekst)</code> da vrati sortiranu listu <strong>jedinstvenih ruta</strong> gde je celobrojni <code>status >= 500</code>.",
        "starter": "def kriticne_rute(log_tekst):\n    # BUG: poredi stringove i ostavlja duplikate!\n    rute = []\n    for red in log_tekst.splitlines():\n        if red.strip():\n            ip, nivo, ruta, status = red.split('|')\n            if status >= '500':\n                rute.append(ruta)\n    return rute\n\ns = '1.1.1.1|ERROR|/pay|500\\n2.2.2.2|ERROR|/pay|503\\n3.3.3.3|INFO|/ok|99'\nprint(kriticne_rute(s))\n",
        "solution": "def kriticne_rute(log_tekst):\n    rute = set()\n    for red in log_tekst.splitlines():\n        if red.strip():\n            ip, nivo, ruta, status = red.strip().split('|')\n            if int(status) >= 500:\n                rute.add(ruta)\n    return sorted(rute)\n\ns = '1.1.1.1|ERROR|/pay|500\\n2.2.2.2|ERROR|/pay|503\\n3.3.3.3|INFO|/ok|99'\nprint(kriticne_rute(s))",
        "hint": "Pretvori status u int(status) >= 500 i skupljaj rute u set() pa vrati sorted(rute)."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Detektor Brute-Force napada",
        "instruction": "Napiši funkciju <code>sumnjive_ip(log_tekst, prag=3)</code> koja broji koliko puta svaka IP adresa ima status <code>401</code> (neuspela prijava) i vraća <strong>sortiranu listu IP adresa</strong> koje imaju <code>>= prag</code> neuspelih pokušaja!",
        "starter": "def sumnjive_ip(log_tekst, prag=3):\n    # Prebroj 401 statuse po IP adresi i vrati sortirane IP >= prag:\n    pass\n\ns = '10.0.0.9|ERROR|/login|401\\n10.0.0.9|ERROR|/login|401\\n10.0.0.9|ERROR|/login|401\\n10.0.0.1|ERROR|/login|401'\nprint('Blokiraj IP:', sumnjive_ip(s, 3))\n",
        "solution": "def sumnjive_ip(log_tekst, prag=3):\n    brojac = {}\n    for red in log_tekst.splitlines():\n        if red.strip():\n            ip, nivo, ruta, status = red.strip().split('|')\n            if int(status) == 401:\n                brojac[ip] = brojac.get(ip, 0) + 1\n    return sorted([ip for ip, br in brojac.items() if br >= prag])\n\ns = '10.0.0.9|ERROR|/login|401\\n10.0.0.9|ERROR|/login|401\\n10.0.0.9|ERROR|/login|401\\n10.0.0.1|ERROR|/login|401'\nprint('Blokiraj IP:', sumnjive_ip(s, 3))",
        "hint": "Ako je int(status) == 401, uvećaj brojac[ip], pa na kraju vrati sorted([ip for ip, br in brojac.items() if br >= prag])."
      }
    ],
    "quiz": [
      {
        "question": "Zašto je poređenje stringova '99' >= '500' tačno u Pythonu?",
        "options": [
          "Jer se stringovi porede znak po znak po abecedi/ASCII kodu, a '9' je veće od '5'",
          "Zato što je 99 veće od 500",
          "To je greška u Pythonu",
          "Nikad nije tačno"
        ],
        "correct": 0,
        "explanation": "Numerička poređenja uvek zahtevaju int() ili float() konverziju!"
      },
      {
        "question": "Šta označava HTTP status 401 u serverskim logovima?",
        "options": [
          "Neovlašćen pristup / neuspela prijava (Unauthorized)",
          "Stranica je uspešno učitana",
          "Server je ugašen",
          "Slika je prevelika"
        ],
        "correct": 0,
        "explanation": "Veliki broj 401 grešaka sa iste IP adrese ukazuje na brute-force pokušaj provale lozinke."
      },
      {
        "question": "Šta označavaju HTTP statusi 500–599?",
        "options": [
          "Kritične greške na samom serveru (Server Error)",
          "Uspešne zahteve",
          "Preusmeravanja",
          "Prazne stranice"
        ],
        "correct": 0,
        "explanation": "5xx statusi znače da je backend kod pukao i zahteva hitnu reakciju inženjera."
      },
      {
        "question": "Zašto za prikupljanje kritičnih ruta koristimo set() umesto liste?",
        "options": [
          "Da se ista ruta ne bi ponavljala 500 puta u izveštaju",
          "Skup automatski popravlja server",
          "Lista ne prima kose crte",
          "Skup čuva lozinke"
        ],
        "correct": 0,
        "explanation": "set() garantuje jedinstvenost svake prijavljene rute."
      }
    ],
    "proTip": {
      "title": "Čitanje ogromnih logova na PC-u",
      "content": "Na pravom serveru log fajl može imati 2 GB! Umesto <code>f.read().splitlines()</code> (koje učitava ceo fajl u RAM), u VS Code-u piši <code>for red in f:</code> — Python čita liniju po liniju uz minimalnu potrošnju memorije!"
    }
  },
  {
    "id": "gp-06-inventar-prodavnice",
    "title": "6. Sistem za Inventar i Fiskalnu Kasu",
    "subtitle": "Projekat #6 • Lager sa barkodovima, skidanje stanja, količinski popust i alarm niskih zaliha",
    "difficulty": "Projekat 6/10",
    "duration": "35 min",
    "analogy": {
      "icon": "🏪",
      "title": "Mozak prave maloprodajne kase!",
      "text": "Kada kasir skenira artikal, program mora proveriti da li ga ima dovoljno na stanju, skinuti tačnu količinu sa lagera, obračunati popust i PDV, i upozoriti menadžera kada zalihe padnu ispod minimuma!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #6 praviš <code>kasa_inventar.py</code> — mini ERP sistem za prodavnicu. Koristiš ugnježdene rečnike (<code>barkod -> {naziv, cena, stanje}</code>), atomske provere stanja i formatirane račune.</p>\n          <h3>📁 Struktura lagera</h3>\n          <pre><code>lager = {\n    \"101\": {\"naziv\": \"Mleko\", \"cena\": 160, \"stanje\": 12},\n    \"102\": {\"naziv\": \"Kafa\", \"cena\": 350, \"stanje\": 3}\n}</code></pre>\n        ",
    "starterCode": "# PROJEKAT 06: Inventar i Fiskalna Kasa\nlager = {\n    \"101\": {\"naziv\": \"Mleko\", \"cena\": 160, \"stanje\": 12},\n    \"102\": {\"naziv\": \"Kafa\", \"cena\": 350, \"stanje\": 3},\n    \"103\": {\"naziv\": \"Hleb\", \"cena\": 90, \"stanje\": 2}\n}\n\nukupna_vrednost = sum(a[\"cena\"] * a[\"stanje\"] for a in lager.values())\nprint(f\"Ukupna vrednost magacina: {ukupna_vrednost} RSD\")\n",
    "challenges": [
      {
        "title": "Korak 1: Alarm za niske zalihe",
        "instruction": "Napiši funkciju <code>niske_zalihe(lager, prag=5)</code> koja vraća <strong>sortiranu listu naziva</strong> svih artikala čije je <code>stanje < prag</code>.",
        "starter": "def niske_zalihe(lager, prag=5):\n    # Vrati sortirane nazive artikala sa stanjem < prag:\n    pass\n\ndb = {'101': {'naziv': 'Mleko', 'stanje': 12}, '102': {'naziv': 'Kafa', 'stanje': 3}, '103': {'naziv': 'Hleb', 'stanje': 2}}\nprint('Naručiti hitno:', niske_zalihe(db, 5))\n",
        "solution": "def niske_zalihe(lager, prag=5):\n    return sorted([a['naziv'] for a in lager.values() if a['stanje'] < prag])\n\ndb = {'101': {'naziv': 'Mleko', 'stanje': 12}, '102': {'naziv': 'Kafa', 'stanje': 3}, '103': {'naziv': 'Hleb', 'stanje': 2}}\nprint('Naručiti hitno:', niske_zalihe(db, 5))",
        "hint": "Iteriraj kroz lager.values() i uzmi a['naziv'] ako je a['stanje'] < prag."
      },
      {
        "title": "Korak 2: Bezbedna prodaja i skidanje sa lagera",
        "instruction": "Napiši funkciju <code>prodaj(lager, barkod, komada)</code>. Ako barkod postoji, <code>komada > 0</code> i <code>stanje >= komada</code>, smanji <code>stanje</code> za <code>komada</code> i vrati ukupan iznos (<code>cena * komada</code>); inače ne menjaj lager i vrati <code>0</code>.",
        "starter": "def prodaj(lager, barkod, komada):\n    # Proveri postojanje barkoda, komada > 0 i dovoljno stanja:\n    pass\n\ndb = {'101': {'naziv': 'Mleko', 'cena': 160, 'stanje': 5}}\nprint('Naplaćeno:', prodaj(db, '101', 3), '| Novo stanje:', db['101']['stanje'])\n",
        "solution": "def prodaj(lager, barkod, komada):\n    if barkod not in lager or komada <= 0:\n        return 0\n    art = lager[barkod]\n    if art['stanje'] < komada:\n        return 0\n    art['stanje'] -= komada\n    return art['cena'] * komada\n\ndb = {'101': {'naziv': 'Mleko', 'cena': 160, 'stanje': 5}}\nprint('Naplaćeno:', prodaj(db, '101', 3), '| Novo stanje:', db['101']['stanje'])",
        "hint": "Proveri barkod in lager, komada > 0 i art['stanje'] >= komada pre oduzimanja."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Količinski popust se primenjuje na pogrešan način!)",
        "instruction": "Kolega je napisao <code>cena * 0.10</code> umesto <code>cena * 0.90</code>, pa na kupovinu preko 5000 RSD naplaćuje samo 10% računa umesto 10% popusta! Ispravi funkciju <code>obracun_sa_popustom(iznos)</code>: za <code>iznos >= 5000</code> daj 10% popusta (zaokruženo na 2 decimale), inače vrati pun iznos.",
        "starter": "def obracun_sa_popustom(iznos):\n    # BUG: vraća 10% umesto 90% iznosa!\n    if iznos >= 5000:\n        return round(iznos * 0.10, 2)\n    return round(iznos, 2)\n\nprint('Za 6000 RSD ->', obracun_sa_popustom(6000))\n",
        "solution": "def obracun_sa_popustom(iznos):\n    if iznos >= 5000:\n        return round(iznos * 0.90, 2)\n    return round(iznos, 2)\n\nprint('Za 6000 RSD ->', obracun_sa_popustom(6000))",
        "hint": "10% popusta znači da kupac plaća 90% cene: iznos * 0.90."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Obračun cele korpe",
        "instruction": "Napiši funkciju <code>naplati_korpu(lager, korpa)</code> gde je <code>korpa</code> lista torki <code>[(barkod, komada), ...]</code>. Koristi logiku provere stanja za svaku stavku (preskoči nedostupne) i vrati <strong>ukupan naplaćeni iznos</strong> (uz 10% popusta ako je zbir <code>>= 5000</code>).",
        "starter": "def naplati_korpu(lager, korpa):\n    # Skini svaku validnu stavku sa lagera, saberi i primeni popust za >= 5000:\n    pass\n\ndb = {'101': {'naziv': 'Kafa', 'cena': 1000, 'stanje': 10}, '102': {'naziv': 'Čaj', 'cena': 500, 'stanje': 2}}\nprint('Račun:', naplati_korpu(db, [('101', 5), ('102', 1)]))\n",
        "solution": "def naplati_korpu(lager, korpa):\n    ukupno = 0\n    for barkod, komada in korpa:\n        if barkod in lager and komada > 0 and lager[barkod]['stanje'] >= komada:\n            lager[barkod]['stanje'] -= komada\n            ukupno += lager[barkod]['cena'] * komada\n    if ukupno >= 5000:\n        ukupno = round(ukupno * 0.90, 2)\n    return ukupno\n\ndb = {'101': {'naziv': 'Kafa', 'cena': 1000, 'stanje': 10}, '102': {'naziv': 'Čaj', 'cena': 500, 'stanje': 2}}\nprint('Račun:', naplati_korpu(db, [('101', 5), ('102', 1)]))",
        "hint": "Raspakuj for barkod, komada in korpa:, skini sa lagera i na kraju proveri if ukupno >= 5000."
      }
    ],
    "quiz": [
      {
        "question": "Zašto je barkod idealan ključ u rečniku lagera umesto imena proizvoda?",
        "options": [
          "Barkod je jedinstven za svaki artikal i omogućava O(1) pretragu",
          "Imena ne mogu biti ključevi",
          "Barkod je uvek manji od 10",
          "Rečnik ne prima slova"
        ],
        "correct": 0,
        "explanation": "Jedinstveni ID/barkod sprečava zabunu između sličnih naziva proizvoda."
      },
      {
        "question": "Šta vraća lager.values()?",
        "options": [
          "Sve unutrašnje rečnike artikala bez ključeva-barkodova",
          "Samo barkodove",
          "Samo cene",
          "Broj artikala"
        ],
        "correct": 0,
        "explanation": ".values() daje direktan pristup podacima svakog artikla."
      },
      {
        "question": "Zašto u prodaj() proveravamo komada <= 0?",
        "options": [
          "Da negativna količina ne bi veštački POVEĆALA stanje i dala negativan račun",
          "Python ne ume da množi sa nulom",
          "Da usporimo kasu",
          "Nije potrebno"
        ],
        "correct": 0,
        "explanation": "Oduzimanje negativnog broja (- -5) bi dodalo robu na lager!"
      },
      {
        "question": "Koliko iznosi račun od 6000 RSD sa 10% popusta?",
        "options": [
          "5400",
          "600",
          "5990",
          "6600"
        ],
        "correct": 0,
        "explanation": "6000 * 0.90 = 5400 RSD."
      }
    ],
    "proTip": {
      "title": "Fiskalni račun u .txt fajlu",
      "content": "Na računaru dodaj štampanje računa sa <code>f'{naziv:<15} x{kom:>2} {iznos:>8.2f}'</code> u fajl <code>racun_001.txt</code>!"
    }
  },
  {
    "id": "gp-07-vesala-turnir",
    "title": "7. Takmičarska Igra Vešala sa Rang-Listom",
    "subtitle": "Projekat #7 • Maskiranje tajne reči, skup pogođenih slova, provera pobede i bodovanje",
    "difficulty": "Projekat 7/10",
    "duration": "35 min",
    "analogy": {
      "icon": "🎮",
      "title": "Čista arhitektura igre: razdvajanje logike od ekrana!",
      "text": "Profesionalni gejm developeri nikada ne mešaju pravila igre sa print() komandama. Kada su funkcije za maskiranje reči, proveru pobede i bodovanje odvojene, igru možeš testirati automatski i kasnije lako prebaciti u grafički prozor!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #7 praviš <strong>čistu, testabilnu logiku igre Vešala</strong> (<code>vesala_pro.py</code>). Koristiš <code>set</code> za pogođena slova, <code>all()</code> za proveru pobede i <code>sorted()</code> za Top-5 rang-listu.</p>\n          <h3>📁 Kako radi maskiranje tajne reči</h3>\n          <pre><code>def prikazi_masku(tajna, pogodjena):\n    return \" \".join(s if s in pogodjena else \"_\" for s in tajna)\n\nprint(prikazi_masku(\"PYTHON\", {\"P\", \"O\"}))  # \"P _ _ _ O _\"</code></pre>\n        ",
    "starterCode": "# PROJEKAT 07: Takmičarska Igra Vešala (Jezgro logike)\ntajna = \"ALGORITAM\"\npogodjena = {\"A\", \"R\", \"M\"}\n\nmaska = \" \".join(s if s in pogodjena else \"_\" for s in tajna)\nprint(\"Tajna reč:\", maska)\nprint(\"Pobeda?\", all(s in pogodjena for s in tajna))\n",
    "challenges": [
      {
        "title": "Korak 1: Prikaz maskirane reči",
        "instruction": "Napiši funkciju <code>prikazi_masku(tajna, pogodjena)</code> gde je <code>pogodjena</code> skup slova (malim ili velikim — normalizuj sve u VELIKA slova!). Vrati string sa razmakom između znakova, npr. za <code>'PYTHON'</code> i <code>{'p', 'o'}</code> vrati <code>'P _ _ _ O _'</code>.",
        "starter": "def prikazi_masku(tajna, pogodjena):\n    # Normalizuj u velika slova i spoji razmakom:\n    pass\n\nprint(prikazi_masku('python', {'p', 'o'}))\n",
        "solution": "def prikazi_masku(tajna, pogodjena):\n    skup = {s.upper() for s in pogodjena}\n    return ' '.join(s if s in skup else '_' for s in tajna.upper())\n\nprint(prikazi_masku('python', {'p', 'o'}))",
        "hint": "Napravi skup = {s.upper() for s in pogodjena}, pa ' '.join(s if s in skup else '_' for s in tajna.upper())."
      },
      {
        "title": "Korak 2: Provera pobede pomoću all()",
        "instruction": "Napiši funkciju <code>je_pobeda(tajna, pogodjena)</code> koja vraća <code>True</code> ako su sva slova tajne reči (nezavisno od velikih/malih slova) sadržana u skupu <code>pogodjena</code>.",
        "starter": "def je_pobeda(tajna, pogodjena):\n    # Koristi all(...):\n    pass\n\nprint(je_pobeda('KOD', {'k', 'o', 'd', 'x'}))\nprint(je_pobeda('KOD', {'k', 'o'}))\n",
        "solution": "def je_pobeda(tajna, pogodjena):\n    skup = {s.upper() for s in pogodjena}\n    return all(s in skup for s in tajna.upper())\n\nprint(je_pobeda('KOD', {'k', 'o', 'd', 'x'}))\nprint(je_pobeda('KOD', {'k', 'o'}))",
        "hint": "Upotrebi return all(s in skup for s in tajna.upper())."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Ponovljeno pogrešno slovo skida život duplo!)",
        "instruction": "Ako igrač dva puta ukuca isto pogrešno slovo <code>'Z'</code>, loš kod mu dva puta skida život! Ispravi funkciju <code>odigraj_potez(tajna, slovo, isprobana, zivoti)</code>: ako je slovo već u <code>isprobana</code>, vrati <code>zivoti</code> nepromenjeno; inače ga dodaj u <code>isprobana</code> i skini 1 život SAMO ako slovo nije u <code>tajna</code>.",
        "starter": "def odigraj_potez(tajna, slovo, isprobana, zivoti):\n    # BUG: ne proverava da li je slovo već isprobano!\n    s = slovo.upper()\n    isprobana.add(s)\n    if s not in tajna.upper():\n        zivoti -= 1\n    return zivoti\n\nisp = set()\nz = odigraj_potez('KOD', 'Z', isp, 6)\nz = odigraj_potez('KOD', 'Z', isp, z)\nprint('Životi (treba 5):', z)\n",
        "solution": "def odigraj_potez(tajna, slovo, isprobana, zivoti):\n    s = slovo.upper()\n    if s in isprobana:\n        return zivoti\n    isprobana.add(s)\n    if s not in tajna.upper():\n        zivoti -= 1\n    return zivoti\n\nisp = set()\nz = odigraj_potez('KOD', 'Z', isp, 6)\nz = odigraj_potez('KOD', 'Z', isp, z)\nprint('Životi (treba 5):', z)",
        "hint": "Dodaj if s in isprobana: return zivoti pre dodavanja u skup."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Ažuriranje Top-5 rang-liste",
        "instruction": "Napiši funkciju <code>dodaj_na_rang(lista, ime, poeni, limit=5)</code> koja dodaje novi rezultat <code>{'ime': ime, 'poeni': poeni}</code>, sortira listu opadajuće po poenima i vraća samo najboljih <code>limit</code> rezultata.",
        "starter": "def dodaj_na_rang(lista, ime, poeni, limit=5):\n    # Dodaj rezultat, sortiraj opadajuće i odseci [:limit]:\n    pass\n\nprint(dodaj_na_rang([{'ime': 'Ana', 'poeni': 80}, {'ime': 'Vuk', 'poeni': 120}], 'Tara', 100, 2))\n",
        "solution": "def dodaj_na_rang(lista, ime, poeni, limit=5):\n    nova = lista + [{'ime': ime, 'poeni': poeni}]\n    sortirana = sorted(nova, key=lambda x: x['poeni'], reverse=True)\n    return sortirana[:limit]\n\nprint(dodaj_na_rang([{'ime': 'Ana', 'poeni': 80}, {'ime': 'Vuk', 'poeni': 120}], 'Tara', 100, 2))",
        "hint": "Napravi novu listu, sortiraj sa key=lambda x: x['poeni'], reverse=True i vrati [:limit]."
      }
    ],
    "quiz": [
      {
        "question": "Zašto u igri Vešala odvajamo logičke funkcije od input()/print() petlje?",
        "options": [
          "Jer se čiste funkcije mogu automatski testirati i ponovo koristiti u veb ili desktop aplikaciji",
          "Zato što print() ne radi u petlji",
          "Da bi kod imao više linija",
          "Nema razloga"
        ],
        "correct": 0,
        "explanation": "Odvajanje poslovne logike od UI-ja je temelj čiste softverske arhitekture."
      },
      {
        "question": "Zašto je set() bolji od liste za čuvanje isprobanih slova?",
        "options": [
          "Automatski sprečava duplikate i proverava pripadnost u O(1)",
          "Pamti redosled abecede",
          "Može čuvati samo samoglasnike",
          "Zauzima 0 bajtova"
        ],
        "correct": 0,
        "explanation": "Skup prirodno modeluje skup jedinstvenih isprobanih slova."
      },
      {
        "question": "Šta vraća izraz all(s in {'K','O','D'} for s in 'KOD')?",
        "options": [
          "True",
          "False",
          "'KOD'",
          "3"
        ],
        "correct": 0,
        "explanation": "Svako slovo reči 'KOD' postoji u skupu, pa all() vraća True."
      },
      {
        "question": "Zašto u dodaj_na_rang() pravimo novu listu umesto da menjamo staru direktno?",
        "options": [
          "Čuva originalnu listu bez skrivenih bočnih efekata (čista funkcija)",
          "Python ne dozvoljava .append()",
          "Da bi lista bila prazna",
          "Nema razlike"
        ],
        "correct": 0,
        "explanation": "Čiste funkcije koje ne mutiraju ulaze neočekivano lakše se debaguju."
      }
    ],
    "proTip": {
      "title": "ASCII crtež vešala na računaru",
      "content": "U VS Code-u dodaj listu od 7 ASCII crteža (od praznih vešala do kraja igre) i prikazuj <code>CRTEZI[6 - zivoti]</code> posle svakog poteza!"
    }
  },
  {
    "id": "gp-08-kripto-beleznica",
    "title": "8. Šifrovana Beležnica (Viženerova Šifra)",
    "subtitle": "Projekat #8 • Klasična kriptografija sa ključem, dešifrovanje, tagovi (#posao) i trezor",
    "difficulty": "Projekat 8/10",
    "duration": "40 min",
    "analogy": {
      "icon": "📜",
      "title": "Šifra koja je vekovima smatrana neprobojnom!",
      "text": "Dok Cezarova šifra svako slovo pomera za isti broj, Viženerova (Vigenère) šifra koristi tajnu reč-ključ pa se svako slovo pomera za drugačiji korak — i samo onaj ko zna ključ može da otključa beležnicu!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #8 praviš <strong>šifrovanu ličnu beležnicu</strong> (<code>kripto_beleske.py</code>). Radiš sa modulo aritmetikom nad abecedom (<code>(idx + pomeraj) % 26</code>), inverznim dešifrovanjem i pretragom beleški po haštagovima (<code>#posao</code>, <code>#ideja</code>).</p>\n          <h3>📁 Kako radi Viženerova šifra nad A–Z</h3>\n          <pre><code># Slovo 'A' je 0, 'B' je 1, ..., 'Z' je 25.\n# Za tekst \"KOD\" i ključ \"BC\":\n# K(10) + B(1) = L(11)\n# O(14) + C(2) = Q(16)\n# D(3)  + B(1) = E(4)   -> ključ se ponavlja ciklično pomoću % len(kljuc)!</code></pre>\n        ",
    "starterCode": "# PROJEKAT 08: Šifrovana Beležnica (Viženerova šifra za velika slova A-Z)\ndef vizener_sifruj(tekst, kljuc):\n    rez = []\n    k = kljuc.upper()\n    ki = 0\n    for z in tekst.upper():\n        if 'A' <= z <= 'Z':\n            pomeraj = ord(k[ki % len(k)]) - ord('A')\n            novo = chr((ord(z) - ord('A') + pomeraj) % 26 + ord('A'))\n            rez.append(novo)\n            ki += 1\n        else:\n            rez.append(z)\n    return ''.join(rez)\n\ntajna = vizener_sifruj(\"PYTHON KOD!\", \"TAJNA\")\nprint(\"Šifrovano:\", tajna)\n",
    "challenges": [
      {
        "title": "Korak 1: Viženerovo šifrovanje (A–Z)",
        "instruction": "Napiši funkciju <code>vizener_sifruj(tekst, kljuc)</code> za englesku abecedu <code>A–Z</code> (velikim slovima). Razmake i znakove interpunkcije ostavi netaknutim (i ne pomeraj indeks ključa za njih!).",
        "starter": "def vizener_sifruj(tekst, kljuc):\n    # Šifruj slova A-Z pomoću (ord(z)-65 + pomeraj) % 26 + 65:\n    pass\n\nprint(vizener_sifruj('KOD', 'BC'))\n",
        "solution": "def vizener_sifruj(tekst, kljuc):\n    rez = []\n    k = kljuc.upper()\n    ki = 0\n    for z in tekst.upper():\n        if 'A' <= z <= 'Z':\n            pomeraj = ord(k[ki % len(k)]) - 65\n            rez.append(chr((ord(z) - 65 + pomeraj) % 26 + 65))\n            ki += 1\n        else:\n            rez.append(z)\n    return ''.join(rez)\n\nprint(vizener_sifruj('KOD', 'BC'))",
        "hint": "ord('A') je 65. Pomeraj je ord(k[ki % len(k)]) - 65, a novo slovo chr((ord(z) - 65 + pomeraj) % 26 + 65)."
      },
      {
        "title": "Korak 2: Viženerovo dešifrovanje",
        "instruction": "Napiši inverznu funkciju <code>vizener_desifruj(sifrat, kljuc)</code> koja oduzima pomeraj (<code>(ord(z) - 65 - pomeraj) % 26 + 65</code>) i vraća originalni tekst.",
        "starter": "def vizener_desifruj(sifrat, kljuc):\n    # Dešifruj oduzimanjem pomeraja modulo 26:\n    pass\n\nprint(vizener_desifruj('LQE', 'BC'))\n",
        "solution": "def vizener_desifruj(sifrat, kljuc):\n    rez = []\n    k = kljuc.upper()\n    ki = 0\n    for z in sifrat.upper():\n        if 'A' <= z <= 'Z':\n            pomeraj = ord(k[ki % len(k)]) - 65\n            rez.append(chr((ord(z) - 65 - pomeraj) % 26 + 65))\n            ki += 1\n        else:\n            rez.append(z)\n    return ''.join(rez)\n\nprint(vizener_desifruj('LQE', 'BC'))",
        "hint": "U Pythonu (-1) % 26 daje tačno 25, pa formula (ord(z) - 65 - pomeraj) % 26 + 65 radi besprekorno!"
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Izvlačenje haštagova hvata i sam znak #!)",
        "instruction": "Funkcija <code>izvuci_tagove(beleska)</code> treba da vrati sortiranu listu jedinstvenih tagova malim slovima (npr. iz <code>'Završi #Python #kod #python!'</code> -> <code>['#kod', '#python']</code>), ali kolega nije skinuo interpunkciju (<code>!</code>, <code>.</code>, <code>,</code>) na kraju taga niti uklonio duplikate! Popravi je.",
        "starter": "def izvuci_tagove(beleska):\n    # BUG: ostavlja interpunkciju i duplikate!\n    return [r for r in beleska.split() if r.startswith('#')]\n\nprint(izvuci_tagove('Završi #Python, #kod i #python!'))\n",
        "solution": "def izvuci_tagove(beleska):\n    tagovi = set()\n    for r in beleska.lower().split():\n        if r.startswith('#'):\n            cist = r.rstrip('.,!?;:')\n            if len(cist) > 1:\n                tagovi.add(cist)\n    return sorted(tagovi)\n\nprint(izvuci_tagove('Završi #Python, #kod i #python!'))",
        "hint": "Skini interpunkciju sa r.rstrip('.,!?;:'), dodaj u set() ako je len(cist) > 1 i vrati sorted(tagovi)."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Filter beleški po tagu",
        "instruction": "Napiši funkciju <code>beleske_po_tagu(beleske, tag)</code> koja prima listu beleški (stringova) i traženi <code>tag</code> (npr. <code>'#ideja'</code> ili <code>'ideja'</code> — dodaj <code>#</code> ako nedostaje!), i vraća listu beleški koje sadrže taj tag (ne zavisno od velikih/malih slova).",
        "starter": "def beleske_po_tagu(beleske, tag):\n    # Normalizuj tag (dodaj '#' ako nema) i filtriraj beleške:\n    pass\n\nb = ['Napravi sajt #Ideja!', 'Kupi hleb #kupovina', 'Novi kurs #ideja']\nprint(beleske_po_tagu(b, 'ideja'))\n",
        "solution": "def beleske_po_tagu(beleske, tag):\n    t = tag.strip().lower()\n    if not t.startswith('#'):\n        t = '#' + t\n    rez = []\n    for bel in beleske:\n        reci = {r.rstrip('.,!?;:') for r in bel.lower().split()}\n        if t in reci:\n            rez.append(bel)\n    return rez\n\nb = ['Napravi sajt #Ideja!', 'Kupi hleb #kupovina', 'Novi kurs #ideja']\nprint(beleske_po_tagu(b, 'ideja'))",
        "hint": "Normalizuj t tako da počinje sa '#', očisti reči svake beleške sa .rstrip('.,!?;:') i proveri if t in reci."
      }
    ],
    "quiz": [
      {
        "question": "Čemu služi operator % 26 u Viženerovoj šifri?",
        "options": [
          "Omotava abecedu ukrug tako da posle 'Z' ponovo ide 'A'",
          "Briše svako 26. slovo",
          "Ograničava tekst na 26 slova",
          "Pretvara slova u brojeve"
        ],
        "correct": 0,
        "explanation": "Ciklična modulo aritmetika osigurava da svako slovo ostane unutar A–Z."
      },
      {
        "question": "Šta daje izraz (-3) % 26 u Pythonu?",
        "options": [
          "23",
          "-3",
          "Grešku",
          "3"
        ],
        "correct": 0,
        "explanation": "U Pythonu modulo negativnog broja uvek vraća pozitivan ostatak [0..25], što je idealno za dešifrovanje!"
      },
      {
        "question": "Zašto je Viženerova šifra jača od Cezarove?",
        "options": [
          "Isto slovo u tekstu šifruje se različito u zavisnosti od pozicije ključa",
          "Koristi samo brojeve",
          "Nema ključ",
          "Kraća je"
        ],
        "correct": 0,
        "explanation": "Višeslovni ključ razbija jednostavnu analizu učestalosti pojedinačnih slova."
      },
      {
        "question": "Šta radi metoda r.rstrip('.,!?')?",
        "options": [
          "Uklanja navedene znakove interpunkcije samo sa DESNOG kraja stringa",
          "Briše sve tačke u sredini reči",
          "Okreće string",
          "Briše ceo string"
        ],
        "correct": 0,
        "explanation": "rstrip uklanja zadate karaktere isključivo sa kraja (desne strane) reči."
      }
    ],
    "proTip": {
      "title": "Moderna enkripcija na PC-u",
      "content": "Viženerova šifra je sjajna za učenje algoritama. Za stvarnu zaštitu fajlova u produkciji na PC-u koristi biblioteku <code>cryptography</code> (<code>pip install cryptography</code> -> <code>Fernet</code> AES-128)!"
    }
  },
  {
    "id": "gp-09-kanban-tabla",
    "title": "9. Mini-Trello / Kanban Menadžer Projekata",
    "subtitle": "Projekat #9 • Kolone toka rada, pravila prelaza statusa, prioriteti i opterećenje tima",
    "difficulty": "Projekat 9/10",
    "duration": "40 min",
    "analogy": {
      "icon": "📋",
      "title": "Prava tabla koju koriste softverski timovi svakog jutra!",
      "text": "Svaki ozbiljan IT tim (kao naš!) organizuje zadatke kroz kolone: TODO -> U_TOKU -> GOTOVO. Ovde gradiš logiku Kanban table sa pravilima toka, prioritetima i izveštajem ko je najviše opterećen!"
    },
    "content": "\n          <p class=\"lead\">U Projektu #9 praviš <code>kanban_pro.py</code> — mini klon Trello/Jira table. Svaki zadatak je rečnik sa poljima <code>id</code>, <code>naslov</code>, <code>status</code> (<code>'TODO'</code>, <code>'U_TOKU'</code>, <code>'GOTOVO'</code>), <code>prioritet</code> (1=najviši, 3=najniži) i <code>vlasnik</code>.</p>\n          <h3>📁 Pravilo mašine stanja (State Machine)</h3>\n          <pre><code>DOZVOLJENI_PRELAZI = {\n    \"TODO\": {\"U_TOKU\"},\n    \"U_TOKU\": {\"TODO\", \"GOTOVO\"},\n    \"GOTOVO\": {\"U_TOKU\"}\n}</code></pre>\n        ",
    "starterCode": "# PROJEKAT 09: Mini-Trello Kanban Tabla\nzadaci = [\n    {\"id\": 1, \"naslov\": \"Dizajn baze\", \"status\": \"GOTOVO\", \"prioritet\": 1, \"vlasnik\": \"Vuk\"},\n    {\"id\": 2, \"naslov\": \"Svetla tema\", \"status\": \"U_TOKU\", \"prioritet\": 2, \"vlasnik\": \"Tara\"},\n    {\"id\": 3, \"naslov\": \"Unit testovi\", \"status\": \"TODO\", \"prioritet\": 1, \"vlasnik\": \"Stefan\"}\n]\n\nfor status in [\"TODO\", \"U_TOKU\", \"GOTOVO\"]:\n    stavke = [z[\"naslov\"] for z in zadaci if z[\"status\"] == status]\n    print(f\"[{status}] -> {stavke}\")\n",
    "challenges": [
      {
        "title": "Korak 1: Prikaz kolone sortiran po prioritetu",
        "instruction": "Napiši funkciju <code>zadaci_u_koloni(zadaci, status)</code> koja izdvaja sve zadatke zadatog statusa, sortira ih <strong>rastuće po prioritetu</strong> (1 ide pre 2 i 3) i vraća listu njihovih <strong>naslova</strong>.",
        "starter": "def zadaci_u_koloni(zadaci, status):\n    # Filtriraj po statusu, sortiraj po prioritetu i vrati naslove:\n    pass\n\nz = [{'naslov': 'B', 'status': 'TODO', 'prioritet': 3}, {'naslov': 'A', 'status': 'TODO', 'prioritet': 1}]\nprint(zadaci_u_koloni(z, 'TODO'))\n",
        "solution": "def zadaci_u_koloni(zadaci, status):\n    filt = [z for z in zadaci if z['status'] == status]\n    sort = sorted(filt, key=lambda z: z['prioritet'])\n    return [z['naslov'] for z in sort]\n\nz = [{'naslov': 'B', 'status': 'TODO', 'prioritet': 3}, {'naslov': 'A', 'status': 'TODO', 'prioritet': 1}]\nprint(zadaci_u_koloni(z, 'TODO'))",
        "hint": "Filtriraj po z['status'] == status, sortiraj sa key=lambda z: z['prioritet'] i izvuci z['naslov']."
      },
      {
        "title": "Korak 2: Validacija prelaza (State Machine)",
        "instruction": "Napiši funkciju <code>pomeri_zadatak(zadaci, zid, novi_status)</code> koja pronalazi zadatak po <code>id == zid</code> i menja mu status SAMO ako je prelaz dozvoljen pravilom: <code>TODO -> {U_TOKU}</code>, <code>U_TOKU -> {TODO, GOTOVO}</code>, <code>GOTOVO -> {U_TOKU}</code> (ne može direktno iz <code>TODO</code> u <code>GOTOVO</code>!). Vrati <code>True</code> ako je uspeo, inače <code>False</code>.",
        "starter": "def pomeri_zadatak(zadaci, zid, novi_status):\n    dozvoljeno = {'TODO': {'U_TOKU'}, 'U_TOKU': {'TODO', 'GOTOVO'}, 'GOTOVO': {'U_TOKU'}}\n    # Pronađi zadatak po id i proveri da li je novi_status u dozvoljeno[stari]:\n    pass\n\nz = [{'id': 1, 'status': 'TODO'}]\nprint('TODO->GOTOVO (False):', pomeri_zadatak(z, 1, 'GOTOVO'))\nprint('TODO->U_TOKU (True):', pomeri_zadatak(z, 1, 'U_TOKU'))\n",
        "solution": "def pomeri_zadatak(zadaci, zid, novi_status):\n    dozvoljeno = {'TODO': {'U_TOKU'}, 'U_TOKU': {'TODO', 'GOTOVO'}, 'GOTOVO': {'U_TOKU'}}\n    for z in zadaci:\n        if z['id'] == zid:\n            if novi_status in dozvoljeno.get(z['status'], set()):\n                z['status'] = novi_status\n                return True\n            return False\n    return False\n\nz = [{'id': 1, 'status': 'TODO'}]\nprint('TODO->GOTOVO (False):', pomeri_zadatak(z, 1, 'GOTOVO'))\nprint('TODO->U_TOKU (True):', pomeri_zadatak(z, 1, 'U_TOKU'))",
        "hint": "Proveri if novi_status in dozvoljeno.get(z['status'], set()): pa ažuriraj z['status'] = novi_status."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Opterećenje tima broji i završene zadatke!)",
        "instruction": "Menadžer želi da vidi koliko <strong>aktivnih</strong> zadataka (status NIJE <code>'GOTOVO'</code>) ima svaki član tima, ali kolega broji sve zadatke uključujući završene! Popravi funkciju <code>aktivno_opterecenje(zadaci)</code>.",
        "starter": "def aktivno_opterecenje(zadaci):\n    # BUG: broji i GOTOVO zadatke!\n    rez = {}\n    for z in zadaci:\n        v = z['vlasnik']\n        rez[v] = rez.get(v, 0) + 1\n    return rez\n\ndb = [{'vlasnik': 'Ana', 'status': 'GOTOVO'}, {'vlasnik': 'Ana', 'status': 'U_TOKU'}, {'vlasnik': 'Vuk', 'status': 'TODO'}]\nprint(aktivno_opterecenje(db))\n",
        "solution": "def aktivno_opterecenje(zadaci):\n    rez = {}\n    for z in zadaci:\n        if z['status'] != 'GOTOVO':\n            v = z['vlasnik']\n            rez[v] = rez.get(v, 0) + 1\n    return rez\n\ndb = [{'vlasnik': 'Ana', 'status': 'GOTOVO'}, {'vlasnik': 'Ana', 'status': 'U_TOKU'}, {'vlasnik': 'Vuk', 'status': 'TODO'}]\nprint(aktivno_opterecenje(db))",
        "hint": "Dodaj uslov if z['status'] != 'GOTOVO': pre uvećavanja brojača."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: Procenat završenosti sprinta",
        "instruction": "Napiši funkciju <code>napredak_sprinta(zadaci)</code> koja vraća rečnik <code>{'ukupno': n, 'gotovo': g, 'procenat': p}</code> (gde je <code>p</code> zaokružen na 1 decimalu; ako nema zadataka vrati <code>{'ukupno': 0, 'gotovo': 0, 'procenat': 0.0}</code>).",
        "starter": "def napredak_sprinta(zadaci):\n    # Izračunaj ukupno, broj GOTOVO i procenat:\n    pass\n\ndb = [{'status': 'GOTOVO'}, {'status': 'GOTOVO'}, {'status': 'U_TOKU'}, {'status': 'TODO'}]\nprint(napredak_sprinta(db))\n",
        "solution": "def napredak_sprinta(zadaci):\n    ukupno = len(zadaci)\n    if ukupno == 0:\n        return {'ukupno': 0, 'gotovo': 0, 'procenat': 0.0}\n    gotovo = sum(1 for z in zadaci if z['status'] == 'GOTOVO')\n    return {'ukupno': ukupno, 'gotovo': gotovo, 'procenat': round(gotovo / ukupno * 100, 1)}\n\ndb = [{'status': 'GOTOVO'}, {'status': 'GOTOVO'}, {'status': 'U_TOKU'}, {'status': 'TODO'}]\nprint(napredak_sprinta(db))",
        "hint": "Izbroj gotovo sa sum(1 for z in zadaci if z['status'] == 'GOTOVO') i podeli sa ukupno."
      }
    ],
    "quiz": [
      {
        "question": "Šta je State Machine (mašina stanja) u softverskom inženjerstvu?",
        "options": [
          "Skup jasnih pravila koji definiše iz kog statusa se sme preći u koji status",
          "Vrsta računara",
          "Biblioteka za crtanje",
          "Format tekstualnog fajla"
        ],
        "correct": 0,
        "explanation": "Mašina stanja sprečava nelegalne prelaze (npr. zadatak koji nije ni započet ne može preskočiti u GOTOVO)."
      },
      {
        "question": "Šta računa izraz sum(1 for z in zadaci if z['status'] == 'GOTOVO')?",
        "options": [
          "Tačan broj završenih zadataka bez pravljenja pomoćne liste",
          "Zbir ID brojeva",
          "Procenat završenosti",
          "Grešku TypeError"
        ],
        "correct": 0,
        "explanation": "Generator sa sum(1 for ... if ...) je Pythoničan i memorijski najefikasniji način brojanja."
      },
      {
        "question": "Zašto u dozvoljeno koristimo set {'TODO', 'GOTOVO'} kao vrednost u rečniku?",
        "options": [
          "Brza O(1) provera pripadnosti i garantovana jedinstvenost statusa",
          "Set automatski šalje mejl timu",
          "Lista ne može u rečnik",
          "Nema razlike"
        ],
        "correct": 0,
        "explanation": "Skupovi jasno izražavaju skup dozvoljenih sledećih stanja."
      },
      {
        "question": "Zašto u napredak_sprinta() proveravamo if ukupno == 0?",
        "options": [
          "Sprečavamo ZeroDivisionError za prazan sprint",
          "Da sakrijemo nezavršene zadatke",
          "Zato što round() ne radi za nulu",
          "Nije potrebno"
        ],
        "correct": 0,
        "explanation": "Svako deljenje mora biti zaštićeno od prazne kolekcije."
      }
    ],
    "proTip": {
      "title": "Nadogradnja na PC-u: boje u terminalu",
      "content": "Na svom računaru u VS Code-u instaliraj <code>pip install rich</code> i prikaži ove 3 Kanban kolone kao prave šarene tabele u terminalu!"
    }
  },
  {
    "id": "gp-10-turnir-liga",
    "title": "10. Simulator Sportske Lige i Turnira (JSON)",
    "subtitle": "Projekat #10 (Kapitalac) • Round-Robin parovi, bodovanje 3/1/0, višeslojno sortiranje i JSON eksport",
    "difficulty": "Projekat 10/10",
    "duration": "45 min",
    "analogy": {
      "icon": "🏆",
      "title": "Kompletan sportski sistem spreman za Ligu Šampiona!",
      "text": "U velikom finalu Vođenih Projekata spajaš algoritme (generisanje parova 'svako sa svakim'), višeslojno sortiranje po torkama (bodovi, gol-razlika, dati golovi) i JSON serijalizaciju u jedan ozbiljan softver!"
    },
    "content": "\n          <p class=\"lead\">Stigao si do <strong>Projekta #10 — Simulatora Sportske Lige</strong> (<code>liga_pro.py</code>)! Ovo je pravi inženjerski zadatak kakav se često daje na konkursima za juniore: generisanje rasporeda utakmica, obrada rezultata, rangiranje sa tie-breaker pravilima i JSON izveštaj.</p>\n          <h3>📁 Višeslojno sortiranje torkom (Tie-Breaker pravilo!)</h3>\n          <pre><code># U fudbalu timovi se sortiraju po:\n# 1. Bodovi (najviše)\n# 2. Gol-razlika (dati - primljeni)\n# 3. Broj datih golova\ntabela = sorted(timovi, key=lambda t: (t[\"bodovi\"], t[\"gr\"], t[\"dati\"]), reverse=True)</code></pre>\n        ",
    "starterCode": "# PROJEKAT 10: Simulator Sportske Lige (Višeslojno sortiranje)\ntimovi = [\n    {\"tim\": \"Orlovi\", \"bodovi\": 6, \"gr\": 2, \"dati\": 5},\n    {\"tim\": \"Vukovi\", \"bodovi\": 6, \"gr\": 4, \"dati\": 6},\n    {\"tim\": \"Zmajevi\", \"bodovi\": 3, \"gr\": -1, \"dati\": 2}\n]\n\nrang = sorted(timovi, key=lambda t: (t[\"bodovi\"], t[\"gr\"], t[\"dati\"]), reverse=True)\nfor i, t in enumerate(rang, 1):\n    print(f\"{i}. {t['tim']:<10} | {t['bodovi']} bod | GR: {t['gr']:+d}\")\n",
    "challenges": [
      {
        "title": "Korak 1: Generator parova 'svako sa svakim' (Round-Robin)",
        "instruction": "Napiši funkciju <code>generisi_parove(timovi)</code> koja za listu timova vraća listu svih jedinstvenih torki <code>(tim_a, tim_b)</code> bez ponavljanja (npr. za <code>['A', 'B', 'C']</code> -> <code>[('A', 'B'), ('A', 'C'), ('B', 'C')]</code>).",
        "starter": "def generisi_parove(timovi):\n    # Ugnježdena petlja i < j za sve jedinstvene parove:\n    pass\n\nprint(generisi_parove(['A', 'B', 'C', 'D']))\n",
        "solution": "def generisi_parove(timovi):\n    parovi = []\n    for i in range(len(timovi)):\n        for j in range(i + 1, len(timovi)):\n            parovi.append((timovi[i], timovi[j]))\n    return parovi\n\nprint(generisi_parove(['A', 'B', 'C', 'D']))",
        "hint": "Spoljna petlja ide i in range(len(timovi)), a unutrašnja j in range(i + 1, len(timovi))."
      },
      {
        "title": "Korak 2: Obračun bodova i gol-razlike iz utakmica",
        "instruction": "Napiši funkciju <code>izracunaj_tabelu(mecevi)</code> gde je svaki meč <code>(domacin, gost, gol_d, gol_g)</code>. Pobeda nosi 3 boda, nerešeno po 1, poraz 0. Vrati rečnik <code>{tim: {'bodovi': b, 'gr': gr, 'dati': d}}</code>.",
        "starter": "def izracunaj_tabelu(mecevi):\n    # Ažuriraj bodove, gol-razliku (gr) i date golove (dati) za oba tima:\n    pass\n\nm = [('A', 'B', 2, 1), ('B', 'C', 1, 1), ('A', 'C', 0, 2)]\nprint(izracunaj_tabelu(m))\n",
        "solution": "def izracunaj_tabelu(mecevi):\n    tab = {}\n    for d, g, gd, gg in mecevi:\n        for tim in (d, g):\n            if tim not in tab:\n                tab[tim] = {'bodovi': 0, 'gr': 0, 'dati': 0}\n        tab[d]['dati'] += gd\n        tab[g]['dati'] += gg\n        tab[d]['gr'] += (gd - gg)\n        tab[g]['gr'] += (gg - gd)\n        if gd > gg:\n            tab[d]['bodovi'] += 3\n        elif gg > gd:\n            tab[g]['bodovi'] += 3\n        else:\n            tab[d]['bodovi'] += 1\n            tab[g]['bodovi'] += 1\n    return tab\n\nm = [('A', 'B', 2, 1), ('B', 'C', 1, 1), ('A', 'C', 0, 2)]\nprint(izracunaj_tabelu(m))",
        "hint": "Inicijalizuj oba tima ako nisu u tab, ažuriraj dati i gr, pa dodaj 3/1/0 bodova."
      },
      {
        "title": "Korak 3: 🕵️ Code Review (Sortiranje ignoriše gol-razliku!)",
        "instruction": "Kada dva tima imaju isti broj bodova, loš kod ih ostavlja nasumično umesto da presudi gol-razlika (<code>gr</code>), pa zatim broj datih golova (<code>dati</code>)! Popravi <code>rangiraj_timove(tabela)</code> da vrati listu <strong>imena timova</strong> poređanu po <code>(bodovi, gr, dati)</code> opadajuće.",
        "starter": "def rangiraj_timove(tabela):\n    # BUG: sortira samo po bodovima bez tie-breaker-a (gr, dati)!\n    stavke = sorted(tabela.items(), key=lambda x: x[1]['bodovi'], reverse=True)\n    return [ime for ime, _ in stavke]\n\nt = {'Orlovi': {'bodovi': 6, 'gr': 1, 'dati': 3}, 'Vukovi': {'bodovi': 6, 'gr': 4, 'dati': 5}}\nprint('Šampion prvi:', rangiraj_timove(t))\n",
        "solution": "def rangiraj_timove(tabela):\n    stavke = sorted(tabela.items(), key=lambda x: (x[1]['bodovi'], x[1]['gr'], x[1]['dati']), reverse=True)\n    return [ime for ime, _ in stavke]\n\nt = {'Orlovi': {'bodovi': 6, 'gr': 1, 'dati': 3}, 'Vukovi': {'bodovi': 6, 'gr': 4, 'dati': 5}}\nprint('Šampion prvi:', rangiraj_timove(t))",
        "hint": "Koristi torku kao ključ sortiranja: key=lambda x: (x[1]['bodovi'], x[1]['gr'], x[1]['dati'])."
      },
      {
        "title": "Korak 4: 🏆 Finalna Integracija: JSON izveštaj šampiona",
        "instruction": "Napiši funkciju <code>izveštaj_lige_json(mecevi)</code> — nazovi je <code>izvestaj_lige_json(mecevi)</code> (bez kvačica) — koja računa tabelu, rangira timove po <code>(bodovi, gr, dati)</code> i pomoću <code>import json</code> vraća JSON string sa ključevima <code>'sampion'</code> (ime prvog tima) i <code>'poredak'</code> (lista imena timova od prvog do poslednjeg).",
        "starter": "import json\ndef izvestaj_lige_json(mecevi):\n    # Izračunaj tabelu, rangiraj timove i vrati json.dumps({'sampion': ..., 'poredak': ...}):\n    pass\n\nprint(izvestaj_lige_json([('Orlovi', 'Vukovi', 1, 3), ('Orlovi', 'Zmajevi', 2, 0), ('Vukovi', 'Zmajevi', 1, 1)]))\n",
        "solution": "import json\ndef izvestaj_lige_json(mecevi):\n    tab = {}\n    for d, g, gd, gg in mecevi:\n        for tim in (d, g):\n            if tim not in tab:\n                tab[tim] = {'bodovi': 0, 'gr': 0, 'dati': 0}\n        tab[d]['dati'] += gd\n        tab[g]['dati'] += gg\n        tab[d]['gr'] += (gd - gg)\n        tab[g]['gr'] += (gg - gd)\n        if gd > gg:\n            tab[d]['bodovi'] += 3\n        elif gg > gd:\n            tab[g]['bodovi'] += 3\n        else:\n            tab[d]['bodovi'] += 1\n            tab[g]['bodovi'] += 1\n    poredak = [ime for ime, _ in sorted(tab.items(), key=lambda x: (x[1]['bodovi'], x[1]['gr'], x[1]['dati']), reverse=True)]\n    return json.dumps({'sampion': poredak[0] if poredak else '', 'poredak': poredak})\n\nprint(izvestaj_lige_json([('Orlovi', 'Vukovi', 1, 3), ('Orlovi', 'Zmajevi', 2, 0), ('Vukovi', 'Zmajevi', 1, 1)]))",
        "hint": "Izračunaj tab, napravi listu poredak sortiranjem po torki (bodovi, gr, dati) i spakuj u json.dumps(...)."
      }
    ],
    "quiz": [
      {
        "question": "Koliko jedinstvenih utakmica ima u jednokružnoj ligi sa 4 tima ('svako sa svakim')?",
        "options": [
          "6 utakmica — formula n*(n-1)//2",
          "16 utakmica",
          "4 utakmice",
          "12 utakmica"
        ],
        "correct": 0,
        "explanation": "4 * 3 / 2 = 6 jedinstvenih parova (i < j sprečava igranje tima protiv samog sebe i duplikate)."
      },
      {
        "question": "Kako Python poredi dve torke (6, 4, 5) i (6, 2, 8) pri sortiranju?",
        "options": [
          "Element po element s leva na desno: 6==6, pa gleda drugi element 4 > 2",
          "Sabira elemente torke",
          "Gleda samo poslednji element",
          "Baca TypeError"
        ],
        "correct": 0,
        "explanation": "Leksikografsko poređenje torki u Pythonu je idealno za višeslojno sortiranje (tie-breaking)!"
      },
      {
        "question": "Šta radi formatiranje f'{gr:+d}' u Pythonu?",
        "options": [
          "Uvek prikazuje znak + ispred pozitivnih brojeva (npr. +4, -1)",
          "Sabira dva broja",
          "Dodaje slovo d",
          "Zaokružuje na 2 decimale"
        ],
        "correct": 0,
        "explanation": "Specifikator +d čini gol-razliku (+4, -2) profesionalnom kao na pravim TV tabelama!"
      },
      {
        "question": "Šta sledi nakon uspešno završenih 10 Vođenih Projekata?",
        "options": [
          "Kurs 6: Računarstvo i Python Inženjerstvo (CS101 Pro) — univerzitetski nivo!",
          "Povratak na print('Zdravo')",
          "Brisanje VS Code-a",
          "Kraj učenja zauvek"
        ],
        "correct": 0,
        "explanation": "Sa 10 realnih projekata iza sebe, potpuno si spreman za najjači kurs na platformi — CS101 Pro!"
      }
    ],
    "proTip": {
      "title": "Čestitamo na svih 10 Vođenih Projekata!",
      "content": "Sada imaš <strong>10 ozbiljnih Python aplikacija za svoj GitHub portfolio</strong>! Sledeća stanica: <strong>Kurs 6 — CS101 Pro</strong> gde ulazimo u bitove, Big-O, OOP arhitekturu, Regex, TDD i SQL baze!"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_KURS_PROJECTS };
}
