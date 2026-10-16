import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Loader.css";

// ============================================================================
// CONFIGURATION
// You can adjust the text, timings, colors, and sizing below:
// ============================================================================
export const TEXT = "Aditi";
export const HOLD_MS = 700; // Hold duration after the last letter lands
export const MIN_MS = 0; // Minimum total time the loader stays visible (default: 0)
export const BG_COLOR = "oklch(0.973 0.006 90)"; // Full-screen overlay background color (site background)
export const TEXT_COLOR = "#0a0a0a"; // Text color (near-black)
export const TEXT_SIZE = "clamp(26px, 4vw, 40px)"; // Responsive scaling font size
export const LETTER_DELAY_MS = 110; // Stagger delay between letters
export const LETTER_DURATION_MS = 800; // Rise animation duration per letter (0.8s)
export const SLIDE_DURATION_MS = 1000; // Exit slide-up duration (~1s)

export function Loader() {
  const [isRemoved, setIsRemoved] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);
  const [isAnimFinished, setIsAnimFinished] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const finishedRef = useRef(false);

  // Split text into individual characters for letter-by-letter rendering
  const letters = useMemo(() => TEXT.split(""), []);

  // Cleanup & completion: unlock scrolling, remove DOM element, fire custom event
  const finishLoader = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    // 1. Remove element from DOM
    setIsRemoved(true);

    // 2. Unlock page scrolling
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // 3. Dispatch custom event so other animations can start
      document.dispatchEvent(new CustomEvent("aditi:loaded"));
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // 1. Lock page scrolling while the loader is active
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // 2. Check prefers-reduced-motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = mediaQuery.matches;
    if (reducedMotion) {
      setIsReducedMotion(true);
    }

    // 3. Track window "load" event (wait for site assets to be ready)
    const handleLoad = () => {
      setIsWindowLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsWindowLoaded(true);
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    // Safety timeout to ensure loader never hangs if an external resource fails
    const safetyTimeout = setTimeout(() => {
      setIsWindowLoaded(true);
    }, 8000);

    // 4. Calculate animation timing:
    // Total letter animation = (numLetters - 1) * LETTER_DELAY_MS + LETTER_DURATION_MS
    // Then word sits still for HOLD_MS.
    // Also respects MIN_MS if configured.
    const letterCount = TEXT.length;
    const totalLetterAnimMs = reducedMotion
      ? 0
      : letterCount > 0
        ? (letterCount - 1) * LETTER_DELAY_MS + LETTER_DURATION_MS
        : 0;

    const animWaitTime = reducedMotion ? 200 : totalLetterAnimMs + HOLD_MS;
    const totalRequiredTime = Math.max(animWaitTime, MIN_MS);

    const animTimer = setTimeout(() => {
      setIsAnimFinished(true);
    }, totalRequiredTime);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(safetyTimeout);
      clearTimeout(animTimer);
      // Ensure scrolling is restored on unmount
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  // Trigger exit slide when BOTH the letter animation (+ hold) AND window load are ready
  useEffect(() => {
    if (isWindowLoaded && isAnimFinished && !isExiting && !isRemoved) {
      setIsExiting(true);
    }
  }, [isWindowLoaded, isAnimFinished, isExiting, isRemoved]);

  // When exiting starts, set a fallback timeout matching the exit transition
  useEffect(() => {
    if (!isExiting || isRemoved) return;

    const exitDuration = isReducedMotion ? 300 : SLIDE_DURATION_MS;
    const fallbackTimer = setTimeout(() => {
      finishLoader();
    }, exitDuration + 60);

    return () => clearTimeout(fallbackTimer);
  }, [isExiting, isRemoved, isReducedMotion, finishLoader]);

  // Listen for transition end on the overlay element
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (
      e.target === overlayRef.current &&
      (e.propertyName === "transform" || e.propertyName === "opacity")
    ) {
      finishLoader();
    }
  };

  // Once finished, remove completely from DOM
  if (isRemoved) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className={`loader-overlay ${isExiting ? "loader-exiting" : ""}`}
      style={
        {
          "--loader-bg": BG_COLOR,
          "--loader-color": TEXT_COLOR,
          "--loader-text-size": TEXT_SIZE,
          "--loader-letter-duration": `${LETTER_DURATION_MS}ms`,
          "--loader-slide-duration": `${SLIDE_DURATION_MS}ms`,
        } as React.CSSProperties
      }
      onTransitionEnd={handleTransitionEnd}
      role="status"
      aria-live="polite"
    >
      <div className="loader-word" aria-label={TEXT}>
        {letters.map((char, index) => (
          <span key={index} className="loader-mask" aria-hidden="true">
            <span
              className="loader-char"
              style={{
                animationDelay: `${index * LETTER_DELAY_MS}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
