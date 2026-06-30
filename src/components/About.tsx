"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">About</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Building physical systems from sketch to validated experiment.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Education
            </p>
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-medium">{profile.education.school}</h3>
                <p className="text-muted">{profile.education.degrees}</p>
              </div>
              <p className="font-mono text-sm text-muted">
                {profile.education.expected}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
