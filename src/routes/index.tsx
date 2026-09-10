import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useHydrated } from "@tanstack/react-router";

import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import projectPhone from "@/assets/project-dark-phone.jpg";
// Placeholder until Aditi shares the real About photo; swap the import to her image.
import aboutImage from "@/assets/project-dark-phone.jpg";
import sih1 from "@/assets/SIH-1.jpeg";
import sih2 from "@/assets/SIH-2.jpeg";
import sih3 from "@/assets/SIH-3.jpeg";
import sih4 from "@/assets/SIH-4.jpeg";
import sih5 from "@/assets/SIH-5.png";
import sih6 from "@/assets/SIH-6.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditi Gavasane — Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Aditi Gavasane: prompt engineering, AI products, and full-stack web engineering with Python, React, and REST APIs.",
      },
      { property: "og:title", content: "Aditi Gavasane — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Prompt engineering, AI product work, and full-stack builds across Python, JavaScript, React, and REST APIs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "10+", label: "Projects built" },
  { value: "2", label: "Research papers" },
  { value: "10+", label: "Hackathons" },
];

const certifications = [
  {
    title: "Certificate title here",
    issuer: "Issued by — add issuer name",
    year: "YYYY",
    image: projectPhone,
  },
  {
    title: "Certificate title here",
    issuer: "Issued by — add issuer name",
    year: "YYYY",
    image: projectPhone,
  },
  {
    title: "Certificate title here",
    issuer: "Issued by — add issuer name",
    year: "YYYY",
    image: projectPhone,
  },
];

const contactDetails = {
  email: "aditigavsane@gmail.com",
  phone: "+91 88560 11818",
  address: "Maharashtra, India",
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditi-gavasane-126b1232b/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/aditigavasane911",
    icon: Github,
  },
  {
    label: "Devpost",
    href: "https://devpost.com/aditigavsane?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    icon: ExternalLink,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: ExternalLink,
  },
];

export interface ProjectItem {
  id: string;
  tags: string;
  title: string;
  body: string;
  overview: string;
  features: string[];
  techStack: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
}

const projects: ProjectItem[] = [
  {
    id: "ai-prompt-toolkit",
    tags: "Generative AI · Prompt Engineering",
    title: "AI Prompt Optimization Toolkit",
    body: "A tested library of prompt templates for stronger, more reliable LLM output across leading AI platforms.",
    overview:
      "An end-to-end prompt engineering framework that evaluates, benchmarks, and optimizes prompt variations across major LLMs (GPT-4, Claude 3.5, Gemini). Enforces deterministic structured output, prevents hallucinations, and reduces token overhead for production LLM systems.",
    features: [
      "Dynamic prompt templating with variable interpolation and system role tuning",
      "Automated evaluation benchmark suites for output reliability and correctness",
      "Metrics tracking for token usage, latency optimization, and cost savings",
      "Direct code template exports to Python, TypeScript, and REST APIs",
    ],
    techStack: ["Python", "OpenAI API", "LangChain", "FastAPI", "React", "Tailwind CSS"],
    images: [projectPhone, sih3, sih5],
    liveUrl: "https://github.com/aditigavasane911",
    githubUrl: "https://github.com/aditigavasane911",
    role: "Lead Prompt Engineer & System Architect",
  },
  {
    id: "travon-ai",
    tags: "AI Product · Python · JavaScript",
    title: "Travon — AI Tour Management",
    body: "A smart tour platform concept with live tracking, safety alerts, an admin dashboard, and AI-powered planning workflows.",
    overview:
      "Built as our Smart India Hackathon 2025 Grand Finale project under the Ministry of Education. Travon is an AI-driven pilgrim and tourist crowd management platform built to prevent stampedes and ensure real-time security at India's highest-density gatherings, featuring live geospatial crowd tracking, SOS distress broadcasting, and autonomous AI queue dispatch.",
    features: [
      "Real-time GPS crowd density heatmap and intelligent detour routing",
      "One-tap emergency SOS distress beacon broadcasted to emergency responders",
      "AI-driven dynamic itinerary scheduling and pilgrim queue management",
      "Comprehensive administration dashboard for city authorities and disaster response",
    ],
    techStack: [
      "Python",
      "React",
      "Node.js",
      "Leaflet / Maps API",
      "FastAPI",
      "MongoDB",
      "Tailwind CSS",
    ],
    images: [projectPhone, sih2, sih1, sih4],
    liveUrl: "https://github.com/aditigavasane911",
    githubUrl: "https://github.com/aditigavasane911",
    role: "Product Designer, Backend & AI Developer",
  },
  {
    id: "map-social",
    tags: "Full-Stack · React · MongoDB",
    title: "MAP — Social Media Platform",
    body: "A real-time social platform with secure authentication, profiles, feeds, and a full-stack React, Node.js, and MongoDB build.",
    overview:
      "A feature-rich social media networking application designed with real-time interactivity at its core. Features authenticated user profiles, multimedia sharing, interactive post discussions, and dynamic social feeds built on modern full-stack web standards.",
    features: [
      "Secure JWT user authentication, session control, and personal profiles",
      "Multimedia post authoring with instant liking, bookmarking, and nested comments",
      "Live notifications for social activity and connection requests",
      "Responsive editorial layout with fluid micro-interactions and dark mode",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
    images: [projectPhone, sih4, sih6],
    liveUrl: "https://github.com/aditigavasane911",
    githubUrl: "https://github.com/aditigavasane911",
    role: "Full-Stack Web Developer",
  },
  {
    id: "multi-agent-research",
    tags: "AI · LLMs · RAG",
    title: "Multi-Agent Research Assistant",
    body: "A multi-agent system built on LLMs and RAG that retrieves, synthesizes, and cites source material for research tasks.",
    overview:
      "An autonomous multi-agent research workflow where collaborative AI agents (Planner, Deep Researcher, and Synthesizer) parse academic papers, query vector indexes, cross-verify empirical claims, and generate synthesized literature reviews with traceable citations.",
    features: [
      "Collaborative multi-agent state orchestration using LangGraph",
      "Hybrid dense and sparse vector retrieval (RAG) for deep document synthesis",
      "Automated factual verification and source citation generation",
      "Exportable formatted research briefs in Markdown and PDF formats",
    ],
    techStack: ["Python", "LangGraph", "ChromaDB", "LlamaIndex", "OpenAI API", "FastAPI"],
    images: [projectPhone, sih5, sih1],
    liveUrl: "https://github.com/aditigavasane911",
    githubUrl: "https://github.com/aditigavasane911",
    role: "AI & RAG Pipeline Developer",
  },
  {
    id: "in-app-copilot",
    tags: "AI Assistant · Copilot",
    title: "In-App AI Copilot",
    body: "Context-aware AI assistance embedded in a web app, answering user questions and taking actions on their behalf.",
    overview:
      "An intelligent in-app companion widget embedded into web applications. Capable of understanding on-screen UI context, guiding users through complex flows, answering application-specific queries, and executing safe parameterized actions on the user's behalf.",
    features: [
      "Real-time DOM context extraction for situated conversational understanding",
      "Structured function-calling to automate multi-step user interface workflows",
      "Streaming markdown output with low-latency server-sent events",
      "Client-side session memory preserving local context across views",
    ],
    techStack: ["TypeScript", "React", "OpenAI SDK", "Tailwind CSS", "WebSockets"],
    images: [projectPhone, sih3, sih2],
    liveUrl: "https://github.com/aditigavasane911",
    githubUrl: "https://github.com/aditigavasane911",
    role: "Frontend & AI Integration Engineer",
  },
  {
    id: "open-source-ml",
    tags: "ML · Open Source",
    title: "Open Source ML Toolkit",
    body: "Contributions to open source ML tooling — bug fixes, docs, and small features shipped to upstream repos.",
    overview:
      "Active open-source contributions focusing on developer experience in machine learning pipelines, including optimized batch tensor loaders, GPU memory benchmark utilities, regression test suites, and interactive developer guides.",
    features: [
      "Batch data processing performance enhancements with parallel multi-threading",
      "Extensive tutorial guides and runnable code examples for new contributors",
      "Comprehensive unit test coverage and automated GitHub Actions CI pipelines",
      "Community issue triage and prompt bug resolution",
    ],
    techStack: ["Python", "PyTorch", "NumPy", "Git", "GitHub Actions", "Sphinx"],
    images: [projectPhone, sih6, sih4],
    liveUrl: "https://github.com/aditigavasane911",
    githubUrl: "https://github.com/aditigavasane911",
    role: "Open Source Contributor",
  },
];

const featuredCount = 3;

const gallery = [
  { src: sih1, caption: "Team with mentors at SIH 2025" },
  { src: sih2, caption: "Team Travion at the booth" },
  { src: sih3, caption: "Judging round" },
  { src: sih4, caption: "Grand finale portrait" },
  { src: sih5, caption: "Working through the night" },
  { src: sih6, caption: "SIH 2025 moments" },
];

function Portfolio() {
  return (
    <main id="top" className="min-h-screen scroll-smooth bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          <a href="#top" className="group flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white shadow-xs transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Aditi Gavasane logo"
                width={40}
                height={40}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <span className="eyebrow text-foreground">Aditi Gavasane</span>
          </a>
          <nav className="flex items-center gap-4 md:gap-6">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
              >
                {n.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* 00 — Hero */}
      <section className="flex min-h-[calc(100svh-81px)] items-center justify-center px-6 py-20 md:px-12 lg:px-20">
        <div className="rise mx-auto w-full text-center">
          <p className="eyebrow leading-relaxed">
            Prompt Engineer · Generative AI · Full-Stack Developer · Freelancer · Mobile Software
            Developer
          </p>
          <h1 className="display mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Aditi Anil Gavasane
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A stubborn student with huge interest in building things with code, thoughts and
            knowledge. I love learning, communicating and confidently representing myself. I believe
            hard work is the key, while smart work is the passkey; carry both.
          </p>
        </div>
      </section>

      {/* 01 — About */}
      <section id="about" className="w-full px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <p className="eyebrow mb-8">01 — About</p>
        <div className="rise grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <div className="order-1 md:order-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-secondary">
              <img
                src={aboutImage}
                alt="Aditi Anil Gavasane"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-2 md:order-2 flex flex-col justify-center">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              I am a Final year B.Tech student in Computer Science and Engineering. I have been
              working with more than 10 projects, I have experience of freelancing, worked as an
              open source contributor. I created websites and deployed them. I worked on real world
              problems and provided solutions by software and services. I did work on multiple AI &
              ML projects, dealing with LLMs, RAG, Multi-Agent Systems, AI assistance, and Copilot.
            </p>

            <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-3xl">{s.value}</p>
                  <p className="eyebrow mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Selected work */}
      <SelectedWork />

      {/* 03 — Certifications */}
      <section id="certifications" className="w-full px-6 pb-24 md:px-12 lg:px-20 md:pb-32">
        <p className="eyebrow mb-6">03 — Certifications</p>
        <h2 className="display max-w-2xl text-3xl md:text-[2.6rem]">
          Certifications I have earned along the way.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {certifications.map((c) => (
            <article
              key={c.title + c.issuer}
              className="group flex flex-col border border-border bg-secondary transition-colors hover:border-foreground"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={c.image}
                  alt={`Certificate — ${c.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="display text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="eyebrow mt-3">{c.year}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">More certificates coming soon.</p>
      </section>

      {/* 04 — Hackathon */}
      <section id="hackathons" className="overflow-hidden py-8 pb-28 md:pb-36">
        <div className="mb-10 flex w-full flex-col gap-4 px-6 md:flex-row md:items-end md:justify-between md:px-12 lg:px-20">
          <p className="eyebrow">04 — National Level Hackathon</p>

          <h2 className="display text-3xl md:text-[2.6rem]">SIH Grand Finale 2025</h2>
        </div>

        <div className="relative">
          <div className="marquee-track gap-4">
            {[...gallery, ...gallery].map((item, i) => (
              <img
                key={`${item.caption}-${i}`}
                src={item.src}
                alt={`SIH Grand Finale 2025 — ${item.caption}`}
                loading="lazy"
                width={900}
                height={1100}
                className="h-64 w-56 shrink-0 cursor-pointer object-cover transition-transform duration-300 hover:scale-[1.02] md:h-72 md:w-64"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 w-full px-6 md:px-12 lg:px-20">
          <p className="display max-w-2xl text-base leading-relaxed md:text-lg">
            Selected as a{" "}
            <strong className="font-semibold">Smart India Hackathon 2025 Grand Finale</strong> team,
            where we built <strong className="font-semibold">Travon</strong>, an AI-powered pilgrim
            management system for large-scale religious gatherings in India. I contributed to
            product design, backend development, and AI-driven features focused on real-time
            tracking, safety alerts, and crowd management. The competition was organized by the{" "}
            <strong className="font-semibold">
              Ministry of Education&rsquo;s Innovation Cell (MIC)
            </strong>{" "}
            and <strong className="font-semibold">AICTE</strong> under the Ministry of Education,
            Government of India.
          </p>
        </div>
      </section>

      {/* 05 — Contact */}
      <section id="contact" className="border-t border-border">
        <div className="grid w-full gap-14 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20 md:py-28">
          <div>
            <p className="eyebrow mb-6">05 — Contact & Connect</p>
            <h2 className="display max-w-lg text-3xl md:text-[2.6rem]">
              Let&rsquo;s build something thoughtful together.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Open to opportunities, collaborations, and conversations. Reach out directly or connect across platforms.
            </p>

            {/* Direct Contact Channels */}
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contactDetails.email}`}
                className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-muted-foreground md:text-base"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-foreground group-hover:bg-secondary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-widest text-muted-foreground">Email</p>
                  <span className="underline underline-offset-4">{contactDetails.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-muted-foreground md:text-base"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-foreground group-hover:bg-secondary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-widest text-muted-foreground">Phone</p>
                  <span>{contactDetails.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm text-foreground md:text-base">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-widest text-muted-foreground">Address / Location</p>
                  <span className="text-muted-foreground">{contactDetails.address}</span>
                </div>
              </div>
            </div>

            {/* Social / Developer Links */}
            <div className="mt-10">
              <p className="eyebrow mb-4">Profiles & Links</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 border border-border px-4 py-2.5 text-xs tracking-wide text-foreground transition-all hover:border-foreground hover:bg-secondary"
                    >
                      <Icon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <FeedbackForm />
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border px-6 py-8 md:flex-row md:items-center md:px-12 lg:px-20">
          <p className="eyebrow">© {new Date().getFullYear()} Aditi Gavasane</p>
          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
            {socials
              .filter((s) => s.label !== "Resume")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            <a
              href={`mailto:${contactDetails.email}`}
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SelectedWork() {
  const [expanded, setExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const shown = expanded ? projects : projects.slice(0, featuredCount);

  return (
    <section id="work" className="w-full px-6 pb-24 md:px-12 lg:px-20 md:pb-32">
      {/* Constrained container for ideal card widths */}
      <div className="max-w-6xl">
        <p className="eyebrow mb-12">02 — Selected Work</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article
              key={p.title}
              onClick={() => setActiveProject(p)}
              className="group flex cursor-pointer flex-col border border-border bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.images[0] || projectPhone}
                  alt={p.title}
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
                <p className="eyebrow">{p.tags}</p>
                <h2 className="display mt-2 text-xl md:text-[1.35rem]">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {p.images.length} {p.images.length === 1 ? "picture" : "pictures"}
                  </span>
                  <span className="font-medium text-foreground underline underline-offset-4 transition-opacity group-hover:opacity-75">
                    Open Project &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > featuredCount && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
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

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll while modal is active
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
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition-all hover:scale-105 hover:bg-secondary"
        >
          <X className="h-4 w-4" />
        </button>

        {/* LEFT: Shopping App Style Picture Gallery */}
        <div className="flex flex-col border-b border-border bg-secondary/30 p-5 md:w-[50%] md:border-b-0 md:border-r md:p-7">
          {/* Main Large Picture Display */}
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-secondary">
            <img
              src={project.images[activeImageIndex] || projectPhone}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="h-full w-full object-cover transition-all duration-300"
            />

            {/* Picture Counter */}
            <div className="absolute bottom-3 right-3 rounded border border-border/50 bg-background/90 px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-foreground backdrop-blur">
              {activeImageIndex + 1} / {project.images.length}
            </div>

            {/* Navigation Arrows for Multiple Images */}
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

          {/* Clickable Picture Thumbnails */}
          {project.images.length > 1 && (
            <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square h-16 w-16 shrink-0 overflow-hidden border transition-all ${
                    idx === activeImageIndex
                      ? "scale-105 border-foreground ring-2 ring-foreground/25"
                      : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
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

        {/* RIGHT: Detailed Information & Live Links */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
          <p className="eyebrow">{project.tags}</p>
          <h2 id="modal-project-title" className="display mt-2 text-2xl md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.body}</p>

          {/* Detailed Overview */}
          <div className="mt-6 border-t border-border pt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Overview & Solution
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">{project.overview}</p>
          </div>

          {/* Key Features List */}
          {project.features && project.features.length > 0 && (
            <div className="mt-6 border-t border-border pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key Highlights
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-6 border-t border-border pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies & Tools
              </h3>
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
            </div>
          )}

          {/* Role / Contribution */}
          {project.role && (
            <div className="mt-5 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Role: </span>
              {project.role}
            </div>
          )}

          {/* CTA Action Buttons */}
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

const FEEDBACK_COUNT_KEY = "aditi-portfolio-feedback-count";

function FeedbackForm() {
  const hydrated = useHydrated();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);
  const [flash, setFlash] = useState(false);

  // Read persisted count once after hydration, and keep it in sync across tabs.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const read = () => {
      const raw = window.localStorage.getItem(FEEDBACK_COUNT_KEY);
      setCount(raw ? Number(raw) || 0 : 0);
    };
    read();
    window.addEventListener("storage", read);
    return () => window.removeEventListener("storage", read);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) return;
    const next = count + 1;
    setCount(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(FEEDBACK_COUNT_KEY, String(next));
    }
    // Reset the form to empty so it's ready for another submission.
    setRating(0);
    setHover(0);
    setFeedback("");
    setFlash(true);
    window.setTimeout(() => setFlash(false), 2400);
  };

  return (
    <form onSubmit={submit} className="border border-border p-6 md:p-8">
      <p className="eyebrow">Feedback</p>
      <h3 className="display mt-3 text-2xl">How was your visit?</h3>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-xs tabular-nums text-muted-foreground">({hydrated ? count : 0})</span>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`Rate ${n} out of 5`}
            onClick={() => setRating(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            className="text-2xl leading-none transition-colors"
          >
            <span className={(hover || rating) >= n ? "text-foreground" : "text-border"}>★</span>
          </button>
        ))}
        <span className="ml-2 text-xs text-muted-foreground">
          {rating ? `${rating}/5` : "Tap a star"}
        </span>
      </div>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows={4}
        placeholder="Share a thought, an idea, or a project brief…"
        className="mt-6 w-full resize-none border border-border bg-transparent p-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground"
      />

      <button
        type="submit"
        disabled={!rating}
        className="mt-5 inline-flex items-center gap-3 bg-foreground px-5 py-3 text-xs tracking-wide text-background transition-opacity hover:opacity-85 disabled:opacity-40"
      >
        Send feedback <span aria-hidden="true">&rarr;</span>
      </button>

      <div className="mt-6 border-t border-border pt-4">
        {flash && (
          <p className="text-sm text-muted-foreground">Thank you — your feedback has been noted.</p>
        )}
        <p className="eyebrow">
          {hydrated
            ? `${count} feedback ${count === 1 ? "rating" : "ratings"} given`
            : "0 feedback ratings given"}
        </p>
      </div>
    </form>
  );
}
