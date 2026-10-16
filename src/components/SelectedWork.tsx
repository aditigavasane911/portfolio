import { ExternalLink } from "lucide-react";
import { useState } from "react";

import projectPhone from "@/assets/project-dark-phone.jpg";
import { ProjectModal } from "@/components/ProjectModal";
import { featuredProjectCount, projects, type ProjectItem } from "@/data/content";

export function SelectedWork() {
  const [expanded, setExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const visibleProjects = expanded ? projects : projects.slice(0, featuredProjectCount);

  return (
    <section id="work" className="w-full px-6 pb-24 md:px-12 lg:px-20 md:pb-32">
      <div className="max-w-6xl">
        <p className="eyebrow mb-12">02 — Selected Work</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              onClick={() => setActiveProject(project)}
              className="group flex cursor-pointer flex-col border border-border bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.images[0] || projectPhone}
                  alt={project.title}
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-300 group-hover:bg-background/25">
                  <span className="flex translate-y-2 items-center gap-1.5 border border-border bg-background/95 px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Details & Gallery <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow">{project.tags}</p>
                <h2 className="display mt-2 text-xl md:text-[1.35rem]">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.body}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {project.images.length} {project.images.length === 1 ? "picture" : "pictures"}
                  </span>
                  <span className="font-medium text-foreground underline underline-offset-4 transition-opacity group-hover:opacity-75">
                    Open Project &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > featuredProjectCount && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-10 inline-flex items-center gap-2 border border-border px-5 py-3 text-xs tracking-wide text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {expanded ? "See less" : "See more"}
            <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
          </button>
        )}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
