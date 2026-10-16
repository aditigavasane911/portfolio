import { useCallback, useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems } from "@/data/content";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const isHoveredRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    setIsVisible(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Only set auto-hide timer if user is not hovering the navbar
    timerRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setIsVisible(false);
      }
    }, 2500);
  }, []);

  useEffect(() => {
    // Show navbar when mouse moves, touches, or scrolls
    const handleActivity = () => {
      resetTimer();
    };

    window.addEventListener("mousemove", handleActivity, { passive: true });
    window.addEventListener("touchstart", handleActivity, { passive: true });
    window.addEventListener("scroll", handleActivity, { passive: true });

    // Initial timeout to hide after page load
    timerRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setIsVisible(false);
      }
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setIsVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    resetTimer();
  };

  return (
    <header
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur transition-all duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-6 py-2.5 md:px-12 md:py-3 lg:px-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white shadow-xs transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Aditi Gavasane logo"
              width={32}
              height={32}
              className="h-full w-full object-contain p-0.5"
            />
          </div>
          <span className="eyebrow text-foreground text-xs md:text-sm">Aditi Gavasane</span>
        </a>
        <nav className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-xs md:text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
