import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Marks a block for the site's single reveal animation. It renders normal,
 * fully-visible markup and simply tags itself with `data-reveal`; the Motion
 * controller animates it in from a visible baseline. Purely additive — if
 * motion never runs, this is just a container.
 */
export function Reveal({
  as: Tag = "div",
  className,
  style,
  id,
  children,
}: {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={className} style={style} id={id} data-reveal>
      {children}
    </Tag>
  );
}
