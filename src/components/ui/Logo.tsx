import Image from "next/image";
import { brand } from "@/content/site";

type LogoProps = {
  className?: string;
  /** Altura visual en px (el logo es cuadrado). */
  size?: number;
  priority?: boolean;
};

export function Logo({ className = "", size = 40, priority = false }: LogoProps) {
  return (
    <Image
      src={brand.logo}
      alt={brand.name}
      width={size}
      height={size}
      priority={priority}
      className={`h-auto w-auto select-none ${className}`}
      style={{ height: size, width: size }}
    />
  );
}
