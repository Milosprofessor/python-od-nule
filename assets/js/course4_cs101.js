/**
 * KURS 4: Računarstvo i Python Inženjerstvo (CS101 Pro)
 * 100% autorski kurs na srpskom — Hibrid CS50P + CS50x standarda (10 modula, 40 zadataka, 40 kvizova)
 */
const LESSONS_KURS_4 = [
  {
    "id": "c4-binarni-sistem",
    "title": "1. Kako Računar Misli: Binarni Sistem, Bitovi i UTF-8",
    "icon": "💡",
    "category": "CS101 • Nedelja 0",
    "summary": "Saznaj kako se brojevi, slova i emotikoni pretvaraju u nule i jedinice (0 i 1) unutar procesora.",
    "content": "\n          <p class=\"lead\">Na najdubljem nivou, računar ne poznaje ni srpski ni engleski, pa čak ni brojeve od 0 do 9. On poznaje samo <strong>dva stanja struje: Uključeno (1) i Isključeno (0)</strong>.</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">💡</div>\n            <div class=\"analogy-text\">\n              <strong>Analogija sa sijalicama:</strong> Jedna sijalica (1 <em>bit</em>) može biti ugašena (<code>0</code>) ili upaljena (<code>1</code>). Sa 8 sijalica u nizu (1 <em>bajt</em>) možemo prikazati tačno <strong>256 različitih kombinacija</strong> (od 0 do 255) — dovoljno za sva slova, brojeve i znakove!\n            </div>\n          </div>\n          <h3>Kako brojevi i slova postaju bitovi?</h3>\n          <ul>\n            <li><strong>Binarni sistem (osnova 2):</strong> Svaka pozicija sdesna nalevo vredi duplo više: <code>1, 2, 4, 8, 16, 32, 64, 128</code>. Tako je broj <code>42</code> zapravo <code>32 + 8 + 2 = 101010</code>!</li>\n            <li><strong>ASCII i UTF-8:</strong> Svako slovo ima svoj broj — veliko <code>'A'</code> je <code>65</code> (<code>ord('A')</code>), a <code>chr(65)</code> vraća nazad <code>'A'</code>!</li>\n          </ul>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Pretvaranje broja u binarni zapis i nazad:</strong></p>\n            <pre><code>broj = 42\nbinarno = bin(broj)[2:]\nnazad = int(binarno, 2)\nprint(f\"Decimalno: {broj} -> Binarno: {binarno} -> Nazad: {nazad}\")</code></pre>\n            <p><strong>Primer 2 — Tajni brojevi iza slova (ASCII / Unicode):</strong></p>\n            <pre><code>rec = \"PYTHON\"\nkodovi = [ord(slovo) for slovo in rec]\nprint(\"Slova:\", list(rec))\nprint(\"Brojevi (Unicode):\", kodovi)</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Zašto boje na ekranu idu od 0 do 255 (RGB)?",
      "content": "Svaki piksel na ekranu čine 3 bajta — po jedan bajt (8 bitova = 0..255) za Crvenu (R), Zelenu (G) i Plavu (B) boju. Zato je čista bela (255, 255, 255)!"
    },
    "starterCode": "# Nedelja 0: Kako računar vidi brojeve i slova!\nfor broj in [1, 2, 5, 10, 42, 255]:\n    print(f\"Dec: {broj:>3}  |  Bin (8 bitova): {bin(broj)[2:]:>08}\")\n\nprint(\"\\nSlovo 'A' u memoriji:\", ord('A'), \"->\", bin(ord('A'))[2:])\n",
    "challenges": [
      {
        "title": "Zadatak 1: Binarni prevodilac (Zagrevanje)",
        "instruction": "Napiši funkciju u_binarni(n) koja za pozitivan ceo broj n vraća njegov čist binarni string BEZ prefiksa '0b' (npr. za 10 vraća '1010').",
        "starter": "def u_binarni(n):\n    # Iskoristi bin(n)[2:] i vrati rezultat:\n    pass\n\nprint(u_binarni(10))\nprint(u_binarni(42))\n",
        "solution": "def u_binarni(n):\n    return bin(n)[2:]\n\nprint(u_binarni(10))\nprint(u_binarni(42))",
        "hint": "Funkcija bin(10) vraća '0b1010', pa isečak [2:] skida '0b'."
      },
      {
        "title": "Zadatak 2: Dekoder tajne poruke (Primena)",
        "instruction": "Napiši funkciju dekodiraj(brojevi) koja prima listu ASCII brojeva (npr. [75, 79, 68]) i vraća spojenu reč ('KOD') koristeći chr().",
        "starter": "def dekodiraj(brojevi):\n    # Pretvori svaki broj u slovo pomoću chr(b) i spoji u string:\n    pass\n\nprint(dekodiraj([75, 79, 68]))\n",
        "solution": "def dekodiraj(brojevi):\n    return ''.join(chr(b) for b in brojevi)\n\nprint(dekodiraj([75, 79, 68]))",
        "hint": "Koristi ''.join(chr(b) for b in brojevi) ili petlju koja dodaje chr(b) na rezultat."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Pogrešna osnova sistema!)",
        "instruction": "Kolega je napisao funkciju bin_u_dec(bin_str) ali je zaboravio da int() podrazumevano koristi osnovu 10 pa za '1010' dobija 1010 umesto 10! Popravi kod.",
        "starter": "def bin_u_dec(bin_str):\n    # Popravi osnovu brojevnog sistema (treba osnova 2!):\n    return int(bin_str)\n\nprint('1010 binarno je:', bin_u_dec('1010'))\n",
        "solution": "def bin_u_dec(bin_str):\n    return int(bin_str, 2)\n\nprint('1010 binarno je:', bin_u_dec('1010'))",
        "hint": "Prosledi drugi argument 2 funkciji int: int(bin_str, 2)."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Cezarova šifra (+pomeraj)",
        "instruction": "Napiši funkciju sifruj_cezar(tekst, pomeraj) koja svako slovo teksta pomera unapred za 'pomeraj' mesta u Unicode tabeli (npr. sifruj_cezar('ABC', 1) -> 'BCD').",
        "starter": "def sifruj_cezar(tekst, pomeraj):\n    # Za svaki znak z u tekstu: chr(ord(z) + pomeraj)\n    pass\n\nprint(sifruj_cezar('ABC', 1))\nprint(sifruj_cezar('PYTHON', 3))\n",
        "solution": "def sifruj_cezar(tekst, pomeraj):\n    return ''.join(chr(ord(z) + pomeraj) for z in tekst)\n\nprint(sifruj_cezar('ABC', 1))\nprint(sifruj_cezar('PYTHON', 3))",
        "hint": "Za svaki znak z izračunaj chr(ord(z) + pomeraj) i spoji ih sa ''.join(...)."
      }
    ],
    "quiz": [
      {
        "question": "Koliko različitih vrednosti može predstaviti 1 bajt (8 bitova)?",
        "options": [
          "8",
          "64",
          "256 (od 0 do 255)",
          "1024"
        ],
        "correct": 2,
        "explanation": "2^8 = 256 različitih kombinacija nula i jedinica."
      },
      {
        "question": "Koji je decimalni broj za binarni zapis 1010?",
        "options": [
          "10",
          "12",
          "8",
          "15"
        ],
        "correct": 0,
        "explanation": "1*8 + 0*4 + 1*2 + 0*1 = 10."
      },
      {
        "question": "Čemu služi funkcija ord('A') u Pythonu?",
        "options": [
          "Vraća brojčani Unicode/ASCII kod znaka 'A' (65)",
          "Pretvara 'A' u malo slovo",
          "Sortira slova",
          "Briše slovo"
        ],
        "correct": 0,
        "explanation": "ord() daje numerički kod karaktera, a chr() radi suprotno."
      },
      {
        "question": "Zašto je UTF-8 zamenio stari ASCII standard?",
        "options": [
          "ASCII ima samo 128 engleskih znakova, dok UTF-8 podržava sva pisma sveta (č, ć, š, ž, đ, ćirilicu i emotikone)",
          "UTF-8 zauzima 0 bajtova",
          "ASCII ne podržava brojeve",
          "UTF-8 radi samo u Pythonu"
        ],
        "correct": 0,
        "explanation": "UTF-8 je univerzalan standard teksta na celom internetu."
      }
    ]
  },
  {
    "id": "c4-algoritmi-rekurzija",
    "title": "2. Algoritmi, Složenost (Big-O) i Rekurzija",
    "icon": "⚡",
    "category": "CS101 • Nedelja 1",
    "summary": "Nauči kako inženjeri mere brzinu koda (O(1), O(log n), O(n), O(n²)) i kako funkcija može pozivati samu sebe.",
    "content": "\n          <p class=\"lead\">Dva programa mogu rešiti isti problem, ali jedan može trajati <strong>0.001 sekundu</strong>, a drugi <strong>3 sata</strong>! Razlika je u <em>algoritmu</em> i njegovoj <strong>Big-O složenosti</strong>.</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🪆</div>\n            <div class=\"analogy-text\">\n              <strong>Analogija za rekurziju (Babuška):</strong> Rekurzivna funkcija je kao ruska babuška — otvaraš veću lutku i unutra je manja verzija istog problema, sve dok ne stigneš do najmanje lutke koja se više ne otvara (<strong>bazni slučaj</strong>)!\n            </div>\n          </div>\n          <h3>Hijerarhija brzine algoritama (od najbržeg ka najsporijem):</h3>\n          <ul>\n            <li><code>O(1)</code> — Trenutno (pristup elementu liste po indeksu ili rečniku po ključu).</li>\n            <li><code>O(log n)</code> — Binarna pretraga (milion elemenata za 20 koraka!).</li>\n            <li><code>O(n)</code> — Jedna <code>for</code> petlja kroz celu listu.</li>\n            <li><code>O(n²)</code> — Dve ugnježdene petlje (npr. Bubble Sort).</li>\n          </ul>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Rekurzivni faktorijel (5! = 5 × 4 × 3 × 2 × 1 = 120):</strong></p>\n            <pre><code>def faktorijel(n):\n    if n <= 1:\n        return 1  # Bazni slučaj (zaustavljanje!)\n    return n * faktorijel(n - 1)\n\nprint(\"5! =\", faktorijel(5))</code></pre>\n            <p><strong>Primer 2 — O(1) vs O(n) pretraga u rečniku i listi:</strong></p>\n            <pre><code>lista = list(range(1000))\nskup = set(lista)\nprint(\"999 u listi O(n):\", 999 in lista)\nprint(\"999 u skupu O(1):\", 999 in skup)</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Zlatno pravilo rekurzije",
      "content": "Svaka rekurzivna funkcija MORA imati bazni slučaj (uslov zaustavljanja) i svaki rekurzivni poziv mora smanjivati problem ka baznom slučaju — inače dobijaš RecursionError!"
    },
    "starterCode": "# Nedelja 1: Rekurzija i Big-O razmišljanje\ndef odbrojavanje(n):\n    if n == 0:\n        print(\"POLETANJE! 🚀\")\n        return\n    print(n)\n    odbrojavanje(n - 1)\n\nodbrojavanje(5)\n",
    "challenges": [
      {
        "title": "Zadatak 1: Rekurzivni zbir 1..n (Zagrevanje)",
        "instruction": "Napiši rekurzivnu funkciju rekurzivni_zbir(n) koja vraća zbir brojeva od 1 do n (za n <= 0 vraća 0; za 5 vraća 15).",
        "starter": "def rekurzivni_zbir(n):\n    # Bazni slučaj: if n <= 0: return 0\n    # Rekurzivni korak: return n + rekurzivni_zbir(n - 1)\n    pass\n\nprint(rekurzivni_zbir(5))\n",
        "solution": "def rekurzivni_zbir(n):\n    if n <= 0:\n        return 0\n    return n + rekurzivni_zbir(n - 1)\n\nprint(rekurzivni_zbir(5))",
        "hint": "Bazni slučaj vraća 0, a opšti slučaj vraća n + rekurzivni_zbir(n - 1)."
      },
      {
        "title": "Zadatak 2: Brza formula O(1) umesto petlje O(n) (Primena)",
        "instruction": "Gausova formula za zbir brojeva 1..n je n * (n + 1) // 2 i radi u O(1) vremenu! Napiši funkciju gaus_zbir(n) koja vraća ovaj rezultat bez petlje.",
        "starter": "def gaus_zbir(n):\n    # Vrati zbir u O(1) vremenu pomoću Gausove formule:\n    pass\n\nprint(gaus_zbir(100))\n",
        "solution": "def gaus_zbir(n):\n    return n * (n + 1) // 2\n\nprint(gaus_zbir(100))",
        "hint": "return n * (n + 1) // 2 — za 100 daje 5050 u jednoj operaciji!"
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Beskonačna rekurzija!)",
        "instruction": "Kolega je napisao faktorijel(n), ali je zaboravio bazni slučaj pa program puca sa RecursionError! Dodaj bazni slučaj za n <= 1.",
        "starter": "def faktorijel(n):\n    # Dodaj bazni slučaj da rekurzija stane!\n    return n * faktorijel(n - 1)\n\nprint('5! =', faktorijel(5))\n",
        "solution": "def faktorijel(n):\n    if n <= 1:\n        return 1\n    return n * faktorijel(n - 1)\n\nprint('5! =', faktorijel(5))",
        "hint": "Dodaj 'if n <= 1: return 1' na sam početak funkcije."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Fibonačijev niz sa memoizacijom",
        "instruction": "Napiši funkciju fibonaci(n) koja vraća n-ti Fibonačijev broj (fib(0)=0, fib(1)=1, fib(6)=8, fib(10)=55) koristeći petlju u O(n) vremenu.",
        "starter": "def fibonaci(n):\n    # Iterativno O(n): a, b = 0, 1\n    pass\n\nprint('fib(6):', fibonaci(6))\nprint('fib(10):', fibonaci(10))\n",
        "solution": "def fibonaci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n\nprint('fib(6):', fibonaci(6))\nprint('fib(10):', fibonaci(10))",
        "hint": "Kreni od a, b = 0, 1 i u petlji n puta uradi a, b = b, a + b, pa vrati a."
      }
    ],
    "quiz": [
      {
        "question": "Koja je vremenska složenost pristupa elementu u rečniku po ključu (recnik['ime'])?",
        "options": [
          "O(1) — konstantno vreme",
          "O(n)",
          "O(n²)",
          "O(n!)"
        ],
        "correct": 0,
        "explanation": "Heš tabele (dict) pronalaze vrednost u proseku za O(1) koraka."
      },
      {
        "question": "Šta se dešava ako rekurzivna funkcija nema bazni slučaj?",
        "options": [
          "Poziva samu sebe dok ne popuni stek i baci RecursionError",
          "Automatski vraća 0",
          "Pretvara se u for petlju",
          "Ubrzava kod"
        ],
        "correct": 0,
        "explanation": "Bazni slučaj je obavezan izlaz iz rekurzije."
      },
      {
        "question": "Koji algoritam ima najbržu složenost kada n raste na milion?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(n²)"
        ],
        "correct": 0,
        "explanation": "O(log n) za milion elemenata pravi samo ~20 koraka."
      },
      {
        "question": "Kolika je složenost dve ugnježdene for petlje od 0 do n?",
        "options": [
          "O(n²)",
          "O(n)",
          "O(1)",
          "O(log n)"
        ],
        "correct": 0,
        "explanation": "n * n = n² operacija."
      }
    ]
  },
  {
    "id": "c4-strukture-podataka",
    "title": "3. Strukture Podataka: Stek, Red, Skupovi i Heš Tabele",
    "icon": "🧱",
    "category": "CS101 • Nedelja 2",
    "summary": "Izaberi pravu strukturu podataka: LIFO stek (Undo), FIFO red (štampač), set (jedinstveni) i dict (brojanje frekvencija).",
    "content": "\n          <p class=\"lead\">Izbor prave <strong>strukture podataka</strong> je pola rešenja svakog inženjerskog problema. Nije svaka lista najbolja za svaki zadatak!</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🥞</div>\n            <div class=\"analogy-text\">\n              <strong>Stek (LIFO) vs Red (FIFO):</strong> Stek je kao gomila palačinki — <em>poslednja koja uđe, prva izlazi</em> (tako radi <code>Ctrl+Z Undo</code>!). Red je kao red u pekari — <em>ko prvi stane, prvi bude uslužen</em>!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Brojanje učestalosti reči (Heš tabela / <code>dict</code>):</strong></p>\n            <pre><code>reci = [\"python\", \"kod\", \"python\", \"baza\", \"python\", \"kod\"]\nbrojac = {}\nfor r in reci:\n    brojac[r] = brojac.get(r, 0) + 1\nprint(\"Frekvencija reči:\", brojac)</code></pre>\n            <p><strong>Primer 2 — Brzo uklanjanje duplikata i presek skupova (<code>set</code>):</strong></p>\n            <pre><code>grupa_a = {\"Ana\", \"Marko\", \"Luka\"}\ngrupa_b = {\"Luka\", \"Sofija\", \"Marko\"}\nprint(\"Zajednički članovi:\", grupa_a & grupa_b)\nprint(\"Svi jedinstveni:\", grupa_a | grupa_b)</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Kada koristiti set() umesto list()?",
      "content": "Kada samo proveravaš pripadnost ('if korisnik in banovani:'), set je O(1) dok je lista O(n) — na milion elemenata set je i preko 10.000 puta brži!"
    },
    "starterCode": "# Nedelja 2: Simulacija Undo (Stek - LIFO)\nistorija = []\nistorija.append(\"Napisao naslov\")\nistorija.append(\"Dodao sliku\")\nistorija.append(\"Obrisao pasus\")\n\nposlednje = istorija.pop()\nprint(\"Poništena akcija (Undo):\", poslednje)\nprint(\"Preostala istorija:\", istorija)\n",
    "challenges": [
      {
        "title": "Zadatak 1: Uklanjanje duplikata uz set (Zagrevanje)",
        "instruction": "Napiši funkciju jedinstveni_broj(lista) koja vraća koliko RAZLIČITIH elemenata ima u prosleđenoj listi (npr. [1, 2, 2, 3, 3, 3] -> 3).",
        "starter": "def jedinstveni_broj(lista):\n    # Iskoristi len(set(lista)):\n    pass\n\nprint(jedinstveni_broj([1, 2, 2, 3, 3, 3]))\n",
        "solution": "def jedinstveni_broj(lista):\n    return len(set(lista))\n\nprint(jedinstveni_broj([1, 2, 2, 3, 3, 3]))",
        "hint": "set(lista) uklanja sve duplikate, a len() broji preostale."
      },
      {
        "title": "Zadatak 2: Brojač slova u reči (Heš tabela)",
        "instruction": "Napiši funkciju prebroj_slova(rec) koja vraća rečnik sa brojem pojavljivanja svakog slova (npr. 'banana' -> {'b': 1, 'a': 3, 'n': 2}).",
        "starter": "def prebroj_slova(rec):\n    rez = {}\n    # Prođi kroz svako slovo i uvećaj rez[s] pomoću .get(s, 0) + 1\n    return rez\n\nprint(prebroj_slova('banana'))\n",
        "solution": "def prebroj_slova(rec):\n    rez = {}\n    for s in rec:\n        rez[s] = rez.get(s, 0) + 1\n    return rez\n\nprint(prebroj_slova('banana'))",
        "hint": "U petlji for s in rec: napiši rez[s] = rez.get(s, 0) + 1."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Red FIFO radi kao Stek!)",
        "instruction": "Simulacija reda u banci koristi red.pop() umesto red.pop(0), pa uslužuje poslednjeg klijenta umesto prvog! Popravi funkciju usluzi_prvog(red).",
        "starter": "def usluzi_prvog(red):\n    # Popravi da uzima PRVOG u redu (FIFO), a ne poslednjeg!\n    return red.pop()\n\nklijenti = ['Ana', 'Marko', 'Jelena']\nprint('Uslužen:', usluzi_prvog(klijenti))\n",
        "solution": "def usluzi_prvog(red):\n    return red.pop(0)\n\nklijenti = ['Ana', 'Marko', 'Jelena']\nprint('Uslužen:', usluzi_prvog(klijenti))",
        "hint": "pop(0) skida element sa početka liste (indeks 0)."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Validator zagrada pomoću Steka",
        "instruction": "Klasičan zadatak sa Google intervjua! Napiši funkciju zagrade_validne(tekst) koja pomoću steka proverava da li su sve '(' i ')' ispravno zatvorene (npr. '(())' -> True, '(()' -> False, ')(' -> False).",
        "starter": "def zagrade_validne(tekst):\n    stek = []\n    for z in tekst:\n        if z == '(':\n            stek.append(z)\n        elif z == ')':\n            # Ako je stek prazan vrati False, inače uradi pop()\n            pass\n    return len(stek) == 0\n\nprint('(()) ->', zagrade_validne('(())'))\nprint(')( ->', zagrade_validne(')('))\n",
        "solution": "def zagrade_validne(tekst):\n    stek = []\n    for z in tekst:\n        if z == '(':\n            stek.append(z)\n        elif z == ')':\n            if not stek:\n                return False\n            stek.pop()\n    return len(stek) == 0\n\nprint('(()) ->', zagrade_validne('(())'))\nprint(')( ->', zagrade_validne(')('))",
        "hint": "Kada naiđeš na ')', proveri if not stek: return False, a zatim stek.pop()."
      }
    ],
    "quiz": [
      {
        "question": "Šta znači skraćenica LIFO kod strukture Stek (Stack)?",
        "options": [
          "Last-In, First-Out (Poslednji ušao, prvi izlazi)",
          "List-In, Fast-Out",
          "Last-In, Forever-Out",
          "Linear-Input, File-Output"
        ],
        "correct": 0,
        "explanation": "Stek radi po LIFO principu — baš kao Ctrl+Z Undo ili gomila tanjira."
      },
      {
        "question": "Šta garantuje Python skup (set)?",
        "options": [
          "Svaki element se može pojaviti samo jednom (nema duplikata)",
          "Elementi su uvek sortirani po abecedi",
          "Indeksiranje preko skup[0]",
          "Samo tekstualne vrednosti"
        ],
        "correct": 0,
        "explanation": "Skupovi automatski uklanjaju duplikate i imaju O(1) proveru pripadnosti."
      },
      {
        "question": "Koji izraz daje presek (zajedničke elemente) dva skupa A i B?",
        "options": [
          "A & B",
          "A + B",
          "A * B",
          "A / B"
        ],
        "correct": 0,
        "explanation": "A & B je presek, A | B je unija, a A - B je razlika skupova."
      },
      {
        "question": "Kako se ponaša red (Queue — FIFO) u banci ili kod štampača?",
        "options": [
          "Prvi koji stigne, prvi se obrađuje",
          "Poslednji koji stigne ide prvi",
          "Nasumičnim redosledom",
          "Po abecedi"
        ],
        "correct": 0,
        "explanation": "FIFO znači First-In, First-Out."
      }
    ]
  },
  {
    "id": "c4-oop-osnove",
    "title": "4. Objektno-Orijentisano Programiranje (OOP I): Klase i Objekti",
    "icon": "🏛️",
    "category": "CS101 • Nedelja 3",
    "summary": "Modeluj stvarni svet u kodu: kreiraj sopstvene klase, atribute, konstruktor __init__ i metode.",
    "content": "\n          <p class=\"lead\">Kada aplikacija poraste na hiljade linija koda, podaci i funkcije više ne mogu živeti odvojeno. <strong>OOP</strong> ih spaja u uredne celine — <strong>Klase i Objekte</strong>!</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🏗️</div>\n            <div class=\"analogy-text\">\n              <strong>Nacrt kuće vs Prava kuća:</strong> <code>class Automobil</code> je arhitektonski <em>nacrt</em>. Kada napišemo <code>moj_auto = Automobil(\"Audi\", 2024)</code>, napravili smo konkretan <em>objekat</em> u memoriji!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Klasa BankovniRacun sa metodama uplate i isplate:</strong></p>\n            <pre><code>class BankovniRacun:\n    def __init__(self, vlasnik, stanje=0):\n        self.vlasnik = vlasnik\n        self.stanje = stanje\n\n    def uplati(self, iznos):\n        if iznos > 0:\n            self.stanje += iznos\n\nracun = BankovniRacun(\"Ana\", 1000)\nracun.uplati(500)\nprint(racun.vlasnik, \"ima:\", racun.stanje, \"RSD\")</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Šta je taj misteriozni 'self'?",
      "content": "self uvek označava baš TAJ konkretan objekat na kome je metoda pozvana — tako racun1.uplati(500) menja stanje samo na racun1, a ne na racun2!"
    },
    "starterCode": "# Nedelja 3: Tvoja prva Python klasa!\nclass Ucenik:\n    def __init__(self, ime, poeni=0):\n        self.ime = ime\n        self.poeni = poeni\n\n    def dodaj_poene(self, kolicina):\n        self.poeni += kolicina\n\nu1 = Ucenik(\"Marko\", 100)\nu1.dodaj_poene(50)\nprint(f\"{u1.ime} ima ukupno {u1.poeni} XP!\")\n",
    "challenges": [
      {
        "title": "Zadatak 1: Klasa Pravougaonik (Zagrevanje)",
        "instruction": "Napravi klasu Pravougaonik sa __init__(self, sirina, visina) i metodom povrsina(self) koja vraća sirina * visina.",
        "starter": "class Pravougaonik:\n    def __init__(self, sirina, visina):\n        self.sirina = sirina\n        self.visina = visina\n    # Dodaj metod povrsina(self):\n\np = Pravougaonik(4, 5)\nprint('Površina:', p.povrsina())\n",
        "solution": "class Pravougaonik:\n    def __init__(self, sirina, visina):\n        self.sirina = sirina\n        self.visina = visina\n    def povrsina(self):\n        return self.sirina * self.visina\n\np = Pravougaonik(4, 5)\nprint('Površina:', p.povrsina())",
        "hint": "def povrsina(self): return self.sirina * self.visina"
      },
      {
        "title": "Zadatak 2: Bezbedna isplata u BankovniRacun (Primena)",
        "instruction": "Dodaj metod isplati(self, iznos) u klasu Racun koji skida novac samo ako je 0 < iznos <= self.stanje (vraća True ako uspe, False ako nema dovoljno novca).",
        "starter": "class Racun:\n    def __init__(self, stanje):\n        self.stanje = stanje\n    def isplati(self, iznos):\n        # Proveri uslov i vrati True ili False:\n        pass\n\nr = Racun(1000)\nprint(r.isplati(400), 'Stanje:', r.stanje)\nprint(r.isplati(900), 'Stanje:', r.stanje)\n",
        "solution": "class Racun:\n    def __init__(self, stanje):\n        self.stanje = stanje\n    def isplati(self, iznos):\n        if 0 < iznos <= self.stanje:\n            self.stanje -= iznos\n            return True\n        return False\n\nr = Racun(1000)\nprint(r.isplati(400), 'Stanje:', r.stanje)\nprint(r.isplati(900), 'Stanje:', r.stanje)",
        "hint": "Ako je 0 < iznos <= self.stanje smanji self.stanje -= iznos i vrati True; inače vrati False."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Zaboravljen self u metodi!)",
        "instruction": "Klasa Brojac puca jer je kolega zaboravio self ispred 'vrednost' i kao prvi parametar metode uvecaj()! Popravi klasu.",
        "starter": "class Brojac:\n    def __init__(self):\n        self.vrednost = 0\n    def uvecaj():\n        vrednost += 1\n\nb = Brojac()\nb.uvecaj()\nprint(b.vrednost)\n",
        "solution": "class Brojac:\n    def __init__(self):\n        self.vrednost = 0\n    def uvecaj(self):\n        self.vrednost += 1\n\nb = Brojac()\nb.uvecaj()\nprint(b.vrednost)",
        "hint": "Metoda mora imati (self) i menjati self.vrednost += 1."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Korpa za kupovinu (OOP)",
        "instruction": "Napravi klasu Korpa koja u __init__ kreira praznu listu self.stavke = [], ima metod dodaj(self, naziv, cena) i metod ukupno(self) koji vraća zbir svih cena.",
        "starter": "class Korpa:\n    def __init__(self):\n        self.stavke = []\n    def dodaj(self, naziv, cena):\n        pass\n    def ukupno(self):\n        pass\n\nk = Korpa()\nk.dodaj('Knjiga', 1200)\nk.dodaj('Olovka', 150)\nprint('Ukupno:', k.ukupno())\n",
        "solution": "class Korpa:\n    def __init__(self):\n        self.stavke = []\n    def dodaj(self, naziv, cena):\n        self.stavke.append({'naziv': naziv, 'cena': cena})\n    def ukupno(self):\n        return sum(s['cena'] for s in self.stavke)\n\nk = Korpa()\nk.dodaj('Knjiga', 1200)\nk.dodaj('Olovka', 150)\nprint('Ukupno:', k.ukupno())",
        "hint": "Čuvaj rečnik ili tuple (naziv, cena) u self.stavke, a u ukupno() saberi sve cene."
      }
    ],
    "quiz": [
      {
        "question": "Čemu služi specijalna metoda __init__ u Python klasi?",
        "options": [
          "Konstruktor — automatski se poziva pri kreiranju novog objekta da postavi početne atribute",
          "Briše objekat iz memorije",
          "Štampa objekat",
          "Pretvara klasu u listu"
        ],
        "correct": 0,
        "explanation": "__init__ inicijalizuje stanje svakog novog objekta."
      },
      {
        "question": "Šta predstavlja prvi parametar self u metodama klase?",
        "options": [
          "Referencu na konkretan objekat nad kojim se metoda poziva",
          "Ime fajla",
          "Globalnu promenljivu",
          "Broj objekata"
        ],
        "correct": 0,
        "explanation": "Preko self metoda čita i menja atribute tog konkretnog objekta."
      },
      {
        "question": "Koja je razlika između klase i objekta?",
        "options": [
          "Klasa je šablon (nacrt), a objekat je konkretan primerak napravljen po tom šablonu",
          "Nema razlike",
          "Objekat je veći od klase",
          "Klasa može postojati samo jednom"
        ],
        "correct": 0,
        "explanation": "Iz jedne klase možemo napraviti hiljade nezavisnih objekata."
      },
      {
        "question": "Kako pozivamo metod uplati(500) na objektu moj_racun?",
        "options": [
          "moj_racun.uplati(500)",
          "uplati(moj_racun, 500) samo",
          "moj_racun->uplati(500)",
          "call moj_racun.uplati"
        ],
        "correct": 0,
        "explanation": "Tačka-notacija moj_racun.uplati(500) automatski prosleđuje moj_racun kao self."
      }
    ]
  },
  {
    "id": "c4-oop-napredni",
    "title": "5. Napredni OOP: Nasleđivanje, Polimorfizam i __str__",
    "icon": "🧬",
    "category": "CS101 • Nedelja 4",
    "summary": "Proširuj postojeće klase bez ponavljanja koda pomoću nasleđivanja i magičnih (dunder) metoda.",
    "content": "\n          <p class=\"lead\">Zašto pisati iste atribute za <code>Student</code>, <code>Profesor</code> i <code>Admin</code> kada svi oni mogu <strong>naslediti</strong> zajedničku klasu <code>Korisnik</code>?</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🧬</div>\n            <div class=\"analogy-text\">\n              <strong>Nasleđivanje i Polimorfizam:</strong> Podklasa (dete) nasleđuje sve osobine roditelja i dodaje svoje! Polimorfizam znači da različiti objekti (<code>Pas</code>, <code>Mačka</code>) mogu imati istu metodu <code>oglasi_se()</code>, a svaki je izvršava na svoj način!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Nasleđivanje i specijalna metoda <code>__str__</code>:</strong></p>\n            <pre><code>class Zivotinja:\n    def __init__(self, ime):\n        self.ime = ime\n    def __str__(self):\n        return f\"Životinja: {self.ime}\"\n\nclass Pas(Zivotinja):\n    def oglasi_se(self):\n        return f\"{self.ime} kaže: Av-av! 🐶\"\n\np = Pas(\"Reks\")\nprint(p)\nprint(p.oglasi_se())</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "super(Podklasa, self) u Skulptu vs super() u lokalnom Pythonu",
      "content": "U lokalnom Pythonu 3 možeš pisati kratko super().__init__(...), dok u brauzerskom Skulptu uvek piši super(ImePodklase, self).__init__(...) — radi 100% svuda!"
    },
    "starterCode": "# Nedelja 4: Nasleđivanje i polimorfizam\nclass Zaposleni:\n    def __init__(self, ime, plata):\n        self.ime = ime\n        self.plata = plata\n    def __str__(self):\n        return f\"{self.ime} ({self.plata} EUR)\"\n\nclass Programer(Zaposleni):\n    def __init__(self, ime, plata, jezik):\n        super(Programer, self).__init__(ime, plata)\n        self.jezik = jezik\n\np = Programer(\"Vuk\", 2500, \"Python\")\nprint(p, \"| Jezik:\", p.jezik)\n",
    "challenges": [
      {
        "title": "Zadatak 1: Lep ispis sa __str__ (Zagrevanje)",
        "instruction": "Dodaj metodu __str__(self) klasi Knjiga tako da str(Knjiga('Na Drini ćuprija', 'Ivo Andrić')) vrati 'Na Drini ćuprija - Ivo Andrić'.",
        "starter": "class Knjiga:\n    def __init__(self, naslov, autor):\n        self.naslov = naslov\n        self.autor = autor\n    # Dodaj __str__(self):\n\nk = Knjiga('Na Drini ćuprija', 'Ivo Andrić')\nprint(k)\n",
        "solution": "class Knjiga:\n    def __init__(self, naslov, autor):\n        self.naslov = naslov\n        self.autor = autor\n    def __str__(self):\n        return f'{self.naslov} - {self.autor}'\n\nk = Knjiga('Na Drini ćuprija', 'Ivo Andrić')\nprint(k)",
        "hint": "def __str__(self): return f'{self.naslov} - {self.autor}'"
      },
      {
        "title": "Zadatak 2: Nasleđivanje Vozilo -> ElektričniAuto (Primena)",
        "instruction": "Napravi podklasu ElektricniAuto(Vozilo) koja nasleđuje marku i dodaje atribut baterija (u procentima). Pozovi super(ElektricniAuto, self).__init__(marka).",
        "starter": "class Vozilo:\n    def __init__(self, marka):\n        self.marka = marka\n\nclass ElektricniAuto(Vozilo):\n    def __init__(self, marka, baterija):\n        # Pozovi roditeljski __init__ i sačuvaj self.baterija:\n        pass\n\ne = ElektricniAuto('Tesla', 95)\nprint(e.marka, e.baterija)\n",
        "solution": "class Vozilo:\n    def __init__(self, marka):\n        self.marka = marka\n\nclass ElektricniAuto(Vozilo):\n    def __init__(self, marka, baterija):\n        super(ElektricniAuto, self).__init__(marka)\n        self.baterija = baterija\n\ne = ElektricniAuto('Tesla', 95)\nprint(e.marka, e.baterija)",
        "hint": "super(ElektricniAuto, self).__init__(marka) pa self.baterija = baterija."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Poređenje objekata __eq__)",
        "instruction": "Dve tačke Tacka(3, 4) i Tacka(3, 4) vraćaju False za == jer nedostaje __eq__! Dodaj __eq__(self, other) da poredi x i y koordinate.",
        "starter": "class Tacka:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    # Dodaj __eq__(self, other):\n\nprint('Jednake?', Tacka(3, 4) == Tacka(3, 4))\n",
        "solution": "class Tacka:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nprint('Jednake?', Tacka(3, 4) == Tacka(3, 4))",
        "hint": "def __eq__(self, other): return self.x == other.x and self.y == other.y"
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Polimorfizam oblika",
        "instruction": "Napravi klasu Kvadrat(stranica) i Krug(poluprecnik) gde OBE imaju metod povrsina() (za krug koristi 3.14 * r * r), i funkciju ukupna_povrsina(oblici) koja sabira površine svih oblika u listi!",
        "starter": "class Kvadrat:\n    def __init__(self, a): self.a = a\n    def povrsina(self): return self.a * self.a\n\nclass Krug:\n    def __init__(self, r): self.r = r\n    def povrsina(self): return 3.14 * self.r * self.r\n\ndef ukupna_povrsina(oblici):\n    # Saberi o.povrsina() za sve oblike u listi:\n    pass\n\nprint(ukupna_povrsina([Kvadrat(4), Krug(10)]))\n",
        "solution": "class Kvadrat:\n    def __init__(self, a): self.a = a\n    def povrsina(self): return self.a * self.a\n\nclass Krug:\n    def __init__(self, r): self.r = r\n    def povrsina(self): return 3.14 * self.r * self.r\n\ndef ukupna_povrsina(oblici):\n    return sum(o.povrsina() for o in oblici)\n\nprint(ukupna_povrsina([Kvadrat(4), Krug(10)]))",
        "hint": "return sum(o.povrsina() for o in oblici)"
      }
    ],
    "quiz": [
      {
        "question": "Čemu služi specijalna metoda __str__ u klasi?",
        "options": [
          "Definiše čitljiv tekstualni prikaz objekta kada pozovemo print(objekat)",
          "Briše stringove",
          "Poredi dva broja",
          "Kreira novu klasu"
        ],
        "correct": 0,
        "explanation": "Bez __str__, print() prikazuje samo memorijsku adresu objekta."
      },
      {
        "question": "Šta omogućava nasleđivanje (class Student(Osoba):)?",
        "options": [
          "Student automatski dobija sve metode i atribute klase Osoba i može dodati svoje",
          "Briše klasu Osoba",
          "Udvostručuje brzinu CPU-a",
          "Onemogućava __init__"
        ],
        "correct": 0,
        "explanation": "Nasleđivanje sprečava dupliranje koda u velikim sistemima."
      },
      {
        "question": "Koju dunder metodu Python poziva kada napišemo obj1 == obj2?",
        "options": [
          "__eq__",
          "__str__",
          "__init__",
          "__add__"
        ],
        "correct": 0,
        "explanation": "__eq__ (equals) definiše logiku operatora jednakosti ==."
      },
      {
        "question": "Šta je polimorfizam u OOP-u?",
        "options": [
          "Sposobnost da različite klase imaju isti naziv metode (npr. povrsina()), ali svaka radi po svojoj formuli",
          "Pisanje programa u jednom redu",
          "Korišćenje samo globalnih promenljivih",
          "Spajanje dve liste"
        ],
        "correct": 0,
        "explanation": "Polimorfizam omogućava pisanje fleksibilnog koda koji radi sa bilo kojom podklasom."
      }
    ]
  },
  {
    "id": "c4-regex-obrasci",
    "title": "6. Regularni Izrazi (Regex / re): Moćna Pretraga Teksta",
    "icon": "🔎",
    "category": "CS101 • Nedelja 5",
    "summary": "Validiraj e-mail adrese, brojeve telefona i izvlači podatke iz teksta u jednoj liniji pomoću modula re.",
    "content": "\n          <p class=\"lead\">Kako veb sajtovi za delić milisekunde znaju da li si uneo ispravnu e-mail adresu ili broj telefona? Odgovor su <strong>Regularni izrazi (Regex)</strong> — mini-jezik za opisivanje obrazaca u tekstu!</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🎯</div>\n            <div class=\"analogy-text\">\n              <strong>Šablon za tekst:</strong> Umesto 20 <code>if</code> uslova, jednim šablonom <code>r\"\\d+\"</code> pronalaziš sve brojeve u celoj knjizi, a sa <code>r\"^[\\w.-]+@[\\w.-]+\\.\\w+$\"</code> proveravaš e-mail!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Izvlačenje svih brojeva iz rečenice:</strong></p>\n            <pre><code>import re\ntekst = \"Narudžbina #402: 3 pice po 950 RSD i 2 soka po 220 RSD.\"\nbrojevi = re.findall(r\"\\d+\", tekst)\nprint(\"Pronađeni brojevi:\", brojevi)</code></pre>\n            <p><strong>Primer 2 — Validacija e-mail adrese:</strong></p>\n            <pre><code>import re\nfor email in [\"ana@primer.rs\", \"pogresan.mejl\", \"vuk@python.org\"]:\n    ok = bool(re.match(r\"^[\\w.-]+@[\\w.-]+\\.\\w+$\", email))\n    print(f\"{email:<18} -> {'✅ Validan' if ok else '❌ Neispravan'}\")</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Zašto uvek pišemo r'...' (Raw string) za Regex?",
      "content": "Slovo r ispred navodnika govori Pythonu da obrnutu kosu crtu \\ ne tumači kao specijalni znak (poput \\n), već da je prosledi direktno Regex motoru!"
    },
    "starterCode": "# Nedelja 5: Regularni izrazi (modul re)\nimport re\n\nporuka = \"Kontaktirajte nas na info@pythonodnule.rs ili podrska@skola.edu.rs!\"\nmejlovi = re.findall(r\"[\\w.-]+@[\\w.-]+\\.\\w+\", poruka)\nprint(\"Izvučene e-mail adrese:\", mejlovi)\n",
    "challenges": [
      {
        "title": "Zadatak 1: Izvuci sve cene (Zagrevanje)",
        "instruction": "Napiši funkciju izvuci_brojeve(tekst) koja pomoću re.findall(r'\\d+', tekst) vraća listu celih brojeva (int) pronađenih u tekstu.",
        "starter": "import re\ndef izvuci_brojeve(tekst):\n    # Vrati listu int-ova koristeći re.findall(r'\\d+', tekst):\n    pass\n\nprint(izvuci_brojeve('Jabuke 120, banane 180'))\n",
        "solution": "import re\ndef izvuci_brojeve(tekst):\n    return [int(x) for x in re.findall(r'\\d+', tekst)]\n\nprint(izvuci_brojeve('Jabuke 120, banane 180'))",
        "hint": "re.findall(r'\\d+', tekst) vraća listu stringova — pretvori ih u int sa [int(x) for x in ...]."
      },
      {
        "title": "Zadatak 2: Validacija e-mail adrese (Primena)",
        "instruction": "Napiši funkciju validan_email(email) koja vraća True ako tekst odgovara obrascu r'^[\\w.-]+@[\\w.-]+\\.\\w+$', inače False.",
        "starter": "import re\ndef validan_email(email):\n    pass\n\nprint(validan_email('tara@dizajn.rs'))\nprint(validan_email('nije_email'))\n",
        "solution": "import re\ndef validan_email(email):\n    return bool(re.match(r'^[\\w.-]+@[\\w.-]+\\.\\w+$', email))\n\nprint(validan_email('tara@dizajn.rs'))\nprint(validan_email('nije_email'))",
        "hint": "return bool(re.match(r'^[\\w.-]+@[\\w.-]+\\.\\w+$', email))"
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Tačka u Regexu hvata SVE!)",
        "instruction": "Kolega je napisao r'\\d+\\.\\d+' bez obrnute kose crte (r'\\d+.\\d+'), pa '12a34' greškom prolazi kao decimalan broj! Popravi regex u je_decimalan(s).",
        "starter": "import re\ndef je_decimalan(s):\n    # Pobegni tačku sa \\. da ne hvata slova!\n    return bool(re.match(r'^\\d+.\\d+$', s))\n\nprint('12.34 ->', je_decimalan('12.34'))\nprint('12a34 ->', je_decimalan('12a34'))\n",
        "solution": "import re\ndef je_decimalan(s):\n    return bool(re.match(r'^\\d+\\.\\d+$', s))\n\nprint('12.34 ->', je_decimalan('12.34'))\nprint('12a34 ->', je_decimalan('12a34'))",
        "hint": "U regexu obična tačka '.' znači 'bilo koji karakter', a '\\.' znači doslovna tačka."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Cenzor brojeva telefona",
        "instruction": "Napiši funkciju sakrij_brojeve(tekst) koja pomoću re.sub(r'\\d', '*', tekst) zamenjuje svaku cifru zvezdicom '*' radi zaštite privatnosti!",
        "starter": "import re\ndef sakrij_brojeve(tekst):\n    pass\n\nprint(sakrij_brojeve('Moj PIN je 4829, telefon 064-123'))\n",
        "solution": "import re\ndef sakrij_brojeve(tekst):\n    return re.sub(r'\\d', '*', tekst)\n\nprint(sakrij_brojeve('Moj PIN je 4829, telefon 064-123'))",
        "hint": "re.sub(r'\\d', '*', tekst) menja svaku pronađenu cifru sa '*'."
      }
    ],
    "quiz": [
      {
        "question": "Šta u regularnom izrazu označava simbol \\d+?",
        "options": [
          "Jednu ili više uzastopnih cifara (0-9)",
          "Jedno slovo",
          "Razmak",
          "Kraj reda"
        ],
        "correct": 0,
        "explanation": "\\d je cifra, a + znači 'jednom ili više puta'."
      },
      {
        "question": "Šta označavaju sidra ^ i $ u obrascu r'^\\d{4}$'?",
        "options": [
          "Početak (^) i kraj ($) teksta — ceo string mora biti tačno 4 cifre",
          "Sabiranje i dolare",
          "Velika i mala slova",
          "Komentar"
        ],
        "correct": 0,
        "explanation": "Sidra garantuju da se ceo string poklapa sa šablonom."
      },
      {
        "question": "Zašto tačku u regexu pišemo kao \\. kada tražimo '.com'?",
        "options": [
          "Jer obična tačka (.) u regexu označava bilo koji karakter",
          "Jer je tačka zabranjena u Pythonu",
          "Radi bržeg izvršavanja",
          "Nema razlike"
        ],
        "correct": 0,
        "explanation": "Obrnuta kosa crta escape-uje tačku da znači doslovnu tačku."
      },
      {
        "question": "Koja funkcija iz modula re služi za zamenu svih poklapanja novim tekstom?",
        "options": [
          "re.sub()",
          "re.replace()",
          "re.change()",
          "re.swap()"
        ],
        "correct": 0,
        "explanation": "re.sub(obrazac, zamena, tekst) vrši regex zamenu."
      }
    ]
  },
  {
    "id": "c4-unit-testovi",
    "title": "7. Automatsko Testiranje Koda (Unit Testovi & TDD)",
    "icon": "🧪",
    "category": "CS101 • Nedelja 6",
    "summary": "Piši kod koji sam testira tvoje funkcije pomoću assert naredbi i rubnih slučajeva (edge cases).",
    "content": "\n          <p class=\"lead\">U pravim IT kompanijama nijedna linija koda ne ide u produkciju bez <strong>automatskih Unit Testova</strong> — koda koji za delić sekunde proverava da li tvoje funkcije rade i na čudnim, rubnim ulazima!</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🧪</div>\n            <div class=\"analogy-text\">\n              <strong>Testovi su sigurnosna mreža:</strong> Kada za 6 meseci menjaš program, jednim pokretanjem <code>assert</code> testova odmah znaš da nisi slučajno pokvario stari deo koda!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Testiranje funkcije na normalnim i rubnim slučajevima:</strong></p>\n            <pre><code>def je_palindrom(rec):\n    cisto = rec.strip().lower()\n    return cisto == cisto[::-1]\n\nassert je_palindrom(\"Ana\") is True\nassert je_palindrom(\"radar\") is True\nassert je_palindrom(\"Python\") is False\nassert je_palindrom(\"\") is True  # Rubni slučaj!\nprint(\"✅ Svi unit testovi su prošli!\")</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Šta su rubni slučajevi (Edge Cases)?",
      "content": "Prazna lista [], broj 0, negativan broj -5, prazan string '' — 80% bagova u stvarnom softveru dešava se upravo na rubnim slučajevima!"
    },
    "starterCode": "# Nedelja 6: Pisanje sopstvenih Unit Testova sa assert\ndef saberi_pozitivne(lista):\n    return sum(x for x in lista if x > 0)\n\nassert saberi_pozitivne([1, -2, 3, 4]) == 8\nassert saberi_pozitivne([-5, -1]) == 0\nassert saberi_pozitivne([]) == 0\nprint(\"✅ Svi testovi prošli bez greške!\")\n",
    "challenges": [
      {
        "title": "Zadatak 1: Prosek bez pucanja na praznoj listi (Zagrevanje)",
        "instruction": "Napiši funkciju bezbedan_prosek(brojevi) koja vraća prosek liste, a za praznu listu [] bezbedno vraća 0 (ne sme baciti ZeroDivisionError!).",
        "starter": "def bezbedan_prosek(brojevi):\n    pass\n\nassert bezbedan_prosek([10, 20]) == 15\nassert bezbedan_prosek([]) == 0\nprint('✅ Test prošao!')\n",
        "solution": "def bezbedan_prosek(brojevi):\n    if not brojevi:\n        return 0\n    return sum(brojevi) / len(brojevi)\n\nassert bezbedan_prosek([10, 20]) == 15\nassert bezbedan_prosek([]) == 0\nprint('✅ Test prošao!')",
        "hint": "Prvo proveri if not brojevi: return 0, pa onda return sum(brojevi) / len(brojevi)."
      },
      {
        "title": "Zadatak 2: Palindrom otporan na razmake i velika slova (Primena)",
        "instruction": "Napiši funkciju je_palindrom(tekst) koja ignoriše razmake i velika/mala slova (npr. 'Ana voli Milovana' -> True, 'Python' -> False).",
        "starter": "def je_palindrom(tekst):\n    # Ukloni razmake sa .replace(' ', '') i prebaci u .lower():\n    pass\n\nprint(je_palindrom('Ana voli Milovana'))\nprint(je_palindrom('Python'))\n",
        "solution": "def je_palindrom(tekst):\n    cisto = tekst.replace(' ', '').lower()\n    return cisto == cisto[::-1]\n\nprint(je_palindrom('Ana voli Milovana'))\nprint(je_palindrom('Python'))",
        "hint": "cisto = tekst.replace(' ', '').lower(); return cisto == cisto[::-1]"
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Pogrešan rubni slučaj za 0!)",
        "instruction": "Funkcija je_punoletan(godine) vraća True čak i za negativne godine ili tekst! Popravi je da za godine < 0 ili >= 150 vrati False, a True samo za 18 <= godine < 150.",
        "starter": "def je_punoletan(godine):\n    # Popravi uslov da odbije nerealne vrednosti (>= 150 ili < 0):\n    return godine >= 18\n\nprint('25 ->', je_punoletan(25))\nprint('200 ->', je_punoletan(200))\n",
        "solution": "def je_punoletan(godine):\n    return 18 <= godine < 150\n\nprint('25 ->', je_punoletan(25))\nprint('200 ->', je_punoletan(200))",
        "hint": "return 18 <= godine < 150"
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Validacija jake lozinke (TDD)",
        "instruction": "Napiši funkciju jaka_lozinka(s) koja vraća True SAMO ako lozinka ima najmanje 8 karaktera, bar 1 cifru i bar 1 veliko slovo!",
        "starter": "def jaka_lozinka(s):\n    # Proveri len(s) >= 8, any(c.isdigit()...) i any(c.isupper()...)\n    pass\n\nprint('Tajna123 ->', jaka_lozinka('Tajna123'))\nprint('slaba ->', jaka_lozinka('slaba'))\n",
        "solution": "def jaka_lozinka(s):\n    if len(s) < 8:\n        return False\n    ima_cifru = any(c.isdigit() for c in s)\n    ima_veliko = any(c.isupper() for c in s)\n    return ima_cifru and ima_veliko\n\nprint('Tajna123 ->', jaka_lozinka('Tajna123'))\nprint('slaba ->', jaka_lozinka('slaba'))",
        "hint": "Koristi any(c.isdigit() for c in s) i any(c.isupper() for c in s)."
      }
    ],
    "quiz": [
      {
        "question": "Šta se dešava kada uslov iza naredbe assert nije tačan (False)?",
        "options": [
          "Program odmah baca AssertionError",
          "Program nastavlja dalje bez upozorenja",
          "Briše funkciju",
          "Vraća True"
        ],
        "correct": 0,
        "explanation": "assert odmah zaustavlja test sa AssertionError kada se očekivano i dobijeno ne poklapaju."
      },
      {
        "question": "Šta je TDD (Test-Driven Development)?",
        "options": [
          "Praksa gde prvo napišemo automatske testove, pa tek onda implementiramo funkciju da testovi prođu",
          "Brisanje testova pre objave",
          "Testiranje samo na kraju godine",
          "Ručno kliktanje"
        ],
        "correct": 0,
        "explanation": "TDD osigurava jasan dizajn funkcija i visoku pouzdanost koda."
      },
      {
        "question": "Koji od navedenih ulaza je tipičan 'rubni slučaj' (edge case) za funkciju koja prima listu?",
        "options": [
          "Prazna lista [] ili lista sa jednim elementom",
          "Lista od 5 običnih brojeva",
          "Komentar u kodu",
          "Ime funkcije"
        ],
        "correct": 0,
        "explanation": "Prazne kolekcije najčešće izazivaju ZeroDivisionError ili IndexError."
      },
      {
        "question": "Koji je najpopularniji Python alat za pokretanje stotina unit testova u IT firmama?",
        "options": [
          "pytest",
          "printtest",
          "pydraw",
          "pymath"
        ],
        "correct": 0,
        "explanation": "pytest je industrijski standard za testiranje Python aplikacija (i na CS50P!)."
      }
    ]
  },
  {
    "id": "c4-json-csv-api",
    "title": "8. Podaci u Stvarnom Svetu: JSON, CSV i Web API-ji",
    "icon": "🌐",
    "category": "CS101 • Nedelja 7",
    "summary": "Nauči kako aplikacije razmenjuju podatke preko interneta koristeći JSON format i CSV tabele.",
    "content": "\n          <p class=\"lead\">Kada tvoj telefon učita vremensku prognozu, kurs evra ili poruke, server mu šalje tekst u <strong>JSON</strong> formatu — univerzalnom jeziku interneta koji izgleda gotovo identično kao Python rečnici i liste!</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">📦</div>\n            <div class=\"analogy-text\">\n              <strong>Serijalizacija (<code>json.dumps</code> / <code>json.loads</code>):</strong> <code>dumps</code> pakuje tvoj Python rečnik u JSON tekst za slanje preko mreže, a <code>loads</code> ga raspakuje nazad u pravi Python rečnik!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Parsiranje JSON odgovora Web API-ja:</strong></p>\n            <pre><code>import json\napi_odgovor = '{\"grad\": \"Beograd\", \"temp\": 23.5, \"uslovi\": [\"Sunčano\", \"Vetar\"]}'\npodaci = json.loads(api_odgovor)\nprint(f\"Grad: {podaci['grad']} | Temp: {podaci['temp']}°C | {podaci['uslovi'][0]}\")</code></pre>\n            <p><strong>Primer 2 — Parsiranje CSV tabele (vrednosti odvojene zarezom):</strong></p>\n            <pre><code>csv_tekst = \"Ana,95\\nMarko,82\\nJelena,100\"\nfor red in csv_tekst.splitlines():\n    ime, poeni = red.split(\",\")\n    print(f\"{ime:<8} -> {int(poeni)} poena\")</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "JSON u Pythonu radi i u našem brauzeru!",
      "content": "Naš tim je ugradio punu podršku za import json (loads i dumps) direktno u brauzer, pa možeš vežbati realne API odgovore bez instalacije!"
    },
    "starterCode": "# Nedelja 7: Rad sa JSON podacima\nimport json\n\nkorisnik = {\"ime\": \"Tara\", \"uloga\": \"Dizajner\", \"xp\": 1250}\njson_string = json.dumps(korisnik)\nprint(\"JSON za slanje na server:\", json_string)\n\nucitano = json.loads(json_string)\nprint(\"Raspakovano nazad u Python:\", ucitano[\"ime\"], \"->\", ucitano[\"xp\"])\n",
    "challenges": [
      {
        "title": "Zadatak 1: Čitanje cene iz JSON odgovora (Zagrevanje)",
        "instruction": "Napiši funkciju izvuci_cenu(json_str) koja parsira JSON string (npr. '{\"artikal\": \"Laptop\", \"cena\": 850}') i vraća brojčanu cenu (850).",
        "starter": "import json\ndef izvuci_cenu(json_str):\n    pass\n\nprint(izvuci_cenu('{\"artikal\": \"Laptop\", \"cena\": 850}'))\n",
        "solution": "import json\ndef izvuci_cenu(json_str):\n    return json.loads(json_str)['cena']\n\nprint(izvuci_cenu('{\"artikal\": \"Laptop\", \"cena\": 850}'))",
        "hint": "data = json.loads(json_str); return data['cena']"
      },
      {
        "title": "Zadatak 2: Zbir iz CSV tabele (Primena)",
        "instruction": "Napiši funkciju zbir_csv(csv_tekst) gde svaki red ima 'artikal,cena' (npr. 'Hleb,90\\nMleko,150') i vraća ukupan zbir svih cena (240).",
        "starter": "def zbir_csv(csv_tekst):\n    ukupno = 0\n    # Razbij redove sa .splitlines(), pa svaki red sa .split(',')\n    return ukupno\n\nprint(zbir_csv('Hleb,90\\nMleko,150'))\n",
        "solution": "def zbir_csv(csv_tekst):\n    ukupno = 0\n    for red in csv_tekst.splitlines():\n        if red.strip():\n            delovi = red.split(',')\n            ukupno += int(delovi[1])\n    return ukupno\n\nprint(zbir_csv('Hleb,90\\nMleko,150'))",
        "hint": "Za svaki neprazan red uradi delovi = red.split(',') i ukupno += int(delovi[1])."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Neispravan JSON bez try/except)",
        "instruction": "Funkcija bezbedan_json(s) puca kada server vrati oštećen JSON! Dodaj try/except da u slučaju greške vrati prazan rečnik {}.",
        "starter": "import json\ndef bezbedan_json(s):\n    # Obmotaj u try / except da ne puca na lošem JSON-u:\n    return json.loads(s)\n\nprint(bezbedan_json('{\"ok\": 1}'))\nprint(bezbedan_json('{pokvareno'))\n",
        "solution": "import json\ndef bezbedan_json(s):\n    try:\n        return json.loads(s)\n    except Exception:\n        return {}\n\nprint(bezbedan_json('{\"ok\": 1}'))\nprint(bezbedan_json('{pokvareno'))",
        "hint": "Stavi return json.loads(s) u try:, a u except Exception: vrati {}."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: Analizator API liste proizvoda",
        "instruction": "Napiši funkciju najskuplji_proizvod(json_lista) koja iz JSON niza proizvoda (npr. '[{\"naziv\":\"Miš\",\"cena\":25},{\"naziv\":\"Monitor\",\"cena\":300}]') vraća naziv najskupljeg proizvoda ('Monitor').",
        "starter": "import json\ndef najskuplji_proizvod(json_lista):\n    pass\n\ndata = '[{\"naziv\":\"Miš\",\"cena\":25},{\"naziv\":\"Monitor\",\"cena\":300}]'\nprint('Najskuplji:', najskuplji_proizvod(data))\n",
        "solution": "import json\ndef najskuplji_proizvod(json_lista):\n    stavke = json.loads(json_lista)\n    naj = max(stavke, key=lambda x: x['cena'])\n    return naj['naziv']\n\ndata = '[{\"naziv\":\"Miš\",\"cena\":25},{\"naziv\":\"Monitor\",\"cena\":300}]'\nprint('Najskuplji:', najskuplji_proizvod(data))",
        "hint": "Parsiraj sa json.loads(), pa pronađi stavku sa najvećom cenom pomoću max(..., key=lambda x: x['cena'])."
      }
    ],
    "quiz": [
      {
        "question": "Šta radi funkcija json.loads(tekst)?",
        "options": [
          "Pretvara JSON tekst (string) u Python rečnik ili listu",
          "Briše JSON fajl",
          "Šalje email",
          "Pretvara rečnik u string"
        ],
        "correct": 0,
        "explanation": "loads = load string (iz teksta u Python objekat), dumps = dump string (iz objekta u tekst)."
      },
      {
        "question": "Koje navodnike JSON standard OBAVEZNO zahteva za ključeve i stringove?",
        "options": [
          "Dvostruke navodnike (\"...\")",
          "Jednostruke navodnike ('...')",
          "Bez navodnika",
          "Kose crte"
        ],
        "correct": 0,
        "explanation": "U strogom JSON-u svi ključevi i tekstovi moraju imati dvostruke navodnike."
      },
      {
        "question": "Šta znači skraćenica CSV?",
        "options": [
          "Comma-Separated Values (vrednosti odvojene zarezom)",
          "Code Style Version",
          "Central Server Variable",
          "Cloud Storage View"
        ],
        "correct": 0,
        "explanation": "CSV je najčešći tabelarni format za razmenu podataka sa Excel-om i bazama."
      },
      {
        "question": "Zašto pri parsiranju eksternog API odgovora uvek koristimo try/except?",
        "options": [
          "Jer mreža ili server mogu vratiti neispravan ili prazan tekst koji bi srušio aplikaciju",
          "Zato što Python zabranjuje json bez try",
          "Da bi JSON bio brži",
          "Samo za brojeve"
        ],
        "correct": 0,
        "explanation": "Defanzivno programiranje štiti aplikaciju od neočekivanih odgovora sa mreže."
      }
    ]
  },
  {
    "id": "c4-baze-i-sql",
    "title": "9. Relacione Baze Podataka i SQL Kroz Python",
    "icon": "🗄️",
    "category": "CS101 • Nedelja 8",
    "summary": "Razumi tabele, primarne ključeve, SELECT, WHERE, ORDER BY, GROUP BY i JOIN — kroz naš interaktivni Python SQL koncept!",
    "content": "\n          <p class=\"lead\">Fajlovi su odlični za male beleške, ali kada imaš <strong>milion korisnika</strong> (kao naša platforma!), potrebna ti je <strong>Relaciona Baza Podataka (PostgreSQL / SQLite)</strong> i jezik <strong>SQL</strong>!</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🗄️</div>\n            <div class=\"analogy-text\">\n              <strong>SQL u jednoj rečenici:</strong> <code>SELECT ime, xp FROM ucenici WHERE xp &gt; 500 ORDER BY xp DESC;</code> — doslovno na engleskom kažeš bazi <em>ŠTA</em> želiš, a baza munjevito pronađe rezultat!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>\n            <p><strong>Primer 1 — Kako SQL <code>WHERE</code> i <code>ORDER BY</code> rade ispod haube u Pythonu:</strong></p>\n            <pre><code>tabela_ucenici = [\n    {\"id\": 1, \"ime\": \"Ana\", \"kurs\": \"CS101\", \"xp\": 850},\n    {\"id\": 2, \"ime\": \"Marko\", \"kurs\": \"Osnove\", \"xp\": 320},\n    {\"id\": 3, \"ime\": \"Luka\", \"kurs\": \"CS101\", \"xp\": 1200}\n]\n# Ekvivalent: SELECT ime, xp FROM ucenici WHERE xp >= 500 ORDER BY xp DESC\nrez = sorted([u for u in tabela_ucenici if u[\"xp\"] >= 500], key=lambda x: x[\"xp\"], reverse=True)\nfor r in rez:\n    print(r[\"ime\"], \"->\", r[\"xp\"], \"XP\")</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Čuvaj se SQL Injection napada!",
      "content": "U pravom SQLite/PostgreSQL kodu NIKADA ne lepi korisnički unos u SQL string pomoću f-stringa (f'WHERE ime={unos}')! Uvek koristi parametrizovane upite: cursor.execute('SELECT * FROM users WHERE ime = ?', (unos,))."
    },
    "starterCode": "# Nedelja 8: Relaciono povezivanje dve tabele (INNER JOIN u Pythonu!)\nkorisnici = [\n    {\"id\": 1, \"ime\": \"Ana\"},\n    {\"id\": 2, \"ime\": \"Marko\"}\n]\nporudzbine = [\n    {\"korisnik_id\": 1, \"proizvod\": \"Python Pro\", \"iznos\": 99},\n    {\"korisnik_id\": 1, \"proizvod\": \"Sertifikat\", \"iznos\": 29},\n    {\"korisnik_id\": 2, \"proizvod\": \"Sertifikat\", \"iznos\": 29}\n]\n\n# Spajanje (JOIN) po korisnik_id == korisnici.id\nmapa = {k[\"id\"]: k[\"ime\"] for k in korisnici}\nfor p in porudzbine:\n    print(f\"{mapa[p['korisnik_id']]} je kupio/la: {p['proizvod']} ({p['iznos']} EUR)\")\n",
    "challenges": [
      {
        "title": "Zadatak 1: SQL WHERE filter (Zagrevanje)",
        "instruction": "Napiši funkciju filtriraj_top(ucenici, prag) koja iz liste rečnika vraća imena svih učenika čiji je 'xp' >= prag.",
        "starter": "def filtriraj_top(ucenici, prag):\n    pass\n\ndb = [{'ime': 'Ana', 'xp': 900}, {'ime': 'Ivo', 'xp': 200}, {'ime': 'Vuk', 'xp': 750}]\nprint(filtriraj_top(db, 500))\n",
        "solution": "def filtriraj_top(ucenici, prag):\n    return [u['ime'] for u in ucenici if u['xp'] >= prag]\n\ndb = [{'ime': 'Ana', 'xp': 900}, {'ime': 'Ivo', 'xp': 200}, {'ime': 'Vuk', 'xp': 750}]\nprint(filtriraj_top(db, 500))",
        "hint": "return [u['ime'] for u in ucenici if u['xp'] >= prag]"
      },
      {
        "title": "Zadatak 2: SQL GROUP BY suma po kategoriji (Primena)",
        "instruction": "Napiši funkciju grupisi_potrosnju(transakcije) koja za listu {'kategorija': ..., 'iznos': ...} vraća rečnik ukupne sume po svakoj kategoriji!",
        "starter": "def grupisi_potrosnju(transakcije):\n    pass\n\ntx = [{'kategorija': 'Hrana', 'iznos': 500}, {'kategorija': 'Knjige', 'iznos': 1200}, {'kategorija': 'Hrana', 'iznos': 700}]\nprint(grupisi_potrosnju(tx))\n",
        "solution": "def grupisi_potrosnju(transakcije):\n    rez = {}\n    for t in transakcije:\n        k = t['kategorija']\n        rez[k] = rez.get(k, 0) + t['iznos']\n    return rez\n\ntx = [{'kategorija': 'Hrana', 'iznos': 500}, {'kategorija': 'Knjige', 'iznos': 1200}, {'kategorija': 'Hrana', 'iznos': 700}]\nprint(grupisi_potrosnju(tx))",
        "hint": "Za svaku transakciju dodaj t['iznos'] na rez[k] pomoću rez.get(k, 0) + t['iznos']."
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (ORDER BY u pogrešnom smeru!)",
        "instruction": "Rang-lista sortira igrače od najmanjeg ka najvećem XP umesto od najvećeg! Dodaj reverse=True u sortiraj_rang(igraci).",
        "starter": "def sortiraj_rang(igraci):\n    return sorted(igraci, key=lambda x: x['xp'])\n\nprint(sortiraj_rang([{'ime': 'A', 'xp': 100}, {'ime': 'B', 'xp': 900}]))\n",
        "solution": "def sortiraj_rang(igraci):\n    return sorted(igraci, key=lambda x: x['xp'], reverse=True)\n\nprint(sortiraj_rang([{'ime': 'A', 'xp': 100}, {'ime': 'B', 'xp': 900}]))",
        "hint": "Dodaj reverse=True u poziv sorted(...)."
      },
      {
        "title": "Zadatak 4: 🏆 Mini-projekat: INNER JOIN u O(n) vremenu",
        "instruction": "Napiši funkciju spoji_kupovine(korisnici, kupovine) koja vraća listu rečnika {'ime': ..., 'iznos': ...} spajajući ih po id == korisnik_id!",
        "starter": "def spoji_kupovine(korisnici, kupovine):\n    mapa = {k['id']: k['ime'] for k in korisnici}\n    # Vrati listu {'ime': mapa[p['korisnik_id']], 'iznos': p['iznos']} za svaku kupovinu gde id postoji u mapi\n    pass\n\nk = [{'id': 1, 'ime': 'Ana'}, {'id': 2, 'ime': 'Vuk'}]\np = [{'korisnik_id': 1, 'iznos': 50}, {'korisnik_id': 2, 'iznos': 120}]\nprint(spoji_kupovine(k, p))\n",
        "solution": "def spoji_kupovine(korisnici, kupovine):\n    mapa = {k['id']: k['ime'] for k in korisnici}\n    return [{'ime': mapa[x['korisnik_id']], 'iznos': x['iznos']} for x in kupovine if x['korisnik_id'] in mapa]\n\nk = [{'id': 1, 'ime': 'Ana'}, {'id': 2, 'ime': 'Vuk'}]\np = [{'korisnik_id': 1, 'iznos': 50}, {'korisnik_id': 2, 'iznos': 120}]\nprint(spoji_kupovine(k, p))",
        "hint": "Iskoristi rečnik mapa za O(1) traženje imena po korisnik_id!"
      }
    ],
    "quiz": [
      {
        "question": "Čemu služi PRIMARY KEY (primarni ključ) u relacionoj tabeli?",
        "options": [
          "Jedinstveno identifikuje svaki red u tabeli (npr. id korisnika)",
          "Šifruje lozinku",
          "Briše duplikate iz RAM-a",
          "Sortira tekst"
        ],
        "correct": 0,
        "explanation": "Primarni ključ garantuje da svaki zapis ima jedinstven identitet."
      },
      {
        "question": "Koja SQL klauzula filtrira redove pre prikaza rezultata?",
        "options": [
          "WHERE",
          "ORDER BY",
          "INSERT",
          "DROP"
        ],
        "correct": 0,
        "explanation": "WHERE definiše uslov filtriranja (ekvivalent Python if-u)."
      },
      {
        "question": "Šta radi SQL JOIN između dve tabele?",
        "options": [
          "Povezuje redove iz dve tabele preko zajedničkog ključa (npr. user_id)",
          "Briše obe tabele",
          "Spaja tekst bez razmaka",
          "Kreira kopiju baze"
        ],
        "correct": 0,
        "explanation": "JOIN je srce relacionih baza — povezuje korisnike sa njihovim porudžbinama, lekcijama ili ocenama."
      },
      {
        "question": "Kako se štitimo od SQL Injection napada u Pythonu?",
        "options": [
          "Korišćenjem parametrizovanih upita (?, %s) umesto lepljenja teksta f-stringom",
          "Dužim imenima tabela",
          "Korišćenjem samo velikih slova",
          "Isključivanjem interneta"
        ],
        "correct": 0,
        "explanation": "Parametrizovani upiti strogo razdvajaju SQL kod od korisničkih podataka."
      }
    ]
  },
  {
    "id": "c4-diplomski-projekat",
    "title": "10. Diplomski Inženjerski Projekat: Mini-Banka (OOP + JSON + Testovi)",
    "icon": "🏆",
    "category": "CS101 • Veliko Finale",
    "summary": "Spoji sve veštine CS101 kursa u jedan pravi, testirani softverski sistem sa OOP klasama, JSON čuvanjem i Unit testovima!",
    "content": "\n          <p class=\"lead\">Stigao si do <strong>Velikog Finala CS101 Pro kursa</strong>! Danas gradiš pravi, proizvodni softverski sistem koji objedinjuje <strong>OOP arhitekturu, Regex validaciju, JSON izvoz i automatske Unit Testove</strong>!</p>\n          <div class=\"analogy-card\">\n            <div class=\"analogy-icon\">🏆</div>\n            <div class=\"analogy-text\">\n              <strong>Tvoj portfolio projekat:</strong> Ovaj sistem možeš odmah da preuzmeš kao <code>.py</code> fajl, postaviš na svoj GitHub profil i pokažeš na tehničkom intervjuu!\n            </div>\n          </div>\n          <div class=\"extra-examples-box\">\n            <h4>🏗️ Arhitektura tvog diplomskog sistema (klikni „▶ Isprobaj u editoru”):</h4>\n            <pre><code>import json\nclass MiniBanka:\n    def __init__(self):\n        self.racuni = {}\n    def otvori(self, ime, pocetno=0):\n        self.racuni[ime] = pocetno\n    def izvezi_json(self):\n        return json.dumps(self.racuni)\n\nb = MiniBanka()\nb.otvori(\"Ana\", 1500)\nb.otvori(\"Marko\", 2300)\nprint(\"JSON izveštaj:\", b.izvezi_json())</code></pre>\n          </div>\n        ",
    "proTip": {
      "title": "Sledeći korak za tvoju karijeru",
      "content": "Sa završenom Trijadom Osnova + CS101 Pro spreman si za realne specijalizacije: Web Backend (FastAPI/Django), Data Science (Pandas/NumPy) ili Automatizaciju!"
    },
    "starterCode": "# Nedelja 9: Diplomski projekat — Mini-Banka sa prenosom i JSON izvozom\nimport json\n\nclass Banka:\n    def __init__(self):\n        self.racuni = {}\n\n    def kreiraj_racun(self, ime, stanje=0):\n        self.racuni[ime] = stanje\n\n    def prenos(self, od_koga, kome, iznos):\n        if iznos <= 0 or self.racuni.get(od_koga, 0) < iznos:\n            return False\n        self.racuni[od_koga] -= iznos\n        self.racuni[kome] = self.racuni.get(kome, 0) + iznos\n        return True\n\n    def u_json(self):\n        return json.dumps(self.racuni)\n\nb = Banka()\nb.kreiraj_racun(\"Ana\", 1000)\nb.kreiraj_racun(\"Vuk\", 500)\nb.prenos(\"Ana\", \"Vuk\", 300)\nprint(\"Stanje banke (JSON):\", b.u_json())\n",
    "challenges": [
      {
        "title": "Zadatak 1: Ukupan kapital banke (Zagrevanje)",
        "instruction": "Dodaj metod ukupan_kapital(self) klasi Banka koji vraća zbir stanja na svim računima (npr. Ana 700 + Vuk 800 -> 1500).",
        "starter": "class Banka:\n    def __init__(self):\n        self.racuni = {'Ana': 700, 'Vuk': 800}\n    def ukupan_kapital(self):\n        pass\n\nb = Banka()\nprint('Kapital:', b.ukupan_kapital())\n",
        "solution": "class Banka:\n    def __init__(self):\n        self.racuni = {'Ana': 700, 'Vuk': 800}\n    def ukupan_kapital(self):\n        return sum(self.racuni.values())\n\nb = Banka()\nprint('Kapital:', b.ukupan_kapital())",
        "hint": "return sum(self.racuni.values())"
      },
      {
        "title": "Zadatak 2: Najbogatiji klijent (Primena)",
        "instruction": "Dodaj metod top_klijent(self) koji vraća ime klijenta sa najvećim stanjem na računu (ili None ako nema računa).",
        "starter": "class Banka:\n    def __init__(self, racuni):\n        self.racuni = racuni\n    def top_klijent(self):\n        pass\n\nb = Banka({'Ana': 700, 'Vuk': 1800, 'Tara': 1200})\nprint('Top klijent:', b.top_klijent())\n",
        "solution": "class Banka:\n    def __init__(self, racuni):\n        self.racuni = racuni\n    def top_klijent(self):\n        if not self.racuni:\n            return None\n        return max(self.racuni, key=lambda k: self.racuni[k])\n\nb = Banka({'Ana': 700, 'Vuk': 1800, 'Tara': 1200})\nprint('Top klijent:', b.top_klijent())",
        "hint": "max(self.racuni, key=lambda k: self.racuni[k])"
      },
      {
        "title": "Zadatak 3: 🕵️ Code Review (Negativan prenos krade novac!)",
        "instruction": "Kritičan bezbednosni propust! U metodi prenos(), ako napadač pošalje iznos = -500, on zapravo KRADNE 500 od primaoca! Dodaj proveru 'if iznos <= 0: return False'.",
        "starter": "class Banka:\n    def __init__(self):\n        self.racuni = {'Ana': 1000, 'Haker': 100}\n    def prenos(self, od_koga, kome, iznos):\n        # Dodaj zaštitu od negativnog iznosa (iznos <= 0)!\n        if self.racuni.get(od_koga, 0) < iznos:\n            return False\n        self.racuni[od_koga] -= iznos\n        self.racuni[kome] += iznos\n        return True\n\nb = Banka()\nprint('Napad blokiran?', not b.prenos('Haker', 'Ana', -500))\n",
        "solution": "class Banka:\n    def __init__(self):\n        self.racuni = {'Ana': 1000, 'Haker': 100}\n    def prenos(self, od_koga, kome, iznos):\n        if iznos <= 0 or self.racuni.get(od_koga, 0) < iznos:\n            return False\n        self.racuni[od_koga] -= iznos\n        self.racuni[kome] += iznos\n        return True\n\nb = Banka()\nprint('Napad blokiran?', not b.prenos('Haker', 'Ana', -500))",
        "hint": "Dodaj 'iznos <= 0 or' na početak if uslova."
      },
      {
        "title": "Zadatak 4: 🏆 Diplomski Test-Suite (Kompletna klasa + JSON)",
        "instruction": "Napravi klasu Novcanik(vlasnik, stanje=0) sa metodama uplati(iznos), plati(iznos) (odbija ako iznos <= 0 ili > stanje) i izvestaj_json() koji vraća JSON string sa ključevima 'vlasnik' i 'stanje'!",
        "starter": "import json\nclass Novcanik:\n    def __init__(self, vlasnik, stanje=0):\n        self.vlasnik = vlasnik\n        self.stanje = stanje\n    def uplati(self, iznos):\n        pass\n    def plati(self, iznos):\n        pass\n    def izvestaj_json(self):\n        pass\n\nn = Novcanik('Milica', 500)\nn.uplati(300)\nn.plati(200)\nprint(n.izvestaj_json())\n",
        "solution": "import json\nclass Novcanik:\n    def __init__(self, vlasnik, stanje=0):\n        self.vlasnik = vlasnik\n        self.stanje = stanje\n    def uplati(self, iznos):\n        if iznos > 0:\n            self.stanje += iznos\n            return True\n        return False\n    def plati(self, iznos):\n        if 0 < iznos <= self.stanje:\n            self.stanje -= iznos\n            return True\n        return False\n    def izvestaj_json(self):\n        return json.dumps({'vlasnik': self.vlasnik, 'stanje': self.stanje})\n\nn = Novcanik('Milica', 500)\nn.uplati(300)\nn.plati(200)\nprint(n.izvestaj_json())",
        "hint": "uplati dodaje ako je iznos > 0, plati oduzima ako je 0 < iznos <= self.stanje, a izvestaj_json vraća json.dumps({'vlasnik': self.vlasnik, 'stanje': self.stanje})."
      }
    ],
    "quiz": [
      {
        "question": "Zašto prenos(od, ka, -500) bez provere iznos <= 0 predstavlja ozbiljan bezbednosni bag?",
        "options": [
          "Jer oduzimanje negativnog broja (- (-500)) dodaje novac napadaču i skida žrtvi",
          "Jer Python ne podržava negativne brojeve",
          "Jer briše JSON",
          "Nema opasnosti"
        ],
        "correct": 0,
        "explanation": "Validacija granica (iznos > 0) je osnovni stub bezbednog finansijskog softvera!"
      },
      {
        "question": "Koji princip spaja podatke (self.racuni) i operacije (uplati, prenos) u jednu klasu?",
        "options": [
          "Enkapsulacija (OOP)",
          "Rekurzija",
          "Binarna pretraga",
          "SQL Injection"
        ],
        "correct": 0,
        "explanation": "Enkapsulacija drži stanje i pravila izmene tog stanja na jednom bezbednom mestu."
      },
      {
        "question": "Šta vraća sum(recnik.values())?",
        "options": [
          "Zbir svih numeričkih vrednosti u rečniku",
          "Broj ključeva",
          "Prvu vrednost",
          "JSON string"
        ],
        "correct": 0,
        "explanation": ".values() daje sve vrednosti, a sum() ih sabira."
      },
      {
        "question": "Šta čini profesionalan diplomski projekat spremnim za GitHub i poslodavce?",
        "options": [
          "Čista OOP struktura, validacija ulaza, obrada grešaka i automatski Unit testovi",
          "1000 linija u jednoj funkciji bez komentara",
          "Globalne promenljive svuda",
          "Ignorisanje svih izuzetaka"
        ],
        "correct": 0,
        "explanation": "Čitljiv, modularan i testiran kod je ono što IT kompanije najviše cene."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_KURS_4 };
}
