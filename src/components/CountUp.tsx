"use client";

import { useEffect, useRef, useState } from "react";

const NUMBER = /\d[\d,]*(?:\.\d+)?/g;

export default function CountUp({ value, duration = 1100 }: { value: string; duration?: number }) {
  const tokens = value.match(NUMBER) ?? [];
  const animatable = tokens.length === 1;
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!animatable || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const token = tokens[0];
    const decimals = token.includes(".") ? token.split(".")[1].length : 0;
    const grouped = token.includes(",");
    const target = parseFloat(token.replace(/,/g, ""));
    const [before, after] = value.split(token);

    const format = (n: number) =>
      n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: grouped
      });

    setDisplay(`${before}${format(0)}${after}`);

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(p < 1 ? `${before}${format(target * eased)}${after}` : value);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
