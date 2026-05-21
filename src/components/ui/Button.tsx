import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "white";
  size?: "sm" | "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold opacity-90 transition-opacity hover:opacity-100",
        size === "sm" && "type-sm-medium h-10 gap-2 px-5",
        size === "md" && "type-input-md h-11 gap-2 px-6",
        size === "lg" && "type-input-md h-12 gap-2 px-6",
        variant === "primary" && "bg-primary-gradient text-text-contrast",
        variant === "white" && "bg-white text-text-contrast",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
