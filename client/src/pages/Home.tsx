import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CursorTrail />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
