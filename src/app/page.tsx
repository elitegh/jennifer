import { Atmosphere } from "@/components/Atmosphere";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <div className="site">
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
