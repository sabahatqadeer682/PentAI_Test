import { figma } from "@/lib/figma-tokens";

const RINGS = [
  { rx: 510, ry: 312 },
  { rx: 402.275, ry: 246.405 },
  { rx: 293.555, ry: 179.81 },
  { rx: 217.445, ry: 133.19 },
  { rx: 120.685, ry: 73.92 },
  { rx: 65.235, ry: 39.955 },
] as const;

type CtaCurvesProps = {
  width?: number;
  height?: number;
};

export function CtaCurves({
  width = figma.cta.curve.width,
  height = figma.cta.curve.height,
}: CtaCurvesProps = {}) {
  const cx = width / 2;
  const cy = height;

  return (
    <svg
      className="cta-curves-svg"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
    >
      {RINGS.map((ring, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx={ring.rx}
          ry={ring.ry}
          fill="none"
          stroke={figma.cta.curve.stroke}
          strokeWidth={1}
        />
      ))}
    </svg>
  );
}
