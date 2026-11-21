---
name: serbian-edtech-video
description: >-
  Generates 1080p Full HD Serbian educational Python video lessons and 1280x720 YouTube
  thumbnails using edge-tts, Pillow, and imageio-ffmpeg. Use whenever the user asks to
  create, regenerate, or batch-render video lessons for the Python Od Nule platform.
---

# Serbian EdTech Video Generator

## Critical Technical Invariants
1. **Mandatory Cyrillic Transliteration for Serbian TTS:**
   - Microsoft `sr-RS-NicholasNeural` and `sr-RS-SophieNeural` REQUIRE **Serbian Cyrillic (ћирилица)** input. Passing Latin script triggers broken English pronunciation.
   - Always transliterate narration text into Cyrillic (digraphs `lj/nj/dž` first) AND phonetically map English coding terms (`Python -> Пајтон`, `print -> принт`, `NameError -> Нејм Ерор`, `input -> инпут`, etc.) while keeping visual on-screen code in Latin script.
2. **Python 3.12 FFmpeg Pipe Fix:**
   - After `proc.stdin.close()`, NEVER call `proc.communicate()` (raises `ValueError: flush of closed file` in Python 3.12). Always use `err = proc.stderr.read(); proc.wait()`.
3. **Batch Resilience:**
   - Skip already-generated `.mp4` files (`os.path.getsize > 150_000`) and wrap `edge_tts.Communicate(...).save()` in a retry loop with exponential backoff to survive transient network drops.
4. **Dependencies Without `sudo`:**
   - Install `edge-tts` and `imageio-ffmpeg` into an isolated target directory or venv (avoid global `pip install`); use `imageio_ffmpeg.get_ffmpeg_exe()` for a self-contained `ffmpeg` binary.
5. **Platform Wiring:**
   - Save outputs to `video_lekcije/<slug>.mp4` and `video_lekcije/<slug>_thumbnail.png`, wire `localVideoUrl` + `videoPoster` (and optional `youtubeId`) in `assets/js/lessons.js`, and verify with `python3 scripts/qa_verify_all.py`.
