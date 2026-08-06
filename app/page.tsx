import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Github from "@/components/sections/Github";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Background from "@/components/ui/Background";

export default function Home() {
  return (
    <main className="bg-[#07070a] text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Github />
      <Contact />
      <Footer />
      <Background />
    </main>
  );
}