"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="focus-ring fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-900 shadow-card transition-transform hover:-translate-y-0.5 dark:border-navy-border dark:bg-navy-800 dark:text-ink-50 sm:bottom-8 sm:right-8"
    >
      <ArrowUp size={18} />
    </button>
  );
}
