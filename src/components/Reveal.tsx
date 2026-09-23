"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "fade" | "scale";
  delay?: "100" | "150" | "200" | "250" | "300" | "400" | "500";
  threshold?: number;
  as?: ElementType;
}

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay,
  threshold = 0.12,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      el.setAttribute("data-visible", "true");
    };

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash && el.id && hash === `#${el.id}`) {
      show();
      return;
    }
    if (hash && el.closest(hash)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass =
    variant === "up"
      ? "reveal"
      : variant === "left"
        ? "reveal reveal-left"
        : variant === "right"
          ? "reveal reveal-right"
          : variant === "scale"
            ? "reveal reveal-scale"
            : "reveal reveal-fade";

  const delayClass = delay ? `anim-delay-${delay}` : "";
  const TagAs = Tag as ElementType;

  return (
    <TagAs
      ref={ref as Ref<never>}
      className={`${variantClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </TagAs>
  );
}
