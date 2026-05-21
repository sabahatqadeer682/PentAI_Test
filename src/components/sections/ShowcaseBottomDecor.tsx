import Image from "next/image";
import { images } from "@/lib/assets";
import { figma } from "@/lib/figma-tokens";

const s = figma.featuresShowcase;
const g = s.glow;
const bowl = s.bowlGlow;
const sp = s.sparkle;

/** Soft edges come from the asset + blur, not CSS linear overlays. */
export function ShowcaseBottomDecor() {
  return (
    <div
      className="features-showcase-decor"
      style={
        {
          height: s.decorHeight,
          marginTop: -s.decorOverlap,
          "--showcase-bg": s.bowlBg,
        } as import("react").CSSProperties
      }
      aria-hidden
    >
      <div className="features-showcase-bowl-scene">
        <div
          className="features-showcase-bowl-glow"
          style={{ top: bowl.offsetTop }}
        >
          <div className="features-showcase-bowl-glow-base" aria-hidden />
          <Image
            src={images.supportersExtraGlow}
            alt=""
            width={bowl.assetWidth}
            height={bowl.assetHeight}
            className="features-showcase-bowl-glow-img"
            style={{ width: bowl.assetWidth }}
          />
          <div
            className="features-showcase-bowl-glow-warm"
            style={{
              width: g.width,
              height: g.height,
              opacity: g.opacity,
            }}
          />
        </div>

        <div className="features-showcase-bowl-edge-smudge" aria-hidden />

        <div
          className="features-showcase-sparkle-stack"
          style={{
            width: sp.width,
            height: sp.height + sp.paddingTop,
            paddingTop: sp.paddingTop,
          }}
        >
          <Image
            src={images.sparkleGroup2}
            alt=""
            width={700}
            height={299}
            className="features-showcase-sparkles"
            style={{
              width: sp.width,
              height: sp.height,
              opacity: sp.opacity,
            }}
          />
        </div>
      </div>
    </div>
  );
}
