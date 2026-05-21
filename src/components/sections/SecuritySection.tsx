import Image from "next/image";
import { images } from "@/lib/assets";
import { securityFeatures } from "@/lib/data";
import type { SecurityIconName } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { SecurityIcon } from "@/components/icons/SecurityIcons";
import { figma } from "@/lib/figma-tokens";

const s = figma.security;

function FeatureCardContent({
  icon,
  title,
  iconSize,
}: {
  icon: SecurityIconName;
  title: string;
  iconSize: number;
}) {
  return (
    <div className="security-card-inner" style={{ gap: s.cardGap }}>
      <SecurityIcon
        name={icon}
        className="relative z-10 shrink-0"
        style={{ width: iconSize, height: iconSize }}
      />
      <p className="security-card-label relative z-10">{title}</p>
    </div>
  );
}

function FeatureCardDesktop({
  icon,
  title,
  iconSize,
  style,
}: {
  icon: SecurityIconName;
  title: string;
  iconSize: number;
  style: { left: number; top: number; width: number; height: number };
}) {
  return (
    <div
      className="security-card absolute"
      style={{
        left: style.left,
        top: style.top,
        width: style.width,
        height: style.height,
      }}
    >
      <FeatureCardContent icon={icon} title={title} iconSize={iconSize} />
    </div>
  );
}

function FeatureCardMobile({
  icon,
  title,
  iconSize,
}: {
  icon: SecurityIconName;
  title: string;
  iconSize: number;
}) {
  return (
    <div className="security-card security-card--mobile">
      <FeatureCardContent icon={icon} title={title} iconSize={iconSize} />
    </div>
  );
}

export function SecuritySection() {
  return (
    <Section
      width="full"
      padding="none"
      pageMarginX={0}
      className="security-section-wrap"
    >
      <div className="security-section mx-auto w-full max-w-[1024px]">
        <div className="security-row relative z-[1] flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-[7px]">
          <div
            className="security-copy flex w-full shrink-0 flex-col items-center gap-[30px] text-center lg:w-[380px] lg:items-start lg:text-left"
          >
            <h2 className="security-heading m-0 w-full max-w-[600px] lg:max-w-[600px]">
              Lorem Ipsum
              <br />
              Dollar
            </h2>
            <p className="security-subtitle m-0 w-full max-w-[263px]">
              {`Consequat netus consequat tortor \nvitae cursus nullam tincidunt \nurna. Tristique leo consequat`}
            </p>
            <div className="security-lock-wrap relative mx-auto shrink-0 lg:mx-0">
              <div className="security-lock-glow" aria-hidden />
              <div className="security-lock relative h-full w-full">
                <Image
                  src={images.lockFront}
                  alt="Security lock illustration"
                  fill
                  className="object-contain"
                  style={{ transform: "scaleX(-1)" }}
                  sizes="(max-width: 1023px) 72vw, 286px"
                />
              </div>
            </div>
          </div>

          {/* Mobile — readable 2-column card grid */}
          <div className="security-cards-mobile w-full lg:hidden">
            {securityFeatures.map((feature, index) => (
              <FeatureCardMobile key={index} {...feature} />
            ))}
          </div>

          <div
            className="security-grid relative hidden shrink-0 lg:block"
            style={{
              width: s.gridWidth,
              height: s.gridHeight,
            }}
          >
            {securityFeatures.map((feature, index) => (
              <FeatureCardDesktop key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
