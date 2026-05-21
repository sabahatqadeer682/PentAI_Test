import Image from "next/image";
import { images } from "@/lib/assets";

type IconProps = { className?: string; style?: React.CSSProperties };

const iconImages = {
  lock: images.icons.lock,
  wall: images.icons.wall,
  "shield-check": images.icons.shieldCheck,
  fingerprint: images.icons.fingerprint,
  "security-camera": images.icons.securityCamera,
  "shield-warning": images.icons.shieldWarning,
} as const;

export type SecurityIconName = keyof typeof iconImages;

export function SecurityIcon({
  name,
  className,
  style,
}: {
  name: SecurityIconName;
  className?: string;
  style?: React.CSSProperties;
}) {
  const size =
    typeof style?.width === "number"
      ? style.width
      : typeof style?.height === "number"
        ? style.height
        : 40;

  return (
    <Image
      src={iconImages[name]}
      alt=""
      width={size}
      height={size}
      className={`security-icon ${className ?? ""}`}
      style={style}
      aria-hidden
    />
  );
}
