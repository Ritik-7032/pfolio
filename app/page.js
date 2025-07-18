import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white transition-colors duration-500">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}