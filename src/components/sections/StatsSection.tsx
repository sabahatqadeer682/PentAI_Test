import { images } from "@/lib/assets";
import { Section } from "@/components/layout/Section";
import { figma } from "@/lib/figma-tokens";

function StatCard() {
  const s = figma.stats;
  const u = s.union;

  return (
    <div className="stat-card flex flex-col" style={{ gap: s.cardGap }}>
      <div className="stat-card-inner flex items-center justify-center">
        <img
          src={images.statUnion}
          alt=""
          width={u.width}
          height={u.height}
          className="stat-card-union"
          aria-hidden
          decoding="async"
        />
        <div className="stat-card-glow" aria-hidden />
        <p className="stat-card-value m-0">
          <span className="type-8xl-bold text-gradient-primary">23</span>
          <span className="type-8xl-bold text-gradient-primary">%</span>
        </p>
      </div>
      <p className="stat-card-description m-0">
        Consequat netus <strong>consequat</strong> tortor vitae cursus nullam tincidunt urna.{" "}
        <strong>Tristique</strong> leo
      </p>
    </div>
  );
}

export function StatsSection() {
  const s = figma.stats;

  return (
    <Section
      width="full"
      pageMarginX={0}
      className="stats-section px-4 lg:px-0"
    >
      <div
        className="stats-section-inner mx-auto box-border flex w-full max-w-[1024px] flex-col items-center"
        style={{
          gap: s.rowGap,
          padding: `${s.sectionPaddingY}px 0`,
        }}
      >
        <h2 className="stats-section-heading type-5xl-semibold m-0 max-w-[768px] text-center text-gradient-primary">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <div
          className="stat-cards-row flex w-full max-w-[1024px] flex-col md:flex-row md:items-start md:justify-between md:gap-9"
          style={{ gap: s.rowGap }}
        >
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
      </div>
    </Section>
  );
}
