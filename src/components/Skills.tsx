"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function Skills() {
  const [active, setActive] = useState(0);
  const categories = profile.skills;

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">Skills</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Technical toolkit
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {categories.map((cat, index) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActive(index)}
                className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm transition-all lg:w-full ${
                  active === index
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8"
          >
            <h3 className="font-mono text-sm text-accent">
              {categories[active].category}
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {categories[active].items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-border bg-surface-elevated px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
