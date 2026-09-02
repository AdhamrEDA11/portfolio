import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import ExperienceEducation from "@/components/ExperienceEducation";
import Certifications from "@/components/Certifications";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Workflow />
        <ExperienceEducation />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
