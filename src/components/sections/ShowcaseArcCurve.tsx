import { figma } from "@/lib/figma-tokens";

const ELLIPSE_PATH =
  "M720 492C918.743 492 1098.63 464.419 1228.79 419.855C1293.88 397.572 1346.48 371.061 1382.79 341.672C1419.11 312.276 1439 280.108 1439 246.5C1439 212.892 1419.11 180.724 1382.79 151.328C1346.48 121.939 1293.88 95.4279 1228.79 73.1445C1098.63 28.5812 918.743 1 720 1C521.257 1 341.372 28.5812 211.207 73.1445C146.12 95.4279 93.5187 121.939 57.21 151.328C20.8928 180.724 1 212.892 1 246.5C1 280.108 20.8928 312.276 57.21 341.672C93.5187 371.061 146.12 397.572 211.207 419.855C341.372 464.419 521.257 492 720 492Z";

const s = figma.featuresShowcase;

export function ShowcaseArcCurve() {
  return (
    <div
      className="features-showcase-arc-wrap"
      style={{ height: s.arcHeight }}
      aria-hidden
    >
      <svg
        className="features-showcase-arc-svg"
        viewBox="0 0 1440 493"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient
            id="showcase-arc-stroke-grad"
            x1="720"
            y1="493"
            x2="720"
            y2="369.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#A0A0A0" />
            <stop offset="100%" stopColor="#505050" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={ELLIPSE_PATH}
          fill={s.bowlBg}
          stroke="url(#showcase-arc-stroke-grad)"
          strokeWidth={s.arcStroke.width}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
