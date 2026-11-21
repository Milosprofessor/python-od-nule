/**
 * Glavna aplikaciona logika za "Python Od Nule"
 * Podržava više kurseva (Kurs 1 i Kurs 2), CodeMirror editor,
 * Skulpt Python interpreter, interaktivni terminal, višestruke zadatke i napredak.
 */

let editor = null;
let currentCourseIndex = 0;
let currentLessonIndex = 0;
let activeChallengeIndex = 0;
let isSandboxMode = false;
let isRunning = false;
let currentInputResolver = null;

// Nova stanja za pristupačnost i sprečavanje gubitka koda
let currentFontSize = 14.5;
let activeErrorLineHandle = null;
const userChallengeDrafts = {};
let isEditingChallenge = false;
let lastRunOutputBuffer = '';
let lastRunHadError = false;

// Keširani elementi iz DOM-a
const elements = {
  courseSelect: document.getElementById('course-select'),
  sidebarHeader: document.querySelector('.sidebar-header'),
  lessonList: document.getElementById('lesson-list'),
  progressBar: document.getElementById('progress-bar-fill'),
  progressText: document.getElementById('progress-text'),
  lessonTitle: document.getElementById('lesson-title'),
  lessonCategory: document.getElementById('lesson-category'),
  lessonContent: document.getElementById('lesson-body'),
  proTipSection: document.getElementById('pro-tip-box'),
  challengeBox: document.getElementById('challenge-box'),
  quizBox: document.getElementById('quiz-box'),
  outputConsole: document.getElementById('console-output'),
  runBtn: document.getElementById('run-code-btn'),
  stopBtn: document.getElementById('stop-code-btn'),
  clearConsoleBtn: document.getElementById('clear-console-btn'),
  resetCodeBtn: document.getElementById('reset-code-btn'),
  loadChallengeBtn: document.getElementById('load-challenge-btn'),
  prevLessonBtn: document.getElementById('prev-lesson-btn'),
  nextLessonBtn: document.getElementById('next-lesson-btn'),
  completeLessonBtn: document.getElementById('complete-lesson-btn'),
  sandboxBtn: document.getElementById('sandbox-toggle-btn'),
  inputDialog: document.getElementById('custom-input-modal'),
  inputPromptText: document.getElementById('custom-input-prompt'),
  inputField: document.getElementById('custom-input-field'),
  inputSubmitBtn: document.getElementById('custom-input-submit'),
  inputCancelBtn: document.getElementById('custom-input-cancel'),
  notificationToast: document.getElementById('notification-toast'),
  
  // Novi elementi
  downloadCodeBtn: document.getElementById('download-code-btn'),
  fontDecBtn: document.getElementById('font-dec-btn'),
  fontIncBtn: document.getElementById('font-inc-btn'),
  fontSizeIndicator: document.getElementById('font-size-indicator'),
  confettiCanvas: document.getElementById('confetti-canvas'),

  // Elementi za unapređenja Trijade i Cheat Sheet
  trijadaProgressText: document.getElementById('trijada-progress-text'),
  cheatSheetBtn: document.getElementById('cheat-sheet-btn'),
  cheatSheetModal: document.getElementById('cheat-sheet-modal'),
  closeCheatSheetBtn: document.getElementById('close-cheat-sheet-btn'),
  headerUserXp: document.getElementById('header-user-xp'),
  headerUserStreak: document.getElementById('header-user-streak'),
  btnOpenCertificate: document.getElementById('btn-open-certificate'),
  certificateModal: document.getElementById('certificate-modal'),
  btnCloseCertificate: document.getElementById('btn-close-certificate'),
  btnPrintCertificate: document.getElementById('btn-print-certificate'),
  btnCopyCertId: document.getElementById('btn-copy-cert-id'),
  certStudentName: document.getElementById('cert-student-name'),
  certCourseName: document.getElementById('cert-course-name'),
  certSerialNumber: document.getElementById('cert-serial-number'),
  certIssueDate: document.getElementById('cert-issue-date'),
  cheatSheetSearch: document.getElementById('cheat-sheet-search'),
  cheatSheetGrid: document.getElementById('cheat-sheet-grid'),
  copyTerminalBtn: document.getElementById('copy-terminal-btn'),

  // Elementi za Početnu stranu i Navigaciju
  viewLanding: document.getElementById('view-landing'),
  viewWorkshop: document.getElementById('view-workshop'),
  brandHomeBtn: document.getElementById('brand-home-btn'),
  navBtnHome: document.getElementById('nav-btn-home'),
  navBtnWorkshop: document.getElementById('nav-btn-workshop'),
  navBtnCheatSheet: document.getElementById('nav-btn-cheatsheet'),
  navBtnProfile: document.getElementById('nav-btn-profile'),
  headerProfileBtn: document.getElementById('header-profile-btn'),
  headerProfileName: document.getElementById('header-profile-name'),
  heroStartBtn: document.getElementById('hero-start-btn'),
  footerOpenWorkshop: document.getElementById('footer-btn-open-workshop'),

  // Elementi forme i kartice profila
  regForm: document.getElementById('user-registration-form'),
  regEmail: document.getElementById('reg-email'),
  regUsername: document.getElementById('reg-username'),
  regNickname: document.getElementById('reg-nickname'),
  regBirthYear: document.getElementById('reg-birthyear'),
  regOccupation: document.getElementById('reg-occupation'),
  regMotivation: document.getElementById('reg-motivation'),
  profileFormBox: document.getElementById('profile-registration-form-box'),
  profileCardBox: document.getElementById('profile-display-card-box'),
  cardUserNickname: document.getElementById('card-user-nickname'),
  cardUserUsername: document.getElementById('card-user-username'),
  cardUserBadge: document.getElementById('card-user-badge'),
  cardUserEmail: document.getElementById('card-user-email'),
  cardUserAge: document.getElementById('card-user-age'),
  cardUserOccupation: document.getElementById('card-user-occupation'),
  cardUserProgress: document.getElementById('card-user-progress'),
  cardUserMotivation: document.getElementById('card-user-motivation'),
  btnProfileContinue: document.getElementById('btn-profile-continue-learning'),
  btnEditProfile: document.getElementById('btn-edit-profile'),
  btnDeleteProfile: document.getElementById('btn-delete-profile')
};

// Lokalno pamćenje progresa po kursevima
function getStorageKey() {
  const courseId = COURSES[currentCourseIndex].id;
  return `python_od_nule_completed_${courseId}`;
}

function getCompletedLessons() {
  try {
    const key = getStorageKey();
    let saved = localStorage.getItem(key);
    
    // Za unazadnu kompatibilnost sa Kursom 1
    if (!saved && currentCourseIndex === 0) {
      saved = localStorage.getItem('python_od_nule_completed');
    }
    
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveCompletedLesson(lessonId) {
  const completed = getCompletedLessons();
  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
    localStorage.setItem(getStorageKey(), JSON.stringify(completed));
  }
  updateProgressUI();
}


/* ========================================================================= */
/* GEJMIFIKACIJA: XP POENI, DNEVNI NIZ (STREAK) I DIGITALNI SERTIFIKAT       */
/* ========================================================================= */

function updateStreakData() {
  const todayStr = new Date().toISOString().split('T')[0];
  let streakData = { streak: 1, lastDate: todayStr };

  try {
    const saved = localStorage.getItem('python_od_nule_streak_data');
    if (saved) {
      streakData = JSON.parse(saved);
      if (streakData.lastDate !== todayStr) {
        const last = new Date(streakData.lastDate);
        const curr = new Date(todayStr);
        const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          streakData.streak += 1;
        } else if (diffDays > 1) {
          streakData.streak = 1;
        }
        streakData.lastDate = todayStr;
      }
    }
    localStorage.setItem('python_od_nule_streak_data', JSON.stringify(streakData));
  } catch (e) {}

  return streakData;
}

function calculateUserGamification() {
  let totalLessonsCompleted = 0;
  if (typeof COURSES !== 'undefined') {
    COURSES.forEach(c => {
      try {
        const k = `python_od_nule_completed_${c.id}`;
        let s = localStorage.getItem(k);
        if (!s && c.id === 'osnove-1') {
          s = localStorage.getItem('python_od_nule_completed');
        }
        if (s) {
          totalLessonsCompleted += JSON.parse(s).length;
        }
      } catch (e) {}
    });
  }

  // Prebroj rešene izazove iz localStorage
  let solvedChallengesCount = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('python_od_nule_draft_')) {
        const val = localStorage.getItem(key);
        if (val && val.trim().length > 10) {
          solvedChallengesCount++;
        }
      }
    }
  } catch (e) {}

  // XP: 50 XP po lekciji + 25 XP po rešenom zadatku + 200 XP za položen Završni Ispit
  const verifiedSolvedCount = Object.keys(getSolvedChallengesMap()).length;
  const effectiveChalCount = Math.max(solvedChallengesCount, verifiedSolvedCount);
  const examBonus = (getFinalExamResult() && getFinalExamResult().passed) ? 200 : 0;
  const totalXp = (totalLessonsCompleted * 50) + (effectiveChalCount * 25) + examBonus;
  const streakInfo = updateStreakData();

  if (elements.headerUserXp) {
    elements.headerUserXp.innerText = totalXp.toLocaleString('sr-RS');
  }
  if (elements.headerUserStreak) {
    elements.headerUserStreak.innerText = streakInfo.streak;
  }

  return { totalXp, streak: streakInfo.streak, totalLessonsCompleted };
}

function updateLandingCourseProgress() {
  if (typeof COURSES === 'undefined') return;

  COURSES.forEach((c, idx) => {
    let completedCount = 0;
    try {
      const k = `python_od_nule_completed_${c.id}`;
      let s = localStorage.getItem(k);
      if (!s && c.id === 'osnove-1') {
        s = localStorage.getItem('python_od_nule_completed');
      }
      if (s) {
        completedCount = JSON.parse(s).length;
      }
    } catch (e) {}

    const total = c.lessons.length;
    const percent = Math.round((completedCount / total) * 100);

    const fillElem = document.getElementById(`landing-fill-${idx}`);
    const textElem = document.getElementById(`landing-text-${idx}`);
    const btnElem = document.querySelector(`.btn-start-course[data-course-idx="${idx}"]`);

    if (fillElem) fillElem.style.width = `${percent}%`;
    if (textElem) textElem.innerText = `${completedCount} od ${total} završeno (${percent}%)`;

    if (btnElem) {
      if (percent === 100) {
        btnElem.innerText = `🏆 Položeno! Ponovi Kurs ${idx + 1}`;
        btnElem.classList.add('btn-done');
      } else if (percent > 0) {
        btnElem.innerText = `Nastavi Kurs ${idx + 1} (${percent}%) ▶`;
      }
    }
  });
}

function openCertificateModal() {
  const profile = getUserProfile();
  const studentName = profile ? (profile.nickname || profile.username) : 'Polaznik Akademije';

  // Odredi modul za sertifikat
  let totalLessonsCompleted = 0;
  let totalLessonsAll = 0;
  COURSES.forEach(c => {
    totalLessonsAll += c.lessons.length;
    try {
      const k = `python_od_nule_completed_${c.id}`;
      let s = localStorage.getItem(k);
      if (!s && c.id === 'osnove-1') s = localStorage.getItem('python_od_nule_completed');
      if (s) totalLessonsCompleted += JSON.parse(s).length;
    } catch (e) {}
  });

  let courseTitle = `Trijada Osnova Python Programiranja (${totalLessonsCompleted}/${totalLessonsAll} Lekcija)`;
  if (totalLessonsCompleted < totalLessonsAll && COURSES[currentCourseIndex]) {
    courseTitle = COURSES[currentCourseIndex].title;
  }

  // Generiši stabilan jedinstveni serijski broj
  let certId = localStorage.getItem('python_od_nule_cert_id');
  if (!certId) {
    const randPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    const randPart2 = Math.random().toString(36).substring(2, 6).toUpperCase();
    certId = `PON-2026-${randPart}-${randPart2}`;
    localStorage.setItem('python_od_nule_cert_id', certId);
  }

  const today = new Date();
  const monthNames = ['januar','februar','mart','april','maj','jun','jul','avgust','septembar','oktobar','novembar','decembar'];
  const dateFormatted = `${today.getDate()}. ${monthNames[today.getMonth()]} ${today.getFullYear()}.`;

  if (elements.certStudentName) elements.certStudentName.innerText = studentName;
  if (elements.certCourseName) elements.certCourseName.innerText = courseTitle;
  if (elements.certSerialNumber) elements.certSerialNumber.innerText = certId;
  if (elements.certIssueDate) elements.certIssueDate.innerText = dateFormatted;

  if (elements.certificateModal) {
    elements.certificateModal.style.display = 'flex';
    elements.certificateModal.classList.add('active');
    launchConfetti();
  }
}

function closeCertificateModal() {
  if (elements.certificateModal) {
    elements.certificateModal.classList.remove('active');
    elements.certificateModal.style.display = 'none';
  }
}

function updateProgressUI() {
  const completed = getCompletedLessons();
  const currentLessons = COURSES[currentCourseIndex].lessons;
  const total = currentLessons.length;
  const count = completed.length;
  const percent = Math.round((count / total) * 100);

  if (elements.progressBar) {
    elements.progressBar.style.width = `${percent}%`;
  }
  if (elements.progressText) {
    elements.progressText.innerText = `${count} od ${total} završeno (${percent}%)`;
  }

  // Ažuriraj kvačice na listi
  document.querySelectorAll('.lesson-item').forEach(item => {
    const id = item.dataset.lessonId;
    const badge = item.querySelector('.status-check');
    if (completed.includes(id)) {
      item.classList.add('completed');
      if (badge) badge.innerHTML = '✓';
    } else {
      item.classList.remove('completed');
      if (badge) badge.innerHTML = '';
    }
  });

  // Ažuriraj stanje dugmeta "Završi lekciju"
  if (elements.completeLessonBtn && !isSandboxMode) {
    const currentId = currentLessons[currentLessonIndex].id;
    if (completed.includes(currentId)) {
      elements.completeLessonBtn.innerHTML = '<span>✅ Lekcija je završena!</span>';
      elements.completeLessonBtn.classList.add('is-done');
    } else {
      elements.completeLessonBtn.innerHTML = '<span>🎯 Označi lekciju kao završenu</span>';
      elements.completeLessonBtn.classList.remove('is-done');
    }
  }

  // Izračunaj ukupan globalni napredak kroz celu Trijadu Osnova (svih 27 lekcija)
  let totalTrijadaCompleted = 0;
  let totalTrijadaAll = 0;
  if (typeof COURSES !== 'undefined') {
    COURSES.forEach(c => {
      totalTrijadaAll += c.lessons.length;
      try {
        const k = `python_od_nule_completed_${c.id}`;
        let s = localStorage.getItem(k);
        if (!s && c.id === 'osnove-1') {
          s = localStorage.getItem('python_od_nule_completed');
        }
        if (s) {
          totalTrijadaCompleted += JSON.parse(s).length;
        }
      } catch (e) {}
    });
  }
  const trijadaPercent = totalTrijadaAll > 0 ? Math.round((totalTrijadaCompleted / totalTrijadaAll) * 100) : 0;
  if (elements.trijadaProgressText) {
    elements.trijadaProgressText.innerText = `${totalTrijadaCompleted}/${totalTrijadaAll} (${trijadaPercent}%)`;
  }

  calculateUserGamification();
  updateLandingCourseProgress();
  if (typeof updateCertificateButtonState === 'function') updateCertificateButtonState();
}

// Inicijalizacija CodeMirror editora
function initEditor() {
  const textarea = document.getElementById('code-editor');
  editor = CodeMirror.fromTextArea(textarea, {
    mode: { name: 'python', version: 3, singleLineStringErrors: false },
    theme: 'dracula',
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    autoCloseBrackets: true,
    matchBrackets: true,
    lineWrapping: true,
    extraKeys: {
      'Ctrl-Enter': runPythonCode,
      'Cmd-Enter': runPythonCode,
      'Tab': function(cm) {
        cm.replaceSelection('    ', 'end');
      }
    }
  });

  // Kada korisnik počne da menja kod, skloni crveno obeležje greške
  editor.on('change', () => {
    clearErrorHighlights();
  });
}

// Upravljanje veličinom slova (pristupačnost za starije učenike i noćni rad)
function applyFontSize(size) {
  currentFontSize = Math.min(Math.max(size, 11), 22);
  document.documentElement.style.setProperty('--editor-font-size', `${currentFontSize}px`);
  document.documentElement.style.setProperty('--terminal-font-size', `${Math.max(currentFontSize - 1, 10.5)}px`);
  if (elements.fontSizeIndicator) {
    elements.fontSizeIndicator.innerText = `${Math.round(currentFontSize)}px`;
  }
  if (editor) {
    editor.refresh();
  }
  localStorage.setItem('python_od_nule_font_size', currentFontSize.toString());
}

function initFontSize() {
  const saved = localStorage.getItem('python_od_nule_font_size');
  if (saved) {
    applyFontSize(parseFloat(saved));
  } else {
    applyFontSize(14.5);
  }
}

// Označavanje linije sa greškom u CodeMirror editoru
function clearErrorHighlights() {
  if (activeErrorLineHandle !== null && editor) {
    try {
      editor.removeLineClass(activeErrorLineHandle, 'background', 'cm-error-line');
    } catch (e) {}
    activeErrorLineHandle = null;
  }
}

function highlightErrorLine(lineNum) {
  clearErrorHighlights();
  if (editor && lineNum > 0 && lineNum <= editor.lineCount()) {
    try {
      activeErrorLineHandle = editor.addLineClass(lineNum - 1, 'background', 'cm-error-line');
      editor.scrollIntoView({ line: lineNum - 1, ch: 0 }, 100);
    } catch (e) {}
  }
}

// Virtuelni fajl sistem u memoriji (za lekcije o fajlovima i trajno pamćenje)
const virtualFS = {};

// Virtuelni Python moduli za Skulpt (da bi lekcije o os, platform i time.perf_counter radile i u brauzeru!)
const VIRTUAL_PY_MODULES = {
  'src/lib/os.py': `
name = "posix"
_cwd = "/home/ucenik/python_projekti"
_dirs = set([_cwd])

def getcwd():
    return _cwd

def listdir(path="."):
    return ["moj_program.py", "dnevnik.txt", "rezultati.txt"]

def mkdir(path):
    _dirs.add(path)

def makedirs(path, exist_ok=False):
    _dirs.add(path)

class _PathMod:
    def exists(self, p):
        return p in _dirs or p.endswith(".py")
    def join(self, *args):
        return "/".join(args)

path = _PathMod()
`,
  'src/lib/platform.py': `
def system():
    return "WebBrowser"

def machine():
    return "Python-Sandbox-64bit"

def python_version():
    return "3.12 (Skulpt)"
`,
  'src/lib/json.js': `
var $builtinmodule = function(name) {
  var mod = {};
  mod.loads = new Sk.builtin.func(function(s) {
    Sk.builtin.pyCheckArgs("loads", arguments, 1, 1);
    var jsStr = Sk.ffi.remapToJs(s);
    try {
      var parsed = JSON.parse(jsStr);
      return Sk.ffi.remapToPy(parsed);
    } catch (e) {
      throw new Sk.builtin.ValueError("Neispravan JSON format: " + e.message);
    }
  });
  mod.dumps = new Sk.builtin.func(function(obj, indent) {
    Sk.builtin.pyCheckArgs("dumps", arguments, 1, 2);
    var jsObj = Sk.ffi.remapToJs(obj);
    var sp = (indent !== undefined && indent !== Sk.builtin.none.none$) ? Sk.ffi.remapToJs(indent) : undefined;
    try {
      return new Sk.builtin.str(JSON.stringify(jsObj, null, sp));
    } catch (e) {
      throw new Sk.builtin.TypeError("Objekat ne može da se konvertuje u JSON: " + e.message);
    }
  });
  return mod;
};
`
};

// Skulpt uvoz fajlova i biblioteka
function builtinRead(x) {
  // Izvuci čisto ime fajla ako Skulpt pošalje reprezentaciju objekta
  const match = x.match(/'([^']+)'/);
  const fname = match ? match[1] : x;

  if (virtualFS[fname] !== undefined) return virtualFS[fname];
  if (virtualFS[x] !== undefined) return virtualFS[x];
  if (VIRTUAL_PY_MODULES[x] !== undefined) return VIRTUAL_PY_MODULES[x];
  if (Sk.builtinFiles && Sk.builtinFiles["files"] && Sk.builtinFiles["files"][x] !== undefined) {
    let modCode = Sk.builtinFiles["files"][x];
    // Dodaj perf_counter u Skulpt time modul ako nedostaje
    if (x === 'src/lib/time.js' && !modCode.includes('perf_counter')) {
      modCode = modCode.replace(/,a\};$/, ',a.perf_counter=a.time,a};');
    }
    // Dodaj re.sub u Skulpt re modul ako nedostaje
    if (x === 'src/lib/re.js' && !modCode.includes('mod.sub=')) {
      modCode = modCode.replace(/,mod\};$/, ',mod.sub=new Sk.builtin.func(function(pat,repl,str,count){Sk.builtin.pyCheckArgs("sub",arguments,3,5);var p=Sk.ffi.remapToJs(pat),r=Sk.ffi.remapToJs(repl),s=Sk.ffi.remapToJs(str),c=(count!==undefined)?Sk.ffi.remapToJs(count):0;var rx=new RegExp(p,"g");if(c>0){var n=0;return new Sk.builtin.str(s.replace(rx,function(m){return(++n<=c)?r:m;}));}return new Sk.builtin.str(s.replace(rx,r));}),mod};');
    }
    // Ispravi Skulpt-ov interni bug gde je sys.version JS string umesto Python str
    if (x === 'src/builtin/sys.js') {
      modCode = modCode.replace('c.version="3.7(ish) [Skulpt]"', 'c.version=new Sk.builtin.str("3.12 (Skulpt Sandbox)")');
    }
    return modCode;
  }
  // Ako je tekstualni fajl koji tek treba da se kreira
  if (x.endsWith('.txt') || x.endsWith('.csv') || x.endsWith('.dat') || x.endsWith('.json') || fname.endsWith('.txt') || fname.endsWith('.csv') || fname.endsWith('.json')) {
    return "";
  }
  throw "Fajl ili modul nije pronađen: '" + x + "'";
}

// Ispis u konzolu
function writeToConsole(text, isError = false) {
  const span = document.createElement('span');
  if (isError) {
    span.className = 'console-error';
  }
  span.innerText = text;
  elements.outputConsole.appendChild(span);
  elements.outputConsole.scrollTop = elements.outputConsole.scrollHeight;
}

// Obrada Python input() komande — INLINE direktno u terminalu (nikada ne zaklanja ispis!)
function promptHandler(promptMessage) {
  return new Promise((resolve) => {
    currentInputResolver = resolve;

    // Osiguraj da je tab Terminal aktivan da bi učenik video ceo ispis
    const tabTerm = document.getElementById('tab-terminal-btn');
    const tabFiles = document.getElementById('tab-files-btn');
    const vfsBox = document.getElementById('vfs-explorer');
    if (tabTerm && tabFiles && vfsBox && elements.outputConsole) {
      tabTerm.classList.add('active');
      tabFiles.classList.remove('active');
      elements.outputConsole.style.display = 'block';
      vfsBox.style.display = 'none';
    }

    // Prikaži prompt u konzoli i skroluj na samo dno
    if (promptMessage) {
      writeToConsole(promptMessage);
    }

    const inlineBar = document.getElementById('inline-terminal-input-bar');
    const inlineInput = document.getElementById('inline-terminal-input');
    if (inlineBar && inlineInput) {
      inlineInput.value = '';
      inlineInput.placeholder = (promptMessage && promptMessage.trim())
        ? `${promptMessage.trim()} (pritisni Enter)`
        : 'Ukucaj odgovor ovde i pritisni Enter...';
      inlineBar.style.display = 'flex';
      elements.outputConsole.scrollTop = elements.outputConsole.scrollHeight;
      setTimeout(() => inlineInput.focus(), 30);
    } else if (elements.inputDialog && elements.inputField) {
      // Fallback ako inline bar nije prisutan
      elements.inputPromptText.innerText = promptMessage || "Unesi vrednost:";
      elements.inputField.value = '';
      elements.inputDialog.classList.add('active');
      setTimeout(() => elements.inputField.focus(), 50);
    }
  });
}

function submitCustomInput() {
  if (!currentInputResolver) return;
  const inlineBar = document.getElementById('inline-terminal-input-bar');
  const inlineInput = document.getElementById('inline-terminal-input');
  let value = '';

  if (inlineBar && inlineBar.style.display !== 'none' && inlineInput) {
    value = inlineInput.value;
    inlineBar.style.display = 'none';
  } else if (elements.inputField) {
    value = elements.inputField.value;
    if (elements.inputDialog) elements.inputDialog.classList.remove('active');
  }

  // Prikaži uneti tekst u konzoli istaknuto zelenom bojom
  const span = document.createElement('span');
  span.className = 'console-user-echo';
  span.innerText = value + '\n';
  elements.outputConsole.appendChild(span);
  elements.outputConsole.scrollTop = elements.outputConsole.scrollHeight;

  // Resetuj tajmer izvršavanja kako vreme razmišljanja učenika ne bi aktiviralo TimeLimitError
  if (typeof Sk !== 'undefined') {
    Sk.execStart = new Date();
  }
  const resolve = currentInputResolver;
  currentInputResolver = null;
  resolve(value);
}

function cancelCustomInput(reasonText = '[Korisnik je otkazao unos]') {
  const inlineBar = document.getElementById('inline-terminal-input-bar');
  if (inlineBar) inlineBar.style.display = 'none';
  if (elements.inputDialog) elements.inputDialog.classList.remove('active');
  if (currentInputResolver) {
    const resolve = currentInputResolver;
    currentInputResolver = null;
    writeToConsole(reasonText + '\n', true);
    resolve('');
  }
}

// Prijateljsko objašnjenje Python grešaka za početnike i naprednije
function getFriendlyErrorExplanation(errorStr, code = '') {
  const lineMatch = errorStr.match(/(?:on line|line) (\d+)/i);
  let problemLine = '';
  if (lineMatch && code) {
    const lineNum = parseInt(lineMatch[1], 10);
    const lines = code.split('\n');
    if (lines[lineNum - 1] !== undefined) {
      problemLine = lines[lineNum - 1].trim();
    }
  }

  // 1. Detekcija zaboravljene dvotačke na kraju reda
  if (errorStr.includes('SyntaxError') && problemLine) {
    if (/^(?:if|elif|else|for|while|def|try|except|finally)\b/.test(problemLine) && !problemLine.endsWith(':')) {
      return `💡 Tačna dijagnoza: Na kraju linije "${problemLine}" nedostaje dvotačka (:)\n  👉 Rešenje: Dodaj dvotačku : na sam kraj tog reda i pokreni ponovo!`;
    }
  }

  // 2. Opšte dijagnoze sa korisnim savetima
  if (errorStr.includes('SyntaxError')) {
    return '💡 Savet: Python ne razume ovu liniju! Najčešći uzroci:\n  1) Zaboravljen navodnik (" ili \') ili zatvorena zagrada ()\n  2) Zaboravljena dvotačka (:) na kraju if/for/while/def linije\n  3) Zaboravljeno uvlačenje koda (pritisni Tab ili 4 razmaka na liniji ispod dvotačke).';
  } else if (errorStr.includes('IndentationError')) {
    return '💡 Savet: Python traži precizno uvlačenje koda! Linije unutar if, for, while ili def bloka moraju biti uvučene za 4 razmaka (ili jedan Tab).';
  } else if (errorStr.includes('NameError')) {
    return '💡 Savet: Koristiš ime koje računar još ne poznaje. Proveri da li si napravio slovnu grešku u imenu promenljive ili si zaboravio navodnike oko teksta (npr. print("tekst") a ne print(tekst)).';
  } else if (errorStr.includes('TypeError')) {
    return '💡 Savet: Pokušavaš da spojiš nespojive tipove (npr. sabiraš tekst i broj). Zapamti da input() uvek vraća tekst – ako ti treba broj, upotrebi int(input(...)) ili float(input(...)).';
  } else if (errorStr.includes('ValueError')) {
    return '💡 Savet: Uneta vrednost nije odgovarajuća! Ako program očekuje int(input()), a korisnik ukuca slova (npr. "pet" umesto "5"), računar se zbuni i prijavi ValueError.';
  } else if (errorStr.includes('IndexError')) {
    return '💡 Savet: Pokušavaš da dohvatiš element koji ne postoji u listi! Zapamti: indeksi uvek počinju od 0, a poslednji element je na indeksu len(lista) - 1 ili lista[-1].';
  } else if (errorStr.includes('KeyError')) {
    return '💡 Savet: Tražiš ključ koji ne postoji u rečniku! Koristi metodu .get("kljuc", podrazumevano) umesto direktnih uglastih zagrada.';
  } else if (errorStr.includes('ZeroDivisionError')) {
    return '💡 Savet: Pokušao si da podeliš broj nulom! Matematički deljenje nulom nije dozvoljeno.';
  } else if (errorStr.includes('AttributeError')) {
    return '💡 Savet: Pokušao si da pozoveš funkciju koja ne postoji za ovaj tip podatka (npr. tekst nema metodu .append, već samo lista, ili si napravio slovnu grešku u imenu metode).';
  } else if (errorStr.includes('TimeLimitError') || errorStr.includes('exceeded run time limit')) {
    return '💡 Zaštita sistema: Program se izvršavao duže od 8 sekundi i automatski je zaustavljen!\n  👉 Uzrok: Najverovatnije je u pitanju beskonačna petlja (while True) koja nema uslov za izlazak (break) ili se brojač ne menja.';
  } else if (errorStr.includes('FileNotFoundError')) {
    return '💡 Savet: Fajl koji pokušavaš da otvoriš ("r") još ne postoji na disku! Prvo moraš da ga upišeš u režimu za pisanje ("w" ili "a") pre nego što ga čitaš.';
  }
  return '';
}

// Pokretanje koda
function runPythonCode() {
  if (isRunning) return;
  
  clearErrorHighlights();
  saveCurrentChallengeDraft();
  
  const code = editor.getValue();
  lastRunOutputBuffer = '';
  lastRunHadError = false;
  elements.outputConsole.innerHTML = '';
  writeToConsole("▶ Pokrećem program...\n", false);
  
  elements.runBtn.disabled = true;
  elements.runBtn.classList.add('loading');
  elements.stopBtn.style.display = 'inline-flex';
  isRunning = true;
  
  // Konfiguracija Skulpta (sa podrškom za virtualni fajl sistem i zaštitom od beskonačnih petlji)
  Sk.pre = "console-output";
  Sk.execLimit = 15000; // Zaštita: maksimalno 15 sekundi izvršavanja (pauzira se tokom input() unosa)

  // Python 3 kompatibilnost za Skulpt (FileNotFoundError i open(..., encoding="utf-8"))
  if (Sk.builtins && !Sk.builtins.FileNotFoundError) {
    Sk.builtins.FileNotFoundError = Sk.builtin.IOError;
  }
  if (Sk.builtin && Sk.builtin.open && !Sk.builtin.open._ponPatched) {
    const _origOpen = Sk.builtin.open;
    const _openFn = function(filename, mode, buffering, encoding) {
      return _origOpen(filename, mode, buffering);
    };
    _openFn.co_varnames = ['file', 'mode', 'buffering', 'encoding'];
    _openFn.$defaults = [new Sk.builtin.str('r'), new Sk.builtin.int_(-1), new Sk.builtin.str('utf-8')];
    const _patchedOpen = new Sk.builtin.func(_openFn);
    _patchedOpen._ponPatched = true;
    Sk.builtin.open = _patchedOpen;
    if (Sk.builtins) Sk.builtins.open = _patchedOpen;
  }
  Sk.configure({
    output: (text) => { lastRunOutputBuffer += text; writeToConsole(text, false); },
    read: builtinRead,
    nonreadopen: true,
    filewrite: function(file, data) {
      const str = file.toString();
      const match = str.match(/'([^']+)'/);
      const filename = file.name || (match ? match[1] : str);
      const mode = file.mode ? (file.mode.v || file.mode) : 'a';
      
      // Ako je 'w' (pisanje iz početka), isprazni prethodni sadržaj pri prvom upisu
      if ((mode === 'w' || mode === 'wb') && !file._hasBeenWritten) {
        virtualFS[filename] = '';
        file._hasBeenWritten = true;
      }
      
      virtualFS[filename] = (virtualFS[filename] || "") + data;
      if (typeof renderVirtualFilesUI === "function") renderVirtualFilesUI();
    },
    inputfun: promptHandler,
    inputfunTakesPrompt: true,
    __future__: Sk.python3
  });

  const startTime = performance.now();

  const promise = Sk.misceval.asyncToPromise(() => {
    return Sk.importMainWithBody("<stdin>", false, code, true);
  });

  promise.then(() => {
    const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
    writeToConsole(`\n[Program je uspešno završen za ${elapsed}s] ✨\n`);

    // Ako je uspešno završen mini-projekat (Zadatak 3) ili završna igra, proslavi sa konfetama!
    if (activeChallengeIndex === 2 || currentLessonIndex === 8) {
      launchConfetti();
      showToast("Izvrsno! Mini-projekat se uspešno izvršio bez grešaka! 🚀", "🎉");
    }
  }).catch((err) => {
    lastRunHadError = true;
    const errText = err.toString();
    writeToConsole(`\n⚠️ Greška u programu:\n${errText}\n`, true);

    // Izdvoj tačan broj linije i obeleži je u CodeMirror editoru
    const lineMatch = errText.match(/(?:on line|line) (\d+)/i);
    if (lineMatch && lineMatch[1]) {
      const lineNum = parseInt(lineMatch[1], 10);
      highlightErrorLine(lineNum);
    }

    const friendlyTip = getFriendlyErrorExplanation(errText, code);
    if (friendlyTip) {
      writeToConsole(`\n${friendlyTip}\n`, true);
    }
  }).finally(() => {
    elements.runBtn.disabled = false;
    elements.runBtn.classList.remove('loading');
    elements.stopBtn.style.display = 'none';
    isRunning = false;
  });
}

function stopExecution() {
  if (currentInputResolver) {
    currentInputResolver("");
    currentInputResolver = null;
  }
  elements.inputDialog.classList.remove('active');
  const _ib = document.getElementById('inline-terminal-input-bar');
  if (_ib) _ib.style.display = 'none';
  writeToConsole("\n⛔ Program je ručno prekinut.\n", true);
  elements.runBtn.disabled = false;
  elements.runBtn.classList.remove('loading');
  elements.stopBtn.style.display = 'none';
  isRunning = false;
}

// Prikaz notifikacije
function showToast(message, icon = '🎉') {
  if (!elements.notificationToast) return;
  elements.notificationToast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  elements.notificationToast.classList.add('show');
  setTimeout(() => {
    elements.notificationToast.classList.remove('show');
  }, 3500);
}

// Pomoćne funkcije za pamćenje nacrta koda po svakom zadatku (sprečavanje slučajnog gubitka koda)
function getDraftKey(courseIdx, lessonIdx, chalIdx) {
  return `python_od_nule_draft_c${courseIdx}_l${lessonIdx}_ch${chalIdx}`;
}

function loadSavedDraftsFromStorage() {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('python_od_nule_draft_')) {
        userChallengeDrafts[k] = localStorage.getItem(k);
      }
    }
  } catch (e) {}
}

function updateEditorModeBadge(isChallenge, labelText) {
  const badge = document.getElementById('editor-mode-badge');
  if (!badge) return;
  if (isSandboxMode) {
    badge.className = 'editor-mode-badge mode-demo';
    badge.innerText = '🧪 Igralište';
  } else if (isChallenge) {
    badge.className = 'editor-mode-badge mode-challenge';
    badge.innerText = `🎯 ${labelText || ('Zadatak ' + (activeChallengeIndex + 1))}`;
  } else {
    badge.className = 'editor-mode-badge mode-demo';
    badge.innerText = '📘 Primer lekcije';
  }
}

function saveCurrentChallengeDraft() {
  if (editor && !isSandboxMode && isEditingChallenge) {
    const key = getDraftKey(currentCourseIndex, currentLessonIndex, activeChallengeIndex);
    const val = editor.getValue();
    const lesson = COURSES[currentCourseIndex] && COURSES[currentCourseIndex].lessons[currentLessonIndex];
    const chal = lesson && lesson.challenges && lesson.challenges[activeChallengeIndex];
    const demoCode = (lesson && lesson.starterCode) || '';
    const orig = (chal && chal.starter) || '';

    // Nikada ne čuvaj demo kod lekcije kao nacrt zadatka!
    if (val.trim() === demoCode.trim()) return;

    userChallengeDrafts[key] = val;
    try {
      if (val.trim() && val.trim() !== orig.trim()) {
        localStorage.setItem(key, val);
      }
    } catch (e) {}
  }
}

// Funkcija za preuzimanje koda na lokalni disk kao .py fajl
function downloadCurrentCode() {
  if (!editor) return;
  const code = editor.getValue();
  const currentLessons = COURSES[currentCourseIndex].lessons;
  const lesson = currentLessons[currentLessonIndex];
  
  let baseName = "moj_program";
  if (isSandboxMode) {
    baseName = "pesak_eksperiment";
  } else if (lesson) {
    const chal = lesson.challenges && lesson.challenges[activeChallengeIndex];
    if (chal && chal.title) {
      baseName = chal.title.split(':')[1] || chal.title;
    } else {
      baseName = lesson.title;
    }
  }

  // Bezbedno ime fajla (bez razmaka i specijalnih karaktera)
  const safeName = baseName.trim()
    .toLowerCase()
    .replace(/[šđčćžŠĐČĆŽ]/g, (c) => ({'š':'s','đ':'dj','č':'c','ć':'c','ž':'z','Š':'s','Đ':'dj','Č':'c','Ć':'c','Ž':'z'}[c] || c))
    .replace(/[^a-z0-9_-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');

  const filename = `${safeName || 'python_program'}.py`;
  const blob = new Blob([code], { type: 'text/x-python;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Kod je preuzet kao "${filename}"! 💾`, "📥");
}

// Čiste, lagane JS konfete za slavlje uspeha (bez spoljnih biblioteka)
function launchConfetti() {
  const canvas = elements.confettiCanvas || document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#38bdf8', '#facc15', '#4ade80', '#c084fc', '#f87171', '#fb923c'];
  const particles = [];
  const count = 75;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.4,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2.5,
      speedX: (Math.random() - 0.5) * 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 6,
      opacity: 1
    });
  }

  let animationFrame;
  const startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;
      if (elapsed > 1800) {
        p.opacity = Math.max(0, p.opacity - 0.025);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (elapsed < 2600) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  animate();
}

// Renderovanje izazova i zadataka (podrška za višestruke zadatke i pamćenje rada)
function renderChallengesSection(lesson) {
  if (!elements.challengeBox) return;

  const challenges = lesson.challenges || (lesson.challenge ? [lesson.challenge] : []);
  if (!challenges.length) {
    elements.challengeBox.style.display = 'none';
    return;
  }

  elements.challengeBox.style.display = 'block';
  activeChallengeIndex = 0;

  function updateChallengeView() {
    const activeChal = challenges[activeChallengeIndex];
    
    // Generiši tabove ako ima više od jednog zadatka uz oznaku nacrta
    let tabsHtml = '';
    if (challenges.length > 1) {
      tabsHtml = `
        <div class="challenge-tabs-bar">
          ${challenges.map((c, i) => {
            const draftKey = getDraftKey(currentCourseIndex, currentLessonIndex, i);
            const hasDraft = userChallengeDrafts[draftKey] && userChallengeDrafts[draftKey] !== c.starter;
            return `
              <button class="chal-tab-btn ${i === activeChallengeIndex ? 'active' : ''}" data-chal-idx="${i}">
                ${c.title || ('Zadatak ' + (i + 1))}
                ${isChallengeSolved(currentCourseIndex, currentLessonIndex, i) ? '<span class="chal-solved-badge" title="Zadatak rešen!">✅</span>' : (hasDraft ? '<span class="draft-dot" title="Tvoj sačuvan kod"></span>' : '')}
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    elements.challengeBox.innerHTML = `
      <div class="challenge-header">
        <span class="chal-icon">🎯</span>
        <h3>${activeChal.title || 'Tvoj izazov: Probaj sam!'}</h3>
      </div>
      ${tabsHtml}
      <p class="challenge-instruction">${activeChal.instruction}</p>
      <div class="challenge-actions">
        <button id="btn-load-chal" class="btn btn-secondary btn-sm" title="Postavi šablon ovog zadatka u editor">📥 Ubaci u editor</button>
        <button id="btn-check-chal" class="btn btn-check-chal btn-sm" title="Pokreni i automatski proveri svoje rešenje">✅ Proveri zadatak</button>
        <button id="btn-toggle-hint" class="btn btn-ghost btn-sm">💡 Nagoveštaj</button>
        <button id="btn-toggle-sol" class="btn btn-ghost btn-sm">👀 Prikaži rešenje</button>
        <button id="btn-reset-chal" class="btn btn-ghost btn-sm" title="Vrati originalni početni zadatak">🔄 Resetuj zadatak</button>
      </div>
      <div id="chal-check-feedback" class="chal-check-feedback" style="display: none;"></div>
      <div id="chal-hint-body" class="reveal-box" style="display: none;">
        <em>Nagoveštaj:</em> ${activeChal.hint}
      </div>
      <div id="chal-sol-body" class="reveal-box solution-box" style="display: none;">
        <strong>Rešenje zadatka:</strong>
        <pre><code>${escapeHTML(activeChal.solution)}</code></pre>
        <button id="btn-copy-solution" class="btn btn-primary btn-sm" style="margin-top: 8px;">Kopiraj rešenje u editor</button>
      </div>
    `;

    // Poveži tabove sa čuvanjem koda pri promeni
    elements.challengeBox.querySelectorAll('.chal-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const nextIdx = parseInt(btn.dataset.chalIdx);
        if (nextIdx === activeChallengeIndex && isEditingChallenge) return;

        saveCurrentChallengeDraft();
        clearErrorHighlights();

        activeChallengeIndex = nextIdx;
        isEditingChallenge = true;
        updateChallengeView();

        const nextDraftKey = getDraftKey(currentCourseIndex, currentLessonIndex, nextIdx);
        const savedDraft = userChallengeDrafts[nextDraftKey];
        const demoCode = (lesson.starterCode || '').trim();
        if (savedDraft !== undefined && savedDraft.trim() !== demoCode) {
          editor.setValue(savedDraft);
        } else {
          editor.setValue(challenges[nextIdx].starter);
        }
        updateEditorModeBadge(true, `Zadatak ${nextIdx + 1}`);
        if (editor) editor.focus();
      });
    });

    // Poveži dugme "📥 Ubaci u editor" — UVEK ubacuje šablon izabranog zadatka (ili pravi nacrt tog zadatka, NIKAD demo lekcije!)
    document.getElementById('btn-load-chal').addEventListener('click', () => {
      const draftKey = getDraftKey(currentCourseIndex, currentLessonIndex, activeChallengeIndex);
      const savedDraft = userChallengeDrafts[draftKey];
      const demoCode = (lesson.starterCode || '').trim();
      const useSaved = savedDraft && savedDraft.trim() !== demoCode && savedDraft.trim() !== (activeChal.starter || '').trim();
      const codeToLoad = useSaved ? savedDraft : activeChal.starter;

      isEditingChallenge = true;
      clearErrorHighlights();
      editor.setValue(codeToLoad);
      editor.refresh();
      editor.focus();
      updateEditorModeBadge(true, `Zadatak ${activeChallengeIndex + 1}`);
      showToast(`Zadatak "${activeChal.title || 'Zadatak'}" je ubačen u editor! ✍️`, "📥");
    });

    // Poveži dugme "✅ Proveri zadatak" (automatska provera rešenja)
    const checkBtn = document.getElementById('btn-check-chal');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        verifyCurrentChallenge(lesson, activeChal, updateChallengeView);
      });
    }

    document.getElementById('btn-reset-chal').addEventListener('click', () => {
      const draftKey = getDraftKey(currentCourseIndex, currentLessonIndex, activeChallengeIndex);
      delete userChallengeDrafts[draftKey];
      try { localStorage.removeItem(draftKey); } catch (e) {}
      editor.setValue(activeChal.starter);
      updateChallengeView();
      showToast("Zadatak je vraćen na originalni početni kod.", "🔄");
    });

    const hintBody = document.getElementById('chal-hint-body');
    document.getElementById('btn-toggle-hint').addEventListener('click', () => {
      hintBody.style.display = (hintBody.style.display === 'none') ? 'block' : 'none';
    });

    const solBody = document.getElementById('chal-sol-body');
    document.getElementById('btn-toggle-sol').addEventListener('click', () => {
      solBody.style.display = (solBody.style.display === 'none') ? 'block' : 'none';
    });

    document.getElementById('btn-copy-solution').addEventListener('click', () => {
      editor.setValue(activeChal.solution);
      saveCurrentChallengeDraft();
      showToast("Rešenje je ubačeno u editor! Pokreni ga i analiziraj.", "🚀");
    });
  }

  updateChallengeView();
}

// Učitavanje određene lekcije

/* ========================================================================= */
/* UNIVERZALNI KVIZ SISTEM (Podrška za Kurs 1, Kurs 2 i višestruka pitanja Kursa 3) */
/* ========================================================================= */
function normalizeQuizData(quizData) {
  if (!quizData) return [];
  const rawList = Array.isArray(quizData) ? quizData : [quizData];
  return rawList.map((item, qIdx) => {
    let options = [];
    if (Array.isArray(item.options)) {
      options = item.options.map((opt, oIdx) => {
        if (typeof opt === 'string') {
          const isCorrect = (item.correct === oIdx || item.correctIndex === oIdx);
          const correctLetter = String.fromCharCode(65 + (item.correct ?? item.correctIndex ?? 0));
          return {
            text: opt,
            correct: isCorrect,
            explanation: isCorrect 
              ? (item.explanation || 'Bravo! Tačan odgovor! 🎉') 
              : (item.explanation ? `Nije tačno. Tačan odgovor je opcija ${correctLetter}: ${item.explanation}` : 'Netačan odgovor.')
          };
        } else if (typeof opt === 'object' && opt !== null) {
          return {
            text: opt.text || '',
            correct: !!opt.correct,
            explanation: opt.explanation || (opt.correct ? 'Tačno! 🎉' : 'Nije tačno.')
          };
        }
        return { text: String(opt), correct: false, explanation: '' };
      });
    }
    return {
      question: item.question || `Pitanje ${qIdx + 1}:`,
      options: options
    };
  });
}

function renderLessonQuiz(lesson) {
  if (!elements.quizBox) return;

  const quizList = normalizeQuizData(lesson.quiz);
  if (quizList.length === 0) {
    elements.quizBox.style.display = 'none';
    return;
  }

  elements.quizBox.style.display = 'block';
  const solvedQuestions = new Set();

  let html = `
    <div class="quiz-header" style="justify-content: space-between; width: 100%;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="quiz-icon">❓</span>
        <h3>Brzi Kviz: Proveri znanje ${quizList.length > 1 ? `(${quizList.length} pitanja)` : ''}</h3>
      </div>
      <span id="quiz-score-pill" class="badge-tag" style="margin: 0;">Tačno: 0 / ${quizList.length}</span>
    </div>
  `;

  quizList.forEach((q, qIndex) => {
    const qNumLabel = quizList.length > 1 ? `<div class="quiz-q-num" style="font-size: 0.78rem; font-weight: 700; color: #38bdf8; margin-bottom: 4px;">Pitanje ${qIndex + 1} od ${quizList.length}:</div>` : '';
    const optionsHtml = q.options.map((opt, oIndex) => `
      <button class="quiz-option" data-q-idx="${qIndex}" data-opt-idx="${oIndex}">
        <span class="opt-letter">${String.fromCharCode(65 + oIndex)}</span>
        <span class="opt-text">${escapeHTML(opt.text)}</span>
      </button>
    `).join('');

    html += `
      <div class="quiz-question-container" data-q-block="${qIndex}" style="${qIndex > 0 ? 'margin-top: 22px; padding-top: 16px; border-top: 1px dashed rgba(255,255,255,0.12);' : ''}">
        ${qNumLabel}
        <p class="quiz-question" style="white-space: pre-line;">${escapeHTML(q.question)}</p>
        <div class="quiz-options-container">${optionsHtml}</div>
        <div id="quiz-feedback-${qIndex}" class="quiz-feedback" style="display: none; margin-top: 10px;"></div>
      </div>
    `;
  });

  elements.quizBox.innerHTML = html;
  const scorePill = document.getElementById('quiz-score-pill');

  quizList.forEach((q, qIndex) => {
    const container = elements.quizBox.querySelector(`[data-q-block="${qIndex}"]`);
    if (!container) return;
    const optButtons = container.querySelectorAll('.quiz-option');
    const feedbackDiv = document.getElementById(`quiz-feedback-${qIndex}`);

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const oIdx = parseInt(btn.dataset.optIdx, 10);
        const selected = q.options[oIdx];

        optButtons.forEach(b => b.classList.remove('selected', 'correct', 'wrong'));

        if (selected.correct) {
          btn.classList.add('correct');
          solvedQuestions.add(qIndex);
          if (feedbackDiv) {
            feedbackDiv.className = 'quiz-feedback correct-feedback';
            feedbackDiv.innerHTML = `<strong>Tačno! 🎉</strong> ${selected.explanation}`;
            feedbackDiv.style.display = 'block';
          }
          if (scorePill) {
            scorePill.innerText = `Tačno: ${solvedQuestions.size} / ${quizList.length}`;
            if (solvedQuestions.size === quizList.length) {
              scorePill.style.background = 'rgba(16, 185, 129, 0.25)';
              scorePill.style.color = '#4ade80';
            }
          }

          if (solvedQuestions.size === quizList.length) {
            saveCompletedLesson(lesson.id);
            launchConfetti();
            showToast(`Savršeno! Sva ${quizList.length} pitanja tačna — lekcija je završena! 🏆`, '⭐');
          } else {
            showToast(`Tačan odgovor! (${solvedQuestions.size}/${quizList.length}) Nastavi dalje!`, '✅');
          }
        } else {
          btn.classList.add('wrong');
          if (feedbackDiv) {
            feedbackDiv.className = 'quiz-feedback wrong-feedback';
            feedbackDiv.innerHTML = `<strong>Nije tačno:</strong> ${selected.explanation}`;
            feedbackDiv.style.display = 'block';
          }
        }
      });
    });
  });
}


function attachTryExampleButtons() {
  if (!elements.lessonContent) return;
  elements.lessonContent.querySelectorAll('pre').forEach(pre => {
    if (pre.querySelector('.try-example-btn')) return;
    const codeEl = pre.querySelector('code');
    if (!codeEl) return;
    const rawCode = codeEl.innerText.trim();
    if (!rawCode) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'try-example-btn';
    btn.title = 'Ubaci ovaj primer u editor da ga odmah pokreneš i menjaš';
    btn.innerText = '▶ Isprobaj u editoru';
    btn.addEventListener('click', () => {
      if (editor) {
        saveCurrentChallengeDraft();
        isEditingChallenge = false;
        clearErrorHighlights();
        editor.setValue(rawCode + '\n');
        editor.refresh();
        editor.focus();
        updateEditorModeBadge(false);
        showToast('Primer je ubačen u editor! Klikni „▶ Pokreni kod” da ga testiraš.', '📘');
      }
    });
    pre.appendChild(btn);
  });
}

function renderLessonVideo(lesson) {
  const box = document.getElementById('lesson-video-box');
  const container = document.getElementById('lesson-video-container');
  const toggleBtn = document.getElementById('btn-toggle-lesson-video');
  const arrow = document.getElementById('video-toggle-arrow');
  if (!box || !container || !toggleBtn) return;

  const hasYoutube = !!(lesson && lesson.youtubeId);
  const hasLocal = !!(lesson && lesson.localVideoUrl);

  if (!hasYoutube && !hasLocal) {
    box.style.display = 'none';
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  box.style.display = 'block';
  container.style.display = 'none';
  if (arrow) arrow.innerText = '▼ Prikaži video';

  if (hasYoutube) {
    container.innerHTML = `
      <div class="lesson-video-responsive">
        <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(lesson.youtubeId)}?rel=0"
                title="${escapeHTML(lesson.title)}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
    `;
  } else {
    const posterAttr = lesson.videoPoster ? `poster="${lesson.videoPoster}"` : '';
    const posterImg = lesson.videoPoster ? `<img src="${lesson.videoPoster}" alt="${escapeHTML(lesson.title)}" style="width:100%; border-radius:10px; display:block; margin-bottom:10px; border:1px solid rgba(148,163,184,0.3);">` : '';
    container.innerHTML = `
      <div class="lesson-video-responsive">
        <video controls preload="metadata" ${posterAttr}>
          <source src="${lesson.localVideoUrl}" type="video/mp4">
          Tvoj pretraživač ne podržava HTML5 video.
        </video>
      </div>
    `;
    const vidSrc = container.querySelector('source');
    if (vidSrc) {
      vidSrc.addEventListener('error', () => {
        container.innerHTML = `
          <div style="padding:14px; text-align:center;">
            ${posterImg}
            <div style="font-size:0.9rem; font-weight:600; color:var(--accent-python);">
              🎬 Video lekcija se uskoro objavljuje na našem YouTube kanalu!
            </div>
            <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
              U međuvremenu slobodno isprobaj interaktivne primere, 4 zadatka i kviz direktno u radionici ispod.
            </div>
          </div>
        `;
      });
    }
  }

  toggleBtn.onclick = () => {
    const isHidden = container.style.display === 'none';
    container.style.display = isHidden ? 'block' : 'none';
    if (arrow) arrow.innerText = isHidden ? '▲ Sakrij video' : '▼ Prikaži video';
    if (!isHidden) {
      const vid = container.querySelector('video');
      if (vid) vid.pause();
    }
  };
}

function loadLesson(index) {
  const currentLessons = COURSES[currentCourseIndex].lessons;
  if (index < 0 || index >= currentLessons.length) return;
  
  if (editor && !isSandboxMode) {
    saveCurrentChallengeDraft();
  }
  clearErrorHighlights();

  isSandboxMode = false;
  currentLessonIndex = index;
  const lesson = currentLessons[index];

  // Ažuriraj aktivnu stavku u meniju
  document.querySelectorAll('.lesson-item').forEach((item, idx) => {
    item.classList.toggle('active', idx === index);
  });

  // Glavni naslov i uvod
  elements.lessonTitle.innerHTML = `${lesson.icon} ${lesson.title}`;
  elements.lessonCategory.innerText = lesson.category;
  elements.lessonContent.innerHTML = lesson.content;
  renderLessonVideo(lesson);
  attachTryExampleButtons();

  // Pro tip (za iskusnije)
  if (lesson.proTip && elements.proTipSection) {
    elements.proTipSection.style.display = 'block';
    elements.proTipSection.innerHTML = `
      <div class="pro-tip-header">
        <span class="pro-icon">💡</span>
        <h4>${lesson.proTip.title}</h4>
      </div>
      <div class="pro-tip-content">${lesson.proTip.content}</div>
    `;
  } else if (elements.proTipSection) {
    elements.proTipSection.style.display = 'none';
  }

  // Višestruki izazovi / Zadaci
  renderChallengesSection(lesson);

  // Kviz (Automatska podrška za jedno ili više pitanja u svim kursevima)
  renderLessonQuiz(lesson);

  // Postavi početni primer lekcije u editor (odvojeno od zadataka!)
  isEditingChallenge = false;
  if (editor) {
    editor.setValue(lesson.starterCode);
    editor.clearHistory();
  }
  updateEditorModeBadge(false);

  // Očisti konzolu
  elements.outputConsole.innerHTML = '<span class="console-placeholder">Klikni na dugme "▶ Pokreni kod" iznad da vidiš rezultat ovde...</span>';

  // Navigaciona dugmad
  elements.prevLessonBtn.disabled = (index === 0);
  elements.nextLessonBtn.disabled = (index === currentLessons.length - 1);

  updateProgressUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Promena aktivnog kursa

function getFirstIncompleteLessonIndex(courseIdx) {
  if (typeof COURSES === 'undefined' || !COURSES[courseIdx]) return 0;
  const course = COURSES[courseIdx];
  try {
    const k = `python_od_nule_completed_${course.id}`;
    let s = localStorage.getItem(k);
    if (!s && course.id === 'osnove-1') s = localStorage.getItem('python_od_nule_completed');
    const completed = s ? JSON.parse(s) : [];
    for (let i = 0; i < course.lessons.length; i++) {
      if (!completed.includes(course.lessons[i].id)) {
        return i;
      }
    }
  } catch (e) {}
  return 0;
}

function switchCourse(newCourseIndex) {
  if (newCourseIndex < 0 || newCourseIndex >= COURSES.length) return;
  
  currentCourseIndex = newCourseIndex;
  localStorage.setItem('python_od_nule_active_course', newCourseIndex.toString());

  if (elements.courseSelect) {
    elements.courseSelect.value = newCourseIndex.toString();
  }

  // Ažuriraj naslov u meniju
  const course = COURSES[newCourseIndex];
  if (elements.sidebarHeader) {
    elements.sidebarHeader.innerHTML = `📚 ${course.title}`;
  }

  buildLessonNav();
  updateProgressUI();
  loadLesson(0);

  showToast(`Prebačeno na: ${course.title}! ${course.icon}`, "🎓");
}

// Uključivanje Sandbox (Igralište) moda
function openSandbox() {
  isSandboxMode = true;
  document.querySelectorAll('.lesson-item').forEach(i => i.classList.remove('active'));
  
  elements.lessonTitle.innerHTML = '🧪 Igralište za slobodan kod (Playground)';
  elements.lessonCategory.innerText = 'Slobodno kodiranje';
  elements.lessonContent.innerHTML = `
    <p class="lead">Ovo je tvoj slobodan prostor za eksperimentisanje! Ovde nema zadataka ni pravila – piši šta god poželiš, isprobavaj ideje i uči kroz igru.</p>
    <div class="sandbox-templates">
      <h4>💡 Brzi primeri za inspiraciju:</h4>
      <div class="template-buttons" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
        <button class="btn btn-secondary btn-sm" id="tpl-calc">🔢 Mini kalkulator</button>
        <button class="btn btn-secondary btn-sm" id="tpl-art">🎨 ASCII Umetnost</button>
        <button class="btn btn-secondary btn-sm" id="tpl-list">📝 Generator liste</button>
        <button class="btn btn-secondary btn-sm" id="tpl-algo">⚡ Algoritam (Rekurzija)</button>
        <button class="btn btn-secondary btn-sm" id="tpl-oop">🏗️ OOP Bankomat</button>
      </div>
    </div>
  `;
  
  if (elements.proTipSection) elements.proTipSection.style.display = 'none';
  if (elements.challengeBox) elements.challengeBox.style.display = 'none';
  if (elements.quizBox) elements.quizBox.style.display = 'none';
  if (elements.completeLessonBtn) elements.completeLessonBtn.style.display = 'none';

  editor.setValue(`# Slobodno igralište za Python!
# Piši kod ispod i klikni "Pokreni kod" (ili pritisni Ctrl+Enter)

poruka = "Pozdrav iz Python igrališta!"
print(poruka.upper())

for i in range(1, 6):
    print("🚀" * i)
`);

  // Template dugmad
  setTimeout(() => {
    const tplCalc = document.getElementById('tpl-calc');
    const tplArt = document.getElementById('tpl-art');
    const tplList = document.getElementById('tpl-list');
    const tplAlgo = document.getElementById('tpl-algo');
    const tplOop = document.getElementById('tpl-oop');
    
    if (tplCalc) tplCalc.addEventListener('click', () => {
      editor.setValue(`# Mini Kalkulator
x = float(input("Unesi prvi broj: "))
y = float(input("Unesi drugi broj: "))
operacija = input("Izaberi operaciju (+, -, *, /): ")

if operacija == "+":
    print("Rezultat:", x + y)
elif operacija == "-":
    print("Rezultat:", x - y)
elif operacija == "*":
    print("Rezultat:", x * y)
elif operacija == "/":
    if y != 0:
        print("Rezultat:", x / y)
    else:
        print("Greška: Deljenje nulom nije dozvoljeno!")
`);
    });

    if (tplArt) tplArt.addEventListener('click', () => {
      editor.setValue(`# Crtanje piramide zvezdicama
visina = 6
for i in range(1, visina + 1):
    razmaci = " " * (visina - i)
    zvezdice = "*" * (2 * i - 1)
    print(razmaci + zvezdice)
print(" " * (visina - 1) + "| |")
`);
    });

    if (tplList) tplList.addEventListener('click', () => {
      editor.setValue(`# Rad sa listom
imena = ["Ana", "Petar", "Milica", "Marko", "Stefan"]
print("Svi članovi:")
for idx, ime in enumerate(imena, start=1):
    print(f"{idx}. {ime}")

print("\\nSortirana lista:")
imena.sort()
print(imena)
`);
    });

    if (tplAlgo) tplAlgo.addEventListener('click', () => {
      editor.setValue(`# Klasični algoritmi: Fibonači i Palindrom

# 1. Rekurzivni Fibonačijev niz sa memoizacijom
memo = {}
def fib(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]

print("Prvih 10 Fibonačijevih brojeva:")
print([fib(i) for i in range(10)])

# 2. Provera palindroma pomoću Python slice sintakse [::-1]
def je_palindrom(rec):
    cista = rec.lower().replace(" ", "")
    return cista == cista[::-1]

test_reci = ["Ana", "radar", "antigravity", "oko"]
print("\\nProvera palindroma:")
for r in test_reci:
    print(f"'{r}' -> {'Jeste palindrom! ✅' if je_palindrom(r) else 'Nije palindrom ❌'}")
`);
    });

    if (tplOop) tplOop.addEventListener('click', () => {
      editor.setValue(`# OOP Primer: Bankomat i Računi
class BankovniRacun:
    def __init__(self, vlasnik, stanje=0):
        self.vlasnik = vlasnik
        self.stanje = stanje
        
    def uplata(self, iznos):
        if iznos > 0:
            self.stanje += iznos
            print(f"✅ Uplaćeno {iznos} RSD. Novo stanje: {self.stanje} RSD")
            
    def isplata(self, iznos):
        if 0 < iznos <= self.stanje:
            self.stanje -= iznos
            print(f"💸 Isplaćeno {iznos} RSD. Preostalo: {self.stanje} RSD")
        else:
            print("❌ Odbijeno: Nema dovoljno sredstava na računu!")

moj_racun = BankovniRacun("Marko", 5000)
moj_racun.uplata(2500)
moj_racun.isplata(6000)
moj_racun.isplata(3000)
`);
    });
  }, 100);
}

// Pomoćna funkcija za bezbedan HTML
function escapeHTML(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

// Inicijalizacija liste lekcija u meniju
function buildLessonNav() {
  elements.lessonList.innerHTML = '';
  const currentLessons = COURSES[currentCourseIndex].lessons;
  
  currentLessons.forEach((lesson, idx) => {
    const li = document.createElement('li');
    li.className = 'lesson-item';
    li.dataset.lessonId = lesson.id;
    li.innerHTML = `
      <span class="lesson-num">${idx + 1}</span>
      <div class="lesson-info">
        <span class="lesson-title-text">${lesson.title}</span>
        <span class="lesson-cat-badge">${lesson.category}</span>
      </div>
      <span class="status-check"></span>
    `;
    li.addEventListener('click', () => {
      if (elements.completeLessonBtn) elements.completeLessonBtn.style.display = 'inline-flex';
      loadLesson(idx);
    });
    elements.lessonList.appendChild(li);
  });
}


// ============================================================================
// BAZA PODATAKA ZA BRZI PODSETNIK (CHEAT SHEET) I REČNIK POJMOVA
// ============================================================================
const CHEAT_SHEET_ITEMS = [
  // KURS 1
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Štampanje teksta (print)",
    desc: "Ispisuje poruku ili rezultat na ekranu konzole.",
    code: 'print("Zdravo Svete!")\nprint("Zbir:", 5 + 3)'
  },
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Promenljive i osnovni tipovi",
    desc: "Kutije za čuvanje teksta (str), celih brojeva (int), decimala (float) i logičkih vrednosti (bool).",
    code: 'ime = "Nikola"      # tekst (str)\ngodine = 16         # ceo broj (int)\nvisina = 1.82       # decimalni (float)\naktivan = True      # logički (bool)'
  },
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Formatirani tekst (f-string)",
    desc: "Umetanje promenljivih direktno u tekst pomoću vitičastih zagrada {}.",
    code: 'bodovi = 95\nprint(f"Osvojio si {bodovi} bodova!")'
  },
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Unos sa tastature (input)",
    desc: "Čeka unos korisnika. Uvek vraća tekst (str)! Za broj koristi int(input()).",
    code: 'ime = input("Kako se zoveš? ")\ngodine = int(input("Koliko imaš godina? "))'
  },
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Grananje (if / elif / else)",
    desc: "Donošenje odluka. Ne zaboravi dvotačku (:) na kraju i uvlačenje reda!",
    code: 'if poeni >= 90:\n    print("Ocena 5")\nelif poeni >= 75:\n    print("Ocena 4")\nelse:\n    print("Moraš još vežbati")'
  },
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Brojačka petlja (for i range)",
    desc: "Ponavlja kod zadati broj puta. range(5) broji od 0 do 4.",
    code: 'for i in range(5):\n    print(f"Krug {i}")\n\n# range(start, stop, step):\nfor parni in range(2, 11, 2):\n    print(parni)'
  },
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Uslovna petlja (while)",
    desc: "Ponavlja kod sve dok je uslov tačan (True). Pazi da ne napraviš beskonačnu!",
    code: 'broj = 3\nwhile broj > 0:\n    print(broj)\n    broj -= 1\nprint("Poletanje!")'
  },
  {
    cat: "k1",
    badge: "Kurs 1",
    title: "Liste (Kolekcije stavki)",
    desc: "Spisak stavki u uglastim zagradama []. Indeksiranje kreće od 0!",
    code: 'voce = ["jabuka", "banana", "kruska"]\nvoce.append("narandza")  # dodaje na kraj\nprint(voce[0])           # prvi element\nprint(voce[-1])          # poslednji element\nprint(len(voce))         # broj elemenata'
  },

  // KURS 2
  {
    cat: "k2",
    badge: "Kurs 2",
    title: "Rečnici (Ključ: Vrednost)",
    desc: "Pamte parove ključ-vrednost u vitičastim zagradama {}.",
    code: 'igrac = {"ime": "Ana", "nivo": 5, "hp": 100}\nprint(igrac["ime"])\nigrac["hp"] -= 20        # izmena vrednosti\nigrac["zlato"] = 50      # dodavanje novog ključa\ngrad = igrac.get("grad", "Nepoznat")  # bezbedno čitanje'
  },
  {
    cat: "k2",
    badge: "Kurs 2",
    title: "Pisanje funkcija (def i return)",
    desc: "Modularni blok koda koji prima argumente i vraća izračunat rezultat.",
    code: 'def saberi(a, b):\n    """Sabira dva broja"""\n    return a + b\n\nrezultat = saberi(15, 25)\nprint(rezultat)  # 40'
  },
  {
    cat: "k2",
    badge: "Kurs 2",
    title: "Formatiranje brojeva i poravnanja",
    desc: "Kontrola prikaza decimala i širine kolona u tabelama.",
    code: 'cena = 12.3456\nprint(f"Cena: {cena:.2f} din")  # 12.35 din\n\n# Poravnanje:\nprint(f"| {\"Jabuka\":<10} | {120:>5} din |")'
  },
  {
    cat: "k2",
    badge: "Kurs 2",
    title: "Metode za rad sa tekstom (string)",
    desc: "Uklanjanje razmaka, promena veličine slova i provera sadržaja.",
    code: 'grad = "  beograd  "\nprint(grad.strip().title())  # "Beograd"\nprint("python".upper())       # "PYTHON"\nif "ja" in "jabuka": print("Sadrži!")'
  },
  {
    cat: "k2",
    badge: "Kurs 2",
    title: "Kontrola petlji (break i continue)",
    desc: "break trenutno prekida celu petlju, continue preskače na sledeći krug.",
    code: 'while True:\n    unos = input("Izlaz? (da/ne): ")\n    if unos == "da":\n        break  # Prekida beskonačnu petlju'
  },

  // KURS 3
  {
    cat: "k3",
    badge: "Kurs 3",
    title: "Defanzivni kod (try - except)",
    desc: "Hvatanje grešaka u toku rada programa tako da nikada ne dođe do kraha.",
    code: 'try:\n    broj = int(input("Unesi ceo broj: "))\n    rez = 100 / broj\nexcept ValueError:\n    print("Nisi uneo ispravne cifre!")\nexcept ZeroDivisionError:\n    print("Deljenje nulom nije dozvoljeno!")\nelse:\n    print(f"Uspeh: {rez}")'
  },
  {
    cat: "k3",
    badge: "Kurs 3",
    title: "Rad sa fajlovima (Trajno pamćenje)",
    desc: "OBAVEZNO encoding=\'utf-8\' za Windows stabilnost i čuvanje srpskih slova (č, ć, ž, š, đ).",
    code: '# Zapisivanje teksta na disk (režim "w" ili "a"):\nwith open("podaci.txt", "w", encoding="utf-8") as f:\n    f.write("Trajna misao sačuvana na disku!\\n")\n\n# Čitanje nazad:\nwith open("podaci.txt", "r", encoding="utf-8") as f:\n    sadrzaj = f.read()'
  },
  {
    cat: "k3",
    badge: "Kurs 3",
    title: "Modul random (Slučajnost i Igre)",
    desc: "Generisanje brojeva, izbor stavki i mešanje karata.",
    code: 'import random\n\nkockica = random.randint(1, 6)      # 1 do 6\nizabrano = random.choice(["A", "B"])   # jedan član\nloto = random.sample(range(1, 40), 6) # bez ponavljanja\nrandom.seed(42)                     # ponovljivost za testove'
  },
  {
    cat: "k3",
    badge: "Kurs 3",
    title: "Moduli time i math",
    desc: "Nanosekundno merenje brzine, pauziranje i inženjerska matematika.",
    code: 'import time, math\n\nstart = time.perf_counter()  # visoka preciznost\ntime.sleep(0.5)              # pauza od pola sekunde\nkraj = time.perf_counter()\n\nkoren = math.sqrt(49)        # 7.0\npaket = math.ceil(3.2)       # 4 (plafon, zaokružuje gore)'
  },
  {
    cat: "k3",
    badge: "Kurs 3",
    title: "Matrice i 2D liste",
    desc: "Mreža redova i kolona: tabla[red][kolona].",
    code: '# Pravilno pravljenje 3x3 table (nezavisni redovi):\ntabla = [[" " for _ in range(3)] for _ in range(3)]\ntabla[1][1] = "X"  # centar\n\nfor r_idx, red in enumerate(tabla):\n    print(f"Red {r_idx}: {' | '.join(red)}")'
  },
  {
    cat: "k3",
    badge: "Kurs 3",
    title: "Inženjerski ulaz (if __name__ == \'__main__\':)",
    desc: "Standardno strukturiranje profesionalnih Python skripti za pokretanje na računaru.",
    code: 'def main():\n    print("Program se pokreće direktno!")\n\nif __name__ == "__main__":\n    main()'
  },

  // REČNIK POJMOVA
  {
    cat: "recnik",
    badge: "Rečnik",
    title: "Indentacija (Uvlačenje koda)",
    desc: "Prazan prostor (4 razmaka ili Tab) na početku linije. Po ovome Python zna šta pripada telu uslova, petlje ili funkcije.",
    code: 'if True:\n    print("Uvučeno za 4 razmaka (telo if-a)")\nprint("Nije uvučeno (izvan if-a)")'
  },
  {
    cat: "recnik",
    badge: "Rečnik",
    title: "Scope (Opseg promenljive)",
    desc: "Oblast koda gde promenljiva postoji. Lokalne promenljive unutar funkcije žive samo u svojoj privatnoj sobi i ne vide se spolja.",
    code: 'def funkcija():\n    tajna = 42  # Lokalna promenljiva\n# print(tajna) van funkcije izaziva NameError!'
  },
  {
    cat: "recnik",
    badge: "Rečnik",
    title: "Traceback (Poruka o grešci)",
    desc: "Izveštaj koji Python prikaže kada program pukne. Zlatno pravilo: uvek čitaj odozdo prema gore! Poslednja linija je dijagnoza.",
    code: 'Traceback (most recent call last):\n  File "app.py", line 4, in <module>\n    rez = 10 / 0\nZeroDivisionError: division by zero'
  },
  {
    cat: "recnik",
    badge: "Rečnik",
    title: "In-place operacija",
    desc: "Izmena postojećeg objekta na licu mesta bez kreiranja nove kopije (npr. lista.sort() ili random.shuffle(lista)).",
    code: 'brojevi = [3, 1, 2]\nbrojevi.sort()   # menja originalnu listu\nprint(brojevi)   # [1, 2, 3]'
  },
  {
    cat: "recnik",
    badge: "Rečnik",
    title: "Big-O složenost (O-notacija)",
    desc: "Mera efikasnosti algoritma. O(n) raste proporcionalno sa brojem stavki (linearno), dok O(log n) raste munjevito sporo (binarna pretraga).",
    code: '# O(n)     -> Linearna pretraga (pregled redom)\n# O(log n) -> Binarna pretraga (sečenje na pola u svakom koraku)'
  },
  {
    cat: "recnik",
    badge: "Rečnik",
    title: "RAM vs Hard Disk / SSD",
    desc: "RAM je radna memorija koja zaboravlja sve kad se program ugasi. Disk je trajno skladište (fajlovi) gde podaci ostaju sačuvani.",
    code: '# RAM:  promenljive, liste, rečnici (kratkotrajno)\n# Disk: with open("fajl.txt", "w") (trajno čuvanje)'
  }
];

function initCheatSheet() {
  let activeCategory = 'all';

  function renderCheatSheet() {
    if (!elements.cheatSheetGrid) return;
    const query = (elements.cheatSheetSearch ? elements.cheatSheetSearch.value.trim().toLowerCase() : '');
    
    const filtered = CHEAT_SHEET_ITEMS.filter(item => {
      const matchCat = (activeCategory === 'all' || item.cat === activeCategory);
      if (!matchCat) return false;
      if (!query) return true;
      return item.title.toLowerCase().includes(query) ||
             item.desc.toLowerCase().includes(query) ||
             item.code.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      elements.cheatSheetGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">
          <p style="font-size: 1.2rem; margin: 0;">🔍 Nije pronađena nijedna komanda za: <strong>"${escapeHTML(query)}"</strong></p>
          <small>Pokušaj sa pojmovima poput: print, list, if, def, fajl, petlja, scope...</small>
        </div>
      `;
      return;
    }

    elements.cheatSheetGrid.innerHTML = filtered.map(item => {
      let badgeClass = 'cs-badge-k1';
      if (item.cat === 'k2') badgeClass = 'cs-badge-k2';
      else if (item.cat === 'k3') badgeClass = 'cs-badge-k3';
      else if (item.cat === 'recnik') badgeClass = 'cs-badge-recnik';

      return `
        <div class="cs-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="cs-card-badge ${badgeClass}">${item.badge}</span>
            <button class="btn btn-ghost btn-xs cs-copy-chip-btn" data-code="${encodeURIComponent(item.code)}" title="Kopiraj primer">📋 Kopiraj</button>
          </div>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <div class="cs-code-chip">${escapeHTML(item.code)}</div>
        </div>
      `;
    }).join('');

    elements.cheatSheetGrid.querySelectorAll('.cs-copy-chip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const codeText = decodeURIComponent(btn.dataset.code);
        navigator.clipboard.writeText(codeText).then(() => {
          showToast('Primer koda je iskopiran! 📋', '✅');
        });
      });
    });
  }

  document.querySelectorAll('.cs-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cs-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderCheatSheet();
    });
  });

  if (elements.cheatSheetSearch) {
    elements.cheatSheetSearch.addEventListener('input', renderCheatSheet);
  }

  window.openCheatSheet = function openCheatSheet() {
    if (elements.cheatSheetModal) {
      elements.cheatSheetModal.style.display = 'flex';
      elements.cheatSheetModal.classList.add('active');
      renderCheatSheet();
      if (elements.cheatSheetSearch) {
        elements.cheatSheetSearch.value = '';
        setTimeout(() => elements.cheatSheetSearch.focus(), 50);
      }
    }
  };

  window.closeCheatSheet = function closeCheatSheet() {
    if (elements.cheatSheetModal) {
      elements.cheatSheetModal.classList.remove('active');
      elements.cheatSheetModal.style.display = 'none';
    }
  };

  if (elements.cheatSheetBtn) {
    elements.cheatSheetBtn.addEventListener('click', openCheatSheet);
  }
  if (elements.closeCheatSheetBtn) {
    elements.closeCheatSheetBtn.addEventListener('click', closeCheatSheet);
  }
  if (elements.cheatSheetModal) {
    elements.cheatSheetModal.addEventListener('click', (e) => {
      if (e.target === elements.cheatSheetModal) {
        closeCheatSheet();
      }
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (elements.cheatSheetModal && elements.cheatSheetModal.style.display === 'flex') {
        closeCheatSheet();
      }
      if (elements.certificateModal && elements.certificateModal.style.display === 'flex') {
        closeCertificateModal();
      }
      const placeModalEl = document.getElementById('placement-test-modal');
      if (placeModalEl && placeModalEl.style.display === 'flex') {
        closePlacementTestModal();
      }
      const examModalEl = document.getElementById('final-exam-modal');
      if (examModalEl && examModalEl.style.display === 'flex') {
        closeFinalExamModal();
      }
      if (elements.inputDialog && elements.inputDialog.classList.contains('active')) {
        if (currentInputResolver) {
          currentInputResolver('');
          currentInputResolver = null;
        }
        elements.inputDialog.classList.remove('active');
        writeToConsole('[Korisnik je otkazao unos pritiskom na Esc]\n', true);
      }
    }
  });
}


// ============================================================================
// LOGIKA ZA POČETNU STRANU (LANDING) I PROFIL KORISNIKA
// ============================================================================
let activeView = 'landing';

function switchView(targetView) {
  activeView = targetView;
  
  if (targetView === 'landing') {
    document.body.classList.remove('view-workshop-active');
    document.body.classList.add('view-landing-active');
    if (elements.viewLanding) elements.viewLanding.classList.add('active');
    if (elements.viewWorkshop) elements.viewWorkshop.classList.remove('active');
    if (elements.navBtnHome) elements.navBtnHome.classList.add('active');
    if (elements.navBtnWorkshop) elements.navBtnWorkshop.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.body.classList.remove('view-landing-active');
    document.body.classList.add('view-workshop-active');
    if (elements.viewLanding) elements.viewLanding.classList.remove('active');
    if (elements.viewWorkshop) elements.viewWorkshop.classList.add('active');
    if (elements.navBtnHome) elements.navBtnHome.classList.remove('active');
    if (elements.navBtnWorkshop) elements.navBtnWorkshop.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (editor) editor.refresh();
    }, 80);
  }
  
  localStorage.setItem('python_od_nule_active_view', targetView);
}

const PROFILE_STORAGE_KEY = 'python_od_nule_user_profile';

function getUserProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveUserProfile(profileData) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
  renderProfileUI();
}

function deleteUserProfile() {
  if (confirm("Da li si siguran da želiš da obrišeš svoj profil sa ovog računara?")) {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    renderProfileUI();
    showToast("Profil je uspešno obrisan.", "ℹ️");
  }
}

function initBirthYears() {
  if (!elements.regBirthYear) return;
  const currentYear = new Date().getFullYear();
  let html = '<option value="">-- Izaberi godinu rođenja --</option>';
  for (let y = currentYear - 7; y >= currentYear - 80; y--) {
    html += `<option value="${y}">${y} (${currentYear - y} god)</option>`;
  }
  elements.regBirthYear.innerHTML = html;
}

function renderProfileUI() {
  const profile = getUserProfile();
  const currentYear = new Date().getFullYear();
  
  // Izračunaj ukupan progres kroz Trijadu
  let totalCompleted = 0;
  if (typeof COURSES !== 'undefined') {
    COURSES.forEach(c => {
      try {
        const k = `python_od_nule_completed_${c.id}`;
        let s = localStorage.getItem(k);
        if (!s && c.id === 'osnove-1') s = localStorage.getItem('python_od_nule_completed');
        if (s) totalCompleted += JSON.parse(s).length;
      } catch (e) {}
    });
  }
  const pct = Math.round((totalCompleted / 27) * 100);

  if (profile) {
    if (elements.profileFormBox) elements.profileFormBox.style.display = 'none';
    if (elements.profileCardBox) elements.profileCardBox.style.display = 'block';

    if (elements.cardUserNickname) elements.cardUserNickname.innerText = profile.nickname || 'Programer';
    if (elements.cardUserUsername) elements.cardUserUsername.innerText = '@' + (profile.username || 'korisnik');
    if (elements.cardUserEmail) elements.cardUserEmail.innerText = profile.email || 'Nije unet';
    if (elements.cardUserAge) {
      const age = profile.birthYear ? (currentYear - parseInt(profile.birthYear)) : '?';
      elements.cardUserAge.innerText = `${age} god (${profile.birthYear})`;
    }
    if (elements.cardUserOccupation) elements.cardUserOccupation.innerText = profile.occupation || 'Nije navedeno';
    if (elements.cardUserMotivation) elements.cardUserMotivation.innerText = `"${profile.motivation}"`;
    if (elements.cardUserProgress) elements.cardUserProgress.innerText = `${totalCompleted} / 27 lekcija (${pct}%)`;
    
    const gStats = calculateUserGamification();
    const cardXp = document.getElementById('card-user-xp');
    if (cardXp) cardXp.innerText = `${gStats.totalXp} XP`;
    const cardStreak = document.getElementById('card-user-streak');
    if (cardStreak) cardStreak.innerText = `${gStats.streak} dana`;

    let badgeText = '🌱 Pythonista Početnik';
    if (totalCompleted >= 27) badgeText = '🏆 Majstor Trijade Osnova';
    else if (totalCompleted >= 18) badgeText = '🎓 Python Master Učenik';
    else if (totalCompleted >= 9) badgeText = '🛠️ Python Praktičar';
    if (elements.cardUserBadge) elements.cardUserBadge.innerText = badgeText;

    if (elements.headerProfileName) {
      elements.headerProfileName.innerText = profile.nickname || 'Profil';
    }
  } else {
    if (elements.profileFormBox) elements.profileFormBox.style.display = 'block';
    if (elements.profileCardBox) elements.profileCardBox.style.display = 'none';
    if (elements.headerProfileName) {
      elements.headerProfileName.innerText = 'Profil';
    }
  }
}

function handleRegistrationSubmit(e) {
  if (e) e.preventDefault();
  
  const email = elements.regEmail ? elements.regEmail.value.trim() : '';
  const username = elements.regUsername ? elements.regUsername.value.trim() : '';
  const nickname = elements.regNickname ? elements.regNickname.value.trim() : '';
  const birthYear = elements.regBirthYear ? elements.regBirthYear.value : '';
  const occupation = elements.regOccupation ? elements.regOccupation.value : '';
  const motivation = elements.regMotivation ? elements.regMotivation.value : '';

  if (!email || !username || !nickname || !birthYear || !occupation || !motivation) {
    showToast("Molimo te da popuniš sva polja forme!", "⚠️");
    return;
  }

  const profileData = {
    email,
    username,
    nickname,
    birthYear,
    occupation,
    motivation,
    createdAt: new Date().toISOString()
  };

  saveUserProfile(profileData);
  launchConfetti();
  showToast(`Dobrodošao/la, ${nickname}! Tvoj profil je uspešno kreiran! 🚀`, "🎉");
}

function handleEditProfile() {
  const profile = getUserProfile();
  if (!profile) return;

  if (elements.regEmail) elements.regEmail.value = profile.email || '';
  if (elements.regUsername) elements.regUsername.value = profile.username || '';
  if (elements.regNickname) elements.regNickname.value = profile.nickname || '';
  if (elements.regBirthYear) elements.regBirthYear.value = profile.birthYear || '';
  if (elements.regOccupation) elements.regOccupation.value = profile.occupation || '';
  if (elements.regMotivation) elements.regMotivation.value = profile.motivation || '';

  if (elements.profileFormBox) elements.profileFormBox.style.display = 'block';
  if (elements.profileCardBox) elements.profileCardBox.style.display = 'none';

  elements.profileFormBox.scrollIntoView({ behavior: 'smooth' });
}

// Povezivanje svih događaja

/* ========================================================================= */
/* RUČNO PODEŠAVANJE VELIČINE: EDITOR, TERMINAL I TEORIJSKI PANEL            */
/* ========================================================================= */
function initPanelsResizers() {
  const horizontalResizer = document.getElementById('editor-terminal-resizer');
  const verticalResizer = document.getElementById('workspace-column-resizer');
  const terminalWrapper = document.getElementById('terminal-wrapper');
  const editorWrapper = document.getElementById('editor-wrapper');
  const theoryPanel = document.getElementById('theory-panel');
  const editorPanel = document.getElementById('editor-panel');
  const workspace = document.querySelector('.workspace');

  if (!horizontalResizer || !terminalWrapper || !editorPanel) return;

  // 1. Učitaj sačuvane dimenzije iz localStorage
  try {
    const savedTerminalHeight = localStorage.getItem('pon_terminal_height');
    if (savedTerminalHeight && parseInt(savedTerminalHeight, 10) > 80) {
      terminalWrapper.style.height = `${parseInt(savedTerminalHeight, 10)}px`;
    }

    const savedTheoryWidth = localStorage.getItem('pon_theory_width');
    if (savedTheoryWidth && theoryPanel && parseInt(savedTheoryWidth, 10) > 280) {
      theoryPanel.style.width = `${parseInt(savedTheoryWidth, 10)}px`;
      theoryPanel.style.flex = 'none';
    }
  } catch (e) {}

  // 2. Horizontalni resizer (Editor gore <-> Terminal dole)
  let isDraggingHorizontal = false;
  let startY = 0;
  let startTerminalHeight = 0;

  function onMouseDownHorizontal(e) {
    isDraggingHorizontal = true;
    startY = e.clientY || (e.touches && e.touches[0].clientY);
    startTerminalHeight = terminalWrapper.getBoundingClientRect().height;
    horizontalResizer.classList.add('is-dragging');
    document.body.classList.add('resizing-row');
    e.preventDefault();
  }

  function onMouseMoveHorizontal(e) {
    if (!isDraggingHorizontal) return;
    const currentY = e.clientY || (e.touches && e.touches[0].clientY);
    const deltaY = currentY - startY;
    const panelHeight = editorPanel.getBoundingClientRect().height;
    
    // Pomeranje miša na gore povećava terminal, pomeranje na dole smanjuje terminal
    let newHeight = startTerminalHeight - deltaY;

    // Granice: terminal minimum 80px, editor minimum 110px
    const minTerminalHeight = 80;
    const maxTerminalHeight = panelHeight - 130;

    if (newHeight < minTerminalHeight) newHeight = minTerminalHeight;
    if (newHeight > maxTerminalHeight) newHeight = maxTerminalHeight;

    terminalWrapper.style.height = `${newHeight}px`;

    if (editor) {
      editor.refresh();
    }
  }

  function onMouseUpHorizontal() {
    if (isDraggingHorizontal) {
      isDraggingHorizontal = false;
      horizontalResizer.classList.remove('is-dragging');
      document.body.classList.remove('resizing-row');
      const currentHeight = terminalWrapper.getBoundingClientRect().height;
      try {
        localStorage.setItem('pon_terminal_height', Math.round(currentHeight));
      } catch (e) {}
      if (editor) editor.refresh();
    }
  }

  horizontalResizer.addEventListener('mousedown', onMouseDownHorizontal);
  horizontalResizer.addEventListener('touchstart', onMouseDownHorizontal, { passive: false });

  // Dvoklik na horizontalni razdvajač vraća podrazumevanu visinu terminala (220px)
  horizontalResizer.addEventListener('dblclick', () => {
    terminalWrapper.style.height = '220px';
    try {
      localStorage.removeItem('pon_terminal_height');
    } catch (e) {}
    if (editor) editor.refresh();
    showToast('Visina terminala vraćena na podrazumevanu (220px).', '🔄');
  });

  window.addEventListener('mousemove', onMouseMoveHorizontal);
  window.addEventListener('touchmove', onMouseMoveHorizontal, { passive: false });
  window.addEventListener('mouseup', onMouseUpHorizontal);
  window.addEventListener('touchend', onMouseUpHorizontal);

  // 3. Vertikalni resizer (Teorija levo <-> Editor desno)
  let isDraggingVertical = false;
  let startX = 0;
  let startTheoryWidth = 0;

  if (verticalResizer && theoryPanel && workspace) {
    function onMouseDownVertical(e) {
      isDraggingVertical = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX);
      startTheoryWidth = theoryPanel.getBoundingClientRect().width;
      verticalResizer.classList.add('is-dragging');
      document.body.classList.add('resizing-col');
      e.preventDefault();
    }

    function onMouseMoveVertical(e) {
      if (!isDraggingVertical) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX);
      const deltaX = currentX - startX;
      const wsWidth = workspace.getBoundingClientRect().width;
      let newWidth = startTheoryWidth + deltaX;

      // Granice: teorija minimum 300px, editor minimum 340px
      const minWidth = 300;
      const maxWidth = wsWidth - 360;

      if (newWidth < minWidth) newWidth = minWidth;
      if (newWidth > maxWidth) newWidth = maxWidth;

      theoryPanel.style.width = `${newWidth}px`;
      theoryPanel.style.flex = 'none';

      if (editor) {
        editor.refresh();
      }
    }

    function onMouseUpVertical() {
      if (isDraggingVertical) {
        isDraggingVertical = false;
        verticalResizer.classList.remove('is-dragging');
        document.body.classList.remove('resizing-col');
        const currentWidth = theoryPanel.getBoundingClientRect().width;
        try {
          localStorage.setItem('pon_theory_width', Math.round(currentWidth));
        } catch (e) {}
        if (editor) editor.refresh();
      }
    }

    verticalResizer.addEventListener('mousedown', onMouseDownVertical);
    verticalResizer.addEventListener('touchstart', onMouseDownVertical, { passive: false });

    // Dvoklik na vertikalni razdvajač vraća elastični odnos (50% - 50%)
    verticalResizer.addEventListener('dblclick', () => {
      theoryPanel.style.width = '';
      theoryPanel.style.flex = '1';
      try {
        localStorage.removeItem('pon_theory_width');
      } catch (e) {}
      if (editor) editor.refresh();
      showToast('Širina panela vraćena na podrazumevanu proporciju.', '🔄');
    });

    window.addEventListener('mousemove', onMouseMoveVertical);
    window.addEventListener('touchmove', onMouseMoveVertical, { passive: false });
    window.addEventListener('mouseup', onMouseUpVertical);
    window.addEventListener('touchend', onMouseUpVertical);
  }
}


/* ========================================================================= */
/* AUTOMATSKA PROVERA ZADATAKA, FOKUS MOD, SVETLA TEMA, FAJLOVI I ISPIT      */
/* ========================================================================= */

const SOLVED_CHALLENGES_KEY = 'python_od_nule_solved_challenges';
const FINAL_EXAM_KEY = 'python_od_nule_final_exam_result';

function getSolvedChallengesMap() {
  try {
    const raw = localStorage.getItem(SOLVED_CHALLENGES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function isChallengeSolved(cIdx, lIdx, chIdx) {
  const map = getSolvedChallengesMap();
  return !!map[`c${cIdx}_l${lIdx}_ch${chIdx}`];
}

function markChallengeSolved(cIdx, lIdx, chIdx) {
  const map = getSolvedChallengesMap();
  map[`c${cIdx}_l${lIdx}_ch${chIdx}`] = true;
  try {
    localStorage.setItem(SOLVED_CHALLENGES_KEY, JSON.stringify(map));
  } catch (e) {}
  calculateUserGamification();
}


// ============================================================================
// STVARNI AUTOMATSKI UNIT TESTOVI ZA ZADATKE (KAO CS50 check50 / LeetCode!)
// ============================================================================
const CHALLENGE_UNIT_TESTS = {
  // KURS 1
  "uvod-print:0": {
    checkOutput: (out, code) => {
      if (out.includes("Moje ime je ...")) return "Zaboravio si da zameniš '...' svojim pravim imenom!";
      const lines = out.trim().split("\n").filter(l => l.trim().length > 0);
      if (lines.length < 2) return `Zadatak traži ispis u najmanje 2 reda (ime + hrana/hobi), a tvoj program je ispisao samo ${lines.length} red.`;
      return null;
    }
  },
  "uvod-print:1": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").filter(l => l.trim().length > 0);
      if (!out.includes("*")) return "Na crtežu nedostaju zvezdice (*)!";
      if (lines.length < 4) return "Jelka mora imati najmanje 4 reda (krošnja + stablo na dnu).";
      if (!/[|H#I]/.test(out)) return "Dodaj stablo jelke na dnu (npr. | |)!";
      return null;
    }
  },
  "promenljive-tipovi:1": {
    assertCode: `
assert 'a' in globals() and 'b' in globals(), "Promenljive moraju da se zovu 'a' i 'b'!"
assert a == 20 and b == 10, f"Posle zamene 'a' mora biti 20, a 'b' mora biti 10 (kod tebe je a={a}, b={b})!"
`
  },
  "matematika-stringovi:0": {
    checkOutput: (out) => {
      if (!out.includes("26")) return "Obim pravougaonika (2*8 + 2*5) mora biti 26 — ne vidimo broj 26 u ispisu!";
      if (!out.includes("40")) return "Površina pravougaonika (8*5) mora biti 40 — ne vidimo broj 40 u ispisu!";
      return null;
    }
  },
  "matematika-stringovi:1": {
    checkOutput: (out) => {
      if (!out.includes("3290")) return "Proveri računicu: 3 * 950 + 2 * 220 = 3290 RSD. U tvom ispisu nema broja 3290!";
      return null;
    }
  },
  "petlje-loops:0": {
    checkOutput: (out) => {
      if (!out.includes("15")) return "Zbir brojeva od 1 do 5 je 15 (1+2+3+4+5). U tvom ispisu nema broja 15!";
      return null;
    }
  },
  "petlje-loops:1": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").filter(l => l.trim().length > 0);
      if (lines.length < 10) return `Tablica množenja za 7 mora imati 10 redova (od 7x1 do 7x10), a tvoj kod ima ${lines.length}.`;
      if (!out.includes("70") || !out.includes("35")) return "U tablici množenja za 7 moraju se pojaviti rezultati poput 35 (7x5) i 70 (7x10)!";
      return null;
    }
  },
  "liste-kolekcije:1": {
    assertCode: `
assert 'korpa' in globals() and isinstance(korpa, list), "Lista mora da se zove 'korpa'!"
assert ('čokolada' in korpa or 'cokolada' in korpa), "Zaboravio si da dodaš 'čokolada' u listu korpa pomoću .append()!"
assert 'hleb' not in korpa, "Zaboravio si da ukloniš 'hleb' iz liste korpa pomoću .remove('hleb')!"
`
  },
  "funkcije-def:0": {
    assertCode: `
assert 'kvadrat' in globals() and callable(kvadrat), "Funkcija mora da se zove 'kvadrat'!"
_r1 = kvadrat(7)
assert _r1 is not None, "Funkcija kvadrat(7) vraća None! Zaboravio si ključnu reč 'return'."
assert _r1 == 49, f"Za kvadrat(7) očekujemo 49, a tvoja funkcija je vratila {_r1}!"
_r2 = kvadrat(5)
assert _r2 == 25, f"Za kvadrat(5) očekujemo 25, a tvoja funkcija je vratila {_r2}!"
`
  },
  "funkcije-def:1": {
    assertCode: `
assert 'povrsina' in globals() and callable(povrsina), "Funkcija mora da se zove 'povrsina'!"
_r1 = povrsina(4, 5)
assert _r1 is not None, "Funkcija povrsina(4, 5) vraća None! Zaboravio si ključnu reč 'return'."
assert _r1 == 20, f"Za povrsina(4, 5) očekujemo 20, a tvoja funkcija je vratila {_r1}!"
_r2 = povrsina(3, 7)
assert _r2 == 21, f"Za povrsina(3, 7) očekujemo 21, a tvoja funkcija je vratila {_r2}!"
`
  },
  "uvod-print:2": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").filter(l => l.trim().length > 0);
      if (lines.length < 2) return "Popravi obe print() naredbe da ispišu oba reda!";
      return null;
    }
  },
  "uvod-print:3": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").filter(l => l.trim().length > 0);
      if (lines.length < 3) return "Vizit karta mora imati najmanje 3 reda (gornji okvir, ime, donji okvir)!";
      return null;
    }
  },
  "promenljive-tipovi:2": {
    checkOutput: (out) => {
      if (!out.includes("450")) return "Zbir cena (200 + 250) mora biti 450 — ne vidimo 450 u ispisu!";
      return null;
    }
  },
  "promenljive-tipovi:3": {
    assertCode: `
assert 'ime_lika' in globals() and isinstance(ime_lika, str), "Promenljiva 'ime_lika' mora biti tekst (str)!"
assert 'nivo' in globals() and isinstance(nivo, int), "Promenljiva 'nivo' mora biti ceo broj (int)!"
assert 'zdravlje' in globals() and isinstance(zdravlje, (int, float)), "Promenljiva 'zdravlje' mora biti broj (float)!"
`
  },
  "matematika-stringovi:2": {
    checkOutput: (out) => {
      if (!out.includes("75")) return "Zbir int('50') + 25 mora biti 75 — ne vidimo 75 u ispisu!";
      return null;
    }
  },
  "matematika-stringovi:3": {
    checkOutput: (out) => {
      if (!out.includes("3") || !out.includes("20")) return "200 sekundi je 3 minuta i 20 sekundi — proveri računanje sa // 60 i % 60!";
      return null;
    }
  },
  "uslovi-if-else:2": {
    checkOutput: (out) => {
      if (!out.toLowerCase().includes("punoletan")) return "Za godine = 18 program mora ispisati 'Punoletan si!'";
      return null;
    }
  },
  "uslovi-if-else:3": {
    checkOutput: (out) => {
      if (!out.includes("4050")) return "Za račun 4500 sa 10% popusta konačan iznos je 4050 (4500 * 0.9)!";
      return null;
    }
  },
  "petlje-loops:2": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").map(l => l.trim()).filter(Boolean);
      if (!lines.includes("10")) return "Petlja mora ispisati i broj 10! Koristi range(1, 11).";
      if (lines.length < 10) return "Mora biti ispisano svih 10 brojeva od 1 do 10!";
      return null;
    }
  },
  "petlje-loops:3": {
    checkOutput: (out) => {
      if (!out.includes("110")) return "Zbir parnih brojeva od 1 do 20 (2+4+6+...+20) je 110! Ne vidimo 110 u ispisu.";
      return null;
    }
  },
  "liste-kolekcije:2": {
    checkOutput: (out) => {
      if (!out.toLowerCase().includes("banana")) return "Program mora ispisati poslednje voće: 'banana'!";
      return null;
    }
  },
  "liste-kolekcije:3": {
    checkOutput: (out) => {
      if (!out.includes("890")) return "Najveći broj (max) u listi poeni je 890!";
      if (!out.includes("120")) return "Najmanji broj (min) u listi poeni je 120!";
      if (!out.includes("2010")) return "Ukupan zbir (sum) poena je 2010!";
      return null;
    }
  },
  "funkcije-def:2": {
    assertCode: `
assert 'dupliraj' in globals() and callable(dupliraj), "Funkcija mora da se zove 'dupliraj'!"
_d1 = dupliraj(15)
assert _d1 is not None, "Funkcija dupliraj(15) još uvek vraća None! Zameni print sa return."
assert _d1 == 30, f"Za dupliraj(15) očekujemo 30, a tvoja funkcija je vratila {_d1}!"
assert dupliraj(7) == 14, f"Za dupliraj(7) očekujemo 14!"
`
  },
  "funkcije-def:3": {
    assertCode: `
assert 'veci_broj' in globals() and callable(veci_broj), "Funkcija mora da se zove 'veci_broj'!"
_v1 = veci_broj(12, 25)
assert _v1 is not None, "Funkcija veci_broj vraća None! Dodaj return."
assert _v1 == 25, f"Za veci_broj(12, 25) očekujemo 25, a dobili smo {_v1}!"
assert veci_broj(100, 3) == 100, f"Za veci_broj(100, 3) očekujemo 100!"
`
  },
  "mini-projekat-igra:2": {
    checkOutput: (out) => {
      if (!out.includes("6")) return "Simulacija treba da baca kockicu dok ne padne 6!";
      return null;
    }
  },
  "uvod-print:2": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").filter(l => l.trim().length > 0);
      if (lines.length < 2) return "Popravi obe print() naredbe da ispišu oba reda!";
      return null;
    }
  },
  "uvod-print:3": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").filter(l => l.trim().length > 0);
      if (lines.length < 3) return "Vizit karta mora imati najmanje 3 reda (gornji okvir, ime, donji okvir)!";
      return null;
    }
  },
  "promenljive-tipovi:2": {
    checkOutput: (out) => {
      if (!out.includes("450")) return "Zbir cena (200 + 250) mora biti 450 — ne vidimo 450 u ispisu!";
      return null;
    }
  },
  "promenljive-tipovi:3": {
    assertCode: `
assert 'ime_lika' in globals() and isinstance(ime_lika, str), "Promenljiva 'ime_lika' mora biti tekst (str)!"
assert 'nivo' in globals() and isinstance(nivo, int), "Promenljiva 'nivo' mora biti ceo broj (int)!"
assert 'zdravlje' in globals() and isinstance(zdravlje, (int, float)), "Promenljiva 'zdravlje' mora biti broj (float)!"
`
  },
  "matematika-stringovi:2": {
    checkOutput: (out) => {
      if (!out.includes("75")) return "Zbir int('50') + 25 mora biti 75 — ne vidimo 75 u ispisu!";
      return null;
    }
  },
  "matematika-stringovi:3": {
    checkOutput: (out) => {
      if (!out.includes("3") || !out.includes("20")) return "200 sekundi je 3 minuta i 20 sekundi — proveri računanje sa // 60 i % 60!";
      return null;
    }
  },
  "uslovi-if-else:2": {
    checkOutput: (out) => {
      if (!out.toLowerCase().includes("punoletan")) return "Za godine = 18 program mora ispisati 'Punoletan si!'";
      return null;
    }
  },
  "uslovi-if-else:3": {
    checkOutput: (out) => {
      if (!out.includes("4050")) return "Za račun 4500 sa 10% popusta konačan iznos je 4050 (4500 * 0.9)!";
      return null;
    }
  },
  "petlje-loops:2": {
    checkOutput: (out) => {
      const lines = out.trim().split("\n").map(l => l.trim()).filter(Boolean);
      if (!lines.includes("10")) return "Petlja mora ispisati i broj 10! Koristi range(1, 11).";
      if (lines.length < 10) return "Mora biti ispisano svih 10 brojeva od 1 do 10!";
      return null;
    }
  },
  "petlje-loops:3": {
    checkOutput: (out) => {
      if (!out.includes("110")) return "Zbir parnih brojeva od 1 do 20 (2+4+6+...+20) je 110! Ne vidimo 110 u ispisu.";
      return null;
    }
  },
  "liste-kolekcije:2": {
    checkOutput: (out) => {
      if (!out.toLowerCase().includes("banana")) return "Program mora ispisati poslednje voće: 'banana'!";
      return null;
    }
  },
  "liste-kolekcije:3": {
    checkOutput: (out) => {
      if (!out.includes("890")) return "Najveći broj (max) u listi poeni je 890!";
      if (!out.includes("120")) return "Najmanji broj (min) u listi poeni je 120!";
      if (!out.includes("2010")) return "Ukupan zbir (sum) poena je 2010!";
      return null;
    }
  },
  "funkcije-def:2": {
    assertCode: `
assert 'dupliraj' in globals() and callable(dupliraj), "Funkcija mora da se zove 'dupliraj'!"
_d1 = dupliraj(15)
assert _d1 is not None, "Funkcija dupliraj(15) još uvek vraća None! Zameni print sa return."
assert _d1 == 30, f"Za dupliraj(15) očekujemo 30, a tvoja funkcija je vratila {_d1}!"
assert dupliraj(7) == 14, f"Za dupliraj(7) očekujemo 14!"
`
  },
  "funkcije-def:3": {
    assertCode: `
assert 'veci_broj' in globals() and callable(veci_broj), "Funkcija mora da se zove 'veci_broj'!"
_v1 = veci_broj(12, 25)
assert _v1 is not None, "Funkcija veci_broj vraća None! Dodaj return."
assert _v1 == 25, f"Za veci_broj(12, 25) očekujemo 25, a dobili smo {_v1}!"
assert veci_broj(100, 3) == 100, f"Za veci_broj(100, 3) očekujemo 100!"
`
  },
  "mini-projekat-igra:2": {
    checkOutput: (out) => {
      if (!out.includes("6")) return "Simulacija treba da baca kockicu dok ne padne 6!";
      return null;
    }
  },
  // KURS 2
  "k2-funkcije-modularnost:0": {
    assertCode: `
assert 'je_prost' in globals() and callable(je_prost), "Funkcija mora da se zove 'je_prost'!"
assert je_prost(7) is True, f"je_prost(7) mora vratiti True, a vratilo je {je_prost(7)}!"
assert je_prost(10) is False, f"je_prost(10) mora vratiti False, a vratilo je {je_prost(10)}!"
assert je_prost(2) is True, f"je_prost(2) mora vratiti True!"
assert je_prost(1) is False, f"je_prost(1) mora vratiti False (1 nije prost broj)!"
`
  },
  "k2-funkcije-modularnost:1": {
    assertCode: `
assert 'dinar_u_evro' in globals() and callable(dinar_u_evro), "Funkcija mora da se zove 'dinar_u_evro'!"
_e1 = dinar_u_evro(11720)
assert _e1 is not None, "Funkcija vraća None! Proveri 'return'."
assert abs(_e1 - 100.0) < 0.5, f"Za 11720 RSD očekujemo oko 100.0 EUR, a funkcija je vratila {_e1}!"
`
  },
  // KURS 3
  "k3-try-except-odbrana:0": {
    assertCode: `
assert 'bezbedno_podeli' in globals() and callable(bezbedno_podeli), "Funkcija mora da se zove 'bezbedno_podeli'!"
assert bezbedno_podeli(10, 2) == 5, f"bezbedno_podeli(10, 2) mora vratiti 5!"
assert bezbedno_podeli(10, 0) is None, "bezbedno_podeli(10, 0) mora bezbedno uhvatiti grešku i vratiti None!"
`
  },
  "k3-napredne-funkcije:0": {
    assertCode: `
assert 'izracunaj_ukupno' in globals() and callable(izracunaj_ukupno), "Funkcija mora da se zove 'izracunaj_ukupno'!"
assert izracunaj_ukupno([1200, 800]) == 2300, f"Za [1200, 800] + dostava 300 očekujemo 2300, a dobili smo {izracunaj_ukupno([1200, 800])}!"
assert izracunaj_ukupno([2000, 1500]) == 3500, f"Za porudžbinu preko 3000 dostava je besplatna (očekujemo 3500)!"
`
  },
  "k3-napredne-funkcije:1": {
    assertCode: `
assert 'analiziraj_tekst' in globals() and callable(analiziraj_tekst), "Funkcija mora da se zove 'analiziraj_tekst'!"
_res = analiziraj_tekst("Python je super")
assert _res == (3, 13, "Python"), f"Za 'Python je super' očekujemo (3, 13, 'Python'), a dobili smo {_res}!"
`
  },
  "k3-algoritmi-pretrage:0": {
    assertCode: `
assert 'maksimalni_koraci' in globals() and callable(maksimalni_koraci), "Funkcija mora da se zove 'maksimalni_koraci'!"
assert maksimalni_koraci(100) == 7, f"Za 100 elemenata binarna pretraga ima najviše 7 koraka, a dobili smo {maksimalni_koraci(100)}!"
assert maksimalni_koraci(1000) == 10, f"Za 1000 elemenata očekujemo 10 koraka!"
`
  },
  // KURS 2 — ZADATAK 4 (LOGIČKI DETEKTIV)
  "k2-print-formatiranje:3": {
    checkOutput: (out) => {
      if (!out.includes("199.99")) return "Formatiraj cenu na tačno 2 decimale (: .2f) da ispiše 199.99!";
      return null;
    }
  },
  "k2-varijable-kalkulatori:3": {
    checkOutput: (out) => {
      if (!out.includes("4.0")) return "Prosek brojeva 4, 5 i 3 je tačno 4.0 — proveri zagrade: (a + b + c) / 3!";
      return null;
    }
  },
  "k2-matematika-modulo-vreme:3": {
    checkOutput: (out) => {
      if (!out.includes("2h 25min")) return "145 minuta mora biti '2h 25min' — zameni // i % na pravo mesto!";
      return null;
    }
  },
  "k2-input-personalizacija:3": {
    checkOutput: (out) => {
      if (!out.includes("Potvrđeno")) return "Za '  DA  ' nakon .strip().lower() mora ispisati 'Potvrđeno!'";
      return null;
    }
  },
  "k2-slozena-grananja:3": {
    checkOutput: (out) => {
      if (!out.includes("Odličan")) return "Za 95 poena program mora ispisati 'Odličan', a ne 'Dobar'!";
      return null;
    }
  },
  "k2-petlje-simulacije:3": {
    checkOutput: (out) => {
      if (out.includes("Proveravam: 9") || out.includes("Proveravam: 11")) return "Petlja nije stala na broju 7! Dodaj 'break' odmah posle pronalaska broja 7.";
      if (!out.includes("Pronađen 7")) return "Mora ispisati 'Pronađen 7!'";
      return null;
    }
  },
  "k2-liste-menadzer:3": {
    assertCode: `
assert 'zadaci' in globals() and len(zadaci) == 2, f"Lista 'zadaci' ne sme imati duplikat! Očekujemo 2 stavke, a ima {len(zadaci)}."
`
  },
  "k2-funkcije-modularnost:3": {
    assertCode: `
assert 'cena_sa_popustom' in globals() and callable(cena_sa_popustom), "Funkcija se mora zvati 'cena_sa_popustom'!"
assert cena_sa_popustom(2000) == 1600.0, f"Za 2000 očekujemo 1600.0, a dobili smo {cena_sa_popustom(2000)}!"
_c2 = cena_sa_popustom(500)
assert _c2 is not None, "Za cenu 500 funkcija još uvek vraća None! Dodaj 'return cena'."
assert _c2 == 500, f"Za 500 bez popusta očekujemo 500, a dobili smo {_c2}!"
`
  },
  "k2-kviz-sampion:3": {
    checkOutput: (out) => {
      if (!out.includes("500")) return "Ukupno poena (500 + 0) mora biti 500 bez KeyError greške!";
      return null;
    }
  },
  // KURS 3 — ZADATAK 4 (INŽENJERSKI CODE REVIEW)
  "k3-lokalno-okruzenje:3": {
    checkOutput: (out) => {
      if (!out.includes("Okruženje je spremno")) return "Blok if __name__ == '__main__': se nije izvršio — proveri da ima po DVE donje crte!";
      return null;
    }
  },
  "k3-try-except-odbrana:3": {
    assertCode: `
assert 'bezbedan_int' in globals() and callable(bezbedan_int), "Funkcija se mora zvati 'bezbedan_int'!"
assert bezbedan_int("42") == 42, "bezbedan_int('42') mora vratiti 42!"
assert bezbedan_int("abc") == 0, "bezbedan_int('abc') mora bezbedno uhvatiti ValueError i vratiti 0!"
`
  },
  "k3-modul-random:3": {
    assertCode: `
assert 'izvuceni_brojevi' in globals() and callable(izvuceni_brojevi), "Funkcija se mora zvati 'izvuceni_brojevi'!"
_loto = izvuceni_brojevi()
assert len(_loto) == 6, f"Loto mora imati tačno 6 brojeva, a ima {len(_loto)}!"
assert len(set(_loto)) == 6, f"Brojevi na Lotou se ne smeju ponavljati! Dobili smo {_loto}. Koristi random.sample!"
`
  },
  "k3-vreme-i-matematika:3": {
    assertCode: `
assert 'paketi_plocica' in globals() and callable(paketi_plocica), "Funkcija se mora zvati 'paketi_plocica'!"
assert paketi_plocica(25, 10) == 3, f"Za 25 pločica po 10 u paketu trebaju 3 paketa (math.ceil), a dobili smo {paketi_plocica(25, 10)}!"
assert paketi_plocica(21, 10) == 3, "Za 21 pločicu po 10 takođe trebaju 3 paketa!"
`
  },
  "k3-rad-sa-fajlovima:3": {
    checkOutput: (out) => {
      if (!out.includes("Prvi red") || !out.includes("Drugi red")) return "Fajl mora sadržati OBA reda ('Prvi red' i 'Drugi red') — promeni režim 'w' u 'a'!";
      return null;
    }
  },
  "k3-matrice-i-2d:3": {
    assertCode: `
assert 'dohvati_polje' in globals() and callable(dohvati_polje), "Funkcija se mora zvati 'dohvati_polje'!"
_t = [["A", "B", "C"], ["D", "E", "F"]]
assert dohvati_polje(_t, 0, 2) == "C", f"Za red=0, kol=2 očekujemo 'C', a dobili smo {dohvati_polje(_t, 0, 2)}!"
assert dohvati_polje(_t, 1, 0) == "D", "Za red=1, kol=0 očekujemo 'D'!"
`
  },
  "k3-napredne-funkcije:3": {
    assertCode: `
assert 'dodaj_stavku' in globals() and callable(dodaj_stavku), "Funkcija se mora zvati 'dodaj_stavku'!"
_k1 = dodaj_stavku("Hleb")
_k2 = dodaj_stavku("Mleko")
assert _k2 == ["Mleko"], f"Drugi poziv ne sme deliti staru listu! Očekujemo ['Mleko'], a dobili smo {_k2}!"
`
  },
  "k3-algoritmi-pretrage:3": {
    assertCode: `
assert 'pronadji_indeks' in globals() and callable(pronadji_indeks), "Funkcija se mora zvati 'pronadji_indeks'!"
assert pronadji_indeks([10, 20, 30, 40, 50], 50) == 4, "Binarna pretraga mora pronaći poslednji element 50 na indeksu 4 (koristi while levo <= desno)!"
assert pronadji_indeks([10, 20, 30, 40, 50], 10) == 0, "Mora pronaći prvi element 10 na indeksu 0!"
`
  },
  "k3-tamagotchi-master:3": {
    assertCode: `
assert 'smanji_glad' in globals() and callable(smanji_glad), "Funkcija se mora zvati 'smanji_glad'!"
assert smanji_glad(15, 30) == 0, f"Glad nikada ne sme otići u minus! Očekujemo 0, a dobili smo {smanji_glad(15, 30)}!"
assert smanji_glad(50, 20) == 30, "Za smanji_glad(50, 20) očekujemo 30!"
`
  },
  "k3-algoritmi-pretrage:1": {
    assertCode: `
assert 'bubble_sort' in globals() and callable(bubble_sort), "Funkcija mora da se zove 'bubble_sort'!"
assert bubble_sort([5, 1, 4, 2, 8]) == [1, 2, 4, 5, 8], f"bubble_sort([5, 1, 4, 2, 8]) nije ispravno sortirao listu!"
`
  },
  // ==================== KURS 4: CS101 PRO AKADEMIJA ====================
  "c4-binarni-sistem:0": {
    assertCode: `
assert 'u_binarni' in globals() and callable(u_binarni), "Funkcija se mora zvati 'u_binarni'!"
assert u_binarni(10) == '1010', f"u_binarni(10) mora vratiti '1010', a vratilo je {u_binarni(10)}!"
assert u_binarni(42) == '101010', "u_binarni(42) mora vratiti '101010'!"
assert u_binarni(0) == '0', "u_binarni(0) mora vratiti '0'!"
`
  },
  "c4-binarni-sistem:1": {
    assertCode: `
assert 'dekodiraj' in globals() and callable(dekodiraj), "Funkcija se mora zvati 'dekodiraj'!"
assert dekodiraj([75, 79, 68]) == 'KOD', f"dekodiraj([75, 79, 68]) mora vratiti 'KOD'!"
assert dekodiraj([65, 66]) == 'AB', "dekodiraj([65, 66]) mora vratiti 'AB'!"
`
  },
  "c4-binarni-sistem:2": {
    assertCode: `
assert 'bin_u_dec' in globals() and callable(bin_u_dec), "Funkcija se mora zvati 'bin_u_dec'!"
assert bin_u_dec('1010') == 10, f"bin_u_dec('1010') mora biti 10, a ne {bin_u_dec('1010')}!"
assert bin_u_dec('1111') == 15, "bin_u_dec('1111') mora biti 15!"
`
  },
  "c4-binarni-sistem:3": {
    assertCode: `
assert 'sifruj_cezar' in globals() and callable(sifruj_cezar), "Funkcija se mora zvati 'sifruj_cezar'!"
assert sifruj_cezar('ABC', 1) == 'BCD', "sifruj_cezar('ABC', 1) mora vratiti 'BCD'!"
assert sifruj_cezar('A', 3) == 'D', "sifruj_cezar('A', 3) mora vratiti 'D'!"
`
  },
  "c4-algoritmi-rekurzija:0": {
    assertCode: `
assert 'rekurzivni_zbir' in globals() and callable(rekurzivni_zbir), "Funkcija se mora zvati 'rekurzivni_zbir'!"
assert rekurzivni_zbir(5) == 15, "rekurzivni_zbir(5) mora vratiti 15!"
assert rekurzivni_zbir(0) == 0, "Bazni slučaj rekurzivni_zbir(0) mora vratiti 0!"
`
  },
  "c4-algoritmi-rekurzija:1": {
    assertCode: `
assert 'gaus_zbir' in globals() and callable(gaus_zbir), "Funkcija se mora zvati 'gaus_zbir'!"
assert gaus_zbir(100) == 5050, "gaus_zbir(100) mora vratiti 5050!"
assert gaus_zbir(10) == 55, "gaus_zbir(10) mora vratiti 55!"
`
  },
  "c4-algoritmi-rekurzija:2": {
    assertCode: `
assert 'faktorijel' in globals() and callable(faktorijel), "Funkcija se mora zvati 'faktorijel'!"
assert faktorijel(5) == 120, "faktorijel(5) mora vratiti 120!"
assert faktorijel(1) == 1, "faktorijel(1) mora vratiti 1!"
`
  },
  "c4-algoritmi-rekurzija:3": {
    assertCode: `
assert 'fibonaci' in globals() and callable(fibonaci), "Funkcija se mora zvati 'fibonaci'!"
assert fibonaci(0) == 0 and fibonaci(1) == 1, "fibonaci(0)=0 i fibonaci(1)=1!"
assert fibonaci(6) == 8 and fibonaci(10) == 55, "fibonaci(6) mora biti 8, a fibonaci(10) mora biti 55!"
`
  },
  "c4-strukture-podataka:0": {
    assertCode: `
assert 'jedinstveni_broj' in globals() and callable(jedinstveni_broj), "Funkcija se mora zvati 'jedinstveni_broj'!"
assert jedinstveni_broj([1, 2, 2, 3, 3, 3]) == 3, "Očekujemo 3 jedinstvena elementa!"
assert jedinstveni_broj([]) == 0, "Za praznu listu očekujemo 0!"
`
  },
  "c4-strukture-podataka:1": {
    assertCode: `
assert 'prebroj_slova' in globals() and callable(prebroj_slova), "Funkcija se mora zvati 'prebroj_slova'!"
assert prebroj_slova('banana') == {'b': 1, 'a': 3, 'n': 2}, "Pogrešno prebrojana slova za 'banana'!"
`
  },
  "c4-strukture-podataka:2": {
    assertCode: `
assert 'usluzi_prvog' in globals() and callable(usluzi_prvog), "Funkcija se mora zvati 'usluzi_prvog'!"
_r = ['Prvi', 'Drugi', 'Treci']
assert usluzi_prvog(_r) == 'Prvi', "Red (FIFO) mora uslužiti prvog u redu pomoću .pop(0)!"
assert _r == ['Drugi', 'Treci'], "Nakon usluživanja u redu ostaju Drugi i Treci!"
`
  },
  "c4-strukture-podataka:3": {
    assertCode: `
assert 'zagrade_validne' in globals() and callable(zagrade_validne), "Funkcija se mora zvati 'zagrade_validne'!"
assert zagrade_validne('(())') is True, "'(())' mora biti True!"
assert zagrade_validne(')(') is False, "')(' mora biti False!"
assert zagrade_validne('((()') is False, "'((()' mora biti False!"
`
  },
  "c4-oop-osnove:0": {
    assertCode: `
assert 'Pravougaonik' in globals(), "Klasa se mora zvati 'Pravougaonik'!"
_p = Pravougaonik(3, 7)
assert _p.povrsina() == 21, "Površina za 3x7 mora biti 21!"
`
  },
  "c4-oop-osnove:1": {
    assertCode: `
assert 'Racun' in globals(), "Klasa se mora zvati 'Racun'!"
_r = Racun(500)
assert _r.isplati(200) is True and _r.stanje == 300, "Isplata 200 od 500 mora vratiti True i ostaviti 300!"
assert _r.isplati(400) is False and _r.stanje == 300, "Isplata preko stanja mora vratiti False!"
`
  },
  "c4-oop-osnove:2": {
    assertCode: `
assert 'Brojac' in globals(), "Klasa se mora zvati 'Brojac'!"
_b = Brojac()
_b.uvecaj()
_b.uvecaj()
assert _b.vrednost == 2, "Posle dva poziva uvecaj() vrednost mora biti 2!"
`
  },
  "c4-oop-osnove:3": {
    assertCode: `
assert 'Korpa' in globals(), "Klasa se mora zvati 'Korpa'!"
_k = Korpa()
_k.dodaj('Test1', 300)
_k.dodaj('Test2', 700)
assert _k.ukupno() == 1000, "Ukupna cena u korpi mora biti 1000!"
`
  },
  "c4-oop-napredni:0": {
    assertCode: `
assert 'Knjiga' in globals(), "Klasa se mora zvati 'Knjiga'!"
_k = Knjiga('Prokleta avlija', 'Ivo Andrić')
assert str(_k) == 'Prokleta avlija - Ivo Andrić', f"__str__ mora vratiti 'Naslov - Autor', a vratilo je '{str(_k)}'!"
`
  },
  "c4-oop-napredni:1": {
    assertCode: `
assert 'Vozilo' in globals() and 'ElektricniAuto' in globals(), "Klase Vozilo i ElektricniAuto moraju postojati!"
_e = ElektricniAuto('VW', 80)
assert isinstance(_e, Vozilo), "ElektricniAuto mora naslediti klasu Vozilo!"
assert _e.marka == 'VW' and _e.baterija == 80, "Atributi marka i baterija moraju biti ispravno postavljeni!"
`
  },
  "c4-oop-napredni:2": {
    assertCode: `
assert 'Tacka' in globals(), "Klasa se mora zvati 'Tacka'!"
assert Tacka(2, 5) == Tacka(2, 5), "Dve tačke sa istim x i y moraju biti jednake (__eq__)!"
assert not (Tacka(2, 5) == Tacka(2, 6)), "Tačke sa različitim koordinatama ne smeju biti jednake!"
`
  },
  "c4-oop-napredni:3": {
    assertCode: `
assert 'ukupna_povrsina' in globals() and callable(ukupna_povrsina), "Funkcija se mora zvati 'ukupna_povrsina'!"
assert abs(ukupna_povrsina([Kvadrat(3), Krug(1)]) - 12.14) < 0.01, "Ukupna površina za Kvadrat(3) + Krug(1) mora biti 12.14!"
`
  },
  "c4-regex-obrasci:0": {
    assertCode: `
assert 'izvuci_brojeve' in globals() and callable(izvuci_brojeve), "Funkcija se mora zvati 'izvuci_brojeve'!"
assert izvuci_brojeve('A 10, B 250') == [10, 250], "Mora vratiti listu celih brojeva [10, 250]!"
`
  },
  "c4-regex-obrasci:1": {
    assertCode: `
assert 'validan_email' in globals() and callable(validan_email), "Funkcija se mora zvati 'validan_email'!"
assert validan_email('ana.m@skola.rs') is True, "Validan e-mail mora vratiti True!"
assert validan_email('los_email@') is False, "Neispravan e-mail mora vratiti False!"
`
  },
  "c4-regex-obrasci:2": {
    assertCode: `
assert 'je_decimalan' in globals() and callable(je_decimalan), "Funkcija se mora zvati 'je_decimalan'!"
assert je_decimalan('3.14') is True, "'3.14' mora vratiti True!"
assert je_decimalan('3a14') is False, "'3a14' mora vratiti False (tačka mora biti \\\\.)!"
`
  },
  "c4-regex-obrasci:3": {
    assertCode: `
assert 'sakrij_brojeve' in globals() and callable(sakrij_brojeve), "Funkcija se mora zvati 'sakrij_brojeve'!"
assert sakrij_brojeve('PIN 1234') == 'PIN ****', "Sve cifre moraju biti zamenjene zvezdicama!"
`
  },
  "c4-unit-testovi:0": {
    assertCode: `
assert 'bezbedan_prosek' in globals() and callable(bezbedan_prosek), "Funkcija se mora zvati 'bezbedan_prosek'!"
assert bezbedan_prosek([4, 6]) == 5, "Prosek [4, 6] mora biti 5!"
assert bezbedan_prosek([]) == 0, "Za praznu listu funkcija mora vratiti 0 bez greške!"
`
  },
  "c4-unit-testovi:1": {
    assertCode: `
assert 'je_palindrom' in globals() and callable(je_palindrom), "Funkcija se mora zvati 'je_palindrom'!"
assert je_palindrom('Ana voli Milovana') is True, "'Ana voli Milovana' je palindrom!"
assert je_palindrom('Program') is False, "'Program' nije palindrom!"
`
  },
  "c4-unit-testovi:2": {
    assertCode: `
assert 'je_punoletan' in globals() and callable(je_punoletan), "Funkcija se mora zvati 'je_punoletan'!"
assert je_punoletan(18) is True, "18 godina je punoletno!"
assert je_punoletan(17) is False, "17 godina nije punoletno!"
assert je_punoletan(200) is False, "200 godina nije realan uzrast (mora biti < 150)!"
`
  },
  "c4-unit-testovi:3": {
    assertCode: `
assert 'jaka_lozinka' in globals() and callable(jaka_lozinka), "Funkcija se mora zvati 'jaka_lozinka'!"
assert jaka_lozinka('Tajna123') is True, "'Tajna123' je jaka lozinka!"
assert jaka_lozinka('tajna123') is False, "Nedostaje veliko slovo!"
assert jaka_lozinka('Tajnaaaa') is False, "Nedostaje cifra!"
assert jaka_lozinka('Ab1') is False, "Prekratka lozinka (< 8 karaktera)!"
`
  },
  "c4-json-csv-api:0": {
    assertCode: `
assert 'izvuci_cenu' in globals() and callable(izvuci_cenu), "Funkcija se mora zvati 'izvuci_cenu'!"
assert izvuci_cenu('{"artikal": "Telefon", "cena": 420}') == 420, "Mora vratiti 420!"
`
  },
  "c4-json-csv-api:1": {
    assertCode: `
assert 'zbir_csv' in globals() and callable(zbir_csv), "Funkcija se mora zvati 'zbir_csv'!"
assert zbir_csv('Jabuka,100\\nKruska,250') == 350, "Zbir cena u CSV-u mora biti 350!"
`
  },
  "c4-json-csv-api:2": {
    assertCode: `
assert 'bezbedan_json' in globals() and callable(bezbedan_json), "Funkcija se mora zvati 'bezbedan_json'!"
assert bezbedan_json('{"a": 5}') == {'a': 5}, "Ispravan JSON mora vratiti rečnik!"
assert bezbedan_json('{greska') == {}, "Neispravan JSON mora vratiti prazan rečnik {}!"
`
  },
  "c4-json-csv-api:3": {
    assertCode: `
assert 'najskuplji_proizvod' in globals() and callable(najskuplji_proizvod), "Funkcija se mora zvati 'najskuplji_proizvod'!"
assert najskuplji_proizvod('[{"naziv":"A","cena":10},{"naziv":"B","cena":99}]') == 'B', "Mora vratiti naziv najskupljeg proizvoda ('B')!"
`
  },
  "c4-baze-i-sql:0": {
    assertCode: `
assert 'filtriraj_top' in globals() and callable(filtriraj_top), "Funkcija se mora zvati 'filtriraj_top'!"
assert filtriraj_top([{'ime': 'X', 'xp': 600}, {'ime': 'Y', 'xp': 100}], 500) == ['X'], "Mora vratiti samo ['X']!"
`
  },
  "c4-baze-i-sql:1": {
    assertCode: `
assert 'grupisi_potrosnju' in globals() and callable(grupisi_potrosnju), "Funkcija se mora zvati 'grupisi_potrosnju'!"
_res = grupisi_potrosnju([{'kategorija': 'A', 'iznos': 10}, {'kategorija': 'A', 'iznos': 25}, {'kategorija': 'B', 'iznos': 5}])
assert _res == {'A': 35, 'B': 5}, f"Očekujemo {{'A': 35, 'B': 5}}, a dobili smo {_res}!"
`
  },
  "c4-baze-i-sql:2": {
    assertCode: `
assert 'sortiraj_rang' in globals() and callable(sortiraj_rang), "Funkcija se mora zvati 'sortiraj_rang'!"
_s = sortiraj_rang([{'ime': 'P', 'xp': 50}, {'ime': 'Q', 'xp': 400}])
assert _s[0]['ime'] == 'Q', "Prvi na rang-listi mora imati najviše XP (reverse=True)!"
`
  },
  "c4-baze-i-sql:3": {
    assertCode: `
assert 'spoji_kupovine' in globals() and callable(spoji_kupovine), "Funkcija se mora zvati 'spoji_kupovine'!"
_j = spoji_kupovine([{'id': 1, 'ime': 'Mila'}], [{'korisnik_id': 1, 'iznos': 75}])
assert _j == [{'ime': 'Mila', 'iznos': 75}], "INNER JOIN nije ispravno spojio korisnika i kupovinu!"
`
  },
  "c4-diplomski-projekat:0": {
    assertCode: `
assert 'Banka' in globals(), "Klasa se mora zvati 'Banka'!"
_b = Banka()
assert _b.ukupan_kapital() == sum(_b.racuni.values()), "ukupan_kapital() mora vratiti zbir svih računa!"
`
  },
  "c4-diplomski-projekat:1": {
    assertCode: `
assert 'Banka' in globals(), "Klasa se mora zvati 'Banka'!"
_b = Banka({'A': 100, 'B': 900, 'C': 300})
assert _b.top_klijent() == 'B', "Najbogatiji klijent mora biti 'B'!"
`
  },
  "c4-diplomski-projekat:2": {
    assertCode: `
assert 'Banka' in globals(), "Klasa se mora zvati 'Banka'!"
_b = Banka()
assert _b.prenos('Haker', 'Ana', -500) is False, "Negativan prenos MORA biti odbijen (False)!"
assert _b.prenos('Ana', 'Haker', 200) is True, "Ispravan prenos mora uspeti (True)!"
`
  },
  "c4-diplomski-projekat:3": {
    assertCode: `
assert 'Novcanik' in globals(), "Klasa se mora zvati 'Novcanik'!"
_n = Novcanik('Test', 100)
assert _n.uplati(50) is True and _n.stanje == 150, "Uplata 50 mora podići stanje na 150!"
assert _n.plati(200) is False and _n.stanje == 150, "Plaćanje preko stanja mora biti odbijeno!"
assert _n.plati(30) is True and _n.stanje == 120, "Plaćanje 30 mora spustiti stanje na 120!"
_js = json.loads(_n.izvestaj_json())
assert _js['vlasnik'] == 'Test' and _js['stanje'] == 120, "izvestaj_json() mora vratiti ispravan JSON sa vlasnikom i stanjem!"
`
  },
  // ==================== KURS 4: PYTHONIČNI MOST (6 LEKCIJA) ====================
  "cb-stringovi-slicing:0": {
    assertCode: `
assert 'obrni' in globals() and callable(obrni), "Funkcija se mora zvati 'obrni'!"
assert obrni('Python') == 'nohtyP', "obrni('Python') mora vratiti 'nohtyP'!"
assert obrni('12345') == '54321', "obrni('12345') mora vratiti '54321'!"
`
  },
  "cb-stringovi-slicing:1": {
    assertCode: `
assert 'napravi_slug' in globals() and callable(napravi_slug), "Funkcija se mora zvati 'napravi_slug'!"
assert napravi_slug('  Uvod u Python  ') == 'uvod-u-python', "Slug mora biti 'uvod-u-python'!"
assert napravi_slug('CS101   Pro') == 'cs101-pro', "Višestruki razmaci moraju postati jedna crtica!"
`
  },
  "cb-stringovi-slicing:2": {
    assertCode: `
assert 'spoji_zarezom' in globals() and callable(spoji_zarezom), "Funkcija se mora zvati 'spoji_zarezom'!"
assert spoji_zarezom(['A', 'B', 'C']) == 'A, B, C', "Očekujemo 'A, B, C'!"
`
  },
  "cb-stringovi-slicing:3": {
    assertCode: `
assert 'inicijali' in globals() and callable(inicijali), "Funkcija se mora zvati 'inicijali'!"
assert inicijali('nikola tesla') == 'N.T.', "inicijali('nikola tesla') mora biti 'N.T.'!"
assert inicijali('  ana marija  ') == 'A.M.', "Inicijali moraju ignorisati višak razmaka!"
`
  },
  "cb-torke-skupovi:0": {
    assertCode: `
assert 'zajednicki' in globals() and callable(zajednicki), "Funkcija se mora zvati 'zajednicki'!"
assert zajednicki(['Ana', 'Vuk', 'Ivo'], ['Vuk', 'Tara', 'Ana']) == ['Ana', 'Vuk'], "Mora vratiti sortiranu listu ['Ana', 'Vuk']!"
`
  },
  "cb-torke-skupovi:1": {
    assertCode: `
assert 'granice' in globals() and callable(granice), "Funkcija se mora zvati 'granice'!"
assert granice([15, 3, 42, 8]) == (3, 42), "granice([15, 3, 42, 8]) mora vratiti torku (3, 42)!"
`
  },
  "cb-torke-skupovi:2": {
    assertCode: `
assert 'jedinstveni_skup' in globals() and callable(jedinstveni_skup), "Funkcija se mora zvati 'jedinstveni_skup'!"
assert jedinstveni_skup([1, 2, 2, 3]) == {1, 2, 3}, "Mora vratiti skup {1, 2, 3}!"
assert isinstance(jedinstveni_skup([]), set), "Prazan skup mora biti tipa set()!"
`
  },
  "cb-torke-skupovi:3": {
    assertCode: `
assert 'obrni_recnik' in globals() and callable(obrni_recnik), "Funkcija se mora zvati 'obrni_recnik'!"
assert obrni_recnik({'A': 1, 'B': 2}) == {1: 'A', 2: 'B'}, "Ključevi i vrednosti moraju biti zamenjeni!"
`
  },
  "cb-comprehensions:0": {
    assertCode: `
assert 'samo_pozitivni' in globals() and callable(samo_pozitivni), "Funkcija se mora zvati 'samo_pozitivni'!"
assert samo_pozitivni([-5, 0, 3, -1, 8]) == [3, 8], "Očekujemo samo strogo pozitivne [3, 8]!"
`
  },
  "cb-comprehensions:1": {
    assertCode: `
assert 'mapa_kvadrata' in globals() and callable(mapa_kvadrata), "Funkcija se mora zvati 'mapa_kvadrata'!"
assert mapa_kvadrata(3) == {1: 1, 2: 4, 3: 9}, "mapa_kvadrata(3) mora biti {1: 1, 2: 4, 3: 9}!"
`
  },
  "cb-comprehensions:2": {
    assertCode: `
assert 'etikete' in globals() and callable(etikete), "Funkcija se mora zvati 'etikete'!"
assert etikete([1, 2, 3, 4]) == ['neparan', 'paran', 'neparan', 'paran'], "Očekujemo ['neparan', 'paran', 'neparan', 'paran']!"
`
  },
  "cb-comprehensions:3": {
    assertCode: `
assert 'indeksiraj_ucenike' in globals() and callable(indeksiraj_ucenike), "Funkcija se mora zvati 'indeksiraj_ucenike'!"
_r = indeksiraj_ucenike([{'id': 1, 'ime': 'A', 'aktivan': True}, {'id': 2, 'ime': 'B', 'aktivan': False}])
assert _r == {1: 'A'}, "Mora indeksirati samo aktivne učenike!"
`
  },
  "cb-lambda-funkcionalni:0": {
    assertCode: `
assert 'sortiraj_po_duzini' in globals() and callable(sortiraj_po_duzini), "Funkcija se mora zvati 'sortiraj_po_duzini'!"
assert sortiraj_po_duzini(['algoritam', 'kod', 'a']) == ['a', 'kod', 'algoritam'], "Reči moraju biti sortirane od najkraće ka najdužoj!"
`
  },
  "cb-lambda-funkcionalni:1": {
    assertCode: `
assert 'svi_polozili' in globals() and callable(svi_polozili), "Funkcija se mora zvati 'svi_polozili'!"
assert svi_polozili([50, 80, 90]) is True, "Svi imaju >= 50, očekujemo True!"
assert svi_polozili([50, 49, 90]) is False, "Jedan ima 49 < 50, očekujemo False!"
`
  },
  "cb-lambda-funkcionalni:2": {
    assertCode: `
assert 'najjeftiniji' in globals() and callable(najjeftiniji), "Funkcija se mora zvati 'najjeftiniji'!"
assert najjeftiniji([{'naziv': 'X', 'cena': 500}, {'naziv': 'Y', 'cena': 50}]) == 'Y', "Najjeftiniji mora biti 'Y'!"
`
  },
  "cb-lambda-funkcionalni:3": {
    assertCode: `
assert 'spoji_u_recnik' in globals() and callable(spoji_u_recnik), "Funkcija se mora zvati 'spoji_u_recnik'!"
assert spoji_u_recnik(['a', 'b'], [1, 2]) == {'a': 1, 'b': 2}, "Očekujemo {'a': 1, 'b': 2}!"
`
  },
  "cb-moduli-pip-venv:0": {
    assertCode: `
assert 'formatiraj_paket' in globals() and callable(formatiraj_paket), "Funkcija se mora zvati 'formatiraj_paket'!"
assert formatiraj_paket('  Flask ', ' 3.0 ') == 'flask==3.0', "Očekujemo 'flask==3.0'!"
`
  },
  "cb-moduli-pip-venv:1": {
    assertCode: `
assert 'parsiraj_pakete' in globals() and callable(parsiraj_pakete), "Funkcija se mora zvati 'parsiraj_pakete'!"
assert parsiraj_pakete('a==1.0\\n# kom\\nb==2.0') == {'a': '1.0', 'b': '2.0'}, "Komentari se moraju preskočiti i paketi parsirati!"
`
  },
  "cb-moduli-pip-venv:2": {
    assertCode: `
assert 'je_python_fajl' in globals() and callable(je_python_fajl), "Funkcija se mora zvati 'je_python_fajl'!"
assert je_python_fajl('main.py') is True, "'main.py' mora biti True!"
assert je_python_fajl('main.py.bak') is False, "'main.py.bak' mora biti False!"
`
  },
  "cb-moduli-pip-venv:3": {
    assertCode: `
assert 'nedostaju_paketi' in globals() and callable(nedostaju_paketi), "Funkcija se mora zvati 'nedostaju_paketi'!"
assert nedostaju_paketi(['Flask', 'Pytest', 'Requests'], ['flask']) == ['pytest', 'requests'], "Očekujemo ['pytest', 'requests']!"
`
  },
  "cb-analizator-podataka:0": {
    assertCode: `
assert 'broj_jedinstvenih_reci' in globals() and callable(broj_jedinstvenih_reci), "Funkcija se mora zvati 'broj_jedinstvenih_reci'!"
assert broj_jedinstvenih_reci('Python je super i python je brz') == 5, "Očekujemo tačno 5 jedinstvenih reči!"
`
  },
  "cb-analizator-podataka:1": {
    assertCode: `
assert 'najduza_rec' in globals() and callable(najduza_rec), "Funkcija se mora zvati 'najduza_rec'!"
assert najduza_rec('Učimo Python programiranje danas') == 'programiranje', "Najduža reč je 'programiranje'!"
assert najduza_rec('') == '', "Za prazan tekst očekujemo prazan string ''!"
`
  },
  "cb-analizator-podataka:2": {
    assertCode: `
assert 'top_n_poena' in globals() and callable(top_n_poena), "Funkcija se mora zvati 'top_n_poena'!"
_d = [{'ime': 'A', 'xp': 10}, {'ime': 'B', 'xp': 90}, {'ime': 'C', 'xp': 50}]
assert top_n_poena(_d, 2) == ['B', 'C'], "Top 2 igrača moraju biti ['B', 'C']!"
`
  },
  "cb-analizator-podataka:3": {
    assertCode: `
assert 'analiziraj' in globals() and callable(analiziraj), "Funkcija se mora zvati 'analiziraj'!"
_a = analiziraj('kod je čist i kod je brz jer je kod umetnost')
assert _a['ukupno'] == 11, f"Ukupno reči mora biti 11, a dobili smo {_a['ukupno']}!"
assert _a['jedinstvenih'] == 7, f"Jedinstvenih reči mora biti 7, a dobili smo {_a['jedinstvenih']}!"
assert _a['najcesca'] in ('kod', 'je'), "Najčešća reč mora biti 'kod' ili 'je'!"
`
  },
  // ==================== KURS 5: VOĐENI PROJEKTI (10 PROJEKATA, 40 TESTOVA) ====================
  "gp-01-generator-lozinki:0": {
    assertCode: `
assert 'bez_dvosmislenih' in globals() and callable(bez_dvosmislenih), "Funkcija se mora zvati 'bez_dvosmislenih'!"
assert bez_dvosmislenih('Ab0O1lI9Z') == 'Ab9Z', "Znakovi 0, O, 1, l i I moraju biti izbačeni!"
`
  },
  "gp-01-generator-lozinki:1": {
    assertCode: `
assert 'oceni_lozinku' in globals() and callable(oceni_lozinku), "Funkcija se mora zvati 'oceni_lozinku'!"
assert oceni_lozinku('SuperTajna#2026') == 5, "Jaka lozinka od 15 znakova sa simbolom mora dobiti 5!"
assert oceni_lozinku('abc') == 0, "Slaba lozinka 'abc' mora dobiti 0!"
`
  },
  "gp-01-generator-lozinki:2": {
    assertCode: `
assert 'je_bezbedna' in globals() and callable(je_bezbedna), "Funkcija se mora zvati 'je_bezbedna'!"
assert je_bezbedna('aaaaaaaa') is False, "'aaaaaaaa' nije bezbedna lozinka!"
assert je_bezbedna('Tajna123') is True, "'Tajna123' ispunjava sva pravila!"
`
  },
  "gp-01-generator-lozinki:3": {
    assertCode: `
assert 'revizija_lozinki' in globals() and callable(revizija_lozinki), "Funkcija se mora zvati 'revizija_lozinki'!"
_r = revizija_lozinki(['123', 'Tajna123', 'MegaSigurna2026'])
assert _r == {'JAKA': 1, 'SREDNJA': 1, 'SLABA': 1}, f"Očekujemo po 1 od svake kategorije, a dobili smo {_r}!"
`
  },
  "gp-02-budzet-menadzer:0": {
    assertCode: `
assert 'ucitaj_csv' in globals() and callable(ucitaj_csv), "Funkcija se mora zvati 'ucitaj_csv'!"
_u = ucitaj_csv('Hrana,1200\\nPrevoz,450')
assert len(_u) == 2 and _u[0]['kategorija'] == 'Hrana' and _u[0]['iznos'] == 1200.0, "CSV parsiranje nije tačno!"
`
  },
  "gp-02-budzet-menadzer:1": {
    assertCode: `
assert 'procenti_kategorija' in globals() and callable(procenti_kategorija), "Funkcija se mora zvati 'procenti_kategorija'!"
assert procenti_kategorija([{'kategorija': 'A', 'iznos': 750}, {'kategorija': 'B', 'iznos': 250}]) == {'A': 75.0, 'B': 25.0}, "Očekujemo {'A': 75.0, 'B': 25.0}!"
assert procenti_kategorija([]) == {}, "Za praznu listu mora vratiti {}!"
`
  },
  "gp-02-budzet-menadzer:2": {
    assertCode: `
assert 'dodaj_trosak' in globals() and callable(dodaj_trosak), "Funkcija se mora zvati 'dodaj_trosak'!"
_l = []
assert dodaj_trosak(_l, 'Hrana', -100) is False and len(_l) == 0, "Negativan trošak mora biti odbijen!"
assert dodaj_trosak(_l, 'Hrana', 500) is True and len(_l) == 1, "Pozitivan trošak mora biti dodat!"
`
  },
  "gp-02-budzet-menadzer:3": {
    assertCode: `
assert 'prekoraceni_limiti' in globals() and callable(prekoraceni_limiti), "Funkcija se mora zvati 'prekoraceni_limiti'!"
assert prekoraceni_limiti({'Hrana': 15000, 'Prevoz': 3000, 'Zabava': 6000}, {'Hrana': 12000, 'Prevoz': 4000, 'Zabava': 5000}) == ['Hrana', 'Zabava'], "Mora vratiti ['Hrana', 'Zabava']!"
`
  },
  "gp-03-imenik-kontakata:0": {
    assertCode: `
assert 'normalizuj_broj' in globals() and callable(normalizuj_broj), "Funkcija se mora zvati 'normalizuj_broj'!"
assert normalizuj_broj('064 123-456') == '+38164123456', "Mora vratiti '+38164123456'!"
assert normalizuj_broj('+381 63/999-888') == '+38163999888', "Već normalizovan prefiks se čuva!"
`
  },
  "gp-03-imenik-kontakata:1": {
    assertCode: `
assert 'pretrazi' in globals() and callable(pretrazi), "Funkcija se mora zvati 'pretrazi'!"
_db = [{'ime': 'Ana', 'tel': '+38164111'}, {'ime': 'Vuk', 'tel': '+38163222'}]
assert pretrazi(_db, '641') == ['Ana'] and pretrazi(_db, 'vu') == ['Vuk'], "Pretraga po imenu i broju mora raditi!"
`
  },
  "gp-03-imenik-kontakata:2": {
    assertCode: `
assert 'dodaj_kontakt' in globals() and callable(dodaj_kontakt), "Funkcija se mora zvati 'dodaj_kontakt'!"
_db = [{'ime': 'Ana', 'tel': '064111'}]
assert dodaj_kontakt(_db, 'ana', '064999') is False, "Duplikat malim slovima mora biti blokiran!"
assert dodaj_kontakt(_db, 'Vuk', '063222') is True, "Novi kontakt mora biti dodat!"
`
  },
  "gp-03-imenik-kontakata:3": {
    assertCode: `
assert 'grupisi_kontakte' in globals() and callable(grupisi_kontakte), "Funkcija se mora zvati 'grupisi_kontakte'!"
_db = [{'ime': 'Marko', 'grupa': 'Posao'}, {'ime': 'Ana', 'grupa': 'Posao'}, {'ime': 'Vuk', 'grupa': 'Porodica'}]
assert grupisi_kontakte(_db) == {'Posao': ['Ana', 'Marko'], 'Porodica': ['Vuk']}, "Grupisanje i sortiranje po grupama nije tačno!"
`
  },
  "gp-04-flashcards-ucenje:0": {
    assertCode: `
assert 'proveri_odgovor' in globals() and callable(proveri_odgovor), "Funkcija se mora zvati 'proveri_odgovor'!"
_k = {'pitanje': 'set', 'odgovor': 'Skup', 'tacno': 0, 'netacno': 0}
assert proveri_odgovor(_k, '  skup ') is True and _k['tacno'] == 1, "Tačan odgovor mora uvećati tacno!"
assert proveri_odgovor(_k, 'lista') is False and _k['netacno'] == 1, "Netačan odgovor mora uvećati netacno!"
`
  },
  "gp-04-flashcards-ucenje:1": {
    assertCode: `
assert 'teske_kartice' in globals() and callable(teske_kartice), "Funkcija se mora zvati 'teske_kartice'!"
_db = [{'pitanje': 'A', 'tacno': 3, 'netacno': 0}, {'pitanje': 'B', 'tacno': 1, 'netacno': 2}, {'pitanje': 'C', 'tacno': 0, 'netacno': 0}]
assert teske_kartice(_db) == ['B', 'C'], "Teške i nove kartice moraju biti ['B', 'C']!"
`
  },
  "gp-04-flashcards-ucenje:2": {
    assertCode: `
assert 'procenat_znanja' in globals() and callable(procenat_znanja), "Funkcija se mora zvati 'procenat_znanja'!"
assert procenat_znanja({'tacno': 0, 'netacno': 0}) == 0.0, "Za novu karticu bez pokušaja mora vratiti 0.0!"
assert procenat_znanja({'tacno': 3, 'netacno': 1}) == 75.0, "3 od 4 mora vratiti 75.0!"
`
  },
  "gp-04-flashcards-ucenje:3": {
    assertCode: `
assert 'sledeci_redosled' in globals() and callable(sledeci_redosled), "Funkcija se mora zvati 'sledeci_redosled'!"
_db = [{'pitanje': 'Lako', 'tacno': 5, 'netacno': 0}, {'pitanje': 'Tesko', 'tacno': 0, 'netacno': 4}, {'pitanje': 'Srednje', 'tacno': 2, 'netacno': 2}]
assert sledeci_redosled(_db) == ['Tesko', 'Srednje', 'Lako'], "Najteže kartice moraju biti prve!"
`
  },
  "gp-05-analizator-logova:0": {
    assertCode: `
assert 'parsiraj_log_red' in globals() and callable(parsiraj_log_red), "Funkcija se mora zvati 'parsiraj_log_red'!"
assert parsiraj_log_red('10.0.0.9|ERROR|/login|401') == {'ip': '10.0.0.9', 'nivo': 'ERROR', 'ruta': '/login', 'status': 401}, "Parsiranje log linije nije tačno!"
`
  },
  "gp-05-analizator-logova:1": {
    assertCode: `
assert 'statistika_nivoa' in globals() and callable(statistika_nivoa), "Funkcija se mora zvati 'statistika_nivoa'!"
assert statistika_nivoa('1|INFO|/|200\\n2|ERROR|/a|500\\n3|ERROR|/b|401') == {'INFO': 1, 'ERROR': 2}, "Brojanje nivoa nije tačno!"
`
  },
  "gp-05-analizator-logova:2": {
    assertCode: `
assert 'kriticne_rute' in globals() and callable(kriticne_rute), "Funkcija se mora zvati 'kriticne_rute'!"
assert kriticne_rute('1|ERROR|/pay|500\\n2|ERROR|/pay|503\\n3|INFO|/ok|99') == ['/pay'], "Mora vratiti samo ['/pay'] bez duplikata i bez statusa 99!"
`
  },
  "gp-05-analizator-logova:3": {
    assertCode: `
assert 'sumnjive_ip' in globals() and callable(sumnjive_ip), "Funkcija se mora zvati 'sumnjive_ip'!"
_s = '10.0.0.9|ERROR|/login|401\\n10.0.0.9|ERROR|/login|401\\n10.0.0.9|ERROR|/login|401\\n10.0.0.1|ERROR|/login|401'
assert sumnjive_ip(_s, 3) == ['10.0.0.9'], "Mora detektovati samo ['10.0.0.9']!"
`
  },
  "gp-06-inventar-prodavnice:0": {
    assertCode: `
assert 'niske_zalihe' in globals() and callable(niske_zalihe), "Funkcija se mora zvati 'niske_zalihe'!"
_db = {'1': {'naziv': 'Mleko', 'stanje': 12}, '2': {'naziv': 'Kafa', 'stanje': 3}, '3': {'naziv': 'Hleb', 'stanje': 2}}
assert niske_zalihe(_db, 5) == ['Hleb', 'Kafa'], "Mora vratiti sortiranu listu ['Hleb', 'Kafa']!"
`
  },
  "gp-06-inventar-prodavnice:1": {
    assertCode: `
assert 'prodaj' in globals() and callable(prodaj), "Funkcija se mora zvati 'prodaj'!"
_db = {'101': {'naziv': 'Mleko', 'cena': 160, 'stanje': 5}}
assert prodaj(_db, '101', 3) == 480 and _db['101']['stanje'] == 2, "Prodaja 3 komada mora vratiti 480 i ostaviti 2!"
assert prodaj(_db, '101', 10) == 0 and _db['101']['stanje'] == 2, "Prodaja preko zaliha mora vratiti 0!"
assert prodaj(_db, '101', -1) == 0, "Negativna količina mora vratiti 0!"
`
  },
  "gp-06-inventar-prodavnice:2": {
    assertCode: `
assert 'obracun_sa_popustom' in globals() and callable(obracun_sa_popustom), "Funkcija se mora zvati 'obracun_sa_popustom'!"
assert obracun_sa_popustom(6000) == 5400.0, "10% popusta na 6000 je 5400!"
assert obracun_sa_popustom(3000) == 3000.0, "Ispod 5000 nema popusta!"
`
  },
  "gp-06-inventar-prodavnice:3": {
    assertCode: `
assert 'naplati_korpu' in globals() and callable(naplati_korpu), "Funkcija se mora zvati 'naplati_korpu'!"
_db = {'101': {'naziv': 'Kafa', 'cena': 1000, 'stanje': 10}, '102': {'naziv': 'Čaj', 'cena': 500, 'stanje': 2}}
assert naplati_korpu(_db, [('101', 5), ('102', 1)]) == 4950.0, "5500 sa 10% popusta mora biti 4950.0!"
assert _db['101']['stanje'] == 5 and _db['102']['stanje'] == 1, "Lager mora biti ispravno umanjen!"
`
  },
  "gp-07-vesala-turnir:0": {
    assertCode: `
assert 'prikazi_masku' in globals() and callable(prikazi_masku), "Funkcija se mora zvati 'prikazi_masku'!"
assert prikazi_masku('python', {'p', 'o'}) == 'P _ _ _ O _', "Maska mora biti 'P _ _ _ O _'!"
`
  },
  "gp-07-vesala-turnir:1": {
    assertCode: `
assert 'je_pobeda' in globals() and callable(je_pobeda), "Funkcija se mora zvati 'je_pobeda'!"
assert je_pobeda('KOD', {'k', 'o', 'd', 'x'}) is True, "Sva slova su pogođena -> True!"
assert je_pobeda('KOD', {'k', 'o'}) is False, "Nedostaje 'D' -> False!"
`
  },
  "gp-07-vesala-turnir:2": {
    assertCode: `
assert 'odigraj_potez' in globals() and callable(odigraj_potez), "Funkcija se mora zvati 'odigraj_potez'!"
_isp = set()
_z = odigraj_potez('KOD', 'z', _isp, 6)
assert _z == 5, "Prvi promašaj skida 1 život!"
_z2 = odigraj_potez('KOD', 'Z', _isp, _z)
assert _z2 == 5, "Ponovljeno slovo NE SME ponovo skinuti život!"
`
  },
  "gp-07-vesala-turnir:3": {
    assertCode: `
assert 'dodaj_na_rang' in globals() and callable(dodaj_na_rang), "Funkcija se mora zvati 'dodaj_na_rang'!"
_r = dodaj_na_rang([{'ime': 'Ana', 'poeni': 80}, {'ime': 'Vuk', 'poeni': 120}], 'Tara', 100, 2)
assert [x['ime'] for x in _r] == ['Vuk', 'Tara'], "Top 2 moraju biti ['Vuk', 'Tara']!"
`
  },
  "gp-08-kripto-beleznica:0": {
    assertCode: `
assert 'vizener_sifruj' in globals() and callable(vizener_sifruj), "Funkcija se mora zvati 'vizener_sifruj'!"
assert vizener_sifruj('KOD', 'BC') == 'LQE', "vizener_sifruj('KOD', 'BC') mora vratiti 'LQE'!"
assert vizener_sifruj('A B!', 'BC') == 'B D!', "Razmaci i znaci se čuvaju bez pomeranja ključa!"
`
  },
  "gp-08-kripto-beleznica:1": {
    assertCode: `
assert 'vizener_desifruj' in globals() and callable(vizener_desifruj), "Funkcija se mora zvati 'vizener_desifruj'!"
assert vizener_desifruj('LQE', 'BC') == 'KOD', "vizener_desifruj('LQE', 'BC') mora vratiti 'KOD'!"
assert vizener_desifruj('B D!', 'BC') == 'A B!', "Dešifrovanje mora sačuvati razmake i znake!"
`
  },
  "gp-08-kripto-beleznica:2": {
    assertCode: `
assert 'izvuci_tagove' in globals() and callable(izvuci_tagove), "Funkcija se mora zvati 'izvuci_tagove'!"
assert izvuci_tagove('Završi #Python, #kod i #python! #') == ['#kod', '#python'], "Mora skinuti interpunkciju, sam '#' i duplikate!"
`
  },
  "gp-08-kripto-beleznica:3": {
    assertCode: `
assert 'beleske_po_tagu' in globals() and callable(beleske_po_tagu), "Funkcija se mora zvati 'beleske_po_tagu'!"
_b = ['Napravi sajt #Ideja!', 'Kupi hleb #kupovina', 'Novi kurs #ideja']
assert len(beleske_po_tagu(_b, 'ideja')) == 2, "Mora pronaći obe beleške sa #ideja!"
`
  },
  "gp-09-kanban-tabla:0": {
    assertCode: `
assert 'zadaci_u_koloni' in globals() and callable(zadaci_u_koloni), "Funkcija se mora zvati 'zadaci_u_koloni'!"
_z = [{'naslov': 'B', 'status': 'TODO', 'prioritet': 3}, {'naslov': 'A', 'status': 'TODO', 'prioritet': 1}, {'naslov': 'C', 'status': 'GOTOVO', 'prioritet': 1}]
assert zadaci_u_koloni(_z, 'TODO') == ['A', 'B'], "Prioritet 1 mora ići pre 3!"
`
  },
  "gp-09-kanban-tabla:1": {
    assertCode: `
assert 'pomeri_zadatak' in globals() and callable(pomeri_zadatak), "Funkcija se mora zvati 'pomeri_zadatak'!"
_z = [{'id': 1, 'status': 'TODO'}]
assert pomeri_zadatak(_z, 1, 'GOTOVO') is False and _z[0]['status'] == 'TODO', "Direktan skok TODO -> GOTOVO mora biti zabranjen!"
assert pomeri_zadatak(_z, 1, 'U_TOKU') is True and _z[0]['status'] == 'U_TOKU', "Prelaz TODO -> U_TOKU mora uspeti!"
`
  },
  "gp-09-kanban-tabla:2": {
    assertCode: `
assert 'aktivno_opterecenje' in globals() and callable(aktivno_opterecenje), "Funkcija se mora zvati 'aktivno_opterecenje'!"
_db = [{'vlasnik': 'Ana', 'status': 'GOTOVO'}, {'vlasnik': 'Ana', 'status': 'U_TOKU'}, {'vlasnik': 'Vuk', 'status': 'TODO'}]
assert aktivno_opterecenje(_db) == {'Ana': 1, 'Vuk': 1}, "Završeni (GOTOVO) zadaci ne smeju ulaziti u aktivno opterećenje!"
`
  },
  "gp-09-kanban-tabla:3": {
    assertCode: `
assert 'napredak_sprinta' in globals() and callable(napredak_sprinta), "Funkcija se mora zvati 'napredak_sprinta'!"
assert napredak_sprinta([{'status': 'GOTOVO'}, {'status': 'TODO'}]) == {'ukupno': 2, 'gotovo': 1, 'procenat': 50.0}, "Očekujemo 50.0% završenosti!"
assert napredak_sprinta([]) == {'ukupno': 0, 'gotovo': 0, 'procenat': 0.0}, "Prazan sprint mora vratiti 0.0% bez greške!"
`
  },
  "gp-10-turnir-liga:0": {
    assertCode: `
assert 'generisi_parove' in globals() and callable(generisi_parove), "Funkcija se mora zvati 'generisi_parove'!"
assert generisi_parove(['A', 'B', 'C']) == [('A', 'B'), ('A', 'C'), ('B', 'C')], "Za 3 tima moraju postojati tačno 3 jedinstvena para!"
`
  },
  "gp-10-turnir-liga:1": {
    assertCode: `
assert 'izracunaj_tabelu' in globals() and callable(izracunaj_tabelu), "Funkcija se mora zvati 'izracunaj_tabelu'!"
_t = izracunaj_tabelu([('A', 'B', 2, 1), ('B', 'C', 1, 1)])
assert _t['A']['bodovi'] == 3 and _t['A']['gr'] == 1, "Tim A mora imati 3 boda i gol-razliku +1!"
assert _t['B']['bodovi'] == 1 and _t['C']['bodovi'] == 1, "Timovi B i C moraju imati po 1 bod!"
`
  },
  "gp-10-turnir-liga:2": {
    assertCode: `
assert 'rangiraj_timove' in globals() and callable(rangiraj_timove), "Funkcija se mora zvati 'rangiraj_timove'!"
_t = {'Orlovi': {'bodovi': 6, 'gr': 1, 'dati': 3}, 'Vukovi': {'bodovi': 6, 'gr': 4, 'dati': 5}}
assert rangiraj_timove(_t) == ['Vukovi', 'Orlovi'], "Kod istih bodova bolja gol-razlika mora biti prva!"
`
  },
  "gp-10-turnir-liga:3": {
    assertCode: `
assert 'izvestaj_lige_json' in globals() and callable(izvestaj_lige_json), "Funkcija se mora zvati 'izvestaj_lige_json'!"
_js = json.loads(izvestaj_lige_json([('Orlovi', 'Vukovi', 1, 3), ('Orlovi', 'Zmajevi', 2, 0), ('Vukovi', 'Zmajevi', 1, 1)]))
assert _js['sampion'] == 'Vukovi' and _js['poredak'] == ['Vukovi', 'Orlovi', 'Zmajevi'], f"Pogrešan JSON izveštaj: {_js}!"
`
  }
};

function runSilentUnitTests(studentCode, assertCode) {
  return new Promise((resolve) => {
    const combined = studentCode + "\n\n# === AUTOMATSKI UNIT TESTOVI ===\n" + assertCode;
    Sk.configure({
      output: () => {},
      read: builtinRead,
      nonreadopen: true,
      filewrite: () => {},
      inputfun: () => "10",
      inputfunTakesPrompt: true,
      __future__: Sk.python3
    });
    Sk.execLimit = 5000;
    Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<unit_test>", false, combined, true))
      .then(() => resolve({ ok: true }))
      .catch((err) => {
        let msg = err.toString();
        msg = msg.replace(/^AssertionError:\s*/i, '').replace(/\s*on line \d+$/i, '');
        resolve({ ok: false, message: msg });
      });
  });
}

function verifyCurrentChallenge(lesson, activeChal, refreshCallback) {
  const feedbackEl = document.getElementById('chal-check-feedback');
  const code = editor ? editor.getValue().trim() : '';
  const demoCode = (lesson.starterCode || '').trim();
  const starterCode = (activeChal.starter || '').trim();

  function showCheckMsg(ok, htmlMsg) {
    if (!feedbackEl) return;
    feedbackEl.className = `chal-check-feedback ${ok ? 'pass' : 'fail'}`;
    feedbackEl.innerHTML = htmlMsg;
    feedbackEl.style.display = 'block';
  }

  if (!code || code === demoCode) {
    showCheckMsg(false, '⚠️ U editoru je trenutno <strong>primer iz lekcije</strong>. Klikni prvo na <strong>„📥 Ubaci u editor”</strong>, pa napiši svoje rešenje zadatka!');
    return;
  }
  if (code === starterCode) {
    showCheckMsg(false, '✍️ Još uvek stoji početni šablon zadatka. Dopuni kod u editoru pa klikni ponovo na <strong>„✅ Proveri zadatak”</strong>!');
    return;
  }
  if (/^\s*pass\s*$/m.test(code)) {
    showCheckMsg(false, '✍️ Zamenite <code>pass</code> svojim pravim Python kodom pre provere!');
    return;
  }

  // Provera obaveznih ključnih elemenata iz rešenja
  const sol = activeChal.solution || '';
  const missingHints = [];
  if (/\bdef\s+/.test(sol) && !/\bdef\s+/.test(code)) {
    missingHints.push('definiciju funkcije (<code>def</code>)');
  }
  if (/\breturn\b/.test(sol) && !/\breturn\b/.test(code)) {
    missingHints.push('vraćanje rezultata pomoću <code>return</code> (bez njega funkcija vraća <code>None</code>!)');
  }
  if (/\b(for|while)\s+/.test(sol) && !/\b(for|while)\s+/.test(code)) {
    missingHints.push('petlju (<code>for</code> ili <code>while</code>)');
  }
  if (/\bif\s+/.test(sol) && !/\bif\s+/.test(code)) {
    missingHints.push('uslovno grananje (<code>if</code>)');
  }
  if (/\btry\s*:/.test(sol) && !/\btry\s*:/.test(code)) {
    missingHints.push('hvatanje greške (<code>try / except</code>)');
  }
  if (/\bopen\s*\(/.test(sol) && !/\bopen\s*\(/.test(code)) {
    missingHints.push('otvaranje fajla (<code>open(...)</code>)');
  }

  if (missingHints.length > 0) {
    showCheckMsg(false, `🔍 Skoro si tu! Za ovaj zadatak je potrebno da upotrebiš: ${missingHints.join(', ')}.`);
    return;
  }

  // Pokreni kod u terminalu i zatim izvrši stvarne unit testove!
  isEditingChallenge = true;
  saveCurrentChallengeDraft();

  if (isRunning) return;
  runPythonCode();

  const checkInterval = setInterval(async () => {
    if (!isRunning) {
      clearInterval(checkInterval);
      if (lastRunHadError) {
        showCheckMsg(false, '❌ Kod je prijavio grešku u terminalu. Pogledaj crvenu liniju i prijateljski savet ispod, ispravi pa proveri ponovo!');
        return;
      }
      if (!lastRunOutputBuffer.trim() && /\bprint\s*\(/.test(sol)) {
        showCheckMsg(false, 'ℹ️ Program je prošao bez greške, ali ništa nije ispisao u terminalu. Dodaj <code>print(...)</code> da prikažeš rezultat!');
        return;
      }

      // Izvrši konkretne unit testove i provere tačnosti za ovaj zadatak!
      const testKey = `${lesson.id}:${activeChallengeIndex}`;
      const testSpec = CHALLENGE_UNIT_TESTS[testKey];

      if (testSpec) {
        if (typeof testSpec.checkOutput === 'function') {
          const outErr = testSpec.checkOutput(lastRunOutputBuffer, code);
          if (outErr) {
            showCheckMsg(false, `❌ <strong>Rezultat nije tačan:</strong> ${escapeHTML(outErr)}`);
            return;
          }
        }
        if (testSpec.assertCode) {
          const unitRes = await runSilentUnitTests(code, testSpec.assertCode);
          if (!unitRes.ok) {
            showCheckMsg(false, `❌ <strong>Automatski test nije prošao:</strong> ${escapeHTML(unitRes.message)}`);
            return;
          }
        }
      }

      // Svi testovi su prošli!
      markChallengeSolved(currentCourseIndex, currentLessonIndex, activeChallengeIndex);
      showCheckMsg(true, `🎉 <strong>Bravo! Svi automatski testovi za „${escapeHTML(activeChal.title)}” su prošli!</strong> Osvojio si +25 XP.`);
      launchConfetti();
      showToast('Zadatak uspešno verifikovan! ✅ (+25 XP)', '🏆');

      const chals = lesson.challenges || [];
      const allDone = chals.length > 0 && chals.every((_, idx) => isChallengeSolved(currentCourseIndex, currentLessonIndex, idx));
      if (allDone) {
        saveCompletedLesson(lesson.id);
        showToast('Svi zadaci u lekciji su rešeni — lekcija je završena! 🌟', '🎓');
      }
      if (typeof refreshCallback === 'function') {
        setTimeout(() => {
          refreshCallback();
          const fb2 = document.getElementById('chal-check-feedback');
          if (fb2) {
            fb2.className = 'chal-check-feedback pass';
            fb2.innerHTML = `🎉 <strong>Bravo! Svi automatski testovi za „${escapeHTML(activeChal.title)}” su prošli!</strong> Osvojio si +25 XP.`;
            fb2.style.display = 'block';
          }
        }, 50);
      }
    }
  }, 150);
}

// ---------- FOKUS MOD (Sakrivanje leve liste lekcija) ----------
function initFocusMode() {
  const btn = document.getElementById('focus-mode-btn');
  if (!btn) return;
  const saved = localStorage.getItem('python_od_nule_focus_mode') === '1';
  if (saved) {
    document.body.classList.add('focus-mode');
    btn.innerText = '▶ Lekcije';
  }
  btn.addEventListener('click', () => {
    const isFocus = document.body.classList.toggle('focus-mode');
    btn.innerText = isFocus ? '▶ Lekcije' : '◀ Lekcije';
    try { localStorage.setItem('python_od_nule_focus_mode', isFocus ? '1' : '0'); } catch (e) {}
    if (editor) setTimeout(() => editor.refresh(), 50);
    showToast(isFocus ? 'Fokus mod uključen — više mesta za kod!' : 'Lista lekcija je ponovo prikazana.', '🎯');
  });
}

// ---------- SVETLA / TAMNA TEMA ----------
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const saved = localStorage.getItem('python_od_nule_theme');
  if (saved === 'light') {
    document.body.classList.add('light-theme');
    btn.innerText = '🌙';
  }
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    btn.innerText = isLight ? '🌙' : '☀️';
    try { localStorage.setItem('python_od_nule_theme', isLight ? 'light' : 'dark'); } catch (e) {}
    showToast(isLight ? 'Uključena je Svetla tema (odlična za učionice i dnevno svetlo).' : 'Uključena je Tamna tema.', isLight ? '☀️' : '🌙');
  });
}

// ---------- PREGLED VIRTUELNIH FAJLOVA (📂 Moji fajlovi) ----------
function renderVirtualFilesUI() {
  const explorer = document.getElementById('vfs-explorer');
  const badge = document.getElementById('vfs-count-badge');
  const files = Object.keys(virtualFS);

  if (badge) badge.innerText = files.length.toString();
  if (!explorer) return;

  if (files.length === 0) {
    explorer.innerHTML = '<div class="vfs-empty-state">Još nisi kreirao nijedan fajl. Pokreni kod sa <code>open("fajl.txt", "w")</code> i ovde će se odmah pojaviti!</div>';
    return;
  }

  explorer.innerHTML = files.map(fname => `
    <div class="vfs-file-card">
      <div class="vfs-file-header">
        <span>📄 ${escapeHTML(fname)}</span>
        <button class="btn btn-ghost btn-xs vfs-del-btn" data-fname="${escapeHTML(fname)}" title="Obriši virtuelni fajl">🗑️ Obriši</button>
      </div>
      <pre class="vfs-file-content">${escapeHTML(virtualFS[fname] || '(prazan fajl)')}</pre>
    </div>
  `).join('');

  explorer.querySelectorAll('.vfs-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const fn = btn.dataset.fname;
      delete virtualFS[fn];
      renderVirtualFilesUI();
      showToast(`Virtuelni fajl "${fn}" je obrisan.`, '🗑️');
    });
  });
}

function initTerminalTabs() {
  const tabTerm = document.getElementById('tab-terminal-btn');
  const tabFiles = document.getElementById('tab-files-btn');
  const consoleOut = document.getElementById('console-output');
  const vfsBox = document.getElementById('vfs-explorer');
  if (!tabTerm || !tabFiles || !consoleOut || !vfsBox) return;

  tabTerm.addEventListener('click', () => {
    tabTerm.classList.add('active');
    tabFiles.classList.remove('active');
    consoleOut.style.display = 'block';
    vfsBox.style.display = 'none';
  });

  tabFiles.addEventListener('click', () => {
    tabFiles.classList.add('active');
    tabTerm.classList.remove('active');
    consoleOut.style.display = 'none';
    vfsBox.style.display = 'block';
    renderVirtualFilesUI();
  });
}

// ---------- ZAVRŠNI ISPIT TRIJADE (12 PITANJA) & OTKLJUČAVANJE SERTIFIKATA ----------
const FINAL_EXAM_QUESTIONS = [
  { course: "Kurs 1", q: "Šta će ispisati print('5' + '3') u Pythonu?", opts: ["8", "53", "Grešku TypeError"], ans: 1 },
  { course: "Kurs 1", q: "Koji tip podatka UVEK vraća funkcija input()?", opts: ["int (ceo broj)", "str (tekst)", "float (decimalni broj)"], ans: 1 },
  { course: "Kurs 1", q: "Koliko puta će se izvršiti petlja: for i in range(5):?", opts: ["4 puta (1..4)", "5 puta (0..4)", "6 puta (0..5)"], ans: 1 },
  { course: "Kurs 1", q: "Kako dodajemo novu stavku na kraj liste imena?", opts: ["imena.append('Ana')", "imena.add('Ana')", "imena.push('Ana')"], ans: 0 },
  { course: "Kurs 2", q: "Šta daje izraz 17 % 5 (operator modulo)?", opts: ["3", "2", "3.4"], ans: 1 },
  { course: "Kurs 2", q: "Čemu služi f-string zapis f'{cena:.2f}'?", opts: ["Množi cenu sa 2", "Prikazuje broj sa tačno 2 decimale", "Pretvara broj u listu"], ans: 1 },
  { course: "Kurs 2", q: "Koja je razlika između return i print unutar funkcije?", opts: ["return vraća vrednost pozivaocu za dalju upotrebu, print samo ispisuje na ekran", "Nema razlike", "print prekida program"], ans: 0 },
  { course: "Kurs 2", q: "Kako pristupamo vrednosti pod ključem 'ime' u rečniku korisnik?", opts: ["korisnik('ime')", "korisnik['ime']", "korisnik.0"], ans: 1 },
  { course: "Kurs 3", q: "Zašto koristimo blok try / except u profesionalnom kodu?", opts: ["Da ubrzamo internet", "Da program bezbedno uhvati grešku (npr. pogrešan unos) bez pucanja", "Da obrišemo fajlove"], ans: 1 },
  { course: "Kurs 3", q: "Koja je prednost otvaranja fajla pomoću with open('f.txt', 'w') as f:?", opts: ["Automatski zatvara fajl čim se blok završi, čak i ako dođe do greške", "Fajl postaje nevidljiv", "Radi samo na Linuxu"], ans: 0 },
  { course: "Kurs 3", q: "Šta radi naredba 'w' naspram 'a' kod otvaranja fajla?", opts: ["'w' briše stari sadržaj i piše ispočetka, a 'a' dopisuje na kraj", "'a' briše fajl", "Oba rade isto"], ans: 0 },
  { course: "Kurs 3", q: "Zašto je binarna pretraga drastično brža od linearne na sortiranoj listi?", opts: ["Zato što u svakom koraku odbacuje polovinu preostalih elemenata", "Zato što preskače parne brojeve", "Zato što koristi više RAM memorije"], ans: 0 }
];

function getFinalExamResult() {
  try {
    const raw = localStorage.getItem(FINAL_EXAM_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function isCertificateUnlocked() {
  const exam = getFinalExamResult();
  if (exam && exam.passed) return true;

  let completedCount = 0;
  if (typeof COURSES !== 'undefined') {
    COURSES.forEach(c => {
      try {
        const k = `python_od_nule_completed_${c.id}`;
        let s = localStorage.getItem(k);
        if (!s && c.id === 'osnove-1') s = localStorage.getItem('python_od_nule_completed');
        if (s) completedCount += JSON.parse(s).length;
      } catch (e) {}
    });
  }
  return completedCount >= 27;
}

function updateCertificateButtonState() {
  const certBtn = document.getElementById('btn-open-certificate');
  const examBtn = document.getElementById('btn-open-final-exam');
  const exam = getFinalExamResult();

  if (examBtn && exam && exam.passed) {
    examBtn.innerText = `🏆 Završni Ispit Položen! (${exam.score}/12) — Ponovi`;
  }
  if (certBtn) {
    if (isCertificateUnlocked()) {
      certBtn.innerText = '🎓 Preuzmi Zvanični Sertifikat & Diplomu (Otključano!)';
      certBtn.style.opacity = '1';
    } else {
      certBtn.innerText = '🔒 Zvanični Sertifikat (Položi Završni Ispit ili završi 27 lekcija)';
      certBtn.style.opacity = '0.82';
    }
  }
}

function renderFinalExamQuestions() {
  const body = document.getElementById('final-exam-body');
  const statusEl = document.getElementById('final-exam-status');
  if (!body) return;

  body.innerHTML = FINAL_EXAM_QUESTIONS.map((item, idx) => `
    <div class="exam-q-card" id="exam-card-${idx}">
      <div class="exam-q-title"><span style="color:#38bdf8;">[${item.course}]</span> ${idx + 1}. ${escapeHTML(item.q)}</div>
      ${item.opts.map((opt, oIdx) => `
        <label class="exam-opt-label">
          <input type="radio" name="exam_q_${idx}" value="${oIdx}">
          <span><strong>${String.fromCharCode(65 + oIdx)})</strong> ${escapeHTML(opt)}</span>
        </label>
      `).join('')}
    </div>
  `).join('');

  body.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const answered = FINAL_EXAM_QUESTIONS.filter((_, i) => body.querySelector(`input[name="exam_q_${i}"]:checked`)).length;
      if (statusEl) statusEl.innerText = `Odgovoreno: ${answered} / ${FINAL_EXAM_QUESTIONS.length}`;
    });
  });

  if (statusEl) statusEl.innerText = `Odgovoreno: 0 / ${FINAL_EXAM_QUESTIONS.length}`;
}

function openFinalExamModal() {
  const modal = document.getElementById('final-exam-modal');
  if (!modal) return;
  renderFinalExamQuestions();
  modal.style.display = 'flex';
  modal.classList.add('active');
}

function closeFinalExamModal() {
  const modal = document.getElementById('final-exam-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.style.display = 'none';
}

function submitFinalExam() {
  const body = document.getElementById('final-exam-body');
  if (!body) return;

  let score = 0;
  let unanswered = 0;
  FINAL_EXAM_QUESTIONS.forEach((item, idx) => {
    const checked = body.querySelector(`input[name="exam_q_${idx}"]:checked`);
    const card = document.getElementById(`exam-card-${idx}`);
    if (!checked) {
      unanswered++;
      return;
    }
    const val = parseInt(checked.value, 10);
    if (card) card.classList.remove('q-correct', 'q-wrong');
    if (val === item.ans) {
      score++;
      if (card) card.classList.add('q-correct');
    } else {
      if (card) card.classList.add('q-wrong');
    }
  });

  if (unanswered > 0) {
    showToast(`Nisi odgovorio na ${unanswered} pitanja! Odgovori na svih 12 pa predaj ispit.`, '⚠️');
    return;
  }

  const passed = score >= 9;
  const pct = Math.round((score / FINAL_EXAM_QUESTIONS.length) * 100);
  try {
    localStorage.setItem(FINAL_EXAM_KEY, JSON.stringify({ score, total: FINAL_EXAM_QUESTIONS.length, passed, date: new Date().toISOString() }));
  } catch (e) {}

  const oldBanner = body.querySelector('.exam-result-banner');
  if (oldBanner) oldBanner.remove();

  const banner = document.createElement('div');
  banner.className = `exam-result-banner ${passed ? 'passed' : 'failed'}`;
  if (passed) {
    banner.innerHTML = `
      <h3 style="margin:0 0 6px;">🎉 ČESTITAMO! POLOŽIO SI ZAVRŠNI ISPIT (${score}/12 — ${pct}%)!</h3>
      <p style="margin:0 0 12px;">Zvanični Verifikovani Sertifikat Trijade je sada OTKLJUČAN (+200 XP)!</p>
      <button id="btn-exam-goto-cert" class="btn btn-cert">🎓 Otvori svoj Sertifikat odmah!</button>
    `;
    launchConfetti();
    showToast('Završni ispit položen! Diploma je otključana! 🏆', '🎓');
  } else {
    banner.innerHTML = `
      <h3 style="margin:0 0 6px;">Rezultat: ${score}/12 (${pct}%) — Potrebno je najmanje 9/12 (75%)</h3>
      <p style="margin:0;">Pogledaj crveno označena pitanja ispod, obnovi gradivo i klikni „🔄 Pokušaj ponovo”!</p>
    `;
  }
  body.prepend(banner);
  body.scrollTop = 0;

  const gotoCert = document.getElementById('btn-exam-goto-cert');
  if (gotoCert) {
    gotoCert.addEventListener('click', () => {
      closeFinalExamModal();
      openCertificateModal();
    });
  }

  calculateUserGamification();
  updateCertificateButtonState();
}

function initFinalExam() {
  const openBtn = document.getElementById('btn-open-final-exam');
  const closeBtn = document.getElementById('btn-close-final-exam');
  const submitBtn = document.getElementById('btn-submit-final-exam');
  const resetBtn = document.getElementById('btn-reset-final-exam');
  const modal = document.getElementById('final-exam-modal');

  if (openBtn) openBtn.addEventListener('click', openFinalExamModal);
  if (closeBtn) closeBtn.addEventListener('click', closeFinalExamModal);
  if (submitBtn) submitBtn.addEventListener('click', submitFinalExam);
  if (resetBtn) resetBtn.addEventListener('click', renderFinalExamQuestions);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeFinalExamModal();
    });
  }
  updateCertificateButtonState();
}


// ---------- ULAZNI TEST (DETALJNA DIJAGNOSTIKA — 18 PITANJA / 3 NIVOA) ----------
const PLACEMENT_QUESTIONS = [
  // NIVO 1: KURS 1 — OSNOVE (6 pitanja)
  { tier: 1, topic: "Stringovi i print", level: "Nivo 1: Osnove", q: "Šta će ispisati print('5' + '3') u Pythonu?", opts: ["8", "53", "Grešku TypeError", "Ne znam još"], ans: 1 },
  { tier: 1, topic: "Promenljive i tipovi", level: "Nivo 1: Osnove", q: "Koje od sledećih imena promenljive NIJE dozvoljeno u Pythonu?", opts: ["moja_cena", "1_mesto", "igrac2", "Ne znam još"], ans: 1 },
  { tier: 1, topic: "Korisnički unos (input)", level: "Nivo 1: Osnove", q: "Koji tip podatka UVEK vraća funkcija input() pre bilo kakve konverzije?", opts: ["int (ceo broj)", "str (tekst)", "Automatski pogađa tip", "Ne znam još"], ans: 1 },
  { tier: 1, topic: "Uslovi (if/elif/else)", level: "Nivo 1: Osnove", q: "Šta je pogrešno u liniji: if bodovi = 100: ?", opts: ["Za poređenje mora == umesto =", "Broj 100 mora pod navodnike", "Ne sme stajati dvotačka na kraju", "Ne znam još"], ans: 0 },
  { tier: 1, topic: "Petlje (for/range)", level: "Nivo 1: Osnove", q: "Koje brojeve generiše petlja: for i in range(1, 5): ?", opts: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "Ne znam još"], ans: 0 },
  { tier: 1, topic: "Liste i indeksi", level: "Nivo 1: Osnove", q: "Za listu boje = ['crvena', 'zelena', 'plava'], šta vraća boje[-1]?", opts: ["crvena", "plava (poslednji element)", "Grešku IndexError", "Ne znam još"], ans: 1 },

  // NIVO 2: KURS 2 — PRAKTIČAR (6 pitanja)
  { tier: 2, topic: "f-string formatiranje", level: "Nivo 2: Praktičar", q: "Šta ispisuje izraz: print(f'{3.14159:.2f}') ?", opts: ["3.14", "3.14159", "3.1", "Ne znam još"], ans: 0 },
  { tier: 2, topic: "Modulo (%) i //", level: "Nivo 2: Praktičar", q: "Koliko iznose rezultati izraza 17 // 5 i 17 % 5?", opts: ["3 i 2", "3.4 i 5", "2 i 3", "Ne znam još"], ans: 0 },
  { tier: 2, topic: "Čišćenje unosa", level: "Nivo 2: Praktičar", q: "Šta vraća izraz '  DA  '.strip().lower() ?", opts: ["'da'", "'DA'", "'  da  '", "Ne znam još"], ans: 0 },
  { tier: 2, topic: "Složeni uslovi", level: "Nivo 2: Praktičar", q: "Kada je izraz (godine >= 18 and ima_kartu) tačan (True)?", opts: ["Kada je bar jedan uslov tačan", "Samo kada su OBA uslova tačna", "Samo kada su oba netačna", "Ne znam još"], ans: 1 },
  { tier: 2, topic: "Kontrola petlji", level: "Nivo 2: Praktičar", q: "Koja je razlika između break i continue u petlji?", opts: ["break odmah izlazi iz cele petlje, a continue preskače samo trenutni korak", "Obe naredbe rade isto", "continue gasi ceo program", "Ne znam još"], ans: 0 },
  { tier: 2, topic: "Funkcije i rečnici", level: "Nivo 2: Praktičar", q: "Šta vraća funkcija bez return, i šta radi recnik.get('x', 0) ako ključ 'x' ne postoji?", opts: ["Vraća None; .get() bezbedno vraća 0", "Vraća 0; .get() baca KeyError", "Baca SyntaxError; .get() briše rečnik", "Ne znam još"], ans: 0 },

  // NIVO 3: KURS 3 — MASTER OSNOVA (6 pitanja)
  { tier: 3, topic: "Lokalne skripte (__main__)", level: "Nivo 3: Master", q: "Čemu služi blok if __name__ == '__main__': u Python skriptama?", opts: ["Izvršava kod samo kad je fajl pokrenut direktno, a ne pri uvozu (import)", "Ubrzava petlje 10 puta", "Kreira virtuelni fajl", "Ne znam još"], ans: 0 },
  { tier: 3, topic: "Izuzeci (try/except)", level: "Nivo 3: Master", q: "Koji izuzetak treba uhvatiti kada korisnik za int(input()) ukuca 'abc'?", opts: ["ValueError", "ZeroDivisionError", "IndexError", "Ne znam još"], ans: 0 },
  { tier: 3, topic: "Modul random", level: "Nivo 3: Master", q: "Koja funkcija bira 6 JEDINSTVENIH brojeva bez ponavljanja za Loto 6/39?", opts: ["random.sample(range(1, 40), 6)", "random.randint(1, 39)", "random.choices(range(1, 40), k=6)", "Ne znam još"], ans: 0 },
  { tier: 3, topic: "Rad sa fajlovima", level: "Nivo 3: Master", q: "Koja je razlika između režima 'w' i 'a' kod with open('f.txt', ..., encoding='utf-8')?", opts: ["'w' briše stari sadržaj i piše ispočetka, a 'a' dopisuje na kraj fajla", "'a' briše fajl", "Oba rade identično", "Ne znam još"], ans: 0 },
  { tier: 3, topic: "2D matrice i default parametri", level: "Nivo 3: Master", q: "Zašto je def dodaj(x, lista=[]): opasna zamka, i kako čitamo 2. red, 1. kolonu matrice m?", opts: ["Lista se deli između poziva (treba lista=None); m[1][0]", "Lista izaziva SyntaxError; m[0][1]", "Nema zamke; m[2][1]", "Ne znam još"], ans: 0 },
  { tier: 3, topic: "Algoritmi (Binarna pretraga)", level: "Nivo 3: Master", q: "Koji je obavezan uslov za binarnu pretragu i koliko najviše koraka treba za 1.000.000 elemenata?", opts: ["Sortirana lista; najviše ~20 koraka — O(log n)", "Bilo koja lista; ~500.000 koraka", "Samo parni brojevi; 1.000 koraka", "Ne znam još"], ans: 0 }
];

function renderPlacementQuestions() {
  const body = document.getElementById('placement-test-body');
  const statusEl = document.getElementById('placement-test-status');
  if (!body) return;

  body.innerHTML = PLACEMENT_QUESTIONS.map((item, idx) => `
    <div class="exam-q-card" id="placement-card-${idx}">
      <div class="exam-q-title"><span style="color:#a78bfa;">[${item.level} • ${item.topic}]</span> ${idx + 1}. ${escapeHTML(item.q)}</div>
      ${item.opts.map((opt, oIdx) => `
        <label class="exam-opt-label">
          <input type="radio" name="place_q_${idx}" value="${oIdx}">
          <span><strong>${String.fromCharCode(65 + oIdx)})</strong> ${escapeHTML(opt)}</span>
        </label>
      `).join('')}
    </div>
  `).join('');

  body.querySelectorAll('input[type="radio"]').forEach(r => {
    r.addEventListener('change', () => {
      const answered = PLACEMENT_QUESTIONS.filter((_, i) => body.querySelector(`input[name="place_q_${i}"]:checked`)).length;
      if (statusEl) statusEl.innerText = `Odgovoreno: ${answered} / ${PLACEMENT_QUESTIONS.length}`;
    });
  });

  if (statusEl) statusEl.innerText = `Odgovoreno: 0 / ${PLACEMENT_QUESTIONS.length}`;
}

function openPlacementTestModal() {
  const modal = document.getElementById('placement-test-modal');
  if (!modal) return;
  renderPlacementQuestions();
  modal.style.display = 'flex';
  modal.classList.add('active');
}

function closePlacementTestModal() {
  const modal = document.getElementById('placement-test-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.style.display = 'none';
}

function submitPlacementTest() {
  const body = document.getElementById('placement-test-body');
  if (!body) return;

  const tierScores = { 1: 0, 2: 0, 3: 0 };
  const weakTopics = [];
  let unanswered = 0;

  PLACEMENT_QUESTIONS.forEach((item, idx) => {
    const checked = body.querySelector(`input[name="place_q_${idx}"]:checked`);
    const card = document.getElementById(`placement-card-${idx}`);
    if (!checked) { unanswered++; return; }
    const val = parseInt(checked.value, 10);
    if (card) card.classList.remove('q-correct', 'q-wrong');
    if (val === item.ans) {
      tierScores[item.tier]++;
      if (card) card.classList.add('q-correct');
    } else {
      weakTopics.push(`${item.topic} (${item.level})`);
      if (card) card.classList.add('q-wrong');
    }
  });

  if (unanswered > 0) {
    showToast(`Odgovori na svih 18 pitanja (ostalo još ${unanswered})! Za nepoznate teme izaberi D.`, '⚠️');
    return;
  }

  const totalScore = tierScores[1] + tierScores[2] + tierScores[3];
  const p1 = Math.round((tierScores[1] / 6) * 100);
  const p2 = Math.round((tierScores[2] / 6) * 100);
  const p3 = Math.round((tierScores[3] / 6) * 100);

  // Pametna dijagnostika po pragovima razumevanja (prag >= 5/6 za preskakanje nivoa!)
  let recCourseIdx = 0;
  let recTitle = '🌱 Kurs 1: Python Osnove 1 (Prvi koraci)';
  let recDesc = 'Preporučujemo čvrst start od Kursa 1 kako bi zatvorio sve temeljne rupe pre prelaska na projekte!';

  if (tierScores[1] >= 5 && tierScores[2] >= 5 && tierScores[3] >= 5) {
    recCourseIdx = 2;
    recTitle = '🏆 Majstor Trijade! (Kurs 3 + Završni Ispit)';
    recDesc = 'Izvanredno znanje na sva 3 nivoa! Možeš odmah da prođeš napredne Code Review zadatke u Kursu 3 i položiš Završni Ispit za Sertifikat.';
  } else if (tierScores[1] >= 5 && tierScores[2] >= 5) {
    recCourseIdx = 2;
    recTitle = '🎓 Kurs 3: Python Osnove 3 (Master nivo osnova)';
    recDesc = 'Osnove i praksu već odlično vladaš! Pravi izazov za tebe su fajlovi, 2D matrice, izuzeci, VS Code i binarna pretraga.';
  } else if (tierScores[1] >= 5) {
    recCourseIdx = 1;
    recTitle = '🛠️ Kurs 2: Python Osnove 2 (Praktičar & Mini-Projekti)';
    recDesc = 'Temelje već znaš! Preskoči prve korake i kreni pravo na praktične mini-projekte, tabele, Bankomat i rečnike.';
  }

  const weakSummary = weakTopics.length > 0
    ? `<div class="placement-weak-box"><strong>📌 Teme za uvežbavanje (${weakTopics.length}):</strong> ${weakTopics.slice(0, 5).map(escapeHTML).join(', ')}${weakTopics.length > 5 ? '...' : ''}</div>`
    : `<div class="placement-weak-box">🌟 Nema slabih tačaka — 18 od 18 tačno!</div>`;

  const oldBanner = body.querySelector('.exam-result-banner');
  if (oldBanner) oldBanner.remove();

  const banner = document.createElement('div');
  banner.className = 'exam-result-banner passed';
  banner.innerHTML = `
    <h3 style="margin:0 0 8px;">📊 Dijagnostika završena: ${totalScore} / 18 tačnih odgovora</h3>
    <div class="placement-tiers-grid">
      <div class="placement-tier-card">
        <div class="placement-tier-label">🌱 Nivo 1 (Osnove)</div>
        <div class="placement-tier-val t1" style="color:#38bdf8;">${tierScores[1]} / 6 (${p1}%)</div>
      </div>
      <div class="placement-tier-card">
        <div class="placement-tier-label">🛠️ Nivo 2 (Praktičar)</div>
        <div class="placement-tier-val t2" style="color:#34d399;">${tierScores[2]} / 6 (${p2}%)</div>
      </div>
      <div class="placement-tier-card">
        <div class="placement-tier-label">🎓 Nivo 3 (Master)</div>
        <div class="placement-tier-val t3" style="color:#c084fc;">${tierScores[3]} / 6 (${p3}%)</div>
      </div>
    </div>
    <div class="placement-rec-title">Preporuka: ${recTitle}</div>
    <p style="margin:0 0 8px; font-size:0.88rem;">${recDesc}</p>
    ${weakSummary}
    <button id="btn-placement-start-rec" class="btn btn-primary" type="button">🚀 Kreni odmah na preporučeni kurs ▶</button>
  `;
  body.prepend(banner);
  body.scrollTop = 0;
  launchConfetti();

  const startRecBtn = document.getElementById('btn-placement-start-rec');
  if (startRecBtn) {
    startRecBtn.addEventListener('click', () => {
      closePlacementTestModal();
      const targetLesson = getFirstIncompleteLessonIndex(recCourseIdx);
      switchCourse(recCourseIdx);
      switchView('workshop');
      loadLesson(targetLesson);
    });
  }
}

function initPlacementTest() {
  const openBtn = document.getElementById('btn-open-placement-test');
  const closeBtn = document.getElementById('btn-close-placement-test');
  const submitBtn = document.getElementById('btn-submit-placement-test');
  const resetBtn = document.getElementById('btn-reset-placement-test');
  const modal = document.getElementById('placement-test-modal');

  if (openBtn) openBtn.addEventListener('click', openPlacementTestModal);
  if (closeBtn) closeBtn.addEventListener('click', closePlacementTestModal);
  if (submitBtn) submitBtn.addEventListener('click', submitPlacementTest);
  if (resetBtn) resetBtn.addEventListener('click', renderPlacementQuestions);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePlacementTestModal();
    });
  }
}


function initScrollTopButton() {
  const btn = document.getElementById('btn-scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 420 && activeView === 'landing') {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function bindEvents() {
    // Događaji navigacije i početne strane
  if (elements.brandHomeBtn) {
    elements.brandHomeBtn.addEventListener('click', () => switchView('landing'));
  }
  if (elements.navBtnHome) {
    elements.navBtnHome.addEventListener('click', () => switchView('landing'));
  }
  if (elements.navBtnWorkshop) {
    elements.navBtnWorkshop.addEventListener('click', () => switchView('workshop'));
  }
  if (elements.navBtnCheatSheet) {
    elements.navBtnCheatSheet.addEventListener('click', () => {
      if (typeof window.openCheatSheet === 'function') window.openCheatSheet();
    });
  }
  if (elements.navBtnProfile) {
    elements.navBtnProfile.addEventListener('click', () => {
      switchView('landing');
      setTimeout(() => {
        const sekcija = document.getElementById('sekcija-profil');
        if (sekcija) sekcija.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
  if (elements.headerProfileBtn) {
    elements.headerProfileBtn.addEventListener('click', () => {
      switchView('landing');
      setTimeout(() => {
        const sekcija = document.getElementById('sekcija-profil');
        if (sekcija) sekcija.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

  // Tasteri na početnoj strani za pokretanje kurseva
  if (elements.heroStartBtn) {
    elements.heroStartBtn.addEventListener('click', () => {
      const targetLesson = getFirstIncompleteLessonIndex(0);
      switchCourse(0);
      switchView('workshop');
      loadLesson(targetLesson);
    });
  }

  document.querySelectorAll('.btn-start-course').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cIdx = parseInt(btn.dataset.courseIdx, 10);
      const targetLesson = getFirstIncompleteLessonIndex(cIdx);
      switchCourse(cIdx);
      switchView('workshop');
      loadLesson(targetLesson);
    });
  });

  if (elements.footerOpenWorkshop) {
    elements.footerOpenWorkshop.addEventListener('click', () => {
      switchView('workshop');
    });
  }

  // Registracija i profil
  if (elements.regForm) {
    elements.regForm.addEventListener('submit', handleRegistrationSubmit);
  }
  if (elements.btnEditProfile) {
    elements.btnEditProfile.addEventListener('click', handleEditProfile);
  }
  if (elements.btnDeleteProfile) {
    elements.btnDeleteProfile.addEventListener('click', deleteUserProfile);
  }
  if (elements.btnProfileContinue) {
    elements.btnProfileContinue.addEventListener('click', () => {
      switchView('workshop');
    });
  }

  elements.runBtn.addEventListener('click', runPythonCode);
  elements.stopBtn.addEventListener('click', stopExecution);
  
    // Kopiranje izlaza terminala
  if (elements.copyTerminalBtn) {
    elements.copyTerminalBtn.addEventListener('click', () => {
      const text = elements.outputConsole ? elements.outputConsole.innerText : '';
      if (!text.trim() || text.includes('Konzola je očišćena')) {
        showToast('Konzola je prazna.', 'ℹ️');
        return;
      }
      navigator.clipboard.writeText(text).then(() => {
        showToast('Konzolni izlaz je iskopiran u clipboard! 📋', '✅');
      }).catch(() => {
        showToast('Nije uspelo automatsko kopiranje.', '⚠️');
      });
    });
  }

  elements.clearConsoleBtn.addEventListener('click', () => {
    elements.outputConsole.innerHTML = '<span class="console-placeholder">Konzola je očišćena.</span>';
  });

  elements.resetCodeBtn.addEventListener('click', () => {
    if (isSandboxMode) {
      editor.setValue('');
    } else {
      const currentLessons = COURSES[currentCourseIndex].lessons;
      editor.setValue(currentLessons[currentLessonIndex].starterCode);
      showToast("Kod je vraćen na početno stanje lekcije.", "🔄");
    }
  });

  elements.prevLessonBtn.addEventListener('click', () => {
    if (currentLessonIndex > 0) {
      loadLesson(currentLessonIndex - 1);
    }
  });

  elements.nextLessonBtn.addEventListener('click', () => {
    const currentLessons = COURSES[currentCourseIndex].lessons;
    if (currentLessonIndex < currentLessons.length - 1) {
      loadLesson(currentLessonIndex + 1);
    }
  });

  // Kontrole za uvećanje i smanjenje fonta
  if (elements.fontDecBtn) {
    elements.fontDecBtn.addEventListener('click', () => applyFontSize(currentFontSize - 1.5));
  }
  if (elements.fontIncBtn) {
    elements.fontIncBtn.addEventListener('click', () => applyFontSize(currentFontSize + 1.5));
  }

  // Preuzimanje koda (.py)
  if (elements.downloadCodeBtn) {
    elements.downloadCodeBtn.addEventListener('click', downloadCurrentCode);
  }

  if (elements.completeLessonBtn) {
    elements.completeLessonBtn.addEventListener('click', () => {
      if (!isSandboxMode) {
        const currentLessons = COURSES[currentCourseIndex].lessons;
        saveCompletedLesson(currentLessons[currentLessonIndex].id);
        launchConfetti();
        showToast("Čestitamo! Označio si ovu lekciju kao pređenu! 🏆", "✅");
      }
    });
  }

  if (elements.sandboxBtn) {
    elements.sandboxBtn.addEventListener('click', () => {
      if (isSandboxMode) {
        loadLesson(currentLessonIndex);
        showToast("Povratak na lekciju kurikuluma.", "📚");
      } else {
        openSandbox();
      }
    });
  }

  // Prebacivanje kursa preko dropdown-a
  if (elements.courseSelect) {
    elements.courseSelect.addEventListener('change', (e) => {
      switchCourse(parseInt(e.target.value));
    });
  }

  // Modal za unos vrednosti (input)
  // Događaji za digitalni sertifikat
  if (elements.btnOpenCertificate) {
    elements.btnOpenCertificate.addEventListener('click', () => {
      if (isCertificateUnlocked()) {
        openCertificateModal();
      } else {
        showToast('Diploma se otključava nakon Završnog ispita (9/12) ili svih 27 lekcija! Otvaramo ispit...', '🏆');
        openFinalExamModal();
      }
    });
  }
  if (elements.btnCloseCertificate) {
    elements.btnCloseCertificate.addEventListener('click', closeCertificateModal);
  }
  if (elements.certificateModal) {
    elements.certificateModal.addEventListener('click', (e) => {
      if (e.target === elements.certificateModal) closeCertificateModal();
    });
  }
  if (elements.btnPrintCertificate) {
    elements.btnPrintCertificate.addEventListener('click', () => {
      window.print();
    });
  }
  if (elements.btnCopyCertId) {
    elements.btnCopyCertId.addEventListener('click', () => {
      const code = elements.certSerialNumber ? elements.certSerialNumber.innerText : '';
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          showToast(`Kriptografski ID sertifikata (${code}) je kopiran! 📋`, '✅');
        });
      }
    });
  }

    // Kontrole za unos (Input prompt)
  elements.inputSubmitBtn.addEventListener('click', submitCustomInput);
  const inlineSubmitBtn = document.getElementById('inline-terminal-submit');
  const inlineCancelBtn = document.getElementById('inline-terminal-cancel');
  const inlineInputEl = document.getElementById('inline-terminal-input');
  if (inlineSubmitBtn) inlineSubmitBtn.addEventListener('click', submitCustomInput);
  if (inlineCancelBtn) inlineCancelBtn.addEventListener('click', () => cancelCustomInput());
  if (inlineInputEl) {
    inlineInputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitCustomInput();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        cancelCustomInput('[Unos otkazan pritiskom na Esc]');
      }
    });
  }
  if (elements.inputCancelBtn) {
    elements.inputCancelBtn.addEventListener('click', () => {
      if (currentInputResolver) {
        currentInputResolver('');
        currentInputResolver = null;
      }
      elements.inputDialog.classList.remove('active');
      writeToConsole('[Korisnik je otkazao unos]\n', true);
    });
  }
  elements.inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submitCustomInput();
    }
  });
}

// ============================================================================
// INTERAKTIVNA PYTHON DEMONSTRACIJA U HERO SEKCIJI (Pravi Skulpt + CodeMirror)
// ============================================================================
function initHeroDemoEditor() {
  const textarea = document.getElementById('hero-demo-editor');
  const runBtn = document.getElementById('hero-demo-run');
  const resetBtn = document.getElementById('hero-demo-reset');
  const openFullBtn = document.getElementById('hero-demo-open-workshop');
  const outputEl = document.getElementById('hero-demo-output');
  const presetBtns = document.querySelectorAll('.hero-preset-btn');
  if (!textarea || !runBtn || !outputEl) return;

  const PRESETS = {
    pozdrav: `# Promeni ime i klikni "▶ Pokreni"!\nime = "Python početniče"\nprint(f"Zdravo, {ime}! 🐍")\nprint("Tvoj prvi pravi Python kod radi!")`,
    petlja: `# Odbrojavanje pomoću for petlje 🚀\nfor broj in range(3, 0, -1):\n    print(f"Lansiranje za {broj}...")\nprint("🚀 Polećemo u svet programiranja!")`,
    kalkulator: `# Mini kalkulator godišnje uštede 💰\ndnevno = 250\ngodisnje = dnevno * 365\nprint(f"Uz {dnevno} RSD dnevno:")\nprint(f"Za godinu dana imaš {godisnje} RSD!")`
  };

  let activePreset = 'pozdrav';
  let heroCm = null;

  if (typeof CodeMirror !== 'undefined') {
    heroCm = CodeMirror.fromTextArea(textarea, {
      mode: 'python',
      theme: 'dracula',
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      lineWrapping: true,
      extraKeys: {
        'Ctrl-Enter': () => runHeroPython(),
        'Cmd-Enter': () => runHeroPython()
      }
    });
    heroCm.setValue(PRESETS[activePreset]);
  } else {
    textarea.value = PRESETS[activePreset];
  }

  function getHeroCode() {
    return heroCm ? heroCm.getValue() : textarea.value;
  }

  function setHeroCode(code) {
    if (heroCm) {
      heroCm.setValue(code);
      setTimeout(() => heroCm.refresh(), 20);
    } else {
      textarea.value = code;
    }
  }

  function runHeroPython() {
    const code = getHeroCode().trim();
    if (!code) {
      outputEl.className = 'hero-console-output is-error';
      outputEl.textContent = 'Editor je prazan — upiši npr. print("Zdravo!") i pokreni ponovo.';
      return;
    }
    if (typeof Sk === 'undefined') {
      outputEl.className = 'hero-console-output is-error';
      outputEl.textContent = 'Python okruženje se još učitava, pokušaj ponovo za trenutak.';
      return;
    }

    let outBuf = '';
    outputEl.className = 'hero-console-output';
    outputEl.textContent = 'Izvršavam Python...';
    runBtn.disabled = true;

    Sk.configure({
      output: (txt) => { outBuf += txt; },
      read: builtinRead,
      nonreadopen: true,
      filewrite: () => {},
      inputfun: () => 'Polaznik',
      inputfunTakesPrompt: true,
      __future__: Sk.python3
    });
    Sk.execLimit = 2500;

    Sk.misceval.asyncToPromise(() => Sk.importMainWithBody('<hero_demo>', false, code, true))
      .then(() => {
        outputEl.className = 'hero-console-output is-success';
        outputEl.textContent = outBuf.trim() ? outBuf : '[Kod je prošao bez greške, bez ispisa]';
      })
      .catch((err) => {
        outputEl.className = 'hero-console-output is-error';
        const raw = err.toString();
        const friendly = (typeof translateError === 'function') ? translateError(raw) : '';
        outputEl.textContent = friendly ? `${raw}\n💡 ${friendly}` : raw;
      })
      .finally(() => {
        runBtn.disabled = false;
      });
  }

  runBtn.addEventListener('click', runHeroPython);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      setHeroCode(PRESETS[activePreset]);
      outputEl.className = 'hero-console-output';
      outputEl.textContent = 'Primer je vraćen — klikni „▶ Pokreni”!';
    });
  }

  if (openFullBtn) {
    openFullBtn.addEventListener('click', () => {
      switchView('workshop');
    });
  }

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-preset');
      if (!PRESETS[key]) return;
      activePreset = key;
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setHeroCode(PRESETS[key]);
      runHeroPython();
    });
  });

  // Osveži CodeMirror kada se vrati na početnu stranu
  const navHome = document.getElementById('nav-btn-home');
  if (navHome && heroCm) {
    navHome.addEventListener('click', () => setTimeout(() => heroCm.refresh(), 60));
  }
}

// ============================================================================
// MOBILNI TABOVI U RADIONICI (Samo za telefone i tablete <= 900px)
// ============================================================================
function setMobileWorkshopTab(tabName) {
  const workshopEl = document.getElementById('view-workshop');
  const btns = document.querySelectorAll('#mobile-workshop-tabs .mwt-btn');
  if (!workshopEl) return;

  workshopEl.classList.remove('mobile-tab-theory', 'mobile-tab-editor', 'mobile-tab-lessons');
  workshopEl.classList.add(`mobile-tab-${tabName}`);

  btns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-mtab') === tabName);
  });

  if (tabName === 'editor' && typeof editor !== 'undefined' && editor) {
    setTimeout(() => editor.refresh(), 40);
  }

  // Na telefonu skroluj početak tab-trake u fokus da korisnik dobije pun ekran za rad
  if (window.innerWidth <= 900) {
    const tabBar = document.getElementById('mobile-workshop-tabs');
    if (tabBar) {
      const rect = tabBar.getBoundingClientRect();
      if (rect.top < 0 || rect.top > 180) {
        tabBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}

function initMobileWorkshopTabs() {
  const tabBar = document.getElementById('mobile-workshop-tabs');
  if (!tabBar) return;

  tabBar.querySelectorAll('.mwt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setMobileWorkshopTab(btn.getAttribute('data-mtab') || 'theory');
    });
  });

  // Automatski prebaci na "Lekcija" kad se klikne lekcija iz spiska na telefonu
  const lessonList = document.getElementById('lesson-list');
  if (lessonList) {
    lessonList.addEventListener('click', (e) => {
      if (window.innerWidth <= 900 && e.target.closest('.lesson-item')) {
        setMobileWorkshopTab('theory');
      }
    });
  }

  // Automatski prebaci na "Kod & Terminal" kad se na telefonu klikne "Isprobaj u editoru" ili "Ubaci u editor"
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 900) return;
    if (e.target.closest('.try-example-btn') || e.target.closest('#btn-load-chal') || e.target.closest('#sandbox-toggle-btn')) {
      setMobileWorkshopTab('editor');
    }
  });
}

// Pokreni aplikaciju kad se učita DOM
document.addEventListener('DOMContentLoaded', () => {
  // Proveri sačuvan izbor kursa
  const savedCourse = localStorage.getItem('python_od_nule_active_course');
  if (savedCourse !== null && COURSES[parseInt(savedCourse)]) {
    currentCourseIndex = parseInt(savedCourse);
  }

  if (elements.courseSelect) {
    elements.courseSelect.value = currentCourseIndex.toString();
  }

  loadSavedDraftsFromStorage();
  initEditor();
  initHeroDemoEditor();
  initMobileWorkshopTabs();
  initFontSize();
  initCheatSheet();
  initPanelsResizers();
  initFocusMode();
  initThemeToggle();
  initTerminalTabs();
  initFinalExam();
  initPlacementTest();
  initScrollTopButton();
  initBirthYears();
  renderProfileUI();

  // Proveri aktivni pogled
  const savedView = localStorage.getItem('python_od_nule_active_view') || 'landing';
  switchView(savedView);
  buildLessonNav();
  bindEvents();
  loadLesson(0);
});
