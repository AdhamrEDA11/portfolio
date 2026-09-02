"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Project, projects } from "@/lib/data";
import { projectsAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";

const strings = {
  en: { walkthrough: "Case Study Walkthrough", recommendations: "Business Recommendations", allProjects: "All Projects", next: "Next" },
  ar: { walkthrough: "خطوات دراسة الحالة", recommendations: "توصيات العمل", allProjects: "كل المشاريع", next: "التالي" }
};

export default function CaseStudyClient({ project, index }: { project: Project; index: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const s = strings[lang];
  const p = isAr ? { ...project, ...projectsAr[index] } : project;

  const nextIdx = (index + 1) % projects.length;
  const next = isAr ? { ...projects[nextIdx], ...projectsAr[nextIdx] } : projects[nextIdx];

  return (
    <div className="container-x py-16 sm:py-20">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {p.insights.map((insight) => (
          <div
            key={insight.label}
            className="rounded-xl border border-ink-100 bg-white px-5 py-4 dark:border-navy-border dark:bg-navy-850"
          >
            <span className="text-xs text-ink-400">{insight.label}</span>
            <div className="num mt-1 text-lg font-semibold text-ink-900 dark:text-white">
              {insight.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
          {s.walkthrough}
        </h2>
        <div className="mt-6 divide-y divide-ink-100 rounded-2xl border border-ink-100 dark:divide-navy-border dark:border-navy-border">
          {p.caseStudy.map((section, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={section.heading}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="flex items-center gap-4">
                    <span className="num text-xs text-accent-blue dark:text-accent-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink-900 dark:text-white sm:text-base">
                      {section.heading}
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pl-[4.25rem]">
                    {section.body.map((para, j) => (
                      <p key={j} className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
          {s.recommendations}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {p.recommendations.map((rec, i) => (
            <div
              key={i}
              className="rounded-xl border border-ink-100 bg-ink-50/50 p-5 dark:border-navy-border dark:bg-navy-900/40"
            >
              <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-ink-100 pt-8 dark:border-navy-border">
        <Link href="/#projects" className="focus-ring text-sm text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white">
          {s.allProjects}
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-white"
        >
          {s.next}: {next.title}
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
