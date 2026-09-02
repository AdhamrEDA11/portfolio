"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, navLinks } from "@/lib/data";
import { navLinksAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";

const strings = {
  en: { tagline: "Turning data into decision-ready insights.", rights: "All rights reserved." },
  ar: { tagline: "تحويل البيانات إلى رؤى جاهزة لاتخاذ القرار.", rights: "جميع الحقوق محفوظة." }
};

export default function Footer() {
  const { lang } = useLanguage();
  const s = strings[lang];
  const links = lang === "ar" ? navLinksAr : navLinks;
  return (
    <footer className="border-t border-ink-100 py-12 dark:border-navy-border">
      <div className="container-x flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-base font-bold tracking-tight text-ink-900 dark:text-white">
            {profile.name.toUpperCase()}
          </p>
          <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
            {lang === "ar" ? "محلل بيانات" : profile.title}
          </p>
          <p className="mt-3 max-w-xs text-sm text-ink-500 dark:text-ink-400">{s.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-ink-400">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring hover:text-ink-900 dark:hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring hover:text-ink-900 dark:hover:text-white">
            <Github size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="focus-ring hover:text-ink-900 dark:hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="container-x mt-10 border-t border-ink-100 pt-6 dark:border-navy-border">
        <p className="text-xs text-ink-400">© 2026 {profile.name}. {s.rights}</p>
      </div>
    </footer>
  );
}
