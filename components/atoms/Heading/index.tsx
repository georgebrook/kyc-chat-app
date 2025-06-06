import { JSX } from "react";
import { ReactNode } from "react";
import { bem } from "@/lib/bem";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

const levelModifierMap: Record<HeadingProps["level"], string> = {
  1: "title",
  2: "subtitle",
  3: "large",
  4: "medium",
  5: "small",
  6: "tiny",
};

export default function Heading({
  level,
  children,
  className = '',
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const levelModifier = levelModifierMap[level];
  const headingClassName = bem("heading", "", [levelModifier], className);

  return <Tag className={headingClassName}>
    {children}


    <style jsx>{`
      .heading {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        line-height: 1.3;
        font-family: var(--font-heading);
      }
    `}</style>

  </Tag>;
}
