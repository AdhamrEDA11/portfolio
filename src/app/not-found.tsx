"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

const strings = {
  en: {
    heading: "This page doesn't exist.",
    body: "The page you're looking for was moved, renamed, or never existed.",
    cta: "Back to Home"
  },
  ar: {
    heading: "الصفحة دي مش موجودة.",
    body: "الصفحة اللي بتدور عليها اتنقلت، اتغير اسمها، أو مكانتش موجودة أصلًا.",
    cta: "العودة للرئيسية"
  }
};

export default function NotFound() {
  const { lang } = useLanguage();
  const s = strings[lang];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="num text-sm text-accent-blue">404</span>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink-900 dark:text-white">
        {s.heading}
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ink-600 dark:text-ink-300">{s.body}</p>
      <Link
        href="/"
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white"
      >
        {s.cta}
      </Link>
    </main>
  );
}
