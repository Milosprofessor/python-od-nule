/**
 * Baza kurseva i lekcija za platformu "Python Od Nule"
 * 
 * TRIJADA OSNOVA:
 * - KURS 1: Python Osnove 1 (Prvi koraci - Početni nivo)
 * - KURS 2: Python Osnove 2 (Praktičar & Mini-Projekti - Srednji nivo osnova)
 */

// ============================================================================
// KURS 1: PYTHON OSNOVE 1 (Prvi koraci - Početni nivo)
// ============================================================================
const LESSONS_KURS_1 = [
  {
    id: "uvod-print",
    title: "1. Zdravo Svete! (Tvoj prvi program)",
    icon: "👋",
    category: "Početni nivo",
    summary: "Saznaj šta je programiranje i nateraj računar da izgovori tvoje prve reči uz print().",
    content: `
      <p class="lead">Dobrodošao u svet programiranja! Nemoj da se plašiš – programiranje nije magija, već veština <strong>davanja preciznih instrukcija</strong> računaru.</p>

      <div class="analogy-card">
        <div class="analogy-icon">👨‍🍳</div>
        <div class="analogy-text">
          <strong>Zamisli to ovako:</strong> Računar je kao neverovatno brz, ali doslovan kuvar. Ako mu kažeš <em>"dodaj so"</em>, on će pitati <em>"koliko grama i u koji lonac?"</em>. Ako mu daš tačan recept, napraviće savršeno jelo!
        </div>
      </div>

      <h3>Tvoja prva komanda: <code>print()</code></h3>
      <p>U Pythonu, komanda <code>print()</code> služi da računar <strong>ispiše</strong> nešto na ekranu (u takozvanu <em>konzolu</em> ili <em>terminal</em>).</p>

      <div class="code-explain">
        <pre><code class="language-python">print("Zdravo, svete!")</code></pre>
        <ul>
          <li><code>print</code> je ime funkcije (komande).</li>
          <li>U zagradama <code>( )</code> stavljamo ono što želimo da ispišemo.</li>
          <li>Navodnici <code>" "</code> govore Pythonu: <em>"Ovo je običan tekst, ne traži skriveno značenje, samo ga prepiši!"</em></li>
        </ul>
      </div>

      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div><strong>Pazi na navodnike:</strong> Možeš koristiti jednostruke <code>'tekst'</code> ili dvostruke <code>"tekst"</code> navodnike, samo pazi da ih ne mešaš u istoj rečenici. Ako zaboraviš navodnik, računar će se zbuniti i javiti <em>SyntaxError</em>.</div>
      </div>
    `,
    starterCode: `# Tvoj prvi program!
print("Zdravo, svete! Ja učim Python!")
print("Danas je sjajan dan za programiranje 🚀")
`,
    challenges: [
      {
        title: "Zadatak 1: Predstavi se",
        instruction: "U editoru ispod, napiši program koji u dva reda ispisuje tvoje ime i tvoju omiljenu hranu ili hobi.",
        starter: `# Napiši svoj kod ispod:
print("Moje ime je ...")
`,
        solution: `print("Moje ime je Nikola")\nprint("Moja omiljena hrana je pizza 🍕")`,
        hint: "Iskoristi dve print() naredbe, svaku u novom redu, i ne zaboravi navodnike unutar zagrada."
      },
      {
        title: "Zadatak 2: Crtež zvezdicama",
        instruction: "Iskoristi print komande da dovršiš crtež jelke pomoću zvezdica (*).",
        starter: `print("   *   ")
print("  ***  ")
print(" ***** ")
# Dodaj stablo jelke ispod (npr. "| |"):
`,
        solution: `print("   *   ")\nprint("  ***  ")\nprint(" ***** ")\nprint("*******")\nprint("  | |  ")`,
        hint: "Dodaj print('*******') i print('  | |  ')."
      }
    ],
    quiz: {
      question: "Šta će se desiti ako pokreneš komandu: print(Zdravo)?",
      options: [
        { text: "Ispisaće reč Zdravo na ekranu.", correct: false, explanation: "Netačno. Pošto nema navodnika, Python misli da je Zdravo ime promenljive i javiće grešku (NameError)." },
        { text: "Python će prijaviti grešku jer tekst nije pod navodnicima.", correct: true, explanation: "Bravo! Tekst (string) uvek mora biti pod navodnicima (' ili \")." },
        { text: "Program će obrisati sve sa ekrana.", correct: false, explanation: "Netačno. print() samo ispisuje sadržaj." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Funkcija <code>print(*objects, sep=' ', end='\\n')</code> podrazumevano koristi razmak kao separator i znak za novi red <code>\\n</code> na kraju. Možeš proslediti više argumenata odjednom: <code>print('A', 'B', 'C', sep='-')</code> što ispisuje <code>A-B-C</code>!"
    }
  },

  {
    id: "promenljive-tipovi",
    title: "2. Kutije za podatke (Promenljive)",
    icon: "📦",
    category: "Početni nivo",
    summary: "Nauči kako računar pamti podatke – tekst, brojeve i istinite vrednosti u 'kutijama sa etiketama'.",
    content: `
      <p class="lead">Programi moraju da pamte stvari: tvoje ime, broj poena u igrici, cenu artikla... Za to koristimo <strong>promenljive</strong> (eng. <em>variables</em>).</p>

      <div class="analogy-card">
        <div class="analogy-icon">🏷️</div>
        <div class="analogy-text">
          <strong>Zamisli kutiju:</strong> Promenljiva je obična kutija u memoriji računara. Znak jednakosti <code>=</code> ne znači matematičku jednakost, već <strong>"ubaci vrednost sa desne strane u kutiju sa leve strane"</strong>.
        </div>
      </div>

      <h3>Četiri osnovna tipa podataka u Pythonu:</h3>
      <div class="grid-cards">
        <div class="mini-card">
          <h4>1. Tekst (<code>str</code> - String)</h4>
          <p>Tekst pod navodnicima.</p>
          <code>ime = "Ana"</code>
        </div>
        <div class="mini-card">
          <h4>2. Celi brojevi (<code>int</code> - Integer)</h4>
          <p>Brojevi bez zareza.</p>
          <code>godine = 16</code>
        </div>
        <div class="mini-card">
          <h4>3. Decimalni brojevi (<code>float</code>)</h4>
          <p>Brojevi sa tačkom (ne zarez!).</p>
          <code>visina = 1.78</code>
        </div>
        <div class="mini-card">
          <h4>4. Tačno / Netačno (<code>bool</code>)</h4>
          <p>Logičke vrednosti sa velikim slovom.</p>
          <code>voli_programiranje = True</code>
        </div>
      </div>
    `,
    starterCode: `# Kreiramo promenljive (kutije)
ime = "Luka"
nivo = 5
poeni = 150.5
aktivan_igrac = True

# Ispisujemo šta je u kutijama
print("Igrač:", ime)
print("Trenutni nivo:", nivo)
print("Ukupno poena:", poeni)
print("Aktivan:", aktivan_igrac)
`,
    challenges: [
      {
        title: "Zadatak 1: Profil superheroja",
        instruction: "Napravi promenljive za superheroja: 'heroj' (tekst), 'snaga' (ceo broj od 1 do 100), i 'leti' (True ili False). Zatim ih sve ispiši pomoću print().",
        starter: `# Definiši superheroja ovde:


# Ispiši podatke o heroju:

`,
        solution: `heroj = "Batman"\nsnaga = 95\nleti = False\n\nprint("Heroj:", heroj)\nprint("Snaga:", snaga)\nprint("Može da leti:", leti)`,
        hint: "Za tekst koristi navodnike ('Batman'), za broj samo cifru (95), a za istinitost True ili False (sa velikim početnim slovom)."
      },
      {
        title: "Zadatak 2: Zamena kutija",
        instruction: "Imamo a = 10 i b = 20. Zameni im mesta tako da a postane 20, a b postane 10, i ispiši ih.",
        starter: `a = 10
b = 20

# Zameni im mesta ovde:


print("a:", a, "b:", b)
`,
        solution: `a = 10\nb = 20\na, b = b, a\nprint("a:", a, "b:", b)`,
        hint: "U Pythonu možeš napisati elegantno: a, b = b, a u jednoj liniji!"
      }
    ],
    quiz: {
      question: "Koji je tip podatka vrednost: 3.14?",
      options: [
        { text: "int (celi broj)", correct: false, explanation: "int su celi brojevi kao 3, 5, -10 bez decimala." },
        { text: "float (decimalni broj)", correct: true, explanation: "Tačno! Brojevi sa decimalnom tačkom u Pythonu su tipa float." },
        { text: "str (tekst)", correct: false, explanation: "Bio bi str samo ako bi bio pod navodnicima: \"3.14\"." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Python koristi <strong>dinamičko tipiziranje</strong> i <em>reference na objekte</em>. Kada napišeš <code>x = 10</code>, Python u memoriji kreira celobrojni objekat 10, a promenljiva <code>x</code> je samo pokazivač (referenca) na taj objekat. Funkcija <code>type(promenljiva)</code> otkriva tip u letu!"
    }
  },

  {
    id: "matematika-stringovi",
    title: "3. Matematika i magija teksta",
    icon: "⚡",
    category: "Početni nivo",
    summary: "Računaj kao digitron i spajaj reči pomoću modernih f-stringova.",
    content: `
      <p class="lead">Python je fantastičan digitron! Može da računa trenutno, ali i da se igra rečima kao sa lego kockicama.</p>

      <h3>Osnovne matematičke operacije:</h3>
      <table class="simple-table">
        <thead>
          <tr><th>Operacija</th><th>Znak</th><th>Primer</th><th>Rezultat</th></tr>
        </thead>
        <tbody>
          <tr><td>Sabiranje</td><td><code>+</code></td><td><code>10 + 5</code></td><td><code>15</code></td></tr>
          <tr><td>Oduzimanje</td><td><code>-</code></td><td><code>10 - 3</code></td><td><code>7</code></td></tr>
          <tr><td>Množenje</td><td><code>*</code></td><td><code>4 * 3</code></td><td><code>12</code></td></tr>
          <tr><td>Deljenje</td><td><code>/</code></td><td><code>10 / 2</code></td><td><code>5.0</code> (uvek float!)</td></tr>
          <tr><td>Celobrojno deljenje</td><td><code>//</code></td><td><code>10 // 3</code></td><td><code>3</code> (odbacuje ostatak)</td></tr>
          <tr><td>Ostatak pri deljenju</td><td><code>%</code></td><td><code>10 % 3</code></td><td><code>1</code> (modulo)</td></tr>
          <tr><td>Stepenovanje</td><td><code>**</code></td><td><code>2 ** 3</code></td><td><code>8</code> (2 na treći)</td></tr>
        </tbody>
      </table>

      <h3>Super-moć: f-stringovi (Najbolji način za ispis)</h3>
      <p>Umesto dosadnog lepljenja plusevima, stavi slovo <code>f</code> ispred navodnika i ubaci promenljive u vitičaste zagrade <code>{ }</code>:</p>
      <pre><code class="language-python">ime = "Milica"
godine = 22
print(f"Zdravo, ja sam {ime} i imam {godine} godine!")</code></pre>
    `,
    starterCode: `# Računamo račun u restoranu
cena_pice = 1200
broj_osoba = 4

# Izračunaj koliko svako plaća:
po_osobi = cena_pice / broj_osoba

print(f"Ukupan račun: {cena_pice} dinara")
print(f"Svaka osoba plaća: {po_osobi} dinara")

# Ponavljanje teksta:
print("Bravo! " * 3)
`,
    challenges: [
      {
        title: "Zadatak 1: Pravougaonik",
        instruction: "Imamo pravougaonik stranica a = 8 i b = 5. Izračunaj obim (2*a + 2*b) i površinu (a * b) i ispiši ih pomoću f-stringa.",
        starter: `a = 8
b = 5

# Izračunaj obim i površinu ovde:


# Ispiši rezultate pomoću f-stringa:

`,
        solution: `a = 8\nb = 5\n\nobim = 2 * a + 2 * b\npovrsina = a * b\n\nprint(f"Obim je: {obim}")\nprint(f"Površina je: {povrsina}")`,
        hint: "Formula za obim je 2 * a + 2 * b, a za površinu a * b. Za ispis koristi print(f'Obim: {obim}')."
      }
    ],
    quiz: {
      question: "Koliko je rezultat izraza: 14 % 4 ?",
      options: [
        { text: "3.5", correct: false, explanation: "To bi bilo obično deljenje 14 / 4." },
        { text: "2", correct: true, explanation: "Tačno! 4 ide u 14 tri puta (12), a ostatak je 2!" },
        { text: "3", correct: false, explanation: "3 je celobrojni količnik (14 // 4), a znak % traži ostatak." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Python automatski barata celim brojevima proizvoljne dužine (nema klasičnog 32-bitnog ili 64-bitnog prekoračenja / integer overflow-a kao u C/C++ ili Javi). Možeš izračunati <code>2 ** 1000</code> bez ikakve muke!"
    }
  },

  {
    id: "unos-input",
    title: "4. Razgovaraj sa korisnikom (input)",
    icon: "💬",
    category: "Početni nivo",
    summary: "Neka tvoj program postane interaktivan – pitaj korisnika za unos sa tastature.",
    content: `
      <p class="lead">Do sada je računar samo pričao, a ti si slušao. Vreme je da program postane <strong>dvosmeran</strong>!</p>

      <h3>Komanda <code>input()</code></h3>
      <p>Kada Python naiđe na <code>input()</code>, on <strong>pauzira program i čeka</strong> da korisnik ukuca nešto na tastaturi i pritisne <em>Enter</em>.</p>

      <pre><code class="language-python">ime = input("Kako se zoveš? ")
print(f"Drago mi je, {ime}!")</code></pre>

      <div class="tip-box">
        <span class="tip-icon">🚨</span>
        <div>
          <strong>Najvažnija caka u Pythonu:</strong> <code>input()</code> <em>UVEK</em> vraća tekst (string), čak i ako ukucaš broj <code>25</code>!<br>
          Ako želiš da računaš sa tim brojem, moraš ga pretvoriti u broj pomoću <code>int()</code> ili <code>float()</code>:
          <pre><code class="language-python">godine = int(input("Koliko imaš godina? "))</code></pre>
        </div>
      </div>
    `,
    starterCode: `# Isprobaj interaktivni unos!
ime = input("Kako se zoveš? ")
grad = input("Iz kog si grada? ")

print(f"Pozdrav za {ime} iz divnog mesta {grad}! 🎉")
`,
    challenges: [
      {
        title: "Zadatak 1: Za 10 godina",
        instruction: "Napravi program koji pita korisnika koliko ima godina, a zatim ispisuje koliko će godina imati tačno za 10 godina.",
        starter: `# Pitaj korisnika za godine (ne zaboravi int!):


# Izračunaj i ispiši godine za deceniju:

`,
        solution: `godine = int(input("Koliko imaš godina? "))\nbuduce_godine = godine + 10\nprint(f"Za 10 godina imaćeš {buduce_godine} godina!")`,
        hint: "Obavezno obmotaj input u int: int(input('Unesi godine: ')), pa dodaj 10."
      }
    ],
    quiz: {
      question: "Šta se dešava ako pokreneš: a = input() [korisnik unese 5] i onda: print(a * 2)?",
      options: [
        { text: "Ispisaće se 10", correct: false, explanation: "Pošto je 'a' string \"5\", množenje sa 2 duplira tekst!" },
        { text: "Ispisaće se 55", correct: true, explanation: "Tako je! Tekst '5' ponovljen dva puta daje '55'. Da bi dobio 10, treba ti int(a) * 2." },
        { text: "Prijaviće grešku", correct: false, explanation: "U Pythonu je dozvoljeno množiti tekst brojem ('Ha' * 3 = 'HaHaHa')." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Konverzija tipova se naziva <em>type casting</em>. Ako korisnik unese slova umesto cifara u <code>int()</code>, baciće se <code>ValueError</code>. U naprednijim programima ovo rešavamo pomoću <code>try...except</code> blokova kako program ne bi 'pukao'."
    }
  },

  {
    id: "uslovi-if-else",
    title: "5. Donošenje odluka (if, elif, else)",
    icon: "🚦",
    category: "Srednji nivo",
    summary: "Nauči računar da razmišlja i bira put: 'Ako je uslov ispunjen uradi ovo, inače uradi ono'.",
    content: `
      <p class="lead">Život je pun odluka: <em>Ako pada kiša, ponesi kišobran. Inače, ponesi naočare za sunce.</em> Računari donose odluke na potpuno isti način!</p>

      <div class="analogy-card">
        <div class="analogy-icon">🔀</div>
        <div class="analogy-text">
          <strong>Raskrsnica na putu:</strong> Naredba <code>if</code> proverava uslov. Ako je uslov <code>True</code>, skreće u tu ulicu. Ako nije, produžava dalje do <code>elif</code> (skraćeno od <em>else if</em>) ili konačnog <code>else</code>.
        </div>
      </div>

      <h3>Operatori poređenja:</h3>
      <p><code>==</code> (jednako je), <code>!=</code> (različito), <code>&gt;</code> (veće), <code>&lt;</code> (manje), <code>&gt;=</code> (veće ili jednako), <code>&lt;=</code> (manje ili jednako).</p>

      <div class="tip-box">
        <span class="tip-icon">📐</span>
        <div>
          <strong>Uvlačenje koda (Indentacija):</strong> U Pythonu nema vitičastih zagrada kao u C-u ili JavaScriptu. Sve linije koje pripadaju <code>if</code> bloku <strong>moraju biti uvučene za 4 razmaka (ili jedan Tab)</strong>!
        </div>
      </div>
    `,
    starterCode: `# Čuvar na ulazu u bioskop za film (12+ godina)
godine = 15

if godine >= 18:
    print("Možeš da gledaš sve filmove! 🍿")
elif godine >= 12:
    print("Možeš da gledaš film uz odobrenje roditelja! 🎬")
else:
    print("Žao nam je, film je za starije. 🚸")
`,
    challenges: [
      {
        title: "Zadatak 1: Stanje vode",
        instruction: "Napiši program koji proverava temperaturu vode: ako je <= 0 ispiši 'Led 🧊', ako je >= 100 ispiši 'Para 💨', inače ispiši 'Tečna voda 💧'.",
        starter: `temperatura = 25

# Tvoj if-elif-else kod ovde:

`,
        solution: `temperatura = 25\n\nif temperatura <= 0:\n    print("Led 🧊")\nelif temperatura >= 100:\n    print("Para 💨")\nelse:\n    print("Tečna voda 💧")`,
        hint: "Koristi if temperatura <= 0, zatim elif temperatura >= 100, i na kraju else:."
      }
    ],
    quiz: {
      question: "Koja je razlika između znaka '=' i znaka '=='?",
      options: [
        { text: "Nema razlike, rade istu stvar.", correct: false, explanation: "Ima ogromne razlike!" },
        { text: "'=' dodeljuje vrednost u kutiju, a '==' proverava da li su dve stvari jednake.", correct: true, explanation: "Tačno! a = 5 postavlja vrednost, a if a == 5 pita da li je a jednako 5." },
        { text: "'==' služi samo za brojeve, a '=' za tekst.", correct: false, explanation: "Oba operatora rade sa svim tipovima podataka." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Python podržava prelepe lančane komparacije koje retko koji jezik ima: možeš direktno pisati <code>if 0 < x < 100:</code> umesto <code>if x > 0 and x < 100:</code>! Takođe, prazne kolekcije, broj 0 i None se automatski tretiraju kao 'falsy' (lažne) vrednosti."
    }
  },

  {
    id: "petlje-loops",
    title: "6. Ponavljanje bez muke (Petlje - for i while)",
    icon: "🔄",
    category: "Srednji nivo",
    summary: "Zaboravi na dosadno prepisivanje – nateraj računar da ponovi radnju 5, 100 ili milion puta.",
    content: `
      <p class="lead">Šta ako treba da ispišeš brojeve od 1 do 100? Nećeš valjda pisati sto print naredbi! Zato postoje <strong>petlje</strong> (eng. <em>loops</em>).</p>

      <h3>1. <code>for</code> petlja (Kada znaš koliko puta ponavljaš)</h3>
      <p>Funkcija <code>range(5)</code> generiše brojeve od 0 do 4 (ukupno 5 brojeva):</p>
      <pre><code class="language-python">for i in range(5):
    print(f"Ponavljanje broj: {i}")</code></pre>

      <h3>2. <code>while</code> petlja (Ponavljaj dokle god važi uslov)</h3>
      <p>Kao dok jedeš supu: <em>Dokle god ima supe u tanjiru, uzimaj kašiku!</em></p>
      <pre><code class="language-python">broj = 3
while broj > 0:
    print(broj)
    broj = broj - 1
print("Poletanje! 🚀")</code></pre>

      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div><strong>Pazi na beskonačnu petlju:</strong> Ako zaboraviš da smanjiš ili promeniš uslov u <code>while</code> petlji, ona će se vrteti zauvek dok ne prekineš program!</div>
      </div>
    `,
    starterCode: `# 1. Primer for petlje:
print("Brojimo od 1 do 5:")
for broj in range(1, 6):
    print(f"Broj: {broj}")

print("---")

# 2. Primer odbrojavanja:
tajmer = 3
while tajmer > 0:
    print(f"Još samo {tajmer} sekunde...")
    tajmer = tajmer - 1

print("Vreme je isteklo! ⏰")
`,
    challenges: [
      {
        title: "Zadatak 1: Zbir od 1 do 5",
        instruction: "Napiši for petlju koja računa zbir brojeva od 1 do 5 (1 + 2 + 3 + 4 + 5 = 15) i na kraju ispisuje ukupan zbir.",
        starter: `ukupno = 0

# Tvoja for petlja ovde:


print(f"Ukupan zbir je: {ukupno}")
`,
        solution: `ukupno = 0\n\nfor broj in range(1, 6):\n    ukupno = ukupno + broj\n\nprint(f"Ukupan zbir je: {ukupno}")`,
        hint: "Koristi for broj in range(1, 6): i unutar petlje uvećavaj: ukupno = ukupno + broj."
      }
    ],
    quiz: {
      question: "Koliko puta će se izvršiti petlja: for x in range(3)?",
      options: [
        { text: "2 puta (0 i 1)", correct: false, explanation: "range(3) ide do 3, ali ne uključuje 3, pa uzima 0, 1 i 2." },
        { text: "3 puta (za vrednosti 0, 1, 2)", correct: true, explanation: "Tačno! Broji se od nule: 0, 1, 2 – ukupno tri prolaza." },
        { text: "4 puta (od 0 do 3)", correct: false, explanation: "Gornja granica u range() nikada nije uključena." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Pythonov <code>for</code> je zapravo <em>for-each</em> iterator mehanizam. Objekat <code>range</code> ne pravi listu svih brojeva u memoriji (što bi pojelo RAM za <code>range(1_000_000_000)</code>), već je lenji generator (generator objekat) koji proizvodi brojeve tek na zahtev u O(1) memorijskom prostoru!"
    }
  },

  {
    id: "liste-kolekcije",
    title: "7. Liste i kolekcije (Kupovina, spiskovi)",
    icon: "📋",
    category: "Srednji nivo",
    summary: "Čuvaj gomilu podataka u jednoj promenljivoj – dodaj, briši, sortiraj i pronađi šta ti treba.",
    content: `
      <p class="lead">Šta ako praviš igricu sa 50 različitih neprijatelja ili spisak za kupovinu? Nećeš praviti 50 promenljivih! Koristićeš <strong>listu</strong>.</p>

      <h3>Kako izgleda lista?</h3>
      <p>Lista se piše unutar uglastih zagrada <code>[ ]</code>, a stavke su razdvojene zarezom:</p>
      <pre><code class="language-python">voce = ["Jabuka", "Banana", "Jagoda"]</code></pre>

      <h3>Indeksi (Računari broje od NULE!):</h3>
      <p>Prvi element u listi je uvek na poziciji <code>0</code>:</p>
      <ul>
        <li><code>voce[0]</code> je <code>"Jabuka"</code></li>
        <li><code>voce[1]</code> je <code>"Banana"</code></li>
        <li><code>voce[-1]</code> je <em>poslednji element</em> (<code>"Jagoda"</code>)!</li>
      </ul>

      <h3>Najkorisnije metode za rad sa listama:</h3>
      <ul>
        <li><code>voce.append("Kivi")</code> – dodaje stavku na kraj liste</li>
        <li><code>voce.remove("Banana")</code> – uklanja stavku</li>
        <li><code>len(voce)</code> – vraća koliko elemenata ima u listi</li>
      </ul>
    `,
    starterCode: `# Naš spisak za kupovinu
korpa = ["Hleb", "Mleko", "Čokolada"]

print(f"U korpi imamo {len(korpa)} stvari.")
print(f"Prva stvar je: {korpa[0]}")

# Dodajemo nešto novo
korpa.append("Sladoled")

# Prolazimo kroz sve stavke:
print("\\nCeo spisak:")
for artikal in korpa:
    print(f"- {artikal}")
`,
    challenges: [
      {
        title: "Zadatak 1: Omiljeni filmovi",
        instruction: "Napravi listu od 3 tvoja omiljena filma ili pesme. Zatim pomoću .append() dodaj još jedan, i na kraju ispiši dužinu liste pomoću len().",
        starter: `# Kreiraj listu:
omiljeno = []

# Dodaj novi element:


# Ispiši dužinu:

`,
        solution: `omiljeno = ["Matrix", "Interstellar", "Inception"]\nomiljeno.append("Gladiator")\nprint(f"Ukupno imam {len(omiljeno)} omiljena filma.")`,
        hint: "Kreiraj listu sa ['A', 'B', 'C'], pozovi omiljeno.append('D') i ispiši len(omiljeno)."
      }
    ],
    quiz: {
      question: "Šta vraća izraz: [10, 20, 30][1]?",
      options: [
        { text: "10", correct: false, explanation: "10 se nalazi na indeksu 0." },
        { text: "20", correct: true, explanation: "Bravo! Indeks 0 je 10, a indeks 1 je 20!" },
        { text: "30", correct: false, explanation: "30 je na indeksu 2." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Python liste su zapravo <em>dinamički nizovi</em> (dynamic arrays) u C-u. Dodavanje na kraj (<code>append</code>) ima amortizovanu vremensku složenost O(1). Python takođe ima moćan koncept: <strong>List Comprehensions</strong>, npr. <code>[x**2 for x in range(10) if x % 2 == 0]</code>."
    }
  },

  {
    id: "funkcije-def",
    title: "8. Supermoć ponovnog korišćenja (Funkcije)",
    icon: "🧩",
    category: "Napredni nivo",
    summary: "Napravi svoje sopstvene mini-fabrike koda koje možeš pozivati kad god ti zatrebaju.",
    content: `
      <p class="lead">Glavno pravilo dobrih programera je <strong>DRY</strong> (<em>Don't Repeat Yourself</em> - Ne ponavljaj se!). Kada primetiš da isti kod pišeš više puta, spakuj ga u <strong>funkciju</strong>.</p>

      <div class="analogy-card">
        <div class="analogy-icon">🏭</div>
        <div class="analogy-text">
          <strong>Mini-fabrika (Funkcija):</strong> Funkciji pošalješ sirovine (<em>parametre</em>), ona odradi posao i vrati ti gotov proizvod (<em>return</em>).
        </div>
      </div>

      <h3>Definisanje funkcije sa <code>def</code>:</h3>
      <pre><code class="language-python">def pozdravi(ime):
    return f"Ćao {ime}, dobrodošao natrag!"

# Pozivanje funkcije:
poruka = pozdravi("Stefan")
print(poruka)</code></pre>
    `,
    starterCode: `# Funkcija za računanje cene sa popustom
def primeni_popust(cena, procenat):
    usteda = cena * (procenat / 100)
    nova_cena = cena - usteda
    return nova_cena

# Pozivamo funkciju više puta za različite artikle:
majica = primeni_popust(2000, 20)
patike = primeni_popust(8000, 50)

print(f"Cena majice na popustu: {majica} din")
print(f"Cena patika na popustu: {patike} din")
`,
    challenges: [
      {
        title: "Zadatak 1: Kvadrat broja",
        instruction: "Napiši funkciju 'kvadrat(broj)' koja prima jedan broj i vraća njegov kvadrat (broj * broj). Pozovi je sa brojem 7 i ispiši rezultat.",
        starter: `# Definiši funkciju:
def kvadrat(broj):
    # dopuni ovde
    pass

# Pozovi funkciju za broj 7 i ispiši:
`,
        solution: `def kvadrat(broj):\n    return broj * broj\n\nrezultat = kvadrat(7)\nprint(f"Kvadrat broja 7 je: {rezultat}")`,
        hint: "Unutar funkcije napiši 'return broj * broj'. Ispod je pozovi sa kvadrat(7)."
      }
    ],
    quiz: {
      question: "Šta radi ključna reč 'return' u funkciji?",
      options: [
        { text: "Ponavlja funkciju iz početka.", correct: false, explanation: "Za ponavljanje koristimo petlje, ne return." },
        { text: "Vraća rezultat iz funkcije nazad onome ko ju je pozvao.", correct: true, explanation: "Odlično! return šalje vrednost nazad i završava rad funkcije." },
        { text: "Ispisuje tekst na ekranu umesto print().", correct: false, explanation: "return ne ispisuje ništa samo po sebi, samo vraća podatak u promenljivu." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "U Pythonu su funkcije <em>prvoklasni građani</em> (first-class citizens) – mogu se dodeliti promenljivoj, proslediti kao argument drugoj funkciji, ili vratiti iz druge funkcije (što je osnova za <em>dekoratore</em> i funkcionalno programiranje)."
    }
  },

  {
    id: "mini-projekat-igra",
    title: "9. Tvoja prva prava igra (Pogodi broj!)",
    icon: "🎮",
    category: "Projekat",
    summary: "Spoj sve što si naučio u kompletnu, pravu interaktivnu igru pogađanja tajnog broja!",
    content: `
      <p class="lead">Čestitamo! Došao si do trenutka gde spajamo sve: promenljive, unos, if-else grananje, petlje i uvoz gotovih modula!</p>

      <h3>Kako igra funkcioniše?</h3>
      <ol>
        <li>Računar zamisli tajni broj od 1 do 20 (koristeći modul <code>random</code>).</li>
        <li>Korisnik unosi svoje pokušaje.</li>
        <li>Računar pomaže govoreći: <em>"Moj broj je VEĆI"</em> ili <em>"Moj broj je MANJI"</em>.</li>
        <li>Kada pogodi, igra čestita i ispisuje iz koliko pokušaja je uspeo!</li>
      </ol>
      <p>Isprobaj igru u editoru sa desne strane, menjaj pravila (npr. opseg od 1 do 100 ili ograničen broj života)!</p>
    `,
    starterCode: `# IGRA: POGODI TAJNI BROJ 🎲
import random

tajni_broj = random.randint(1, 20)
pokusaji = 0
pogodio = False

print("Dobrodošao u igru Pogodi Broj! 🎯")
print("Zamislio sam broj između 1 i 20. Probaj da pogodiš!")

while not pogodio:
    unos = int(input("Tvoj pokušaj: "))
    pokusaji = pokusaji + 1
    
    if unos == tajni_broj:
        print(f"🎉 BRAVO! Pogodio si tajni broj {tajni_broj} iz {pokusaji} pokušaja!")
        pogodio = True
    elif unos < tajni_broj:
        print("💡 Moj broj je VEĆI! Probaj ponovo.")
    else:
        print("💡 Moj broj je MANJI! Probaj ponovo.")
`,
    challenges: [
      {
        title: "Zadatak 1: Ograničeni životi",
        instruction: "Izmeni igru u desnom editoru tako da tajni broj bude između 1 i 50, a igrač ima najviše 5 života (pokušaja)! Ako potroši živote, ispiši 'Game Over!'.",
        starter: `# ZADATAK 1: Modifikuj ovu igru!
# 1) Promeni opseg tajnog broja sa (1, 20) na (1, 50)
# 2) Dodaj ograničenje na 5 života (zivoti = 5) i smanjuj ih posle promašaja
# 3) Ako životi padnu na 0, prekini igru i ispiši "Game Over!"
import random

tajni_broj = random.randint(1, 20)
zivoti = 5
pogodio = False

print("Dobrodošao u igru Pogodi Broj! 🎯")
print("Imaš 5 života da pogodiš broj!")

while not pogodio:
    unos = int(input("Tvoj pokušaj: "))
    if unos == tajni_broj:
        print(f"🎉 BRAVO! Pogodio si tajni broj {tajni_broj}!")
        pogodio = True
    elif unos < tajni_broj:
        print("💡 Moj broj je VEĆI! Probaj ponovo.")
    else:
        print("💡 Moj broj je MANJI! Probaj ponovo.")
`,
        solution: `import random\ntajni = random.randint(1, 50)\nzivoti = 5\n\nprint("Imaš 5 života da pogodiš broj od 1 do 50!")\nwhile zivoti > 0:\n    unos = int(input(f"Ostalo života {zivoti}. Broj: "))\n    if unos == tajni:\n        print("Pobeda! 🎉")\n        break\n    elif unos < tajni:\n        print("Veći je!")\n    else:\n        print("Manji je!")\n    zivoti -= 1\n\nif zivoti == 0:\n    print(f"Game Over! Tajni broj je bio {tajni}")`,
        hint: "Uvezi promenljivu zivoti = 5 i u svakom pogrešnom koraku uradi zivoti = zivoti - 1. Proveri if zivoti == 0."
      }
    ],
    quiz: {
      question: "Šta radi komanda: import random?",
      options: [
        { text: "Bira nasumičnu temu za editor koda.", correct: false, explanation: "random je biblioteka za matematičke nasumične brojeve." },
        { text: "Uvozi Python modul sa gotovim alatima za nasumične brojeve.", correct: true, explanation: "Bravo! import komandom proširujemo Python stotinama gotovih biblioteka." },
        { text: "Briše nasumičnu liniju koda.", correct: false, explanation: "Naravno da ne! Python moduli su alati za rad." }
      ]
    },
    proTip: {
      title: "Ispod haube (Za iskusnije)",
      content: "Pythonov <code>random</code> modul koristi <em>Mersenne Twister</em> PRNG algoritam (period 2**19937-1). Za kriptografski bezbedne slučajeve (npr. generisanje lozinki ili tokena) treba koristiti modul <code>secrets</code>!"
    }
  }
];


// ============================================================================
// KURS 2: PYTHON OSNOVE 2 (Praktičar & Mini-Projekti - Srednji nivo osnova)
// ============================================================================
const LESSONS_KURS_2 = [
  {
    id: "k2-print-formatiranje",
    title: "1. Majstorstvo Ispisa i Teksta (ASCII i Tabela)",
    icon: "🎨",
    category: "Osnove 2: Praktičar",
    summary: "Pretvori dosadan tekst u profesionalne račune, vizitkarte i ASCII grafiku sa preciznim poravnanjem.",
    content: `
      <p class="lead">U prvom kursu smo naučili šta je <code>print()</code>. Sada ga podižemo na nivo pravih aplikacija: kako napraviti <strong>vizuelno uredan račun, tabelu sa kolonama i ASCII grafiku</strong> bez ikakvih spoljnih biblioteka!</p>

      <h3>Super-moć poravnanja u f-stringovima:</h3>
      <ul>
        <li><code>{tekst:<15}</code> – poravnava tekst <strong>ulevo</strong> u polju širine 15 mesta (strelica pokazuje ulevo ⬅️).</li>
        <li><code>{tekst:>10}</code> – poravnava tekst <strong>udesno</strong> (strelica udesno ➡️, idealno za cene i brojeve!).</li>
        <li><code>{tekst:^20}</code> – <strong>centrira</strong> tekst na sredinu (kao naslov na tabli ⬆️).</li>
      </ul>

      <div class="analogy-card" style="margin: 1rem 0;">
        <div class="analogy-icon">📐</div>
        <div class="analogy-text">
          <strong>Vizuelni lenjir (kućice u svesci):</strong><br>
          Zamislite da je linija podeljena na tačno onoliko kućica koliki je broj:<br>
          <code>&lt;16</code> : <code>[E][s][p][r][e][s][s][o][ ][ ][ ][ ][ ][ ][ ][ ]</code> (tekst levo, ostalo prazno)<br>
          <code>&gt;10</code> : <code>[ ][ ][ ][3][6][0][ ][R][S][D]</code> (tekst desno, ostalo prazno levo)<br>
          Strelica ti tačno govori u koji zid "guraš" reč!
        </div>
      </div>

      <h3>Ponavljanje grafičkih znakova:</h3>
      <p>Umesto kucanja 40 crtica ručno, napiši <code>"=" * 40</code> ili <code>"*" * 25</code>.</p>
    `,
    starterCode: `# Profesionalno formatiran račun iz kafića
print("=" * 35)
print(f"{'KAFE PITON':^35}")
print("=" * 35)
print(f"{'Artikal':<16}{'Kol':<5}{'Cena':>14}")
print("-" * 35)
print(f"{'Espresso kafa':<16}{'2':<5}{'360 RSD':>14}")
print(f"{'Sveži sok':<16}{'1':<5}{'280 RSD':>14}")
print(f"{'Čoko mafin':<16}{'2':<5}{'340 RSD':>14}")
print("-" * 35)
print(f"{'UKUPNO ZA UPLATU:':<21}{'980 RSD':>14}")
print("=" * 35)
print(f"{'Hvala na poseti! ☕':^35}")
`,
    challenges: [
      {
        title: "Zadatak 1: ASCII Vizitkarta (Zagrevanje)",
        instruction: "Iskoristi zvezdice '*' i centriranje da ispišeš svoju programersku vizitkartu širine 30 mesta u ramu.",
        starter: `# Napravi vizitkartu:
print("*" * 30)
# Ispiši centrirano ime i titulu:

print("*" * 30)
`,
        solution: `print("*" * 30)\nprint(f"{'NIKOLA TESLA':^30}")\nprint(f"{'Python Developer':^30}")\nprint(f"{'Beograd':^30}")\nprint("*" * 30)`,
        hint: "Iskoristi print(f'{ime:^30}') unutar zvezdica."
      },
      {
        title: "Zadatak 2: Tabela Fudbalske Lige (Glavni izazov)",
        instruction: "Ispiši tabelu sa 3 fudbalska kluba sa kolonama: Klub (širina 14 ulevo), Pobede (širina 5), Porazi (širina 5) i Bodovi (širina 7 udesno).",
        starter: `print(f"{'Klub':<14}{'Pob':<5}{'Por':<5}{'Bod':>7}")
print("-" * 31)
# Dodaj 3 kluba ispod:
`,
        solution: `print(f"{'Klub':<14}{'Pob':<5}{'Por':<5}{'Bod':>7}")\nprint("-" * 31)\nprint(f"{'Crvena Zvezda':<14}{'12':<5}{'1':<5}{'37':>7}")\nprint(f"{'Partizan':<14}{'10':<5}{'2':<5}{'32':>7}")\nprint(f"{'Vojvodina':<14}{'8':<5}{'4':<5}{'26':>7}")`,
        hint: "Koristi format: print(f'{klub:<14}{pob:<5}{por:<5}{bod:>7}')."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Generator Stripa (Strip u 3 kadra)",
        instruction: "Napravi mini-strip u tri kadra: Kadar 1 prikazuje zbunjenog čoveka (•_•), Kadar 2 kako stavlja naočare (•_•)>⌐■-■, a Kadar 3 kul programera (⌐■_■) sa tekstom 'Naučio sam Python!'!",
        starter: `# MINI-PROJEKAT: STRIP U 3 KADRA
print("=" * 40)
print(f"{'AVANTURE PROGRAMERA':^40}")
print("=" * 40)

# Kadar 1:


# Kadar 2:


# Kadar 3:

`,
        solution: `print("=" * 40)\nprint(f"{'AVANTURE PROGRAMERA':^40}")\nprint("=" * 40)\nprint("[KADAR 1] Ne razumem kod...")\nprint("  ( •_•)")\nprint("  <|   |/")\nprint()\nprint("[KADAR 2] Čekaj, otvorio sam sajt...")\nprint("  ( •_•)>⌐■-■")\nprint()\nprint("[KADAR 3] Sad sam Python majstor!")\nprint("  (⌐■_■)")\nprint("  <|   |b")\nprint("=" * 40)`,
        hint: "Iskoristi simbole (•_•) i (⌐■_■) i odvoji kadrove linijama ili novim redom."
      }
    ],
    quiz: {
      question: "Šta znači oznaka {:>10} unutar f-stringa?",
      options: [
        { text: "Ponavlja tekst 10 puta.", correct: false, explanation: "Za ponavljanje teksta koristimo operator množenja: 'tekst' * 10." },
        { text: "Poravnava sadržaj udesno u prostoru od najmanje 10 karaktera.", correct: true, explanation: "Tačno! Znak > znači desno poravnanje, dok < znači levo poravnanje." },
        { text: "Proverava da li je broj veći od 10.", correct: false, explanation: "U format specifikatoru f-stringa > označava poravnanje, a ne poređenje." }
      ]
    },
    proTip: {
      title: "Ispod haube: Python Format Specification Mini-Language",
      content: "Python ima čitav ugrađeni mini-jezik za formatiranje! Na primer, možeš napisati <code>f'{broj:05d}'</code> da dobiješ vodeće nule (<code>00042</code>), ili <code>f'{cena:,.2f}'</code> da dobiješ zareze za hiljade i dve decimale (<code>1,250,000.50</code>)!"
    }
  },

  {
    id: "k2-varijable-kalkulatori",
    title: "2. Promenljive u Akciji (Kalkulatori i Pretvarači)",
    icon: "🧮",
    category: "Osnove 2: Praktičar",
    summary: "Ovladaj akumulacijom vrednosti (+=, -=), zamenom mesta i preračunavanjem valuta i goriva.",
    content: `
      <p class="lead">Promenljive nisu samo statične kutije u koje jednom ubaciš podatak. U stvarnim programima vrednosti se <strong>neprekidno menjaju, sabiraju i akumuliraju</strong>.</p>

      <h3>Operatori akumulacije (Skraćenice koje štede vreme):</h3>
      <ul>
        <li><code>poeni += 10</code> je isto što i <code>poeni = poeni + 10</code></li>
        <li><code>zivoti -= 1</code> je isto što i <code>zivoti = zivoti - 1</code></li>
        <li><code>cena *= 0.8</code> (smanjenje cene za 20% popusta)</li>
      </ul>

      <div class="analogy-card">
        <div class="analogy-icon">💰</div>
        <div class="analogy-text">
          <strong>Kasica prasica (Akumulator):</strong> Promenljiva <code>ukupno = 0</code> na početku je prazna kasica. Svaki put kada nešto prodaš, uradiš <code>ukupno += cena</code> i kasica se puni!
        </div>
      </div>
    `,
    starterCode: `# Menjačnica valuta
kurs_evra = 117.2
kurs_dolara = 108.5

pocetni_dinari = 50000

# Računamo koliko dobijamo:
kupljeni_evri = round(pocetni_dinari / kurs_evra, 2)
kupljeni_dolari = round(pocetni_dinari / kurs_dolara, 2)

print(f"Za {pocetni_dinari} RSD dobijaš:")
print(f" - {kupljeni_evri} EUR")
print(f" - {kupljeni_dolari} USD")
`,
    challenges: [
      {
        title: "Zadatak 1: Kalkulator potrošnje goriva (Zagrevanje)",
        instruction: "Imamo put od 450 km. Automobil troši 6.5 litara na 100 km, a litar goriva košta 190 RSD. Izračunaj ukupno potrošeno goriva i ukupan trošak u dinarima.",
        starter: `razdaljina_km = 450
potrosnja_na_100km = 6.5
cena_litra = 190

# Izračunaj ukupno litara i ukupan trošak:


`,
        solution: `razdaljina_km = 450\npotrosnja_na_100km = 6.5\ncena_litra = 190\n\nukupno_litara = (razdaljina_km / 100) * potrosnja_na_100km\ntrosak = ukupno_litara * cena_litra\n\nprint(f"Potrošeno goriva: {ukupno_litara:.1f} litara")\nprint(f"Ukupan trošak: {trosak:.2f} RSD")`,
        hint: "Ukupno litara je (razdaljina / 100) * potrosnja_na_100km, a trošak je litri * cena_litra."
      },
      {
        title: "Zadatak 2: Trgovački popust i PDV (Glavni izazov)",
        instruction: "Cena jakne je 12.000 RSD. Prodavnica nudi popust od 25%. Izračunaj uštedu i novu cenu, a zatim izračunaj koliko od te cene otpada na PDV od 20% (nova_cena * 0.20).",
        starter: `cena_jakne = 12000
popust_procenat = 25

# Izračunaj novu cenu i PDV:

`,
        solution: `cena_jakne = 12000\npopust_procenat = 25\n\nusteda = cena_jakne * (popust_procenat / 100)\nnova_cena = cena_jakne - usteda\npdv = nova_cena * 0.20\n\nprint(f"Ušteda na popustu: {usteda} RSD")\nprint(f"Nova cena jakne: {nova_cena} RSD")\nprint(f"Od toga je PDV: {pdv} RSD")`,
        hint: "Ušteda je cena * (popust/100), nova_cena je cena - usteda."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Kalorijski i Fitnes Kalkulator",
        instruction: "Napravi kalkulator dnevnog balansa kalorija! Saberi kalorije iz 3 obroka (doručak: 450, ručak: 850, večera: 500) u promenljivu 'uneseno'. Zatim oduzmi kalorije potrošene na treningu (trčanje 45 min troši 10 kcal po minutu) i ispiši kompletan izveštaj!",
        starter: `# MINI-PROJEKAT: DNEVNI FITNES KALKULATOR
dorucak = 450
rucak = 850
vecera = 500

# Akumuliraj ukupne unete kalorije:
uneseno = 0

# Izračunaj potrošnju na treningu (45 min * 10 kcal):


# Ispiši izveštaj o balansu:

`,
        solution: `dorucak = 450\nrucak = 850\nvecera = 500\n\nuneseno = dorucak + rucak + vecera\ntrening_minuti = 45\npotroseno = trening_minuti * 10\nbalans = uneseno - potroseno\n\nprint("=== DNEVNI FITNES IZVEŠTAJ ===")\nprint(f"Uneto kalorija:     {uneseno} kcal")\nprint(f"Potrošeno treningom: {potroseno} kcal")\nprint(f"Neto balans dana:   {balans} kcal")`,
        hint: "Iskoristi uneseno = dorucak + rucak + vecera, potroseno = 45 * 10 i balans = uneseno - potroseno."
      }
    ],
    quiz: {
      question: "Ako je x = 10, šta će biti vrednost x nakon komande: x += 5 * 2?",
      options: [
        { text: "30", correct: false, explanation: "Množenje 5 * 2 ima veći prioritet i daje 10, pa se na to dodaje x (10 + 10 = 20)." },
        { text: "20", correct: true, explanation: "Bravo! Prvo se izračuna desna strana (5 * 2 = 10), a onda se doda na x (10 + 10 = 20)." },
        { text: "15", correct: false, explanation: "5 * 2 je 10, a ne 5." }
      ]
    },
    proTip: {
      title: "Ispod haube: Augmentovana dodela (Augmented Assignment)",
      content: "Operatori kao što su <code>+=</code> i <code>*=</code> nazivaju se <em>augmented assignment</em> operatori. Kod mutabilnih objekata (kao što su liste), <code>lista += [4]</code> poziva metodu <code>__iadd__</code> koja menja listu u mestu (in-place), umesto da kreira novu kopiju u memoriji!"
    }
  },

  {
    id: "k2-matematika-modulo-vreme",
    title: "3. Matematika i Vreme (Modulo % i Celobrojno //)",
    icon: "⏰",
    category: "Osnove 2: Praktičar",
    summary: "Kako programeri dele vreme na sate, pakuju robu u kutije i koriste magični modulo operator.",
    content: `
      <p class="lead">Dva najkorisnija matematička operatora koja početnici često zapostave su <strong>celobrojno deljenje <code>//</code></strong> i <strong>ostatak pri deljenju <code>%</code> (modulo)</strong>.</p>

      <h3>Gde se ovo koristi u praksi?</h3>
      <ul>
        <li><strong>Sat na zidu:</strong> Posle 12 sati ne ide 13, već <code>13 % 12 = 1</code>!</li>
        <li><strong>Par / Nepar:</strong> Ako je <code>broj % 2 == 0</code>, broj je paran!</li>
        <li><strong>Vremenske konverzije:</strong> Pretvaranje sekundi u sate i minute.</li>
        <li><strong>Pakovanje robe:</strong> Koliko celih kutija punimo i koliko komada pretekne.</li>
      </ul>
    `,
    starterCode: `# Preračunavanje sekundi u sate, minute i sekunde
ukupno_sekundi = 7385

sati = ukupno_sekundi // 3600
ostatak_sekundi = ukupno_sekundi % 3600
minuti = ostatak_sekundi // 60
sekunde = ostatak_sekundi % 60

print(f"{ukupno_sekundi} sekundi je tačno:")
print(f"⏰ {sati}h {minuti}m {sekunde}s")
`,
    challenges: [
      {
        title: "Zadatak 1: Pakovanje jaja u kutije (Zagrevanje)",
        instruction: "Farma ima 74 jajeta. Svaka kartonska kutija prima tačno 6 jaja. Izračunaj koliko se punih kutija može napuniti (//) i koliko jaja ostaje neraspoređeno (%).",
        starter: `ukupno_jaja = 74
kapacitet_kutije = 6

# Izračunaj pune kutije i ostatak:

`,
        solution: `ukupno_jaja = 74\nkapacitet_kutije = 6\n\npune_kutije = ukupno_jaja // kapacitet_kutije\nvisak_jaja = ukupno_jaja % kapacitet_kutije\n\nprint(f"Puno kutija: {pune_kutije}")\nprint(f"Preostalo jaja: {visak_jaja}")`,
        hint: "Iskoristi // za pune kutije i % za ostatak."
      },
      {
        title: "Zadatak 2: Koji je dan u nedelji? (Glavni izazov)",
        instruction: "Danas je subota (dan broj 6, ako brojimo 0=ponedeljak, 1=utorak... 6=nedelja). Ako prođe 100 dana, koji će to biti dan u nedelji? Izračunaj pomoću (danas + 100) % 7.",
        starter: `danas = 5 # 5 predstavlja subotu
dana_unapred = 100

# Izračunaj novi dan u nedelji:

`,
        solution: `danas = 5\ndana_unapred = 100\nnovi_dan = (danas + dana_unapred) % 7\nprint(f"Nakon 100 dana, indeks dana u nedelji biće: {novi_dan} (Nedelja)")`,
        hint: "Formula je: (danas + dana_unapred) % 7."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Finansijski Planer Štednje",
        instruction: "Napravi kalkulator ciljne štednje! Korisnik želi da kupi konzolu od 45.000 RSD, a nedeljno može da uštedi 3.500 RSD. Izračunaj: 1) Koliko celih nedelja mora da štedi, 2) Koliko još novca fali u poslednjoj nepotpunoj nedelji, i ispiši plan štednje!",
        starter: `# MINI-PROJEKAT: FINANSIJSKI PLANER ŠTEDNJE
cena_cilja = 45000
nedeljna_stednja = 3500

# Izračunaj cele nedelje i preostali iznos:


# Ispiši ohrabrujući plan štednje:

`,
        solution: `cena_cilja = 45000\nnedeljna_stednja = 3500\n\ncele_nedelje = cena_cilja // nedeljna_stednja\nostatak = cena_cilja % nedeljna_stednja\npotrebno_nedelja = cele_nedelje if ostatak == 0 else cele_nedelje + 1\n\nprint("=== PLAN ŠTEDNJE ZA NOVI UREĐAJ ===")\nprint(f"Cena uređaja:       {cena_cilja} RSD")\nprint(f"Nedeljna ušteda:    {nedeljna_stednja} RSD")\nprint(f"Potrebno je ukupno: {potrebno_nedelja} nedelja")\nprint(f"Poslednje nedelje uplaćuješ samo: {ostatak} RSD!")`,
        hint: "Cele nedelje su cena // stednja, a višak preko je cena % stednja."
      }
    ],
    quiz: {
      question: "Koliko iznosi rezultat izraza: 25 // 4 i 25 % 4 ?",
      options: [
        { text: "6 i 1", correct: true, explanation: "Tako je! 4 * 6 = 24, a 25 - 24 = 1. Znači celobrojni količnik je 6, a ostatak je 1!" },
        { text: "6.25 i 0", correct: false, explanation: "6.25 je obično deljenje 25 / 4, a ne celobrojno." },
        { text: "5 i 5", correct: false, explanation: "4 ide u 25 šest puta, a ne pet." }
      ]
    },
    proTip: {
      title: "Ispod haube: Funkcija divmod()",
      content: "Python ima fantastičnu ugrađenu funkciju <code>divmod(a, b)</code> koja u jednom jedinom koraku računa i celobrojni količnik i ostatak i vraća ih u paru: <code>kolicnik, ostatak = divmod(7385, 60)</code>!"
    }
  },

  {
    id: "k2-input-personalizacija",
    title: "4. Interaktivni Dijalozi i Validacija (input)",
    icon: "💬",
    category: "Osnove 2: Praktičar",
    summary: "Kreiraj inteligentne programe koji razgovaraju sa korisnikom, čiste neuredan unos i prave kartice likova.",
    content: `
      <p class="lead">U stvarnim programima korisnici često unose tekst sa viškom razmaka, malim slovima gde treba veliko ili praznim unosom. Naučićemo kako da <strong>očistimo i ulepšamo korisnički unos</strong>.</p>

      <h3>Tri ključne metode za čišćenje unosa:</h3>
      <ul>
        <li><code>.strip()</code> – uklanja slučajne razmake na početku i kraju koje korisnik nehotice ukuca.</li>
        <li><code>.capitalize()</code> – pretvara prvo slovo u veliko, a ostala u mala (npr. "mArKo" -> "Marko").</li>
        <li><code>.title()</code> – pretvara svaku reč da počinje velikim slovom (npr. "petar petrović" -> "Petar Petrović").</li>
      </ul>

      <div class="tip-box">
        <span class="tip-icon">🛡️</span>
        <div><strong>Zaštita od rušenja programa uz .isdigit():</strong> Ako program očekuje broj, a korisnik unese slova, <code>int(unos)</code> će se srušiti sa <em>ValueError</em>. Zato uvek možeš proveriti: <code>if unos.isdigit():</code> pre nego što ga pretvoriš u broj!</div>
      </div>
    `,
    starterCode: `# Čišćenje i ulepšavanje unosa korisnika
print("=== REGISTRACIJA ČLANA ===")
sirovo_ime = input("Unesi svoje puno ime i prezime: ")

# Čistimo i formatiramo unos:
cisto_ime = sirovo_ime.strip().title()

godine = int(input("Koliko imaš godina? "))
omiljeni_hobi = input("Tvoj hobi: ").strip().capitalize()

print()\nprint("" + "=" * 30)
print(f"ČLANSKA KARTICA: {cisto_ime}")
print(f"Kategorija: {'Senior' if godine >= 18 else 'Junior'}")
print(f"Glavni hobi: {omiljeni_hobi}")
print("=" * 30)
`,
    challenges: [
      {
        title: "Zadatak 1: Šaljiva priča (Mad Libs) (Zagrevanje)",
        instruction: "Pitaj korisnika za: jedno ime, jedan pridev, jedno mesto i jedan predmet. Zatim ih uklopi u šaljivu rečenicu pomoću f-stringa!",
        starter: `# Pitaj korisnika za 4 reči:


# Ispiši šaljivu rečenicu:

`,
        solution: `ime = input("Unesi ime: ").strip().capitalize()\npridev = input("Unesi pridev: ").strip()\nmesto = input("Unesi mesto: ").strip()\npredmet = input("Unesi predmet: ").strip()\n\nprint(f"Jednog dana, {ime} je otišao u {mesto} noseći vrlo {pridev} {predmet}!")`,
        hint: "Iskoristi 4 input naredbe i spoji ih u print(f'...')."
      },
      {
        title: "Zadatak 2: Kalkulator bakšiša u restoranu (Glavni izazov)",
        instruction: "Pitaj korisnika koliki je račun u restoranu, koliko osoba deli račun, i koliki procenat bakšiša žele da ostave (npr. 10, 15 ili 20). Izračunaj ukupan iznos sa bakšišem i koliko svaka osoba tačno plaća.",
        starter: `racun = float(input("Iznos računa (RSD): "))
broj_osoba = int(input("Broj osoba: "))
baksis_procenat = float(input("Procenat bakšiša (npr. 10): "))

# Izračunaj ukupan račun i iznos po osobi:

`,
        solution: `racun = float(input("Iznos računa (RSD): "))\nbroj_osoba = int(input("Broj osoba: "))\nbaksis_procenat = float(input("Procenat bakšiša (npr. 10): "))\n\nukupno_baksis = racun * (baksis_procenat / 100)\nukupan_racun = racun + ukupno_baksis\npo_osobi = ukupan_racun / broj_osoba\n\nprint(f"Bakšiš: {ukupno_baksis:.2f} RSD")\nprint(f"Ukupno za plaćanje: {ukupan_racun:.2f} RSD")\nprint(f"Svaka osoba plaća: {po_osobi:.2f} RSD")`,
        hint: "Iskoristi baksis = racun * (procenat / 100), ukupan = racun + baksis, a po osobi = ukupan / broj_osoba."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Kreator RPG Kartice Heroja",
        instruction: "Napravi interaktivni generator karaktera za video igru! Program pita korisnika za ime heroja, klasu (Ratnik, Čarobnjak, Strelac), i koliko poena ulaže u Snagu (od ukupno 20 raspoloživih poena). Preostali poeni automatski idu u Magiju! Na kraju ispiši stilizovanu karticu lika.",
        starter: `# MINI-PROJEKAT: KREATOR RPG HEROJA
print("=== STVORI SVOG HEROJA ===")
ime = input("Ime heroja: ").strip().capitalize()
klasa = input("Klasa (Ratnik / Čarobnjak / Strelac): ").strip().capitalize()

print("Imaš ukupno 20 poena za raspodelu.")
snaga = int(input("Koliko poena daješ na Snagu (0-20)? "))
magija = 20 - snaga

# Ispiši prelepu karticu heroja:

`,
        solution: `print("=== STVORI SVOG HEROJA ===")\nime = input("Ime heroja: ").strip().capitalize()\nklasa = input("Klasa: ").strip().capitalize()\nsnaga = int(input("Poeni za Snagu (0-20): "))\nmagija = 20 - snaga\n\nprint()\nprint("" + "╔" + "═" * 32 + "╗")\nprint(f"║ {ime.upper():^30} ║")\nprint("╠" + "═" * 32 + "╣")\nprint(f"║ Klasa:  {klasa:<22} ║")\nprint(f"║ Snaga:  {'⚔️ ' * snaga:<22} ║")\nprint(f"║ Magija: {'✨ ' * magija:<22} ║")\nprint("╚" + "═" * 32 + "╝")`,
        hint: "Proračunaj magija = 20 - snaga i ispiši lepu karticu pomoću linija i okvira."
      }
    ],
    quiz: {
      question: "Šta radi metoda '  beograd  '.strip().title()?",
      options: [
        { text: "Vraća 'Beograd'", correct: true, explanation: "Bravo! .strip() skida razmake sa krajeva, a .title() stavlja prvo slovo u veliko." },
        { text: "Vraća '  BEOGRAD  '", correct: false, explanation: ".upper() pravi sva velika slova, a strip je uklonio razmake." },
        { text: "Briše reč beograd.", correct: false, explanation: "Metode formata ne brišu sadržaj reči." }
      ]
    },
    proTip: {
      title: "Ispod haube: Default vrednosti sa 'or'",
      content: "U Pythonu možeš napisati elegantnu caku za podrazumevani unos: <code>ime = input('Ime: ') or 'Anonimni Koder'</code>. Ako korisnik samo pritisne Enter (unese prazan string koji je 'falsy'), Python automatski uzima vrednost iza reči <code>or</code>!"
    }
  },

  {
    id: "k2-slozena-grananja",
    title: "5. Složeni Uslovi i Donošenje Odluka (and, or, not)",
    icon: "🔀",
    category: "Osnove 2: Praktičar",
    summary: "Kombinuj više uslova odjednom i napravi tekstualnu igru bekstva iz zagonetne sobe.",
    content: `
      <p class="lead">U stvarnom životu retko odlučujemo po samo jednom uslovu. <em>Ako imam novca I ako je prodavnica otvorena, kupiću sladoled.</em> Za to koristimo <strong>logičke operatore</strong>.</p>

      <h3>Tri logička veznika u Pythonu:</h3>
      <ul>
        <li><code>and</code> (I) – oba uslova moraju biti <strong>tačna</strong>.</li>
        <li><code>or</code> (ILI) – dovoljno je da bar <strong>jedan</strong> uslov bude tačan.</li>
        <li><code>not</code> (NE) – obrće istinitost (<code>not True</code> postaje <code>False</code>).</li>
      </ul>

      <h3>Ugnježdeni uslovi (Nested if):</h3>
      <p>Uslov može biti unutar drugog uslova, kao kada prođeš prva vrata pa naiđeš na drugi sef sa šifrom!</p>
    `,
    starterCode: `# Provera uslova za polaganje vozačkog ispita
godine = int(input("Koliko imaš godina? "))
polozio_teoriju = input("Da li si položio teoriju (da/ne)? ").lower() == "da"
ima_lekarsko = input("Da li imaš lekarsko uverenje (da/ne)? ").lower() == "da"

if godine >= 18 and polozio_teoriju and ima_lekarsko:
    print("✅ Možeš da izađeš na praktični ispit vožnje! 🚗")
elif godine < 18:
    print(f"❌ Moraš imati 18 godina (fali ti još {18 - godine} god).")
else:
    print("⚠️ Fale ti teorija ili lekarsko uverenje pre praktičnog ispita!")
`,
    challenges: [
      {
        title: "Zadatak 1: Pametni Bioskopski Popust (Zagrevanje)",
        instruction: "Bioskop nudi popust i besplatne kokice 🍿 ako je: 1) korisnik mlađi od 18 godina ILI ima 65 i više godina (deca i seniori), I 2) danas je 'sreda' (filmski dan)! Napiši program koji pita za godine i dan u nedelji. Ako ispunjava oba uslova, ispiši poruku o popustu, a u suprotnom punu cenu karte (500 RSD).",
        starter: `# PITON BIOSKOP: Provera popusta
godine = int(input("Koliko imaš godina? "))
dan = input("Koji je danas dan u nedelji? ").strip().lower()

# Složeni uslov sa or i and:
if (godine < 18 or godine >= 65) and dan == "sreda":
    print("🎉 Čestitamo! Imaš pravo na popust i besplatne kokice! 🍿")
else:
    print("🎟️ Važi standardna puna cena karte (500 RSD).")
`,
        solution: `godine = int(input("Koliko imaš godina? "))\ndan = input("Koji je danas dan u nedelji? ").strip().lower()\n\nif (godine < 18 or godine >= 65) and dan == "sreda":\n    print("🎉 Čestitamo! Imaš pravo na popust i besplatne kokice! 🍿")\nelse:\n    print("🎟️ Važi standardna puna cena karte (500 RSD).")`,
        hint: "Iskoristi zagrade za grupisanje godina: (godine < 18 or godine >= 65) and dan == 'sreda'."
      },
      {
        title: "Zadatak 2: Pametni Termostat (Glavni izazov)",
        instruction: "Pitaj korisnika za trenutnu temperaturu (npr. 22) i doba dana ('dan' ili 'noc'). Ako je dan i temperatura < 20: uključi grejanje. Ako je noć i temperatura < 17: uključi grejanje. Ako je temperatura > 27: uključi klimu. Inače: 'Idealna temperatura'.",
        starter: `temperatura = float(input("Temperatura: "))
doba = input("Doba dana (dan/noc): ").strip().lower()

# Tvoj kod za termostat ovde:

`,
        solution: `temperatura = float(input("Temperatura: "))\ndoba = input("Doba dana (dan/noc): ").strip().lower()\n\nif (doba == "dan" and temperatura < 20) or (doba == "noc" and temperatura < 17):\n    print("🔥 Uključujem grejanje!")\nelif temperatura > 27:\n    print("❄️ Uključujem klimu za hlađenje!")\nelse:\n    print("🌿 Temperatura je prijatna i optimalna.")`,
        hint: "Kombinuj: if (doba == 'dan' and temperatura < 20) or (doba == 'noc' and temperatura < 17):"
      },
      {
        title: "Zadatak 3: Mini-Projekat: Bekstvo iz Zagonetne Sobe",
        instruction: "Napravi tekstualnu avanturu! Igrač se budi u zaključanoj sobi sa dvoja vrata: 'leva' i 'desna'. Ako izabere 'leva', nailazi na Zmaja – može da 'beži' ili 'baci kamen'. Ako izabere 'desna', nailazi na sef sa šifrom – ako ukuca tačnu šifru '777' nalazi ključ i pobeđuje! Napiši igru sa ugnježdenim if/else grananjima.",
        starter: `# MINI-PROJEKAT: BEKSTVO IZ ZAGONETNE SOBE
print("=== BEKSTVO IZ ZAGONETNE SOBE ===")
print("Budiš se u kamenoj sobi. Pred tobom su 'leva' i 'desna' vrata.")

izbor_vrata = input("Koja vrata biraš (leva/desna)? ").strip().lower()

# Razgranaj priču:

`,
        solution: `print("=== BEKSTVO IZ ZAGONETNE SOBE ===")
izbor_vrata = input("Koja vrata biraš (leva/desna)? ").strip().lower()

if izbor_vrata == "leva":
    print("Ušao si u pećinu gde spava strašni Zmaj! 🐉")
    akcija = input("Šta radiš: 'bezi' ili 'baci kamen'? ").strip().lower()
    if akcija == "bezi":
        print("Uspomoc! Uspeo si da pobegneš natrag u sigurnost! 🏃")
    else:
        print("Zmaj se probudio... Nije dobra ideja! GAME OVER. 💀")
elif izbor_vrata == "desna":
    print("Nalaziš se u riznici sa čeličnim sefom. 🔐")
    sifra = input("Ukucaj trocifrenu šifru sefa: ").strip()
    if sifra == "777":
        print("KLIK! Sef se otvorio, uzeo si zlatni ključ i POBEDIO! 🏆👑")
    else:
        print("Pogrešna šifra! Oglasio se alarm i soba se zaključala! 🚨")
else:
    print("Zbunio si se i ostao u mestu.")`,
        hint: "Iskoristi if izbor_vrata == 'leva': pa unutar njega pitaj za akciju, a elif izbor_vrata == 'desna': pitaj za šifru."
      }
    ],
    quiz: {
      question: "Šta je rezultat izraza: True or False and False ?",
      options: [
        { text: "True", correct: true, explanation: "Bravo! 'and' ima veći prioritet od 'or'. Prvo se računa False and False što daje False, a zatim True or False što daje True!" },
        { text: "False", correct: false, explanation: "Operator 'and' ima viši prioritet od 'or'." },
        { text: "Prijaviće grešku.", correct: false, explanation: "Ovo je potpuno validan logički izraz." }
      ]
    },
    proTip: {
      title: "Ispod haube: Short-circuit evaluacija i Mozgalica",
      content: "Python koristi <strong>kratkospojnu evaluaciju (Short-circuit evaluation)</strong>. Kod izraza <code>A or B</code>, ako je <code>A</code> tačno, <code>B</code> se uopšte ne računa jer je izraz već sigurno tačan!<br><br>💡 <em>Bonus mozgalica za matematičare:</em> Da li znaš formulu za prestupnu godinu? Godina je prestupna ako je: <code>(god % 4 == 0 and god % 100 != 0) or god % 400 == 0</code>. Možeš je isprobati u Slobodnom Pesku!"
    }
  },

  {
    id: "k2-petlje-simulacije",
    title: "6. Moć Petlji u Praksi (Simulator Bankomata)",
    icon: "🔄",
    category: "Osnove 2: Praktičar",
    summary: "Napravi petlje koje broje, sabiraju i simuliraju pravi bankomat sa menijem i PIN kodom.",
    content: `
      <p class="lead">Petlje nisu samo za štampanje brojeva. One pokreću <strong>glavnu petlju programa (Game Loop / Application Loop)</strong> – program radi sve dok korisnik ne izabere opciju 'Izlaz'.</p>

      <h3>Dve komande za potpunu kontrolu petlje:</h3>
      <ul>
        <li><code>break</code> – <strong>Momentalni izlazak</strong> iz petlje (npr. pogodio je PIN ili izabrao izlaz).</li>
        <li><code>continue</code> – <strong>Preskače</strong> ostatak trenutnog kruga i odmah prelazi na sledeći krug.</li>
      </ul>

      <div class="tip-box">
        <span class="tip-icon">🔁</span>
        <div><strong>Šablon za menije:</strong> <code>while True:</code> pravi petlju koja se vrti unedogled, a kada korisnik izabere "Kraj", jednostavno pozovemo <code>break</code>!</div>
      </div>
    `,
    starterCode: `# Tablica stepena broja 2
print(f"{'Eksponent':<12}{'Rezultat':>10}")
print("-" * 22)

for i in range(1, 11):
    stepen = 2 ** i
    print(f"2 na {i:<6} = {stepen:>10}")
`,
    challenges: [
      {
        title: "Zadatak 1: Zbir unetih brojeva dok ne ukuca nulu (Zagrevanje)",
        instruction: "Korisnik u petlji unosi brojeve. Program ih sabira. Čim korisnik ukuca broj 0, petlja se prekida pomoću break i program ispisuje ukupan zbir.",
        starter: `ukupno = 0
print("Unosi brojeve za sabiranje (0 za kraj):")

while True:
    broj = float(input("Broj: "))
    # Ako je 0 prekini, inače dodaj na ukupno:
    
print(f"Konačan zbir je: {ukupno}")
`,
        solution: `ukupno = 0\nprint("Unosi brojeve za sabiranje (0 za kraj):")\nwhile True:\n    broj = float(input("Broj: "))\n    if broj == 0:\n        break\n    ukupno += broj\nprint(f"Konačan zbir je: {ukupno}")`,
        hint: "Iskoristi if broj == 0: break, a zatim ukupno += broj."
      },
      {
        title: "Zadatak 2: Preskakanje neparnih brojeva (continue) (Glavni izazov)",
        instruction: "Napiši for petlju od 1 do 20. Ako je broj neparan (broj % 2 != 0), upotrebi 'continue' da ga preskočiš. Ispiši samo parne brojeve.",
        starter: `for broj in range(1, 21):
    # Ako je neparan preskoči:
    
    print(f"Parni broj: {broj}")
`,
        solution: `for broj in range(1, 21):\n    if broj % 2 != 0:\n        continue\n    print(f"Parni broj: {broj}")`,
        hint: "Iskoristi if broj % 2 != 0: continue."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Simulator Bankomata (ATM)",
        instruction: "Napravi pravi simulator bankomata! Korisnik ima početno stanje od 10.000 RSD. U while petlji mu se nudi meni: [1] Proveri stanje, [2] Uplata novca, [3] Isplata novca (pazi da ne ode u minus!), [4] Kraj rada. Kada izabere 4, program ispisuje poruku zahvalnosti i završava rad sa break!",
        starter: `# MINI-PROJEKAT: BANKOMAT SIMULATOR
stanje = 10000

while True:
    print("--- BANKOMAT MENI ---")
    print("[1] Proveri stanje")
    print("[2] Uplati novac")
    print("[3] Podigni novac")
    print("[4] Izlaz")
    
    izbor = input("Izaberi opciju (1-4): ")
    # Obradi izbor korisnika:

`,
        solution: `stanje = 10000
while True:
    print("--- BANKOMAT MENI ---")
    print("[1] Proveri stanje")
    print("[2] Uplati novac")
    print("[3] Podigni novac")
    print("[4] Izlaz")
    izbor = input("Izaberi opciju: ")
    
    if izbor == "1":
        print(f"💳 Vaše trenutno stanje je: {stanje:.2f} RSD")
    elif izbor == "2":
        unos = input("Unesi iznos uplate: ")
        if unos.isdigit():
            iznos = float(unos)
            stanje += iznos
            print(f"✅ Uspešno uplaćeno! Novo stanje: {stanje:.2f} RSD")
        else:
            print("⚠️ Greška: Unesite cifre, a ne tekst!")
    elif izbor == "3":
        unos = input("Unesi iznos za isplatu: ")
        if unos.isdigit():
            iznos = float(unos)
            if iznos <= stanje:
                stanje -= iznos
                print(f"💸 Preuzmite novac. Preostalo stanje: {stanje:.2f} RSD")
            else:
                print("❌ Nemate dovoljno sredstava na računu!")
        else:
            print("⚠️ Greška: Unesite cifre, a ne tekst!")
    elif izbor == "4":
        print("👋 Hvala što koristite naše bankomate. Doviđenja!")
        break
    else:
        print("⚠️ Nevažeća opcija! Pokušajte ponovo.")`,
        hint: "Iskoristi if izbor == '1', elif izbor == '2' (zaštiti unos sa unos.isdigit()), elif izbor == '3' i elif izbor == '4': break."
      }
    ],
    quiz: {
      question: "Šta radi naredba 'continue' unutar petlje?",
      options: [
        { text: "Potpuno prekida i gasi petlju.", correct: false, explanation: "To radi naredba 'break'." },
        { text: "Preskače ostatak koda u tom krugu i odmah počinje sledeći krug petlje.", correct: true, explanation: "Tako je! 'continue' preskače trenutnu iteraciju i ide na sledeću." },
        { text: "Pauzirana je petlja na 5 sekundi.", correct: false, explanation: "Za pauziranje se koristi time.sleep()." }
      ]
    },
    proTip: {
      title: "Ispod haube: else blok na petljama!",
      content: "Malo programera zna da u Pythonu i <code>for</code> i <code>while</code> petlje mogu imati svoj <code>else:</code> blok! On se izvršava <strong>samo ako se petlja prirodno završila, a NIJE bila prekinuta komandom break</strong> (idealno za pretrage)!"
    }
  },

  {
    id: "k2-liste-menadzer",
    title: "7. Liste kao Baze Podataka (To-Do Menadžer)",
    icon: "📋",
    category: "Osnove 2: Praktičar",
    summary: "Pretražuj, sortiraj i filtriraj liste i napravi interaktivni To-Do planer zadataka.",
    content: `
      <p class="lead">U modernim aplikacijama liste su srce svega: spisak pesama na Spotify-u, poruke u četu, proizvodi u korpi... Vreme je da naučimo kako da upravljamo listom kao pravi menadžer!</p>

      <h3>Napredne operacije sa listama:</h3>
      <ul>
        <li><code>if "Jabuka" in korpa:</code> – munjevita provera da li element postoji u listi.</li>
        <li><code>korpa.count("Mleko")</code> – broji koliko se puta element ponavlja.</li>
        <li><code>del lista[0]</code> ili <code>lista.pop(0)</code> – briše element sa tačne pozicije.</li>
        <li><code>for i, stavka in enumerate(lista, 1):</code> – prolazi kroz listu i automatski dodeljuje redne brojeve od 1!</li>
      </ul>
    `,
    starterCode: `# Pregled i upravljanje listom učenika
ucenici = ["Ana", "Bojan", "Milica", "Stefan", "Milica", "Jovan"]

print("Svi učenici:")
for redni_broj, ime in enumerate(ucenici, start=1):
    print(f"{redni_broj}. {ime}")

# Pretraga:
trazeno = "Milica"
if trazeno in ucenici:
    print()\nprint(f"Učenik {trazeno} se nalazi u spisku {ucenici.count(trazeno)} puta!")
`,
    challenges: [
      {
        title: "Zadatak 1: Najveći broj bez funkcije max() (Zagrevanje)",
        instruction: "🃏 <em>Analogija sa kartama:</em> Zamisli da na stolu leži špil karata. Uzmeš prvu kartu u ruku (<code>najveci = brojevi[0]</code>). Zatim okrećeš ostale karte jednu po jednu. Čim vidiš kartu sa većim brojem nego što držiš u ruci, baciš staru i zadržiš novu! Napiši for petlju koja pronalazi najveći broj u listi [14, 82, 35, 99, 41, 7].",
        starter: `brojevi = [14, 82, 35, 99, 41, 7]
najveci = brojevi[0]

# Tvoj kod ovde (for broj in brojevi):

print(f"Najveći broj je: {najveci}")
`,
        solution: `brojevi = [14, 82, 35, 99, 41, 7]\nnajveci = brojevi[0]\nfor b in brojevi:\n    if b > najveci:\n        najveci = b\nprint(f"Najveći broj je: {najveci}")`,
        hint: "U svakom krugu petlje proveri: if b > najveci: pa ažuriraj najveci = b. Na kraju petlje u ruci ti ostaje pobednik!"
      },
      {
        title: "Zadatak 2: Filtriranje imena na slovo M (Glavni izazov)",
        instruction: "Iz liste imena ['Marko', 'Ana', 'Milica', 'Jovan', 'Milan', 'Bojan'] izdvoj u novu listu samo ona imena koja počinju slovom 'M' (koristeći ime.startswith('M')) i ispiši ih.",
        starter: `imena = ["Marko", "Ana", "Milica", "Jovan", "Milan", "Bojan"]
imena_na_m = []

# Tvoj kod ovde:

print("Imena na slovo M:", imena_na_m)
`,
        solution: `imena = ["Marko", "Ana", "Milica", "Jovan", "Milan", "Bojan"]\nimena_na_m = []\nfor ime in imena:\n    if ime.startswith("M"):\n        imena_na_m.append(ime)\nprint("Imena na slovo M:", imena_na_m)`,
        hint: "Iskoristi for ime in imena: if ime.startswith('M'): imena_na_m.append(ime)."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Konzolna To-Do Aplikacija",
        instruction: "Napravi kompletnu aplikaciju za vođenje obaveza! Korisnik počinje sa listom zadataka ['Kupi hleb', 'Nauči Python']. U petlji mu se nudi: [1] Prikaži zadatke numerisane od 1, [2] Dodaj novi zadatak (.append), [3] Obriši zadatak po rednom broju, [4] Izlaz! Implementiraj ovaj program.",
        starter: `# MINI-PROJEKAT: TO-DO MENADŽER
zadaci = ["Kupi hleb", "Završi domaći", "Nauči Python"]

while True:
    print("--- TO-DO LISTA ---")
    print("[1] Prikaži zadatke")
    print("[2] Dodaj zadatak")
    print("[3] Obriši zadatak")
    print("[4] Kraj")
    
    izbor = input("Tvoj izbor: ")
    # Implementiraj opcije:

`,
        solution: `zadaci = ["Kupi hleb", "Završi domaći", "Nauči Python"]
while True:
    print("--- TO-DO LISTA ---")
    print("[1] Prikaži zadatke")
    print("[2] Dodaj zadatak")
    print("[3] Obriši zadatak")
    print("[4] Kraj")
    izbor = input("Tvoj izbor: ")
    
    if izbor == "1":
        if not zadaci:
            print("📭 Nema zadataka, sve je završeno!")
        else:
            print("Tvoji zadaci:")
            for i, z in enumerate(zadaci, 1):
                print(f" {i}. [ ] {z}")
    elif izbor == "2":
        novi = input("Upiši novi zadatak: ").strip()
        if novi:
            zadaci.append(novi)
            print(f"✅ Zadatak '{novi}' je dodat!")
    elif izbor == "3":
        for i, z in enumerate(zadaci, 1):
            print(f" {i}. {z}")
        broj = int(input("Koji broj zadatka želiš da obrišeš? "))
        if 1 <= broj <= len(zadaci):
            obrisan = zadaci.pop(broj - 1)
            print(f"🗑️ Zadatak '{obrisan}' je završen i obrisan!")
        else:
            print("❌ Nevažeći broj zadatka!")
    elif izbor == "4":
        print("👋 Doviđenja! Uspešan dan!")
        break`,
        hint: "Za prikaz koristi enumerate(zadaci, 1), za dodavanje zadaci.append(novi), a za brisanje zadaci.pop(broj - 1)."
      }
    ],
    quiz: {
      question: "Šta radi funkcija enumerate(['A', 'B'], start=1)?",
      options: [
        { text: "Sortira listu unazad.", correct: false, explanation: "Za sortiranje koristimo sorted() ili .sort()." },
        { text: "Vraća parove (redni_broj, element), počevši od rednog broja 1.", correct: true, explanation: "Bravo! enumerate() olakšava ispis lista sa numeracijom (1. A, 2. B)." },
        { text: "Briše sve elemente iz liste.", correct: false, explanation: "Za brisanje se koristi .clear()." }
      ]
    },
    proTip: {
      title: "Ispod haube: List Slicing kopiranje",
      content: "Pazi na klopku: kada napišeš <code>b = a</code>, nisi napravio novu listu već samo drugo ime za istu listu u memoriji! Ako želiš pravu, nezavisnu kopiju, uvek koristi slice sintaksu: <code>b = a[:]</code> ili metodu <code>b = a.copy()</code>!"
    }
  },

  {
    id: "k2-funkcije-modularnost",
    title: "8. Funkcije kao Lego Kocke (Modularan Kod)",
    icon: "🧱",
    category: "Osnove 2: Praktičar",
    summary: "Piši male, čiste funkcije koje sarađuju i napravi matematički kviz brzog računanja.",
    content: `
      <p class="lead">Pravi inženjeri ne pišu jednu gigantsku funkciju od 300 linija. Oni prave <strong>male funkcije od po 5–10 linija</strong>, gde svaka radi tačno jednu stvar, a zatim ih slažu kao lego kockice!</p>

      <h3>Primer saradnje funkcija:</h3>
      <pre><code class="language-python">def je_paran(broj):
    return broj % 2 == 0

def filtriraj_parne(lista):
    rezultat = []
    for x in lista:
        if je_paran(x):  # Jedna funkcija poziva drugu!
            rezultat.append(x)
    return rezultat</code></pre>
    `,
    starterCode: `# Geometrijski kalkulator sastavljen od malih funkcija
def obim_pravougaonika(a, b):
    return 2 * (a + b)

def povrsina_pravougaonika(a, b):
    return a * b

def stampaj_karticu(a, b):
    o = obim_pravougaonika(a, b)
    p = povrsina_pravougaonika(a, b)
    print("=" * 25)
    print(f"Pravougaonik: {a} x {b}")
    print(f"Obim:     {o} cm")
    print(f"Površina: {p} cm²")
    print("=" * 25)

stampaj_karticu(8, 4)
stampaj_karticu(12, 5)
`,
    challenges: [
      {
        title: "Zadatak 1: Provera prostog broja (Zagrevanje)",
        instruction: "Napiši funkciju 'je_prost(n)' koja vraća True ako je broj prost (deljiv samo sa 1 i samim sobom), a False ako nije. Testiraj je sa brojevima 7 i 10.",
        starter: `def je_prost(n):
    if n < 2:
        return False
    # Proveri da li je deljiv sa bilo kojim brojem od 2 do n-1:
    
    return True

print("7 je prost:", je_prost(7)) # True
print("10 je prost:", je_prost(10)) # False
`,
        solution: `def je_prost(n):\n    if n < 2:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\n\nprint("7 je prost:", je_prost(7))\nprint("10 je prost:", je_prost(10))`,
        hint: "Iskoristi for i in range(2, n): if n % i == 0: return False. Ako petlja prođe bez deljenja, vrati True."
      },
      {
        title: "Zadatak 2: Konvertor valuta sa funkcijom (Glavni izazov)",
        instruction: "Napiši funkciju 'dinar_u_evro(iznos_dinara, kurs=117.2)' koja vraća iznos u evrima zaokružen na 2 decimale. Pozovi je dva puta: sa podrazumevanim kursom i sa prilagođenim kursom 117.5.",
        starter: `def dinar_u_evro(iznos_dinara, kurs=117.2):
    # Izračunaj i vrati evre:
    pass

print(dinar_u_evro(10000))
print(dinar_u_evro(10000, kurs=117.5))
`,
        solution: `def dinar_u_evro(iznos_dinara, kurs=117.2):\n    return round(iznos_dinara / kurs, 2)\n\nprint(dinar_u_evro(10000))\nprint(dinar_u_evro(10000, kurs=117.5))`,
        hint: "U funkciji vrati round(iznos_dinara / kurs, 2)."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Kviz Brzog Računanja",
        instruction: "Napravi modularni matematički kviz od 3 funkcije! 1) 'postavi_pitanje(a, b, operacija)' koja ispisuje zadatak i vraća tačan rezultat. 2) 'oceni(bodovi)' koja ispisuje poruku na osnovu poena. 3) Glavni program koji postavlja 3 matematička zadatka korisniku i vodi evidenciju bodova!",
        starter: `# MINI-PROJEKAT: MATEMATIČKI KVIZ
def proveri_zadatak(a, b, tacan_odgovor):
    unos = int(input(f"Koliko je {a} + {b}? "))
    if unos == tacan_odgovor:
        print("✅ Tačno!")
        return 1
    else:
        print(f"❌ Netačno! Tačan odgovor je bio {tacan_odgovor}.")
        return 0

# Postavi 3 zadatka i izračunaj ukupan rezultat:

`,
        solution: `def proveri_zadatak(a, b, tacan_odgovor):
    unos = int(input(f"Koliko je {a} + {b}? "))
    if unos == tacan_odgovor:
        print("✅ Tačno!")
        return 1
    else:
        print(f"❌ Netačno! Tačan odgovor je bio {tacan_odgovor}.")
        return 0

bodovi = 0
bodovi += proveri_zadatak(15, 27, 42)
bodovi += proveri_zadatak(34, 18, 52)
bodovi += proveri_zadatak(99, 101, 200)

print()\nprint("" + "=" * 25)
print(f"KRAJ KVIZA! Osvojio si {bodovi} od 3 poena!")
if bodovi == 3:
    print("🏆 Genijalac! Maksimalan učinak!")
elif bodovi >= 1:
    print("👍 Dobar rezultat, samo nastavi da vežbaš!")
else:
    print("💪 Više sreće sledeći put!")`,
        hint: "Pozovi funkciju tri puta, saberi povratne poene (bodovi += proveri_zadatak(...)) i ispiši ocenu na kraju."
      }
    ],
    quiz: {
      question: "Zašto je dobra praksa deliti kod na više manjih funkcija umesto jedne velike?",
      options: [
        { text: "Zato što manje funkcije omogućavaju lakše testiranje, ponovno korišćenje i čitljiviji kod.", correct: true, explanation: "Apsolutno! Modularnost je temelj čistog inženjerskog koda (Clean Code)." },
        { text: "Zato što Python zabranjuje funkcije duže od 20 linija.", correct: false, explanation: "Python nema takvo pravilo, ali je preporuka pisati sažete funkcije." },
        { text: "Zato što tako računar koristi 0 bajtova memorije.", correct: false, explanation: "Funkcije organizuju logiku, memorija zavisi od podataka." }
      ]
    },
    proTip: {
      title: "Ispod haube: Docstrings i pomoć uz help()",
      content: "U Pythonu odmah ispod definicije <code>def funkcija():</code> možeš staviti trostruke navodnike <code>\"\"\"Ovo je opis funkcije.\"\"\"</code> (tzv. <em>Docstring</em>). Svako ko kasnije koristi tvoju funkciju može pozvati <code>help(funkcija)</code> i pročitati tvoje uputstvo!"
    }
  },

  {
    id: "k2-kviz-sampion",
    title: "9. Veliki Projekat: Kviz Šampion (Python Milioner)",
    icon: "🏆",
    category: "Završni projekat osnova",
    summary: "Kruna osnovnog nivoa: spoji liste, petlje, funkcije i uslove u kompletnu kviz igru sa nagradama!",
    content: `
      <p class="lead">Dobrodošao u veliko finale Kursa 2! Ovde spajamo sve naučene osnove: <strong>liste pitanja, indekse, funkcije za proveru, while petlju igre, i tabelu novčanih nagrada</strong> u pravu interaktivnu igru "Ko želi da postane Pythonista?".</p>

      <h3>Kako je igra organizovana?</h3>
      <ul>
        <li>Lista pitanja i paralelne liste ponuđenih odgovora i indeksa tačnih odgovora.</li>
        <li>Skala nagrada od 5.000 RSD do 100.000 RSD.</li>
        <li>Petlja koja vodi igrača kroz pitanja i prekida se ako pogreši, ili slavi veliku pobedu na kraju!</li>
      </ul>
    `,
    starterCode: `# 🏆 VELIKI PROJEKAT: KVIZ ŠAMPION (KO ŽELI DA POSTANE PYTHONISTA) 💡
pitanja = [
    "Kojom komandom ispisujemo tekst u konzolu?",
    "Koji tip podatka čuva tekst pod navodnicima?",
    "Koji operator u Pythonu računa ostatak pri deljenju?",
    "Kako se u Pythonu definiše sopstvena funkcija?",
    "Koji je indeks PRVOG elementa u svakoj Python listi?"
]

opcije = [
    ["A) echo()", "B) print()", "C) write()"],
    ["A) int", "B) float", "C) str"],
    ["A) %", "B) //", "C) **"],
    ["A) function", "B) def", "C) fn"],
    ["A) 1", "B) 0", "C) -1"]
]

tacni_odgovori = ["B", "C", "A", "B", "B"]
nagrade = [5000, 15000, 30000, 60000, 100000]

print("=" * 45)
print(f"{'KO ŽELI DA POSTANE PYTHONISTA?':^45}")
print("=" * 45)
input("Pritisni Enter za početak kviza...")

osvojeno = 0
for i in range(len(pitanja)):
    print(f"[PITANJE {i+1} ZA {nagrade[i]} RSD]")
    print(pitanja[i])
    for opt in opcije[i]:
        print(f"  {opt}")
        
    odgovor = input("Tvoj odgovor (A, B ili C): ").strip().upper()
    
    if odgovor == tacni_odgovori[i]:
        osvojeno = nagrade[i]
        print(f"🎉 TAČNO! Osvojio si {osvojeno} RSD!")
    else:
        print(f"❌ Netačno! Tačan odgovor je bio {tacni_odgovori[i]}.")
        print(f"Kraj igre! Odlaziš sa osvojenih {osvojeno} RSD.")
        break
else:
    print("★" * 45)
    print("🏆 BRAVO ŠAMPIONE! ODGOVORIO SI NA SVA PITANJA!")
    print(f"Osvojio si GLAVNU NAGRADU: {osvojeno} RSD! 💰👑")
    print("★" * 45)
`,
    challenges: [
      {
        title: "Zadatak 1: Odigraj kviz (Zagrevanje)",
        instruction: "Pokreni kviz u desnom editoru, odgovori tačno na svih 5 pitanja (B, C, A, B, B) i osvoji 100.000 RSD!",
        starter: `# Pokreni gotov kod u desnom editoru i osvoji kviz!`,
        solution: `# Tačni odgovori po redu:
# Pitanje 1: B (print)
# Pitanje 2: C (str)
# Pitanje 3: A (%)
# Pitanje 4: B (def)
# Pitanje 5: B (0)`,
        hint: "Pazi na pitanje broj 5: u Pythonu indeksi uvek počinju od 0 (odgovor B)."
      },
      {
        title: "Zadatak 2: Dodaj još jedno pitanje (Glavni izazov)",
        instruction: "Dodaj šesto pitanje u kviz o petljama (npr. 'Kojom ključnom rečju momentalno prekidamo petlju? A) exit B) stop C) break'), ubaci opcije, tačan odgovor 'C' i nagradu od 200.000 RSD!",
        starter: `# U liste pitanja, opcije, tacni_odgovori i nagrade dodaj šesto pitanje!
`,
        solution: `# Dodaj u pitanja: "Kojom ključnom rečju momentalno prekidamo petlju?"
# Dodaj u opcije: ["A) exit", "B) stop", "C) break"]
# Dodaj u tacni_odgovori: "C"
# Dodaj u nagrade: 200000`,
        hint: "Samo dopuni sve 4 liste novim elementom na kraju."
      },
      {
        title: "Zadatak 3: Mini-Projekat: Džoker 'Pola-Pola' (50:50)",
        instruction: "Dodaj u igru džoker 'Pola-pola'! Definiši promenljivu 'dzofer_iskoriscen = False'. Kada igrač unese 'J' umesto A/B/C, ako nije iskorišćen, program eliminiše jedan netačan odgovor i dozvoljava mu da ponovo bira!",
        starter: `# U igru dodaj promenljivu:
# ima_dzoker = True
# i proveri ako igrač unese "J" ili "DZOKER"!
`,
        solution: `# U glavnoj petlji proveri unos:
# if odgovor == "J" and ima_dzoker:
#     ima_dzoker = False
#     print("Pola-pola aktivirano! Jedan pogrešan odgovor je precrtan.")
#     odgovor = input("Tvoj konačan odgovor: ").strip().upper()`,
        hint: "Iskoristi boolean promenljivu ima_dzoker = True i proveri if odgovor == 'J': ima_dzoker = False."
      }
    ],
    quiz: {
      question: "Zašto se else blok na kraju for petlje (for ... else) izvršava samo ako igrač odgovori na sva pitanja?",
      options: [
        { text: "Zato što se u slučaju pogrešnog odgovora poziva break, a else blok for petlje se preskače ako je došlo do prekida preko break!", correct: true, explanation: "Bravo! Ovo je jedna od najlepših caka u Pythonu: for-else se izvršava samo ako petlja nije bila prekinuta komandom break." },
        { text: "Zato što else blok uvek briše sve promenljive.", correct: false, explanation: "Netačno, else blok ne briše ništa." },
        { text: "Zato što je to obavezno u svakom programu.", correct: false, explanation: "else blok na petlji je potpuno opcioni dodatak." }
      ]
    },
    proTip: {
      title: "Ispod haube: Šta si sve savladao u Osnovama 1 i 2?",
      content: "Čestitamo! Kroz ova dva kursa savladao si: promenljive, tipove, celobrojnu matematiku, formatirani ispis, rad sa unosom, ugnježdenu if-elif-else logiku, for i while petlje, akumulatore, rad sa listama i modularne funkcije. Spreman si za svaki projekat!"
    }
  }
];


// ============================================================================

// ============================================================================
// EKSPERTSKA NADOGRADNJA KURSA 1 I KURSA 2 (Dr Lazar Petrović & Tim)
// ============================================================================
(function applyCurriculumUpgrades() {
  // 1. KURS 1: Dodatni zadaci za lekcije 3-9 (da svaka lekcija ima 2 postupna zadatka)
  const k1ExtraChallenges = {
    "matematika-stringovi": {
      title: "Zadatak 2: Račun za piceriju",
      instruction: "Cena jedne pice je 950 dinara, a naručuješ 3 pice i 2 soka od po 220 dinara. Izračunaj ukupan račun i ispiši ga f-stringom sa porukom.",
      starter: "# Izračunaj ukupan račun:\ncena_pice = 950\ncena_soka = 220\n\n# Tvoj kod ispod:\n",
      solution: "cena_pice = 950\ncena_soka = 220\nukupno = (3 * cena_pice) + (2 * cena_soka)\nprint(f'Ukupan račun za piceriju iznosi: {ukupno} RSD')",
      hint: "Pomnoži broj komada sa cenom (3 * cena_pice + 2 * cena_soka) i rezultat ubaci u print(f'...')."
    },
    "unos-input": {
      title: "Zadatak 2: Kalkulator godina starosti",
      instruction: "Pitaj korisnika koje godine je rođen (ne zaboravi int()!), izračunaj koliko godina puni 2026. godine i ispiši rezultat.",
      starter: "# Pitaj za godinu rođenja i izračunaj starost:\n",
      solution: "godina = int(input('Koje godine si rođen/a? '))\nstarost = 2026 - godina\nprint(f'U 2026. godini puniš {starost} godina!')",
      hint: "input() uvek vraća tekst. Obmotaj ga sa int(input(...)) pre nego što ga oduzmeš od 2026."
    },
    "uslovi-if-else": {
      title: "Zadatak 2: Provera ocene na testu",
      instruction: "Unesi broj poena na testu (od 0 do 100). Ako je 90 ili više ispiši 'Odličan (5)', ako je 70 ili više 'Vrlo dobar (4)', ako je 50 ili više 'Dovoljan/Dobar', a ispod 50 'Potrebno je još vežbe'.",
      starter: "poeni = int(input('Unesi broj poena (0-100): '))\n\n# Napiši if / elif / else grananje ispod:\n",
      solution: "poeni = int(input('Unesi broj poena (0-100): '))\nif poeni >= 90:\n    print('Odličan (5) 🌟')\nelif poeni >= 70:\n    print('Vrlo dobar (4) 👍')\nelif poeni >= 50:\n    print('Položio si test! ✅')\nelse:\n    print('Potrebno je još malo vežbe. 💪')",
      hint: "Kreni od najvećeg broja (if poeni >= 90:), pa spuštaj nadole sa elif poeni >= 70:, elif poeni >= 50:, i na kraju else:."
    },
    "petlje-loops": {
      title: "Zadatak 2: Tablica množenja za izabrani broj",
      instruction: "Napravi for petlju koja ispisuje tablicu množenja za broj 7 (od 7 x 1 = 7 do 7 x 10 = 70).",
      starter: "broj = 7\n# Koristi for i in range(1, 11):\n",
      solution: "broj = 7\nfor i in range(1, 11):\n    print(f'{broj} x {i} = {broj * i}')",
      hint: "range(1, 11) daje brojeve od 1 do 10 (gornja granica 11 nije uključena)."
    },
    "liste-kolekcije": {
      title: "Zadatak 2: Spisak za kupovinu",
      instruction: "Napravi listu korpa sa 3 artikla ('hleb', 'mleko', 'jabuke'). Dodaj 'čokolada' pomoću .append(), ukloni 'hleb' pomoću .remove() i ispiši broj stavki i celu listu.",
      starter: "korpa = ['hleb', 'mleko', 'jabuke']\n# Dodaj čokoladu i ukloni hleb:\n",
      solution: "korpa = ['hleb', 'mleko', 'jabuke']\nkorpa.append('čokolada')\nkorpa.remove('hleb')\nprint(f'Broj artikala: {len(korpa)}')\nprint('Sadržaj korpe:', korpa)",
      hint: "Za dodavanje koristi korpa.append('čokolada'), za brisanje korpa.remove('hleb'), a za dužinu len(korpa)."
    },
    "funkcije-def": {
      title: "Zadatak 2: Funkcija za površinu pravougaonika",
      instruction: "Napiši funkciju povrsina(sirina, visina) koja vraća (return) proizvod širine i visine. Pozovi je za sobu dimenzija 4 i 5 metara i ispiši rezultat.",
      starter: "# Definiši funkciju povrsina(sirina, visina):\n",
      solution: "def povrsina(sirina, visina):\n    return sirina * visina\n\nrezultat = povrsina(4, 5)\nprint(f'Površina sobe je {rezultat} m2.')",
      hint: "Ne zaboravi ključnu reč return sirina * visina unutar funkcije kako bi rezultat mogao da se sačuva u promenljivoj."
    },
    "mini-projekat-igra": {
      title: "Zadatak 2: Nadogradnja igre — Brojač pokušaja",
      instruction: "Napiši kratku igru pogađanja gde je tajni broj 7, a igrač ima maksimalno 3 pokušaja pomoću for petlje. Ako pogodi, prekini petlju sa break i čestitaj!",
      starter: "tajni = 7\nfor pokusaj in range(1, 4):\n    # Unesi broj i proveri da li je jednak tajnom:\n    pass\n",
      solution: "tajni = 7\npogodio = False\nfor pokusaj in range(1, 4):\n    unos = int(input(f'Pokušaj {pokusaj}/3 - Pogodi broj (1-10): '))\n    if unos == tajni:\n        print(f'Bravo! Pogodio si u {pokusaj}. pokušaju! 🏆')\n        pogodio = True\n        break\n    else:\n        print('Nije taj broj, probaj ponovo!')\nif not pogodio:\n    print(f'Kraj igre! Tajni broj je bio {tajni}.')",
      hint: "Koristi break čim unos == tajni da petlja ne pita dalje nakon pobede."
    }
  };

  // Poveži pilot video lekciju za Kurs 1, Lekcija 1 (podržava i youtubeId čim se okači na YouTube!)
  const k1VideoMap = [
    'kurs1_lekcija1_zdravo_svete',
    'kurs1_lekcija2_promenljive',
    'kurs1_lekcija3_matematika',
    'kurs1_lekcija4_input',
    'kurs1_lekcija5_uslovi',
    'kurs1_lekcija6_petlje',
    'kurs1_lekcija7_liste',
    'kurs1_lekcija8_funkcije',
    'kurs1_lekcija9_igra'
  ];
  k1VideoMap.forEach((slug, idx) => {
    if (LESSONS_KURS_1[idx]) {
      LESSONS_KURS_1[idx].localVideoUrl = 'video_lekcije/' + slug + '.mp4';
      LESSONS_KURS_1[idx].videoPoster = 'video_lekcije/' + slug + '_thumbnail.png';
    }
  });

    LESSONS_KURS_1.forEach(lesson => {
    if (k1ExtraChallenges[lesson.id] && lesson.challenges && lesson.challenges.length < 2) {
      lesson.challenges.push(k1ExtraChallenges[lesson.id]);
    }
  });

  // 2. KURS 2: Dopuna teorije ("Najčešće zamke početnika") za lekcije 3, 7, 8 i 9
  const k2ExtraTheory = {
    "k2-matematika-modulo-vreme": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Najčešće zamke početnika sa <code>/</code>, <code>//</code> i <code>%</code>:</strong>
          <ul>
            <li>Obično deljenje <code>10 / 2</code> u Pythonu <strong>uvek vraća decimalni broj</strong> (<code>5.0</code>), dok celobrojno <code>10 // 2</code> vraća ceo broj (<code>5</code>).</li>
            <li>Operator modulo <code>%</code> NE računa procenat! <code>125 % 60</code> daje ostatak <code>5</code> (minuta), što je ključno za satove, parne brojeve (<code>x % 2 == 0</code>) i cikluse.</li>
          </ul>
        </div>
      </div>`,
    "k2-liste-menadzer": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Najčešće zamke početnika sa listama:</strong>
          <ul>
            <li>Indeksi kreću od <strong>0</strong>, a ne od 1! Ako lista ima 3 elementa, poslednji indeks je <code>2</code> (ili <code>-1</code>). Pristup na <code>lista[3]</code> izaziva <code>IndexError</code>.</li>
            <li><code>lista.remove(x)</code> briše po <em>vrednosti</em> (i puca ako vrednost ne postoji), dok <code>lista.pop(i)</code> briše po <em>poziciji</em> i vraća obrisani element.</li>
          </ul>
        </div>
      </div>`,
    "k2-funkcije-modularnost": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Najčešće zamke početnika sa funkcijama:</strong>
          <ul>
            <li>Mešanje <code>print()</code> i <code>return</code>: funkcija koja samo štampa vraća <code>None</code> i njen rezultat ne možeš dalje sabirati ni čuvati!</li>
            <li>Zaboravljanje zagrada pri pozivu: <code>pozdrav</code> samo pokazuje gde funkcija živi u memoriji, dok <code>pozdrav()</code> zaista pokreće njen kod.</li>
          </ul>
        </div>
      </div>`,
    "k2-kviz-sampion": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Inženjerski savet za velike projekte:</strong>
          <ul>
            <li>Uvek normalizuj korisnički unos sa <code>.strip().lower()</code> (ili <code>.upper()</code>) kako razmak ili malo slovo ne bi nepravedno poništili tačan odgovor igrača.</li>
            <li>Razbij igru na male funkcije (prikaz pitanja, provera odgovora, obračun nagrade) — tako se greške pronalaze za 10 sekundi!</li>
          </ul>
        </div>
      </div>`
  };

  // 3. KURS 2: Drugo kviz pitanje za sve lekcije (ujednačeno sa Kursom 3)
  const k2SecondQuizzes = {
    "k2-print-formatiranje": {
      question: "Šta ispisuje izraz print(f'{3.14159:.2f}')?",
      options: [
        { text: "3.14", correct: true, explanation: "Tačno! Specifikator :.2f zaokružuje decimalni broj na tačno 2 decimale." },
        { text: "3.14159", correct: false, explanation: "Netačno. :.2f skraćuje prikaz na dve decimale." },
        { text: "3.1", correct: false, explanation: "Netačno. Broj 2 označava tačno dve cifre iza tačke." }
      ]
    },
    "k2-varijable-kalkulatori": {
      question: "Koji je tip promenljive rezultat nakon linije: rezultat = round(10 / 3, 2)?",
      options: [
        { text: "int (ceo broj)", correct: false, explanation: "Netačno. round(..., 2) vraća decimalni broj sa 2 decimale." },
        { text: "float (decimalni broj)", correct: true, explanation: "Bravo! Rezultat je 3.33, što je tipa float." },
        { text: "str (tekst)", correct: false, explanation: "Netačno. round() uvek vraća broj, ne tekst." }
      ]
    },
    "k2-matematika-modulo-vreme": {
      question: "Koji izraz tačno proverava da li je ceo broj n paran?",
      options: [
        { text: "n / 2 == 0", correct: false, explanation: "Netačno. 4 / 2 je 2.0, a ne 0." },
        { text: "n % 2 == 0", correct: true, explanation: "Tačno! Parni brojevi pri deljenju sa 2 imaju ostatak 0." },
        { text: "n // 2 == 0", correct: false, explanation: "Netačno. 4 // 2 je 2, pa bi ovo važilo samo za 0 i 1." }
      ]
    },
    "k2-input-personalizacija": {
      question: "Čemu služi metod .strip() kada čitamo unos korisnika?",
      options: [
        { text: "Uklanja slučajne razmake sa početka i kraja teksta.", correct: true, explanation: "Bravo! '  ana  '.strip() postaje čisto 'ana'." },
        { text: "Briše sva slova iz teksta.", correct: false, explanation: "Netačno. .strip() uklanja samo beline (razmake, nove redove) na ivicama." },
        { text: "Pretvara tekst u ceo broj.", correct: false, explanation: "Za pretvaranje u ceo broj služi int()." }
      ]
    },
    "k2-slozena-grananja": {
      question: "Kada je izraz (godine >= 18 and ima_kartu) tačan (True)?",
      options: [
        { text: "Kada je bar jedan od dva uslova tačan.", correct: false, explanation: "To važi za operator 'or', a ne za 'and'." },
        { text: "Samo kada su OBA uslova istovremeno tačna.", correct: true, explanation: "Tačno! Operator 'and' zahteva da i levi i desni uslov budu True." },
        { text: "Samo kada su oba uslova netačna.", correct: false, explanation: "Netačno. Tada je rezultat False." }
      ]
    },
    "k2-petlje-simulacije": {
      question: "Koja je razlika između naredbi break i continue unutar petlje?",
      options: [
        { text: "break odmah izlazi iz cele petlje, dok continue preskače samo trenutni korak i ide na sledeći.", correct: true, explanation: "Savršeno! To je jedna od najvažnijih razlika kod kontrole petlji." },
        { text: "Obe naredbe rade potpuno istu stvar.", correct: false, explanation: "Netačno. break prekida petlju zauvek, a continue samo prelazi na narednu iteraciju." },
        { text: "continue gasi ceo Python program.", correct: false, explanation: "Netačno. continue samo preskače ostatak koda u tekućem krugu petlje." }
      ]
    },
    "k2-liste-menadzer": {
      question: "Šta vraća zadaci[-1] za nepraznu listu zadaci?",
      options: [
        { text: "Grešku IndexError.", correct: false, explanation: "Python podržava negativno indeksiranje bez greške!" },
        { text: "Poslednji element u listi.", correct: true, explanation: "Tačno! -1 je uvek poslednji element, -2 pretposlednji itd." },
        { text: "Prvi element u listi.", correct: false, explanation: "Prvi element je uvek na indeksu 0." }
      ]
    },
    "k2-funkcije-modularnost": {
      question: "Šta će funkcija vratiti ako u njenom telu NE napišemo naredbu return?",
      options: [
        { text: "Broj 0.", correct: false, explanation: "Netačno. Python ne vraća 0 podrazumevano." },
        { text: "Specijalnu vrednost None.", correct: true, explanation: "Tačno! Svaka funkcija bez return (ili sa praznim return) automatski vraća None." },
        { text: "Prijaviće SyntaxError.", correct: false, explanation: "Netačno. Funkcije bez return su potpuno ispravne (npr. funkcije koje samo štampaju)." }
      ]
    },
    "k2-kviz-sampion": {
      question: "Zašto u projektima poput Kviza koristimo listu rečnika (npr. [{'pitanje': ..., 'odgovor': ...}])?",
      options: [
        { text: "Zato što svako pitanje drži sve svoje podatke (tekst, opcije, tačan odgovor) uredno grupisane zajedno.", correct: true, explanation: "Bravo! Lista rečnika je najčešća struktura podataka u realnim veb aplikacijama i JSON API-jima." },
        { text: "Zato što Python ne dozvoljava obične liste.", correct: false, explanation: "Netačno, dozvoljava ih, ali lista rečnika je neuporedivo preglednija i lakša za proširenje." },
        { text: "Zato što se tako kod brže kuca bez navodnika.", correct: false, explanation: "Rečnici i dalje koriste navodnike za ključeve, ali donose vrhunsku organizaciju podataka." }
      ]
    }
  };

  LESSONS_KURS_2.forEach(lesson => {
    if (k2ExtraTheory[lesson.id] && !lesson.content.includes('Najčešće zamke')) {
      lesson.content += k2ExtraTheory[lesson.id];
    }
    if (k2SecondQuizzes[lesson.id] && lesson.quiz && !Array.isArray(lesson.quiz)) {
      lesson.quiz = [lesson.quiz, k2SecondQuizzes[lesson.id]];
    }
  });
})();


// ============================================================================
// SUPER-NADOGRADNJA KURSA 1: DODATNI PRIMERI + 4 ZADATKA PO LEKCIJI (36 ZADATAKA)
// ============================================================================
(function applyKurs1SuperUpgrade() {
  const k1ExtraExamples = {
    "uvod-print": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Pisanje više vrednosti u jednom redu:</strong> Zarez u <code>print()</code> automatski stavlja razmak.</p>
        <pre><code>print("Ime:", "Marko", "| Godina:", 14)
print("Omiljeni sport:", "Košarka 🏀")</code></pre>
        <p><strong>Primer 2 — Ponavljanje znakova za ukrasne okvire:</strong></p>
        <pre><code>print("=" * 30)
print("   DOBRODOŠLI U PYTHON!   ")
print("=" * 30)</code></pre>
      </div>`,
    "promenljive-tipovi": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Promena vrednosti promenljive tokom igre:</strong></p>
        <pre><code>poeni = 0
print("Početak igre, poeni:", poeni)
poeni = poeni + 100
print("Uhvatio si novčić! Novi poeni:", poeni)</code></pre>
        <p><strong>Primer 2 — Provera tipa podatka pomoću <code>type()</code>:</strong></p>
        <pre><code>grad = "Beograd"
stanovnici = 1400000
temperatura = 22.5
je_suncano = True
print(type(grad), type(stanovnici), type(temperatura), type(je_suncano))</code></pre>
      </div>`,
    "matematika-stringovi": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Pretvaranje minuta u sate i minute:</strong></p>
        <pre><code>ukupno_minuta = 135
sati = ukupno_minuta // 60
ostatak_minuta = ukupno_minuta % 60
print(f"Film traje {sati}h i {ostatak_minuta}min.")</code></pre>
        <p><strong>Primer 2 — Igra sa tekstom (velika/mala slova i dužina):</strong></p>
        <pre><code>poruka = "python je zabavan"
print(poruka.upper())
print(poruka.title())
print("Broj slova:", len(poruka))</code></pre>
      </div>`,
    "unos-input": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Kalkulator džeparca (pretvaranje u <code>float</code>):</strong></p>
        <pre><code>dnevno = float(input("Koliko dinara štediš dnevno? "))
za_mesec = dnevno * 30
print(f"Za mesec dana uštedećeš {za_mesec} RSD!")</code></pre>
        <p><strong>Primer 2 — Čišćenje razmaka iz unosa:</strong></p>
        <pre><code>ime = input("Unesi svoje ime: ").strip().title()
print(f"Zdravo, {ime}! Lepo te je upoznati.")</code></pre>
      </div>`,
    "uslovi-if-else": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Cena bioskopske karte po godinama:</strong></p>
        <pre><code>godine = 12
if godine < 7:
    print("Ulaz je BESPLATAN! 🎟️")
elif godine < 18:
    print("Đačka karta: 350 RSD")
else:
    print("Puna karta: 600 RSD")</code></pre>
        <p><strong>Primer 2 — Provera tajne lozinke:</strong></p>
        <pre><code>lozinka = "python123"
if lozinka == "python123":
    print("Pristup odobren! 🔓")
else:
    print("Pogrešna lozinka! 🔒")</code></pre>
      </div>`,
    "petlje-loops": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Odbrojavanje rakete unazad (korak -1):</strong></p>
        <pre><code>for sekunda in range(5, 0, -1):
    print(f"Lansiranje za {sekunda}...")
print("POLETANJE! 🚀")</code></pre>
        <p><strong>Primer 2 — Štampanje samo parnih brojeva (korak 2):</strong></p>
        <pre><code>for broj in range(2, 11, 2):
    print("Paran broj:", broj)</code></pre>
      </div>`,
    "liste-kolekcije": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Prolazak kroz listu ocenama i računanje proseka:</strong></p>
        <pre><code>ocene = [5, 4, 5, 5, 4]
prosek = sum(ocene) / len(ocene)
print("Sve ocene:", ocene)
print(f"Prosek je: {prosek}")</code></pre>
        <p><strong>Primer 2 — Provera da li je stavka u listi pomoću <code>in</code>:</strong></p>
        <pre><code>ranac = ["knjiga", "olovka", "voda"]
if "voda" in ranac:
    print("Spreman si za izlet! 🎒")</code></pre>
      </div>`,
    "funkcije-def": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Funkcija za pretvaranje Celzijusa u Farenhajte:</strong></p>
        <pre><code>def u_farenhajte(celzijus):
    return celzijus * 1.8 + 32

print("25°C je", u_farenhajte(25), "°F")</code></pre>
        <p><strong>Primer 2 — Funkcija koja proverava da li je broj paran:</strong></p>
        <pre><code>def je_paran(broj):
    return broj % 2 == 0

print("Da li je 8 paran?", je_paran(8))
print("Da li je 7 paran?", je_paran(7))</code></pre>
      </div>`,
    "mini-projekat-igra": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Bacanje dve kockice pomoću <code>random.randint</code>:</strong></p>
        <pre><code>import random
kocka1 = random.randint(1, 6)
kocka2 = random.randint(1, 6)
print(f"Dobio si {kocka1} i {kocka2} (ukupno: {kocka1 + kocka2}) 🎲")</code></pre>
        <p><strong>Primer 2 — Slučajan izbor pobednika iz liste (<code>random.choice</code>):</strong></p>
        <pre><code>import random
igraci = ["Ana", "Marko", "Jelena", "Stefan"]
pobednik = random.choice(igraci)
print("Srećni dobitnik je:", pobednik, "🏆")</code></pre>
      </div>`
  };

  // ZADATAK 3 (🐛 Detektiv za greške) i ZADATAK 4 (🏆 Mini-izazov) za svih 9 lekcija Kursa 1
  const k1ExtraChallenges34 = {
    "uvod-print": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Popravi kod!)",
        instruction: "Ovaj program ima DVE greške sa navodnicima i zagradama pa ne može da se pokrene. Pronađi ih i popravi da ispiše obe rečenice bez greške!",
        starter: `# Pronađi i popravi 2 greške ispod:\nprint(Učim Python danas!)\nprint("Programiranje je super"\n`,
        solution: `print("Učim Python danas!")\nprint("Programiranje je super")`,
        hint: "U prvom redu nedostaju navodnici oko teksta, a u drugom redu nedostaje zatvorena zagrada )."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Vizit karta u okviru",
        instruction: "Napravi lepu vizit kartu u najmanje 3 reda: gornja linija od zvezdica ili znakova '=', srednji red sa tvojim imenom i zanimanjem, i donja linija okvira.",
        starter: `# Napravi ukrasnu vizit kartu u 3 reda:\nprint("=" * 28)\n# Dodaj srednji red sa imenom i donji okvir:\n`,
        solution: `print("=" * 28)\nprint("|  Ana - Budući Programer  |")\nprint("=" * 28)`,
        hint: "Iskoristi print('=' * 28) za gornju i donju ivicu, a između ubaci print('| Tvoje ime |')."
      }
    ],
    "promenljive-tipovi": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Neispravna imena)",
        instruction: "Kod ispod puca jer promenljiva počinje brojem i sadrži razmak! Popravi imena promenljivih (koristi donju crtu _) da ispiše ukupnu cenu 450.",
        starter: `# Popravi imena promenljivih i ispiši zbir (450):\n1_cena = 200\ndruga cena = 250\nukupno = 1_cena + druga cena\nprint("Ukupno:", ukupno)\n`,
        solution: `prva_cena = 200\ndruga_cena = 250\nukupno = prva_cena + druga_cena\nprint("Ukupno:", ukupno)`,
        hint: "Ime promenljive ne sme da počinje cifrom niti da ima razmak. Napiši prva_cena i druga_cena."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Kartica lika iz igrice",
        instruction: "Napravi 3 promenljive: ime_lika (tekst), nivo (ceo broj, npr. 5) i zdravlje (decimalni broj, npr. 98.5). Ispiši ih sve pomoću f-stringa!",
        starter: `# Kreiraj promenljive ime_lika, nivo i zdravlje:\n`,
        solution: `ime_lika = "Zmaj"\nnivo = 5\nzdravlje = 98.5\nprint(f"Lik: {ime_lika} | Nivo: {nivo} | Zdravlje: {zdravlje}%")`,
        hint: "Dodeljuj vrednosti sa = (tekst pod navodnicima, brojevi bez navodnika) i ispiši ih sa print(f'...')."
      }
    ],
    "matematika-stringovi": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Tekst + Broj)",
        instruction: "Program pokušava da sabere tekstualni broj '50' sa brojem 25 i puca sa TypeError! Pretvori tekst u ceo broj pomoću int() da dobiješ rezultat 75.",
        starter: `# Popravi grešku sa tipovima podataka:\ncena_tekst = "50"\ndodatak = 25\nukupno = cena_tekst + dodatak\nprint("Ukupno:", ukupno)\n`,
        solution: `cena_tekst = "50"\ndodatak = 25\nukupno = int(cena_tekst) + dodatak\nprint("Ukupno:", ukupno)`,
        hint: "Umesto cena_tekst + dodatak napiši int(cena_tekst) + dodatak."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Pretvarač sekundi",
        instruction: "Imaš promenljivu ukupno_sekundi = 200. Pomoću celobrojnog deljenja (//) i ostatka (%) izračunaj koliko je to minuta i sekundi, pa ispiši rezultat (3 minuta i 20 sekundi).",
        starter: `ukupno_sekundi = 200\n# Izračunaj minute (// 60) i ostatak sekundi (% 60):\n`,
        solution: `ukupno_sekundi = 200\nminuta = ukupno_sekundi // 60\nsekundi = ukupno_sekundi % 60\nprint(f"{ukupno_sekundi}s = {minuta} minuta i {sekundi} sekundi")`,
        hint: "minuta = ukupno_sekundi // 60, a sekundi = ukupno_sekundi % 60."
      }
    ],
    "unos-input": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Spojeni brojevi!)",
        instruction: "Ovaj program treba da sabere dva uneta broja, ali umesto 5 + 3 = 8 on ispisuje '53'! Popravi kod tako da ih zaista sabira kao brojeve.",
        starter: `# Zašto ovaj kod ispisuje 53 umesto 8? Popravi ga!\na = input("Prvi broj: ")\nb = input("Drugi broj: ")\nprint("Zbir je:", a + b)\n`,
        solution: `a = int(input("Prvi broj: "))\nb = int(input("Drugi broj: "))\nprint("Zbir je:", a + b)`,
        hint: "Obmotaj oba input() poziva sa int(input(...)) ili float(input(...))."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Generator korisničkog imena",
        instruction: "Pitaj korisnika za ime i omiljeni broj, spoji ih malim slovima sa donjom crtom (npr. ana_7) i ispiši predlog za korisničko ime!",
        starter: `# Pitaj za ime i omiljeni broj pa napravi username:\n`,
        solution: `ime = input("Unesi ime: ").strip().lower()\nbroj = input("Omiljeni broj: ").strip()\nprint(f"Tvoje korisničko ime: @{ime}_{broj}")`,
        hint: "Koristi .lower() da ime bude malim slovima i f-string f'@{ime}_{broj}'."
      }
    ],
    "uslovi-if-else": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Dvotačka i znak poređenja)",
        instruction: "Kod ispod ima 2 klasične greške: fali dvotačka (:) i koristi se pogrešan znak = umesto == za poređenje! Popravi ga da ispiše 'Punoletan si!'.",
        starter: `# Popravi greške u if uslovu:\ngodine = 18\nif godine = 18\n    print("Punoletan si!")\nelse\n    print("Maloletan si!")\n`,
        solution: `godine = 18\nif godine >= 18:\n    print("Punoletan si!")\nelse:\n    print("Maloletan si!")`,
        hint: "Za poređenje koristi == ili >=, i ne zaboravi dvotačku : na kraju if i else linije!"
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Pametni kalkulator popusta",
        instruction: "Za promenljivu racun = 4500: ako je račun veći ili jednak 3000, kupac dobija 10% popusta (plaća racun * 0.9), inače plaća punu cenu. Ispiši konačan iznos za plaćanje (4050.0)!",
        starter: `racun = 4500\n# Ako je racun >= 3000, primeni 10% popusta:\n`,
        solution: `racun = 4500\nif racun >= 3000:\n    konacno = racun * 0.9\n    print(f"Ostvario si 10% popusta! Za plaćanje: {konacno} RSD")\nelse:\n    print(f"Za plaćanje: {racun} RSD")`,
        hint: "10% popusta znači da plaćaš 90% cene, odnosno racun * 0.9."
      }
    ],
    "petlje-loops": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Fali broj 10!)",
        instruction: "Ova petlja treba da ispiše brojeve od 1 do 10, ali staje na broju 9! Popravi range() tako da ispiše sve brojeve zaključno sa 10.",
        starter: `# Ova petlja staje na 9 umesto na 10 — popravi range():\nfor i in range(1, 10):\n    print(i)\n`,
        solution: `for i in range(1, 11):\n    print(i)`,
        hint: "U Pythonu range(1, 10) ide do 9! Za brojeve do 10 napiši range(1, 11)."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Zbir samo parnih brojeva",
        instruction: "Pomoću for petlje i if uslova (broj % 2 == 0) izračunaj zbir svih PARNIH brojeva od 1 do 20 i ispiši rezultat (treba da bude 110)!",
        starter: `zbir_parnih = 0\n# Prođi kroz brojeve od 1 do 20 i saberi samo parne:\n`,
        solution: `zbir_parnih = 0\nfor broj in range(1, 21):\n    if broj % 2 == 0:\n        zbir_parnih += broj\nprint("Zbir parnih brojeva od 1 do 20 je:", zbir_parnih)`,
        hint: "range(1, 21) prolazi do 20, a if broj % 2 == 0: proverava da li je broj paran."
      }
    ],
    "liste-kolekcije": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (IndexError!)",
        instruction: "Program pokušava da ispiše poslednji element liste voće pomoću indeksa [3], ali lista ima 3 elementa (indeksi 0, 1, 2) pa puca! Popravi indeks da ispiše 'banana'.",
        starter: `# Popravi IndexError da ispiše poslednje voće ('banana'):\nvoce = ["jabuka", "kruška", "banana"]\nprint("Poslednje voće je:", voce[3])\n`,
        solution: `voce = ["jabuka", "kruška", "banana"]\nprint("Poslednje voće je:", voce[-1])`,
        hint: "Poslednji element liste od 3 stavke je na indeksu 2 ili najlakše voce[-1]."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Najbolji rezultat na turniru",
        instruction: "Data je lista poeni = [120, 450, 310, 890, 240]. Bez ručnog prepisivanja, ispiši najveći rezultat (max), najmanji (min) i ukupan zbir svih poena (sum)!",
        starter: `poeni = [120, 450, 310, 890, 240]\n# Ispiši max, min i sum poena:\n`,
        solution: `poeni = [120, 450, 310, 890, 240]\nprint("Rekord (max):", max(poeni))\nprint("Najmanje (min):", min(poeni))\nprint("Ukupno (sum):", sum(poeni))`,
        hint: "Python ima ugrađene funkcije max(poeni), min(poeni) i sum(poeni)."
      }
    ],
    "funkcije-def": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Funkcija vraća None!)",
        instruction: "Funkcija dupliraj(x) samo štampa rezultat umesto da ga vrati sa return, pa promenljiva r dobija None! Popravi funkciju da vraća 2 * x.",
        starter: `# Popravi funkciju da VRAĆA dupliranu vrednost (ne samo print!):\ndef dupliraj(x):\n    print(x * 2)\n\nr = dupliraj(15)\nprint("Duplirani broj je:", r)\n`,
        solution: `def dupliraj(x):\n    return x * 2\n\nr = dupliraj(15)\nprint("Duplirani broj je:", r)`,
        hint: "Zameni print(x * 2) unutar funkcije sa return x * 2."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Funkcija za veći broj",
        instruction: "Napiši funkciju veci_broj(a, b) koja pomoću if-else vraća (return) veći od dva prosleđena broja. Pozovi je za (12, 25) i ispiši rezultat!",
        starter: `# Definiši funkciju veci_broj(a, b):\n`,
        solution: `def veci_broj(a, b):\n    if a >= b:\n        return a\n    else:\n        return b\n\nprint("Veći broj je:", veci_broj(12, 25))`,
        hint: "Ako je a >= b vrati a (return a), u suprotnom vrati b (return b)."
      }
    ],
    "mini-projekat-igra": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Zaboravljeni import i break)",
        instruction: "Mini-igra puca jer nedostaje 'import random' na vrhu! Dodaj import na početak i pokreni simulaciju bacanja kockice dok ne padne šestica.",
        starter: `# Popravi grešku da igra radi bez NameError:\nbacanja = 0\nwhile True:\n    kocka = random.randint(1, 6)\n    bacanja += 1\n    print(f"Bacanje {bacanja}: pala je {kocka}")\n    if kocka == 6:\n        print("Šestica! Pobeda! 🎲")\n        break\n`,
        solution: `import random\nbacanja = 0\nwhile True:\n    kocka = random.randint(1, 6)\n    bacanja += 1\n    print(f"Bacanje {bacanja}: pala je {kocka}")\n    if kocka == 6:\n        print("Šestica! Pobeda! 🎲")\n        break`,
        hint: "Dodaj liniju import random na sam početak programa (linija 1)."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Kamen, Papir, Makaze (1 runda)",
        instruction: "Napravi jednu rundu igre 'Kamen, Papir, Makaze' protiv računara! Računar bira pomoću random.choice(['kamen', 'papir', 'makaze']), ti unosiš svoj izbor, a if-elif-else određuje pobednika!",
        starter: `import random\nopcije = ["kamen", "papir", "makaze"]\nracunar = random.choice(opcije)\nigrac = input("Izaberi (kamen/papir/makaze): ").strip().lower()\nprint("Računar je izabrao:", racunar)\n# Dodaj if / elif / else da odrediš pobednika:\n`,
        solution: `import random\nopcije = ["kamen", "papir", "makaze"]\nracunar = random.choice(opcije)\nigrac = input("Izaberi (kamen/papir/makaze): ").strip().lower()\nprint("Računar je izabrao:", racunar)\nif igrac == racunar:\n    print("Nerešeno! 🤝")\nelif (igrac == "kamen" and racunar == "makaze") or (igrac == "papir" and racunar == "kamen") or (igrac == "makaze" and racunar == "papir"):\n    print("Pobedio si! 🏆")\nelse:\n    print("Računar je pobedio! 🤖")`,
        hint: "Prvo proveri if igrac == racunar (nerešeno), zatim pobedničke kombinacije za igrača, i na kraju else."
      }
    ]
  };

  LESSONS_KURS_1.forEach(lesson => {
    if (k1ExtraExamples[lesson.id] && !lesson.content.includes('extra-examples-box')) {
      lesson.content += k1ExtraExamples[lesson.id];
    }
    if (k1ExtraChallenges34[lesson.id] && lesson.challenges && lesson.challenges.length < 4) {
      lesson.challenges.push(...k1ExtraChallenges34[lesson.id]);
    }
  });
})();


// ============================================================================
// PROŠIRENJE KVIZOVA KURSA 1 NA PO 4 RAZNOVRSNA PITANJA (36 PITANJA UKUPNO)
// ============================================================================
(function applyKurs1ExpandedQuizzes() {
  const k1ExtraQuizzes = {
    "uvod-print": [
      {
        question: "Šta će ispisati kod: print('=' * 4)?",
        options: [
          { text: "==== (četiri znaka jednakosti)", correct: true, explanation: "Tačno! Množenje stringa brojem ponavlja taj tekst zadati broj puta." },
          { text: "= * 4", correct: false, explanation: "Netačno. Pošto je * van navodnika, Python izvršava ponavljanje teksta." },
          { text: "Grešku jer se tekst ne može množiti", correct: false, explanation: "U Pythonu se tekst MOŽE množiti celim brojem!" }
        ]
      },
      {
        question: "Čemu služi znak tarabe (#) na početku linije u Pythonu?",
        options: [
          { text: "Briše ceo program", correct: false, explanation: "Netačno. Znak # ništa ne briše." },
          { text: "Obeležava komentar — belešku za ljude koju računar preskače", correct: true, explanation: "Bravo! Komentari pomažu tebi i drugima da razumete šta kod radi." },
          { text: "Povećava font u terminalu", correct: false, explanation: "Netačno. # služi isključivo za komentare u kodu." }
        ]
      },
      {
        question: "Koji od sledećih redova je 100% ispravan u Pythonu?",
        options: [
          { text: 'Print("Zdravo")', correct: false, explanation: "Pazi! Python razlikuje velika i mala slova — mora malo 'print'." },
          { text: 'print("Zdravo")', correct: true, explanation: "Savršeno! Malo slovo p, otvorena i zatvorena zagrada i navodnici oko teksta." },
          { text: 'print "Zdravo"', correct: false, explanation: "U Pythonu 3 zagrade oko argumenta u print() su obavezne!" }
        ]
      }
    ],
    "promenljive-tipovi": [
      {
        question: "Šta će ispisati sledeći kod?\npoeni = 10\npoeni = poeni + 5\nprint(poeni)",
        options: [
          { text: "10", correct: false, explanation: "Netačno. Vrednost u kutiji 'poeni' je ažurirana sa +5." },
          { text: "15", correct: true, explanation: "Bravo! Stara vrednost (10) uvećana je za 5 i sačuvana nazad u 'poeni'." },
          { text: "poeni + 5", correct: false, explanation: "Netačno, jer nema navodnika — Python sabira brojeve." }
        ]
      },
      {
        question: "Koje od sledećih imena promenljive NIJE dozvoljeno u Pythonu?",
        options: [
          { text: "moja_cena", correct: false, explanation: "Ovo ime je potpuno ispravno (donja crta je dozvoljena)." },
          { text: "1_mesto", correct: true, explanation: "Tačno! Ime promenljive NIKADA ne sme da počinje cifrom." },
          { text: "igrac2", correct: false, explanation: "Cifra na kraju ili u sredini imena je potpuno dozvoljena." }
        ]
      },
      {
        question: "Kog tipa podatka je vrednost: visina = 1.82?",
        options: [
          { text: "int (ceo broj)", correct: false, explanation: "int je samo za cele brojeve bez decimale." },
          { text: "float (decimalni broj)", correct: true, explanation: "Tačno! Brojevi sa tačkom su uvek tipa float." },
          { text: "bool (logička vrednost)", correct: false, explanation: "bool može biti samo True ili False." }
        ]
      }
    ],
    "matematika-stringovi": [
      {
        question: "Šta daje izraz: 15 // 4 (celobrojno deljenje)?",
        options: [
          { text: "3.75", correct: false, explanation: "To bi dalo obično deljenje 15 / 4." },
          { text: "3", correct: true, explanation: "Tačno! 4 staje u 15 tačno 3 cela puta (ostatak 3 se odbacuje)." },
          { text: "4", correct: false, explanation: "Netačno. // ne zaokružuje nagore već uzima samo ceo deo." }
        ]
      },
      {
        question: "Šta će se desiti ako napišeš: print('10' + 5)?",
        options: [
          { text: "Ispisaće 15", correct: false, explanation: "Neće, jer je '10' pod navodnicima tekst (str), a 5 je broj (int)." },
          { text: "Prijaviće TypeError jer ne mogu da se sabiraju tekst i broj", correct: true, explanation: "Bravo! Prvo moraš pretvoriti tekst u broj pomoću int('10') + 5." },
          { text: "Ispisaće 105", correct: false, explanation: "105 bi ispisalo samo ako su OBA tekst: '10' + '5'." }
        ]
      },
      {
        question: "Šta vraća funkcija len('Python')?",
        options: [
          { text: "5", correct: false, explanation: "Prebroj slova: P-y-t-h-o-n." },
          { text: "6", correct: true, explanation: "Tačno! Reč 'Python' ima tačno 6 karaktera." },
          { text: "7", correct: false, explanation: "Netačno, ima 6 slova." }
        ]
      }
    ],
    "unos-input": [
      {
        question: "Ako korisnik ukuca 7 i 3, šta će ispisati kod:\na = input()\nb = input()\nprint(a + b)",
        options: [
          { text: "10", correct: false, explanation: "Pažnja! Nema int(), pa su a i b tekstovi ('7' i '3')." },
          { text: "73", correct: true, explanation: "Bravo! input() uvek vraća tekst, pa '7' + '3' spaja stringove u '73'." },
          { text: "21", correct: false, explanation: "Operator + ne množi." }
        ]
      },
      {
        question: "Kako pravilno učitavamo decimalnu cenu (npr. 149.99) od korisnika?",
        options: [
          { text: 'cena = float(input("Cena: "))', correct: true, explanation: "Tačno! float() pretvara tekstualni unos u decimalni broj." },
          { text: 'cena = int(input("Cena: "))', correct: false, explanation: "int('149.99') bi izazvao ValueError zbog decimalne tačke!" },
          { text: 'cena = str(input("Cena: "))', correct: false, explanation: "str() ostavlja unos kao tekst sa kojim ne možeš da računaš." }
        ]
      },
      {
        question: "Šta radi .strip() u izrazu ime = input('Ime: ').strip()?",
        options: [
          { text: "Briše slučajne razmake sa početka i kraja unosa", correct: true, explanation: "Tačno! Ako korisnik slučajno ukuca '  Ana  ', dobićemo čisto 'Ana'." },
          { text: "Pretvara sva slova u velika", correct: false, explanation: "Za velika slova služi .upper()." },
          { text: "Briše celu promenljivu", correct: false, explanation: "Netačno, .strip() samo čisti praznine na ivicama." }
        ]
      }
    ],
    "uslovi-if-else": [
      {
        question: "Šta će ispisati sledeći kod?\nx = 10\nif x > 15:\n    print('A')\nelif x > 5:\n    print('B')\nelse:\n    print('C')",
        options: [
          { text: "A", correct: false, explanation: "10 nije veće od 15, pa se prvi blok preskače." },
          { text: "B", correct: true, explanation: "Tačno! 10 > 5 je tačno, pa se izvršava elif grana i ostatak se preskače." },
          { text: "B i C", correct: false, explanation: "U if-elif-else lancu izvršava se SAMO JEDNA grana." }
        ]
      },
      {
        question: "Koja greška se krije u liniji: if bodovi = 100:",
        options: [
          { text: "Fali znak navoda oko 100", correct: false, explanation: "100 je broj i ne ide pod navodnike." },
          { text: "Za poređenje mora stajati == (dva znaka jednakosti), a ne =", correct: true, explanation: "Bravo! Jedno = dodeljuje vrednost, dok == proverava jednakost." },
          { text: "Nema greške", correct: false, explanation: "Python će odmah prijaviti SyntaxError!" }
        ]
      },
      {
        question: "Zašto su linije ispod if uslova uvučene za 4 razmaka (Tab)?",
        options: [
          { text: "Samo da bi kod lepše izgledao", correct: false, explanation: "U Pythonu uvlačenje nije samo estetika — ono je obavezno!" },
          { text: "Da bi Python znao koje naredbe pripadaju tom if bloku", correct: true, explanation: "Tačno! Uvlačenje (indentacija) određuje granice bloka koda." },
          { text: "Da bi program radio brže", correct: false, explanation: "Netačno, uvlačenje definiše strukturu koda." }
        ]
      }
    ],
    "petlje-loops": [
      {
        question: "Koje brojeve generiše range(1, 5)?",
        options: [
          { text: "1, 2, 3, 4, 5", correct: false, explanation: "Pazi: gornja granica (5) nikada nije uključena u range()!" },
          { text: "1, 2, 3, 4", correct: true, explanation: "Bravo! range(1, 5) kreće od 1 i staje tačno pre 5." },
          { text: "0, 1, 2, 3, 4", correct: false, explanation: "Pošto je početni broj 1, kreće od 1 (ne od 0)." }
        ]
      },
      {
        question: "Šta radi naredba break unutar while ili for petlje?",
        options: [
          { text: "Odmah prekida petlju i izlazi iz nje", correct: true, explanation: "Tačno! Koristi se npr. kada igrač pogodi tajni broj." },
          { text: "Pauzira program na 5 sekundi", correct: false, explanation: "Za pauzu služi time.sleep()." },
          { text: "Vraća petlju na sam početak", correct: false, explanation: "To radi continue (prelazi na sledeći krug), dok break potpuno izlazi." }
        ]
      },
      {
        question: "Kada je bolje koristiti while petlju umesto for petlje?",
        options: [
          { text: "Kada unapred ne znamo koliko će puta petlja morati da se ponovi (npr. dok igrač ne pogodi broj)", correct: true, explanation: "Savršeno! while traje dok god važi neki uslov." },
          { text: "Kada želimo da ispišemo brojeve od 1 do 10", correct: false, explanation: "Za poznat broj ponavljanja for i in range(...) je mnogo čistiji." },
          { text: "Nikada, while ne radi u Pythonu", correct: false, explanation: "while je jedna od najvažnijih petlji u Pythonu." }
        ]
      }
    ],
    "liste-kolekcije": [
      {
        question: "Data je lista boje = ['crvena', 'zelena', 'plava']. Šta ispisuje print(boje[1])?",
        options: [
          { text: "crvena", correct: false, explanation: "'crvena' je na indeksu 0!" },
          { text: "zelena", correct: true, explanation: "Bravo! Indeksiranje kreće od 0, pa je indeks 1 drugi element liste." },
          { text: "plava", correct: false, explanation: "'plava' je na indeksu 2 (ili -1)." }
        ]
      },
      {
        question: "Šta će se desiti ako za listu od 3 elementa napišeš print(lista[3])?",
        options: [
          { text: "Ispisaće poslednji element", correct: false, explanation: "Poslednji element je na indeksu 2!" },
          { text: "Prijaviće IndexError jer indeks 3 ne postoji", correct: true, explanation: "Tačno! Za 3 elementa važeći indeksi su 0, 1 i 2." },
          { text: "Dodaće novi element u listu", correct: false, explanation: "Za dodavanje služi .append()." }
        ]
      },
      {
        question: "Kako proveravamo da li se reč 'hleb' nalazi u listi korpa?",
        options: [
          { text: "if 'hleb' in korpa:", correct: true, explanation: "Savršeno! Operator 'in' proverava pripadnost elementa listi." },
          { text: "if korpa == 'hleb':", correct: false, explanation: "To poredi celu listu sa jednim tekstom (uvek False)." },
          { text: "if korpa.has('hleb'):", correct: false, explanation: "Liste u Pythonu nemaju metod .has()." }
        ]
      }
    ],
    "funkcije-def": [
      {
        question: "Šta će ispisati sledeći kod?\ndef saberi(a, b):\n    return a + b\nprint(saberi(3, 4) * 2)",
        options: [
          { text: "7", correct: false, explanation: "saberi(3, 4) vraća 7, a onda ga množimo sa 2!" },
          { text: "14", correct: true, explanation: "Tačno! 3 + 4 = 7, pa 7 * 2 = 14." },
          { text: "None", correct: false, explanation: "Funkcija ima return, pa uredno vraća broj 7." }
        ]
      },
      {
        question: "Šta vraća funkcija ako u njoj napišeš samo print(x * 2) bez return?",
        options: [
          { text: "Vraća duplirani broj", correct: false, explanation: "print() samo ispisuje na ekran, ali NE vraća vrednost pozivaocu!" },
          { text: "Vraća specijalnu vrednost None", correct: true, explanation: "Bravo! Bez naredbe return svaka funkcija vraća None." },
          { text: "Vraća 0", correct: false, explanation: "Netačno, Python vraća None." }
        ]
      },
      {
        question: "Koji je glavni razlog zašto programeri prave funkcije?",
        options: [
          { text: "Da kod napišu jednom i koriste ga ponovo na više mesta bez kopiranja", correct: true, explanation: "Tačno! Princip DRY (Don't Repeat Yourself) čini programe čistim i lakim za održavanje." },
          { text: "Zato što Python zabranjuje programe bez funkcija", correct: false, explanation: "Python dozvoljava kod bez funkcija, ali funkcije donose red i čitljivost." },
          { text: "Samo za igre", correct: false, explanation: "Funkcije se koriste u apsolutno svakom softveru." }
        ]
      }
    ],
    "mini-projekat-igra": [
      {
        question: "Šta radi random.randint(1, 6)?",
        options: [
          { text: "Bira slučajan ceo broj od 1 do 6 (uključujući i 1 i 6)", correct: true, explanation: "Tačno! Za razliku od range(), randint() uključuje OBA kraja opsega." },
          { text: "Bira samo brojeve od 1 do 5", correct: false, explanation: "randint(1, 6) uključuje i broj 6 — idealno za kockicu!" },
          { text: "Uvek vraća broj 6", correct: false, explanation: "Svaki put bira novi nasumičan broj." }
        ]
      },
      {
        question: "Zašto dobijamo NameError ako pozovemo random.randint(1, 10) bez linije 'import random'?",
        options: [
          { text: "Zato što je random zaseban modul koji moramo prvo da uvezemo", correct: true, explanation: "Bravo! Python čuva dodatne alate u modulima koje uvozimo po potrebi sa import." },
          { text: "Zato što randint ne postoji u Pythonu", correct: false, explanation: "Postoji, ali živi unutar modula random." },
          { text: "Zato što je 10 prevelik broj", correct: false, explanation: "Netačno, opseg može biti i do miliona." }
        ]
      },
      {
        question: "Koja funkcija iz modula random bira jedan nasumičan element iz liste ['kamen', 'papir', 'makaze']?",
        options: [
          { text: "random.choice(lista)", correct: true, explanation: "Tačno! random.choice() je savršen za biranje nasumične stavke iz bilo koje liste." },
          { text: "random.randint(lista)", correct: false, explanation: "randint radi samo sa dva cela broja, ne sa listom." },
          { text: "random.print(lista)", correct: false, explanation: "Takva funkcija ne postoji." }
        ]
      }
    ]
  };

  LESSONS_KURS_1.forEach(lesson => {
    const extras = k1ExtraQuizzes[lesson.id];
    if (extras && lesson.quiz) {
      const baseList = Array.isArray(lesson.quiz) ? lesson.quiz : [lesson.quiz];
      if (baseList.length < 4) {
        lesson.quiz = [...baseList, ...extras];
      }
    }
  });
})();


// KOLEKCIJA KURSEVA PLATFORME (Trijada Osnova)
// ============================================================================

// ============================================================================
// KURS 3: PYTHON OSNOVE 3 (Master nivo osnova - Napredni nivo)
// ============================================================================
const LESSONS_KURS_3 = [
  {
    "id": "k3-lokalno-okruzenje",
    "title": "1. Tvoja Programerska Radionica (IDLE i VS Code na računaru)",
    "icon": "💻",
    "category": "Lokalno Okruženje",
    "summary": "Izađi iz brauzera u stvarni svet: instaliraj Python na svoj računar, demistifikuj terminal, koristi IDLE i VS Code i pokreni svoju prvu samostalnu .py skriptu uz profesionalni if __name__ == '__main__': idiom.",
    "content": "\n      <p class=\"lead\">Do sada smo vežbali unutar naše bezbedne veb platforme. Vreme je za tvoj <strong>najveći inženjerski iskorak</strong>: da tvoj računar postane tvoja lična programerska radionica!</p>\n\n      <h3>Korak 1: Instalacija Pythona sa python.org</h3>\n      <p>Otvori zvanični sajt <strong>python.org/downloads</strong> i preuzmi Python za svoj operativni sistem (Windows, Mac ili Linux).</p>\n      \n      <div class=\"tip-box\" style=\"border-left-color: #ef4444;\">\n        <span class=\"tip-icon\">⚠️</span>\n        <div>\n          <strong>ZLATNO PRAVILO INSTALACIJE NA WINDOWS-U:</strong>\n          <p style=\"margin: 4px 0 0 0;\">Na prvom ekranu instalera OBAVEZNO štikliraj kućicu na dnu: <strong>[X] Add python.exe to PATH</strong>! Ako ovo preskočiš, tvoj računar neće znati šta znači reč \"python\" kada je ukucaš u terminalu.</p>\n        </div>\n      </div>\n\n      <h3>Korak 2: Prvi koraci u IDLE-u (Pythonov fabrički editor)</h3>\n      <p>Python dolazi sa svojim ugrađenim programom koji se zove <strong>IDLE</strong>. On je fantastičan za početak:</p>\n      <ol>\n        <li>U start meniju ukucaj <code>IDLE</code> i otvori ga.</li>\n        <li>Klikni na <strong>File -> New File</strong> da otvoriš novi prazan dokument.</li>\n        <li>Napiši kod, klikni <strong>File -> Save As</strong> i sačuvaj ga kao <code>moj_prvi_program.py</code>.</li>\n        <li>Pritisni prečicu <strong>F5</strong> na tastaturi — i tvoj program se odmah izvršava!</li>\n      </ol>\n\n      <h3>Korak 3: Prečica do profesionalnog alata — Visual Studio Code (VS Code)</h3>\n      <p>U jakim IT kompanijama većina inženjera koristi besplatni editor <strong>Visual Studio Code</strong>:</p>\n      <ul>\n        <li>Preuzmi ga sa <strong>code.visualstudio.com</strong>.</li>\n        <li>Sa leve strane klikni na kockice (Extensions) i instaliraj ekstenziju <strong>Python</strong> (od Microsofta).</li>\n        <li><strong>Najvažnija prečica:</strong> Pritisni <code>Ctrl + ~</code> (ili <code>Cmd + ~</code> na Macu) i na dnu ekrana će se odmah otvoriti integrisani terminal u tvom radnom folderu!</li>\n      </ul>\n\n      <div class=\"tip-box\">\n        <span class=\"tip-icon\">💡</span>\n        <div>\n          <strong>Terminal nije bauk!</strong>\n          <p style=\"margin: 4px 0 0 0;\">Mnogi početnici se uplaše \"crnog ekrana\" terminala. Ne brini — terminal je samo direktan tekstualni SMS razgovor sa tvojim operativnim sistemom. Umesto klika mišem, kažeš mu: <code>python moj_fajl.py</code> i računar odmah pokreće tvoj kod.</p>\n        </div>\n      </div>\n\n      <h3>Korak 4: Zašto profesionalci pišu <code>if __name__ == '__main__':</code>?</h3>\n      <p>Kada pogledaš kod pravih Python inženjera, na dnu svakog fajla videćeš ove dve linije:</p>\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">def main():\n    print(\"Ovo je glavni program!\")\n\nif __name__ == \"__main__\":\n    main()</code></pre>\n      </div>\n      <p><strong>Zašto je ovo važno?</strong> Python ima skrivenu promenljivu <code>__name__</code>. Kada ti direktno klikneš na fajl i pokreneš ga, Python toj promenljivoj dodeli vrednost <code>\"__main__\"</code>. Ali ako neko tvoj fajl uveze u drugi program kao biblioteku, kod u <code>if</code> bloku se neće sam pokrenuti! To je znak profesionalne organizacije koda.</p>\n\n      <div class=\"tip-box\" style=\"border-left-color: #10b981;\">\n        <span class=\"tip-icon\">💾</span>\n        <div>\n          <strong>Taster \"Preuzmi .py\" na našoj platformi:</strong>\n          <p style=\"margin: 4px 0 0 0;\">Iznad editora na ovoj stranici nalazi se dugme <strong>💾 Preuzmi .py</strong>. Napiši kod ovde, klikni na dugme i preuzmi fajl direktno na svoj hard disk, a zatim ga pokreni u svom IDLE-u ili VS Code-u!</p>\n        </div>\n      </div>\n    ",
    "starterCode": "# Tvoj prvi profesionalni Python program za pokretanje na računaru!\nimport sys\nimport os\nimport platform\n\ndef prikazi_informacije():\n    print(\"=\" * 45)\n    print(\"💻 MOJA PROGRAMERSKA RADIONICA NA RAČUNARU\")\n    print(\"=\" * 45)\n    \n    # Podaci o Python verziji i sistemu\n    verzija = sys.version.split()[0]\n    operativni_sistem = platform.system()\n    arhitektura = platform.machine()\n    radni_folder = os.getcwd()\n    \n    print(f\"🐍 Python verzija:    {verzija}\")\n    print(f\"🖥️ Operativni sistem: {operativni_sistem} ({arhitektura})\")\n    print(f\"📁 Radni folder:       {radni_folder}\")\n    print(\"=\" * 45)\n    print(\"Čestitamo! Tvoj Python je spreman za rad u lokalu.\")\n\n# Zvanični inženjerski ulaz u program:\nif __name__ == \"__main__\":\n    prikazi_informacije()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Prepoznavanje sistema (Zagrevanje)",
        "instruction": "Iskoristi modul platform da otkriješ da li korisnik radi na Windows, Linux ili Mac računaru i ispiši prilagođenu poruku koji terminal da otvori (PowerShell za Windows, Terminal za Mac/Linux).",
        "starter": "import platform\n\ndef prepoznaj_sistem():\n    sistem = platform.system()\n    print(f\"Detektovan sistem: {sistem}\")\n    \n    # Napiši if-elif-else proveru:\n    # Ako je 'Windows' -> 'Preporučujemo PowerShell ili CMD'\n    # Ako je 'Darwin' (to je Mac) -> 'Preporučujemo Terminal na macOS-u'\n    # Za ostale -> 'Preporučujemo Linux Bash terminal'\n    pass\n\nif __name__ == \"__main__\":\n    prepoznaj_sistem()\n",
        "solution": "import platform\n\ndef prepoznaj_sistem():\n    sistem = platform.system()\n    print(f\"Detektovan sistem: {sistem}\")\n    \n    if sistem == \"Windows\":\n        print(\"💡 Preporučujemo Windows PowerShell ili CMD.\")\n    elif sistem == \"Darwin\":\n        print(\"💡 Preporučujemo macOS Terminal (ili iTerm2).\")\n    else:\n        print(\"💡 Preporučujemo Linux Bash ili Zsh terminal.\")\n\nif __name__ == \"__main__\":\n    prepoznaj_sistem()\n",
        "hint": "Iskoristi if sistem == 'Windows': pa elif sistem == 'Darwin': i na kraju else:."
      },
      {
        "title": "Zadatak 2: Pravljenje novog radnog foldera (Glavni izazov)",
        "instruction": "Iskoristi modul os da ispišeš trenutni folder, a zatim proveri da li u njemu postoji podfolder 'projekti'. Ako ne postoji, ispiši komandu kojom se kreira.",
        "starter": "import os\n\ndef proveri_radni_prostor():\n    trenutni = os.getcwd()\n    print(f\"Trenutna putanja: {trenutni}\")\n    \n    projekti_putanja = os.path.join(trenutni, \"projekti\")\n    postoji = os.path.exists(projekti_putanja)\n    \n    if postoji:\n        print(\"✅ Folder 'projekti' već postoji!\")\n    else:\n        print(\"📁 Folder 'projekti' još ne postoji. Možeš ga napraviti komandom os.mkdir('projekti').\")\n\nif __name__ == \"__main__\":\n    proveri_radni_prostor()\n",
        "solution": "import os\n\ndef proveri_radni_prostor():\n    trenutni = os.getcwd()\n    print(f\"Trenutna putanja: {trenutni}\")\n    \n    projekti_putanja = os.path.join(trenutni, \"projekti\")\n    postoji = os.path.exists(projekti_putanja)\n    \n    if postoji:\n        print(\"✅ Folder 'projekti' već postoji!\")\n    else:\n        print(\"📁 Folder 'projekti' još ne postoji.\")\n        print(\"💡 Savet: Organizuj sve svoje .py fajlove u posebnom folderu 'projekti'!\")\n\nif __name__ == \"__main__\":\n    proveri_radni_prostor()\n",
        "hint": "Funkcija os.path.join sigurno spaja foldere bez obzira da li sistem koristi kosu crtu / ili kontra-kosu crtu \\."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Lična Karta Programera i Računara",
        "instruction": "Napravi kompletan dijagnostički program 'moj_pc.py' sa funkcijom main() i if __name__ == '__main__': koji traži ime programera, a zatim štampa uokvirenu ličnu kartu sa podacima o računaru i datumu.",
        "starter": "import platform\nimport sys\n\ndef generisi_kartu(ime):\n    print(\"+\" + \"-\" * 40 + \"+\")\n    print(f\"|  PROGRAMER: {ime.upper():<27}|\")\n    print(\"+\" + \"-\" * 40 + \"+\")\n    # Dopuni ispis operativnog sistema i Python verzije:\n    \n    print(\"+\" + \"-\" * 40 + \"+\")\n\ndef main():\n    ime = input(\"Unesi svoje ime programera: \")\n    generisi_kartu(ime)\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "import platform\nimport sys\n\ndef generisi_kartu(ime):\n    sistem = platform.system()\n    arh = platform.machine()\n    verzija = sys.version.split()[0]\n    \n    print(\"+\" + \"-\" * 42 + \"+\")\n    print(f\"|  PROGRAMER:    {ime.upper():<26}|\")\n    print(f\"|  SISTEM:       {sistem + ' ' + arh:<26}|\")\n    print(f\"|  PYTHON:       {verzija:<26}|\")\n    print(f\"|  STATUS:       SPREMAN ZA VELIKE KODOVE! |\")\n    print(\"+\" + \"-\" * 42 + \"+\")\n\ndef main():\n    ime = input(\"Unesi svoje ime programera: \")\n    if not ime:\n        ime = \"Nepoznati Genije\"\n    generisi_kartu(ime)\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Koristi f-string sa formatiranjem npr. {:<26} da poravnaš tekst unutar okvira!"
      }
    ],
    "quiz": [
      {
        "question": "Zašto je na Windows instalaciji važno štiklirati 'Add python.exe to PATH'?",
        "options": [
          "Da bi terminal (CMD/PowerShell) znao gde se Python nalazi i mogao da ga pokrene bilo gde",
          "Da bi se računar brže palio",
          "Da bi se automatski instalirale igrice",
          "Nije važno, to je samo reklama"
        ],
        "correct": 0,
        "explanation": "PATH je sistemska lista lokacija programa. Kada ukucaš 'python' u terminalu, sistem gleda u PATH da pronađe program."
      },
      {
        "question": "Čemu služi blok 'if __name__ == \"__main__\":' na dnu skripte?",
        "options": [
          "Osigurava da se kod izvrši samo kada se fajl pokrene direktno, a ne kada se uveze u drugi program",
          "Zaustavlja program ako ima sintaksnu grešku",
          "Briše fajl nakon pokretanja",
          "Ubrzava internet konekciju"
        ],
        "correct": 0,
        "explanation": "To je inženjerski standard u Pythonu koji razdvaja funkcije biblioteke od izvršnog dela koda."
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: Koja je razlika između python i python3 komande?",
      "content": "Na macOS i Linux sistemima često postoji stari Python 2 koji je došao uz sistem. Zato se u terminalu kuca <code>python3 moj_program.py</code>. Na Windowsu je obično dovoljno samo <code>python moj_program.py</code> ili skraćenica <code>py moj_program.py</code>!"
    }
  },
  {
    "id": "k3-try-except-odbrana",
    "title": "2. Detektiv za Greške i Neuništiv Kod (try i except)",
    "icon": "🛡️",
    "category": "Defanzivno Programiranje",
    "summary": "Nauči tajnu profesionalnog defanzivnog programiranja: kako dešifrovati Traceback crveni ekran, uhvatiti tačne izuzetke (ValueError, ZeroDivisionError) i napraviti programe koji nikada ne pucaju.",
    "content": "\n      <p class=\"lead\">U stvarnom svetu korisnici rade sve što ne očekuješ: umesto broja ukucaju reč 'pet', unesu prazan tekst, ili podele račun sa 0 ljudi. Amater se nada da će korisnik biti pažljiv — <strong>profesionalac piše neuništiv kod (Crash-proof code)</strong>!</p>\n\n      <h3>Anatomija Traceback-a (Kako čitati 'crveni ekran'):</h3>\n      <p>Kada se desi greška u Pythonu, većina početnika se uplaši i zatvori oči. Profesor i senior inženjer ti kažu:</p>\n      <div class=\"tip-box\" style=\"border-left-color: #3b82f6;\">\n        <span class=\"tip-icon\">🔍</span>\n        <div>\n          <strong>ZLATNO PRAVILO: Čitaj Traceback odozdo prema gore!</strong>\n          <p style=\"margin: 4px 0 0 0;\">\n            1. <strong>Poslednja linija:</strong> Kaže ti TAČNO koja je greška (npr. <code>ValueError: invalid literal for int() with base 10: 'zdravo'</code>).<br>\n            2. <strong>Linija iznad:</strong> Kaže ti TAČNO u kom fajlu i u kom broju linije se greška desila!\n          </p>\n        </div>\n      </div>\n\n      <h3>Štit za tvoj kod: <code>try - except</code></h3>\n      <p>Blok <code>try</code> govori Pythonu: <em>\"Pokušaj da izvršiš ovaj kod, ali ako se desi greška, nemoj da rušiš program, već pređi u <code>except</code> blok!\"</em></p>\n\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">try:\n    godine = int(input(\"Koliko imaš godina? \"))\n    meseci = godine * 12\n    print(f\"Imaš {meseci} meseci!\")\nexcept ValueError:\n    print(\"❌ Greška! Moraš uneti ceo broj, a ne slova.\")</code></pre>\n      </div>\n\n      <h3>Kompletna inženjerska struktura: <code>try - except - else - finally</code></h3>\n      <ul>\n        <li><code>try:</code> Kod koji je rizičan (unos, deljenje, rad sa fajlom).</li>\n        <li><code>except ImeGreske:</code> Šta uraditi ako se desila tačna greška.</li>\n        <li><code>else:</code> Kod koji se izvršava <strong>SAMO ako NIJE bilo nikakve greške</strong>.</li>\n        <li><code>finally:</code> Kod koji se izvršava <strong>UVEK</strong>, bez obzira da li je bilo greške ili ne (često se koristi za bezbedno čišćenje i zatvaranje programa).</li>\n      </ul>\n\n      <div class=\"tip-box\" style=\"border-left-color: #ef4444;\">\n        <span class=\"tip-icon\">🚫</span>\n        <div>\n          <strong>Zašto je \"goli except\" (bare except) opasan antipatern?</strong>\n          <p style=\"margin: 4px 0 0 0;\">Nikada nemoj pisati samo <code>except:</code> bez navođenja imena greške! Takav except će uhvatiti čak i kada korisnik na tastaturi pritisne <code>Ctrl + C</code> da namerno prekine program, ili ako napraviš slovnu grešku u promenljivoj. Uvek navedi tačno: <code>except ValueError:</code> ili <code>except ZeroDivisionError:</code>.</p>\n        </div>\n      </div>\n    ",
    "starterCode": "# Neuništivi šablon za unos celog broja sa beskonačnom proverom\ndef unesi_ceo_broj(poruka):\n    while True:\n        try:\n            unos = input(poruka)\n            broj = int(unos)\n            return broj  # Ako je uspešno, vraćamo broj i petlja se prekida!\n        except ValueError:\n            print(\"⚠️ Neispravan unos! Molimo te unesi ciframa ceo broj.\")\n\ndef main():\n    print(\"--- NEUNIŠTIVI UNOS ---\")\n    godine = unesi_ceo_broj(\"Unesi svoje godine: \")\n    print(f\"✅ Uspešno zabeleženo: Imaš {godine} godina.\")\n\nif __name__ == \"__main__\":\n    main()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Bezbedno deljenje (Zagrevanje)",
        "instruction": "Napiši funkciju bezbedno_podeli(a, b) koja pokušava da podeli a sa b. Uhvati ZeroDivisionError ako je b nula, i vrati None uz poruku upozorenja.",
        "starter": "def bezbedno_podeli(a, b):\n    # Napiši try-except blok koji hvata ZeroDivisionError:\n    try:\n        return a / b\n    except ZeroDivisionError:\n        print(\"❌ Deljenje sa nulom nije matematički dozvoljeno!\")\n        return None\n\nif __name__ == \"__main__\":\n    print(\"10 / 2 =\", bezbedno_podeli(10, 2))\n    print(\"10 / 0 =\", bezbedno_podeli(10, 0))\n",
        "solution": "def bezbedno_podeli(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        print(\"❌ Deljenje sa nulom nije matematički dozvoljeno!\")\n        return None\n\nif __name__ == \"__main__\":\n    print(\"10 / 2 =\", bezbedno_podeli(10, 2))\n    print(\"10 / 0 =\", bezbedno_podeli(10, 0))\n",
        "hint": "U bloku except ZeroDivisionError ispiši poruku i vrati None."
      },
      {
        "title": "Zadatak 2: Neuništivi kalkulator popusta (Glavni izazov)",
        "instruction": "Korisnik unosi originalnu cenu i procenat popusta (0-100). Program mora da obradi i tekstualne greške (ValueError) i proveri da li je procenat u rasponu 0-100.",
        "starter": "def izracunaj_snizenje():\n    while True:\n        try:\n            cena = float(input(\"Unesi cenu (din): \"))\n            popust = float(input(\"Unesi procenat popusta (0-100): \"))\n            \n            if cena < 0 or popust < 0 or popust > 100:\n                print(\"⚠️ Cena mora biti pozitivna, a popust između 0 i 100%!\")\n                continue\n                \n            nova_cena = cena * (1 - popust / 100)\n            print(f\"🎉 Nova snižena cena: {nova_cena:.2f} din\")\n            break\n        except ValueError:\n            print(\"❌ Greška: Unesi ispravan broj sa ciframa!\")\n\nif __name__ == \"__main__\":\n    izracunaj_snizenje()\n",
        "solution": "def izracunaj_snizenje():\n    while True:\n        try:\n            cena = float(input(\"Unesi cenu (din): \"))\n            popust = float(input(\"Unesi procenat popusta (0-100): \"))\n            \n            if cena < 0 or popust < 0 or popust > 100:\n                print(\"⚠️ Cena mora biti pozitivna, a popust između 0 i 100%!\")\n                continue\n                \n            nova_cena = cena * (1 - popust / 100)\n            print(f\"🎉 Nova snižena cena: {nova_cena:.2f} din\")\n            break\n        except ValueError:\n            print(\"❌ Greška: Unesi ispravan broj sa ciframa!\")\n\nif __name__ == \"__main__\":\n    izracunaj_snizenje()\n",
        "hint": "Koristi float(input(...)) za brojeve sa decimalama i obuhvati ih u try blok."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Neuništivi Finansijski Kalkulator",
        "instruction": "Napravi profesionalni kalkulator za deljenje računa u restoranu. Traži ukupan račun, procenat bakšiša i broj osoba. Ako korisnik unese 0 osoba ili slova, program ga ljubazno ispravlja i ponavlja pitanje bez rušenja!",
        "starter": "def podeli_racun():\n    print(\"=\" * 40)\n    print(\"🍽️ NEUNIŠTIVI RESTORANSKI KALKULATOR\")\n    print(\"=\" * 40)\n    \n    # Napiši petlju sa try-except-else logikom\n    while True:\n        try:\n            racun = float(input(\"Ukupan iznos računa (din): \"))\n            baksis_proc = float(input(\"Bakšiš u procentima (npr. 10): \"))\n            broj_osoba = int(input(\"Broj osoba koje dele račun: \"))\n            \n            if racun <= 0 or broj_osoba <= 0:\n                print(\"⚠️ Račun i broj osoba moraju biti veći od nule!\")\n                continue\n                \n            ukupno = racun * (1 + baksis_proc / 100)\n            po_osobi = ukupno / broj_osoba\n            \n        except ValueError:\n            print(\"❌ Neispravan unos! Molimo koristi cifre.\")\n        except ZeroDivisionError:\n            print(\"❌ Broj osoba ne može biti nula!\")\n        else:\n            print(\"-\" * 40)\n            print(f\"💰 Ukupno za plaćanje: {ukupno:.2f} din\")\n            print(f\"👤 Svaka osoba plaća:   {po_osobi:.2f} din\")\n            print(\"-\" * 40)\n            break\n\nif __name__ == \"__main__\":\n    podeli_racun()\n",
        "solution": "def podeli_racun():\n    print(\"=\" * 40)\n    print(\"🍽️ NEUNIŠTIVI RESTORANSKI KALKULATOR\")\n    print(\"=\" * 40)\n    \n    while True:\n        try:\n            racun = float(input(\"Ukupan iznos računa (din): \"))\n            baksis_proc = float(input(\"Bakšiš u procentima (npr. 10): \"))\n            broj_osoba = int(input(\"Broj osoba koje dele račun: \"))\n            \n            if racun <= 0 or broj_osoba <= 0:\n                print(\"⚠️ Račun i broj osoba moraju biti veći od nule!\")\n                continue\n                \n            ukupno = racun * (1 + baksis_proc / 100)\n            po_osobi = ukupno / broj_osoba\n            \n        except ValueError:\n            print(\"❌ Neispravan unos! Molimo koristi cifre.\")\n        except ZeroDivisionError:\n            print(\"❌ Broj osoba ne može biti nula!\")\n        else:\n            print(\"-\" * 40)\n            print(f\"💰 Ukupno za plaćanje: {ukupno:.2f} din\")\n            print(f\"👤 Svaka osoba plaća:   {po_osobi:.2f} din\")\n            print(\"-\" * 40)\n            break\n\nif __name__ == \"__main__\":\n    podeli_racun()\n",
        "hint": "Koristi else granu za ispis uspešnog rezultata i izlazak iz petlje uz break."
      }
    ],
    "quiz": [
      {
        "question": "Kojim redosledom se čita Python Traceback (poruka o grešci)?",
        "options": [
          "Odozdo prema gore: poslednja linija kaže koja je greška, a iznad gde se desila",
          "Samo prva reč na vrhu ekrana",
          "Tekst u sredini bez brojeva linija",
          "Greške se ne čitaju, program se uvek piše ispočetka"
        ],
        "correct": 0,
        "explanation": "Uvek čitaj od poslednje linije: ona ti daje tačan tip izuzetka i poruku, a linija iznad lokaciju u kodu."
      },
      {
        "question": "Kada se izvršava blok 'else:' u try-except strukturi?",
        "options": [
          "Samo ako u try bloku NIJE nastala nijedna greška",
          "Izvršava se uvek, šta god da se desi",
          "Samo ako se desi greška",
          "Nikada"
        ],
        "correct": 0,
        "explanation": "Blok else se u Pythonu izvršava samo ako je ceo try blok prošao glatko bez ijednog izuzetka."
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: Kako uhvatiti više grešaka odjednom?",
      "content": "Ako želiš istu reakciju na više različitih grešaka, možeš ih grupisati u torku: <code>except (ValueError, ZeroDivisionError):</code>. To čini kod preglednim i kratkim!"
    }
  },
  {
    "id": "k3-modul-random",
    "title": "3. Moć Slučajnosti i Simulacije (Modul random)",
    "icon": "🎲",
    "category": "Standardna Biblioteka",
    "summary": "Otkrij kako računari stvaraju pseudo-slučajne brojeve uz Mersenne Twister, nauči zašto inženjeri koriste random.seed za naučne eksperimente i simuliraj 1.000 kola lutrije.",
    "content": "\n      <p class=\"lead\">Zašto bismo pisali stotine linija koda za generisanje slučajnih brojeva kada su to vrhunski svetski matematičari već ugradili u Python? Upoznaj modul <strong>random</strong>!</p>\n\n      <h3>Glavne funkcije modula random:</h3>\n      <ul>\n        <li><code>random.randint(a, b)</code>: Vraća slučajan ceo broj u rasponu od <code>a</code> do <code>b</code> (uključujući oba kraja!).</li>\n        <li><code>random.choice(lista)</code>: Bira jednog slučajnog člana iz liste (npr. pobednika nagradne igre).</li>\n        <li><code>random.sample(lista, k)</code>: Bira <code>k</code> <strong>jedinstvenih</strong> članova iz liste bez ponavljanja (idealno za loto ili deljenje karata!).</li>\n        <li><code>random.shuffle(lista)</code>: Promeša postojeću listu na licu mesta (in-place).</li>\n      </ul>\n\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">import random\n\nboje = [\"crvena\", \"zelena\", \"plava\", \"zuta\"]\nizabrana = random.choice(boje)\nprint(f\"Izabrana boja: {izabrana}\")\n\n# Loto 6 od 39:\nkuglice = list(range(1, 40))\ndobitna_kombinacija = random.sample(kuglice, 6)\ndobitna_kombinacija.sort()\nprint(f\"Loto brojevi: {dobitna_kombinacija}\")</code></pre>\n      </div>\n\n      <h3>Šta je 'seme' slučajnosti (<code>random.seed</code>)?</h3>\n      <p>Računari su strogo logičke mašine i ne mogu sami od sebe stvoriti 'pravu' slučajnost. Python koristi čuveni algoritam <strong>Mersenne Twister</strong> koji pravi takozvane <em>pseudo-slučajne brojeve</em>.</p>\n      \n      <div class=\"tip-box\" style=\"border-left-color: #8b5cf6;\">\n        <span class=\"tip-icon\">🔬</span>\n        <div>\n          <strong>Zašto inženjeri i naučnici vole <code>random.seed(42)</code>?</strong>\n          <p style=\"margin: 4px 0 0 0;\">Ako pre generisanja postaviš <code>random.seed(42)</code>, program će pri svakom pokretanju dati <strong>potpuno iste 'slučajne' brojeve</strong>! To je neprocenjivo u naučnim simulacijama, testiranju igara i mašinskom učenju, jer omogućava da kolega na drugom kraju sveta ponovi tvoj eksperiment sa identičnim rezultatima.</p>\n        </div>\n      </div>\n\n      <h3>Šta je Monte Karlo simulacija (Monte Carlo)?</h3>\n      <p>U bankarstvu, osiguranju i svemirskim istraživanjima, inženjeri ne mogu da predvide budućnost. Zato pokrenu <strong>simulaciju od 10.000 ili 1.000.000 slučajnih scenarija</strong> i izmere u koliko procenata se desio dobitak ili kvar. To se zove Monte Karlo metoda!</p>\n    ",
    "starterCode": "# Simulacija bacanja dve kockice i poker špila\nimport random\n\ndef baci_kockice():\n    k1 = random.randint(1, 6)\n    k2 = random.randint(1, 6)\n    print(f\"🎲 Kockice: [{k1}] i [{k2}] -> Zbir: {k1 + k2}\")\n    if k1 == k2:\n        print(\"🎉 ČESTITAMO! Dobio si duple!\")\n\ndef main():\n    print(\"--- SIMULACIJA SLUČAJNOSTI ---\")\n    baci_kockice()\n\nif __name__ == \"__main__\":\n    main()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Simulacija novčića (Zagrevanje)",
        "instruction": "Napiši funkciju simuliraj_novcic(broj_bacanja) koja simulira bacanje novčića ('Pismo' ili 'Glava') zadati broj puta i računa procenat koliko puta je pala glava.",
        "starter": "import random\n\ndef simuliraj_novcic(broj_bacanja):\n    glava = 0\n    pismo = 0\n    \n    for _ in range(broj_bacanja):\n        ishod = random.choice([\"Glava\", \"Pismo\"])\n        if ishod == \"Glava\":\n            glava += 1\n        else:\n            pismo += 1\n            \n    procenat_glava = (glava / broj_bacanja) * 100\n    print(f\"Ukupno bacanja: {broj_bacanja}\")\n    print(f\"Glava: {glava} ({procenat_glava:.1f}%) | Pismo: {pismo}\")\n\nif __name__ == \"__main__\":\n    simuliraj_novcic(1000)\n",
        "solution": "import random\n\ndef simuliraj_novcic(broj_bacanja):\n    glava = 0\n    pismo = 0\n    \n    for _ in range(broj_bacanja):\n        ishod = random.choice([\"Glava\", \"Pismo\"])\n        if ishod == \"Glava\":\n            glava += 1\n        else:\n            pismo += 1\n            \n    procenat_glava = (glava / broj_bacanja) * 100\n    print(f\"Ukupno bacanja: {broj_bacanja}\")\n    print(f\"Glava: {glava} ({procenat_glava:.1f}%) | Pismo: {pismo}\")\n\nif __name__ == \"__main__\":\n    simuliraj_novcic(1000)\n",
        "hint": "Kako broj bacanja raste (npr. 1.000 ili 10.000), procenat se približava tačno 50.0%!"
      },
      {
        "title": "Zadatak 2: Mešanje špila i deljenje karata (Glavni izazov)",
        "instruction": "Kreiraj listu od 52 karte, promešaj je funkcijom random.shuffle(), a zatim podeli po 5 karata za dva igrača (Igrač 1 i Igrač 2) tako da nema duplikata.",
        "starter": "import random\n\ndef podeli_poker():\n    znakovi = [\"♠\", \"♥\", \"♦\", \"♣\"]\n    vrednosti = [\"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\", \"A\"]\n    \n    # Napravi špil od 52 karte\n    spil = [f\"{v}{z}\" for z in znakovi for v in vrednosti]\n    random.shuffle(spil)\n    \n    # Podeli prvih 5 karata igraču 1, a sledećih 5 igraču 2:\n    ruka1 = spil[0:5]\n    ruka2 = spil[5:10]\n    \n    print(\"🃏 Igrač 1:\", \" \".join(ruka1))\n    print(\"🃏 Igrač 2:\", \" \".join(ruka2))\n\nif __name__ == \"__main__\":\n    podeli_poker()\n",
        "solution": "import random\n\ndef podeli_poker():\n    znakovi = [\"♠\", \"♥\", \"♦\", \"♣\"]\n    vrednosti = [\"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\", \"A\"]\n    \n    spil = [f\"{v}{z}\" for z in znakovi for v in vrednosti]\n    random.shuffle(spil)\n    \n    ruka1 = spil[0:5]\n    ruka2 = spil[5:10]\n    \n    print(\"🃏 Igrač 1:\", \" \".join(ruka1))\n    print(\"🃏 Igrač 2:\", \" \".join(ruka2))\n\nif __name__ == \"__main__\":\n    podeli_poker()\n",
        "hint": "Isecanje liste (slicing) spil[0:5] i spil[5:10] garantuje da ni jedna karta nije podeljena dva puta."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Simulator Lutrije 'Srećna Šestica' (Loto 6/39)",
        "instruction": "Korisnik bira svojih 6 brojeva. Program simulira 1.000 kola izvlačenja i broji koliko puta je korisnik pogodio 3, 4, 5 ili svih 6 brojeva, prikazujući statistiku šansi!",
        "starter": "import random\n\ndef simuliraj_loto(moji_brojevi, broj_kola=1000):\n    kuglice = list(range(1, 40))\n    moji_set = set(moji_brojevi)\n    \n    statistika = {3: 0, 4: 0, 5: 0, 6: 0}\n    \n    for _ in range(broj_kola):\n        izvuceni = set(random.sample(kuglice, 6))\n        pogodaka = len(moji_set.intersection(izvuceni))\n        if pogodaka in statistika:\n            statistika[pogodaka] += 1\n            \n    print(\"=\" * 45)\n    print(f\"🎰 REZULTAT SIMULACIJE ({broj_kola} KOLA)\")\n    print(f\"Tvoji brojevi: {sorted(moji_brojevi)}\")\n    print(\"=\" * 45)\n    for k in sorted(statistika.keys()):\n        print(f\"Broj pogodaka [{k}]: {statistika[k]} puta\")\n    print(\"=\" * 45)\n\ndef main():\n    moji = [7, 12, 18, 23, 31, 39]\n    simuliraj_loto(moji, 1000)\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "import random\n\ndef simuliraj_loto(moji_brojevi, broj_kola=1000):\n    kuglice = list(range(1, 40))\n    moji_set = set(moji_brojevi)\n    \n    statistika = {3: 0, 4: 0, 5: 0, 6: 0}\n    \n    for _ in range(broj_kola):\n        izvuceni = set(random.sample(kuglice, 6))\n        pogodaka = len(moji_set.intersection(izvuceni))\n        if pogodaka in statistika:\n            statistika[pogodaka] += 1\n            \n    print(\"=\" * 45)\n    print(f\"🎰 REZULTAT SIMULACIJE ({broj_kola} KOLA)\")\n    print(f\"Tvoji brojevi: {sorted(moji_brojevi)}\")\n    print(\"=\" * 45)\n    for k in sorted(statistika.keys()):\n        procenat = (statistika[k] / broj_kola) * 100\n        print(f\"Broj pogodaka [{k}]: {statistika[k]:<4} puta ({procenat:.2f}%)\")\n    print(\"=\" * 45)\n\ndef main():\n    moji = [7, 12, 18, 23, 31, 39]\n    simuliraj_loto(moji, 1000)\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Setovi (skupovi) i metoda intersection(izvuceni) omogućavaju blesavo brzo nalaženje zajedničkih brojeva."
      }
    ],
    "quiz": [
      {
        "question": "Koja je ključna razlika između random.choice() i random.sample()?",
        "options": [
          "choice bira jedan element, a sample bira više različitih elemenata bez ponavljanja",
          "sample uvek bira samo parne brojeve",
          "choice radi samo sa brojevima a sample samo sa rečima",
          "Nema nikakve razlike"
        ],
        "correct": 0,
        "explanation": "random.choice bira jednog člana, dok random.sample(lista, k) bira k jedinstvenih članova bez ponavljanja."
      },
      {
        "question": "Zašto se koristi funkcija random.seed()?",
        "options": [
          "Da bi se obezbedila ponovljivost slučajnih brojeva u testovima i eksperimentima",
          "Da bi se obrisala memorija računara",
          "Da bi program radio brže na internetu",
          "Da bi brojevi uvek bili parni"
        ],
        "correct": 0,
        "explanation": "Kada postaviš seed na isti broj, generator uvek stvara identičan niz pseudo-slučajnih vrednosti."
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: Kriptografska slučajnost u Pythonu",
      "content": "Modul <code>random</code> NIJE bezbedan za generisanje bankarskih lozinki i sigurnosnih tokena jer se njegov niz može matematički pogoditi! Za bezbednosne stvari Python nudi poseban modul <code>secrets</code>!"
    }
  },
  {
    "id": "k3-vreme-i-matematika",
    "title": "4. Vreme, Tajmeri i Matematika (time i math)",
    "icon": "⏳",
    "category": "Standardna Biblioteka",
    "summary": "Meri vreme sa preciznošću u nanosekundama uz time.perf_counter(), pauziraj programe uz time.sleep(), savladaj modul math i izgradi interaktivni Pomodoro tajmer sa vizuelnim progress barom.",
    "content": "\n      <p class=\"lead\">Dva ugrađena modula daju Pythonu kontrolu nad dve osnovne dimenzije fizike i inženjerstva: <strong>vremenom</strong> (modul <code>time</code>) i <strong>prostorom/proračunima</strong> (modul <code>math</code>).</p>\n\n      <h3>Vreme u računarima: Epoha i merenje performansi</h3>\n      <p>Računari mere vreme kao broj sekundi proteklih od <strong>1. januara 1970. godine</strong> (tzv. Unix Epoha).</p>\n      <ul>\n        <li><code>time.time()</code>: Vraća trenutno vreme (zidni sat).</li>\n        <li><code>time.sleep(sekunde)</code>: Zaustavlja izvršavanje programa na zadat broj sekundi (dramatične pauze, animacije).</li>\n        <li><code>time.perf_counter()</code>: <strong>Inženjerski standard</strong> za merenje brzine koda! Meri vreme sa nanosekundnom preciznošću i ne zavisi od promene sistemskog sata na računaru.</li>\n      </ul>\n\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">import time\n\nstart = time.perf_counter()\n\n# Radimo neki posao\ntime.sleep(0.5)\n\nkraj = time.perf_counter()\nprint(f\"Izvršeno za: {kraj - start:.4f} sekundi\")</code></pre>\n      </div>\n\n      <h3>Modul <code>math</code>: Inženjerska matematika bez muke</h3>\n      <ul>\n        <li><code>math.sqrt(x)</code>: Kvadratni koren broja x (&radic;x).</li>\n        <li><code>math.ceil(x)</code>: Zaokružuje na <strong>prvi veći ceo broj</strong> (plafon). Ako ti treba 3.1 pakovanje pločica, moraš kupiti 4!</li>\n        <li><code>math.floor(x)</code>: Zaokružuje na <strong>prvi manji ceo broj</strong> (pod).</li>\n        <li><code>math.pi</code>: Konstanta &pi; &approx; 3.14159265...</li>\n      </ul>\n\n      <div class=\"tip-box\" style=\"border-left-color: #f59e0b;\">\n        <span class=\"tip-icon\">⚠️</span>\n        <div>\n          <strong>Zašto je u računaru 0.1 + 0.2 == 0.30000000000000004?</strong>\n          <p style=\"margin: 4px 0 0 0;\">Računari pamte decimalne brojeve u binarnom sistemu (bazi 2), gde se neki razlomci poput $0.1$ ne mogu tačno zapisati (baš kao što se $1/3$ u dekadnom piše kao $0.333333...$). Zato inženjeri nikada ne porede decimale sa <code>a == b</code>, već koriste <code>math.isclose(a, b)</code>!</p>\n        </div>\n      </div>\n    ",
    "starterCode": "# Odbrojavanje i precizno merenje vremena\nimport time\nimport math\n\ndef odbrojavanje(sekundi):\n    print(\"🚀 Priprema za lansiranje:\")\n    for i in range(sekundi, 0, -1):\n        print(f\"{i}...\")\n        time.sleep(1)\n    print(\"🔥 POLETANJE!\")\n\ndef geometrija(poluprecnik):\n    obim = 2 * math.pi * poluprecnik\n    povrsina = math.pi * (poluprecnik ** 2)\n    print(f\"Krug r={poluprecnik} -> Obim: {obim:.2f}, Površina: {povrsina:.2f}\")\n\ndef main():\n    odbrojavanje(3)\n    geometrija(5)\n\nif __name__ == \"__main__\":\n    main()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Test refleksa i brzine reakcije (Zagrevanje)",
        "instruction": "Igrač čeka slučajan broj sekundi (1 do 3). Kada program ispiše 'SAD! PRITISNI ENTER!', meri se vreme do pritiska tastera uz time.perf_counter() i ispisuje reakcija u milisekundama.",
        "starter": "import time\nimport random\n\ndef test_refleksa():\n    print(\"Pripremi prst na tasteru Enter...\")\n    time.sleep(random.uniform(1.0, 3.0))\n    \n    start = time.perf_counter()\n    input(\"⚡ SAD! PRITISNI ENTER! ⚡\")\n    kraj = time.perf_counter()\n    \n    reakcija_ms = (kraj - start) * 1000\n    print(f\"Tvoje vreme reakcije: {reakcija_ms:.1f} milisekundi!\")\n\nif __name__ == \"__main__\":\n    test_refleksa()\n",
        "solution": "import time\nimport random\n\ndef test_refleksa():\n    print(\"Pripremi prst na tasteru Enter...\")\n    time.sleep(random.uniform(1.0, 3.0))\n    \n    start = time.perf_counter()\n    input(\"⚡ SAD! PRITISNI ENTER! ⚡\")\n    kraj = time.perf_counter()\n    \n    reakcija_ms = (kraj - start) * 1000\n    print(f\"Tvoje vreme reakcije: {reakcija_ms:.1f} milisekundi!\")\n    if reakcija_ms < 250:\n        print(\"🏆 Neverovatni refleksi! U rangu profesionalnih gejmera!\")\n    else:\n        print(\"👍 Dobar rezultat! Vežbom do savršenstva.\")\n\nif __name__ == \"__main__\":\n    test_refleksa()\n",
        "hint": "Razlika (kraj - start) pomnožena sa 1000 daje milisekunde."
      },
      {
        "title": "Zadatak 2: Građevinski proračun pločica (Glavni izazov)",
        "instruction": "Korisnik unosi dužinu i širinu sobe (u metrima), i površinu koju pokriva jedan paket pločica. Iskoristi math.ceil da izračunaš tačan ceo broj paketa koji mora da se kupi uz 10% rezerve.",
        "starter": "import math\n\ndef proracun_plocica(duzina, sirina, paket_m2):\n    povrsina = duzina * sirina\n    sa_rezervom = povrsina * 1.10  # 10% otpada pri sečenju\n    \n    # Zaokruži na prvi veći ceo broj paketa:\n    potrebno_paketa = math.ceil(sa_rezervom / paket_m2)\n    \n    print(f\"Površina sobe: {povrsina:.2f} m²\")\n    print(f\"Sa rezervom:   {sa_rezervom:.2f} m²\")\n    print(f\"Potrebno kupiti: {potrebno_paketa} paketa pločica.\")\n\nif __name__ == \"__main__\":\n    proracun_plocica(4.2, 3.5, 1.44)\n",
        "solution": "import math\n\ndef proracun_plocica(duzina, sirina, paket_m2):\n    povrsina = duzina * sirina\n    sa_rezervom = povrsina * 1.10\n    \n    potrebno_paketa = math.ceil(sa_rezervom / paket_m2)\n    \n    print(f\"Površina sobe: {povrsina:.2f} m²\")\n    print(f\"Sa rezervom:   {sa_rezervom:.2f} m²\")\n    print(f\"Potrebno kupiti: {potrebno_paketa} paketa pločica.\")\n\nif __name__ == \"__main__\":\n    proracun_plocica(4.2, 3.5, 1.44)\n",
        "hint": "math.ceil obezbeđuje da nikada ne zafali pločica, jer uvek zaokružuje na gore."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Pomodoro Tajmer za Fokus i Učenje",
        "instruction": "Napravi pravi Pomodoro tajmer sa vizuelnim tekstualnim progress barom [████----] koji odbrojava sekunde radne sesije i oglašava kraj rada i početak pauze!",
        "starter": "import time\n\ndef pomodoro_tajmer(ukupno_sekundi):\n    print(\"🍅 POMODORO SESIJA JE POČELA! FOKUSIRAJ SE!\")\n    sirina_bara = 20\n    \n    for sekunda in range(1, ukupno_sekundi + 1):\n        time.sleep(1)\n        procenat = sekunda / ukupno_sekundi\n        popunjeno = int(sirina_bara * procenat)\n        prazno = sirina_bara - popunjeno\n        bar = \"█\" * popunjeno + \"-\" * prazno\n        preostalo = ukupno_sekundi - sekunda\n        print(f\"[{bar}] {int(procenat * 100):>3}% | Još {preostalo}s\")\n        \n    print()\n    print(\"🔔 ZVONO! Vreme je za zasluženi odmor od 5 minuta!\")\n\ndef main():\n    # Za demonstraciju koristimo 5 sekundi (u praksi 25 * 60)\n    pomodoro_tajmer(5)\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "import time\n\ndef pomodoro_tajmer(ukupno_sekundi):\n    print(\"🍅 POMODORO SESIJA JE POČELA! FOKUSIRAJ SE!\")\n    sirina_bara = 20\n    \n    for sekunda in range(1, ukupno_sekundi + 1):\n        time.sleep(1)\n        procenat = sekunda / ukupno_sekundi\n        popunjeno = int(sirina_bara * procenat)\n        prazno = sirina_bara - popunjeno\n        bar = \"█\" * popunjeno + \"-\" * prazno\n        preostalo = ukupno_sekundi - sekunda\n        print(f\"[{bar}] {int(procenat * 100):>3}% | Još {preostalo}s\")\n        \n    print()\n    print(\"🔔 ZVONO! Vreme je za zasluženi odmor od 5 minuta!\")\n\ndef main():\n    pomodoro_tajmer(5)\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Množenjem stringa '█' * popunjeno praviš dinamički vizuelni lenjir napretka."
      }
    ],
    "quiz": [
      {
        "question": "Zašto profesionalci preferiraju time.perf_counter() u odnosu na time.time() za merenje brzine?",
        "options": [
          "Zato što je perf_counter monotoni tajmer visoke rezolucije koji ne zavisi od promene sistemskog sata",
          "Zato što time.time() radi samo ponedeljkom",
          "Zato što time.perf_counter() automatski ubrzava procesor",
          "Nema nikakve razlike"
        ],
        "correct": 0,
        "explanation": "time.perf_counter() pruža najveću moguću rezoluciju merenja i zaštićen je od pomeranja časovnika na računaru."
      },
      {
        "question": "Šta radi funkcija math.ceil(4.1)?",
        "options": [
          "Vraća 5 (zaokružuje na prvi veći ceo broj)",
          "Vraća 4 (zaokružuje na manji broj)",
          "Vraća 4.0",
          "Izbacuje grešku"
        ],
        "correct": 0,
        "explanation": "Ceil (plafon) uvek zaokružuje decimalni broj na sledeći veći ceo broj."
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: math.isclose() protiv decimalnih duhova",
      "content": "Kada god u inženjerskim proračunima proveravaš da li su dva decimalna broja jednaka, koristi: <code>math.isclose(a, b, rel_tol=1e-9)</code>. To sprečava bagove nastale zbog sitnih zaokruživanja u binarnoj aritmetici!"
    }
  },
  {
    "id": "k3-rad-sa-fajlovima",
    "title": "5. Rad sa Fajlovima na Disku (Trajno Pamćenje)",
    "icon": "💾",
    "category": "Fajlovi i Podaci",
    "summary": "Prekini gubitak podataka: prenesi podatke iz prolaznog RAM-a na trajni disk, savladaj with open() uz OBAVEZNO encoding='utf-8' i izgradi lični šifrovani dnevnik.",
    "content": "\n      <p class=\"lead\">Do sada je svaki naš program patio od teške amnezije: čim se program završi ili ugasiš računar, sve promenljive i liste u RAM memoriji nepovratno nestanu. Vreme je da naučimo kako da <strong>trajno čuvamo podatke na hard disku</strong>!</p>\n\n      <h3>Mentalni model: RAM vs Hard Disk / SSD</h3>\n      <ul>\n        <li><strong>RAM (Radna memorija):</strong> Super-brza, ali čim nestane struje ili se program ugasi — sve se briše (kao pisanje kredom po tabli).</li>\n        <li><strong>Hard Disk / SSD:</strong> Trajno skladište podataka. Fajlovi ostaju sačuvani godinama dok ih namerno ne obrišeš.</li>\n      </ul>\n\n      <h3>Kontekstni menadžer: <code>with open(...)</code></h3>\n      <p>Nekada su programeri morali ručno da otvaraju i zatvaraju fajlove. Ako bi program pukao u sredini, fajl bi ostao zaključan ili oštećen! Zato moderni Python koristi <code>with</code> blok:</p>\n\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\"># Pisanje novog teksta (režim \"w\" - write)\nwith open(\"dnevnik.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Danas je bio fantastičan dan za kodiranje!\\n\")\n\n# Čitanje teksta (režim \"r\" - read)\nwith open(\"dnevnik.txt\", \"r\", encoding=\"utf-8\") as f:\n    sadrzaj = f.read()\n    print(sadrzaj)</code></pre>\n      </div>\n\n      <div class=\"tip-box\" style=\"border-left-color: #ef4444;\">\n        <span class=\"tip-icon\">🌍</span>\n        <div>\n          <strong>ZLATNO PRAVILO: UVEK piši <code>encoding=\"utf-8\"</code>!</strong>\n          <p style=\"margin: 4px 0 0 0;\">Na Windows računarima podrazumevani format teksta je stari <code>cp1250</code> ili <code>windows-1252</code>. Ako u fajl upišeš naša slova (<strong>č, ć, ž, š, đ</strong>) bez parametra <code>encoding=\"utf-8\"</code>, program će pući sa greškom <code>UnicodeEncodeError</code> ili će slova postati nerazumljivi hijeroglifi! Senior inženjer UVEK eksplicitno navodi UTF-8.</p>\n        </div>\n      </div>\n\n      <h3>Tri osnovna režima rada sa fajlom:</h3>\n      <ol>\n        <li><code>\"w\"</code> (Write): Briše sve što je ranije bilo u fajlu i piše od početka (prepisivanje).</li>\n        <li><code>\"a\"</code> (Append): <strong>Dodaje novi tekst na sam kraj</strong> postojećeg fajla, bez brisanja starih podataka!</li>\n        <li><code>\"r\"</code> (Read): Otvara fajl samo za čitanje. Ako fajl ne postoji, javlja se greška <code>FileNotFoundError</code>.</li>\n      </ol>\n    ",
    "starterCode": "# Pisanje i čitanje fajla sa podrškom za srpska slova\nimport os\n\ndef rad_sa_fajlom():\n    ime_fajla = \"poruka.txt\"\n    \n    # 1. Zapisujemo podatke na disk uz encoding=\"utf-8\"\n    with open(ime_fajla, \"w\", encoding=\"utf-8\") as f:\n        f.write(\"Pozdrav iz trajnog fajla na disku!\\n\")\n        f.write(\"Čuvamo naša slova: č, ć, ž, š, đ bez problema.\\n\")\n    print(f\"✅ Fajl '{ime_fajla}' je uspešno zapisan!\")\n    \n    # 2. Učitavamo sadržaj nazad\n    with open(ime_fajla, \"r\", encoding=\"utf-8\") as f:\n        tekst = f.read()\n        \n    print()\n    print(\"--- PROČITANI SADRŽAJ ---\")\n    print(tekst)\n\nif __name__ == \"__main__\":\n    rad_sa_fajlom()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Brojač pokretanja programa (Zagrevanje)",
        "instruction": "Napravi program koji u fajlu 'brojac.txt' pamti koliko je puta pokrenut. Svaki put kad se pokrene, pročita broj, uveća ga za 1 i ponovo upiše.",
        "starter": "def osvezi_brojac():\n    ime_fajla = \"brojac.txt\"\n    broj = 0\n    \n    # Pokušaj da pročitaš prethodni broj ako fajl postoji:\n    try:\n        with open(ime_fajla, \"r\", encoding=\"utf-8\") as f:\n            broj = int(f.read().strip())\n    except (FileNotFoundError, ValueError):\n        broj = 0\n        \n    broj += 1\n    \n    # Sačuvaj novi broj nazad:\n    with open(ime_fajla, \"w\", encoding=\"utf-8\") as f:\n        f.write(str(broj))\n        \n    print(f\"🚀 Ovaj program je pokrenut {broj}. put!\")\n\nif __name__ == \"__main__\":\n    osvezi_brojac()\n",
        "solution": "def osvezi_brojac():\n    ime_fajla = \"brojac.txt\"\n    broj = 0\n    \n    try:\n        with open(ime_fajla, \"r\", encoding=\"utf-8\") as f:\n            broj = int(f.read().strip())\n    except (FileNotFoundError, ValueError):\n        broj = 0\n        \n    broj += 1\n    \n    with open(ime_fajla, \"w\", encoding=\"utf-8\") as f:\n        f.write(str(broj))\n        \n    print(f\"🚀 Ovaj program je pokrenut {broj}. put!\")\n\nif __name__ == \"__main__\":\n    osvezi_brojac()\n",
        "hint": "Uhvati FileNotFoundError za slučaj kada se program pokreće prvi put i fajl još ne postoji."
      },
      {
        "title": "Zadatak 2: Dnevnik brzih misli uz 'a' mod (Glavni izazov)",
        "instruction": "Napiši funkciju dodaj_zabelezku(tekst) koja koristi mod 'a' (append) da na kraj fajla 'beleske.txt' doda novu stavku uz prefiks crtice, bez brisanja starih.",
        "starter": "def dodaj_zabelezku(tekst):\n    ime_fajla = \"beleske.txt\"\n    with open(ime_fajla, \"a\", encoding=\"utf-8\") as f:\n        f.write(f\"- {tekst}\\n\")\n    print(\"✅ Zabeleška dodata na kraj fajla!\")\n\ndef prikazi_beleske():\n    try:\n        with open(\"beleske.txt\", \"r\", encoding=\"utf-8\") as f:\n            print(\"📋 SVE ZABELEŠKE:\")\n            print(f.read())\n    except FileNotFoundError:\n        print(\"Fajl sa beleškama još ne postoji.\")\n\nif __name__ == \"__main__\":\n    dodaj_zabelezku(\"Kupiti mleko i hleb\")\n    dodaj_zabelezku(\"Naučiti rad sa fajlovima u Pythonu\")\n    prikazi_beleske()\n",
        "solution": "def dodaj_zabelezku(tekst):\n    ime_fajla = \"beleske.txt\"\n    with open(ime_fajla, \"a\", encoding=\"utf-8\") as f:\n        f.write(f\"- {tekst}\\n\")\n    print(\"✅ Zabeleška dodata na kraj fajla!\")\n\ndef prikazi_beleske():\n    try:\n        with open(\"beleske.txt\", \"r\", encoding=\"utf-8\") as f:\n            print(\"📋 SVE ZABELEŠKE:\")\n            print(f.read())\n    except FileNotFoundError:\n        print(\"Fajl sa beleškama još ne postoji.\")\n\nif __name__ == \"__main__\":\n    dodaj_zabelezku(\"Kupiti mleko i hleb\")\n    dodaj_zabelezku(\"Naučiti rad sa fajlovima u Pythonu\")\n    prikazi_beleske()\n",
        "hint": "Mod 'a' uvek piše na kraj i nikada ne briše postojeće linije."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Tajni Šifrovani Dnevnik sa PIN Kodom",
        "instruction": "Napravi pravi lični dnevnik. Na početku traži PIN kod (1234). Kada korisnik pogodi PIN, nudi meni: [1] Pročitaj sve zabeleške, [2] Dodaj novu zabelešku sa datumom, [3] Izlaz. Svi podaci se trajno čuvaju u fajlu 'tajni_dnevnik.txt' uz encoding='utf-8'!",
        "starter": "PIN = \"1234\"\nFAJL = \"tajni_dnevnik.txt\"\n\ndef citaj_dnevnik():\n    try:\n        with open(FAJL, \"r\", encoding=\"utf-8\") as f:\n            tekst = f.read()\n            print()\n            print(\"📖 TVOJE TAJNE ZABELEŠKE:\")\n            print(tekst if tekst.strip() else \"(Dnevnik je još prazan)\")\n    except FileNotFoundError:\n        print(\"(Dnevnik je još uvek prazan)\")\n\ndef pisi_u_dnevnik():\n    misao = input(\"Upiši misao za arhivu: \")\n    with open(FAJL, \"a\", encoding=\"utf-8\") as f:\n        f.write(f\"• {misao}\\n\")\n    print(\"✅ Misao je trajno upisana na disk!\")\n\ndef main():\n    uneseni = input(\"Unesi tajni PIN: \")\n    if uneseni != PIN:\n        print(\"🔒 Pogrešan PIN! Pristup odbijen.\")\n        return\n        \n    print(\"🔓 Pristup odobren!\")\n    while True:\n        print()\n        print(\"--- TAJNI DNEVNIK ---\")\n        print(\"[1] Pročitaj zapise\")\n        print(\"[2] Dodaj novi zapis\")\n        print(\"[3] Zaključaj i izađi\")\n        izbor = input(\"Izaberi opciju (1-3): \")\n        \n        if izbor == \"1\":\n            citaj_dnevnik()\n        elif izbor == \"2\":\n            pisi_u_dnevnik()\n        elif izbor == \"3\":\n            print(\"👋 Dnevnik je zaključan. Doviđenja!\")\n            break\n        else:\n            print(\"Nepoznata opcija.\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "PIN = \"1234\"\nFAJL = \"tajni_dnevnik.txt\"\n\ndef citaj_dnevnik():\n    try:\n        with open(FAJL, \"r\", encoding=\"utf-8\") as f:\n            tekst = f.read()\n            print()\n            print(\"📖 TVOJE TAJNE ZABELEŠKE:\")\n            print(tekst if tekst.strip() else \"(Dnevnik je još prazan)\")\n    except FileNotFoundError:\n        print(\"(Dnevnik je još uvek prazan)\")\n\ndef pisi_u_dnevnik():\n    misao = input(\"Upiši misao za arhivu: \")\n    with open(FAJL, \"a\", encoding=\"utf-8\") as f:\n        f.write(f\"• {misao}\\n\")\n    print(\"✅ Misao je trajno upisana na disk!\")\n\ndef main():\n    uneseni = input(\"Unesi tajni PIN: \")\n    if uneseni != PIN:\n        print(\"🔒 Pogrešan PIN! Pristup odbijen.\")\n        return\n        \n    print(\"🔓 Pristup odobren!\")\n    while True:\n        print()\n        print(\"--- TAJNI DNEVNIK ---\")\n        print(\"[1] Pročitaj zapise\")\n        print(\"[2] Dodaj novi zapis\")\n        print(\"[3] Zaključaj i izađi\")\n        izbor = input(\"Izaberi opciju (1-3): \")\n        \n        if izbor == \"1\":\n            citaj_dnevnik()\n        elif izbor == \"2\":\n            pisi_u_dnevnik()\n        elif izbor == \"3\":\n            print(\"👋 Dnevnik je zaključan. Doviđenja!\")\n            break\n        else:\n            print(\"Nepoznata opcija.\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Kombinacija with open(..., 'a', encoding='utf-8') garantuje bezbedan upis i čuvanje svih karaktera."
      }
    ],
    "quiz": [
      {
        "question": "Zašto je na Windows operativnom sistemu važno dodati encoding='utf-8' pri otvaranju fajla?",
        "options": [
          "Da bi se naša slova (č, ć, ž, š, đ) ispravno upisala bez UnicodeDecodeError greške",
          "Da bi fajl zauzimao duplo manje mesta",
          "Da bi se fajl zaključao lozinkom",
          "To je obavezno samo za muzičke fajlove"
        ],
        "correct": 0,
        "explanation": "Bez eksplicitnog UTF-8, Windows koristi lokalne ANSI tabele karaktera što dovodi do kraha programa."
      },
      {
        "question": "Koja je razlika između moda 'w' i moda 'a' pri otvaranju fajla?",
        "options": [
          "'w' briše stari sadržaj i piše iznova, dok 'a' dodaje tekst na kraj bez brisanja",
          "'w' je samo za čitanje, a 'a' za brisanje",
          "'a' briše ceo fajl a 'w' ga šalje na štampač",
          "Nema razlike"
        ],
        "correct": 0,
        "explanation": "'w' je write (prepisivanje od nule), a 'a' je append (dodavanje na postojeći kraj fajla)."
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: Gde se fajl fizički stvara na mom disku?",
      "content": "Kada napišeš <code>open('fajl.txt', 'w')</code> sa samo imenom bez putanje, Python fajl stvara u takozvanom <strong>trenutnom radnom folderu (Current Working Directory)</strong>. U IDLE-u ili VS Code-u to je onaj isti folder u kome se nalazi tvoja <code>.py</code> skripta!"
    }
  },
  {
    "id": "k3-matrice-i-2d",
    "title": "6. Matrice i 2D Svet (Iks-Oks Igra)",
    "icon": "🏁",
    "category": "Napredne Strukture",
    "summary": "Predstavi šahovsku tablu, piksele ili tabelu u Excelu pomoću matrica (ugnježdenih lista), izbegni zamku deljenih referenci i napravi kompletnu Iks-Oks igru za dva igrača.",
    "content": "\n      <p class=\"lead\">Do sada su naše liste bile obične jednodimenzionalne trake brojeva ili reči. Ali šta ako želiš da predstaviš <strong>mrežu, šahovsku tablu, piksele ekrana ili tabelu u Excelu</strong>? Za to koristimo <strong>2D liste (matrice)</strong>!</p>\n\n      <h3>Koordinatna mreža 3x3 table:</h3>\n      <p>Matrica je zapravo <strong>lista čiji su članovi druge liste</strong> (svaki član je jedan red). Pristupamo poljima sa dva indeksa: <code>tabla[red][kolona]</code>!</p>\n      \n      <div class=\"code-explain\">\n        <pre><code>        Kolona 0    Kolona 1    Kolona 2\nRed 0:   [0][0]  |   [0][1]  |   [0][2]\n         --------+-----------+--------\nRed 1:   [1][0]  |   [1][1]  |   [1][2]\n         --------+-----------+--------\nRed 2:   [2][0]  |   [2][1]  |   [2][2]</code></pre>\n      </div>\n\n      <div class=\"tip-box\" style=\"border-left-color: #3b82f6;\">\n        <span class=\"tip-icon\">🧠</span>\n        <div>\n          <strong>Pravilo zgrade i stana:</strong>\n          <p style=\"margin: 4px 0 0 0;\">Uvek zapamti: <code>tabla[red][kolona]</code>. Prvi broj bira <strong>sprat zgrade (red)</strong>, a drugi broj bira <strong>broj stana na tom spratu (kolonu)</strong>!</p>\n        </div>\n      </div>\n\n      <h3>Zamka plitkog kopiranja (Shallow copy trap):</h3>\n      <p>Ako početnik pokuša da napravi tablu sa: <code>tabla = [[\" \"] * 3] * 3</code>, desiće se katastrofa! Kada promeniš jedno polje, promeniće se u sva tri reda odjednom! Zašto? Zato što je Python tri puta ponovio <em>istu referencu na jedan te isti red</em>.</p>\n      \n      <p><strong>Pravilan inženjerski način je List Comprehension:</strong></p>\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\"># Pravi 3 potpuno nezavisna reda:\ntabla = [[\" \" for _ in range(3)] for _ in range(3)]</code></pre>\n      </div>\n\n      <h3>Lepši prolazak kroz matricu: <code>enumerate()</code></h3>\n      <p>Umesto teškog <code>for i in range(len(tabla)):</code>, elegantan Python nudi funkciju <code>enumerate()</code> koja nam istovremeno daje i indeks reda i sam red:</p>\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">for r_idx, red in enumerate(tabla):\n    print(f\"Red {r_idx}: {' | '.join(red)}\")</code></pre>\n      </div>\n    ",
    "starterCode": "# Iscrtavanje 2D table dimenzija 3x3 za Iks-Oks\ndef prikazi_tablu(tabla):\n    print()\n    print(\"   0   1   2  (Kolone)\")\n    for i, red in enumerate(tabla):\n        red_tekst = \" | \".join(red)\n        print(f\"{i}  {red_tekst}\")\n        if i < 2:\n            print(\"  ---+---+---\")\n    print()\n\ndef main():\n    # Kreiramo čistu 3x3 tablu\n    tabla = [[\" \" for _ in range(3)] for _ in range(3)]\n    \n    # Postavimo nekoliko poteza:\n    tabla[1][1] = \"X\"  # Centar\n    tabla[0][0] = \"O\"  # Gornji levi ugao\n    tabla[2][2] = \"X\"  # Donji desni ugao\n    \n    prikazi_tablu(tabla)\n\nif __name__ == \"__main__\":\n    main()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Zbir elemenata matrice 3x3 (Zagrevanje)",
        "instruction": "Data je matrica brojeva 3x3. Napiši dvostruku for petlju koja sabira sve brojeve u matrici i pronalazi najveći broj.",
        "starter": "matrica = [\n    [10, 20, 30],\n    [5,  15, 25],\n    [1,  2,  3]\n]\n\ndef analiziraj_matricu(m):\n    ukupno = 0\n    najveci = m[0][0]\n    \n    for red in m:\n        for broj in red:\n            ukupno += broj\n            if broj > najveci:\n                najveci = broj\n                \n    print(f\"Ukupan zbir svih polja: {ukupno}\")\n    print(f\"Najveći broj u matrici: {najveci}\")\n\nif __name__ == \"__main__\":\n    analiziraj_matricu(matrica)\n",
        "solution": "matrica = [\n    [10, 20, 30],\n    [5,  15, 25],\n    [1,  2,  3]\n]\n\ndef analiziraj_matricu(m):\n    ukupno = 0\n    najveci = m[0][0]\n    \n    for red in m:\n        for broj in red:\n            ukupno += broj\n            if broj > najveci:\n                najveci = broj\n                \n    print(f\"Ukupan zbir svih polja: {ukupno}\")\n    print(f\"Najveći broj u matrici: {najveci}\")\n\nif __name__ == \"__main__\":\n    analiziraj_matricu(matrica)\n",
        "hint": "Prva petlja prolazi kroz redove, a unutrašnja petlja kroz brojeve u tom redu."
      },
      {
        "title": "Zadatak 2: Bezbedno postavljanje poteza (Glavni izazov)",
        "instruction": "Napiši funkciju odigraj_potez(tabla, red, kolona, igrac) koja proverava da li su koordinate u rasponu 0-2 i da li je polje prazno (' '). Ako jeste, upisuje simbol i vraća True, u suprotnom vraća False uz poruku.",
        "starter": "def odigraj_potez(tabla, red, kolona, igrac):\n    # Proveri opseg koordinata:\n    if red < 0 or red > 2 or kolona < 0 or kolona > 2:\n        print(\"❌ Greška: Koordinate moraju biti 0, 1 ili 2!\")\n        return False\n        \n    # Proveri da li je polje već zauzeto:\n    if tabla[red][kolona] != \" \":\n        print(\"❌ To polje je već zauzeto!\")\n        return False\n        \n    tabla[red][kolona] = igrac\n    return True\n\nif __name__ == \"__main__\":\n    t = [[\" \" for _ in range(3)] for _ in range(3)]\n    print(\"Uspeh:\", odigraj_potez(t, 1, 1, \"X\"))\n    print(\"Uspeh ponovo:\", odigraj_potez(t, 1, 1, \"O\"))  # Treba da javi grešku\n",
        "solution": "def odigraj_potez(tabla, red, kolona, igrac):\n    if red < 0 or red > 2 or kolona < 0 or kolona > 2:\n        print(\"❌ Greška: Koordinate moraju biti 0, 1 ili 2!\")\n        return False\n        \n    if tabla[red][kolona] != \" \":\n        print(\"❌ To polje je već zauzeto!\")\n        return False\n        \n    tabla[red][kolona] = igrac\n    return True\n\nif __name__ == \"__main__\":\n    t = [[\" \" for _ in range(3)] for _ in range(3)]\n    print(\"Uspeh:\", odigraj_potez(t, 1, 1, \"X\"))\n    print(\"Uspeh ponovo:\", odigraj_potez(t, 1, 1, \"O\"))\n",
        "hint": "Uslov tabla[red][kolona] == ' ' proverava da li je polje prazno."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Kompletna Igra Iks-Oks (Tic-Tac-Toe)",
        "instruction": "Dovrši kompletnu Iks-Oks igru za dva igrača. Igra proverava pobednika u redovima, kolonama i na obe dijagonale, ili proglašava nerešeno kada se tabla popuni!",
        "starter": "def prikazi_tablu(t):\n    print()\n    for i, red in enumerate(t):\n        print(f\" {' | '.join(red)} \")\n        if i < 2:\n            print(\"---+---+---\")\n    print()\n\ndef proveri_pobednika(t, igrac):\n    # Provera 3 reda:\n    for red in t:\n        if red == [igrac, igrac, igrac]:\n            return True\n    # Provera 3 kolone:\n    for k in range(3):\n        if t[0][k] == igrac and t[1][k] == igrac and t[2][k] == igrac:\n            return True\n    # Provera 2 dijagonale:\n    if t[0][0] == igrac and t[1][1] == igrac and t[2][2] == igrac:\n        return True\n    if t[0][2] == igrac and t[1][1] == igrac and t[2][0] == igrac:\n        return True\n    return False\n\ndef proveri_nereseno(t):\n    for red in t:\n        if \" \" in red:\n            return False\n    return True\n\ndef main():\n    tabla = [[\" \" for _ in range(3)] for _ in range(3)]\n    igrac = \"X\"\n    print(\"🎮 DOBRODOŠLI U IKS-OKS IGRU!\")\n    \n    # Za demonstraciju u konzoli:\n    prikazi_tablu(tabla)\n    print(\"Tabla je spremna za igru!\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "def prikazi_tablu(t):\n    print()\n    for i, red in enumerate(t):\n        print(f\" {' | '.join(red)} \")\n        if i < 2:\n            print(\"---+---+---\")\n    print()\n\ndef proveri_pobednika(t, igrac):\n    for red in t:\n        if red == [igrac, igrac, igrac]:\n            return True\n    for k in range(3):\n        if t[0][k] == igrac and t[1][k] == igrac and t[2][k] == igrac:\n            return True\n    if t[0][0] == igrac and t[1][1] == igrac and t[2][2] == igrac:\n        return True\n    if t[0][2] == igrac and t[1][1] == igrac and t[2][0] == igrac:\n        return True\n    return False\n\ndef proveri_nereseno(t):\n    for red in t:\n        if \" \" in red:\n            return False\n    return True\n\ndef main():\n    tabla = [[\" \" for _ in range(3)] for _ in range(3)]\n    igrac = \"X\"\n    print(\"🎮 IKS-OKS IGRA SPREMNA!\")\n    prikazi_tablu(tabla)\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Glavne dijagonale su polja [0][0]-[1][1]-[2][2] i [0][2]-[1][1]-[2][0]."
      }
    ],
    "quiz": [
      {
        "question": "Kako se pristupa elementu u drugom redu i trećoj koloni matrice?",
        "options": [
          "matrica[1][2] (jer indeksiranje kreće od nule)",
          "matrica[2][3]",
          "matrica[3][2]",
          "matrica(2, 3)"
        ],
        "correct": 0,
        "explanation": "U programiranju indeksi počinju od 0, pa je 2. red indeks 1, a 3. kolona indeks 2."
      },
      {
        "question": "Zašto je opasno kreirati tablu sa tabla = [[' '] * 3] * 3?",
        "options": [
          "Zato što sva tri reda dele istu memorijsku referencu, pa promena jednog polja menja sva tri reda",
          "Zato što Python ne podržava zvezdicu",
          "Zato što radi samo sa brojevima",
          "Nije opasno, to je najbolji način"
        ],
        "correct": 0,
        "explanation": "Množenje liste zvezdicom kopira samo pokazivač (referencu), a ne pravi nezavisne kopije."
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: enumerate() je tvoj najbolji prijatelj",
      "content": "Kad god ti u petlji treba i redni broj i sama stavka, nemoj pisati <code>for i in range(len(lista)):</code> pa <code>stavka = lista[i]</code>. Piši uvek čisto: <code>for i, stavka in enumerate(lista):</code>!"
    }
  },
  {
    "id": "k3-napredne-funkcije",
    "title": "7. Arhitektura Koda i Opseg (Napredne Funkcije)",
    "icon": "🏗️",
    "category": "Arhitektura Softvera",
    "summary": "Piši kod kao inženjer sa 10 godina iskustva: savladaj Scope promenljivih, izbegni pogubnu zamku mutabilnih argumenata (def f(lst=[])), koristi Type Hints i vraćaj višestruke rezultate.",
    "content": "\n      <p class=\"lead\">U drugom kursu smo naučili da funkcije primaju ulaz i vraćaju izlaz. Sada učimo kako da ih organizujemo tako da naš kod izgleda <strong>kao da ga je pisao softverski inženjer iz vrhunske IT kompanije</strong>!</p>\n\n      <h3>1. Opseg promenljivih (Scope – Ko gde živi?):</h3>\n      <p>Zamislite da svaka funkcija ima svoju <em>privatnu sobu</em>:</p>\n      <ul>\n        <li><strong>Lokalne promenljive:</strong> Stvorene unutar funkcije. Žive samo dok funkcija radi i niko van funkcije ne može da ih vidi. To je odlično jer sprečava slučajne greške!</li>\n        <li><strong>Globalne promenljive:</strong> Nalaze se u \"zajedničkom hodniku zgrade\". Svi mogu da ih čitaju, ali profesionalci izbegavaju menjanje globalnih promenljivih (reč <code>global</code> je znak loše arhitekture).</li>\n      </ul>\n\n      <h3>2. Vraćanje više vrednosti odjednom (Tuple Unpacking):</h3>\n      <p>Python ima magičnu sposobnost da u jednoj <code>return</code> naredbi vrati više rezultata odjednom:</p>\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">def analiziraj_brojeve(brojevi):\n    najmanji = min(brojevi)\n    najveci = max(brojevi)\n    prosek = sum(brojevi) / len(brojevi)\n    return najmanji, najveci, prosek\n\n# Raspakivanje rezultata u 3 promenljive:\nmini, maxi, avg = analiziraj_brojeve([5, 10, 15, 20])\nprint(f\"Min: {mini}, Max: {maxi}, Prosek: {avg}\")</code></pre>\n      </div>\n\n      <div class=\"tip-box\" style=\"border-left-color: #ef4444;\">\n        <span class=\"tip-icon\">🪤</span>\n        <div>\n          <strong>NAJČEŠĆA ZAMKA NA TEHNIČKIM INTERVJUIMA:</strong>\n          <p style=\"margin: 4px 0 0 0;\">Nikada nemoj pisati praznu listu kao podrazumevani argument: <code>def dodaj(predmet, lista=[]):</code>! U Pythonu se ta lista stvori SAMO JEDNOM pri pokretanju programa, i pamtiće predmete kroz sve buduće pozive funkcije! Pravilan način je:\n          <br><code>def dodaj(predmet, lista=None):</code><br>\n          <code>    if lista is None: lista = []</code></p>\n        </div>\n      </div>\n\n      <h3>3. Moderna dobra praksa: Type Hints i Docstrings</h3>\n      <p>U modernom Pythonu 3 inženjeri dodaju tipske napomene (Type Hints) i opise (Docstrings) da bi kod bio samoočigledan:</p>\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">def obracunaj_porez(osnovica: float, stopa: float = 0.20) -> float:\n    \"\"\"Računa iznos poreza na osnovu poreske stope (podrazumevano 20%).\"\"\"\n    return osnovica * stopa</code></pre>\n      </div>\n    ",
    "starterCode": "# Profesionalno napisana funkcija sa docstringom i višestrukim izlazom\ndef analiziraj_ocene(ocene: list) -> tuple:\n    \"\"\"\n    Analizira listu školskih ocena.\n    Vraća: (najmanja, najveća, prosek, da li je odličan)\n    \"\"\"\n    if not ocene:\n        return 0, 0, 0.0, False\n        \n    najmanja = min(ocene)\n    najveca = max(ocene)\n    prosek = sum(ocene) / len(ocene)\n    odlican = prosek >= 4.5 and najmanja > 1\n    \n    return najmanja, najveca, prosek, odlican\n\ndef main():\n    moje_ocene = [5, 4, 5, 5, 4, 5]\n    mini, maxi, avg, odlican = analiziraj_ocene(moje_ocene)\n    \n    print(f\"Najmanja: {mini} | Najveća: {maxi}\")\n    print(f\"Prosek:   {avg:.2f}\")\n    print(f\"Odličan:  {'DA 🎓' if odlican else 'NE'}\")\n\nif __name__ == \"__main__\":\n    main()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Kalkulator porudžbine sa podrazumevanom dostavom (Zagrevanje)",
        "instruction": "Napiši funkciju izracunaj_ukupno(cene, dostava=300) gde je dostava podrazumevani argument (default). Ako je zbir cena preko 3000 din, dostava postaje besplatna (0 din)!",
        "starter": "def izracunaj_ukupno(cene: list, dostava: int = 300) -> int:\n    zbir = sum(cene)\n    if zbir > 3000:\n        dostava = 0\n        print(\"🎉 Čestitamo! Ostvarili ste BESPLATNU dostavu!\")\n    return zbir + dostava\n\nif __name__ == \"__main__\":\n    racun1 = izracunaj_ukupno([1200, 800])\n    print(f\"Račun 1: {racun1} din\")\n    \n    racun2 = izracunaj_ukupno([2000, 1500])\n    print(f\"Račun 2: {racun2} din\")\n",
        "solution": "def izracunaj_ukupno(cene: list, dostava: int = 300) -> int:\n    zbir = sum(cene)\n    if zbir > 3000:\n        dostava = 0\n        print(\"🎉 Čestitamo! Ostvarili ste BESPLATNU dostavu!\")\n    return zbir + dostava\n\nif __name__ == \"__main__\":\n    racun1 = izracunaj_ukupno([1200, 800])\n    print(f\"Račun 1: {racun1} din\")\n    \n    racun2 = izracunaj_ukupno([2000, 1500])\n    print(f\"Račun 2: {racun2} din\")\n",
        "hint": "Default argument se postavlja u definiciji funkcije: def funkcija(param=vrednost):"
      },
      {
        "title": "Zadatak 2: Multi-statistika rečenice (Glavni izazov)",
        "instruction": "Napiši funkciju analiziraj_tekst(tekst) koja vraća 3 podatka odjednom: broj reči, ukupan broj slova bez razmaka, i najdužu reč u tekstu.",
        "starter": "def analiziraj_tekst(tekst: str):\n    reci = tekst.split()\n    broj_reci = len(reci)\n    broj_slova = sum(len(r) for r in reci)\n    najduza_rec = max(reci, key=len) if reci else \"\"\n    return broj_reci, broj_slova, najduza_rec\n\nif __name__ == \"__main__\":\n    primer = \"Python je neverovatno moćan programski jezik\"\n    br_r, br_s, naj = analiziraj_tekst(primer)\n    print(f\"Broj reči:    {br_r}\")\n    print(f\"Broj slova:   {br_s}\")\n    print(f\"Najduža reč:  {naj}\")\n",
        "solution": "def analiziraj_tekst(tekst: str):\n    reci = tekst.split()\n    broj_reci = len(reci)\n    broj_slova = sum(len(r) for r in reci)\n    najduza_rec = max(reci, key=len) if reci else \"\"\n    return broj_reci, broj_slova, najduza_rec\n\nif __name__ == \"__main__\":\n    primer = \"Python je neverovatno moćan programski jezik\"\n    br_r, br_s, naj = analiziraj_tekst(primer)\n    print(f\"Broj reči:    {br_r}\")\n    print(f\"Broj slova:   {br_s}\")\n    print(f\"Najduža reč:  {naj}\")\n",
        "hint": "Iskoristi max(reci, key=len) za pronalazak reči sa najvećom dužinom."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Generator i Analizator Bezbednih Lozinki",
        "instruction": "Napravi profesionalni generator lozinki sa default parametrima (duzina=12, brojevi=True, specijalni=True) koji generiše lozinku, meri njenu sigurnost (0-100) i vraća lozinku i ocenu jačine!",
        "starter": "import random\n\ndef generisi_lozinku(duzina=12, ukljuci_brojeve=True, ukljuci_specijalne=True):\n    slova = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\"\n    cifre = \"0123456789\"\n    znaci = \"!@#$%^&*()-_=+\"\n    \n    bazen = list(slova)\n    if ukljuci_brojeve:\n        bazen.extend(list(cifre))\n    if ukljuci_specijalne:\n        bazen.extend(list(znaci))\n        \n    lozinka = \"\".join(random.choice(bazen) for _ in range(duzina))\n    \n    # Oceni jačinu\n    ocena = duzina * 5\n    if ukljuci_brojeve: ocena += 20\n    if ukljuci_specijalne: ocena += 20\n    ocena = min(100, ocena)\n    \n    return lozinka, ocena\n\ndef main():\n    lozinka, jacina = generisi_lozinku(14, True, True)\n    print(\"=\" * 40)\n    print(\"🔐 GENERATOR SIGURNIH LOZINKI\")\n    print(f\"Lozinka: {lozinka}\")\n    print(f\"Sigurnost: {jacina}/100\")\n    print(\"=\" * 40)\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "import random\n\ndef generisi_lozinku(duzina=12, ukljuci_brojeve=True, ukljuci_specijalne=True):\n    slova = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\"\n    cifre = \"0123456789\"\n    znaci = \"!@#$%^&*()-_=+\"\n    \n    bazen = list(slova)\n    if ukljuci_brojeve:\n        bazen.extend(list(cifre))\n    if ukljuci_specijalne:\n        bazen.extend(list(znaci))\n        \n    lozinka = \"\".join(random.choice(bazen) for _ in range(duzina))\n    \n    ocena = duzina * 5\n    if ukljuci_brojeve: ocena += 20\n    if ukljuci_specijalne: ocena += 20\n    ocena = min(100, ocena)\n    \n    return lozinka, ocena\n\ndef main():\n    lozinka, jacina = generisi_lozinku(14, True, True)\n    print(\"=\" * 40)\n    print(\"🔐 GENERATOR SIGURNIH LOZINKI\")\n    print(f\"Lozinka: {lozinka}\")\n    print(f\"Sigurnost: {jacina}/100\")\n    print(\"=\" * 40)\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Funkcija vraća dva podatka odjednom koji se otpakuju kao: lozinka, jacina = generisi_lozinku()."
      }
    ],
    "quiz": [
      {
        "question": "Zašto je opasno pisati def dodaj(stavka, lista=[]): sa praznom listom kao default argumentom?",
        "options": [
          "Zato što se lista kreira samo jednom i deliće se kroz sve buduće pozive te funkcije",
          "Zato što Python zabranjuje uglaste zagrade u parametrima",
          "Zato što lista može da primi samo brojeve",
          "Nije opasno, to je preporučeno"
        ],
        "correct": 0,
        "explanation": "Podrazumevani argumenti se evaluiraju samo jednom pri definisanju funkcije, pa mutabilni objekti pamte stanje."
      },
      {
        "question": "Šta su Type Hints u definiciji: def pomnozi(a: int, b: int) -> int:?",
        "options": [
          "Oznake tipova podataka koje pomažu programeru i editoru, a ne sprečavaju pokretanje",
          "Naredbe koje pretvaraju tekst u broj",
          "Sintaksna greška u novom Pythonu",
          "Privatne lozinke funkcije"
        ],
        "correct": 0,
        "explanation": "Type hints dokumentuju koje tipove argumenata funkcija očekuje i šta vraća kao rezultat."
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: Pravilo jedne odgovornosti (Single Responsibility Principle)",
      "content": "Zlatno pravilo softverskog inženjeringa glasi: <strong>Jedna funkcija treba da radi tačno JEDNU stvar, ali da je radi savršeno</strong>! Ako se tvoja funkcija zove <code>ucitaj_i_obradi_i_sacuvaj()</code>, razdvoji je na tri manje funkcije!"
    }
  },
  {
    "id": "k3-algoritmi-pretrage",
    "title": "8. Razmišljaj kao Inženjer (Algoritmi i Pretrage)",
    "icon": "⚡",
    "category": "Algoritmi i Složenost",
    "summary": "Otkrij kako računari pretražuju milione podataka za treptaj oka: uporedi linearnu i binarnu pretragu, razumi Big-O složenost i izgradi pametni telefonski imenik.",
    "content": "\n      <p class=\"lead\">Šta razlikuje amatera od softverskog inženjera? Sposobnost da izabere <strong>pravi algoritam</strong>! Naučićemo zašto je binarna pretraga jedno od najvećih inženjerskih čuda računarstva.</p>\n\n      <h3>Zamisli igru pogađanja broja od 1 do 100:</h3>\n      <ul>\n        <li><strong>Linearna pretraga (Spora):</strong> Pitaš redom: <em>\"Da li je 1? Da li je 2? Da li je 3?...\"</em>. U najgorem slučaju treba ti 100 pitanja! Za milion podataka treba ti milion koraka.</li>\n        <li><strong>Binarna pretraga (Munjevita):</strong> Pitaš: <em>\"Da li je veći od 50?\"</em>. Ako kaže 'jeste', jednim potezom si <strong>eliminisao 50 brojeva</strong>! Zatim pitaš za 75, pa 88... Za milion brojeva treba ti NAJVIŠE 20 pitanja!</li>\n      </ul>\n\n      <div class=\"tip-box\" style=\"border-left-color: #ef4444;\">\n        <span class=\"tip-icon\">👑</span>\n        <div>\n          <strong>ZLATNI ZAKON BINARNE PRETRAGE:</strong>\n          <p style=\"margin: 4px 0 0 0;\">Binarna pretraga radi <strong>SAMO I ISKLJUČIVO NAD SORTIRANIM PODACIMA</strong>! Ako lista nije sortirana od najmanjeg do najvećeg, algoritam 'pola-pola' ne zna u kojoj polovini se nalazi traženi broj i daće pogrešan odgovor.</p>\n        </div>\n      </div>\n\n      <h3>Big-O notacija jednostavnim rečima:</h3>\n      <p>Inženjeri ne mere brzinu algoritma u sekundama (jer to zavisi da li imaš jeftin ili skup računar), već u <strong>broju operacija</strong> kako podaci rastu:</p>\n      <ul>\n        <li><strong>O(n) Linearno vreme:</strong> Ako se podaci uvećaju 1000 puta, i vreme rada poraste 1000 puta (linearna pretraga).</li>\n        <li><strong>O(log n) Logaritamsko vreme:</strong> Ako se podaci uvećaju 1.000.000 puta, vreme rada poraste samo za dvadesetak koraka (binarna pretraga)!</li>\n      </ul>\n\n      <div class=\"code-explain\">\n        <pre><code class=\"language-python\">def binarna_pretraga(lista, trazeni):\n    levo = 0\n    desno = len(lista) - 1\n    \n    while levo <= desno:\n        sredina = (levo + desno) // 2  # Celobrojno deljenje\n        if lista[sredina] == trazeni:\n            return sredina  # Pronađen indeks!\n        elif lista[sredina] < trazeni:\n            levo = sredina + 1  # Tražimo u desnoj polovini\n        else:\n            desno = sredina - 1  # Tražimo u levoj polovini\n            \n    return -1  # Nije pronađen</code></pre>\n      </div>\n    ",
    "starterCode": "# Poređenje linearne i binarne pretrage sa merenjem broja koraka\ndef linearna_pretraga(lista, trazeni):\n    koraci = 0\n    for i, broj in enumerate(lista):\n        koraci += 1\n        if broj == trazeni:\n            return i, koraci\n    return -1, koraci\n\ndef binarna_pretraga(lista, trazeni):\n    levo = 0\n    desno = len(lista) - 1\n    koraci = 0\n    \n    while levo <= desno:\n        koraci += 1\n        sredina = (levo + desno) // 2\n        if lista[sredina] == trazeni:\n            return sredina, koraci\n        elif lista[sredina] < trazeni:\n            levo = sredina + 1\n        else:\n            desno = sredina - 1\n            \n    return -1, koraci\n\ndef main():\n    # Sortirana lista od 10.000 brojeva:\n    podaci = list(range(1, 10001))\n    trazeni = 9999\n    \n    _, k_lin = linearna_pretraga(podaci, trazeni)\n    _, k_bin = binarna_pretraga(podaci, trazeni)\n    \n    print(f\"Tražimo broj {trazeni} među 10.000 brojeva:\")\n    print(f\"🐢 Linearna pretraga trebala je: {k_lin} koraka\")\n    print(f\"⚡ Binarna pretraga trebala je:  {k_bin} koraka!\")\n\nif __name__ == \"__main__\":\n    main()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Brojanje koraka binarne pretrage (Zagrevanje)",
        "instruction": "Napiši funkciju maksimalni_koraci(n) koja računa koliko je najviše koraka potrebno binarnoj pretrazi za listu od n elemenata (koristi formulu math.ceil(math.log2(n))).",
        "starter": "import math\n\ndef maksimalni_koraci(n):\n    return math.ceil(math.log2(n))\n\nif __name__ == \"__main__\":\n    for velicina in [100, 1000, 1_000_000, 1_000_000_000]:\n        koraci = maksimalni_koraci(velicina)\n        print(f\"Za {velicina:>13,} elemenata -> najviše {koraci} koraka!\")\n",
        "solution": "import math\n\ndef maksimalni_koraci(n):\n    return math.ceil(math.log2(n))\n\nif __name__ == \"__main__\":\n    for velicina in [100, 1000, 1_000_000, 1_000_000_000]:\n        koraci = maksimalni_koraci(velicina)\n        print(f\"Za {velicina:>13,} elemenata -> najviše {koraci} koraka!\")\n",
        "hint": "Čak i za milijardu podataka, binarnoj pretrazi treba samo 30 upoređivanja!"
      },
      {
        "title": "Zadatak 2: Sortiranje mehurićima (Bubble Sort) (Glavni izazov)",
        "instruction": "Da bismo mogli da koristimo binarnu pretragu, podaci moraju biti sortirani. Implementiraj osnovni algoritam sortiranja koji zamenjuje susedne elemente ako su u pogrešnom redosledu.",
        "starter": "def bubble_sort(lista):\n    n = len(lista)\n    # Pravimo kopiju da ne menjamo original\n    arr = list(lista)\n    \n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                # Zamena mesta (Swap):\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nif __name__ == \"__main__\":\n    nesortirano = [64, 34, 25, 12, 22, 11, 90]\n    sortirano = bubble_sort(nesortirano)\n    print(\"Pre:\", nesortirano)\n    print(\"Posle:\", sortirano)\n",
        "solution": "def bubble_sort(lista):\n    n = len(lista)\n    arr = list(lista)\n    \n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nif __name__ == \"__main__\":\n    nesortirano = [64, 34, 25, 12, 22, 11, 90]\n    sortirano = bubble_sort(nesortirano)\n    print(\"Pre:\", nesortirano)\n    print(\"Posle:\", sortirano)\n",
        "hint": "Python omogućava istovremenu zamenu dve promenljive: a, b = b, a."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Pametni Telefonski Imenik sa Binarnom Pretragom",
        "instruction": "Napravi brzi telefonski imenik koji sortira kontakte po imenu i koristi binarnu pretragu da pronađe broj telefona zadate osobe u deliću sekunde!",
        "starter": "imenik = [\n    {\"ime\": \"Ana\", \"telefon\": \"064-111-222\"},\n    {\"ime\": \"Bojan\", \"telefon\": \"063-333-444\"},\n    {\"ime\": \"Dusan\", \"telefon\": \"062-555-666\"},\n    {\"ime\": \"Elena\", \"telefon\": \"065-777-888\"},\n    {\"ime\": \"Filip\", \"telefon\": \"060-999-000\"},\n    {\"ime\": \"Jovan\", \"telefon\": \"061-222-333\"},\n    {\"ime\": \"Milica\", \"telefon\": \"064-444-555\"},\n    {\"ime\": \"Nikola\", \"telefon\": \"063-666-777\"},\n    {\"ime\": \"Sara\", \"telefon\": \"062-888-999\"}\n]\n\ndef pronadji_kontakt(lista_kontakata, trazeno_ime):\n    levo = 0\n    desno = len(lista_kontakata) - 1\n    \n    while levo <= desno:\n        sredina = (levo + desno) // 2\n        trenutno_ime = lista_kontakata[sredina][\"ime\"]\n        \n        if trenutno_ime.lower() == trazeno_ime.lower():\n            return lista_kontakata[sredina][\"telefon\"]\n        elif trenutno_ime.lower() < trazeno_ime.lower():\n            levo = sredina + 1\n        else:\n            desno = sredina - 1\n            \n    return None\n\ndef main():\n    ime = \"Milica\"\n    tel = pronadji_kontakt(imenik, ime)\n    if tel:\n        print(f\"📞 Kontakt '{ime}': {tel}\")\n    else:\n        print(f\"❌ Kontakt '{ime}' nije pronađen.\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "imenik = [\n    {\"ime\": \"Ana\", \"telefon\": \"064-111-222\"},\n    {\"ime\": \"Bojan\", \"telefon\": \"063-333-444\"},\n    {\"ime\": \"Dusan\", \"telefon\": \"062-555-666\"},\n    {\"ime\": \"Elena\", \"telefon\": \"065-777-888\"},\n    {\"ime\": \"Filip\", \"telefon\": \"060-999-000\"},\n    {\"ime\": \"Jovan\", \"telefon\": \"061-222-333\"},\n    {\"ime\": \"Milica\", \"telefon\": \"064-444-555\"},\n    {\"ime\": \"Nikola\", \"telefon\": \"063-666-777\"},\n    {\"ime\": \"Sara\", \"telefon\": \"062-888-999\"}\n]\n\ndef pronadji_kontakt(lista_kontakata, trazeno_ime):\n    levo = 0\n    desno = len(lista_kontakata) - 1\n    \n    while levo <= desno:\n        sredina = (levo + desno) // 2\n        trenutno_ime = lista_kontakata[sredina][\"ime\"]\n        \n        if trenutno_ime.lower() == trazeno_ime.lower():\n            return lista_kontakata[sredina][\"telefon\"]\n        elif trenutno_ime.lower() < trazeno_ime.lower():\n            levo = sredina + 1\n        else:\n            desno = sredina - 1\n            \n    return None\n\ndef main():\n    ime = \"Milica\"\n    tel = pronadji_kontakt(imenik, ime)\n    if tel:\n        print(f\"📞 Kontakt '{ime}': {tel}\")\n    else:\n        print(f\"❌ Kontakt '{ime}' nije pronađen.\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Pošto su imena već sortirana po abecedi, binarna pretraga ih pronalazi munjevito poredeći stringove."
      }
    ],
    "quiz": [
      {
        "question": "Koji je osnovni preduslov da bi binarna pretraga uopšte radila?",
        "options": [
          "Podaci u listi moraju biti prethodno sortirani",
          "Lista mora sadržati samo neparne brojeve",
          "Lista mora imati tačno 100 članova",
          "Nema preduslova"
        ],
        "correct": 0,
        "explanation": "Binarna pretraga se oslanja na redosled da bi odbacila polovinu elemenata u svakom koraku."
      },
      {
        "question": "Koliko je najviše koraka potrebno binarnoj pretrazi da pronađe element među 1.000.000 stavki?",
        "options": [
          "Oko 20 koraka",
          "1.000.000 koraka",
          "500.000 koraka",
          "10 koraka"
        ],
        "correct": 0,
        "explanation": "Pošto je 2^20 = 1.048.576, za milion elemenata potrebno je najviše 20 polavljenja!"
      }
    ],
    "proTip": {
      "title": "Inženjerski savet: Modul bisect u Pythonu",
      "content": "Python u svojoj standardnoj biblioteci ima gotov modul <code>bisect</code> koji sadrži fabrički optimizovanu binarnu pretragu napisanu u C jeziku: <code>bisect.bisect_left(lista, trazeni)</code>!"
    }
  },
  {
    "id": "k3-tamagotchi-master",
    "title": "9. Veliko Finale: Virtuelni Ljubimac (Tamagotchi Master)",
    "icon": "🐣",
    "category": "Diplomski Projekat",
    "summary": "Kruna Trijade Osnova: objedini sve stečeno znanje u kompletnu igru virtuelnog ljubimca koji pamti stanje u trajnom fajlu uz encoding='utf-8', preživljava restart i donosi ti zvaničnu diplomu majstora osnova Pythona!",
    "content": "\n      <p class=\"lead\">Stigli smo do samog vrha <strong>Trijade Osnova</strong>! U ovom diplomskom projektu povezujemo sve koncepte iz sva tri kursa u jedno živo, funkcionalno remek-delo: <strong>igru virtuelnog ljubimca (Tamagotchi)</strong> koji živi u fajlu na tvom hard disku!</p>\n\n      <h3>Inženjerska arhitektura projekta (SRP princip):</h3>\n      <p>Pravi inženjer ne piše jednu ogromnu kobasicu od koda. Projekat delimo na čiste, modularne funkcije gde svaka ima tačno jednu ulogu:</p>\n      <ul>\n        <li><code>ucitaj_stanje(fajl)</code>: Čita podatke sa diska uz <code>encoding=\"utf-8\"</code> i obradu <code>FileNotFoundError</code>.</li>\n        <li><code>sacuvaj_stanje(fajl, stanje)</code>: Trajno upisuje podatke nazad na disk.</li>\n        <li><code>nacrtaj_ljubimca(stanje)</code>: Prikazuje emotivno lice ljubimca zavisno od zdravlja i gladi.</li>\n        <li><code>nahrani()</code>, <code>igraj_se()</code>, <code>odmori()</code>: Menjaju statistike ljubimca uz proveru granica (0-100).</li>\n        <li><code>glavna_igra()</code>: Upravlja menijem i petljom igre pod okriljem <code>if __name__ == '__main__':</code>.</li>\n      </ul>\n\n      <div class=\"tip-box\" style=\"border-left-color: #10b981;\">\n        <span class=\"tip-icon\">🎓</span>\n        <div>\n          <strong>Tvoja zvanična diploma majstora osnova programiranja:</strong>\n          <p style=\"margin: 4px 0 0 0;\">Kada uspešno pokreneš i završiš Tamagotchija, program će generisati tvoju <strong>svečanu ASCII diplomu</strong> sa tvojim imenom! Preuzmi ovaj fajl pomoću dugmeta <strong>💾 Preuzmi .py</strong> i pokreni ga ponosno na svom računaru u IDLE-u ili VS Code-u!</p>\n        </div>\n      </div>\n    ",
    "starterCode": "# TAMAGOTCHI MASTER - DIPLOMSKI PROJEKAT TRIJADE OSNOVA\nimport time\nimport random\n\nFAJL_PODATAKA = \"tamagotchi_podaci.txt\"\n\ndef ucitaj_stanje():\n    try:\n        with open(FAJL_PODATAKA, \"r\", encoding=\"utf-8\") as f:\n            linije = f.read().splitlines()\n            return {\n                \"ime\": linije[0],\n                \"glad\": int(linije[1]),\n                \"energija\": int(linije[2]),\n                \"sreca\": int(linije[3]),\n                \"godine\": int(linije[4])\n            }\n    except (FileNotFoundError, IndexError, ValueError):\n        # Ako fajl ne postoji, kreiramo novog ljubimca:\n        return {\"ime\": \"Kodi\", \"glad\": 50, \"energija\": 80, \"sreca\": 70, \"godine\": 1}\n\ndef sacuvaj_stanje(stanje):\n    with open(FAJL_PODATAKA, \"w\", encoding=\"utf-8\") as f:\n        f.write(f\"{stanje['ime']}\\n\")\n        f.write(f\"{stanje['glad']}\\n\")\n        f.write(f\"{stanje['energija']}\\n\")\n        f.write(f\"{stanje['sreca']}\\n\")\n        f.write(f\"{stanje['godine']}\\n\")\n\ndef nacrtaj_ljubimca(stanje):\n    print(\"=\" * 40)\n    if stanje[\"sreca\"] > 60:\n        print(\"      (\\\\_/)     ❤️ SREĆAN!\")\n        print(\"      ( ^.^)    \")\n        print(\"      / >🍙     \")\n    elif stanje[\"energija\"] < 30:\n        print(\"      (\\\\_/)     💤 POSPAN...\")\n        print(\"      ( -.-)    \")\n        print(\"      z Z Z     \")\n    else:\n        print(\"      (\\\\_/)     😐 NORMALAN\")\n        print(\"      ( o.o)    \")\n        print(\"      c(\")(\")   \")\n    print(f\"🐣 {stanje['ime']} | Starost: {stanje['godine']} god\")\n    print(f\"🍗 Glad:     {stanje['glad']}/100\")\n    print(f\"⚡ Energija: {stanje['energija']}/100\")\n    print(f\"💖 Sreća:    {stanje['sreca']}/100\")\n    print(\"=\" * 40)\n\ndef main():\n    stanje = ucitaj_stanje()\n    nacrtaj_ljubimca(stanje)\n    print(\"Ljubimac je uspešno učitan sa diska!\")\n\nif __name__ == \"__main__\":\n    main()\n",
    "challenges": [
      {
        "title": "Zadatak 1: Akcije hranjenja i igranja (Zagrevanje)",
        "instruction": "Dopuni funkcije nahrani(stanje) i igraj_se(stanje) tako da menjaju glad i sreću unutar granica 0 do 100, i automatski čuvaju stanje na disk.",
        "starter": "def nahrani(stanje):\n    stanje[\"glad\"] = max(0, stanje[\"glad\"] - 25)\n    stanje[\"sreca\"] = min(100, stanje[\"sreca\"] + 10)\n    print(\"😋 Njam! Ljubimac je sitiji!\")\n\ndef igraj_se(stanje):\n    if stanje[\"energija\"] < 20:\n        print(\"😴 Ljubimac je preumoran za igru! Pusti ga da spava.\")\n        return\n    stanje[\"sreca\"] = min(100, stanje[\"sreca\"] + 25)\n    stanje[\"energija\"] = max(0, stanje[\"energija\"] - 20)\n    stanje[\"glad\"] = min(100, stanje[\"glad\"] + 15)\n    print(\"🎉 Igra je bila super! Sreća je porasla.\")\n\nif __name__ == \"__main__\":\n    test_stanje = {\"ime\": \"Kodi\", \"glad\": 50, \"energija\": 80, \"sreca\": 50, \"godine\": 1}\n    nahrani(test_stanje)\n    igraj_se(test_stanje)\n    print(\"Novo stanje:\", test_stanje)\n",
        "solution": "def nahrani(stanje):\n    stanje[\"glad\"] = max(0, stanje[\"glad\"] - 25)\n    stanje[\"sreca\"] = min(100, stanje[\"sreca\"] + 10)\n    print(\"😋 Njam! Ljubimac je sitiji!\")\n\ndef igraj_se(stanje):\n    if stanje[\"energija\"] < 20:\n        print(\"😴 Ljubimac je preumoran za igru! Pusti ga da spava.\")\n        return\n    stanje[\"sreca\"] = min(100, stanje[\"sreca\"] + 25)\n    stanje[\"energija\"] = max(0, stanje[\"energija\"] - 20)\n    stanje[\"glad\"] = min(100, stanje[\"glad\"] + 15)\n    print(\"🎉 Igra je bila super! Sreća je porasla.\")\n\nif __name__ == \"__main__\":\n    test_stanje = {\"ime\": \"Kodi\", \"glad\": 50, \"energija\": 80, \"sreca\": 50, \"godine\": 1}\n    nahrani(test_stanje)\n    igraj_se(test_stanje)\n    print(\"Novo stanje:\", test_stanje)\n",
        "hint": "min(100, vrednost) i max(0, vrednost) garantuju da statistike nikada ne pređu 100 niti odu ispod nule."
      },
      {
        "title": "Zadatak 2: Spavanje i starenje (Glavni izazov)",
        "instruction": "Napiši funkciju odmori(stanje) koja vraća energiju na 100, blago povećava glad, uvećava godine za 1 i štampa čestitku za rođendan!",
        "starter": "def odmori(stanje):\n    stanje[\"energija\"] = 100\n    stanje[\"glad\"] = min(100, stanje[\"glad\"] + 20)\n    stanje[\"godine\"] += 1\n    print(\"💤 Ljubimac je spavao kao top! Energija je na 100%.\")\n    print(f\"🎂 SREĆAN ROĐENDAN! {stanje['ime']} sada ima {stanje['godine']} godina!\")\n\nif __name__ == \"__main__\":\n    test_stanje = {\"ime\": \"Kodi\", \"glad\": 30, \"energija\": 20, \"sreca\": 70, \"godine\": 1}\n    odmori(test_stanje)\n    print(test_stanje)\n",
        "solution": "def odmori(stanje):\n    stanje[\"energija\"] = 100\n    stanje[\"glad\"] = min(100, stanje[\"glad\"] + 20)\n    stanje[\"godine\"] += 1\n    print(\"💤 Ljubimac je spavao kao top! Energija je na 100%.\")\n    print(f\"🎂 SREĆAN ROĐENDAN! {stanje['ime']} sada ima {stanje['godine']} godina!\")\n\nif __name__ == \"__main__\":\n    test_stanje = {\"ime\": \"Kodi\", \"glad\": 30, \"energija\": 20, \"sreca\": 70, \"godine\": 1}\n    odmori(test_stanje)\n    print(test_stanje)\n",
        "hint": "Uvećanje broja godina stanje['godine'] += 1 simulira prolazak životnog ciklusa."
      },
      {
        "title": "Zadatak 3: Mini-Projekat: Kompletan Tamagotchi Master sa Diplomom!",
        "instruction": "Kompletiraj diplomski program: meni sa opcijama (1-Nahrani, 2-Igraj se, 3-Odmori, 4-Sačuvaj i izađi). Kada ljubimac napuni 5 godina, program automatski generiše svečanu diplomu majstora osnova programiranja!",
        "starter": "FAJL_PODATAKA = \"tamagotchi_podaci.txt\"\n\ndef ucitaj():\n    try:\n        with open(FAJL_PODATAKA, \"r\", encoding=\"utf-8\") as f:\n            lines = f.read().splitlines()\n            return {\"ime\": lines[0], \"glad\": int(lines[1]), \"energija\": int(lines[2]), \"sreca\": int(lines[3]), \"godine\": int(lines[4])}\n    except Exception:\n        return {\"ime\": \"Kodi\", \"glad\": 40, \"energija\": 80, \"sreca\": 75, \"godine\": 4}\n\ndef sacuvaj(s):\n    with open(FAJL_PODATAKA, \"w\", encoding=\"utf-8\") as f:\n        f.write(f\"{s['ime']}\\n{s['glad']}\\n{s['energija']}\\n{s['sreca']}\\n{s['godine']}\\n\")\n\ndef stampaj_diplomu(ime_programera):\n    print()\n    print(\"*\" * 55)\n    print(\"🎓     DIPLOMA MAJSTORA OSNOVA PROGRAMIRANJA     🎓\")\n    print(\"*\" * 55)\n    print(f\"  Ovim se svečano potvrđuje da je programer:\")\n    print(f\"  ⭐ {ime_programera.upper()} ⭐\")\n    print(f\"  uspešno savladao celokupnu TRIJADU OSNOVA PYTHON-A:\")\n    print(f\"  • Kurs 1: Prvi koraci, tipovi, grananja i petlje\")\n    print(f\"  • Kurs 2: Rečnici, funkcije i mini-projekti\")\n    print(f\"  • Kurs 3: Rad na PC-u, fajlovi, try-except i algoritmi\")\n    print(\"*\" * 55)\n    print(\"  🏆 ČESTITAMO! SPREMAN SI ZA PRAVI IT SVET! 🏆\")\n    print(\"*\" * 55)\n\ndef main():\n    stanje = ucitaj()\n    print(\"🎮 TAMAGOTCHI MASTER POKRENUT!\")\n    print(f\"Ljubimac: {stanje['ime']} (Godine: {stanje['godine']})\")\n    \n    # Ako ljubimac ima 5 godina, dodeljujemo diplomu:\n    stanje['godine'] += 1\n    sacuvaj(stanje)\n    stampaj_diplomu(\"Mladi Inženjer\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "solution": "FAJL_PODATAKA = \"tamagotchi_podaci.txt\"\n\ndef ucitaj():\n    try:\n        with open(FAJL_PODATAKA, \"r\", encoding=\"utf-8\") as f:\n            lines = f.read().splitlines()\n            return {\"ime\": lines[0], \"glad\": int(lines[1]), \"energija\": int(lines[2]), \"sreca\": int(lines[3]), \"godine\": int(lines[4])}\n    except Exception:\n        return {\"ime\": \"Kodi\", \"glad\": 40, \"energija\": 80, \"sreca\": 75, \"godine\": 4}\n\ndef sacuvaj(s):\n    with open(FAJL_PODATAKA, \"w\", encoding=\"utf-8\") as f:\n        f.write(f\"{s['ime']}\\n{s['glad']}\\n{s['energija']}\\n{s['sreca']}\\n{s['godine']}\\n\")\n\ndef stampaj_diplomu(ime_programera):\n    print()\n    print(\"*\" * 55)\n    print(\"🎓     DIPLOMA MAJSTORA OSNOVA PROGRAMIRANJA     🎓\")\n    print(\"*\" * 55)\n    print(f\"  Ovim se svečano potvrđuje da je programer:\")\n    print(f\"  ⭐ {ime_programera.upper()} ⭐\")\n    print(f\"  uspešno savladao celokupnu TRIJADU OSNOVA PYTHON-A:\")\n    print(f\"  • Kurs 1: Prvi koraci, tipovi, grananja i petlje\")\n    print(f\"  • Kurs 2: Rečnici, funkcije i mini-projekti\")\n    print(f\"  • Kurs 3: Rad na PC-u, fajlovi, try-except i algoritmi\")\n    print(\"*\" * 55)\n    print(\"  🏆 ČESTITAMO! SPREMAN SI ZA PRAVI IT SVET! 🏆\")\n    print(\"*\" * 55)\n\ndef main():\n    stanje = ucitaj()\n    print(\"🎮 TAMAGOTCHI MASTER POKRENUT!\")\n    print(f\"Ljubimac: {stanje['ime']} (Godine: {stanje['godine']})\")\n    \n    stanje['godine'] += 1\n    sacuvaj(stanje)\n    stampaj_diplomu(\"Mladi Inženjer\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "hint": "Trajni fajl čuva stanje i nakon što se browser ugasi ili skripta ponovo pokrene u VS Code-u."
      }
    ],
    "quiz": [
      {
        "question": "Koja je glavna inženjerska prednost podele koda u male modularne funkcije (SRP princip)?",
        "options": [
          "Kod je lakši za čitanje, testiranje, održavanje i ponovnu upotrebu",
          "Program radi tačno 10 puta brže",
          "Kod automatski dobija lepše boje u editoru",
          "Nema prednosti, bolje je sve napisati u jednoj funkciji"
        ],
        "correct": 0,
        "explanation": "Princip jedne odgovornosti (SRP) je temelj čistog koda u celoj softverskoj industriji."
      },
      {
        "question": "Šta je tvoj sledeći korak nakon savladavanja Trijade Osnova Pythona?",
        "options": [
          "Objektno-orijentisano programiranje (klase i objekti), rad sa bazama podataka, veb aplikacije ili analiza podataka",
          "Zaboraviti programiranje",
          "Ponovo učiti kako se pali računar",
          "Samo igrati video igrice"
        ],
        "correct": 0,
        "explanation": "Nakon savladanih osnova otvaraju se uzbudljive specijalizacije: Web Development, Data Science, AI ili Automatizacija!"
      }
    ],
    "proTip": {
      "title": "Zvanični inženjerski i profesorski pozdrav: Ponosni smo na tebe!",
      "content": "Prešao si put od nule: naučio si šta je računar, kako razmišlja programer, kako da se odbraniš od grešaka, kako da pišeš neuništiv kod, radiš sa fajlovima na disku i koristiš algoritme. Ti više nisi početnik — ti si pravi Python programer!"
    }
  }
];




// ============================================================================

// ============================================================================
// EKSPERTSKA NADOGRADNJA KURSA 1 I KURSA 2 (Dr Lazar Petrović & Tim)
// ============================================================================
(function applyCurriculumUpgrades() {
  // 1. KURS 1: Dodatni zadaci za lekcije 3-9 (da svaka lekcija ima 2 postupna zadatka)
  const k1ExtraChallenges = {
    "matematika-stringovi": {
      title: "Zadatak 2: Račun za piceriju",
      instruction: "Cena jedne pice je 950 dinara, a naručuješ 3 pice i 2 soka od po 220 dinara. Izračunaj ukupan račun i ispiši ga f-stringom sa porukom.",
      starter: "# Izračunaj ukupan račun:\ncena_pice = 950\ncena_soka = 220\n\n# Tvoj kod ispod:\n",
      solution: "cena_pice = 950\ncena_soka = 220\nukupno = (3 * cena_pice) + (2 * cena_soka)\nprint(f'Ukupan račun za piceriju iznosi: {ukupno} RSD')",
      hint: "Pomnoži broj komada sa cenom (3 * cena_pice + 2 * cena_soka) i rezultat ubaci u print(f'...')."
    },
    "unos-input": {
      title: "Zadatak 2: Kalkulator godina starosti",
      instruction: "Pitaj korisnika koje godine je rođen (ne zaboravi int()!), izračunaj koliko godina puni 2026. godine i ispiši rezultat.",
      starter: "# Pitaj za godinu rođenja i izračunaj starost:\n",
      solution: "godina = int(input('Koje godine si rođen/a? '))\nstarost = 2026 - godina\nprint(f'U 2026. godini puniš {starost} godina!')",
      hint: "input() uvek vraća tekst. Obmotaj ga sa int(input(...)) pre nego što ga oduzmeš od 2026."
    },
    "uslovi-if-else": {
      title: "Zadatak 2: Provera ocene na testu",
      instruction: "Unesi broj poena na testu (od 0 do 100). Ako je 90 ili više ispiši 'Odličan (5)', ako je 70 ili više 'Vrlo dobar (4)', ako je 50 ili više 'Dovoljan/Dobar', a ispod 50 'Potrebno je još vežbe'.",
      starter: "poeni = int(input('Unesi broj poena (0-100): '))\n\n# Napiši if / elif / else grananje ispod:\n",
      solution: "poeni = int(input('Unesi broj poena (0-100): '))\nif poeni >= 90:\n    print('Odličan (5) 🌟')\nelif poeni >= 70:\n    print('Vrlo dobar (4) 👍')\nelif poeni >= 50:\n    print('Položio si test! ✅')\nelse:\n    print('Potrebno je još malo vežbe. 💪')",
      hint: "Kreni od najvećeg broja (if poeni >= 90:), pa spuštaj nadole sa elif poeni >= 70:, elif poeni >= 50:, i na kraju else:."
    },
    "petlje-loops": {
      title: "Zadatak 2: Tablica množenja za izabrani broj",
      instruction: "Napravi for petlju koja ispisuje tablicu množenja za broj 7 (od 7 x 1 = 7 do 7 x 10 = 70).",
      starter: "broj = 7\n# Koristi for i in range(1, 11):\n",
      solution: "broj = 7\nfor i in range(1, 11):\n    print(f'{broj} x {i} = {broj * i}')",
      hint: "range(1, 11) daje brojeve od 1 do 10 (gornja granica 11 nije uključena)."
    },
    "liste-kolekcije": {
      title: "Zadatak 2: Spisak za kupovinu",
      instruction: "Napravi listu korpa sa 3 artikla ('hleb', 'mleko', 'jabuke'). Dodaj 'čokolada' pomoću .append(), ukloni 'hleb' pomoću .remove() i ispiši broj stavki i celu listu.",
      starter: "korpa = ['hleb', 'mleko', 'jabuke']\n# Dodaj čokoladu i ukloni hleb:\n",
      solution: "korpa = ['hleb', 'mleko', 'jabuke']\nkorpa.append('čokolada')\nkorpa.remove('hleb')\nprint(f'Broj artikala: {len(korpa)}')\nprint('Sadržaj korpe:', korpa)",
      hint: "Za dodavanje koristi korpa.append('čokolada'), za brisanje korpa.remove('hleb'), a za dužinu len(korpa)."
    },
    "funkcije-def": {
      title: "Zadatak 2: Funkcija za površinu pravougaonika",
      instruction: "Napiši funkciju povrsina(sirina, visina) koja vraća (return) proizvod širine i visine. Pozovi je za sobu dimenzija 4 i 5 metara i ispiši rezultat.",
      starter: "# Definiši funkciju povrsina(sirina, visina):\n",
      solution: "def povrsina(sirina, visina):\n    return sirina * visina\n\nrezultat = povrsina(4, 5)\nprint(f'Površina sobe je {rezultat} m2.')",
      hint: "Ne zaboravi ključnu reč return sirina * visina unutar funkcije kako bi rezultat mogao da se sačuva u promenljivoj."
    },
    "mini-projekat-igra": {
      title: "Zadatak 2: Nadogradnja igre — Brojač pokušaja",
      instruction: "Napiši kratku igru pogađanja gde je tajni broj 7, a igrač ima maksimalno 3 pokušaja pomoću for petlje. Ako pogodi, prekini petlju sa break i čestitaj!",
      starter: "tajni = 7\nfor pokusaj in range(1, 4):\n    # Unesi broj i proveri da li je jednak tajnom:\n    pass\n",
      solution: "tajni = 7\npogodio = False\nfor pokusaj in range(1, 4):\n    unos = int(input(f'Pokušaj {pokusaj}/3 - Pogodi broj (1-10): '))\n    if unos == tajni:\n        print(f'Bravo! Pogodio si u {pokusaj}. pokušaju! 🏆')\n        pogodio = True\n        break\n    else:\n        print('Nije taj broj, probaj ponovo!')\nif not pogodio:\n    print(f'Kraj igre! Tajni broj je bio {tajni}.')",
      hint: "Koristi break čim unos == tajni da petlja ne pita dalje nakon pobede."
    }
  };

  // Poveži pilot video lekciju za Kurs 1, Lekcija 1 (podržava i youtubeId čim se okači na YouTube!)
  const k1VideoMap = [
    'kurs1_lekcija1_zdravo_svete',
    'kurs1_lekcija2_promenljive',
    'kurs1_lekcija3_matematika',
    'kurs1_lekcija4_input',
    'kurs1_lekcija5_uslovi',
    'kurs1_lekcija6_petlje',
    'kurs1_lekcija7_liste',
    'kurs1_lekcija8_funkcije',
    'kurs1_lekcija9_igra'
  ];
  k1VideoMap.forEach((slug, idx) => {
    if (LESSONS_KURS_1[idx]) {
      LESSONS_KURS_1[idx].localVideoUrl = 'video_lekcije/' + slug + '.mp4';
      LESSONS_KURS_1[idx].videoPoster = 'video_lekcije/' + slug + '_thumbnail.png';
    }
  });

    LESSONS_KURS_1.forEach(lesson => {
    if (k1ExtraChallenges[lesson.id] && lesson.challenges && lesson.challenges.length < 2) {
      lesson.challenges.push(k1ExtraChallenges[lesson.id]);
    }
  });

  // 2. KURS 2: Dopuna teorije ("Najčešće zamke početnika") za lekcije 3, 7, 8 i 9
  const k2ExtraTheory = {
    "k2-matematika-modulo-vreme": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Najčešće zamke početnika sa <code>/</code>, <code>//</code> i <code>%</code>:</strong>
          <ul>
            <li>Obično deljenje <code>10 / 2</code> u Pythonu <strong>uvek vraća decimalni broj</strong> (<code>5.0</code>), dok celobrojno <code>10 // 2</code> vraća ceo broj (<code>5</code>).</li>
            <li>Operator modulo <code>%</code> NE računa procenat! <code>125 % 60</code> daje ostatak <code>5</code> (minuta), što je ključno za satove, parne brojeve (<code>x % 2 == 0</code>) i cikluse.</li>
          </ul>
        </div>
      </div>`,
    "k2-liste-menadzer": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Najčešće zamke početnika sa listama:</strong>
          <ul>
            <li>Indeksi kreću od <strong>0</strong>, a ne od 1! Ako lista ima 3 elementa, poslednji indeks je <code>2</code> (ili <code>-1</code>). Pristup na <code>lista[3]</code> izaziva <code>IndexError</code>.</li>
            <li><code>lista.remove(x)</code> briše po <em>vrednosti</em> (i puca ako vrednost ne postoji), dok <code>lista.pop(i)</code> briše po <em>poziciji</em> i vraća obrisani element.</li>
          </ul>
        </div>
      </div>`,
    "k2-funkcije-modularnost": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Najčešće zamke početnika sa funkcijama:</strong>
          <ul>
            <li>Mešanje <code>print()</code> i <code>return</code>: funkcija koja samo štampa vraća <code>None</code> i njen rezultat ne možeš dalje sabirati ni čuvati!</li>
            <li>Zaboravljanje zagrada pri pozivu: <code>pozdrav</code> samo pokazuje gde funkcija živi u memoriji, dok <code>pozdrav()</code> zaista pokreće njen kod.</li>
          </ul>
        </div>
      </div>`,
    "k2-kviz-sampion": `
      <div class="tip-box">
        <span class="tip-icon">⚠️</span>
        <div>
          <strong>Inženjerski savet za velike projekte:</strong>
          <ul>
            <li>Uvek normalizuj korisnički unos sa <code>.strip().lower()</code> (ili <code>.upper()</code>) kako razmak ili malo slovo ne bi nepravedno poništili tačan odgovor igrača.</li>
            <li>Razbij igru na male funkcije (prikaz pitanja, provera odgovora, obračun nagrade) — tako se greške pronalaze za 10 sekundi!</li>
          </ul>
        </div>
      </div>`
  };

  // 3. KURS 2: Drugo kviz pitanje za sve lekcije (ujednačeno sa Kursom 3)
  const k2SecondQuizzes = {
    "k2-print-formatiranje": {
      question: "Šta ispisuje izraz print(f'{3.14159:.2f}')?",
      options: [
        { text: "3.14", correct: true, explanation: "Tačno! Specifikator :.2f zaokružuje decimalni broj na tačno 2 decimale." },
        { text: "3.14159", correct: false, explanation: "Netačno. :.2f skraćuje prikaz na dve decimale." },
        { text: "3.1", correct: false, explanation: "Netačno. Broj 2 označava tačno dve cifre iza tačke." }
      ]
    },
    "k2-varijable-kalkulatori": {
      question: "Koji je tip promenljive rezultat nakon linije: rezultat = round(10 / 3, 2)?",
      options: [
        { text: "int (ceo broj)", correct: false, explanation: "Netačno. round(..., 2) vraća decimalni broj sa 2 decimale." },
        { text: "float (decimalni broj)", correct: true, explanation: "Bravo! Rezultat je 3.33, što je tipa float." },
        { text: "str (tekst)", correct: false, explanation: "Netačno. round() uvek vraća broj, ne tekst." }
      ]
    },
    "k2-matematika-modulo-vreme": {
      question: "Koji izraz tačno proverava da li je ceo broj n paran?",
      options: [
        { text: "n / 2 == 0", correct: false, explanation: "Netačno. 4 / 2 je 2.0, a ne 0." },
        { text: "n % 2 == 0", correct: true, explanation: "Tačno! Parni brojevi pri deljenju sa 2 imaju ostatak 0." },
        { text: "n // 2 == 0", correct: false, explanation: "Netačno. 4 // 2 je 2, pa bi ovo važilo samo za 0 i 1." }
      ]
    },
    "k2-input-personalizacija": {
      question: "Čemu služi metod .strip() kada čitamo unos korisnika?",
      options: [
        { text: "Uklanja slučajne razmake sa početka i kraja teksta.", correct: true, explanation: "Bravo! '  ana  '.strip() postaje čisto 'ana'." },
        { text: "Briše sva slova iz teksta.", correct: false, explanation: "Netačno. .strip() uklanja samo beline (razmake, nove redove) na ivicama." },
        { text: "Pretvara tekst u ceo broj.", correct: false, explanation: "Za pretvaranje u ceo broj služi int()." }
      ]
    },
    "k2-slozena-grananja": {
      question: "Kada je izraz (godine >= 18 and ima_kartu) tačan (True)?",
      options: [
        { text: "Kada je bar jedan od dva uslova tačan.", correct: false, explanation: "To važi za operator 'or', a ne za 'and'." },
        { text: "Samo kada su OBA uslova istovremeno tačna.", correct: true, explanation: "Tačno! Operator 'and' zahteva da i levi i desni uslov budu True." },
        { text: "Samo kada su oba uslova netačna.", correct: false, explanation: "Netačno. Tada je rezultat False." }
      ]
    },
    "k2-petlje-simulacije": {
      question: "Koja je razlika između naredbi break i continue unutar petlje?",
      options: [
        { text: "break odmah izlazi iz cele petlje, dok continue preskače samo trenutni korak i ide na sledeći.", correct: true, explanation: "Savršeno! To je jedna od najvažnijih razlika kod kontrole petlji." },
        { text: "Obe naredbe rade potpuno istu stvar.", correct: false, explanation: "Netačno. break prekida petlju zauvek, a continue samo prelazi na narednu iteraciju." },
        { text: "continue gasi ceo Python program.", correct: false, explanation: "Netačno. continue samo preskače ostatak koda u tekućem krugu petlje." }
      ]
    },
    "k2-liste-menadzer": {
      question: "Šta vraća zadaci[-1] za nepraznu listu zadaci?",
      options: [
        { text: "Grešku IndexError.", correct: false, explanation: "Python podržava negativno indeksiranje bez greške!" },
        { text: "Poslednji element u listi.", correct: true, explanation: "Tačno! -1 je uvek poslednji element, -2 pretposlednji itd." },
        { text: "Prvi element u listi.", correct: false, explanation: "Prvi element je uvek na indeksu 0." }
      ]
    },
    "k2-funkcije-modularnost": {
      question: "Šta će funkcija vratiti ako u njenom telu NE napišemo naredbu return?",
      options: [
        { text: "Broj 0.", correct: false, explanation: "Netačno. Python ne vraća 0 podrazumevano." },
        { text: "Specijalnu vrednost None.", correct: true, explanation: "Tačno! Svaka funkcija bez return (ili sa praznim return) automatski vraća None." },
        { text: "Prijaviće SyntaxError.", correct: false, explanation: "Netačno. Funkcije bez return su potpuno ispravne (npr. funkcije koje samo štampaju)." }
      ]
    },
    "k2-kviz-sampion": {
      question: "Zašto u projektima poput Kviza koristimo listu rečnika (npr. [{'pitanje': ..., 'odgovor': ...}])?",
      options: [
        { text: "Zato što svako pitanje drži sve svoje podatke (tekst, opcije, tačan odgovor) uredno grupisane zajedno.", correct: true, explanation: "Bravo! Lista rečnika je najčešća struktura podataka u realnim veb aplikacijama i JSON API-jima." },
        { text: "Zato što Python ne dozvoljava obične liste.", correct: false, explanation: "Netačno, dozvoljava ih, ali lista rečnika je neuporedivo preglednija i lakša za proširenje." },
        { text: "Zato što se tako kod brže kuca bez navodnika.", correct: false, explanation: "Rečnici i dalje koriste navodnike za ključeve, ali donose vrhunsku organizaciju podataka." }
      ]
    }
  };

  LESSONS_KURS_2.forEach(lesson => {
    if (k2ExtraTheory[lesson.id] && !lesson.content.includes('Najčešće zamke')) {
      lesson.content += k2ExtraTheory[lesson.id];
    }
    if (k2SecondQuizzes[lesson.id] && lesson.quiz && !Array.isArray(lesson.quiz)) {
      lesson.quiz = [lesson.quiz, k2SecondQuizzes[lesson.id]];
    }
  });
})();


// ============================================================================
// SUPER-NADOGRADNJA KURSA 1: DODATNI PRIMERI + 4 ZADATKA PO LEKCIJI (36 ZADATAKA)
// ============================================================================
(function applyKurs1SuperUpgrade() {
  const k1ExtraExamples = {
    "uvod-print": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Pisanje više vrednosti u jednom redu:</strong> Zarez u <code>print()</code> automatski stavlja razmak.</p>
        <pre><code>print("Ime:", "Marko", "| Godina:", 14)
print("Omiljeni sport:", "Košarka 🏀")</code></pre>
        <p><strong>Primer 2 — Ponavljanje znakova za ukrasne okvire:</strong></p>
        <pre><code>print("=" * 30)
print("   DOBRODOŠLI U PYTHON!   ")
print("=" * 30)</code></pre>
      </div>`,
    "promenljive-tipovi": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Promena vrednosti promenljive tokom igre:</strong></p>
        <pre><code>poeni = 0
print("Početak igre, poeni:", poeni)
poeni = poeni + 100
print("Uhvatio si novčić! Novi poeni:", poeni)</code></pre>
        <p><strong>Primer 2 — Provera tipa podatka pomoću <code>type()</code>:</strong></p>
        <pre><code>grad = "Beograd"
stanovnici = 1400000
temperatura = 22.5
je_suncano = True
print(type(grad), type(stanovnici), type(temperatura), type(je_suncano))</code></pre>
      </div>`,
    "matematika-stringovi": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Pretvaranje minuta u sate i minute:</strong></p>
        <pre><code>ukupno_minuta = 135
sati = ukupno_minuta // 60
ostatak_minuta = ukupno_minuta % 60
print(f"Film traje {sati}h i {ostatak_minuta}min.")</code></pre>
        <p><strong>Primer 2 — Igra sa tekstom (velika/mala slova i dužina):</strong></p>
        <pre><code>poruka = "python je zabavan"
print(poruka.upper())
print(poruka.title())
print("Broj slova:", len(poruka))</code></pre>
      </div>`,
    "unos-input": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Kalkulator džeparca (pretvaranje u <code>float</code>):</strong></p>
        <pre><code>dnevno = float(input("Koliko dinara štediš dnevno? "))
za_mesec = dnevno * 30
print(f"Za mesec dana uštedećeš {za_mesec} RSD!")</code></pre>
        <p><strong>Primer 2 — Čišćenje razmaka iz unosa:</strong></p>
        <pre><code>ime = input("Unesi svoje ime: ").strip().title()
print(f"Zdravo, {ime}! Lepo te je upoznati.")</code></pre>
      </div>`,
    "uslovi-if-else": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Cena bioskopske karte po godinama:</strong></p>
        <pre><code>godine = 12
if godine < 7:
    print("Ulaz je BESPLATAN! 🎟️")
elif godine < 18:
    print("Đačka karta: 350 RSD")
else:
    print("Puna karta: 600 RSD")</code></pre>
        <p><strong>Primer 2 — Provera tajne lozinke:</strong></p>
        <pre><code>lozinka = "python123"
if lozinka == "python123":
    print("Pristup odobren! 🔓")
else:
    print("Pogrešna lozinka! 🔒")</code></pre>
      </div>`,
    "petlje-loops": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Odbrojavanje rakete unazad (korak -1):</strong></p>
        <pre><code>for sekunda in range(5, 0, -1):
    print(f"Lansiranje za {sekunda}...")
print("POLETANJE! 🚀")</code></pre>
        <p><strong>Primer 2 — Štampanje samo parnih brojeva (korak 2):</strong></p>
        <pre><code>for broj in range(2, 11, 2):
    print("Paran broj:", broj)</code></pre>
      </div>`,
    "liste-kolekcije": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Prolazak kroz listu ocenama i računanje proseka:</strong></p>
        <pre><code>ocene = [5, 4, 5, 5, 4]
prosek = sum(ocene) / len(ocene)
print("Sve ocene:", ocene)
print(f"Prosek je: {prosek}")</code></pre>
        <p><strong>Primer 2 — Provera da li je stavka u listi pomoću <code>in</code>:</strong></p>
        <pre><code>ranac = ["knjiga", "olovka", "voda"]
if "voda" in ranac:
    print("Spreman si za izlet! 🎒")</code></pre>
      </div>`,
    "funkcije-def": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Funkcija za pretvaranje Celzijusa u Farenhajte:</strong></p>
        <pre><code>def u_farenhajte(celzijus):
    return celzijus * 1.8 + 32

print("25°C je", u_farenhajte(25), "°F")</code></pre>
        <p><strong>Primer 2 — Funkcija koja proverava da li je broj paran:</strong></p>
        <pre><code>def je_paran(broj):
    return broj % 2 == 0

print("Da li je 8 paran?", je_paran(8))
print("Da li je 7 paran?", je_paran(7))</code></pre>
      </div>`,
    "mini-projekat-igra": `
      <div class="extra-examples-box">
        <h4>✨ Dodatni primeri iz prakse (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Bacanje dve kockice pomoću <code>random.randint</code>:</strong></p>
        <pre><code>import random
kocka1 = random.randint(1, 6)
kocka2 = random.randint(1, 6)
print(f"Dobio si {kocka1} i {kocka2} (ukupno: {kocka1 + kocka2}) 🎲")</code></pre>
        <p><strong>Primer 2 — Slučajan izbor pobednika iz liste (<code>random.choice</code>):</strong></p>
        <pre><code>import random
igraci = ["Ana", "Marko", "Jelena", "Stefan"]
pobednik = random.choice(igraci)
print("Srećni dobitnik je:", pobednik, "🏆")</code></pre>
      </div>`
  };

  // ZADATAK 3 (🐛 Detektiv za greške) i ZADATAK 4 (🏆 Mini-izazov) za svih 9 lekcija Kursa 1
  const k1ExtraChallenges34 = {
    "uvod-print": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Popravi kod!)",
        instruction: "Ovaj program ima DVE greške sa navodnicima i zagradama pa ne može da se pokrene. Pronađi ih i popravi da ispiše obe rečenice bez greške!",
        starter: `# Pronađi i popravi 2 greške ispod:\nprint(Učim Python danas!)\nprint("Programiranje je super"\n`,
        solution: `print("Učim Python danas!")\nprint("Programiranje je super")`,
        hint: "U prvom redu nedostaju navodnici oko teksta, a u drugom redu nedostaje zatvorena zagrada )."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Vizit karta u okviru",
        instruction: "Napravi lepu vizit kartu u najmanje 3 reda: gornja linija od zvezdica ili znakova '=', srednji red sa tvojim imenom i zanimanjem, i donja linija okvira.",
        starter: `# Napravi ukrasnu vizit kartu u 3 reda:\nprint("=" * 28)\n# Dodaj srednji red sa imenom i donji okvir:\n`,
        solution: `print("=" * 28)\nprint("|  Ana - Budući Programer  |")\nprint("=" * 28)`,
        hint: "Iskoristi print('=' * 28) za gornju i donju ivicu, a između ubaci print('| Tvoje ime |')."
      }
    ],
    "promenljive-tipovi": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Neispravna imena)",
        instruction: "Kod ispod puca jer promenljiva počinje brojem i sadrži razmak! Popravi imena promenljivih (koristi donju crtu _) da ispiše ukupnu cenu 450.",
        starter: `# Popravi imena promenljivih i ispiši zbir (450):\n1_cena = 200\ndruga cena = 250\nukupno = 1_cena + druga cena\nprint("Ukupno:", ukupno)\n`,
        solution: `prva_cena = 200\ndruga_cena = 250\nukupno = prva_cena + druga_cena\nprint("Ukupno:", ukupno)`,
        hint: "Ime promenljive ne sme da počinje cifrom niti da ima razmak. Napiši prva_cena i druga_cena."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Kartica lika iz igrice",
        instruction: "Napravi 3 promenljive: ime_lika (tekst), nivo (ceo broj, npr. 5) i zdravlje (decimalni broj, npr. 98.5). Ispiši ih sve pomoću f-stringa!",
        starter: `# Kreiraj promenljive ime_lika, nivo i zdravlje:\n`,
        solution: `ime_lika = "Zmaj"\nnivo = 5\nzdravlje = 98.5\nprint(f"Lik: {ime_lika} | Nivo: {nivo} | Zdravlje: {zdravlje}%")`,
        hint: "Dodeljuj vrednosti sa = (tekst pod navodnicima, brojevi bez navodnika) i ispiši ih sa print(f'...')."
      }
    ],
    "matematika-stringovi": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Tekst + Broj)",
        instruction: "Program pokušava da sabere tekstualni broj '50' sa brojem 25 i puca sa TypeError! Pretvori tekst u ceo broj pomoću int() da dobiješ rezultat 75.",
        starter: `# Popravi grešku sa tipovima podataka:\ncena_tekst = "50"\ndodatak = 25\nukupno = cena_tekst + dodatak\nprint("Ukupno:", ukupno)\n`,
        solution: `cena_tekst = "50"\ndodatak = 25\nukupno = int(cena_tekst) + dodatak\nprint("Ukupno:", ukupno)`,
        hint: "Umesto cena_tekst + dodatak napiši int(cena_tekst) + dodatak."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Pretvarač sekundi",
        instruction: "Imaš promenljivu ukupno_sekundi = 200. Pomoću celobrojnog deljenja (//) i ostatka (%) izračunaj koliko je to minuta i sekundi, pa ispiši rezultat (3 minuta i 20 sekundi).",
        starter: `ukupno_sekundi = 200\n# Izračunaj minute (// 60) i ostatak sekundi (% 60):\n`,
        solution: `ukupno_sekundi = 200\nminuta = ukupno_sekundi // 60\nsekundi = ukupno_sekundi % 60\nprint(f"{ukupno_sekundi}s = {minuta} minuta i {sekundi} sekundi")`,
        hint: "minuta = ukupno_sekundi // 60, a sekundi = ukupno_sekundi % 60."
      }
    ],
    "unos-input": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Spojeni brojevi!)",
        instruction: "Ovaj program treba da sabere dva uneta broja, ali umesto 5 + 3 = 8 on ispisuje '53'! Popravi kod tako da ih zaista sabira kao brojeve.",
        starter: `# Zašto ovaj kod ispisuje 53 umesto 8? Popravi ga!\na = input("Prvi broj: ")\nb = input("Drugi broj: ")\nprint("Zbir je:", a + b)\n`,
        solution: `a = int(input("Prvi broj: "))\nb = int(input("Drugi broj: "))\nprint("Zbir je:", a + b)`,
        hint: "Obmotaj oba input() poziva sa int(input(...)) ili float(input(...))."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Generator korisničkog imena",
        instruction: "Pitaj korisnika za ime i omiljeni broj, spoji ih malim slovima sa donjom crtom (npr. ana_7) i ispiši predlog za korisničko ime!",
        starter: `# Pitaj za ime i omiljeni broj pa napravi username:\n`,
        solution: `ime = input("Unesi ime: ").strip().lower()\nbroj = input("Omiljeni broj: ").strip()\nprint(f"Tvoje korisničko ime: @{ime}_{broj}")`,
        hint: "Koristi .lower() da ime bude malim slovima i f-string f'@{ime}_{broj}'."
      }
    ],
    "uslovi-if-else": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Dvotačka i znak poređenja)",
        instruction: "Kod ispod ima 2 klasične greške: fali dvotačka (:) i koristi se pogrešan znak = umesto == za poređenje! Popravi ga da ispiše 'Punoletan si!'.",
        starter: `# Popravi greške u if uslovu:\ngodine = 18\nif godine = 18\n    print("Punoletan si!")\nelse\n    print("Maloletan si!")\n`,
        solution: `godine = 18\nif godine >= 18:\n    print("Punoletan si!")\nelse:\n    print("Maloletan si!")`,
        hint: "Za poređenje koristi == ili >=, i ne zaboravi dvotačku : na kraju if i else linije!"
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Pametni kalkulator popusta",
        instruction: "Za promenljivu racun = 4500: ako je račun veći ili jednak 3000, kupac dobija 10% popusta (plaća racun * 0.9), inače plaća punu cenu. Ispiši konačan iznos za plaćanje (4050.0)!",
        starter: `racun = 4500\n# Ako je racun >= 3000, primeni 10% popusta:\n`,
        solution: `racun = 4500\nif racun >= 3000:\n    konacno = racun * 0.9\n    print(f"Ostvario si 10% popusta! Za plaćanje: {konacno} RSD")\nelse:\n    print(f"Za plaćanje: {racun} RSD")`,
        hint: "10% popusta znači da plaćaš 90% cene, odnosno racun * 0.9."
      }
    ],
    "petlje-loops": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Fali broj 10!)",
        instruction: "Ova petlja treba da ispiše brojeve od 1 do 10, ali staje na broju 9! Popravi range() tako da ispiše sve brojeve zaključno sa 10.",
        starter: `# Ova petlja staje na 9 umesto na 10 — popravi range():\nfor i in range(1, 10):\n    print(i)\n`,
        solution: `for i in range(1, 11):\n    print(i)`,
        hint: "U Pythonu range(1, 10) ide do 9! Za brojeve do 10 napiši range(1, 11)."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Zbir samo parnih brojeva",
        instruction: "Pomoću for petlje i if uslova (broj % 2 == 0) izračunaj zbir svih PARNIH brojeva od 1 do 20 i ispiši rezultat (treba da bude 110)!",
        starter: `zbir_parnih = 0\n# Prođi kroz brojeve od 1 do 20 i saberi samo parne:\n`,
        solution: `zbir_parnih = 0\nfor broj in range(1, 21):\n    if broj % 2 == 0:\n        zbir_parnih += broj\nprint("Zbir parnih brojeva od 1 do 20 je:", zbir_parnih)`,
        hint: "range(1, 21) prolazi do 20, a if broj % 2 == 0: proverava da li je broj paran."
      }
    ],
    "liste-kolekcije": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (IndexError!)",
        instruction: "Program pokušava da ispiše poslednji element liste voće pomoću indeksa [3], ali lista ima 3 elementa (indeksi 0, 1, 2) pa puca! Popravi indeks da ispiše 'banana'.",
        starter: `# Popravi IndexError da ispiše poslednje voće ('banana'):\nvoce = ["jabuka", "kruška", "banana"]\nprint("Poslednje voće je:", voce[3])\n`,
        solution: `voce = ["jabuka", "kruška", "banana"]\nprint("Poslednje voće je:", voce[-1])`,
        hint: "Poslednji element liste od 3 stavke je na indeksu 2 ili najlakše voce[-1]."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Najbolji rezultat na turniru",
        instruction: "Data je lista poeni = [120, 450, 310, 890, 240]. Bez ručnog prepisivanja, ispiši najveći rezultat (max), najmanji (min) i ukupan zbir svih poena (sum)!",
        starter: `poeni = [120, 450, 310, 890, 240]\n# Ispiši max, min i sum poena:\n`,
        solution: `poeni = [120, 450, 310, 890, 240]\nprint("Rekord (max):", max(poeni))\nprint("Najmanje (min):", min(poeni))\nprint("Ukupno (sum):", sum(poeni))`,
        hint: "Python ima ugrađene funkcije max(poeni), min(poeni) i sum(poeni)."
      }
    ],
    "funkcije-def": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Funkcija vraća None!)",
        instruction: "Funkcija dupliraj(x) samo štampa rezultat umesto da ga vrati sa return, pa promenljiva r dobija None! Popravi funkciju da vraća 2 * x.",
        starter: `# Popravi funkciju da VRAĆA dupliranu vrednost (ne samo print!):\ndef dupliraj(x):\n    print(x * 2)\n\nr = dupliraj(15)\nprint("Duplirani broj je:", r)\n`,
        solution: `def dupliraj(x):\n    return x * 2\n\nr = dupliraj(15)\nprint("Duplirani broj je:", r)`,
        hint: "Zameni print(x * 2) unutar funkcije sa return x * 2."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Funkcija za veći broj",
        instruction: "Napiši funkciju veci_broj(a, b) koja pomoću if-else vraća (return) veći od dva prosleđena broja. Pozovi je za (12, 25) i ispiši rezultat!",
        starter: `# Definiši funkciju veci_broj(a, b):\n`,
        solution: `def veci_broj(a, b):\n    if a >= b:\n        return a\n    else:\n        return b\n\nprint("Veći broj je:", veci_broj(12, 25))`,
        hint: "Ako je a >= b vrati a (return a), u suprotnom vrati b (return b)."
      }
    ],
    "mini-projekat-igra": [
      {
        title: "Zadatak 3: 🐛 Detektiv za greške (Zaboravljeni import i break)",
        instruction: "Mini-igra puca jer nedostaje 'import random' na vrhu! Dodaj import na početak i pokreni simulaciju bacanja kockice dok ne padne šestica.",
        starter: `# Popravi grešku da igra radi bez NameError:\nbacanja = 0\nwhile True:\n    kocka = random.randint(1, 6)\n    bacanja += 1\n    print(f"Bacanje {bacanja}: pala je {kocka}")\n    if kocka == 6:\n        print("Šestica! Pobeda! 🎲")\n        break\n`,
        solution: `import random\nbacanja = 0\nwhile True:\n    kocka = random.randint(1, 6)\n    bacanja += 1\n    print(f"Bacanje {bacanja}: pala je {kocka}")\n    if kocka == 6:\n        print("Šestica! Pobeda! 🎲")\n        break`,
        hint: "Dodaj liniju import random na sam početak programa (linija 1)."
      },
      {
        title: "Zadatak 4: 🏆 Mini-izazov: Kamen, Papir, Makaze (1 runda)",
        instruction: "Napravi jednu rundu igre 'Kamen, Papir, Makaze' protiv računara! Računar bira pomoću random.choice(['kamen', 'papir', 'makaze']), ti unosiš svoj izbor, a if-elif-else određuje pobednika!",
        starter: `import random\nopcije = ["kamen", "papir", "makaze"]\nracunar = random.choice(opcije)\nigrac = input("Izaberi (kamen/papir/makaze): ").strip().lower()\nprint("Računar je izabrao:", racunar)\n# Dodaj if / elif / else da odrediš pobednika:\n`,
        solution: `import random\nopcije = ["kamen", "papir", "makaze"]\nracunar = random.choice(opcije)\nigrac = input("Izaberi (kamen/papir/makaze): ").strip().lower()\nprint("Računar je izabrao:", racunar)\nif igrac == racunar:\n    print("Nerešeno! 🤝")\nelif (igrac == "kamen" and racunar == "makaze") or (igrac == "papir" and racunar == "kamen") or (igrac == "makaze" and racunar == "papir"):\n    print("Pobedio si! 🏆")\nelse:\n    print("Računar je pobedio! 🤖")`,
        hint: "Prvo proveri if igrac == racunar (nerešeno), zatim pobedničke kombinacije za igrača, i na kraju else."
      }
    ]
  };

  LESSONS_KURS_1.forEach(lesson => {
    if (k1ExtraExamples[lesson.id] && !lesson.content.includes('extra-examples-box')) {
      lesson.content += k1ExtraExamples[lesson.id];
    }
    if (k1ExtraChallenges34[lesson.id] && lesson.challenges && lesson.challenges.length < 4) {
      lesson.challenges.push(...k1ExtraChallenges34[lesson.id]);
    }
  });
})();


// ============================================================================
// PROŠIRENJE KVIZOVA KURSA 1 NA PO 4 RAZNOVRSNA PITANJA (36 PITANJA UKUPNO)
// ============================================================================
(function applyKurs1ExpandedQuizzes() {
  const k1ExtraQuizzes = {
    "uvod-print": [
      {
        question: "Šta će ispisati kod: print('=' * 4)?",
        options: [
          { text: "==== (četiri znaka jednakosti)", correct: true, explanation: "Tačno! Množenje stringa brojem ponavlja taj tekst zadati broj puta." },
          { text: "= * 4", correct: false, explanation: "Netačno. Pošto je * van navodnika, Python izvršava ponavljanje teksta." },
          { text: "Grešku jer se tekst ne može množiti", correct: false, explanation: "U Pythonu se tekst MOŽE množiti celim brojem!" }
        ]
      },
      {
        question: "Čemu služi znak tarabe (#) na početku linije u Pythonu?",
        options: [
          { text: "Briše ceo program", correct: false, explanation: "Netačno. Znak # ništa ne briše." },
          { text: "Obeležava komentar — belešku za ljude koju računar preskače", correct: true, explanation: "Bravo! Komentari pomažu tebi i drugima da razumete šta kod radi." },
          { text: "Povećava font u terminalu", correct: false, explanation: "Netačno. # služi isključivo za komentare u kodu." }
        ]
      },
      {
        question: "Koji od sledećih redova je 100% ispravan u Pythonu?",
        options: [
          { text: 'Print("Zdravo")', correct: false, explanation: "Pazi! Python razlikuje velika i mala slova — mora malo 'print'." },
          { text: 'print("Zdravo")', correct: true, explanation: "Savršeno! Malo slovo p, otvorena i zatvorena zagrada i navodnici oko teksta." },
          { text: 'print "Zdravo"', correct: false, explanation: "U Pythonu 3 zagrade oko argumenta u print() su obavezne!" }
        ]
      }
    ],
    "promenljive-tipovi": [
      {
        question: "Šta će ispisati sledeći kod?\npoeni = 10\npoeni = poeni + 5\nprint(poeni)",
        options: [
          { text: "10", correct: false, explanation: "Netačno. Vrednost u kutiji 'poeni' je ažurirana sa +5." },
          { text: "15", correct: true, explanation: "Bravo! Stara vrednost (10) uvećana je za 5 i sačuvana nazad u 'poeni'." },
          { text: "poeni + 5", correct: false, explanation: "Netačno, jer nema navodnika — Python sabira brojeve." }
        ]
      },
      {
        question: "Koje od sledećih imena promenljive NIJE dozvoljeno u Pythonu?",
        options: [
          { text: "moja_cena", correct: false, explanation: "Ovo ime je potpuno ispravno (donja crta je dozvoljena)." },
          { text: "1_mesto", correct: true, explanation: "Tačno! Ime promenljive NIKADA ne sme da počinje cifrom." },
          { text: "igrac2", correct: false, explanation: "Cifra na kraju ili u sredini imena je potpuno dozvoljena." }
        ]
      },
      {
        question: "Kog tipa podatka je vrednost: visina = 1.82?",
        options: [
          { text: "int (ceo broj)", correct: false, explanation: "int je samo za cele brojeve bez decimale." },
          { text: "float (decimalni broj)", correct: true, explanation: "Tačno! Brojevi sa tačkom su uvek tipa float." },
          { text: "bool (logička vrednost)", correct: false, explanation: "bool može biti samo True ili False." }
        ]
      }
    ],
    "matematika-stringovi": [
      {
        question: "Šta daje izraz: 15 // 4 (celobrojno deljenje)?",
        options: [
          { text: "3.75", correct: false, explanation: "To bi dalo obično deljenje 15 / 4." },
          { text: "3", correct: true, explanation: "Tačno! 4 staje u 15 tačno 3 cela puta (ostatak 3 se odbacuje)." },
          { text: "4", correct: false, explanation: "Netačno. // ne zaokružuje nagore već uzima samo ceo deo." }
        ]
      },
      {
        question: "Šta će se desiti ako napišeš: print('10' + 5)?",
        options: [
          { text: "Ispisaće 15", correct: false, explanation: "Neće, jer je '10' pod navodnicima tekst (str), a 5 je broj (int)." },
          { text: "Prijaviće TypeError jer ne mogu da se sabiraju tekst i broj", correct: true, explanation: "Bravo! Prvo moraš pretvoriti tekst u broj pomoću int('10') + 5." },
          { text: "Ispisaće 105", correct: false, explanation: "105 bi ispisalo samo ako su OBA tekst: '10' + '5'." }
        ]
      },
      {
        question: "Šta vraća funkcija len('Python')?",
        options: [
          { text: "5", correct: false, explanation: "Prebroj slova: P-y-t-h-o-n." },
          { text: "6", correct: true, explanation: "Tačno! Reč 'Python' ima tačno 6 karaktera." },
          { text: "7", correct: false, explanation: "Netačno, ima 6 slova." }
        ]
      }
    ],
    "unos-input": [
      {
        question: "Ako korisnik ukuca 7 i 3, šta će ispisati kod:\na = input()\nb = input()\nprint(a + b)",
        options: [
          { text: "10", correct: false, explanation: "Pažnja! Nema int(), pa su a i b tekstovi ('7' i '3')." },
          { text: "73", correct: true, explanation: "Bravo! input() uvek vraća tekst, pa '7' + '3' spaja stringove u '73'." },
          { text: "21", correct: false, explanation: "Operator + ne množi." }
        ]
      },
      {
        question: "Kako pravilno učitavamo decimalnu cenu (npr. 149.99) od korisnika?",
        options: [
          { text: 'cena = float(input("Cena: "))', correct: true, explanation: "Tačno! float() pretvara tekstualni unos u decimalni broj." },
          { text: 'cena = int(input("Cena: "))', correct: false, explanation: "int('149.99') bi izazvao ValueError zbog decimalne tačke!" },
          { text: 'cena = str(input("Cena: "))', correct: false, explanation: "str() ostavlja unos kao tekst sa kojim ne možeš da računaš." }
        ]
      },
      {
        question: "Šta radi .strip() u izrazu ime = input('Ime: ').strip()?",
        options: [
          { text: "Briše slučajne razmake sa početka i kraja unosa", correct: true, explanation: "Tačno! Ako korisnik slučajno ukuca '  Ana  ', dobićemo čisto 'Ana'." },
          { text: "Pretvara sva slova u velika", correct: false, explanation: "Za velika slova služi .upper()." },
          { text: "Briše celu promenljivu", correct: false, explanation: "Netačno, .strip() samo čisti praznine na ivicama." }
        ]
      }
    ],
    "uslovi-if-else": [
      {
        question: "Šta će ispisati sledeći kod?\nx = 10\nif x > 15:\n    print('A')\nelif x > 5:\n    print('B')\nelse:\n    print('C')",
        options: [
          { text: "A", correct: false, explanation: "10 nije veće od 15, pa se prvi blok preskače." },
          { text: "B", correct: true, explanation: "Tačno! 10 > 5 je tačno, pa se izvršava elif grana i ostatak se preskače." },
          { text: "B i C", correct: false, explanation: "U if-elif-else lancu izvršava se SAMO JEDNA grana." }
        ]
      },
      {
        question: "Koja greška se krije u liniji: if bodovi = 100:",
        options: [
          { text: "Fali znak navoda oko 100", correct: false, explanation: "100 je broj i ne ide pod navodnike." },
          { text: "Za poređenje mora stajati == (dva znaka jednakosti), a ne =", correct: true, explanation: "Bravo! Jedno = dodeljuje vrednost, dok == proverava jednakost." },
          { text: "Nema greške", correct: false, explanation: "Python će odmah prijaviti SyntaxError!" }
        ]
      },
      {
        question: "Zašto su linije ispod if uslova uvučene za 4 razmaka (Tab)?",
        options: [
          { text: "Samo da bi kod lepše izgledao", correct: false, explanation: "U Pythonu uvlačenje nije samo estetika — ono je obavezno!" },
          { text: "Da bi Python znao koje naredbe pripadaju tom if bloku", correct: true, explanation: "Tačno! Uvlačenje (indentacija) određuje granice bloka koda." },
          { text: "Da bi program radio brže", correct: false, explanation: "Netačno, uvlačenje definiše strukturu koda." }
        ]
      }
    ],
    "petlje-loops": [
      {
        question: "Koje brojeve generiše range(1, 5)?",
        options: [
          { text: "1, 2, 3, 4, 5", correct: false, explanation: "Pazi: gornja granica (5) nikada nije uključena u range()!" },
          { text: "1, 2, 3, 4", correct: true, explanation: "Bravo! range(1, 5) kreće od 1 i staje tačno pre 5." },
          { text: "0, 1, 2, 3, 4", correct: false, explanation: "Pošto je početni broj 1, kreće od 1 (ne od 0)." }
        ]
      },
      {
        question: "Šta radi naredba break unutar while ili for petlje?",
        options: [
          { text: "Odmah prekida petlju i izlazi iz nje", correct: true, explanation: "Tačno! Koristi se npr. kada igrač pogodi tajni broj." },
          { text: "Pauzira program na 5 sekundi", correct: false, explanation: "Za pauzu služi time.sleep()." },
          { text: "Vraća petlju na sam početak", correct: false, explanation: "To radi continue (prelazi na sledeći krug), dok break potpuno izlazi." }
        ]
      },
      {
        question: "Kada je bolje koristiti while petlju umesto for petlje?",
        options: [
          { text: "Kada unapred ne znamo koliko će puta petlja morati da se ponovi (npr. dok igrač ne pogodi broj)", correct: true, explanation: "Savršeno! while traje dok god važi neki uslov." },
          { text: "Kada želimo da ispišemo brojeve od 1 do 10", correct: false, explanation: "Za poznat broj ponavljanja for i in range(...) je mnogo čistiji." },
          { text: "Nikada, while ne radi u Pythonu", correct: false, explanation: "while je jedna od najvažnijih petlji u Pythonu." }
        ]
      }
    ],
    "liste-kolekcije": [
      {
        question: "Data je lista boje = ['crvena', 'zelena', 'plava']. Šta ispisuje print(boje[1])?",
        options: [
          { text: "crvena", correct: false, explanation: "'crvena' je na indeksu 0!" },
          { text: "zelena", correct: true, explanation: "Bravo! Indeksiranje kreće od 0, pa je indeks 1 drugi element liste." },
          { text: "plava", correct: false, explanation: "'plava' je na indeksu 2 (ili -1)." }
        ]
      },
      {
        question: "Šta će se desiti ako za listu od 3 elementa napišeš print(lista[3])?",
        options: [
          { text: "Ispisaće poslednji element", correct: false, explanation: "Poslednji element je na indeksu 2!" },
          { text: "Prijaviće IndexError jer indeks 3 ne postoji", correct: true, explanation: "Tačno! Za 3 elementa važeći indeksi su 0, 1 i 2." },
          { text: "Dodaće novi element u listu", correct: false, explanation: "Za dodavanje služi .append()." }
        ]
      },
      {
        question: "Kako proveravamo da li se reč 'hleb' nalazi u listi korpa?",
        options: [
          { text: "if 'hleb' in korpa:", correct: true, explanation: "Savršeno! Operator 'in' proverava pripadnost elementa listi." },
          { text: "if korpa == 'hleb':", correct: false, explanation: "To poredi celu listu sa jednim tekstom (uvek False)." },
          { text: "if korpa.has('hleb'):", correct: false, explanation: "Liste u Pythonu nemaju metod .has()." }
        ]
      }
    ],
    "funkcije-def": [
      {
        question: "Šta će ispisati sledeći kod?\ndef saberi(a, b):\n    return a + b\nprint(saberi(3, 4) * 2)",
        options: [
          { text: "7", correct: false, explanation: "saberi(3, 4) vraća 7, a onda ga množimo sa 2!" },
          { text: "14", correct: true, explanation: "Tačno! 3 + 4 = 7, pa 7 * 2 = 14." },
          { text: "None", correct: false, explanation: "Funkcija ima return, pa uredno vraća broj 7." }
        ]
      },
      {
        question: "Šta vraća funkcija ako u njoj napišeš samo print(x * 2) bez return?",
        options: [
          { text: "Vraća duplirani broj", correct: false, explanation: "print() samo ispisuje na ekran, ali NE vraća vrednost pozivaocu!" },
          { text: "Vraća specijalnu vrednost None", correct: true, explanation: "Bravo! Bez naredbe return svaka funkcija vraća None." },
          { text: "Vraća 0", correct: false, explanation: "Netačno, Python vraća None." }
        ]
      },
      {
        question: "Koji je glavni razlog zašto programeri prave funkcije?",
        options: [
          { text: "Da kod napišu jednom i koriste ga ponovo na više mesta bez kopiranja", correct: true, explanation: "Tačno! Princip DRY (Don't Repeat Yourself) čini programe čistim i lakim za održavanje." },
          { text: "Zato što Python zabranjuje programe bez funkcija", correct: false, explanation: "Python dozvoljava kod bez funkcija, ali funkcije donose red i čitljivost." },
          { text: "Samo za igre", correct: false, explanation: "Funkcije se koriste u apsolutno svakom softveru." }
        ]
      }
    ],
    "mini-projekat-igra": [
      {
        question: "Šta radi random.randint(1, 6)?",
        options: [
          { text: "Bira slučajan ceo broj od 1 do 6 (uključujući i 1 i 6)", correct: true, explanation: "Tačno! Za razliku od range(), randint() uključuje OBA kraja opsega." },
          { text: "Bira samo brojeve od 1 do 5", correct: false, explanation: "randint(1, 6) uključuje i broj 6 — idealno za kockicu!" },
          { text: "Uvek vraća broj 6", correct: false, explanation: "Svaki put bira novi nasumičan broj." }
        ]
      },
      {
        question: "Zašto dobijamo NameError ako pozovemo random.randint(1, 10) bez linije 'import random'?",
        options: [
          { text: "Zato što je random zaseban modul koji moramo prvo da uvezemo", correct: true, explanation: "Bravo! Python čuva dodatne alate u modulima koje uvozimo po potrebi sa import." },
          { text: "Zato što randint ne postoji u Pythonu", correct: false, explanation: "Postoji, ali živi unutar modula random." },
          { text: "Zato što je 10 prevelik broj", correct: false, explanation: "Netačno, opseg može biti i do miliona." }
        ]
      },
      {
        question: "Koja funkcija iz modula random bira jedan nasumičan element iz liste ['kamen', 'papir', 'makaze']?",
        options: [
          { text: "random.choice(lista)", correct: true, explanation: "Tačno! random.choice() je savršen za biranje nasumične stavke iz bilo koje liste." },
          { text: "random.randint(lista)", correct: false, explanation: "randint radi samo sa dva cela broja, ne sa listom." },
          { text: "random.print(lista)", correct: false, explanation: "Takva funkcija ne postoji." }
        ]
      }
    ]
  };

  LESSONS_KURS_1.forEach(lesson => {
    const extras = k1ExtraQuizzes[lesson.id];
    if (extras && lesson.quiz) {
      const baseList = Array.isArray(lesson.quiz) ? lesson.quiz : [lesson.quiz];
      if (baseList.length < 4) {
        lesson.quiz = [...baseList, ...extras];
      }
    }
  });
})();


// ============================================================================
// SUPER-NADOGRADNJA KURSA 2 I KURSA 3 (108 ZADATAKA + 108 KVIZ PITANJA UKUPNO!)
// ============================================================================
(function applyKurs2And3SuperUpgrade() {
  // ---------------- KURS 2: INTERAKTIVNI PRIMERI (<pre>) ----------------
  const k2Examples = {
    "k2-print-formatiranje": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Savršeno poravnata tabela računa:</strong></p>
        <pre><code>print(f"{'Artikal':<14} | {'Cena':>8}")
print("-" * 25)
print(f"{'Kafa':<14} | {220.5:>8.2f}")
print(f"{'Sendvič':<14} | {450.0:>8.2f}")</code></pre>
        <p><strong>Primer 2 — Centriranje naslova u okviru:</strong></p>
        <pre><code>naslov = "PYTHON PRAKTIČAR"
print("*" * 30)
print(f"*{naslov:^28}*")
print("*" * 30)</code></pre>
      </div>`,
    "k2-varijable-kalkulatori": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Kalkulator popusta i PDV-a:</strong></p>
        <pre><code>osnovica = 12000
pdv = osnovica * 0.20
ukupno = osnovica + pdv
print(f"Osnovica: {osnovica:.2f} | PDV (20%): {pdv:.2f} | Ukupno: {ukupno:.2f} RSD")</code></pre>
        <p><strong>Primer 2 — Pretvaranje kilometara u milje:</strong></p>
        <pre><code>km = 42.195
milje = round(km * 0.621371, 2)
print(f"Maraton od {km} km iznosi tačno {milje} milja.")</code></pre>
      </div>`,
    "k2-matematika-modulo-vreme": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Razbijanje sekundi na sate, minute i sekunde:</strong></p>
        <pre><code>ukupno = 3725
sati = ukupno // 3600
minuti = (ukupno % 3600) // 60
sekunde = ukupno % 60
print(f"{ukupno}s = {sati:02d}:{minuti:02d}:{sekunde:02d}")</code></pre>
        <p><strong>Primer 2 — Raspodela karata u kutije po 12 komada:</strong></p>
        <pre><code>karata = 50
punih_kutija = karata // 12
visak = karata % 12
print(f"Punih kutija: {punih_kutija}, ostaje višak: {visak}")</code></pre>
      </div>`,
    "k2-input-personalizacija": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Normalizacija korisničkog unosa:</strong></p>
        <pre><code>odgovor = input("Da li voliš Python? (da/ne): ").strip().lower()
if odgovor == "da":
    print("Odličan izbor! 🚀")
else:
    print("Daj mu još malo vremena, zavolećeš ga!")</code></pre>
        <p><strong>Primer 2 — Provera da li je unos prazan:</strong></p>
        <pre><code>nadimak = input("Unesi nadimak: ").strip()
if not nadimak:
    nadimak = "Gost_007"
print(f"Dobrodošao, {nadimak}!")</code></pre>
      </div>`,
    "k2-slozena-grananja": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Kombinovanje <code>and</code> i <code>or</code> za ulaz u klub:</strong></p>
        <pre><code>godine = 17
ima_vip = True
if godine >= 18 or ima_vip:
    print("Dobrodošao na događaj! 🎟️")
else:
    print("Ulaz nije dozvoljen.")</code></pre>
        <p><strong>Primer 2 — Provera opsega (Python lančano poređenje!):</strong></p>
        <pre><code>temp = 22
if 18 <= temp <= 25:
    print("Idealna sobna temperatura! 🌡️")</code></pre>
      </div>`,
    "k2-petlje-simulacije": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Preskakanje neparnih brojeva sa <code>continue</code>:</strong></p>
        <pre><code>for i in range(1, 11):
    if i % 2 != 0:
        continue
    print("Paran:", i)</code></pre>
        <p><strong>Primer 2 — Simulacija štednje sa kamatom:</strong></p>
        <pre><code>stednja = 1000
for godina in range(1, 6):
    stednja = round(stednja * 1.05, 2)
    print(f"Godina {godina}: {stednja} EUR")</code></pre>
      </div>`,
    "k2-liste-menadzer": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Numerisani prikaz liste sa <code>enumerate()</code>:</strong></p>
        <pre><code>zadaci = ["Uči Python", "Uradi domaći", "Odmori"]
for broj, zadatak in enumerate(zadaci, start=1):
    print(f"{broj}. {zadatak}")</code></pre>
        <p><strong>Primer 2 — Brzo sortiranje i preokretanje liste:</strong></p>
        <pre><code>rezultati = [45, 92, 78, 100, 63]
rezultati.sort(reverse=True)
print("Top 3 rezultata:", rezultati[:3])</code></pre>
      </div>`,
    "k2-funkcije-modularnost": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Funkcija sa podrazumevanim parametrom:</strong></p>
        <pre><code>def izracunaj_pdv(cena, stopa=0.20):
    return round(cena * (1 + stopa), 2)

print("Standard (20%):", izracunaj_pdv(1000))
print("Knjige (10%):", izracunaj_pdv(1000, 0.10))</code></pre>
        <p><strong>Primer 2 — Funkcija koja poziva drugu funkciju:</strong></p>
        <pre><code>def kvadrat(x):
    return x * x

def zbir_kvadrata(a, b):
    return kvadrat(a) + kvadrat(b)

print("3² + 4² =", zbir_kvadrata(3, 4))</code></pre>
      </div>`,
    "k2-kviz-sampion": `
      <div class="extra-examples-box">
        <h4>✨ Interaktivni primeri (klikni „▶ Isprobaj u editoru”):</h4>
        <p><strong>Primer 1 — Lista rečnika (struktura modernih aplikacija):</strong></p>
        <pre><code>pitanja = [
    {"tekst": "Glavni grad Srbije?", "tacno": "beograd"},
    {"tekst": "Koliko je 7 * 8?", "tacno": "56"}
]
for p in pitanja:
    print("Pitanje:", p["tekst"], "-> Odgovor:", p["tacno"])</code></pre>
        <p><strong>Primer 2 — Bezbedno čitanje iz rečnika sa <code>.get()</code>:</strong></p>
        <pre><code>igrac = {"ime": "Luka", "poeni": 150}
print("Nivo:", igrac.get("nivo", "Početnik"))</code></pre>
      </div>`
  };

  // ---------------- KURS 2: ZADATAK 4 (🐛 LOGIČKI DETEKTIV) ----------------
  const k2Challenges4 = {
    "k2-print-formatiranje": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Pogrešan broj decimala)",
      instruction: "Kod ispod radi bez greške, ali ispisuje cenu sa 4 decimale umesto sa 2! Popravi format specifikator da ispiše tačno '199.99 RSD'.",
      starter: `cena = 199.9876\n# Popravi format da zaokruži na tačno 2 decimale:\nprint(f"Cena: {cena:.4f} RSD")\n`,
      solution: `cena = 199.9876\nprint(f"Cena: {cena:.2f} RSD")`,
      hint: "Zameni :.4f sa :.2f unutar f-stringa."
    },
    "k2-varijable-kalkulatori": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Redosled operacija!)",
      instruction: "Program računa prosek tri broja (4, 5, 3), ali umesto 4.0 dobija 10.0 jer nedostaju zagrade! Popravi formulu za prosek.",
      starter: `a, b, c = 4, 5, 3\n# Zašto je rezultat 10.0 umesto 4.0? Popravi zagrade!\nprosek = a + b + c / 3\nprint("Prosek:", prosek)\n`,
      solution: `a, b, c = 4, 5, 3\nprosek = (a + b + c) / 3\nprint("Prosek:", prosek)`,
      hint: "Deljenje ima prioritet nad sabiranjem! Stavi (a + b + c) u zagrade."
    },
    "k2-matematika-modulo-vreme": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Zamenjeni // i %)",
      instruction: "Pretvarač 145 minuta treba da ispiše '2h 25min', ali je neko zamenio // i % pa ispisuje '25h 2min'! Ispravi logički bag.",
      starter: `ukupno_min = 145\nsati = ukupno_min % 60\nminuti = ukupno_min // 60\nprint(f"{sati}h {minuti}min")\n`,
      solution: `ukupno_min = 145\nsati = ukupno_min // 60\nminuti = ukupno_min % 60\nprint(f"{sati}h {minuti}min")`,
      hint: "sati = ukupno_min // 60 (celobrojno deljenje), a minuti = ukupno_min % 60 (ostatak)."
    },
    "k2-input-personalizacija": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Velika i mala slova)",
      instruction: "Korisnik je uneo '  DA  ' sa razmacima i velikim slovima, ali if uslov ga odbija! Dodaj .strip().lower() na promenljivu unos da ispiše 'Potvrđeno!'.",
      starter: `unos = "  DA  "\n# Popravi proveru pomoću .strip().lower():\nif unos == "da":\n    print("Potvrđeno!")\nelse:\n    print("Odbijeno!")\n`,
      solution: `unos = "  DA  "\nif unos.strip().lower() == "da":\n    print("Potvrđeno!")\nelse:\n    print("Odbijeno!")`,
      hint: "Pozovi unos.strip().lower() == 'da' kako bi razmaci i velika slova nestali pre poređenja."
    },
    "k2-slozena-grananja": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Pogrešan redosled elif!)",
      instruction: "Učenik ima 95 poena, ali ovaj program mu greškom daje 'Dobar' umesto 'Odličan' jer prvo proverava >= 50! Popravi redosled uslova.",
      starter: `poeni = 95\n# Popravi redosled provere (kreni od najvećeg praga!):\nif poeni >= 50:\n    print("Dobar")\nelif poeni >= 90:\n    print("Odličan")\nelse:\n    print("Nedovoljan")\n`,
      solution: `poeni = 95\nif poeni >= 90:\n    print("Odličan")\nelif poeni >= 50:\n    print("Dobar")\nelse:\n    print("Nedovoljan")`,
      hint: "Uvek proveri najstroži uslov prvo (if poeni >= 90:), pa tek onda elif poeni >= 50:."
    },
    "k2-petlje-simulacije": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Zaboravljen break!)",
      instruction: "Petlja traži broj 7 u listi i treba da stane čim ga pronađe (ne sme da nastavi na 9 i 11). Dodaj break na pravo mesto!",
      starter: `brojevi = [3, 5, 7, 9, 11]\nfor b in brojevi:\n    print("Proveravam:", b)\n    if b == 7:\n        print("Pronađen 7!")\n        # Ovde fali jedna ključna reč!\n`,
      solution: `brojevi = [3, 5, 7, 9, 11]\nfor b in brojevi:\n    print("Proveravam:", b)\n    if b == 7:\n        print("Pronađen 7!")\n        break`,
      hint: "Dodaj break uvučeno ispod print('Pronađen 7!')."
    },
    "k2-liste-menadzer": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Duplikat u listi)",
      instruction: "Zadatak je da u listu 'zadaci' dodaš 'Vežbaj' SAMO ako već nije u listi, ali trenutni kod ga dodaje duplo! Popravi uslov pomoću 'not in'.",
      starter: `zadaci = ["Uči", "Vežbaj"]\nnovi = "Vežbaj"\n# Dodaj novi zadatak samo ako već NIJE u listi:\nif novi in zadaci:\n    zadaci.append(novi)\nprint("Broj zadataka:", len(zadaci))\n`,
      solution: `zadaci = ["Uči", "Vežbaj"]\nnovi = "Vežbaj"\nif novi not in zadaci:\n    zadaci.append(novi)\nprint("Broj zadataka:", len(zadaci))`,
      hint: "Promeni 'if novi in zadaci:' u 'if novi not in zadaci:'."
    },
    "k2-funkcije-modularnost": {
      title: "Zadatak 4: 🐛 Logički Detektiv (Zaboravljen return u else)",
      instruction: "Funkcija cena_sa_popustom(cena) vraća popust za cene >= 1000, ali za cene ispod 1000 vraća None! Popravi je da za manje cene vraća originalnu cenu.",
      starter: `def cena_sa_popustom(cena):\n    if cena >= 1000:\n        return cena * 0.8\n    # Šta funkcija vraća ako je cena manja od 1000?\n\nprint(cena_sa_popustom(2000))\nprint(cena_sa_popustom(500))\n`,
      solution: `def cena_sa_popustom(cena):\n    if cena >= 1000:\n        return cena * 0.8\n    return cena\n\nprint(cena_sa_popustom(2000))\nprint(cena_sa_popustom(500))`,
      hint: "Dodaj 'return cena' na kraju funkcije za slučaj kada je cena < 1000."
    },
    "k2-kviz-sampion": {
      title: "Zadatak 4: 🐛 Logički Detektiv (KeyError u rečniku)",
      instruction: "Pristup igrac['bonus'] puca sa KeyError jer ključ 'bonus' ne postoji! Popravi kod pomoću metode .get('bonus', 0) da bezbedno ispiše 0.",
      starter: `igrac = {"ime": "Marko", "poeni": 500}\n# Popravi bezbedno čitanje ključa 'bonus' sa podrazumevanom vrednošću 0:\nbonus = igrac["bonus"]\nprint("Ukupno:", igrac["poeni"] + bonus)\n`,
      solution: `igrac = {"ime": "Marko", "poeni": 500}\nbonus = igrac.get("bonus", 0)\nprint("Ukupno:", igrac["poeni"] + bonus)`,
      hint: "Zameni igrac['bonus'] sa igrac.get('bonus', 0)."
    }
  };

  // ---------------- KURS 2: DODATNA 2 KVIZ PITANJA (UKUPNO 4 PO LEKCIJI) ----------------
  const k2ExtraQuizzes34 = {
    "k2-print-formatiranje": [
      { question: "Šta radi znak ^ u f-stringu f'{tekst:^20}'?", options: [
        { text: "Centrira tekst u širini od 20 karaktera", correct: true, explanation: "Tačno! < levo, > desno, ^ centrirano." },
        { text: "Stepenuje tekst na 20", correct: false, explanation: "Za stepenovanje služi **, a ^ unutar f-stringa centrira tekst." },
        { text: "Briše razmake", correct: false, explanation: "Za brisanje razmaka služi .strip()." }
      ]},
      { question: "Šta će ispisati print('A', 'B', sep='-')?", options: [
        { text: "A B", correct: false, explanation: "To je podrazumevano kada nema sep." },
        { text: "A-B", correct: true, explanation: "Bravo! Parametar sep određuje znak koji stoji između elemenata." },
        { text: "A-B-", correct: false, explanation: "sep ide samo IZMEĐU vrednosti, ne na kraj." }
      ]}
    ],
    "k2-varijable-kalkulatori": [
      { question: "Koji je rezultat izraza: 2 + 3 * 4?", options: [
        { text: "20", correct: false, explanation: "Množenje ima prednost nad sabiranjem! Za 20 trebaju zagrade (2 + 3) * 4." },
        { text: "14", correct: true, explanation: "Tačno! Prvo 3 * 4 = 12, pa 2 + 12 = 14." },
        { text: "24", correct: false, explanation: "Netačno." }
      ]},
      { question: "Šta radi naredba x += 10?", options: [
        { text: "Povećava postojeću vrednost promenljive x za 10", correct: true, explanation: "Tačno! To je kraći zapis za x = x + 10." },
        { text: "Postavlja x na 10", correct: false, explanation: "To radi x = 10." },
        { text: "Proverava da li je x veće od 10", correct: false, explanation: "Za proveru služi x > 10." }
      ]}
    ],
    "k2-matematika-modulo-vreme": [
      { question: "Koliko iznosi 2 ** 3 (dve zvezdice)?", options: [
        { text: "6", correct: false, explanation: "2 * 3 je 6, a ** označava stepenovanje!" },
        { text: "8", correct: true, explanation: "Bravo! 2 na 3. stepen je 2 * 2 * 2 = 8." },
        { text: "9", correct: false, explanation: "9 bi bilo 3 ** 2." }
      ]},
      { question: "Šta vraća 125 // 60 kada pretvaramo minute u sate?", options: [
        { text: "2 (cela sata)", correct: true, explanation: "Tačno! 60 staje u 125 dva cela puta (ostatak je 5 minuta)." },
        { text: "5", correct: false, explanation: "5 je ostatak (125 % 60)." },
        { text: "2.0833", correct: false, explanation: "To daje obično deljenje 125 / 60." }
      ]}
    ],
    "k2-input-personalizacija": [
      { question: "Šta radi 'AnA'.lower()?", options: [
        { text: "'ana'", correct: true, explanation: "Tačno! Pretvara sva slova u mala radi lakšeg poređenja." },
        { text: "'ANA'", correct: false, explanation: "To radi .upper()." },
        { text: "'Ana'", correct: false, explanation: "To radi .capitalize() ili .title()." }
      ]},
      { question: "Zašto koristimo if not ime: nakon input().strip()?", options: [
        { text: "Da proverimo da li je korisnik ostavio polje prazno", correct: true, explanation: "Bravo! Prazan string '' se u Pythonu tretira kao False, pa je 'not ime' True." },
        { text: "Da obrišemo ime", correct: false, explanation: "Ne briše ništa, samo proverava prazninu." },
        { text: "Da pretvorimo ime u broj", correct: false, explanation: "Netačno." }
      ]}
    ],
    "k2-slozena-grananja": [
      { question: "Kada je izraz (dan == 'subota' or dan == 'nedelja') tačan?", options: [
        { text: "Kada je bar jedan od dva uslova tačan", correct: true, explanation: "Tačno! Operator 'or' zahteva samo jedan tačan uslov." },
        { text: "Samo ako je dan istovremeno i subota i nedelja", correct: false, explanation: "To bi tražio 'and' (što je nemoguće)." },
        { text: "Nikada", correct: false, explanation: "Netačno." }
      ]},
      { question: "Šta vraća izraz: not (5 > 10)?", options: [
        { text: "True", correct: true, explanation: "Bravo! 5 > 10 je False, a not False daje True." },
        { text: "False", correct: false, explanation: "not preokreće istinitost izraza." },
        { text: "Grešku", correct: false, explanation: "Izraz je potpuno ispravan." }
      ]}
    ],
    "k2-petlje-simulacije": [
      { question: "Šta će ispisati: for i in range(1, 5): if i == 3: continue; print(i)?", options: [
        { text: "1, 2, 4 (preskače samo 3)", correct: true, explanation: "Tačno! continue preskače tekući korak i nastavlja na 4." },
        { text: "1, 2 (staje na 3)", correct: false, explanation: "To bi uradio break." },
        { text: "1, 2, 3, 4", correct: false, explanation: "3 je preskočeno zbog continue." }
      ]},
      { question: "Šta se dešava u petlji while True: ako nema naredbe break?", options: [
        { text: "Petlja se ponavlja beskonačno", correct: true, explanation: "Tačno! Zato uz while True: uvek mora postojati uslov izlaza (break)." },
        { text: "Izvršiće se samo jednom", correct: false, explanation: "True je uvek tačno." },
        { text: "Neće se ni pokrenuti", correct: false, explanation: "Pokreće se odmah." }
      ]}
    ],
    "k2-liste-menadzer": [
      { question: "Čemu služi enumerate(lista, start=1) u for petlji?", options: [
        { text: "Daje i redni broj (od 1) i sam element u svakom koraku", correct: true, explanation: "Bravo! Idealno za štampanje menija i numerisanih To-Do lista." },
        { text: "Sabira sve elemente liste", correct: false, explanation: "Za to služi sum()." },
        { text: "Briše duplikate", correct: false, explanation: "Za to služi set()." }
      ]},
      { question: "Šta vraća lista[:3] (slicing)?", options: [
        { text: "Prva 3 elementa liste (indeksi 0, 1 i 2)", correct: true, explanation: "Tačno! Odličan način za prikaz Top 3 rezultata." },
        { text: "Poslednja 3 elementa", correct: false, explanation: "Za poslednja 3 koristi se lista[-3:]." },
        { text: "Samo element na indeksu 3", correct: false, explanation: "To je lista[3]." }
      ]}
    ],
    "k2-funkcije-modularnost": [
      { question: "Šta je podrazumevani (default) parametar kao u def pdv(cena, stopa=0.20):?", options: [
        { text: "Ako pozivalac ne pošalje 'stopa', funkcija automatski koristi 0.20", correct: true, explanation: "Tačno! Čini funkcije znatno fleksibilnijim." },
        { text: "Vrednost 'stopa' se nikada ne može promeniti", correct: false, explanation: "Može se slobodno promeniti pri pozivu: pdv(1000, 0.10)." },
        { text: "Greška u sintaksi", correct: false, explanation: "Ovo je standardna Python osobina." }
      ]},
      { question: "Šta se dešava sa kodom u funkciji koji se nalazi ISPOD naredbe return?", options: [
        { text: "Nikada se ne izvršava jer return odmah napušta funkciju", correct: true, explanation: "Bravo! return odmah završava rad funkcije i vraća vrednost." },
        { text: "Izvršava se normalno", correct: false, explanation: "Ne, to je tzv. nedostižan kod (unreachable code)." },
        { text: "Izvršava se pre return-a", correct: false, explanation: "Kod se uvek izvršava odozgo nadole." }
      ]}
    ],
    "k2-kviz-sampion": [
      { question: "Zašto je rečnik.get('kljuc', 0) bezbedniji od rečnik['kljuc']?", options: [
        { text: "Ne puca sa KeyError ako ključ ne postoji, već vraća podrazumevanu vrednost 0", correct: true, explanation: "Tačno! Pravi inženjerski način za čitanje opcionih polja." },
        { text: "Briše ključ nakon čitanja", correct: false, explanation: "To radi .pop()." },
        { text: "Radi samo za brojeve", correct: false, explanation: "Radi za sve tipove podataka." }
      ]},
      { question: "Kako prolazimo kroz sve ključeve i vrednosti rečnika u for petlji?", options: [
        { text: "for kljuc, vrednost in recnik.items():", correct: true, explanation: "Savršeno! .items() vraća parove (ključ, vrednost)." },
        { text: "for kljuc, vrednost in recnik:", correct: false, explanation: "Običan prolazak kroz rečnik daje samo ključeve." },
        { text: "for all in recnik.all():", correct: false, explanation: "Metod .all() ne postoji na rečniku." }
      ]}
    ]
  };

  LESSONS_KURS_2.forEach(lesson => {
    if (k2Examples[lesson.id] && !lesson.content.includes('extra-examples-box')) {
      lesson.content += k2Examples[lesson.id];
    }
    if (k2Challenges4[lesson.id] && lesson.challenges && lesson.challenges.length < 4) {
      lesson.challenges.push(k2Challenges4[lesson.id]);
    }
    if (k2ExtraQuizzes34[lesson.id] && Array.isArray(lesson.quiz) && lesson.quiz.length < 4) {
      lesson.quiz.push(...k2ExtraQuizzes34[lesson.id]);
    }
  });

  // ---------------- KURS 3: INŽENJERSKI PRIMERI (<pre>) ----------------
  const k3Examples = {
    "k3-lokalno-okruzenje": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac (klikni „▶ Isprobaj u editoru”):</h4>
        <pre><code>import sys, platform
print("Python verzija:", sys.version.split()[0])
print("Okruženje:", platform.system(), platform.machine())</code></pre>
      </div>`,
    "k3-try-except-odbrana": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: <code>try / except / else / finally</code>:</h4>
        <pre><code>def parsiraj_broj(tekst):
    try:
        broj = int(tekst)
    except ValueError:
        print(f"⚠️ '{tekst}' nije validan ceo broj!")
        return None
    else:
        print(f"✅ Uspešno učitan broj: {broj}")
        return broj

parsiraj_broj("42")
parsiraj_broj("abc")</code></pre>
      </div>`,
    "k3-modul-random": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: Jedinstveni izbor sa <code>random.sample</code>:</h4>
        <pre><code>import random
loto = sorted(random.sample(range(1, 40), 6))
print("Loto kombinacija bez ponavljanja:", loto)</code></pre>
      </div>`,
    "k3-vreme-i-matematika": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: Merenje brzine koda i Pitagorina teorema:</h4>
        <pre><code>import time, math
start = time.perf_counter()
zbir = sum(range(1, 10001))
trajanje = (time.perf_counter() - start) * 1000
print(f"Zbir={zbir}, hipotenuza(3,4)={math.hypot(3,4)}, vreme={trajanje:.2f}ms")</code></pre>
      </div>`,
    "k3-rad-sa-fajlovima": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: Pisanje i čitanje fajla liniju po liniju:</h4>
        <pre><code>with open("beleznica.txt", "w", encoding="utf-8") as f:
    f.write("Prva beleška\\nDruga beleška\\n")

with open("beleznica.txt", "r", encoding="utf-8") as f:
    for br, red in enumerate(f, 1):
        print(f"Linija {br}: {red.strip()}")</code></pre>
      </div>`,
    "k3-matrice-i-2d": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: Dijagonala 3×3 matrice:</h4>
        <pre><code>matrica = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
dijagonala = [matrica[i][i] for i in range(3)]
print("Glavna dijagonala:", dijagonala, "| Zbir:", sum(dijagonala))</code></pre>
      </div>`,
    "k3-napredne-funkcije": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: Više povratnih vrednosti (Tuple Unpacking):</h4>
        <pre><code>def min_i_max(brojevi):
    return min(brojevi), max(brojevi)

najmanji, najveci = min_i_max([14, 3, 29, 8])
print(f"Min: {najmanji}, Max: {najveci}")</code></pre>
      </div>`,
    "k3-algoritmi-pretrage": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: Čista binarna pretraga $O(\log n)$:</h4>
        <pre><code>def binarna_pretraga(lista, cilj):
    levo, desno = 0, len(lista) - 1
    while levo <= desno:
        sredina = (levo + desno) // 2
        if lista[sredina] == cilj:
            return sredina
        elif lista[sredina] < cilj:
            levo = sredina + 1
        else:
            desno = sredina - 1
    return -1

print("Indeks broja 23:", binarna_pretraga([2, 5, 11, 23, 45, 89], 23))</code></pre>
      </div>`,
    "k3-tamagotchi-master": `
      <div class="extra-examples-box">
        <h4>🏗️ Inženjerski obrazac: Čuvanje i učitavanje stanja igre (Save/Load):</h4>
        <pre><code>stanje = {"ime": "Piki", "glad": 30, "energija": 85}
with open("save_game.txt", "w", encoding="utf-8") as f:
    for k, v in stanje.items():
        f.write(f"{k}={v}\\n")
print("Igra sačuvana! Pogledaj tab '📂 Moji fajlovi' u terminalu!")</code></pre>
      </div>`
  };

  // ---------------- KURS 3: ZADATAK 4 (🕵️ INŽENJERSKI CODE REVIEW) ----------------
  const k3Challenges4 = {
    "k3-lokalno-okruzenje": {
      title: "Zadatak 4: 🕵️ Code Review (Neispravan __name__ gard)",
      instruction: "Junior kolega je napravio slovnu grešku u standardnom Python bloku (napisao je '_main_' sa po jednom crtom umesto dve '__main__') pa se main() nikada ne pokreće! Popravi kod.",
      starter: `def pozdrav():\n    return "Okruženje je spremno!"\n\n# Popravi slovnu grešku u __main__ proveri:\nif __name__ == "_main_":\n    print(pozdrav())\n`,
      solution: `def pozdrav():\n    return "Okruženje je spremno!"\n\nif __name__ == "__main__":\n    print(pozdrav())`,
      hint: "I __name__ i '__main__' imaju po DVE donje crte sa obe strane."
    },
    "k3-try-except-odbrana": {
      title: "Zadatak 4: 🕵️ Code Review (Pogrešan tip izuzetka)",
      instruction: "Funkcija bezbedan_int(tekst) hvata ZeroDivisionError umesto ValueError, pa puca na 'abc'! Popravi except blok da za nevažeći tekst bezbedno vrati 0.",
      starter: `def bezbedan_int(tekst):\n    try:\n        return int(tekst)\n    except ZeroDivisionError:\n        return 0\n\nprint(bezbedan_int("42"))\nprint(bezbedan_int("abc"))\n`,
      solution: `def bezbedan_int(tekst):\n    try:\n        return int(tekst)\n    except ValueError:\n        return 0\n\nprint(bezbedan_int("42"))\nprint(bezbedan_int("abc"))`,
      hint: "int('abc') baca ValueError, a ne ZeroDivisionError."
    },
    "k3-modul-random": {
      title: "Zadatak 4: 🕵️ Code Review (Ponavljanje brojeva na Lotou)",
      instruction: "Kolega je za Loto 6/39 koristio randint u petlji pa se brojevi ponavljaju! Zameni logiku u funkciji izvuceni_brojevi() sa random.sample(range(1, 40), 6) da svih 6 brojeva bude jedinstveno.",
      starter: `import random\ndef izvuceni_brojevi():\n    # Popravi da se brojevi NIKADA ne ponavljaju:\n    return [random.randint(1, 6) for _ in range(6)]\n\nprint(izvuceni_brojevi())\n`,
      solution: `import random\ndef izvuceni_brojevi():\n    return sorted(random.sample(range(1, 40), 6))\n\nprint(izvuceni_brojevi())`,
      hint: "random.sample(range(1, 40), 6) garantuje 6 potpuno različitih brojeva od 1 do 39."
    },
    "k3-vreme-i-matematika": {
      title: "Zadatak 4: 🕵️ Code Review (Zaokruživanje pločica nadole!)",
      instruction: "Funkcija paketi_plocica(potrebno, u_paketu) koristi math.floor pa majstoru uvek fali jedan paket! Zameni sa math.ceil da uvek zaokruži nagore (npr. 25 pločica po 10 -> 3 paketa).",
      starter: `import math\ndef paketi_plocica(potrebno, u_paketu):\n    return math.floor(potrebno / u_paketu)\n\nprint("Potrebno paketa:", paketi_plocica(25, 10))\n`,
      solution: `import math\ndef paketi_plocica(potrebno, u_paketu):\n    return math.ceil(potrebno / u_paketu)\n\nprint("Potrebno paketa:", paketi_plocica(25, 10))`,
      hint: "math.ceil() uvek zaokružuje nagore na prvi ceo broj (plafon)."
    },
    "k3-rad-sa-fajlovima": {
      title: "Zadatak 4: 🕵️ Code Review (Prepisivanje dnevnika umesto dopisivanja)",
      instruction: "Funkcija dodaj_red(fajl, tekst) otvara fajl u režimu 'w' pa svaki put briše sve stare beleške! Promeni režim u 'a' (append) da čuva sve redove.",
      starter: `def dodaj_red(fajl, tekst):\n    with open(fajl, "w", encoding="utf-8") as f:\n        f.write(tekst + "\\n")\n\ndodaj_red("log.txt", "Prvi red")\ndodaj_red("log.txt", "Drugi red")\nwith open("log.txt", "r", encoding="utf-8") as f:\n    print(f.read())\n`,
      solution: `def dodaj_red(fajl, tekst):\n    with open(fajl, "a", encoding="utf-8") as f:\n        f.write(tekst + "\\n")\n\ndodaj_red("log.txt", "Prvi red")\ndodaj_red("log.txt", "Drugi red")\nwith open("log.txt", "r", encoding="utf-8") as f:\n    print(f.read())`,
      hint: "Režim 'w' briše fajl pre pisanja, dok režim 'a' dopisuje na kraj postojećeg fajla."
    },
    "k3-matrice-i-2d": {
      title: "Zadatak 4: 🕵️ Code Review (Zamenjeni red i kolona!)",
      instruction: "Funkcija dohvati_polje(tabla, red, kol) greškom pristupa tabla[kol][red] umesto tabla[red][kol]! Popravi indeksiranje 2D matrice.",
      starter: `def dohvati_polje(tabla, red, kol):\n    return tabla[kol][red]\n\nt = [["A", "B", "C"], ["D", "E", "F"]]\nprint("Red 0, Kol 2 (treba C):", dohvati_polje(t, 0, 2))\n`,
      solution: `def dohvati_polje(tabla, red, kol):\n    return tabla[red][kol]\n\nt = [["A", "B", "C"], ["D", "E", "F"]]\nprint("Red 0, Kol 2 (treba C):", dohvati_polje(t, 0, 2))`,
      hint: "U 2D listama prvi indeks je UVEK red, a drugi je kolona: tabla[red][kol]."
    },
    "k3-napredne-funkcije": {
      title: "Zadatak 4: 🕵️ Code Review (Zajednička lista kao default parametar!)",
      instruction: "Čuvena Python zamka! Funkcija dodaj_stavku(stavka, lista=[]) deli ISTU listu između svih poziva! Popravi je koristeći lista=None i 'if lista is None: lista = []'.",
      starter: `def dodaj_stavku(stavka, lista=[]):\n    lista.append(stavka)\n    return lista\n\nprint("Korpa 1:", dodaj_stavku("Hleb"))\nprint("Korpa 2 (treba samo Mleko!):", dodaj_stavku("Mleko"))\n`,
      solution: `def dodaj_stavku(stavka, lista=None):\n    if lista is None:\n        lista = []\n    lista.append(stavka)\n    return lista\n\nprint("Korpa 1:", dodaj_stavku("Hleb"))\nprint("Korpa 2:", dodaj_stavku("Mleko"))`,
      hint: "Nikada ne stavljaj praznu listu [] kao podrazumevani parametar — koristi lista=None pa kreiraj novu listu unutar funkcije!"
    },
    "k3-algoritmi-pretrage": {
      title: "Zadatak 4: 🕵️ Code Review (Bug u binarnoj pretrazi)",
      instruction: "U binarnoj pretrazi neko je stavio 'while levo < desno:' umesto '<=', pa algoritam ne pronalazi poslednji element u listi! Popravi uslov petlje.",
      starter: `def pronadji_indeks(lista, cilj):\n    levo, desno = 0, len(lista) - 1\n    while levo < desno:\n        sred = (levo + desno) // 2\n        if lista[sred] == cilj:\n            return sred\n        elif lista[sred] < cilj:\n            levo = sred + 1\n        else:\n            desno = sred - 1\n    return -1\n\nprint("Indeks broja 50 (treba 4):", pronadji_indeks([10, 20, 30, 40, 50], 50))\n`,
      solution: `def pronadji_indeks(lista, cilj):\n    levo, desno = 0, len(lista) - 1\n    while levo <= desno:\n        sred = (levo + desno) // 2\n        if lista[sred] == cilj:\n            return sred\n        elif lista[sred] < cilj:\n            levo = sred + 1\n        else:\n            desno = sred - 1\n    return -1\n\nprint("Indeks broja 50:", pronadji_indeks([10, 20, 30, 40, 50], 50))`,
      hint: "Promeni 'while levo < desno:' u 'while levo <= desno:' da bi proverio i kada ostane jedan element."
    },
    "k3-tamagotchi-master": {
      title: "Zadatak 4: 🕵️ Code Review (Glad ide u minus!)",
      instruction: "Kada se ljubimac nahrani, njegova glad može pasti ispod 0 (npr. -20)! Popravi funkciju smanji_glad(glad, porcija) pomoću max(0, glad - porcija) da nikada ne bude negativna.",
      starter: `def smanji_glad(glad, porcija):\n    return glad - porcija\n\nprint("Nova glad (treba 0):", smanji_glad(15, 30))\n`,
      solution: `def smanji_glad(glad, porcija):\n    return max(0, glad - porcija)\n\nprint("Nova glad:", smanji_glad(15, 30))`,
      hint: "max(0, glad - porcija) garantuje donju granicu 0 (clamping)."
    }
  };

  // ---------------- KURS 3: DODATNA 2 KVIZ PITANJA (UKUPNO 4 PO LEKCIJI) ----------------
  const k3ExtraQuizzes34 = {
    "k3-lokalno-okruzenje": [
      { question: "Koju ekstenziju uvek imaju Python fajlovi na računaru?", options: [".py", ".txt", ".exe", ".python"], correct: 0, explanation: "Svi Python izvorni fajlovi imaju ekstenziju .py." },
      { question: "Koja prečica u VS Code-u najčešće otvara ugrađeni terminal?", options: ["Ctrl + ` (ili Ctrl + J)", "Alt + F4", "Ctrl + Z", "Shift + Delete"], correct: 0, explanation: "Ctrl + ` (backtick) ili Ctrl + J brzo otvara/zatvara terminal u VS Code-u." }
    ],
    "k3-try-except-odbrana": [
      { question: "Kada se izvršava blok finally unutar try/except/finally?", options: ["Uvek — bez obzira da li je došlo do greške ili nije", "Samo kada dođe do greške", "Samo kada nema greške", "Nikada"], correct: 0, explanation: "finally se uvek izvršava i služi za oslobađanje resursa." },
      { question: "Zašto se izbegava 'goli' except: bez navođenja tipa greške?", options: ["Jer može sakriti neočekivane bagove (npr. slovnu grešku u kodu)", "Jer ne radi u Pythonu 3", "Jer briše memoriju", "Jer usporava procesor 100 puta"], correct: 0, explanation: "Uvek treba hvatati konkretne izuzetke poput ValueError ili ZeroDivisionError." }
    ],
    "k3-modul-random": [
      { question: "Koja je razlika između random.sample(lista, 3) i random.choices(lista, k=3)?", options: ["sample bira BEZ ponavljanja, dok choices može ponoviti isti element", "Nema razlike", "sample radi samo za brojeve", "choices sortira listu"], correct: 0, explanation: "Za Loto i deljenje karata uvek se koristi random.sample (bez duplikata)." },
      { question: "Šta radi random.shuffle(spil)?", options: ["Meša elemente postojeće liste na mestu (in-place)", "Vraća novu sortiranu listu", "Briše polovinu liste", "Bira jedan element"], correct: 0, explanation: "shuffle menja samu listu direktno i vraća None." }
    ],
    "k3-vreme-i-matematika": [
      { question: "Koja funkcija iz math modula zaokružuje 3.01 na 4?", options: ["math.ceil(3.01)", "math.floor(3.01)", "round(3.01)", "int(3.01)"], correct: 0, explanation: "math.ceil (plafon) uvek zaokružuje na prvi veći ceo broj." },
      { question: "Zašto je time.perf_counter() bolji od time.time() za merenje brzine koda?", options: ["Ima mnogo veću preciznost i ne zavisi od promene sistemskog sata", "Radi samo noću", "Pauzira program", "Štampa datum"], correct: 0, explanation: "perf_counter() je industrijski standard za benchmark i merenje trajanja." }
    ],
    "k3-rad-sa-fajlovima": [
      { question: "Zašto pri otvaranju fajlova navodimo encoding='utf-8'?", options: ["Da bi srpska slova (č, ć, š, ž, đ) i emotikoni bili ispravno sačuvani na svim operativnim sistemima", "Da bi fajl bio manji", "Da bi fajl bio šifrovan", "Zato što Windows ne podržava .txt"], correct: 0, explanation: "UTF-8 je globalni standard koji čuva sva naša slova bez 'kuka i kvaka'." },
      { question: "Šta će se desiti ako otvoriš nepostojeći fajl u režimu 'r'?", options: ["Python baca FileNotFoundError", "Automatski kreira prazan fajl", "Vraća broj 0", "Gasi računar"], correct: 0, explanation: "Režim 'r' (read) zahteva da fajl već postoji — zato ga čuvamo u try/except!" }
    ],
    "k3-matrice-i-2d": [
      { question: "Kako u 2D matrici m = [[10, 20], [30, 40]] pristupamo broju 30?", options: ["m[1][0]", "m[0][1]", "m[1][1]", "m[2][1]"], correct: 0, explanation: "30 je u drugom redu (indeks 1) i prvoj koloni (indeks 0) -> m[1][0]." },
      { question: "Koliko petlji obično koristimo da obiđemo sve ćelije jedne 2D matrice?", options: ["Dve ugnježdene for petlje (spoljna za redove, unutrašnja za kolone)", "Jednu if naredbu", "Pet while petlji", "Nijednu"], correct: 0, explanation: "Spoljna petlja ide po redovima, unutrašnja po kolonama." }
    ],
    "k3-napredne-funkcije": [
      { question: "Zašto je def dodaj(x, lista=[]): opasna greška u Pythonu?", options: ["Jer se podrazumevana lista kreira samo jednom i deli između svih poziva funkcije", "Jer lista ne može biti parametar", "Jer izaziva SyntaxError", "Jer briše promenljivu x"], correct: 0, explanation: "Uvek koristi lista=None i kreiraj novu listu unutar tela funkcije!" },
      { question: "Šta znači pojam 'lokalna promenljiva'?", options: ["Promenljiva napravljena unutar funkcije koja postoji samo dok ta funkcija radi", "Promenljiva dostupna u svim fajlovima", "Promenljiva koja se čuva na hard disku", "Promenljiva sa malim slovom"], correct: 0, explanation: "Lokalne promenljive žive u opsegu (scope) svoje funkcije i ne zagađuju ostatak programa." }
    ],
    "k3-algoritmi-pretrage": [
      { question: "Koji je OBAVEZAN preduslov da bi binarna pretraga radila ispravno?", options: ["Lista mora biti prethodno sortirana", "Lista mora imati paran broj elemenata", "Elementi moraju biti tekstovi", "Lista mora biti kraća od 100 elemenata"], correct: 0, explanation: "Binarna pretraga odbacuje polovinu liste samo zato što zna da su elementi poređani po redu!" },
      { question: "Koliko najviše koraka treba binarnoj pretrazi za milion (1.000.000) sortiranih elemenata?", options: ["Oko 20 koraka", "Oko 500.000 koraka", "Tačno 1.000.000 koraka", "Oko 1.000 koraka"], correct: 0, explanation: "2^20 je preko milion — zato je O(log n) astronomski brže od linearne pretrage!" }
    ],
    "k3-tamagotchi-master": [
      { question: "Šta postiže izraz min(100, max(0, energija)) u igrama?", options: ["Ograničava energiju da uvek ostane između 0 i 100 (clamping)", "Briše energiju", "Udvostručuje energiju", "Pretvara energiju u tekst"], correct: 0, explanation: "Clamping sprečava nelogične vrednosti poput -15% ili 140% energije." },
      { question: "Zašto je dobro da svaka radnja u igri (nahrani, spavaj, sacuvaj) bude zasebna funkcija?", options: ["Kod je pregledan, lak za testiranje i svaka funkcija ima jednu jasnu odgovornost", "Zato što Python zabranjuje dugačke fajlove", "Da bi igra zauzimala više memorije", "Samo radi lepših boja u editoru"], correct: 0, explanation: "Princip jedne odgovornosti (Single Responsibility) je temelj profesionalnog softverskog inženjerstva." }
    ]
  };

  // Poveži svih 9 video lekcija za Kurs 2 i 9 video lekcija za Kurs 3!
  const k2VideoMap = [
    'kurs2_lekcija1_formatiranje', 'kurs2_lekcija2_kalkulatori', 'kurs2_lekcija3_modulo',
    'kurs2_lekcija4_dijalozi', 'kurs2_lekcija5_grananja', 'kurs2_lekcija6_bankomat',
    'kurs2_lekcija7_todo', 'kurs2_lekcija8_modularnost', 'kurs2_lekcija9_kviz'
  ];
  k2VideoMap.forEach((slug, idx) => {
    if (LESSONS_KURS_2[idx]) {
      LESSONS_KURS_2[idx].localVideoUrl = 'video_lekcije/' + slug + '.mp4';
      LESSONS_KURS_2[idx].videoPoster = 'video_lekcije/' + slug + '_thumbnail.png';
    }
  });
  const k3VideoMap = [
    'kurs3_lekcija1_okruzenje', 'kurs3_lekcija2_izuzeci', 'kurs3_lekcija3_random',
    'kurs3_lekcija4_vreme_math', 'kurs3_lekcija5_fajlovi', 'kurs3_lekcija6_matrice',
    'kurs3_lekcija7_opseg', 'kurs3_lekcija8_algoritmi', 'kurs3_lekcija9_tamagotchi'
  ];
  k3VideoMap.forEach((slug, idx) => {
    if (LESSONS_KURS_3[idx]) {
      LESSONS_KURS_3[idx].localVideoUrl = 'video_lekcije/' + slug + '.mp4';
      LESSONS_KURS_3[idx].videoPoster = 'video_lekcije/' + slug + '_thumbnail.png';
    }
  });

    LESSONS_KURS_3.forEach(lesson => {
    if (k3Examples[lesson.id] && !lesson.content.includes('extra-examples-box')) {
      lesson.content += k3Examples[lesson.id];
    }
    if (k3Challenges4[lesson.id] && lesson.challenges && lesson.challenges.length < 4) {
      lesson.challenges.push(k3Challenges4[lesson.id]);
    }
    if (k3ExtraQuizzes34[lesson.id] && Array.isArray(lesson.quiz) && lesson.quiz.length < 4) {
      lesson.quiz.push(...k3ExtraQuizzes34[lesson.id]);
    }
  });
})();

// KOLEKCIJA KURSEVA PLATFORME (Trijada Osnova + Pythonični Most + Pro Akademija CS101)
// ============================================================================
const _LESSONS_KURS_BRIDGE = (typeof LESSONS_KURS_BRIDGE !== 'undefined')
  ? LESSONS_KURS_BRIDGE
  : (typeof require !== 'undefined' ? require('./course_bridge.js').LESSONS_KURS_BRIDGE : []);

// Poveži Pro Studio v2 Full HD video lekcije i thumbnail-ove za Kurs 4 (Pythonični Most — 6 lekcija)
(function attachBridgeVideos() {
  const kBridgeVideoMap = [
    'kurs_bridge_lekcija1_stringovi_slicing',
    'kurs_bridge_lekcija2_torke_skupovi',
    'kurs_bridge_lekcija3_comprehensions',
    'kurs_bridge_lekcija4_lambda_funkcionalni',
    'kurs_bridge_lekcija5_moduli_pip_venv',
    'kurs_bridge_lekcija6_analizator_podataka'
  ];
  kBridgeVideoMap.forEach((slug, idx) => {
    if (_LESSONS_KURS_BRIDGE[idx]) {
      _LESSONS_KURS_BRIDGE[idx].localVideoUrl = 'video_lekcije/' + slug + '.mp4';
      _LESSONS_KURS_BRIDGE[idx].videoPoster = 'video_lekcije/' + slug + '_thumbnail.png';
    }
  });
})();

const _LESSONS_KURS_PROJECTS = (typeof LESSONS_KURS_PROJECTS !== 'undefined')
  ? LESSONS_KURS_PROJECTS
  : (typeof require !== 'undefined' ? require('./course_projects.js').LESSONS_KURS_PROJECTS : []);

// Poveži Pro Studio v2 Full HD video vodiče i thumbnail-ove za Kurs 5 (Vođeni Projekti — 10 aplikacija)
(function attachProjectsVideos() {
  const kProjectsVideoMap = [
    'kurs_projekti_01_generator_lozinki',
    'kurs_projekti_02_budzet_menadzer',
    'kurs_projekti_03_imenik_kontakata',
    'kurs_projekti_04_flashcards_ucenje',
    'kurs_projekti_05_analizator_logova',
    'kurs_projekti_06_inventar_prodavnice',
    'kurs_projekti_07_vesala_turnir',
    'kurs_projekti_08_kripto_beleznica',
    'kurs_projekti_09_kanban_tabla',
    'kurs_projekti_10_turnir_liga'
  ];
  kProjectsVideoMap.forEach((slug, idx) => {
    if (_LESSONS_KURS_PROJECTS[idx]) {
      _LESSONS_KURS_PROJECTS[idx].localVideoUrl = 'video_lekcije/' + slug + '.mp4';
      _LESSONS_KURS_PROJECTS[idx].videoPoster = 'video_lekcije/' + slug + '_thumbnail.png';
    }
  });
})();

const _LESSONS_KURS_4 = (typeof LESSONS_KURS_4 !== 'undefined')
  ? LESSONS_KURS_4
  : (typeof require !== 'undefined' ? require('./course4_cs101.js').LESSONS_KURS_4 : []);

// Poveži Pro Akademija Full HD video lekcije i thumbnail-ove za Kurs 4 (10 modula)
(function attachCourse4Videos() {
  const k4VideoMap = [
    'kurs4_modul1_binarni_sistem',
    'kurs4_modul2_algoritmi_rekurzija',
    'kurs4_modul3_strukture_podataka',
    'kurs4_modul4_oop_osnove',
    'kurs4_modul5_oop_napredni',
    'kurs4_modul6_regex',
    'kurs4_modul7_unit_testovi',
    'kurs4_modul8_json_csv_api',
    'kurs4_modul9_baze_i_sql',
    'kurs4_modul10_diplomski_projekat'
  ];
  k4VideoMap.forEach((slug, idx) => {
    if (_LESSONS_KURS_4[idx]) {
      _LESSONS_KURS_4[idx].localVideoUrl = 'video_lekcije/' + slug + '.mp4';
      _LESSONS_KURS_4[idx].videoPoster = 'video_lekcije/' + slug + '_thumbnail.png';
    }
  });
})();

const COURSES = [
  {
    id: "osnove-1",
    title: "1. Python Osnove 1 (Prvi koraci)",
    badge: "Početni nivo",
    icon: "🌱",
    tagline: "Od apsolutne nule: print, kutije, uslovi, petlje, liste i prva igrica",
    lessons: LESSONS_KURS_1
  },
  {
    id: "osnove-2",
    title: "2. Python Osnove 2 (Praktičar & Mini-Projekti)",
    badge: "Srednji nivo osnova",
    icon: "🛠️",
    tagline: "Osnove u praksi sa mini-projektom u svakoj lekciji: Bankomat, Planer, To-Do, Kviz Šampion",
    lessons: LESSONS_KURS_2
  },
  {
    id: "osnove-3",
    title: "3. Python Osnove 3 (Master nivo osnova)",
    badge: "Napredni nivo osnova",
    icon: "🎓",
    tagline: "Master nivo osnova i rad na računaru: IDLE, VS Code, try-except, random, fajlovi, matrice, Tamagotchi",
    lessons: LESSONS_KURS_3
  },
  {
    id: "pythonic-bridge",
    title: "4. Pythonični Alati & Srednji Nivo (Most ka CS101)",
    badge: "Srednji nivo • 6 lekcija",
    icon: "⚡",
    tagline: "Savršen most ka CS101 Pro: slicing [::-1], join/split, torke, setovi, comprehensions, lambda, pip/venv",
    lessons: _LESSONS_KURS_BRIDGE
  },
  {
    id: "guided-projects",
    title: "5. Vođeni Projekti na Računaru (10 Realnih Aplikacija)",
    badge: "Praksa na PC-u • 10 projekata",
    icon: "🏗️",
    tagline: "10 progresivnih projekata za VS Code: Generator lozinki, Budžet CSV, Imenik, Kartice, Log Radar, Kasa, Vešala, Vižener, Kanban i Sportska Liga",
    lessons: _LESSONS_KURS_PROJECTS
  },
  {
    id: "cs101-pro",
    title: "6. Računarstvo i Python Inženjerstvo (CS101 Pro)",
    badge: "Pro Akademija • 10 modula",
    icon: "🚀",
    tagline: "Univerzitetski nivo računarstva kroz Python: bitovi, Big-O, rekurzija, OOP, Regex, TDD, JSON API, SQL baze i Mini-Banka",
    lessons: _LESSONS_KURS_4
  }
];

// Za unazadnu kompatibilnost
let LESSONS = COURSES[0].lessons;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    COURSES, LESSONS, LESSONS_KURS_1, LESSONS_KURS_2, LESSONS_KURS_3,
    LESSONS_KURS_BRIDGE: _LESSONS_KURS_BRIDGE,
    LESSONS_KURS_PROJECTS: _LESSONS_KURS_PROJECTS,
    LESSONS_KURS_4: _LESSONS_KURS_4
  };
}
