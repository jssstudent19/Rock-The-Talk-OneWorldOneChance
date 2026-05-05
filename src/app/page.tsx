"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SLIDES } from "./data/slides";
import AudioPlayer from "./components/AudioPlayer";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";
import LoadingScreen from "./components/LoadingScreen";

type Phase = "landing" | "intro" | "loading" | "story" | "quiz";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const slide = SLIDES[current];
  const total = SLIDES.length;

  // Typewriter effect — runs when story starts and on slide change
  useEffect(() => {
    if (phase !== "story") return;
    setDisplayedText("");
    setTypingDone(false);
    let i = 0;
    const text = slide.text;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) { clearInterval(interval); setTypingDone(true); }
    }, 26);
    return () => clearInterval(interval);
  }, [current, phase, slide.text]);

  const navigate = useCallback((dir: 1 | -1) => {
    const next = current + dir;
    if (next < 0 || next >= total || transitioning) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(next); setTransitioning(false); }, 400);
  }, [current, total, transitioning]);

  useEffect(() => {
    if (phase !== "story") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") navigate(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate, phase]);

  /* ── PHASE 1: LANDING ── */
  if (phase === "landing") {
    return <LandingPage onContinue={() => setPhase("intro")} onQuiz={() => setPhase("quiz")} />;
  }

  /* ── PHASE: QUIZ ── */
  if (phase === "quiz") {
    return <QuizPage onBack={() => setPhase("landing")} />;
  }

  /* ── PHASE 2: INTRO CARD ── */
  if (phase === "intro") {
    return (
      <div className="intro-screen">
        <div className="intro-stars">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i} className="star" style={{
              left: `${(Math.sin(i * 137.5) * 0.5 + 0.5) * 100}%`,
              top: `${(Math.cos(i * 97.3) * 0.5 + 0.5) * 100}%`,
              animationDelay: `${(i % 30) * 0.1}s`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
            }} />
          ))}
        </div>
        <div className="intro-card">
          <div className="intro-disc">◎</div>
          <p className="intro-sub">A transmission recovered from deep space.</p>
          <h1 className="intro-title">ONE WORLD<br />ONE CHANCE</h1>
          <p className="intro-desc">
            An alien drifting through the outer rim discovers a golden record —<br />
            containing the complete history of a civilization that no longer exists.
          </p>
          <div className="intro-divider" />
          <button className="intro-btn" onClick={() => setPhase("loading")}>
            ▶ &nbsp; Play the Record
          </button>
          <p className="intro-hint">Use ← → arrow keys or buttons to navigate</p>
        </div>
      </div>
    );
  }

  /* ── PHASE: LOADING / AUDIO TIP ── */
  if (phase === "loading") {
    return <LoadingScreen onReady={() => setPhase("story")} />;
  }

  /* ── PHASE 3: STORY ── */
  const progress = ((current + 1) / total) * 100;
  const isEnd = slide.theme === "end";

  return (
    <main className={`story-root theme-${slide.theme} ${transitioning ? "fading" : ""}`}>

      {/* LEFT PANEL */}
      <aside className="left-panel">
        <div className="panel-top">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="panel-header">
            <span className="chapter-badge">{slide.chapter}</span>
            <div className="panel-header-right">
              <span className="slide-counter">{current + 1} / {total}</span>
              <button
                className="home-btn"
                onClick={() => { window.speechSynthesis?.cancel(); setPhase("landing"); setCurrent(0); }}
                title="Go to Home"
                aria-label="Home"
              >
                ⌂
              </button>
            </div>
          </div>
        </div>

        <div className="panel-body">
          <div className="card-year">{slide.year}</div>
          <h2 className="card-title">{slide.title}</h2>
          <div className="card-divider" />
          <p className="card-text">
            {displayedText}
            {!typingDone && <span className="cursor-blink">|</span>}
          </p>
          {slide.fact && typingDone && (
            <div className="fact-box">
              <span className="fact-icon">📌</span>
              <span>{slide.fact}</span>
            </div>
          )}
          {isEnd && typingDone && (
            <div className="end-message">
              <div className="end-line">ONE WORLD.<br />ONE CHANCE.<br />GONE.</div>
              <button className="btn-restart" onClick={() => { setCurrent(0); setPhase("landing"); }}>
                ↺ &nbsp;Start Over
              </button>
            </div>
          )}
        </div>

        <div className="panel-bottom">
          <AudioPlayer text={slide.narration} slideIndex={current} />
          <div className="nav-row">
            <button className="nav-btn" onClick={() => navigate(-1)} disabled={current === 0 || transitioning} aria-label="Previous">←</button>
            <div className="nav-dots">
              {SLIDES.map((_, i) => (
                <span key={i}
                  className={`dot ${i === current ? "active" : ""} ${i < current ? "done" : ""}`}
                  onClick={() => { if (!transitioning) { setTransitioning(true); setTimeout(() => { setCurrent(i); setTransitioning(false); }, 400); } }}
                />
              ))}
            </div>
            <button className="nav-btn" onClick={() => navigate(1)} disabled={current === total - 1 || transitioning} aria-label="Next">→</button>
          </div>
        </div>
      </aside>

      {/* RIGHT PANEL — Slide Photo */}
      <div className="right-panel">
        <Image key={slide.image} src={slide.image} alt={slide.title} fill className="slide-photo" priority />
        <div className="scene-vignette" />
      </div>

    </main>
  );
}
