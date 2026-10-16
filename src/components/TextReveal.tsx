import React, { ElementType, ReactNode, useEffect, useRef } from "react";

// Singleton observer instance to avoid creating multiple observers across the page
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, (isIntersecting: boolean) => void>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observerCallbacks.get(entry.target);
          if (callback) {
            callback(entry.isIntersecting);
          } else {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
            } else {
              entry.target.classList.remove("is-revealed");
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );
  }

  return sharedObserver;
}

export function registerRevealElement(
  element: Element,
  callback?: (isIntersecting: boolean) => void
): () => void {
  const observer = getSharedObserver();
  if (!observer) {
    // Graceful fallback: If IntersectionObserver is not available, reveal immediately
    element.classList.add("is-revealed");
    return () => {};
  }

  if (callback) {
    observerCallbacks.set(element, callback);
  }
  observer.observe(element);

  return () => {
    observer.unobserve(element);
    observerCallbacks.delete(element);
  };
}

export interface TextRevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number; // Delay in milliseconds (stagger)
  distance?: number; // Upward translation distance in pixels (default 24)
  duration?: number; // Animation duration in milliseconds (default 650)
  children: ReactNode;
  className?: string;
}

export function TextReveal({
  as: Component = "div",
  delay = 0,
  distance = 24,
  duration = 650,
  children,
  className = "",
  style,
  ...props
}: TextRevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const cleanup = registerRevealElement(el, (isIntersecting) => {
      if (isIntersecting) {
        el.classList.add("is-revealed");
      } else {
        // Re-triggers when scrolling back into view
        el.classList.remove("is-revealed");
      }
    });

    return cleanup;
  }, []);

  const combinedStyle: React.CSSProperties = {
    ...style,
    "--reveal-delay": `${delay}ms`,
    "--reveal-distance": `${distance}px`,
    "--reveal-duration": `${duration}ms`,
  } as React.CSSProperties;

  return (
    <Component
      ref={elementRef}
      className={`reveal-item ${className}`.trim()}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Custom React hook for attaching scroll reveal to any custom ref
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(options?: {
  delay?: number;
  distance?: number;
  duration?: number;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal-item");
    if (options?.delay !== undefined) {
      el.style.setProperty("--reveal-delay", `${options.delay}ms`);
    }
    if (options?.distance !== undefined) {
      el.style.setProperty("--reveal-distance", `${options.distance}px`);
    }
    if (options?.duration !== undefined) {
      el.style.setProperty("--reveal-duration", `${options.duration}ms`);
    }

    const cleanup = registerRevealElement(el, (isIntersecting) => {
      if (isIntersecting) {
        el.classList.add("is-revealed");
      } else {
        el.classList.remove("is-revealed");
      }
    });

    return cleanup;
  }, [options?.delay, options?.distance, options?.duration]);

  return ref;
}
