"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || !ref.current) return;
    const target = parseFloat(match[2].replace(/,/g, ""));
    const hasDecimals = match[2].includes(".");
    const prefix = match[1];
    const suffix = match[3];
    let frame: number;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const duration = 900;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          const formatted = hasDecimals
            ? current.toFixed(1)
            : Math.round(current).toLocaleString();
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [match]);

  if (!match) return <span>{value}</span>;

  return <span ref={ref}>{display}</span>;
}
