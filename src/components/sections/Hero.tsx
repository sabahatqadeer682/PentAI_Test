import { Button } from "@/components/ui/Button";
import { figma } from "@/lib/figma-tokens";

const h = figma.space.hero;

export function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative z-10 flex w-full justify-center px-4 lg:px-[80px]"
      style={{
        paddingTop: h.paddingY.top,
        paddingBottom: h.paddingY.bottom,
      }}
    >
      <div
        className="hero-section-inner flex w-full max-w-[768px] flex-col items-center text-center"
        style={{ gap: h.stackGap }}
      >
        <div
          className="hero-copy-block flex w-full min-w-0 flex-col items-stretch"
          style={{ gap: h.copyGap }}
        >
          <h1
            className="hero-heading m-0 pb-0 type-6xl-bold leading-none text-gradient-primary mx-auto w-full max-w-[820px]"
          >
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="hero-subcopy m-0 type-2xl-regular text-text-contrast">
            Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices
            est vivamus mauris fames et. Sed lacus purus in tellus.
          </p>
        </div>
        <Button
          variant="white"
          size="md"
          className="hero-cta h-11 min-h-11 shrink-0 px-6"
        >
          Book a demo
        </Button>
      </div>
    </section>
  );
}
