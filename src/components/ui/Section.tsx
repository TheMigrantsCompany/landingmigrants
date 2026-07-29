import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`py-24 md:py-32 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
