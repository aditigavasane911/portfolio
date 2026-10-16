import { gallery } from "@/data/content";

export function Hackathon() {
  return (
    <section id="hackathons" className="overflow-hidden pt-24 md:pt-32 pb-28 md:pb-36">
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
          management system for large-scale religious gatherings in India. I contributed to product
          design, backend development, and AI-driven features focused on real-time tracking, safety
          alerts, and crowd management. The competition was organized by the{" "}
          <strong className="font-semibold">
            Ministry of Education&rsquo;s Innovation Cell (MIC)
          </strong>{" "}
          and <strong className="font-semibold">AICTE</strong> under the Ministry of Education,
          Government of India.
        </p>
      </div>
    </section>
  );
}
