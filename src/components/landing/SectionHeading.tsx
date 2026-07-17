interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div>
      <span
        className={`inline-block text-[13px] font-bold tracking-[0.3em] border-b-2 pb-1.5 mb-4 ${
          dark
            ? "text-gold-soft border-gold-soft"
            : "text-henna border-gold-bright"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 font-[family-name:var(--font-frank)] ${
          dark ? "text-white" : "text-henna-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg font-light max-w-2xl leading-relaxed ${
            dark ? "text-white/80" : "text-henna/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
