type Props = {
  index?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ index, title, subtitle, align = "left" }: Props) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {index && (
        <span className="num mb-3 block text-sm text-accent-blue dark:text-accent-cyan">{index}</span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">{subtitle}</p>
      )}
    </div>
  );
}
