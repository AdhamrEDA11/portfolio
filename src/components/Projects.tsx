"use client";

import { useState } from "react";
import { projects, Project } from "@/lib/data";
import { projectsAr } from "@/lib/data-ar";
import { useLanguage } from "@/lib/language-context";
import ProjectCard from "./ProjectCard";
import ImageViewerModal from "./ImageViewerModal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          title={isAr ? "مشاريع مختارة" : "Selected Projects"}
          subtitle={
            isAr
              ? "مشاريع تحليل بيانات متكاملة تركّز على تحويل البيانات الخام إلى رؤى عمل قابلة للقياس."
              : "End-to-end analytics projects focused on turning raw data into measurable business insights."
          }
        />

        <div className="flex flex-col gap-8 sm:gap-10">
          {projects.map((project, i) => {
            const localized = isAr ? { ...project, ...projectsAr[i] } : project;
            return (
              <ProjectCard
                key={project.slug}
                project={localized}
                reversed={i % 2 === 1}
                onOpenImage={() => setActive(localized)}
              />
            );
          })}
        </div>
      </div>

      <ImageViewerModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
