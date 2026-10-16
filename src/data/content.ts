import { ExternalLink, Github, Linkedin } from "lucide-react";

import projectPhone from "@/assets/project-dark-phone.jpg";
import sih1 from "@/assets/SIH-1.jpeg";
import sih2 from "@/assets/SIH-2.jpeg";
import sih3 from "@/assets/SIH-3.jpeg";
import sih4 from "@/assets/SIH-4.jpeg";
import sih5 from "@/assets/SIH-5.png";
import sih6 from "@/assets/SIH-6.png";

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "10+", label: "Projects built" },
  { value: "2", label: "Research papers" },
  { value: "10+", label: "Hackathons" },
];

export const certifications = [
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

export const contactDetails = {
  email: "aditigavsane@gmail.com",
  phone: "+91 88560 11818",
  address: "Maharashtra, India",
};

export const socials = [
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

export const projects: ProjectItem[] = [
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

export const featuredProjectCount = 3;

export const gallery = [
  { src: sih1, caption: "Team with mentors at SIH 2025" },
  { src: sih2, caption: "Team Travion at the booth" },
  { src: sih3, caption: "Judging round" },
  { src: sih4, caption: "Grand finale portrait" },
  { src: sih5, caption: "Working through the night" },
  { src: sih6, caption: "SIH 2025 moments" },
];
