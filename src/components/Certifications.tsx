import { useCallback, useEffect, useRef, useState } from "react";

import "./Certifications.css";

// ============================================================================
// CERTIFICATES DATA
// Replace these entries with Aditi's real certificates.
// You can add as many certificates as you want (3, 5, 10, 15+).
// The carousel, dots, and navigation will automatically adjust.
// ============================================================================
export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skills: string;
  description: string;
  credentialUrl: string;
  image?: string;
};

const certificatesData: CertificateItem[] = [
  {
    id: "google-pm",
    title: "Google Project Management Professional Certificate",
    issuer: "Google (Coursera)",
    year: "2024",
    skills: "Project Management / Planning / Execution",
    description:
      "Completed the Google Project Management Professional Certificate to strengthen my product, planning, and execution skills. It helped me understand real-world frameworks and how to deliver projects more effectively.",
    credentialUrl: "https://coursera.org/verify/professional-cert/google-project-management",
  },
  {
    id: "deeplearning-ai-prompt",
    title: "Generative AI & Prompt Engineering Specialist",
    issuer: "DeepLearning.AI",
    year: "2024",
    skills: "Prompt Engineering / LLM Architecture / AI Systems",
    description:
      "Mastered structured prompting, multi-turn context orchestration, reasoning chains, and integrating state-of-the-art LLMs into resilient full-stack applications and automated pipelines.",
    credentialUrl: "https://deeplearning.ai",
  },
  {
    id: "meta-fullstack",
    title: "Meta Front-End & Full-Stack Developer",
    issuer: "Meta (Coursera)",
    year: "2023",
    skills: "React / TypeScript / REST APIs / Modern UI Design",
    description:
      "Developed end-to-end expertise in modern React architectures, server-side data fetching, robust state management, and high-performance user interface engineering.",
    credentialUrl: "https://coursera.org/verify",
  },
  {
    id: "sih-hackathon",
    title: "Smart India Hackathon 2025 Finalist",
    issuer: "Ministry of Education (Govt. of India)",
    year: "2025",
    skills: "Rapid Prototyping / Full-Stack AI / System Design",
    description:
      "Selected as a national finalist in India's premier nationwide hackathon, architecting and prototyping high-impact AI and software solutions under intensive real-world conditions.",
    credentialUrl: "https://sih.gov.in",
  },
];

// ============================================================================
// Google Project Management Certificate
// Replicating the exact reference image certificate layout with recipient "Aditi"
// ============================================================================
function GoogleProjectManagementCert({ recipient = "Aditi" }: { recipient?: string }) {
  return (
    <div className="relative w-full h-full bg-white text-[#1f1f1f] flex overflow-hidden select-none font-sans">
      {/* Main Left Certificate Area */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
        {/* Google Logo */}
        <div className="flex items-center justify-center">
          <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 272 92" fill="none">
            <path
              d="M115.8 45.4c0-10.2 7.7-18.1 17.6-18.1s17.6 7.9 17.6 18.1-7.7 18.1-17.6 18.1-17.6-8-17.6-18.1zm28 0c0-6.6-4.6-11.4-10.4-11.4s-10.4 4.8-10.4 11.4c0 6.5 4.6 11.4 10.4 11.4s10.4-4.8 10.4-11.4z"
              fill="#EA4335"
            />
            <path
              d="M78 45.4c0-10.2 7.7-18.1 17.6-18.1s17.6 7.9 17.6 18.1-7.7 18.1-17.6 18.1S78 55.6 78 45.4zm28 0c0-6.6-4.6-11.4-10.4-11.4s-10.4 4.8-10.4 11.4c0 6.5 4.6 11.4 10.4 11.4s10.4-4.8 10.4-11.4z"
              fill="#FBBC05"
            />
            <path
              d="M198.8 35.8v26c0 10.7-6.3 15.1-13.8 15.1-7.1 0-11.3-4.7-12.9-8.6l6.3-2.6c1.1 2.7 3.8 5.8 6.6 5.8 4.3 0 7-2.7 7-7.7v-2.3h-.3c-1.9 2.3-5.5 4.3-10.1 4.3-9.6 0-18.4-8.3-18.4-18.2s8.8-18.1 18.4-18.1c4.6 0 8.2 2 10.1 4.2h.3v-3.9h6.8zm-6.6 9.7c0-6.6-4.3-11.4-10.1-11.4s-10.4 4.8-10.4 11.4c0 6.5 4.6 11.4 10.4 11.4s10.1-4.8 10.1-11.4z"
              fill="#4285F4"
            />
            <path d="M206.2 11.2h7.2v52.3h-7.2z" fill="#34A853" />
            <path
              d="M239.5 49.9l5.7 3.8c-1.8 2.8-6.3 7.8-13.8 7.8-9.4 0-16.5-7.3-16.5-18.1 0-10.9 7.2-18.1 15.7-18.1 8.5 0 12.8 7.3 14.1 11.1l.8 2-22.1 9.1c1.7 3.4 4.4 5.2 8.2 5.2 3.8 0 6.3-1.9 8-4.8zm-17.3-5.1l14.8-6.1c-.8-2-3.1-3.4-5.9-3.4-3.5 0-8.6 3.1-8.9 9.5z"
              fill="#EA4335"
            />
            <path
              d="M39.6 42.7v-7h22.6c.2 1.2.3 2.7.3 4.3 0 5.3-1.4 11.9-6.1 16.5-4.5 4.7-10.4 7.2-18.4 7.2-14.7 0-26.6-11.9-26.6-26.6S23.3 10.5 38 10.5c8.3 0 14.3 3.3 18.8 7.5l-5.2 5.2c-3.2-3-7.5-5.3-13.6-5.3-11 0-19.7 8.9-19.7 19.7 0 10.9 8.7 19.7 19.7 19.7 7.1 0 11.2-2.8 13.8-5.4 2.1-2.1 3.5-5.2 4.1-9.2H39.6z"
              fill="#4285F4"
            />
          </svg>
        </div>

        {/* Certificate Titles */}
        <div className="text-center my-auto py-1">
          <h3 className="text-base sm:text-xl font-bold tracking-tight text-[#111827]">
            Project Management
          </h3>
          <p className="text-[11px] sm:text-xs font-medium text-neutral-600 mt-0.5">
            Certificate of Completion
          </p>

          <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-1.5 sm:mt-2">
            This is to certify that
          </p>
          <p className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">{recipient}</p>
          <p className="text-[8px] sm:text-[9px] text-neutral-600 max-w-[320px] sm:max-w-[360px] mx-auto mt-1 leading-tight sm:leading-snug">
            has successfully completed the Google Project Management Professional Certificate, an
            online, non-credit program authorized by Google and offered through Coursera.
          </p>
        </div>

        {/* Bottom Details: Date, Signature, Coursera */}
        <div className="flex items-end justify-between pt-1.5 border-t border-neutral-200/80 text-[8px] sm:text-[9px]">
          <div>
            <p className="font-semibold text-neutral-800">Jan 10, 2024</p>
            <p className="text-neutral-500 text-[7px] uppercase tracking-wider">Date</p>
          </div>

          <div className="text-center">
            {/* Signature SVG */}
            <svg
              className="h-5 sm:h-6 w-20 sm:w-24 mx-auto"
              viewBox="0 0 120 30"
              fill="none"
              stroke="#111827"
              strokeWidth="1.5"
            >
              <path
                d="M10 22 C 25 5, 20 28, 35 15 C 45 5, 50 25, 65 18 C 75 12, 85 22, 105 10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M22 18 Q 40 8 75 14" strokeLinecap="round" />
            </svg>
            <p className="font-semibold text-neutral-800 text-[8px]">Amanda Brophy</p>
            <p className="text-neutral-500 text-[7px]">
              Global Director of Google Career Certificates
            </p>
          </div>

          <div className="flex items-center">
            <span className="font-bold text-[11px] sm:text-xs tracking-tight text-[#0056d2]">
              coursera
            </span>
          </div>
        </div>
      </div>

      {/* Right Accent Tab Banner */}
      <div className="w-16 sm:w-20 bg-[#eef3f8] border-l border-neutral-200/60 p-2.5 flex flex-col justify-between items-center text-center">
        <div className="text-[7px] sm:text-[8px] font-semibold text-neutral-600 leading-tight">
          Google
          <br />
          Career
          <br />
          Certificates
        </div>

        {/* Circular Google Seal Badge */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center p-1 bg-white shadow-xs">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </div>

        <div className="text-[7px] uppercase tracking-wider text-neutral-400 font-mono">
          Verified
        </div>
      </div>
    </div>
  );
}

// Fallback certificate graphic for entries without a static image file
function VectorCertificateFallback({ cert }: { cert: CertificateItem }) {
  return (
    <div className="relative w-full h-full bg-[#fbfaf6] text-[#1c1b18] p-4 sm:p-6 flex flex-col justify-between border-[4px] sm:border-[6px] border-[#ece9de] shadow-inner select-none font-sans">
      <div className="flex items-center justify-between border-b border-[#e2decb] pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white text-[9px] font-bold">
            ★
          </div>
          <span className="text-xs font-semibold tracking-wider uppercase text-neutral-700">
            {cert.issuer}
          </span>
        </div>
        <span className="text-[8px] sm:text-[9px] font-mono uppercase text-neutral-400">
          Verified Credential
        </span>
      </div>

      <div className="my-auto py-1 text-center">
        <p className="text-[8px] sm:text-[9px] uppercase tracking-widest text-neutral-500 mb-0.5">
          Certificate of Completion
        </p>
        <h4 className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-neutral-900 line-clamp-2">
          {cert.title}
        </h4>
        <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-1">This is to certify that</p>
        <p className="text-lg sm:text-xl font-serif italic text-neutral-900 font-semibold mt-0.5">
          Aditi
        </p>
        <p className="text-[8px] sm:text-[9px] text-neutral-600 max-w-sm mx-auto mt-0.5 line-clamp-2">
          has successfully demonstrated proficiency in {cert.skills}.
        </p>
      </div>

      <div className="flex items-end justify-between border-t border-[#e2decb] pt-1.5 text-[8px] sm:text-[9px] text-neutral-500">
        <div>
          <p className="font-semibold text-neutral-800">{cert.year}</p>
          <p className="text-[7px] uppercase">Issued Year</p>
        </div>
        <div className="px-1.5 py-0.5 rounded-full border border-amber-600/40 text-[7px] font-bold text-amber-700 bg-amber-50">
          OFFICIAL
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const totalCerts = certificatesData.length;

  // Active card index
  const [activeIdx, setActiveIdx] = useState(0);
  // Active dot index (updates at midpoint 400ms)
  const [activeDotIdx, setActiveDotIdx] = useState(0);
  // Active info data index (updates at midpoint 400ms)
  const [displayInfoIdx, setDisplayInfoIdx] = useState(0);

  // Card slot mapping: { [certId]: slotClass }
  const [cardSlots, setCardSlots] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    certificatesData.forEach((cert, i) => {
      if (i === 0) initial[cert.id] = "cert-slot-active";
      else if (i === 1) initial[cert.id] = "cert-slot-near";
      else if (i === 2) initial[cert.id] = "cert-slot-far";
      else if (i === 3) initial[cert.id] = "cert-slot-enter";
      else initial[cert.id] = "cert-slot-hidden";
    });
    return initial;
  });

  // Cards temporarily skipping transition (for silent repositioning at opacity 0)
  const [noTransitionIds, setNoTransitionIds] = useState<Set<string>>(new Set());

  // Info text transition phase
  const [infoTextClass, setInfoTextClass] = useState("cert-info-enter-active");

  // Pressed feedback for arrow buttons
  const [pressedBtn, setPressedBtn] = useState<"prev" | "next" | null>(null);

  // Input lock & single queue slot
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const queuedActionRef = useRef<"next" | "prev" | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll reveal: appear once on scroll and stay visible permanently until refresh
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (hasAppeared) return;

    // Check if section is already in view (e.g. direct load or refresh)
    const checkInitial = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasAppeared(true);
        return true;
      }
      return false;
    };

    if (checkInitial()) return;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setHasAppeared(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      observer.observe(section);
      return () => observer.disconnect();
    } else {
      setHasAppeared(true);
    }
  }, [hasAppeared]);

  // Subtle interactive cursor tracker for soft ambient refraction bloom
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let rafId: number | null = null;
    let isTracking = false;

    const animateLoop = () => {
      if (currentX === -9999) {
        currentX = targetX;
        currentY = targetY;
      } else {
        currentX += (targetX - currentX) * 0.09;
        currentY += (targetY - currentY) * 0.09;
      }

      section.style.setProperty("--cursor-x", `${currentX.toFixed(1)}px`);
      section.style.setProperty("--cursor-y", `${currentY.toFixed(1)}px`);

      if (isTracking) {
        rafId = requestAnimationFrame(animateLoop);
      } else {
        rafId = null;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = section.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isTracking = true;

      if (!rafId) {
        rafId = requestAnimationFrame(animateLoop);
      }
    };

    const handlePointerLeave = () => {
      isTracking = false;
      targetX = -9999;
      targetY = -9999;
    };

    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    section.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const activeIdxRef = useRef(0);
  activeIdxRef.current = activeIdx;

  // Animation constants
  const TOTAL_DURATION_MS = 1000;
  const MIDPOINT_MS = 400;

  // Gesture drag / swipe support
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const currentCert = certificatesData[displayInfoIdx];

  // Navigate to next or previous certificate
  const goTo = useCallback(
    (direction: "next" | "prev") => {
      if (totalCerts <= 1) return;

      // Lock input during transition; queue at most one click
      if (isTransitioningRef.current) {
        queuedActionRef.current = direction;
        return;
      }

      isTransitioningRef.current = true;
      setIsTransitioning(true);

      const curr = activeIdxRef.current;
      const N = totalCerts;

      // Button press visual feedback
      setPressedBtn(direction);
      setTimeout(() => setPressedBtn(null), 250);

      if (direction === "next") {
        const nextIdx = (curr + 1) % N;
        const outgoingCert = certificatesData[curr];
        const incomingCert = certificatesData[nextIdx];
        const farToNearCert = certificatesData[(curr + 2) % N];
        const enterToFarCert = certificatesData[(curr + 3) % N];

        // 1. Info text exits left while fading out (400ms)
        setInfoTextClass("cert-info-exit-next");

        // 2. All cards move simultaneously (1.0s)
        setCardSlots((prev) => {
          const nextSlots = { ...prev };
          nextSlots[outgoingCert.id] = "cert-slot-exit";
          nextSlots[incomingCert.id] = "cert-slot-active";
          if (farToNearCert) nextSlots[farToNearCert.id] = "cert-slot-near";
          if (enterToFarCert) nextSlots[enterToFarCert.id] = "cert-slot-far";
          return nextSlots;
        });

        // 3. Midpoint Breathing Dip (at 400ms)
        setTimeout(() => {
          // Dots update at midpoint
          setActiveDotIdx(nextIdx);
          // Text content switches at midpoint
          setDisplayInfoIdx(nextIdx);

          // Position new text 3vw to the right with opacity 0
          setInfoTextClass("cert-info-enter-start-next");

          // Small gap (<50ms), then settle into place over 500ms
          requestAnimationFrame(() => {
            setTimeout(() => {
              setInfoTextClass("cert-info-enter-active");
            }, 30);
          });
        }, MIDPOINT_MS);

        // 4. Transition Complete (at 1000ms)
        setTimeout(() => {
          setActiveIdx(nextIdx);

          // Silently place outgoing card at ENTER (opacity 0)
          setNoTransitionIds(new Set([outgoingCert.id]));
          setCardSlots((prev) => ({
            ...prev,
            [outgoingCert.id]: "cert-slot-enter",
          }));

          // Re-enable transitions on next tick
          requestAnimationFrame(() => {
            setNoTransitionIds(new Set());
            isTransitioningRef.current = false;
            setIsTransitioning(false);

            // Execute queued action if any
            if (queuedActionRef.current) {
              const queued = queuedActionRef.current;
              queuedActionRef.current = null;
              goTo(queued);
            }
          });
        }, TOTAL_DURATION_MS);
      } else {
        // PREV: Exact mirror
        const prevIdx = (curr - 1 + N) % N;
        const returningCert = certificatesData[prevIdx];
        const activeToNearCert = certificatesData[curr];
        const nearToFarCert = certificatesData[(curr + 1) % N];
        const farToEnterCert = certificatesData[(curr + 2) % N];

        // 1. Silently place returning card at EXIT (-35vw, opacity 0)
        setNoTransitionIds(new Set([returningCert.id]));
        setCardSlots((prev) => ({
          ...prev,
          [returningCert.id]: "cert-slot-exit",
        }));

        // 2. Info text exits right while fading out (400ms)
        setInfoTextClass("cert-info-exit-prev");

        // 3. Next frame: animate all cards in reverse
        requestAnimationFrame(() => {
          setNoTransitionIds(new Set());
          setCardSlots((prev) => {
            const nextSlots = { ...prev };
            nextSlots[returningCert.id] = "cert-slot-active";
            nextSlots[activeToNearCert.id] = "cert-slot-near";
            if (nearToFarCert) nextSlots[nearToFarCert.id] = "cert-slot-far";
            if (farToEnterCert) nextSlots[farToEnterCert.id] = "cert-slot-enter";
            return nextSlots;
          });
        });

        // 4. Midpoint Breathing Dip (at 400ms)
        setTimeout(() => {
          setActiveDotIdx(prevIdx);
          setDisplayInfoIdx(prevIdx);

          // Position new text -3vw to the left with opacity 0
          setInfoTextClass("cert-info-enter-start-prev");

          requestAnimationFrame(() => {
            setTimeout(() => {
              setInfoTextClass("cert-info-enter-active");
            }, 30);
          });
        }, MIDPOINT_MS);

        // 5. Transition Complete (at 1000ms)
        setTimeout(() => {
          setActiveIdx(prevIdx);
          isTransitioningRef.current = false;
          setIsTransitioning(false);

          if (queuedActionRef.current) {
            const queued = queuedActionRef.current;
            queuedActionRef.current = null;
            goTo(queued);
          }
        }, TOTAL_DURATION_MS);
      }
    },
    [totalCerts],
  );

  const handleNext = useCallback(() => goTo("next"), [goTo]);
  const handlePrev = useCallback(() => goTo("prev"), [goTo]);

  // Keyboard left/right arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Pointer drag / swipe handlers
  const handlePointerDown = (clientX: number) => {
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (clientX: number) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const diff = dragStartX.current - clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="cert-section"
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseUp={(e) => handlePointerUp(e.clientX)}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          handlePointerUp(e.changedTouches[0].clientX);
        }
      }}
      aria-label="Certifications Carousel"
    >
      {/* 1. Interactive Prism-Ray Light Effect (Appears on scroll and stays visible until refresh) */}
      <div
        className={`cert-ambient-arc ${hasAppeared ? "cert-prism-revealed" : "cert-prism-hidden"}`}
        aria-hidden="true"
      >
        {/* Subtle Upper-Right Curved Prism Arc */}
        <div className="cert-prism-top-arc" />

        {/* Continuous Flowing Iridescent Prism Wave Container */}
        <div className="cert-prism-bottom-container">
          <div className="cert-prism-glow-base" />
          <div className="cert-prism-glow-secondary" />
          <svg
            className="cert-prism-svg cert-prism-svg-primary"
            viewBox="0 0 2400 450"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="prism-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.88" />
                <stop offset="18%" stopColor="#fbbf24" stopOpacity="0.92" />
                <stop offset="36%" stopColor="#0d9488" stopOpacity="0.78" />
                <stop offset="52%" stopColor="#0284c7" stopOpacity="0.82" />
                <stop offset="70%" stopColor="#6366f1" stopOpacity="0.88" />
                <stop offset="86%" stopColor="#d97706" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.88" />
              </linearGradient>
              <linearGradient id="prism-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.75" />
                <stop offset="20%" stopColor="#7c3aed" stopOpacity="0.82" />
                <stop offset="42%" stopColor="#d97706" stopOpacity="0.88" />
                <stop offset="68%" stopColor="#fbbf24" stopOpacity="0.92" />
                <stop offset="85%" stopColor="#0d9488" stopOpacity="0.78" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="prism-specular-edge" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.75" />
                <stop offset="26%" stopColor="#fffbeb" stopOpacity="0.98" />
                <stop offset="52%" stopColor="#38bdf8" stopOpacity="0.88" />
                <stop offset="76%" stopColor="#a78bfa" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <path
              d="M0 260 C 380 170, 720 340, 1100 220 C 1480 100, 1820 290, 2200 180 C 2280 155, 2350 175, 2400 200 L 2400 450 L 0 450 Z"
              fill="url(#prism-grad-1)"
              className="cert-prism-path-1"
            />
            <path
              d="M0 310 C 420 370, 800 210, 1220 280 C 1640 350, 1920 180, 2260 250 C 2320 265, 2370 235, 2400 220 L 2400 450 L 0 450 Z"
              fill="url(#prism-grad-2)"
              className="cert-prism-path-2"
            />
            <path
              d="M0 260 C 380 170, 720 340, 1100 220 C 1480 100, 1820 290, 2200 180 C 2280 155, 2350 175, 2400 200"
              stroke="url(#prism-specular-edge)"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
              className="cert-prism-path-specular"
            />
          </svg>
        </div>

        {/* Soft chromatic cursor refraction bloom */}
        <div className="cert-prism-cursor-spot" />

        {/* Center Vignette Mask: Keeps central content area clean dark warm charcoal */}
        <div className="cert-arc-center-vignette" />
      </div>

      {/* 2. Top Heading (Center, Smaller, Tighter, Calmer) */}
      <div className="relative z-20 pt-1 sm:pt-2 px-6 text-center shrink-0">
        <h2 className="max-w-[1000px] mx-auto leading-[1.2] tracking-[-0.02em] text-[#efe9dd]">
          <span className="inline-flex items-baseline justify-center flex-wrap gap-x-2.5 sm:gap-x-3">
            <span className="font-sans not-italic text-[clamp(28px,2.8vw,44px)] font-medium text-[#efe9dd] tracking-tight">
              Certifications
            </span>
            <span className="font-serif italic text-[clamp(19px,1.9vw,29px)] font-normal text-[#efe9dd]/85">
              — Proof of learning.
            </span>
          </span>
          <span className="block font-serif italic text-[clamp(19px,1.9vw,29px)] font-normal text-[#efe9dd]/80 mt-0.5">
            Credentials that move me forward.
          </span>
        </h2>
      </div>

      {/* 3. Main Stage Container: 3D Stage + Info Panel (flex: 1) */}
      <div className="cert-stage-container z-20 w-full px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-center my-auto">
        {/* Desktop Layout (>= 1024px): 3D Cards Stage + Absolute Info Panel */}
        <div className="hidden lg:block relative w-full h-[330px] xl:h-[360px]">
          {/* 3D Cards */}
          {certificatesData.map((cert) => {
            const slotClass = cardSlots[cert.id] || "cert-slot-hidden";
            const noTrans = noTransitionIds.has(cert.id) ? "cert-no-transition" : "";

            return (
              <div
                key={cert.id}
                className={`cert-card-bezel ${slotClass} ${noTrans}`}
                data-cert-id={cert.id}
              >
                <div className="w-full h-full">
                  <div className="cert-card-screen">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : cert.id === "google-pm" ? (
                      <GoogleProjectManagementCert recipient="Aditi" />
                    ) : (
                      <VectorCertificateFallback cert={cert} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Info Panel: Absolutely positioned on the right side, bottom-aligned */}
          <div className="absolute left-[59%] bottom-[2%] w-[36%] max-w-[460px] z-20 text-left pointer-events-auto">
            <div className={`cert-info-container ${infoTextClass}`}>
              {/* Description */}
              <p className="text-[#efe9dd] text-base sm:text-lg xl:text-[19px] leading-[1.3] font-normal">
                {currentCert.description}
              </p>

              {/* Metadata Table */}
              <div className="mt-5 space-y-2.5 border-t border-white/12 pt-4">
                {/* ISSUER */}
                <div className="flex items-center text-xs tracking-wider uppercase cert-row-stagger-1">
                  <span className="w-20 text-[#efe9dd]/60 font-medium">ISSUER</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0643a] mx-2.5 shrink-0 shadow-[0_0_6px_rgba(224,100,58,0.7)]" />
                  <span className="text-[#efe9dd] font-medium tracking-wide">
                    {currentCert.issuer}
                  </span>
                </div>

                {/* YEAR */}
                <div className="flex items-center text-xs tracking-wider uppercase cert-row-stagger-2">
                  <span className="w-20 text-[#efe9dd]/60 font-medium">YEAR</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0643a] mx-2.5 shrink-0 shadow-[0_0_6px_rgba(224,100,58,0.7)]" />
                  <span className="text-[#efe9dd] font-medium tracking-wide">
                    {currentCert.year}
                  </span>
                </div>

                {/* SKILLS */}
                <div className="flex items-start text-xs tracking-wider uppercase cert-row-stagger-3">
                  <span className="w-20 text-[#efe9dd]/60 font-medium shrink-0 pt-0.5">SKILLS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0643a] mx-2.5 shrink-0 mt-1 shadow-[0_0_6px_rgba(224,100,58,0.7)]" />
                  <span className="text-[#efe9dd] font-medium tracking-wide leading-relaxed">
                    {currentCert.skills}
                  </span>
                </div>

                {/* VIEW CREDENTIAL LINK */}
                {currentCert.credentialUrl && (
                  <div className="pt-2 cert-row-stagger-3">
                    <a
                      href={currentCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#efe9dd]/80 hover:text-[#efe9dd] transition-colors"
                    >
                      <span>VIEW CREDENTIAL</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Layout (< 1024px): Stacked */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          {/* Card Carousel Box */}
          <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden flex items-center justify-center">
            {certificatesData.map((cert) => {
              const slotClass = cardSlots[cert.id] || "cert-slot-hidden";
              const noTrans = noTransitionIds.has(cert.id) ? "cert-no-transition" : "";

              return (
                <div
                  key={cert.id}
                  className={`cert-card-bezel ${slotClass} ${noTrans}`}
                  data-cert-id={cert.id}
                >
                  <div className="cert-card-screen">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : cert.id === "google-pm" ? (
                      <GoogleProjectManagementCert recipient="Aditi" />
                    ) : (
                      <VectorCertificateFallback cert={cert} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Panel below cards */}
          <div className="w-full max-w-lg text-left">
            <div className={`cert-info-container ${infoTextClass}`}>
              <p className="text-[#efe9dd] text-sm sm:text-base leading-snug font-normal">
                {currentCert.description}
              </p>

              <div className="mt-4 space-y-2 border-t border-white/12 pt-3">
                <div className="flex items-center text-xs tracking-wider uppercase cert-row-stagger-1">
                  <span className="w-18 text-[#efe9dd]/60 font-medium">ISSUER</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0643a] mx-2 shrink-0" />
                  <span className="text-[#efe9dd] font-medium">{currentCert.issuer}</span>
                </div>
                <div className="flex items-center text-xs tracking-wider uppercase cert-row-stagger-2">
                  <span className="w-18 text-[#efe9dd]/60 font-medium">YEAR</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0643a] mx-2 shrink-0" />
                  <span className="text-[#efe9dd] font-medium">{currentCert.year}</span>
                </div>
                <div className="flex items-start text-xs tracking-wider uppercase cert-row-stagger-3">
                  <span className="w-18 text-[#efe9dd]/60 font-medium shrink-0 pt-0.5">SKILLS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0643a] mx-2 shrink-0 mt-1" />
                  <span className="text-[#efe9dd] font-medium leading-relaxed">
                    {currentCert.skills}
                  </span>
                </div>

                {/* VIEW CREDENTIAL LINK */}
                {currentCert.credentialUrl && (
                  <div className="pt-2 cert-row-stagger-3">
                    <a
                      href={currentCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#efe9dd]/80 hover:text-[#efe9dd] transition-colors"
                    >
                      <span>VIEW CREDENTIAL</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Bar: Centered Arrow Pill Buttons + Dynamic Progress Dots */}
      <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 pb-4 sm:pb-5 lg:pb-6 pt-1 shrink-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            {/* Prev Pill Button */}
            <div className="cert-pill-wrapper">
              <button
                type="button"
                onClick={handlePrev}
                disabled={isTransitioning}
                aria-label="Previous Certificate"
                className={`cert-pill-btn group ${pressedBtn === "prev" ? "is-pressed" : ""}`}
                style={{ "--nudge-dir": "-3px" } as React.CSSProperties}
              >
                <svg
                  width="30"
                  height="12"
                  viewBox="0 0 30 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current stroke-[1.25] transition-transform duration-200"
                >
                  <path
                    d="M29 6H2M2 6L7.5 1M2 6L7.5 11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className="cert-pill-dot" />
            </div>

            {/* Next Pill Button */}
            <div className="cert-pill-wrapper">
              <button
                type="button"
                onClick={handleNext}
                disabled={isTransitioning}
                aria-label="Next Certificate"
                className={`cert-pill-btn group ${pressedBtn === "next" ? "is-pressed" : ""}`}
                style={{ "--nudge-dir": "3px" } as React.CSSProperties}
              >
                <svg
                  width="30"
                  height="12"
                  viewBox="0 0 30 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current stroke-[1.25] transition-transform duration-200"
                >
                  <path
                    d="M1 6H28M28 6L22.5 1M28 6L22.5 11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className="cert-pill-dot" />
            </div>
          </div>

          {/* Progress Dots Indicator directly under buttons */}
          <div
            className="flex items-center gap-1.5 justify-center mt-2.5"
            role="tablist"
            aria-label="Certificate navigation"
          >
            {certificatesData.map((cert, index) => {
              const isActive = index === activeDotIdx;
              return (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => {
                    if (!isTransitioning && index !== activeDotIdx) {
                      goTo(index > activeDotIdx ? "next" : "prev");
                    }
                  }}
                  aria-label={`Go to certificate ${index + 1}: ${cert.title}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3.5 bg-[#efe9dd] shadow-[0_0_6px_rgba(239,233,221,0.8)]"
                      : "w-1 bg-[#efe9dd]/35 hover:bg-[#efe9dd]/70"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
