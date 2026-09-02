"use client";

import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { certificationsAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const certs = certifications.map((c, i) => ({ ...c, ...(isAr ? certificationsAr[i] : {}) }));
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader title={isAr ? "الشهادات" : "Certifications"} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-blue/40 hover:shadow-xl dark:border-navy-border dark:bg-navy-850 dark:shadow-card-dark"
            >
              {/* Certificate image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-50 dark:bg-navy-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Badge icon, always visible top-left */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-accent-amber shadow-sm backdrop-blur-sm">
                  <Award size={16} />
                </div>

                {/* Hover overlay with full details */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/70 to-black/10 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="font-display text-base font-semibold leading-snug text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{cert.issuer}</p>
                    <p className="num mt-1 text-xs text-white/60">{cert.date}</p>

                    {"extra" in cert && cert.extra && (
                      <p className="num mt-2 text-sm font-medium text-accent-green">{cert.extra}</p>
                    )}
                    {"topics" in cert && cert.topics && (
                      <p className="mt-2 text-xs text-white/70">{cert.topics.join(" · ")}</p>
                    )}
                    {"credentialId" in cert && cert.credentialId && (
                      <p className="num mt-2 text-xs text-white/50">
                        {isAr ? `المعرف: ${cert.credentialId}` : `ID: ${cert.credentialId}`}
                      </p>
                    )}

                    {"verifyUrl" in cert && cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan underline underline-offset-4"
                      >
                        {isAr ? "التحقق من الشهادة" : "Verify Credential"}
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Compact title bar, always visible, fades out on hover as the overlay takes over */}
              <div className="p-5 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-display text-base font-semibold leading-snug text-ink-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
