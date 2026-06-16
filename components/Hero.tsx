"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const resumeHref = "/Suchit_Teli_Full_Stack_Engineer.pdf";

export default function Hero() {
  const handleResumeClick = () => {
    window.open(resumeHref, "_blank", "noopener,noreferrer");

    const link = document.createElement("a");
    link.href = resumeHref;
    link.download = "Suchit_Teli_Full_Stack_Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-float-pulse absolute left-1/2 top-20 h-72 w-72 -translate-x-[58%] rounded-full bg-[radial-gradient(circle,_rgba(26,86,219,0.42)_0%,_rgba(124,58,237,0.24)_45%,_transparent_78%)] opacity-95 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="animate-float-blob-delayed absolute left-1/2 top-28 h-64 w-64 -translate-x-[12%] rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.34)_0%,_rgba(26,86,219,0.18)_48%,_transparent_76%)] opacity-80 blur-3xl sm:h-80 sm:w-80" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-18 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm text-success">
            <span className="h-2.5 w-2.5 rounded-full bg-success animate-pulse" />
            Immediate Joiner
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-accent">
            Full-Stack & Backend Engineer
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Suchit Teli
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-800 dark:text-slate-300 sm:text-xl">
            Full-Stack & Backend Engineer | Node.js · Next.js · RAG/AI
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700 dark:text-slate-400">
            Building scalable apps · RAG/AI systems · Immediate Joiner
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:bg-[#1648b6]"
            >
              View My Work
              <ArrowRight size={17} />
            </a>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleResumeClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition hover:translate-y-[-1px] hover:border-accent/40 hover:text-accent"
              >
                Download Resume
                <Download size={17} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
