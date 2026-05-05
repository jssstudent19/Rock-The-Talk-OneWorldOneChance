"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Props {
  text: string;
  slideIndex: number;
}

export default function AudioPlayer({ text, slideIndex }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Pick the best available voice: prefer deep English male
  const getBestVoice = useCallback((): SpeechSynthesisVoice | null => {
    const voices = window.speechSynthesis.getVoices();
    // Prefer known deep male voices (ordered by quality)
    const preferred = [
      "Google UK English Male",
      "Microsoft George Online (Natural) - English (United Kingdom)",
      "Microsoft Ryan Online (Natural) - English (United Kingdom)",
      "Microsoft Guy Online (Natural) - English (United States)",
      "Microsoft David Desktop - English (United States)",
      "Microsoft Mark Desktop - English (United States)",
      "Google US English",
      "Alex",       // macOS deep male
      "Daniel",     // macOS UK male
      "Fred",       // macOS robotic but deep
      "Arthur",     // macOS UK male
      "Thomas",
      "Bruce",
    ];
    for (const name of preferred) {
      const v = voices.find((v) => v.name === name);
      if (v) return v;
    }
    // Fallback: pick first English voice that sounds male by name
    const maleHints = ["male", "man", "guy", "george", "david", "mark", "ryan", "james"];
    const maleFallback = voices.find((v) =>
      maleHints.some((h) => v.name.toLowerCase().includes(h))
    );
    if (maleFallback) return maleFallback;
    return voices.find((v) => v.lang.startsWith("en")) ?? voices[0] ?? null;
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback(() => {
    if (!window.speechSynthesis) return;
    stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 0.75;
    utterance.volume = 1;
    utterance.voice = getBestVoice();

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [text, stop, getBestVoice]);

  // Check support
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSupported(false);
    }
  }, []);

  // Auto-play on each new slide, stop previous
  useEffect(() => {
    if (!supported) return;
    // Small delay so voices are loaded and slide transition finishes
    const t = setTimeout(() => speak(), 600);
    return () => {
      clearTimeout(t);
      window.speechSynthesis.cancel();
      setSpeaking(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex, supported]);

  const toggle = () => {
    if (speaking) {
      window.speechSynthesis.pause();
      setSpeaking(false);
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setSpeaking(true);
    } else {
      speak();
    }
  };

  if (!supported) return null;

  return (
    <div className="tts-bar">
      <button
        className={`tts-btn ${speaking ? "active" : ""}`}
        onClick={toggle}
        title={speaking ? "Pause narration" : "Play narration"}
      >
        {speaking ? "⏸" : "▶"}
      </button>
      <span className="tts-label">
        {speaking ? "Narrating..." : "Play narration"}
      </span>
      {speaking && (
        <span className="tts-wave">
          <span /><span /><span /><span /><span />
        </span>
      )}
    </div>
  );
}
