import { ExternalLink, FileText, Github, Linkedin, Mail } from "lucide-react";

import contactAuroraBorder from "@/assets/contact-aurora-border.jpg";
import { TextReveal } from "@/components/TextReveal";
import { contactDetails } from "@/data/content";

export function Contact() {
  const tools = ["VS Code", "Git & GitHub", "Docker", "Postman", "Figma", "Android Studio"];

  const technologies = [
    "Python",
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Flutter & Dart",
    "FastAPI",
  ];

  const focusAreas = [
    "Prompt Engineering",
    "Generative AI",
    "Full-Stack Development",
    "AI Automation",
    "REST APIs & Python",
  ];

  const footerSocials = [
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
      label: "Resume",
      href: "/resume.pdf",
      icon: FileText,
    },
    {
      label: "Devpost",
      href: "https://devpost.com/aditigavsane?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      icon: ExternalLink,
    },
    {
      label: "Email",
      href: `mailto:${contactDetails.email}`,
      icon: Mail,
    },
  ];

  return (
    <section
      id="contact"
      className="dark relative w-full bg-[#060608] text-neutral-100 overflow-hidden border-t border-neutral-900 pt-2 pb-14"
    >
      {/* Chromatic Iridescent Ribbon Border directly at the top */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mb-6">
        {/* Ambient atmospheric dispersion glow */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[130%] h-48 opacity-60 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(56, 189, 248, 0.45), rgba(234, 179, 8, 0.35), rgba(244, 63, 94, 0.3), transparent 70%)",
          }}
        />
        {/* Ribbon wave image */}
        <img
          src={contactAuroraBorder}
          alt=""
          className="w-full h-24 sm:h-36 md:h-48 lg:h-56 object-cover object-top opacity-95"
        />
        {/* Subtle fade overlay into solid dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060608]/20 to-[#060608]" />
      </div>

      {/* 4 Columns */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <TextReveal as="p" delay={0} className="eyebrow mb-10 text-neutral-400">
          05 — Contact
        </TextReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Tools */}
          <TextReveal delay={80}>
            <h3 className="display italic text-2xl md:text-[1.75rem] text-white font-normal mb-5">
              Tools
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-neutral-400">
              {tools.map((item) => (
                <li key={item} className="hover:text-neutral-200 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </TextReveal>

          {/* Column 2: Technology */}
          <TextReveal delay={160}>
            <h3 className="display italic text-2xl md:text-[1.75rem] text-white font-normal mb-5">
              Technology
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-neutral-400">
              {technologies.map((item) => (
                <li key={item} className="hover:text-neutral-200 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </TextReveal>

          {/* Column 3: Focus Areas */}
          <TextReveal delay={240}>
            <h3 className="display italic text-2xl md:text-[1.75rem] text-white font-normal mb-5">
              Focus Areas
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-neutral-400">
              {focusAreas.map((area) => (
                <li key={area} className="hover:text-neutral-200 transition-colors">
                  {area}
                </li>
              ))}
            </ul>
          </TextReveal>

          {/* Column 4: Contact (Aditi's Details) */}
          <TextReveal delay={320}>
            <h3 className="display italic text-2xl md:text-[1.75rem] text-white font-normal mb-5">
              Contact
            </h3>
            <div className="space-y-3 text-sm md:text-base">
              <div>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-neutral-300 hover:text-white transition-colors underline-offset-4 hover:underline break-all"
                >
                  {contactDetails.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {contactDetails.phone}
                </a>
              </div>
              <div className="text-neutral-400">{contactDetails.address}</div>
            </div>
          </TextReveal>
        </div>

        {/* Bottom Bar with Copyright, Prominent Socials with Logos, and Action Pill */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <TextReveal as="p" delay={80} className="eyebrow text-neutral-500 shrink-0">
            &copy; {new Date().getFullYear()} Aditi Gavasane
          </TextReveal>

          {/* Prominent Socials & Resume with Logos */}
          <TextReveal
            delay={160}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            {footerSocials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2.5 rounded-lg px-3.5 py-2 text-sm md:text-base font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </TextReveal>

          <TextReveal delay={240}>
            <a
              href="#top"
              className="shrink-0 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white transition-all shadow-sm hover:border-neutral-500"
            >
              Back to top &uarr;
            </a>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
