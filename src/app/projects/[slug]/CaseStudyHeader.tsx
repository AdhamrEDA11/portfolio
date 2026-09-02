"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github } from "lucide-react";
import { Project } from "@/lib/data";
import { projectsAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";

const strings = {
  en: { back: "Back to Projects", dataset: "Dataset", viewGithub: "View GitHub", linkSoon: "Link coming soon" },
  ar: { back: "العودة للمشاريع", dataset: "حجم البيانات", viewGithub: "عرض GitHub", linkSoon: "الرابط قريبًا" }
};

export default function CaseStudyHeader({ project, index }: { project: Project; index: number }) {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const s = strings[lang];
  const p = isAr ? { ...project, ...projectsAr[index] } : project;

  return (
    <div className="container-x">
      <Link
        href="/#projects"
        className="focus-ring inline-flex items-center gap-1.5 text-sm text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
      >
        <ArrowLeft size={15} /> {s.back}
      </Link>

      <div className="mt-6 max-w-3xl">
        <span className="text-xs font-medium uppercase tracking-wide text-accent-blue dark:text-accent-cyan">
          {p.type}
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
          {p.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">{p.objective}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tools.map((tool) => (
            <span
              key={tool}
              className="num rounded-full border border-ink-100 px-3 py-1 text-xs text-ink-700 dark:border-navy-border dark:text-ink-200"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="num mt-4 text-sm text-ink-400">
          {s.dataset}: {p.datasetScale}
        </p>

        {p.githubUrl ? (
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-white"
          >
            <Github size={15} /> {s.viewGithub}
          </a>
        ) : (
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-400">
            <Github size={15} /> {s.linkSoon}
          </p>
        )}
      </div>

      <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-ink-100 bg-ink-50 dark:border-navy-border dark:bg-navy-900">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
          <Image
            src={p.image}
            alt={`${p.title} dashboard`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
