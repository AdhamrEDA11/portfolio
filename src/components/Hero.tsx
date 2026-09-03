"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle, FolderKanban, Wrench, Award, Layers, Download } from "lucide-react";
import { profile, heroStats } from "@/lib/data";
import { heroStatsAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";
import HeroTypewriter from "./HeroTypewriter";
import RotatingTypewriter from "./RotatingTypewriter";
import HeroPhoto from "./HeroPhoto";

const statIcons = [FolderKanban, Wrench, Award, Layers];

const roleWords = {
  en: ["Data Analyst", "Data cleaning expert", "Building dashboards", "Generating insights"],
  ar: ["محلل بيانات", "خبير تنظيف بيانات", "بناء لوحات بيانات", "استخلاص الرؤى"]
};

const strings = {
  en: {
    hi: "Hi,",
    imPrefix: "I'm ",
    intro:
      "A Data Analyst with a Computer Science and Artificial Intelligence background, focused on transforming raw data into structured insights through Python, SQL, Excel, and Power BI.",
    exploreWork: "Explore My Work",
    viewGithub: "View GitHub",
    resume: "CV",
    title: profile.title
  },
  ar: {
    hi: "أهلاً،",
    imPrefix: "أنا ",
    intro:
      "محلل بيانات بخلفية في علوم الحاسب والذكاء الاصطناعي، أركّز على تحويل البيانات الخام إلى رؤى منظمة عبر Python وSQL وExcel وPower BI.",
    exploreWork: "استكشف أعمالي",
    viewGithub: "زيارة GitHub",
    resume: "السيرة الذاتية (CV)",
    title: "محلل بيانات"
  }
};

export default function Hero() {
  const { lang } = useLanguage();
  const s = strings[lang];
  const stats = lang === "ar" ? heroStatsAr : heroStats;
  const words = roleWords[lang];
  const [introRuns, setIntroRuns] = useState(0);
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="data-grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="animate-fade-up">
            <h1 className="font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-ink-900 dark:text-white sm:text-6xl">
              <HeroTypewriter
                key={lang}
                speed={90}
                startDelay={400}
                onComplete={() => setIntroRuns((n) => n + 1)}
                lines={[
                  [{ text: s.hi }],
                  [{ text: s.imPrefix }, { text: profile.name, className: "text-accent-blue" }]
                ]}
              />
              <br />
              <RotatingTypewriter key={`${lang}-${introRuns}`} words={words} active={introRuns > 0} />
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
              {s.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-blue/90"
              >
                {s.exploreWork}
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-ink-200 px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900 dark:border-navy-border dark:text-ink-50 dark:hover:border-ink-50"
              >
                {s.viewGithub}
              </a>
              <a
                href={profile.cvUrl}
                download="Adham_Reda_CV.pdf"
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-ink-200 px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900 dark:border-navy-border dark:text-ink-50 dark:hover:border-ink-50"
              >
                {s.resume}
                <Download size={16} />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-4 text-ink-400">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring transition-colors hover:text-ink-900 dark:hover:text-white">
                <Linkedin size={19} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring transition-colors hover:text-ink-900 dark:hover:text-white">
                <Github size={19} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="focus-ring transition-colors hover:text-ink-900 dark:hover:text-white">
                <Mail size={19} />
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="focus-ring transition-colors hover:text-[#25D366]">
                <MessageCircle size={19} />
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <HeroPhoto src="/images/Gemini_Generated_Image_e2abqe2abqe2abqe.png" alt={lang === "ar" ? "الصورة الشخصية" : "Profile Photo"} />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-100 bg-ink-100 dark:border-navy-border dark:bg-navy-border sm:mt-24 sm:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i] ?? Layers;
            const isNumeric = /^[\d,.]/.test(stat.value);
            return (
              <div key={stat.label} className="group bg-white px-5 py-6 transition-colors duration-300 hover:bg-accent-blue/5 dark:bg-navy-900 dark:hover:bg-accent-blue/10">
                <Icon size={18} className="text-accent-blue transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 dark:text-accent-cyan" strokeWidth={2.2} />
                <div
                  className={
                    isNumeric
                      ? "num mt-3 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl"
                      : "num mt-3 text-sm font-semibold leading-snug text-ink-900 dark:text-white sm:text-base"
                  }
                >
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs text-ink-600 dark:text-ink-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardComposition() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card dark:border-navy-border dark:bg-navy-850 dark:shadow-card-dark">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-ink-400">Revenue by Quarter</span>
          <span className="num text-xs text-accent-green">+18.4%</span>
        </div>
        <svg viewBox="0 0 300 110" className="mt-3 w-full">
          <polyline
            points="0,90 40,70 80,78 120,45 160,55 200,25 240,38 300,10"
            fill="none"
            stroke="currentColor"
            className="text-accent-blue"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="0,90 40,70 80,78 120,45 160,55 200,25 240,38 300,10 300,110 0,110"
            className="fill-accent-blue/10"
          />
        </svg>
        <div className="mt-2 flex justify-between text-[10px] text-ink-400">
          <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
        </div>
      </div>


      <div className="absolute -left-6 -bottom-8 w-44 rounded-xl border border-ink-100 bg-white p-4 shadow-card dark:border-navy-border dark:bg-navy-850 dark:shadow-card-dark sm:-left-10">
        <span className="text-[11px] text-ink-400">Avg. Ticket Price</span>
        <div className="num mt-1 text-lg font-semibold text-ink-900 dark:text-white">$33.93M</div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-navy-700">
          <div className="h-full w-2/3 rounded-full bg-accent-cyan" />
        </div>
      </div>

      <div className="absolute -right-4 -top-6 flex items-center gap-2 rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-card dark:border-navy-border dark:bg-navy-850 dark:shadow-card-dark sm:-right-8">
        <div className="h-8 w-8 rounded-full border-4 border-accent-blue/20 border-t-accent-blue" />
        <div>
          <div className="num text-sm font-semibold text-ink-900 dark:text-white">67%</div>
          <div className="text-[10px] text-ink-400">Profit Margin</div>
        </div>
      </div>
    </div>
  );
}
