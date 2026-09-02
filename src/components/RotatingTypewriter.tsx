"use client";

import { useEffect, useRef, useState } from "react";

export default function RotatingTypewriter({
  words,
  active = true,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseAfterType = 1400,
  pauseAfterDelete = 400,
  className
}: {
  words: string[];
  active?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  className?: string;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!active || words.length === 0) return;
    const current = words[wordIndex % words.length];

    if (!deleting && charCount < current.length) {
      timeoutRef.current = setTimeout(() => setCharCount((c) => c + 1), typingSpeed);
    } else if (!deleting && charCount === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), pauseAfterType);
    } else if (deleting && charCount > 0) {
      timeoutRef.current = setTimeout(() => setCharCount((c) => c - 1), deletingSpeed);
    } else if (deleting && charCount === 0) {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseAfterDelete);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [active, charCount, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  const current = words[wordIndex % words.length] ?? "";
  const display = current.slice(0, charCount);

  return (
    <span className={className}>
      {display}
      <span
        className="ml-1 inline-block w-[3px] -translate-y-[3px] animate-pulse bg-current align-middle"
        style={{ height: "0.8em" }}
      />
    </span>
  );
}
