import aboutImage from "@/assets/about-photo.png";
import { TextReveal } from "@/components/TextReveal";
import { stats } from "@/data/content";

export function About() {
  return (
    <section id="about" className="w-full px-6 py-20 md:px-12 lg:px-20 md:py-28">
      <TextReveal as="p" delay={0} className="eyebrow mb-8">
        01 — About
      </TextReveal>
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <div>
          <TextReveal
            delay={80}
            className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-secondary"
          >
            <img
              src={aboutImage}
              alt="Aditi Anil Gavasane"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </TextReveal>
        </div>

        <div className="flex flex-col justify-center">
          <TextReveal
            as="p"
            delay={120}
            className="text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            I am a Final year B.Tech student in Computer Science and Engineering. I have been
            working with more than 10 projects, I have experience of freelancing, worked as an open
            source contributor. I created websites and deployed them. I worked on real world
            problems and provided solutions by software and services. I did work on multiple AI & ML
            projects, dealing with LLMs, RAG, Multi-Agent Systems, AI assistance, and Copilot.
          </TextReveal>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <TextReveal key={stat.label} delay={200 + i * 80}>
                <p className="display text-3xl">{stat.value}</p>
                <p className="eyebrow mt-2">{stat.label}</p>
              </TextReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
