# Pravila Ekspertskog Tima — Platforma „Python Od Nule”

## 1. Jezik i Standard Tima
- Sva komunikacija, UI tekstovi, objašnjenja grešaka i komentari za učenike pišu se na **srpskom jeziku (latinica)**.
- Održavati standard našeg dvanaestočlanog ekspertskog tima (Vuk, Dr Lazar, Tara, Marko, Dr Maja, Sofija, Nemanja, Stefan, Ana, Luka, Đorđe, Ivana).

## 2. Obavezna QA Provera Posle Svake Izmene (Stefan & Vuk)
- Nakon svake izmene u `assets/js/app.js`, `assets/js/lessons.js` ili `assets/css/style.css`, OBAVEZNO pokrenuti:
  1. `python3 scripts/qa_verify_all.py`
  2. `node -c assets/js/app.js && node -c assets/js/lessons.js`
- Nikada ne raditi zamenu teksta između dve funkcije u `app.js` bez provere da nijedna susedna funkcija nije slučajno obrisana.
- Za nove Python primere uvek proveriti kompatibilnost sa brauzerskim **Skulpt** okruženjem (`open(..., encoding="utf-8")`, `FileNotFoundError`, `os`, `platform`, `time.perf_counter`).

## 3. Standard Kurikuluma i Automatskih Testova (Dr Lazar)
- Svaka lekcija mora imati: jasnu analogiju, interaktivne `<pre>` primere (sa automatskim dugmetom `▶ Isprobaj u editoru`), **4 postupna zadatka** (uključujući *Detektiva za greške / Logičkog Detektiva / Code Review*) i **4 kviz pitanja**.
- Početni primer lekcije (`starterCode`) i nacrti zadataka (`userChallengeDrafts`) moraju ostati **strogo odvojeni** (`isEditingChallenge`).
- Ako zadatak traži modifikaciju koda iz primera, njegov `starter` MORA sadržati taj kod (nikada prazan komentar).
- Svaka provera zadataka sa funkcijama ili računanjem mora imati **stvarne Python `assert` unit testove** u `CHALLENGE_UNIT_TESTS` (testirati više ulaza, odbiti `None` i pogrešne operatore).

## 4. UI/UX i Pristupačnost (Tara Kovačević)
- Za `input()` u Pythonu koristiti isključivo **inline unos na dnu terminala** — nikada modal koji zaklanja izlaz terminala.
- Radionica mora zadržati **odvojeni dvostruki skrol** (zaključan `body` skrol u radionici) i ručne razdvajače (resizere).
- Svaka nova UI komponenta ili modal mora podržavati **obe teme (Tamnu i Svetlu)**, **Fokus mod** i uredno dodavati/skidati klasu `.active` na `.custom-modal-backdrop`.

## 5. Pravna Zaštita (Ana Ristić)
- Za napredne kurseve (npr. inspirisane Harvard CS50/CS50P) sav sadržaj, zadaci i brendiranje moraju biti **100% autorski**, bez kopiranja tuđih zaštićenih materijala ili imena.


## 6. Git Verzionisanje i Higijena Repozitorijuma (Đorđe Kostić)
- Projekat se vodi u lokalnom Git repozitorijumu na glavnoj grani `main`.
- Nakon svake veće verifikovane izmene (pošto prođe `python3 scripts/qa_verify_all.py`), napraviti uredan, atomski commit sa jasnom konvencionalnom porukom na srpskom (`feat:`, `fix:`, `style:`, `docs:`, `chore:`).
- Veliki binarni video fajlovi (`video_lekcije/*.mp4`), keš (`__pycache__/`) i privremeni fajlovi ostaju u `.gitignore` kako bi repozitorijum bio lagan i spreman za GitHub / Deploy.
- Nikada ne raditi `git push` na udaljeni repozitorijum niti destruktivne operacije (`git reset --hard`, `git push --force`) bez izričitog zahteva korisnika.


## 7. Standardi Savremene Web/EdTech Platforme (Ivana Marković — Platform Standards Lead)
- Ivana proaktivno kontroliše da platforma u svakom trenutku ispunjava moderne industrijske standarde (da se nikada više ne desi propust poput naknadnog uvođenja Git-a).
- Pre svakog većeg izdanja (release-a) obavezno proveriti:
  1. **Verzionisanje & Dokumentacija:** Git repozitorijum čist, `README.md` usklađen sa aktuelnim brojem kurseva/lekcija, `.gitignore` štiti teške binarne fajlove.
  2. **SEO, Deljenje & PWA:** Prisutni `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:url`), `<meta name="theme-color">` i `manifest.webmanifest`.
  3. **Kredibilitet & Pravo:** Bez lažnih biografija/utisaka i neosnovanih tvrdnji o akreditaciji na javnom sajtu.
  4. **Mobilni & Desktop UX:** Odmrznuto zaglavlje i 0 horizontalnog prelivanja na 360px/390px/768px/1440px, 100% podrška za Tamnu i Svetlu temu, tastaturni `:focus-visible` i `prefers-reduced-motion`.
  5. **Kvalitet Koda & Testovi:** 100% prolaz na `python3 scripts/qa_verify_all.py` i provera svih unit testova u Skulpt okruženju.
