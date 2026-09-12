"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

type GalleryItem = { src: string; caption: string };

const strings = {
  en: { gallery: "Dashboard Gallery", close: "Close", prev: "Previous", next: "Next" },
  ar: { gallery: "معرض لوحة البيانات", close: "إغلاق", prev: "السابق", next: "التالي" }
};

export default function ProjectGallery({ items, title }: { items: GalleryItem[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const s = strings[lang];

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, items.length]);

  if (!items || items.length === 0) return null;

  return (
    <div className="mt-14">
      <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
        {s.gallery}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setOpenIndex(i)}
            aria-label={item.caption}
            className="focus-ring group relative block overflow-hidden rounded-xl border border-ink-100 bg-navy-950 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 hover:shadow-xl dark:border-navy-border dark:shadow-card-dark"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/0 to-navy-950/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ZoomIn size={15} />
              </span>
              <p className="absolute inset-x-0 bottom-0 px-3 py-2.5 text-left text-xs font-medium leading-snug text-white sm:text-[13px]">
                {item.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title}, ${items[openIndex].caption}`}
          className="animate-scale-in fixed inset-0 z-[100] flex flex-col bg-navy-950/95 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="text-xs text-ink-300">{items[openIndex].caption}</p>
            </div>
            <button
              onClick={() => setOpenIndex(null)}
              aria-label={s.close}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-between gap-2 px-2 pb-6 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length))}
              aria-label={s.prev}
              className="focus-ring hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white sm:flex"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="relative h-full w-full flex-1">
              <Image
                src={items[openIndex].src}
                alt={items[openIndex].caption}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % items.length))}
              aria-label={s.next}
              className="focus-ring hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white sm:flex"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-1.5 pb-5">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === openIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
