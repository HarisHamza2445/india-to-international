"use client";

import { useEffect } from "react";

/**
 * Hash navigation: smooth-scroll to the section and let reveal
 * animations play as content enters the viewport.
 */
export function InstantAnchors() {
  useEffect(() => {
    const animateIntoView = (root: Element | null) => {
      if (!root) return;
      const nodes = root.classList?.contains("reveal")
        ? [root, ...root.querySelectorAll(".reveal")]
        : Array.from(root.querySelectorAll(".reveal"));
      for (const n of nodes) {
        // Ensure the reveal will re-run if it was previously skipped
        n.classList.remove("reveal-skip");
        // Force reflow so the animation restarts cleanly
        void (n as HTMLElement).offsetHeight;
        n.setAttribute("data-visible", "true");
      }
    };

    const jump = (hash: string, push: boolean) => {
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      // Kick reveal animations for the target section
      animateIntoView(el);

      const header = document.querySelector("header.sticky, header[class*='sticky']");
      const stickyH =
        header instanceof HTMLElement
          ? header.getBoundingClientRect().height
          : 88;
      const top =
        id === "home"
          ? 0
          : Math.max(0, el.getBoundingClientRect().top + window.scrollY - stickyH - 8);

      // Smooth animated scroll
      window.scrollTo({ top, behavior: "smooth" });
      if (push) history.pushState(null, "", `#${id}`);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      jump(href, true);
    };

    // Deep link on load — animate after a tick so layout is ready
    if (window.location.hash) {
      const t = window.setTimeout(() => jump(window.location.hash, false), 120);
      document.addEventListener("click", onClick);
      return () => {
        window.clearTimeout(t);
        document.removeEventListener("click", onClick);
      };
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
