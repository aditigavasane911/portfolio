import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useHydrated } from "@tanstack/react-router";

import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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

const projects = [
  {
    tags: "Generative AI · Prompt Engineering",
    title: "AI Prompt Optimization Toolkit",
    body: "A tested library of prompt templates for stronger, more reliable LLM output across leading AI platforms.",
  },
  {
    tags: "AI Product · Python · JavaScript",
    title: "Travon — AI Tour Management",
    body: "A smart tour platform concept with live tracking, safety alerts, an admin dashboard, and AI-powered planning workflows.",
  },
  {
    tags: "Full-Stack · React · MongoDB",
    title: "MAP — Social Media Platform",
    body: "A real-time social platform with secure authentication, profiles, feeds, and a full-stack React, Node.js, and MongoDB build.",
  },
  {
    tags: "AI · LLMs · RAG",
    title: "Multi-Agent Research Assistant",
    body: "A multi-agent system built on LLMs and RAG that retrieves, synthesizes, and cites source material for research tasks.",
  },
  {
    tags: "AI Assistant · Copilot",
    title: "In-App AI Copilot",
    body: "Context-aware AI assistance embedded in a web app, answering user questions and taking actions on their behalf.",
  },
  {
    tags: "ML · Open Source",
    title: "Open Source ML Toolkit",
    body: "Contributions to open source ML tooling — bug fixes, docs, and small features shipped to upstream repos.",
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
          <a href="#top" className="group flex items-center gap-3">
            <img
              src="/favicon-32x32.png"
              alt="Aditi Gavasane logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
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
  const shown = expanded ? projects : projects.slice(0, featuredCount);

  return (
    <section id="work" className="w-full px-6 pb-24 md:px-12 lg:px-20 md:pb-32">
      <p className="eyebrow mb-12">02 — Selected Work</p>
      <div className="grid gap-6 md:grid-cols-3">
        {shown.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col border border-border bg-secondary transition-colors hover:border-foreground"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={projectPhone}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="eyebrow">{p.tags}</p>
              <h2 className="display mt-2 text-xl md:text-[1.35rem]">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
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
    </section>
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
