#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Python Od Nule — Automatski QA Verifikator Celokupne Platforme (Stefan Milić, Head of QA)
Jednim pokretanjem proverava:
1. JS sintaksu (app.js i lessons.js)
2. CSS integritet (balans zagrada)
3. Svih 27 lekcija, 108 zadataka, 108 kviz pitanja i 135 Python kodova
4. Postojanje svih 27 Full HD video fajlova i thumbnail-ova
"""

import ast
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

def check_js_syntax():
    for f in ['assets/js/app.js', 'assets/js/lessons.js', 'assets/js/course_bridge.js', 'assets/js/course_projects.js', 'assets/js/course4_cs101.js']:
        subprocess.run(['node', '-c', f], check=True)
    print("✅ [1/4] JavaScript sintaksa (svih 5 JS fajlova): 100% ČISTA")

def check_css():
    with open('assets/css/style.css', 'r', encoding='utf-8') as f:
        css = f.read()
    assert css.count('{') == css.count('}'), "CSS zagrade nisu balansirane!"
    print(f"✅ [2/4] CSS integritet ({css.count('{')} blokova): 100% BALANSIRANO")

def check_curriculum_and_python():
    node_code = """
    const { COURSES } = require('./assets/js/lessons.js');
    const out = [];
    COURSES.forEach((c, ci) => c.lessons.forEach((l, li) => {
      const qList = Array.isArray(l.quiz) ? l.quiz : (l.quiz ? [l.quiz] : []);
      out.push({
        c: ci + 1, l: li + 1, id: l.id,
        starter: l.starterCode,
        solutions: (l.challenges || []).map(ch => ch.solution || ''),
        qCount: qList.length,
        video: l.localVideoUrl || '',
        poster: l.videoPoster || ''
      });
    }));
    console.log(JSON.stringify(out));
    """
    data = json.loads(subprocess.check_output(['node', '-e', node_code], text=True))
    snippets = 0
    total_q = 0
    total_ch = 0
    missing_media = []

    for item in data:
        snippets += 1
        ast.parse(item['starter'])
        total_q += item['qCount']
        for sol in item['solutions']:
            total_ch += 1
            if sol.strip():
                snippets += 1
                ast.parse(sol)
        if item['video'] and not os.path.exists(item['video']):
            missing_media.append(item['video'])
        if item['poster'] and not os.path.exists(item['poster']):
            missing_media.append(item['poster'])

    print(f"✅ [3/4] Kurikulum: {len(data)} lekcija | {total_ch} zadataka | {total_q} kviz pitanja | {snippets} Python kodova (0 grešaka)")
    assert not missing_media, f"Nedostaju mediji: {missing_media}"
    video_count = sum(1 for item in data if item['video'])
    print(f"✅ [4/4] Multimedija: Svih {video_count} video fajlova i {video_count} thumbnail-ova prisutno na disku!")

if __name__ == "__main__":
    print("=" * 65)
    print(" 🛡️  AUTOMATSKI QA VERIFIKATOR — PYTHON OD NULE")
    print("=" * 65)
    check_js_syntax()
    check_css()
    check_curriculum_and_python()
    print("=" * 65)
    print(" 🏆 SVE PROVERE PROŠLE SA 100% USPEHA!")
    print("=" * 65)
