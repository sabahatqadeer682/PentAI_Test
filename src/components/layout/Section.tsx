import { cn } from "@/lib/utils";
import { figma } from "@/lib/figma-tokens";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  width?: "full" | "content-md" | "content-lg";
  padding?: "default" | "none" | "64";
  /** Symmetric horizontal inset; default 80. */
  pageMarginX?: number;
  /** Left inset only (overrides left side of pageMarginX when set). */
  pageMarginLeft?: number;
  /** Cross-axis alignment of the inner width container. */
  align?: "center" | "start";
};

const widthClass = {
  full: "w-full max-w-[1440px]",
  "content-md": "w-full max-w-[1024px]",
  "content-lg": "w-full max-w-[1280px]",
} as const;

export function Section({
  children,
  className,
  width = "full",
  padding = "default",
  pageMarginX = 80,
  pageMarginLeft,
  align = "center",
}: SectionProps) {
  const paddingStyle =
    padding === "default"
      ? {
          paddingTop: figma.space.sectionY,
          paddingBottom: figma.space.sectionY,
        }
      : padding === "64"
        ? {
            paddingTop: figma.space.sectionY64,
            paddingBottom: figma.space.sectionY64,
          }
        : { paddingTop: 0, paddingBottom: 0 };

  const useSymmetric80 = pageMarginX === 80 && pageMarginLeft === undefined;

  const sidePaddingClass = useSymmetric80
    ? "px-4 md:px-8 lg:px-[80px]"
    : pageMarginLeft !== undefined
      ? "pl-0 pr-4 md:pl-0 md:pr-6 lg:pr-0"
      : pageMarginX === 0 && align === "center"
        ? "px-4 md:px-6 lg:px-0"
        : pageMarginX !== 0
          ? "px-4 md:px-6"
          : "pl-0 pr-4 md:pl-0 md:pr-6 lg:px-0";

  const sidePaddingStyle = useSymmetric80
    ? {}
    : pageMarginLeft !== undefined
      ? { paddingLeft: pageMarginLeft, paddingRight: 0 }
      : pageMarginX !== 0
        ? { paddingLeft: pageMarginX, paddingRight: pageMarginX }
        : {};

  return (
    <section
      className={cn(
        "relative mx-auto flex w-full flex-col",
        align === "start" ? "items-start" : "items-center",
        sidePaddingClass,
        className,
      )}
      style={{ ...paddingStyle, ...sidePaddingStyle }}
    >
      <div className={cn("relative w-full", widthClass[width])}>{children}</div>
    </section>
  );
}
