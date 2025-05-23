
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast when the page loads
    toast({
      title: "Welcome to my portfolio",
      description: "Feel free to explore my work and get in touch!",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-20 bg-zinc-950">
          <Skills />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="services" className="py-20 bg-zinc-950">
          <Services />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
