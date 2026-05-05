"use client";

import { useState, useCallback } from "react";

const VOICE_OPTIONS = [
  { id: "JBFqnCBsd6RMkjVDRZzb", label: "George — Deep & Dramatic" },
  { id: "onwK4e9ZLuTAKqWW03F9", label: "Daniel — Authoritative" },
  { id: "nPczCjzI2devNBz1zQrb", label: "Brian — Gravitas" },
  { id: "TxGEqnHWrfWFTfGW9XjX", label: "Josh — Cinematic" },
];

interface Props {
  onStart: (apiKey: string, voiceId: string) => void;
  onStartSilent: () => void;
}

export default function ApiModal({ onStart, onStartSilent }: Props) {
  const [apiKey, setApiKey] = useState("");
  const [voiceId, setVoiceId] = useState(VOICE_OPTIONS[0].id);
  const [error, setError] = useState("");

  const handleStart = useCallback(() => {
    if (!apiKey.trim()) {
      setError("Please enter your ElevenLabs API key, or continue without audio.");
      return;
    }
    setError("");
    onStart(apiKey.trim(), voiceId);
  }, [apiKey, voiceId, onStart]);

  return (
    <div className="modal-overlay">
      {/* Starfield */}
      <div className="starfield">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="modal-card">
        <div className="modal-corner tl" />
        <div className="modal-corner tr" />
        <div className="modal-corner bl" />
        <div className="modal-corner br" />

        <div className="disc-glyph">◎</div>
        <h1 className="modal-title">ONE WORLD<br />ONE CHANCE</h1>
        <p className="modal-subtitle">
          An alien discovers a golden record drifting in space —<br />
          containing the entire rise and fall of human civilization.
        </p>

        <div className="modal-divider" />

        <label className="modal-label">
          ElevenLabs API Key <span className="label-optional">(for AI narration)</span>
        </label>
        <input
          type="password"
          className="modal-input"
          placeholder="Paste your ElevenLabs API key..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleStart()}
        />

        <label className="modal-label" style={{ marginTop: "16px" }}>Narrator Voice</label>
        <select
          className="modal-select"
          value={voiceId}
          onChange={(e) => setVoiceId(e.target.value)}
        >
          {VOICE_OPTIONS.map((v) => (
            <option key={v.id} value={v.id}>{v.label}</option>
          ))}
        </select>

        {error && <p className="modal-error">{error}</p>}

        <button className="btn-primary" onClick={handleStart}>
          ▶ &nbsp;Begin with AI Narration
        </button>
        <button className="btn-secondary" onClick={onStartSilent}>
          Continue without audio
        </button>

        <p className="modal-hint">
          Get a free API key at{" "}
          <a href="https://elevenlabs.io" target="_blank" rel="noreferrer">
            elevenlabs.io
          </a>
        </p>
      </div>
    </div>
  );
}
