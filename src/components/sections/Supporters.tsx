import type { CSSProperties } from "react";
import { figma } from "@/lib/figma-tokens";

export function Supporters() {
  const s = figma.space.supporters;
  const logos = Array.from({ length: 5 }, (_, i) => `Supporter-logo-${i}`);

  const sectionStyle = {
    ["--supporters-width" as string]: `${s.width}px`,
    ["--supporters-pt" as string]: `${s.paddingTop}px`,
    ["--supporters-pr" as string]: `${s.paddingRight}px`,
    ["--supporters-pb" as string]: `${s.paddingBottom}px`,
    ["--supporters-pl" as string]: `${s.paddingLeft}px`,
    ["--supporters-gap" as string]: `${s.gap}px`,
    ["--supporters-logos-width" as string]: `${s.logosWidth}px`,
    ["--supporters-logos-gap" as string]: `${s.logosGap}px`,
    ["--supporters-title-size" as string]: `${s.title.fontSize}px`,
    ["--supporters-title-weight" as string]: String(s.title.fontWeight),
    ["--supporters-title-line" as string]: `${s.title.lineHeight}px`,
    ["--supporters-title-tracking" as string]: s.title.letterSpacing,
    ["--supporters-title-color" as string]: s.title.color,
    ["--supporters-logo-size" as string]: `${s.logo.fontSize}px`,
    ["--supporters-logo-weight" as string]: String(s.logo.fontWeight),
    ["--supporters-logo-line" as string]: `${s.logo.lineHeight}px`,
    ["--supporters-logo-tracking" as string]: s.logo.letterSpacing,
    ["--supporters-logo-color" as string]: s.logo.color,
  } as CSSProperties;

  return (
    <section
      className="supporters-section"
      aria-labelledby="supporters-heading"
      style={sectionStyle}
    >
      <h2 id="supporters-heading" className="supporters-title">
        Our Supporters
      </h2>

      <ul className="supporters-logos-row">
        {logos.map((id) => (
          <li key={id} className="supporters-logo-item">
            Supporter-logo
          </li>
        ))}
      </ul>
    </section>
  );
}
