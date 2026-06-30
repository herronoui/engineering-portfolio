"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Research & industry roles
        </h2>

        <div className="relative mt-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="hidden md:block" />
                <div className="relative rounded-2xl border border-border bg-surface p-6 md:ml-0">
                  <span className="absolute -left-[9px] top-7 hidden h-4 w-4 rounded-full border-2 border-accent bg-background md:block md:left-auto md:right-[calc(100%+1.35rem)] md:top-8" />
                  <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full border-2 border-accent bg-background md:hidden" />

                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h3 className="mt-2 text-lg font-medium">{item.role}</h3>
                  <p className="text-sm text-muted">{item.org}</p>

                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 40)}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dim" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
