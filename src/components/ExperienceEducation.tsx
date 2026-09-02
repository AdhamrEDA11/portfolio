"use client";

import { experience, education } from "@/lib/data";
import { experienceAr, educationAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";
import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function ExperienceEducation() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const jobs = isAr ? experienceAr : experience;
  const edu = isAr ? educationAr : education;
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-x grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div>
          <SectionHeader title={isAr ? "الخبرات" : "Experience"} />
          <div className="flex flex-col gap-8">
            {jobs.map((job) => (
              <div
                key={job.role}
                className="group relative border-l-2 border-accent-blue/30 pl-6 transition-all duration-300 hover:border-accent-blue hover:pl-8"
              >
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent-blue transition-transform duration-300 group-hover:scale-150" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="num text-xs text-ink-400">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
                  {job.org} · {job.location}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title={isAr ? "التعليم" : "Education"} />
          <div className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40 hover:shadow-xl dark:border-navy-border dark:bg-navy-850 dark:shadow-card-dark">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <GraduationCap size={18} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">
              {edu.school}, {edu.location}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-ink-50 px-3 py-1 text-ink-700 transition-colors duration-300 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan dark:bg-navy-900 dark:text-ink-200">
                {edu.status}
              </span>
              <span className="num rounded-full bg-ink-50 px-3 py-1 text-ink-700 transition-colors duration-300 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan dark:bg-navy-900 dark:text-ink-200">
                {isAr ? `المعدل التراكمي ${education.cgpa}` : `CGPA ${education.cgpa}`}
              </span>
              <span className="rounded-full bg-ink-50 px-3 py-1 text-ink-700 transition-colors duration-300 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan dark:bg-navy-900 dark:text-ink-200">
                {edu.grade}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
