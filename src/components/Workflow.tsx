"use client";

import { workflowSteps as workflowStepsEn } from "@/lib/data";
import { workflowStepsAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";
import SectionHeader from "./SectionHeader";

export default function Workflow() {
  const { lang } = useLanguage();
  const workflowSteps = lang === "ar" ? workflowStepsAr : workflowStepsEn;
  return (
    <section className="border-y border-ink-100 bg-ink-50/50 py-20 dark:border-navy-border dark:bg-navy-900/40 sm:py-28">
      <div className="container-x">
        <SectionHeader title={lang === "ar" ? "منهجي في التعامل مع البيانات" : "How I Approach Data"} align="center" />

        {/* Mobile: vertical timeline */}
        <ol className="flex flex-col gap-0 sm:hidden">
          {workflowSteps.map((s, i) => (
            <li key={s.step} className="relative flex gap-4 pb-8 last:pb-0">
              {i < workflowSteps.length - 1 && (
                <span className="absolute left-[15px] top-8 h-full w-px bg-ink-200 dark:bg-navy-700" aria-hidden="true" />
              )}
              <span className="num relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-white text-xs font-semibold text-ink-700 dark:border-navy-border dark:bg-navy-850 dark:text-ink-200">
                {s.step}
              </span>
              <span className="pt-1 text-sm font-medium text-ink-900 dark:text-white">{s.title}</span>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal workflow */}
        <div className="hidden sm:grid sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
          {workflowSteps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-xl border border-ink-100 bg-white px-4 py-5 dark:border-navy-border dark:bg-navy-850"
            >
              <span className="num text-xs text-accent-blue dark:text-accent-cyan">{s.step}</span>
              <p className="mt-2 text-sm font-medium leading-snug text-ink-900 dark:text-white">
                {s.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
