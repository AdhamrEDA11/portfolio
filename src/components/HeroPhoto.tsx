export default function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md"
      style={{ perspective: "1200px" }}
    >
      {/* rotating dashed orbit ring, framing the piece on display */}
      <div className="pointer-events-none absolute inset-[-4%] rounded-full border-2 border-dashed border-accent-cyan/40 [animation:ring-spin_14s_linear_infinite]" />
      <div className="pointer-events-none absolute inset-[-9%] rounded-full border border-dotted border-accent-blue/25 [animation:ring-spin-reverse_20s_linear_infinite]" />

      {/* orbiting accent dots, riding along the outer ring */}
      <div className="pointer-events-none absolute inset-[-9%] [animation:ring-spin_20s_linear_infinite]">
        <span className="absolute -top-1.5 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-navy-800 shadow-md dark:bg-ink-100" />
      </div>
      <div className="pointer-events-none absolute inset-[-9%] [animation:ring-spin-reverse_20s_linear_infinite]">
        <span className="absolute bottom-2 left-2 h-3 w-3 rounded-full bg-ink-300 shadow-md dark:bg-navy-600" />
      </div>

      {/* soft ground shadow, like a pedestal underneath a showcased piece */}
      <div className="pointer-events-none absolute left-1/2 top-[90%] h-6 w-3/5 -translate-x-1/2 rounded-full bg-navy-950/0 blur-xl dark:bg-black/0" />

      <div className="relative z-10 h-full w-full" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 rounded-[63%_37%_54%_46%/45%_51%_49%_55%] bg-accent-blue" />

        <div
          className="absolute inset-[8%] overflow-hidden rounded-full shadow-2xl"
          style={{ boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.25)" }}
        >
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
