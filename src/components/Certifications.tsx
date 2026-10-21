import { ExternalLink, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { TextReveal } from "@/components/TextReveal";
import "./Certifications.css";

import certClaudeVertexAi from "@/assets/cert-claude-vertex-ai.png";
import certAnthropicAiFluency from "@/assets/cert-anthropic-ai-fluency.png";
import certCodechefMl from "@/assets/cert-codechef-ml.png";
import certSih2025 from "@/assets/cert-sih-2025.jpg";

// ============================================================================
// CERTIFICATES DATA
// Original certificates for Aditi Gavasane
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
    id: "claude-vertex-ai",
    title: "Claude with Google Vertex AI",
    issuer: "Anthropic",
    year: "Aug 2026",
    skills: "Anthropic Claude / Google Vertex AI / Cloud LLM APIs / Generative AI",
    description:
      "Certified by Anthropic in deploying, prompt engineering, and orchestrating Claude foundation models within Google Cloud Vertex AI, engineering scalable enterprise generative AI solutions.",
    credentialUrl: certClaudeVertexAi,
    image: certClaudeVertexAi,
  },
  {
    id: "anthropic-ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    year: "Aug 2026",
    skills: "AI Frameworks / LLM Foundations / Prompt Engineering / Applied AI",
    description:
      "Certified in foundational AI mechanics, prompt design frameworks, and applied reasoning principles by Anthropic in partnership with UCC, Ringling College, and HEA.",
    credentialUrl: certAnthropicAiFluency,
    image: certAnthropicAiFluency,
  },
  {
    id: "codechef-ml",
    title: "Machine Learning",
    issuer: "CodeChef",
    year: "Oct 2026",
    skills: "Machine Learning / Python / Predictive Modeling / Model Evaluation / Scikit-Learn",
    description:
      "Successfully completed comprehensive curriculum modules and hands-on projects in Machine Learning by CodeChef (Cert ID: 9084558), mastering core predictive algorithms and model workflows.",
    credentialUrl: "https://www.codechef.com/certificates/verify",
    image: certCodechefMl,
  },
  {
    id: "sih-2025-finale",
    title: "Smart India Hackathon 2025 – Grand Finale Participant",
    issuer: "Ministry of Education (Govt. of India)",
    year: "Dec 2025",
    skills: "Travon (AI Pilgrim Management) / Rapid Prototyping / Full-Stack AI / Real-Time Systems",
    description:
      "Awarded by the Ministry of Education's Innovation Cell (MIC) & AICTE for competing in the Grand Finale of Smart India Hackathon 2025 (Software Edition), building Travon at IIIT Dharwad.",
    credentialUrl: certSih2025,
    image: certSih2025,
  },
];

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

  // Lightbox modal for previewing certificate full-size
  const [selectedCertForModal, setSelectedCertForModal] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!selectedCertForModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCertForModal(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertForModal]);

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
      <div className="relative z-20 pt-2 sm:pt-4 pb-4 sm:pb-6 px-6 text-center shrink-0">
        <h2 className="max-w-[1000px] mx-auto leading-[1.2] tracking-[-0.02em] text-[#efe9dd]">
          <TextReveal
            as="span"
            delay={0}
            className="inline-flex items-baseline justify-center flex-wrap gap-x-2.5 sm:gap-x-3"
          >
            <span className="font-sans not-italic text-[clamp(28px,2.8vw,44px)] font-medium text-[#efe9dd] tracking-tight">
              Certifications
            </span>
            <span className="font-serif italic text-[clamp(19px,1.9vw,29px)] font-normal text-[#efe9dd]/85">
              — Proof of learning.
            </span>
          </TextReveal>
          <TextReveal
            as="span"
            delay={120}
            className="block font-serif italic text-[clamp(19px,1.9vw,29px)] font-normal text-[#efe9dd]/80 mt-0.5"
          >
            Credentials that move me forward.
          </TextReveal>
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
                className={`cert-card-bezel ${slotClass} ${noTrans} ${
                  slotClass === "cert-slot-active" ? "cursor-pointer group/card" : ""
                }`}
                data-cert-id={cert.id}
                onClick={() => {
                  if (slotClass === "cert-slot-active") {
                    setSelectedCertForModal(cert);
                  }
                }}
              >
                <div className="w-full h-full">
                  <div className="cert-card-screen relative">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-[1.02]"
                        loading="lazy"
                      />
                    ) : (
                      <VectorCertificateFallback cert={cert} />
                    )}
                    {slotClass === "cert-slot-active" && (
                      <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover/card:opacity-100 pointer-events-none">
                        <span className="px-3.5 py-1.5 rounded-full bg-black/80 text-[#efe9dd] text-[11px] font-medium tracking-wider uppercase backdrop-blur-xs shadow-lg flex items-center gap-1.5 border border-white/10">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Click to View
                        </span>
                      </div>
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
                <div className="pt-2 cert-row-stagger-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedCertForModal(currentCert)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#efe9dd]/90 hover:text-[#efe9dd] transition-colors cursor-pointer"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                  {currentCert.id === "codechef-ml" && (
                    <a
                      href="https://www.codechef.com/certificates/verify"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-[#efe9dd]/65 hover:text-[#efe9dd] transition-colors"
                    >
                      <span>VERIFY (ID: 9084558)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {currentCert.id === "sih-2025-finale" && (
                    <a
                      href="#hackathons"
                      className="inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-[#efe9dd]/65 hover:text-[#efe9dd] transition-colors"
                    >
                      <span>SEE SIH DETAILS</span>
                      <span aria-hidden="true">&darr;</span>
                    </a>
                  )}
                </div>
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
                  className={`cert-card-bezel ${slotClass} ${noTrans} ${
                    slotClass === "cert-slot-active" ? "cursor-pointer" : ""
                  }`}
                  data-cert-id={cert.id}
                  onClick={() => {
                    if (slotClass === "cert-slot-active") {
                      setSelectedCertForModal(cert);
                    }
                  }}
                >
                  <div className="cert-card-screen">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
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
                <div className="pt-2 cert-row-stagger-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCertForModal(currentCert)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#efe9dd]/90 hover:text-[#efe9dd] transition-colors cursor-pointer"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                  {currentCert.id === "codechef-ml" && (
                    <a
                      href="https://www.codechef.com/certificates/verify"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-[#efe9dd]/65 hover:text-[#efe9dd] transition-colors"
                    >
                      <span>VERIFY ID: 9084558</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {currentCert.id === "sih-2025-finale" && (
                    <a
                      href="#hackathons"
                      className="inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-[#efe9dd]/65 hover:text-[#efe9dd] transition-colors"
                    >
                      <span>SEE SIH DETAILS</span>
                      <span aria-hidden="true">&darr;</span>
                    </a>
                  )}
                </div>
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

      {/* Lightbox Certificate Modal */}
      {selectedCertForModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertForModal.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
          onClick={() => setSelectedCertForModal(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-4xl w-full flex flex-col items-center bg-[#1c1b1a] border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-left">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#efe9dd] leading-snug">
                  {selectedCertForModal.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#efe9dd]/60 mt-0.5">
                  {selectedCertForModal.issuer} &bull; {selectedCertForModal.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertForModal(null)}
                aria-label="Close Certificate Preview"
                className="p-1.5 rounded-full text-[#efe9dd]/70 hover:text-[#efe9dd] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image Frame */}
            <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/40 p-1 sm:p-2">
              <img
                src={selectedCertForModal.image}
                alt={selectedCertForModal.title}
                className="max-h-[66vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Footer with verification link / open in new tab */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-white/10 text-xs">
              <span className="text-[#efe9dd]/70 text-[11px] sm:text-xs">
                Skills:{" "}
                <span className="text-[#efe9dd] font-medium">{selectedCertForModal.skills}</span>
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {selectedCertForModal.id === "codechef-ml" && (
                  <a
                    href="https://www.codechef.com/certificates/verify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#efe9dd] text-[11px] font-medium transition-colors"
                  >
                    <span>Verify ID: 9084558</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedCertForModal.image && (
                  <a
                    href={selectedCertForModal.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e0643a] hover:bg-[#e0643a]/90 text-white text-[11px] font-medium shadow-sm transition-colors"
                  >
                    <span>Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
