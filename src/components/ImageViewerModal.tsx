"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";
import { Project } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

const strings = {
  en: { screenshot: "Dashboard screenshot", zoomOut: "Zoom out", zoomIn: "Zoom in", close: "Close" },
  ar: { screenshot: "لقطة شاشة للوحة البيانات", zoomOut: "تصغير", zoomIn: "تكبير", close: "إغلاق" }
};

export default function ImageViewerModal({
  project,
  onClose
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [zoomed, setZoomed] = useState(false);
  const { lang } = useLanguage();
  const s = strings[lang];

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  useEffect(() => {
    setZoomed(false);
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} dashboard, full view`}
      className="animate-scale-in fixed inset-0 z-[100] flex flex-col bg-navy-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-sm font-medium text-white">{project.title}</p>
          <p className="text-xs text-ink-300">{s.screenshot}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? s.zoomOut : s.zoomIn}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
          >
            {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
          </button>
          <button
            onClick={onClose}
            aria-label={s.close}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div
        className="relative flex-1 overflow-auto px-4 pb-6 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative mx-auto h-full w-full transition-transform duration-300 ${zoomed ? "scale-150" : "scale-100"}`}>
          <Image
            src={project.image}
            alt={`${project.title} full dashboard`}
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
