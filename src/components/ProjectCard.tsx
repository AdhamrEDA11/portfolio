"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Maximize2 } from "lucide-react";
import { Project } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import CountUp from "./CountUp";

const strings = {
  en: { viewFull: "View Full Dashboard", tools: "Tools", viewCaseStudy: "View Case Study", viewGithub: "View GitHub", linkSoon: "Link coming soon", scale: "Data scale" },
  ar: { viewFull: "عرض اللوحة كاملة", tools: "الأدوات", viewCaseStudy: "عرض دراسة الحالة", viewGithub: "عرض GitHub", linkSoon: "الرابط قريبًا", scale: "حجم البيانات" }
};

const MAX_TILT = 6;

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

  const cardRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLButtonElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const [revealed, setRevealed] = useState(false);
  const [tilting, setTilting] = useState(false);
  const canTilt = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    canTilt.current = fine && !calm;
    if (calm) {
      setRevealed(true);
      return;
    }
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const onCardMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!canTilt.current || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--cx", `${e.clientX - r.left}px`);
    cardRef.current.style.setProperty("--cy", `${e.clientY - r.top}px`);
  };

  const onStageMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!canTilt.current || !stageRef.current || !tiltRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const t = tiltRef.current;
      if (!t) return;
      t.style.transition = "transform 0.08s linear";
      t.style.transform = `perspective(1100px) rotateY(${(px - 0.5) * MAX_TILT * 2}deg) rotateX(${(0.5 - py) * MAX_TILT * 2}deg) scale3d(1.025,1.025,1.025)`;
      t.style.setProperty("--mx", `${px * 100}%`);
      t.style.setProperty("--my", `${py * 100}%`);
    });
    setTilting(true);
  };

  const onStageLeave = () => {
    cancelAnimationFrame(raf.current);
    const t = tiltRef.current;
    if (t) {
      t.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      t.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
    setTilting(false);
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={onCardMove}
      className="card-live group relative grid gap-6 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent-blue/40 hover:shadow-xl dark:border-navy-border dark:bg-navy-850 dark:shadow-card-dark lg:grid-cols-2 lg:gap-0"
    >
      <div className="card-spotlight absolute inset-0 z-0" aria-hidden="true" />

      <button
        ref={stageRef}
        onClick={() => onOpenImage(project)}
        onPointerMove={onStageMove}
        onPointerLeave={onStageLeave}
        aria-label={`View full ${project.title} dashboard`}
        className={`focus-ring relative z-10 block aspect-[16/10] w-full overflow-hidden bg-navy-950 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <div
          ref={tiltRef}
          className={`relative h-full w-full will-change-transform ${tilting ? "tilt-active" : ""} ${
            revealed ? "stage-in" : "stage-hidden"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} dashboard screenshot`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
          <span className="tilt-glare absolute inset-0" aria-hidden="true" />
          <span className="stage-scan-line" aria-hidden="true" />
        </div>
        <span className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1.5 text-[11px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <Maximize2 size={12} /> {s.viewFull}
        </span>
      </button>

      <div className={`relative z-10 flex flex-col justify-center p-6 sm:p-8 ${reversed ? "lg:order-1" : ""}`}>
        <span className="text-xs font-medium text-accent-blue dark:text-accent-cyan">{project.type}</span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={s.tools}>
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="num rounded-full border border-ink-100 bg-ink-50/70 px-3 py-1 text-xs text-ink-700 transition-colors duration-200 hover:border-accent-blue/50 hover:bg-accent-blue/10 hover:text-accent-blue dark:border-navy-border dark:bg-navy-900/60 dark:text-ink-200 dark:hover:border-accent-cyan/50 dark:hover:text-accent-cyan"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-ink-100 bg-ink-50/60 transition-colors duration-300 group-hover:border-accent-blue/30 dark:border-navy-border dark:bg-navy-900/60">
          <div className="px-4 py-3">
            <span className="text-[11px] text-ink-400">{project.keyResultLabel}</span>
            <div className="num text-2xl font-semibold text-ink-900 dark:text-white">
              <CountUp value={project.keyResultValue} />
            </div>
          </div>
          <div className="border-ink-100 px-4 py-3 ltr:border-l rtl:border-r dark:border-navy-border">
            <span className="text-[11px] text-ink-400">{s.scale}</span>
            <div className="num mt-1 text-sm font-medium leading-snug text-ink-700 dark:text-ink-200">
              {project.datasetScale}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring group/cta inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-accent-blue dark:bg-white dark:text-navy-950 dark:hover:bg-accent-cyan"
          >
            {s.viewCaseStudy}
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
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
