import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mt-10 text-left">
        <Hero />
        <Socials />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
