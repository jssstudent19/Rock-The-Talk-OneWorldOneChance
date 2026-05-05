"use client";

import { useEffect, useState } from "react";

interface Props {
  onContinue: () => void;
  onQuiz: () => void;
}

export default function LandingPage({ onContinue, onQuiz }: Props) {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [showQuizConfirm, setShowQuizConfirm] = useState(false);

  // Sequenced text reveals
  useEffect(() => {
    const timings: [number, 0 | 1 | 2 | 3 | 4][] = [
      [400, 1],
      [1600, 2],
      [2800, 3],
      [4200, 4],
    ];
    const timers = timings.map(([ms, p]) => setTimeout(() => setPhase(p), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="landing-root" onClick={phase >= 4 && !showQuizConfirm ? onContinue : undefined}>

      {/* Starfield */}
      <div className="landing-stars">
        {Array.from({ length: 120 }).map((_, i) => (
          <span key={i} className="lstar" style={{
            left: `${(Math.sin(i * 137.508) * 0.5 + 0.5) * 100}%`,
            top: `${(Math.cos(i * 97.314) * 0.5 + 0.5) * 100}%`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            animationDelay: `${(i % 40) * 0.08}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }} />
        ))}
      </div>

      {/* Ambient glow */}
      <div className="landing-glow" />

      {/* Main Content */}
      <div className="landing-content">
        {/* Club name */}
        <div className={`landing-club ${phase >= 1 ? "reveal" : ""}`}>
          <span className="club-letter">R</span><span className="club-letter">O</span>
          <span className="club-letter">C</span><span className="club-letter">K</span>
          <span className="club-space"> </span>
          <span className="club-letter">T</span><span className="club-letter">H</span>
          <span className="club-letter">E</span>
          <span className="club-space"> </span>
          <span className="club-letter">T</span><span className="club-letter">A</span>
          <span className="club-letter">L</span><span className="club-letter">K</span>
          <span className="club-space"> </span>
          <span className="club-letter club-highlight">C</span>
          <span className="club-letter club-highlight">L</span>
          <span className="club-letter club-highlight">U</span>
          <span className="club-letter club-highlight">B</span>
        </div>

        <div className={`landing-presents ${phase >= 2 ? "reveal" : ""}`}>
          — &nbsp; p r e s e n t s &nbsp; —
        </div>

        <div className={`landing-rule ${phase >= 3 ? "reveal" : ""}`} />

        <div className={`landing-theme ${phase >= 3 ? "reveal" : ""}`}>
          <span className="theme-line-1">ONE WORLD</span>
          <span className="theme-dot">✦</span>
          <span className="theme-line-2">ONE CHANCE</span>
        </div>

        <div className={`landing-rule ${phase >= 3 ? "reveal" : ""}`} />

        <div className={`landing-tagline ${phase >= 4 ? "reveal" : ""}`}>
          A story told through an alien&apos;s eyes.
        </div>

        <button
          className={`landing-cta ${phase >= 4 ? "reveal" : ""}`}
          onClick={(e) => { e.stopPropagation(); onContinue(); }}
        >
          ▶ &nbsp; Enter the Experience
        </button>

        <button
          className={`landing-quiz-btn ${phase >= 4 ? "reveal" : ""}`}
          onClick={(e) => { e.stopPropagation(); setShowQuizConfirm(true); }}
        >
          ✦ &nbsp; Take the GK Quiz
        </button>

        <p className={`landing-skip ${phase >= 4 ? "reveal" : ""}`}>
          Click anywhere to enter the experience
        </p>
      </div>

      {/* ── QUIZ CONFIRM POPUP ── */}
      {showQuizConfirm && (
        <div className="confirm-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="confirm-card">
            <div className="confirm-corners">
              <span className="cc tl" /><span className="cc tr" />
              <span className="cc bl" /><span className="cc br" />
            </div>

            <div className="confirm-icon">🌍</div>
            <h2 className="confirm-title">Hold On, Explorer!</h2>
            <div className="confirm-divider" />
            <p className="confirm-body">
              The quiz is based on the story you are about to witness —<br />
              the rise and fall of human civilization through an alien&apos;s eyes.
            </p>
            <p className="confirm-suggest">
              We strongly recommend watching the narration first.<br />
              <strong>It will only take 5 minutes.</strong>
            </p>

            <div className="confirm-actions">
              <button
                className="confirm-btn-primary"
                onClick={() => { setShowQuizConfirm(false); onContinue(); }}
              >
                &nbsp; Take me to the Story
              </button>
              <button
                className="confirm-btn-secondary"
                onClick={() => { setShowQuizConfirm(false); onQuiz(); }}
              >
                Skip — Continue to Quiz
              </button>
            </div>

            <button className="confirm-close" onClick={() => setShowQuizConfirm(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
