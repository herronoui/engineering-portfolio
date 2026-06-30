"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm md:items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface-elevated p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs text-accent">{project.period}</p>
            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-1 text-muted">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border p-2 text-muted hover:text-foreground"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <p className="mt-6 leading-relaxed text-muted">{project.summary}</p>

        {project.metrics && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <p className="font-mono text-xs text-accent">{metric.label}</p>
                <p className="mt-1 text-sm font-medium">{metric.value}</p>
              </div>
            ))}
          </div>
        )}

        <ul className="mt-6 space-y-3">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "All"
  >("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const filters: (ProjectCategory | "All")[] = ["All", ...projectCategories];

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Selected engineering work
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Click a project to explore the full story — from hardware integration
          to estimation algorithms.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveCategory(filter)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all ${
                activeCategory === filter
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-accent/30 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                layout
                key={project.id}
                type="button"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelected(project)}
                className="card-glow group overflow-hidden rounded-2xl border border-border bg-surface text-left"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-elevated">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-medium group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>

                <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
