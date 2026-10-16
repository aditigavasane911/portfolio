import { useHydrated } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

import { TextReveal } from "@/components/TextReveal";

const FEEDBACK_COUNT_KEY = "aditi-portfolio-feedback-count";

export function FeedbackForm() {
  const hydrated = useHydrated();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const readCount = () => {
      const raw = window.localStorage.getItem(FEEDBACK_COUNT_KEY);
      setCount(raw ? Number(raw) || 0 : 0);
    };
    readCount();
    window.addEventListener("storage", readCount);
    return () => window.removeEventListener("storage", readCount);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!rating) return;

    const nextCount = count + 1;
    setCount(nextCount);
    window.localStorage.setItem(FEEDBACK_COUNT_KEY, String(nextCount));

    setRating(0);
    setHover(0);
    setFeedback("");
    setFlash(true);
    window.setTimeout(() => setFlash(false), 2400);
  };

  return (
    <form onSubmit={handleSubmit} className="border border-border p-6 md:p-8">
      <TextReveal as="p" delay={0} className="eyebrow">
        Feedback
      </TextReveal>
      <TextReveal as="h3" delay={90} className="display mt-3 text-2xl">
        How was your visit?
      </TextReveal>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-xs tabular-nums text-muted-foreground">({hydrated ? count : 0})</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            aria-label={`Rate ${star} out of 5`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="text-2xl leading-none transition-colors"
          >
            <span className={(hover || rating) >= star ? "text-foreground" : "text-border"}>★</span>
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
