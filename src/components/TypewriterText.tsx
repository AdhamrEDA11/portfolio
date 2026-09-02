"use client";

import { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text,
  speed = 70
}: {
  text: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        let i = 0;
        interval = setInterval(() => {
          i += 1;
          setDisplay(text.slice(0, i));
          if (i >= text.length) {
            clearInterval(interval);
            setDone(true);
          }
        }, speed);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <span ref={ref}>
      {display}
      <span className={`ml-0.5 inline-block w-[2px] -translate-y-[1px] bg-current align-middle ${done ? "animate-pulse" : ""}`} style={{ height: "0.85em" }} />
    </span>
  );
}
