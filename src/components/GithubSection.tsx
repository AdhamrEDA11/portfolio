"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

const strings = {
  en: {
    heading: "Code Behind the Analysis",
    body: "Explore the code, SQL queries, notebooks, and analytical workflows behind my projects.",
    cta: "Visit GitHub"
  },
  ar: {
    heading: "الكود وراء التحليل",
    body: "استكشف الكود، استعلامات SQL، الدفاتر التفاعلية، ومسارات العمل التحليلية خلف مشاريعي.",
    cta: "زيارة GitHub"
  }
};

export default function GithubSection() {
  const { lang } = useLanguage();
  const s = strings[lang];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-ink-100 bg-navy-950 p-8 dark:border-navy-border sm:flex-row sm:items-center sm:p-12">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
              <Github size={20} />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {s.heading}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-300">{s.body}</p>
            </div>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-navy-950 transition-colors hover:bg-ink-100"
          >
            {s.cta}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
