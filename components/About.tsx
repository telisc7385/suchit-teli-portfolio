'use client';

import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { useRef } from "react";

const education = [
  "MCA · Chandigarh University · 2023–2025",
  "BCA · KBC NMU · 2020–2023",
];

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8"
      >
        <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-[0_20px_80px_rgba(2,6,23,0.12)] backdrop-blur xl:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-accent">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Scalable product engineering with a backend-first mindset
          </h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Full-stack engineer with 2+ years of experience building scalable
            web apps, RESTful APIs, and AI-powered platforms. Currently
            building a multi-tenant RAG chatbot at Prominno Labs. Immediate
            joiner — open to opportunities.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm text-muted">
            <MapPin size={18} className="text-accent" />
            Pune, India
          </div>

          <div className="mt-8 grid gap-4">
            {education.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-4 text-sm text-foreground"
              >
                <GraduationCap size={18} className="text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex h-full min-h-80 w-full items-center justify-center rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent-soft via-surface to-background p-8 shadow-[0_20px_80px_rgba(26,86,219,0.18)]">
            <div className="flex h-56 w-56 items-center justify-center rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-[#1A56DB] to-[#7C3AED] text-5xl font-bold tracking-tight text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_48px_rgba(26,86,219,0.45),0_0_90px_rgba(124,58,237,0.22)]">
              ST
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
