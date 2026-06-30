"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent pulse-dot" />
            {profile.availability}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <Mail size={15} className="text-accent" />
              {profile.email}
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <Github size={15} className="text-accent" />
              {profile.github}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
              <MapPin size={15} className="text-accent" />
              {profile.location}
            </span>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent/40"
            >
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              download="Herron_Nguyen_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent/40"
            >
              <Download size={16} className="text-accent" />
              Download resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Focus", value: "Soft robotics & control" },
            { label: "Lab", value: "Stanford CHARM" },
            { label: "Graduation", value: "Winter 2027" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-foreground">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
