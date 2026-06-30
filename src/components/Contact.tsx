"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <p className="section-label">Contact</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Open to research collaborations, internships, and graduate programs.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            {profile.availability}. Reach out if you&apos;d like to talk about
            robotics, soft actuation, or mechanical design.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              Email me
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent/40"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent/40"
            >
              LinkedIn
              <ArrowUpRight size={16} />
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
      </div>
    </section>
  );
}
