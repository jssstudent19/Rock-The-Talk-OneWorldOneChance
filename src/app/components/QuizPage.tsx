"use client";

import { useState } from "react";
import { QUIZ } from "../data/quiz";

interface Props {
  onBack: () => void;
}

type Answer = number | null;

export default function QuizPage({ onBack }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Answer>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUIZ.length).fill(null));

  const q = QUIZ[current];
  const isCorrect = selected === q.correct;
  const progress = ((current + 1) / QUIZ.length) * 100;

  const handleSelect = (idx: number) => {
    if (confirmed) return;
    setSelected(idx);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    const correct = selected === q.correct;
    if (correct) setScore((s) => s + 1);
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setConfirmed(true);
  };

  const handleNext = () => {
    if (current + 1 >= QUIZ.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setConfirmed(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setScore(0);
    setDone(false);
    setAnswers(Array(QUIZ.length).fill(null));
  };

  const scorePercent = Math.round((score / QUIZ.length) * 100);
  const grade =
    scorePercent >= 80 ? { label: "EARTH GUARDIAN", icon: "🌍", color: "#2d8a22" } :
    scorePercent >= 60 ? { label: "AWARE CITIZEN",  icon: "🌱", color: "#c9922f" } :
    scorePercent >= 40 ? { label: "LEARNING",        icon: "📚", color: "#8b6020" } :
                         { label: "NEEDS ATTENTION", icon: "⚠️", color: "#cc2200" };

  return (
    <div className="quiz-root">
      {/* Stars background */}
      <div className="quiz-stars">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className="lstar" style={{
            left: `${(Math.sin(i * 137.5) * 0.5 + 0.5) * 100}%`,
            top: `${(Math.cos(i * 97.3) * 0.5 + 0.5) * 100}%`,
            width: `${(i % 3) + 1}px`, height: `${(i % 3) + 1}px`,
            animationDelay: `${(i % 20) * 0.15}s`,
          }} />
        ))}
      </div>

      <div className="quiz-card">
        {/* Header */}
        <div className="quiz-header">
          <button className="quiz-back" onClick={onBack}>← Back</button>
          <div className="quiz-title-row">
            <span className="quiz-badge">ONE WORLD ONE CHANCE</span>
            <span className="quiz-badge">GK QUIZ</span>
          </div>
        </div>

        {!done ? (
          <>
            {/* Progress */}
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="quiz-meta">
              <span>Question {current + 1} of {QUIZ.length}</span>
              <span>Score: {score}</span>
            </div>

            {/* Question */}
            <div className="quiz-question">
              <span className="quiz-q-num">Q{current + 1}</span>
              {q.question}
            </div>

            {/* Options */}
            <div className="quiz-options">
              {q.options.map((opt, idx) => {
                let cls = "quiz-option";
                if (confirmed) {
                  if (idx === q.correct) cls += " correct";
                  else if (idx === selected) cls += " wrong";
                  else cls += " dim";
                } else if (selected === idx) {
                  cls += " selected";
                }
                return (
                  <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                    <span className="opt-letter">{["A","B","C","D"][idx]}</span>
                    <span className="opt-text">{opt}</span>
                    {confirmed && idx === q.correct && <span className="opt-tick">✓</span>}
                    {confirmed && idx === selected && idx !== q.correct && <span className="opt-cross">✗</span>}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {confirmed && (
              <div className={`quiz-explanation ${isCorrect ? "exp-correct" : "exp-wrong"}`}>
                <strong>{isCorrect ? "✓ Correct!" : "✗ Incorrect."}</strong>{" "}
                {q.explanation}
              </div>
            )}

            {/* Actions */}
            <div className="quiz-actions">
              {!confirmed ? (
                <button className="quiz-btn-confirm" onClick={handleConfirm} disabled={selected === null}>
                  Confirm Answer
                </button>
              ) : (
                <button className="quiz-btn-next" onClick={handleNext}>
                  {current + 1 >= QUIZ.length ? "See Results →" : "Next Question →"}
                </button>
              )}
            </div>
          </>
        ) : (
          /* Results Screen */
          <div className="quiz-results">
            <div className="results-icon">{grade.icon}</div>
            <div className="results-grade" style={{ color: grade.color }}>{grade.label}</div>
            <div className="results-score">{score} / {QUIZ.length}</div>
            <div className="results-percent">{scorePercent}%</div>
            <div className="results-bar-wrap">
              <div className="results-bar" style={{ width: `${scorePercent}%`, background: grade.color }} />
            </div>
            <div className="results-summary">
              {scorePercent >= 80
                ? "Outstanding! You are truly aware of our planet's challenges."
                : scorePercent >= 60
                ? "Good effort! Keep learning about our world's critical issues."
                : scorePercent >= 40
                ? "There's much to discover. The planet needs informed citizens."
                : "The world needs you to learn more. Start with the story!"}
            </div>
            <div className="results-breakdown">
              {QUIZ.map((q, i) => (
                <span key={i} className={`breakdown-dot ${answers[i] === q.correct ? "bd-correct" : "bd-wrong"}`} title={`Q${i+1}`} />
              ))}
            </div>
            <div className="results-actions">
              <button className="quiz-btn-confirm" onClick={handleRestart}>↺ Try Again</button>
              <button className="quiz-btn-next" onClick={onBack}>← Back to Story</button>
            </div>
          </div>
        )}

        {/* Corner decoration */}
        <div className="qc tl"/><div className="qc tr"/>
        <div className="qc bl"/><div className="qc br"/>
      </div>
    </div>
  );
}
