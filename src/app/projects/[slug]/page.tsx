import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Adham Reda`,
    description: project.objective
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) return notFound();
  const project = projects[index];

  return (
    <>
      <Navbar />
      <main id="main" className="pt-28 sm:pt-32">
        <CaseStudyHeader project={project} index={index} />
        <CaseStudyClient project={project} index={index} />
      </main>
      <Footer />
    </>
  );
}
