import Image from "next/image";
import { images } from "@/lib/assets";
import { figma } from "@/lib/figma-tokens";

const g = figma.space.angularGradient;

export function AngularGradient({ priority = false }: { priority?: boolean }) {
  return (
    <div className="angular-gradient-root" aria-hidden>
      <Image
        src={images.angularGradientFigma}
        alt=""
        width={g.width}
        height={g.height}
        className="angular-gradient-image"
        sizes="(max-width: 1023px) 100vw, 1440px"
        priority={priority}
      />
      {/* Blends hard bands in the angular PNG */}
      <div className="hero-angular-soften" aria-hidden />

      <div
        className="angular-gradient-frame"
        style={{
          left: g.left,
          top: g.top,
          width: g.width,
          height: g.height,
        }}
      >
        <div className="hero-blur-layer hero-blur-soft-mid" />
        <div className="hero-blur-layer hero-blur-soft-deep" />
        <div className="hero-blur-layer hero-blur-grey-spot" />
      </div>

      <div className="hero-vignette" />
      <div className="hero-blend-overlay" aria-hidden />
    </div>
  );
}
