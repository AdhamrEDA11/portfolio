"use client";

import { useEffect, useRef, useState } from "react";

type Segment = { text: string; className?: string };
type CharItem = { ch: string; line: number; className?: string };

function flatten(lines: Segment[][]): CharItem[] {
  const items: CharItem[] = [];
  lines.forEach((line, li) => {
    line.forEach((seg) => {
      for (const ch of seg.text) {
        items.push({ ch, line: li, className: seg.className });
      }
    });
  });
  return items;
}

export default function HeroTypewriter({
  lines,
  speed = 45,
  startDelay = 250,
  onComplete
}: {
  lines: Segment[][];
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
}) {
  const items = flatten(lines);
  const total = items.length;

  const containerRef = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(0);
  const [typing, setTyping] = useState(false);
  const hasPlayedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const play = () => {
    clearInterval(intervalRef.current);
    setTyping(true);
    setRevealed(0);
    let i = 0;
    intervalRef.current = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= total) {
        clearInterval(intervalRef.current);
        setTyping(false);
        onComplete?.();
      }
    }, speed);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasPlayedRef.current) return;
        hasPlayedRef.current = true;
        timeoutRef.current = setTimeout(play, startDelay);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReplay = () => {
    if (typing) return;
    play();
  };

  // Group visible characters into minimal spans, inserting <br /> on line change.
  const visible = items.slice(0, revealed);
  const nodes: React.ReactNode[] = [];
  let currentLine = -1;
  let buffer = "";
  let bufferClass: string | undefined;
  let key = 0;

  const flush = () => {
    if (buffer) {
      nodes.push(
        <span key={key++} className={bufferClass}>
          {buffer}
        </span>
      );
      buffer = "";
    }
  };

  visible.forEach((item) => {
    if (item.line !== currentLine) {
      flush();
      if (currentLine !== -1) nodes.push(<br key={`br-${key++}`} />);
      currentLine = item.line;
    }
    if (item.className !== bufferClass) {
      flush();
      bufferClass = item.className;
    }
    buffer += item.ch;
  });
  flush();

  return (
    <span ref={containerRef} onMouseEnter={handleReplay} className="cursor-default">
      {nodes}
      {(typing || revealed < total) && (
        <span
          className="ml-1 inline-block w-[3px] -translate-y-[3px] animate-pulse bg-current align-middle"
          style={{ height: "0.8em" }}
        />
      )}
    </span>
  );
}
