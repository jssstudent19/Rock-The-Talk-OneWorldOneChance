"use client";

import { useEffect, useState } from "react";

interface Props {
  onReady: () => void;
}

export default function LoadingScreen({ onReady }: Props) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    const steps = [
      { target: 30, delay: 300 },
      { target: 60, delay: 700 },
      { target: 85, delay: 1200 },
      { target: 100, delay: 1800 },
    ];
    const timers = steps.map(({ target, delay }) =>
      setTimeout(() => setProgress(target), delay)
    );
    const done = setTimeout(() => setLoaded(true), 2200);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, []);

  return (
    <div className="loading-root">
      {/* Stars */}
      <div className="loading-stars">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className="lstar" style={{
            left: `${(Math.sin(i * 137.5) * 0.5 + 0.5) * 100}%`,
            top: `${(Math.cos(i * 97.3) * 0.5 + 0.5) * 100}%`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            animationDelay: `${(i % 20) * 0.15}s`,
          }} />
        ))}
      </div>

      <div className="loading-card">
        <div className="loading-corners">
          <span className="cc tl" /><span className="cc tr" />
          <span className="cc bl" /><span className="cc br" />
        </div>

        {!loaded ? (
          <>
            {/* Loading state */}
            <div className="loading-disc">◎</div>
            <p className="loading-label">Decoding the Record...</p>
            <div className="loading-bar-wrap">
              <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <p className="loading-pct">{progress}%</p>
          </>
        ) : (
          <>
            {/* Audio tip state */}
            <div className="loading-ready-icon">🎧</div>
            <h2 className="loading-ready-title">For the Best Experience</h2>
            <div className="loading-divider" />

            <div className="loading-tips">
              <div className="loading-tip">
                <span className="tip-icon">🔊</span>
                <span className="tip-text">
                  <strong>Turn on your audio</strong><br />
                  The story comes with Complete narration that brings it to life.
                </span>
              </div>
              <div className="loading-tip">
                <span className="tip-icon">🎧</span>
                <span className="tip-text">
                  <strong>Use headphones</strong><br />
                  Immerse yourself in the atmosphere of the story.
                </span>
              </div>
              <div className="loading-tip">
                <span className="tip-icon">🌑</span>
                <span className="tip-text">
                  <strong>Dim your lights</strong><br />
                  This story is best experienced in a dark environment.
                </span>
              </div>
            </div>

            <div className="loading-divider" />

            <button className="loading-ready-btn" onClick={onReady}>
              I&apos;m Ready — Begin the Story &nbsp;→
            </button>
            <p className="loading-skip-hint">Press any key or click to continue</p>
          </>
        )}
      </div>
    </div>
  );
}
