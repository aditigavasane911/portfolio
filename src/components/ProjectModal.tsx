import { CheckCircle2, ChevronLeft, ChevronRight, Github, Globe, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import projectPhone from "@/assets/project-dark-phone.jpg";
import { type ProjectItem } from "@/data/content";

type ProjectModalProps = {
  project: ProjectItem;
  onClose: () => void;
};

function ModalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 border-t border-border pt-5">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-background/80 p-3 backdrop-blur-md sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative my-auto flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden border border-border bg-card shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition-all hover:scale-105 hover:bg-secondary"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col border-b border-border bg-secondary/30 p-5 md:w-[50%] md:border-b-0 md:border-r md:p-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-secondary">
            <img
              src={project.images[activeImageIndex] || projectPhone}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="h-full w-full object-cover transition-all duration-300"
            />

            <div className="absolute bottom-3 right-3 rounded border border-border/50 bg-background/90 px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-foreground backdrop-blur">
              {activeImageIndex + 1} / {project.images.length}
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous picture"
                  className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground backdrop-blur transition-transform hover:scale-110"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next picture"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground backdrop-blur transition-transform hover:scale-110"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>

          {project.images.length > 1 && (
            <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative aspect-square h-16 w-16 shrink-0 overflow-hidden border transition-all ${
                    index === activeImageIndex
                      ? "scale-105 border-foreground ring-2 ring-foreground/25"
                      : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Tap thumbnail or arrows to view all project pictures
          </p>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
          <p className="eyebrow">{project.tags}</p>
          <h2 id="modal-project-title" className="display mt-2 text-2xl md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.body}</p>

          <ModalSection title="Overview & Solution">
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">{project.overview}</p>
          </ModalSection>

          {project.features.length > 0 && (
            <ModalSection title="Key Highlights">
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ModalSection>
          )}

          {project.techStack.length > 0 && (
            <ModalSection title="Technologies & Tools">
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border bg-secondary/80 px-2.5 py-1 text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ModalSection>
          )}

          {project.role && (
            <div className="mt-5 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Role: </span>
              {project.role}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-w-[150px] flex-1 items-center justify-center gap-2 bg-foreground px-5 py-3 text-xs font-medium tracking-wide text-background transition-opacity hover:opacity-85"
              >
                <Globe className="h-4 w-4" />
                Live Deployed Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-xs font-medium tracking-wide text-foreground transition-colors hover:border-foreground hover:bg-secondary"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
