import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { ShowcaseArcCurve } from "@/components/sections/ShowcaseArcCurve";
import { ShowcaseBottomDecor } from "@/components/sections/ShowcaseBottomDecor";
import { ShowcasePanelSparkles } from "@/components/sections/ShowcasePanelSparkles";
import { images } from "@/lib/assets";
import { checkItems } from "@/lib/data";
import { figma } from "@/lib/figma-tokens";

const s = figma.featuresShowcase;

function CheckList() {
  return (
    <div
      className="features-showcase-check-list flex w-full flex-col"
      style={{ gap: s.checkListGap }}
    >
      {checkItems.map((item, i) => (
        <div
          key={i}
          className="features-showcase-check-row flex items-start"
          style={{ gap: s.checkRowGap }}
        >
          <span className="shrink-0">
            <CheckCircleIcon
              size={s.checkIconSize}
              className="features-showcase-check-icon"
            />
          </span>
          <p className="features-showcase-check-text text-text-contrast">
            {item[0]}
            <br />
            {item[1]}
            <br />
            {item[2]}
          </p>
        </div>
      ))}
    </div>
  );
}

function FeatureImagePanel() {
  const img = s.singleImage;
  const scale = img.scale;
  const frameW = Math.round(img.width * scale);
  const frameH = Math.round(img.height * scale);
  const frameTop = s.panelHeight - img.panelBottomGap - frameH;

  return (
    <div
      className="features-showcase-panel features-showcase-panel--single relative w-full overflow-hidden bg-bg"
      style={{
        height: s.panelHeight,
        borderRadius: s.panelRadius,
      }}
    >
      <div
        className="pointer-events-none absolute rounded-full bg-[#505050]"
        style={{
          left: -68 * s.compactScale,
          top: -3 * s.compactScale,
          width: 446 * s.compactScale,
          height: 272 * s.compactScale,
          filter: "blur(300px)",
          opacity: 0.5,
        }}
        aria-hidden
      />
      <div
        className="features-showcase-single-image-wrap absolute"
        style={
          {
            ["--showcase-img-left" as string]: `${img.x}px`,
            ["--showcase-img-top" as string]: `${frameTop}px`,
            ["--showcase-img-width" as string]: `${frameW}px`,
            ["--showcase-img-height" as string]: `${frameH}px`,
          } as React.CSSProperties
        }
      >
        <Image
          src={images.featureSingle}
          alt="Financial dashboard preview"
          width={img.intrinsicWidth}
          height={img.intrinsicHeight}
          className="features-showcase-single-image"
          sizes="(max-width: 1023px) 100vw, 538px"
          priority
        />
      </div>
      <ShowcasePanelSparkles variant="single" />
    </div>
  );
}

function CollagePanel() {
  const k = s.compactScale;

  return (
    <div
      className="features-showcase-panel features-showcase-panel--collage relative w-full overflow-hidden bg-bg"
      style={{
        height: s.panelHeight,
        borderRadius: s.panelRadius,
      }}
    >
      <div className="features-showcase-collage-scene">
      <div
        className="pointer-events-none absolute rounded-full bg-[#707070]"
        style={{
          left: -68 * k,
          top: 0,
          width: 446 * k,
          height: 272 * k,
          filter: "blur(300px)",
          opacity: 0.5,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute rounded-full bg-[#505050]"
        style={{
          left: 392 * k,
          top: 370 * k,
          width: 446 * k,
          height: 272 * k,
          filter: "blur(300px)",
          opacity: 0.5,
        }}
        aria-hidden
      />
      <Image
        src={images.collage4}
        alt=""
        width={310}
        height={244}
        className="absolute object-cover"
        style={{
          left: 48 * k,
          top: 34 * k,
          width: 310 * k,
          height: 244.28 * k,
          borderRadius: 7.42 * k,
        }}
      />
      <Image
        src={images.collage3}
        alt=""
        width={300}
        height={240}
        className="absolute object-cover"
        style={{
          left: 392 * k,
          top: 86 * k,
          width: 300 * k,
          height: 240 * k,
          borderRadius: 7.22 * k,
        }}
      />
      <Image
        src={images.collage2}
        alt=""
        width={301}
        height={241}
        className="absolute object-cover"
        style={{
          left: 392 * k,
          top: 347 * k,
          width: 301.25 * k,
          height: 241 * k,
          borderRadius: 7.22 * k,
        }}
      />
      <Image
        src={images.collage1}
        alt=""
        width={310}
        height={248}
        className="absolute object-cover"
        style={{
          left: 48 * k,
          top: 298 * k,
          width: 310 * k,
          height: 248 * k,
          borderRadius: 8.75 * k,
        }}
      />
      </div>
      <ShowcasePanelSparkles variant="collage" />
    </div>
  );
}

function FeatureColumn({
  visual,
  title,
}: {
  visual: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div className="features-showcase-column flex w-full min-w-0 flex-1 flex-col gap-5 lg:gap-8">
      {visual}
      <div
        className="features-showcase-text-block flex w-full min-w-0 flex-col"
        style={{
          gap: s.textBlockGap,
          paddingBottom: s.textBlockPaddingBottom,
        }}
      >
        {title}
        <CheckList />
      </div>
    </div>
  );
}

export function FeaturesShowcase() {
  return (
    <section
      className="features-showcase-section relative mx-auto flex w-full flex-col items-center gap-7 overflow-hidden px-4 pt-8 pb-6 lg:gap-12 lg:px-0 lg:pt-12 lg:pb-6"
      style={{
        maxWidth: s.sectionWidth,
        paddingBottom: s.sectionPaddingBottom,
        ["--features-panel-height" as string]: `${s.panelHeight}px`,
        ["--features-heading-size" as string]: `${s.headingType.fontSize}px`,
        ["--features-heading-lh" as string]: `${s.headingType.lineHeight}px`,
        ["--features-check-size" as string]: `${s.checkType.fontSize}px`,
        ["--features-check-lh" as string]: `${s.checkType.lineHeight}px`,
        ["--features-text-block-gap" as string]: `${s.textBlockGap}px`,
        ["--features-check-list-gap" as string]: `${s.checkListGap}px`,
        ["--features-panel-bottom-gap" as string]: `${s.singleImage.panelBottomGap}px`,
      }}
    >
      <div
        className="features-showcase-stage relative w-full"
        style={{ maxWidth: s.contentWidth }}
      >
        <div className="features-showcase-grid relative z-10 grid w-full grid-cols-1 gap-10 pt-8 lg:grid-cols-2 lg:gap-8 lg:pt-16">
          <FeatureColumn
            visual={<FeatureImagePanel />}
            title={
              <h3 className="features-showcase-heading text-text-muted">
                Lorem Ipsum{" "}
                <span className="text-text-contrast">Dolar Sed</span>
                <br />
                congue
              </h3>
            }
          />
          <FeatureColumn
            visual={<CollagePanel />}
            title={
              <h3 className="features-showcase-heading">
                <span className="text-text-muted">Lorem Ipsum </span>
                <span className="text-text-contrast">Dolar Sed</span>
                <br />
                <span className="text-text-muted">congue</span>
              </h3>
            }
          />
        </div>
      </div>

      <div
        className="features-showcase-footer mx-auto w-full"
        style={{ maxWidth: s.sectionWidth }}
      >
        <ShowcaseArcCurve />
        <ShowcaseBottomDecor />
      </div>
    </section>
  );
}
