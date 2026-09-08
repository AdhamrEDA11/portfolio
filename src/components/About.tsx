"use client";

import { useLanguage } from "@/lib/language-context";

const flow = {
  en: ["Raw Data", "Cleaning", "Exploration", "SQL Analysis", "Data Modeling", "Dashboard", "Business Insights"],
  ar: ["بيانات خام", "تنظيف", "استكشاف", "تحليل SQL", "نمذجة بيانات", "لوحة بيانات", "رؤى عمل"]
};

const strings = {
  en: {
    heading: "About Me",
    p1: "Data Analyst with a Computer Science and Artificial Intelligence background, and graduate of the Digital Egypt Pioneers Initiative (DEPI) Data Analyst program.",
    p2: "I work across the analytics workflow — from data cleaning and exploratory analysis to SQL querying, KPI development, data modeling, DAX, and interactive dashboard design.",
    p3: "My focus is not only on producing charts, but on understanding the business question behind the data and translating analysis into clear, actionable insights.",
    p4: "Alongside data analytics, I have experience as a web developer, including practical exposure to Firebase/Firestore and working with structured real-world data."
  },
  ar: {
    heading: "نبذة عني",
    p1: "أنا محلل بيانات طموح بخلفية في علوم الحاسب والذكاء الاصطناعي، وأتابع حاليًا مسار محلل البيانات ضمن مبادرة رواد مصر الرقمية (DEPI).",
    p2: "أعمل عبر مسار التحليل بالكامل — من تنظيف البيانات والتحليل الاستكشافي، إلى استعلامات SQL، بناء مؤشرات الأداء، نمذجة البيانات، DAX، وتصميم لوحات بيانات تفاعلية.",
    p3: "تركيزي لا يقتصر على إنتاج الرسوم البيانية، بل على فهم سؤال العمل الكامن خلف البيانات وتحويل التحليل إلى رؤى واضحة وقابلة للتنفيذ.",
    p4: "إلى جانب تحليل البيانات، لدي خبرة كمطور ويب، بما في ذلك تجربة عملية مع Firebase/Firestore والعمل مع بيانات واقعية منظمة."
  }
};

export default function About() {
  const { lang } = useLanguage();
  const s = strings[lang];
  const steps = flow[lang];
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
              {s.heading}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600 dark:text-ink-300">
              <p>{s.p1}</p>
              <p>{s.p2}</p>
              <p>{s.p3}</p>
              <p>{s.p4}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-ink-100 bg-ink-50/50 p-6 dark:border-navy-border dark:bg-navy-850/60 sm:p-8">
              <ol className="relative flex flex-col gap-0">
                {steps.map((step, i) => (
                  <li key={step} className="relative flex items-center gap-4 pb-7 last:pb-0">
                    {i < steps.length - 1 && (
                      <span className="absolute left-[13px] top-7 h-full w-px bg-ink-200 dark:bg-navy-700" aria-hidden="true" />
                    )}
                    <span
                      className={`num relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                        i === steps.length - 1
                          ? "bg-accent-blue text-white"
                          : "border border-ink-200 bg-white text-ink-600 dark:border-navy-border dark:bg-navy-900 dark:text-ink-300"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-sm ${
                        i === steps.length - 1
                          ? "font-semibold text-ink-900 dark:text-white"
                          : "text-ink-600 dark:text-ink-300"
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
