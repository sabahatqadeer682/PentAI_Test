import Image from "next/image";
import { testimonials } from "@/lib/data";
import { figma } from "@/lib/figma-tokens";

const { testimonials: t } = figma;

function TestimonialCard({
  name,
  avatar,
  quote,
  className,
  style,
}: {
  name: string;
  avatar: string;
  quote: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <article
      className={`testimonial-card shadow-card absolute flex flex-col border border-bg-active bg-bg ${className ?? ""}`}
      style={{
        gap: t.cardContentGap,
        padding: t.cardPadding,
        borderRadius: t.cardRadius,
        ...style,
      }}
    >
      <div
        className="flex items-center"
        style={{ gap: t.cardHeaderGap }}
      >
        <div
          className="relative shrink-0 overflow-hidden rounded-full"
          style={{ width: t.avatarSize, height: t.avatarSize }}
        >
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <h3
          className="testimonial-card-name text-text-contrast"
          style={{
            fontSize: t.cardNameType.fontSize,
            lineHeight: `${t.cardNameType.lineHeight}px`,
          }}
        >
          {name}
        </h3>
      </div>
      <p
        className="testimonial-card-quote text-text-secondary"
        style={{
          fontSize: t.cardQuoteType.fontSize,
          lineHeight: `${t.cardQuoteType.lineHeight}px`,
        }}
      >
        {quote}
      </p>
    </article>
  );
}

export function Testimonials() {
  return (
    <section
      className="testimonials-section flex w-full justify-center bg-bg-subtle"
      style={{
        paddingTop: t.paddingTop,
        paddingBottom: t.paddingBottom,
        paddingLeft: t.pageMarginX,
        paddingRight: t.pageMarginX,
      }}
    >
      <div
        className="flex w-full max-w-[1280px] flex-col"
        style={{ gap: figma.space.gap36 }}
      >
        <h2 className="type-5xl-semibold text-center text-text-contrast">
          Tons of others love using PentAi.
        </h2>

        <div className="testimonials-viewport hidden lg:block">
          <div className="testimonials-grid-inner">
            {testimonials.map((item, i) => {
              const pos = t.cards[i];
              if (!pos) return null;
              return (
                <TestimonialCard
                  key={item.name}
                  {...item}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: t.cardWidth,
                  }}
                />
              );
            })}
          </div>

          <div className="testimonials-fog-stack" aria-hidden>
            <div className="testimonials-fog testimonials-fog-bottom" />
            <div className="testimonials-fog testimonials-fog-left" />
            <div className="testimonials-fog testimonials-fog-right" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
              className="!relative"
              style={{ width: "100%" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
