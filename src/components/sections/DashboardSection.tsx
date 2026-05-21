import Image from "next/image";
import { images } from "@/lib/assets";
import { figma } from "@/lib/figma-tokens";

function DashboardSeamGlow() {
  return (
    <div className="dashboard-seam-glow pointer-events-none absolute" aria-hidden>
      <div className="dashboard-seam-glow-blur" />
      <Image
        src={images.supportersExtraGlow}
        alt=""
        width={752}
        height={239}
        className="dashboard-seam-glow-image"
      />
    </div>
  );
}

export function DashboardSection() {
  const { dashboard: d, dashboardIntro: copy } = figma;

  return (
    <section
      className="dashboard-section relative z-10 flex w-full flex-col items-center overflow-visible px-4 md:px-8 lg:px-[80px]"
      style={{
        paddingTop: figma.space.sectionY,
        paddingBottom: figma.space.sectionY,
        gap: figma.space.gap36,
      }}
    >
      <div className="dashboard-section-top-blend" aria-hidden />

      <div
        className="relative z-[1] flex w-full max-w-[1024px] flex-col items-center"
        style={{ gap: figma.space.gap36 }}
      >
        <div
          className="relative z-[1] flex w-full max-w-[1024px] flex-col items-center text-center"
          style={{ gap: copy.gap }}
        >
          <h2 className="m-0 w-full max-w-[640px] pb-0 type-5xl-semibold leading-none text-gradient-primary">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="m-0 w-full max-w-[640px] type-lg-medium text-text-contrast">
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
          </p>
        </div>

        <div
          className="relative mx-auto w-full overflow-visible"
          style={{
            maxWidth: d.displayWidth,
            aspectRatio: `${d.displayWidth} / ${d.displayHeight}`,
          }}
        >
          <div className="dashboard-frame-br-glow" aria-hidden />
          <div className="dashboard-frame h-full w-full">
            <DashboardSeamGlow />
            <div className="dashboard-frame-inner relative z-[1] h-full w-full">
              <Image
                src={images.dashboard}
                alt="PentAi dashboard preview"
                width={d.width}
                height={d.height}
                className="dashboard-preview-image h-full w-full object-cover"
              />
            </div>
            <div className="dashboard-frame-br-stroke" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
