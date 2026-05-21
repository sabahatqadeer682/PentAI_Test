import Image from "next/image";
import { images } from "@/lib/assets";
import { figma } from "@/lib/figma-tokens";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className }: LogoProps) {
  if (variant === "footer") {
    const footerLogo = figma.logo.footer;

    return (
      <span
        className={cn("font-logo inline-block shrink-0 font-bold leading-none text-text-contrast", className)}
        style={{ fontSize: footerLogo.fontSize }}
        aria-label="PentAi"
      >
        PentAi.
      </span>
    );
  }

  const { logo } = figma;

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: logo.width, height: logo.height }}
      aria-label="PentAi"
    >
      <div
        className="absolute left-0 flex items-center"
        style={{ top: logo.textTop }}
      >
        <span
          className="font-logo font-bold leading-none text-white"
          style={{ fontSize: logo.fontSize }}
        >
          Pent
        </span>
        <span className="text-gradient-logo-a font-logo font-bold leading-none" style={{ fontSize: logo.fontSize }}>
          A
        </span>
      </div>

      <Image
        src={images.logoDot}
        alt=""
        width={22}
        height={22}
        className="absolute object-contain"
        style={{
          left: logo.dot.left,
          top: logo.dot.top,
          width: logo.dot.width,
          height: logo.dot.height,
        }}
        aria-hidden
      />

      <span
        className="absolute rounded-[1px]"
        style={{
          left: logo.bar.left,
          top: logo.bar.top,
          width: logo.bar.width,
          height: logo.bar.height,
          background:
            "linear-gradient(113deg, rgba(121, 56, 178, 1) 0%, rgba(48, 26, 58, 1) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
