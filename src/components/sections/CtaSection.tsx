import { Button } from "@/components/ui/Button";
import { CtaCurves } from "@/components/sections/CtaCurves";
import { figma } from "@/lib/figma-tokens";

const { cta } = figma;

export function CtaSection() {
  return (
    <section
      className="cta-section flex w-full justify-center"
      style={{
        paddingTop: cta.sectionPaddingTop,
        paddingBottom: cta.sectionPaddingBottom,
        ["--cta-page-margin-x" as string]: `${cta.pageMarginX}px`,
        ["--cta-curve-width" as string]: `${cta.curve.width}px`,
        ["--cta-curve-height" as string]: `${cta.curve.height}px`,
        ["--cta-curve-margin-x" as string]: `${cta.curve.marginX}px`,
        ["--cta-curve-height-mobile" as string]: `${cta.curveMobile.height}px`,
        ["--cta-curve-margin-x-mobile" as string]: `${cta.curveMobile.marginX}px`,
      }}
    >
      <div
        className="cta-card w-full max-w-[1280px] overflow-hidden rounded-3xl border border-line bg-bg"
        style={
          {
            "--cta-curve-stroke": cta.curve.stroke,
            "--cta-card-shadow": cta.boxShadow,
          } as React.CSSProperties
        }
      >
        <div className="cta-curves-layer" aria-hidden>
          <CtaCurves />
        </div>

        <div
          className="cta-content"
          style={{
            ["--cta-heading-size" as string]: `${cta.headingType.fontSize}px`,
            ["--cta-heading-lh" as string]: `${cta.headingType.lineHeight}px`,
            ["--cta-body-size" as string]: `${cta.bodyType.fontSize}px`,
            ["--cta-body-lh" as string]: `${cta.bodyType.lineHeight}px`,
            ["--cta-body-max" as string]: `${cta.bodyMaxWidth}px`,
          }}
        >
          <h2 className="cta-heading text-gradient-heading">
            Ready to get started?
          </h2>
          <p className="cta-body text-text-contrast">
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
            netus sollicitudin. In enim tortor sed libero velit lectus. Egestas
            facilisi neque a arcu vitae dignissim. Sit lobortis orci risus
            volutpat eu habitasse.
          </p>
          <Button size="sm">Book a demo</Button>
        </div>
      </div>
    </section>
  );
}
