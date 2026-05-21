import {
  panelSparklesCollage,
  panelSparklesSingle,
  type PanelSparkle,
} from "@/lib/showcase-panel-sparkles";
import { figma } from "@/lib/figma-tokens";

type PanelVariant = "single" | "collage";

function pentagonPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 5; i++) {
    const a = ((i * 72 - 90) * Math.PI) / 180;
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return pts.join(" ");
}

function SparkleShape({ x, y, size, opacity = 0.7 }: PanelSparkle) {
  const r = size / 2;
  return (
    <polygon
      points={pentagonPoints(x, y, r)}
      fill="#ECEDEE"
      opacity={opacity}
    />
  );
}

/** Vector panel sparkles (distinct from bowl raster sparkles). */
export function ShowcasePanelSparkles({ variant }: { variant: PanelVariant }) {
  const box = figma.featuresShowcase.panelSparkles[variant];
  const sparkles = variant === "single" ? panelSparklesSingle : panelSparklesCollage;

  return (
    <svg
      className="features-showcase-panel-sparkles"
      viewBox={`0 0 ${box.width} ${box.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
      }}
    >
      {sparkles.map((s, i) => (
        <SparkleShape key={i} {...s} />
      ))}
    </svg>
  );
}
