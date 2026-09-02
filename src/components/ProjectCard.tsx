"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Maximize2 } from "lucide-react";
import { Project } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

const strings = {
  en: { viewFull: "View Full Dashboard", tools: "Tools", viewCaseStudy: "View Case Study", viewGithub: "View GitHub", linkSoon: "Link coming soon" },
  ar: { viewFull: "عرض اللوحة كاملة", tools: "الأدوات", viewCaseStudy: "عرض دراسة الحالة", viewGithub: "عرض GitHub", linkSoon: "الرابط قريبًا" }
};

export default function ProjectCard({
  project,
  reversed,
  onOpenImage
}: {
  project: Project;
  reversed?: boolean;
  onOpenImage: (project: Project) => void;
}) {
  const { lang } = useLanguage();
  const s = strings[lang];
  return (
    <article className="group grid gap-6 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 hover:shadow-xl dark:border-navy-border dark:bg-navy-850 dark:shadow-card-dark lg:grid-cols-2 lg:gap-0">
      <button
        onClick={() => onOpenImage(project)}
        aria-label={`View full ${project.title} dashboard`}
        className={`focus-ring relative block aspect-[16/10] w-full overflow-hidden bg-navy-950 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} dashboard screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1.5 text-[11px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <Maximize2 size={12} /> {s.viewFull}
        </span>
      </button>

      <div className={`flex flex-col justify-center p-6 sm:p-8 ${reversed ? "lg:order-1" : ""}`}>
        <span className="text-xs font-medium uppercase tracking-wide text-accent-blue dark:text-accent-cyan">
          {project.type}
        </span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {project.description}
        </p>

        <div className="mt-5">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-400">{s.tools}</span>
          <p className="num mt-1.5 text-sm text-ink-700 dark:text-ink-200">{project.tools.join(" · ")}</p>
        </div>

        <div className="mt-5 rounded-xl border border-ink-100 bg-ink-50/60 px-4 py-3 transition-colors duration-300 group-hover:border-accent-blue/30 group-hover:bg-accent-blue/5 dark:border-navy-border dark:bg-navy-900/60">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-400">
            {project.keyResultLabel}
          </span>
          <div className="num text-2xl font-semibold text-ink-900 dark:text-white">
            {project.keyResultValue}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 transition-colors hover:text-accent-blue dark:text-white dark:hover:text-accent-cyan"
          >
            {s.viewCaseStudy}
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 text-sm text-ink-600 dark:text-ink-300"
            >
              <Github size={15} /> {s.viewGithub}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-ink-400">
              <Github size={15} /> {s.linkSoon}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
