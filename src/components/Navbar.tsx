"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Languages } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { navLinksAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";
import ThemeToggle from "./ThemeToggle";

const strings = {
  en: { resume: "Resume", downloadResume: "Download Resume", viewProjects: "View Projects", openMenu: "Open menu", closeMenu: "Close menu" },
  ar: { resume: "السيرة الذاتية", downloadResume: "تحميل السيرة الذاتية", viewProjects: "عرض المشاريع", openMenu: "فتح القائمة", closeMenu: "إغلاق القائمة" }
};

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const s = strings[lang];
  const links = lang === "ar" ? navLinksAr : navLinks;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace("/#", "")))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navLinks.find((l) => l.href.replace("/#", "") === entry.target.id);
            if (match) setActive(match.href);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100/70 bg-white/80 backdrop-blur-md dark:border-navy-border/70 dark:bg-navy-950/80"
          : "bg-transparent"
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <Link href="/#home" className="focus-ring font-display text-[15px] font-bold tracking-tight text-ink-900 dark:text-white">
          {profile.name.toUpperCase()}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring relative rounded-md px-3 py-2 text-sm transition-colors ${
                active === navLinks[i].href
                  ? "text-ink-900 dark:text-white"
                  : "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
              }`}
            >
              {link.label}
              {active === navLinks[i].href && (
                <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-accent-blue" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="focus-ring flex h-9 items-center gap-1.5 rounded-lg border border-ink-200 px-3 text-xs font-medium text-ink-900 transition-colors hover:border-ink-900 dark:border-navy-border dark:text-ink-50 dark:hover:border-ink-50"
          >
            <Languages size={15} />
            {lang === "en" ? "العربية" : "English"}
          </button>
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download="Adham_Reda_CV.pdf"
            className="focus-ring rounded-lg border border-ink-200 px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900 dark:border-navy-border dark:text-ink-50 dark:hover:border-ink-50"
          >
            {s.resume}
          </a>
          <Link
            href="/#projects"
            className="focus-ring rounded-lg bg-accent-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-blue/90"
          >
            {s.viewProjects}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-ink-100 text-ink-900 dark:border-navy-border dark:text-white"
          >
            <Languages size={16} />
          </button>
          <ThemeToggle />
          <button
            aria-label={open ? s.closeMenu : s.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-ink-100 text-ink-900 dark:border-navy-border dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top overflow-hidden bg-white transition-[max-height] duration-300 ease-out dark:bg-navy-950 lg:hidden ${
          open ? "max-h-[calc(100vh-4rem)]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-lg px-3 py-3 text-base text-ink-900 hover:bg-ink-50 dark:text-ink-50 dark:hover:bg-navy-800"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={profile.resumeUrl}
              download="Adham_Reda_CV.pdf"
              className="focus-ring rounded-lg border border-ink-200 px-4 py-3 text-center text-sm font-medium text-ink-900 dark:border-navy-border dark:text-ink-50"
            >
              {s.downloadResume}
            </a>
            <Link
              href="/#projects"
              onClick={() => setOpen(false)}
              className="focus-ring rounded-lg bg-accent-blue px-4 py-3 text-center text-sm font-medium text-white"
            >
              {s.viewProjects}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
