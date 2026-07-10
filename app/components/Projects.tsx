"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="progetti"
      className="scroll-mt-24 border-b border-line bg-paper"
    >
      <div className="container-editorial py-[clamp(5rem,12vw,9rem)]">
        <div className="grid gap-y-8 md:grid-cols-12 md:items-end md:gap-x-12">
          <Reveal className="md:col-span-8">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-ink">
              {t.projects.heading}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4">
            <p className="max-w-[40ch] text-[1.0625rem] leading-relaxed text-stone md:text-[1.125rem]">
              {t.projects.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-20 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Reveal
          as="p"
          className="mx-auto mt-20 max-w-[40ch] text-center text-[1.0625rem] leading-relaxed text-stone md:mt-28"
        >
          {t.projects.all}
        </Reveal>
      </div>
    </section>
  );
}
