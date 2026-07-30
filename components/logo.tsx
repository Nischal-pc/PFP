"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon-only";
  className?: string;
  linkTo?: string;
}

// Size mapping for icon container and SVG
const sizeMap = {
  sm: {
    containerSize: "size-8",
    svgSize: "size-5",
    textClass: "text-xs",
  },
  md: {
    containerSize: "size-10",
    svgSize: "size-7",
    textClass: "text-sm",
  },
  lg: {
    containerSize: "size-16",
    svgSize: "size-11",
    textClass: "text-base",
  },
  xl: {
    containerSize: "size-32",
    svgSize: "size-24",
    textClass: "text-lg",
  },
};

function LogoIcon({ size = "md" }: { size: "sm" | "md" | "lg" | "xl" }) {
  const sizeConfig = sizeMap[size];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        sizeConfig.containerSize,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon.svg"
        alt="PFP Canada logo"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function LogoText({ size = "md" }: { size: "sm" | "md" | "lg" | "xl" }) {
  const sizeConfig = sizeMap[size];

  return (
    <div className="flex flex-col">
      <span
        className={cn(
          "font-display font-semibold uppercase tracking-[0.22em] text-accent",
          size === "sm" && "text-[8px]",
          size === "md" && "text-[10px]",
          size === "lg" && "text-xs",
          size === "xl" && "text-sm",
        )}
      >
        Precision Fire Protection
      </span>
      <span
        className={cn(
          "font-display font-bold uppercase tracking-[0.06em] text-secondary",
          size === "sm" && "text-lg",
          size === "md" && "text-2xl md:text-3xl",
          size === "lg" && "text-3xl md:text-4xl",
          size === "xl" && "text-5xl md:text-6xl",
        )}
      >
        PFP<span className="text-primary">Canada</span>
      </span>
    </div>
  );
}

export function Logo({
  size = "md",
  variant = "full",
  className,
  linkTo = "/",
}: LogoProps) {
  const content = (
    <div className={cn("flex items-center gap-3 group", className)}>
      <LogoIcon size={size} />
      {variant === "full" && <LogoText size={size} />}
    </div>
  );

  if (linkTo) {
    return (
      <Link
        href={linkTo}
        className="flex items-center gap-3 group"
        aria-label="PFP Canada home"
      >
        <LogoIcon size={size} />
        {variant === "full" && <LogoText size={size} />}
      </Link>
    );
  }

  return content;
}
