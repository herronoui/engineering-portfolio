import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
