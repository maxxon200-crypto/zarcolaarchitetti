"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { projectCopy, type Project } from "@/lib/projects";

const OVERLAY_GRADIENT =
  "linear-gradient(to top, rgba(26,26,24,0.80) 0%, rgba(26,26,24,0.28) 46%, rgba(26,26,24,0) 78%)";

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const copy = projectCopy(project, lang);
  const isFull = project.span === "full";

  const sizes = isFull
    ? "(min-width: 1024px) 1360px, (min-width: 768px) 92vw, 100vw"
    : "(min-width: 1024px) 680px, (min-width: 768px) 46vw, 100vw";

  return (
    <Reveal
      as="figure"
      className={`group ${isFull ? "md:col-span-2" : "md:col-span-1"}`}
    >
      <div
        className={`relative overflow-hidden bg-bone ${
          isFull ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={project.src}
          alt={copy.caption}
          fill
          sizes={sizes}
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL={project.blurDataURL}
          className="object-cover transition-transform duration-[900ms] ease-editorial will-change-transform group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* Desktop: description reveals on hover over the photograph. */}
        <figcaption
          className="absolute inset-0 hidden items-end p-6 opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100 motion-reduce:transition-none md:flex"
          style={{ background: OVERLAY_GRADIENT }}
        >
          <p className="max-w-[44ch] translate-y-3 text-[0.95rem] leading-snug text-paper transition-transform duration-500 ease-editorial group-hover:translate-y-0 motion-reduce:translate-y-0 motion-reduce:transition-none">
            {copy.caption}
          </p>
        </figcaption>
      </div>

      {/* Always-visible project meta — legible without hover. */}
      <div className="mt-4 flex items-baseline justify-between gap-6 border-t border-line pt-4">
        <h3 className="text-[1.15rem] font-medium tracking-[-0.01em] text-ink">
          {copy.title}
        </h3>
        <span className="eyebrow whitespace-nowrap">
          {copy.category}
          {copy.place ? ` · ${copy.place}` : ""}
        </span>
      </div>

      {/* Mobile has no hover: show the description inline instead. */}
      <p className="mt-3 text-[0.95rem] leading-relaxed text-stone md:hidden">
        {copy.caption}
      </p>
    </Reveal>
  );
}
