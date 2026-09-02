"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import SectionHeader from "./SectionHeader";

const strings = {
  en: {
    title: "Let's Talk About Data",
    subtitle: "Have a data problem, analytics project, or opportunity? I'd be happy to connect.",
    connectLinkedin: "Connect on LinkedIn",
    chatWhatsapp: "Chat on WhatsApp",
    sendEmail: "Send Me an Email",
    sent: "Message sent — thanks!",
    getBack: "I'll get back to you soon.",
    sendAnother: "Send another message",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sending: "Sending...",
    send: "Send Message"
  },
  ar: {
    title: "يلا نتكلم عن البيانات",
    subtitle: "عندك مشكلة بيانات، مشروع تحليل، أو فرصة عمل؟ يسعدني نتواصل.",
    connectLinkedin: "تواصل عبر LinkedIn",
    chatWhatsapp: "تواصل عبر WhatsApp",
    sendEmail: "أرسل لي إيميل",
    sent: "تم إرسال رسالتك — شكرًا!",
    getBack: "هرد عليك في أقرب وقت.",
    sendAnother: "إرسال رسالة أخرى",
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    sending: "جاري الإرسال...",
    send: "إرسال الرسالة"
  }
};

export default function Contact() {
  const [state, handleSubmit, resetForm] = useForm(profile.formspreeFormId);
  const { lang } = useLanguage();
  const s = strings[lang];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader title={s.title} subtitle={s.subtitle} />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 shadow-card transition-colors hover:border-accent-blue dark:border-navy-border dark:bg-navy-850 dark:text-white dark:shadow-card-dark"
            >
              <Mail size={17} className="text-accent-blue" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 shadow-card transition-colors hover:border-accent-blue dark:border-navy-border dark:bg-navy-850 dark:text-white dark:shadow-card-dark"
            >
              <Linkedin size={17} className="text-accent-blue" />
              {s.connectLinkedin}
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 shadow-card transition-colors hover:border-[#25D366] dark:border-navy-border dark:bg-navy-850 dark:text-white dark:shadow-card-dark"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              {s.chatWhatsapp}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring mt-2 inline-flex items-center justify-center rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-blue/90"
            >
              {s.sendEmail}
            </a>
          </div>

          {state.succeeded ? (
            <div className="flex flex-col items-start justify-center gap-3 rounded-xl border border-ink-100 bg-white p-8 text-sm dark:border-navy-border dark:bg-navy-850">
              <p className="font-medium text-ink-900 dark:text-white">{s.sent}</p>
              <p className="text-ink-600 dark:text-ink-300">{s.getBack}</p>
              <button
                type="button"
                onClick={resetForm}
                className="focus-ring mt-1 text-xs font-medium text-accent-blue underline underline-offset-4"
              >
                {s.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label={s.name} id="name" />
              <div>
                <Field label={s.email} id="email" type="email" />
                <ValidationError prefix={s.email} field="email" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>
              <div className="sm:col-span-2">
                <Field label={s.subject} id="subject" required={false} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-600 dark:text-ink-300">
                  {s.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="focus-ring w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 dark:border-navy-border dark:bg-navy-850 dark:text-white"
                />
                <ValidationError prefix={s.message} field="message" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="focus-ring w-full rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-blue/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {state.submitting ? s.sending : s.send}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required = true
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-ink-600 dark:text-ink-300">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="focus-ring w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 dark:border-navy-border dark:bg-navy-850 dark:text-white"
      />
    </div>
  );
}
