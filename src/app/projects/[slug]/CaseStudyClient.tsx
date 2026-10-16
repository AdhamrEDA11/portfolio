"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Project, projects } from "@/lib/data";
import { projectsAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";
import ProjectGallery from "@/components/ProjectGallery";
import CountUp from "@/components/CountUp";

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
            className="group relative overflow-hidden rounded-xl border border-ink-100 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:shadow-lg dark:border-navy-border dark:bg-navy-850"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent-blue to-accent-cyan transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
            <span className="text-xs text-ink-400">{insight.label}</span>
            <div className="num mt-1 text-lg font-semibold text-ink-900 dark:text-white">
              <CountUp value={insight.value} />
            </div>
          </div>
        ))}
      </div>

      {p.gallery && p.gallery.length > 0 && (
        <ProjectGallery items={p.gallery} title={p.title} />
      )}

      <div className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
          {s.walkthrough}
        </h2>
        <div className="relative mt-6">
          <span
            aria-hidden="true"
            className="absolute bottom-6 top-6 w-px bg-ink-100 ltr:left-[2rem] rtl:right-[2rem] dark:bg-navy-border sm:ltr:left-[2.25rem] sm:rtl:right-[2.25rem]"
          />
          <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white/40 dark:divide-navy-border dark:border-navy-border dark:bg-transparent">
            {p.caseStudy.map((section, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={section.heading} className="relative">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="focus-ring group flex w-full items-center justify-between gap-4 px-4 py-4 text-start transition-colors hover:bg-ink-50/70 dark:hover:bg-navy-850/70 sm:px-5"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`num relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                          isOpen
                            ? "scale-110 border-accent-blue bg-accent-blue text-white shadow-[0_0_0_4px_rgba(56,189,248,0.18)] dark:border-accent-cyan dark:bg-accent-cyan dark:text-navy-950"
                            : "border-ink-200 bg-white text-ink-500 group-hover:border-accent-blue/60 dark:border-navy-border dark:bg-navy-950 dark:text-ink-300"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-sm font-medium transition-colors sm:text-base ${
                          isOpen ? "text-accent-blue dark:text-accent-cyan" : "text-ink-900 dark:text-white"
                        }`}
                      >
                        {section.heading}
                      </span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-ink-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className="acc-panel" data-open={isOpen} aria-hidden={!isOpen}>
                    <div>
                      <div
                        className={`px-4 pb-5 transition-all duration-500 ltr:sm:pl-[4.25rem] rtl:sm:pr-[4.25rem] sm:px-5 ${
                          isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                        }`}
                      >
                        {section.body.map((para, j) => (
                          <p key={j} className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
              className="group relative overflow-hidden rounded-xl border border-ink-100 bg-ink-50/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:shadow-md dark:border-navy-border dark:bg-navy-900/40"
            >
              <span className="absolute inset-y-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent-blue to-accent-cyan transition-transform duration-500 group-hover:scale-y-100 ltr:left-0 rtl:right-0" />
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
