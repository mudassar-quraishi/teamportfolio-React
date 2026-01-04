import Header from "../components/Header";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { projects } from "../data/projects";




export default function Home() {
  return (
    <div className="bg-slate-800 text-slate-100 leading-relaxed">
      <div className="max-w-7xl mx-auto my-8 bg-slate-700 shadow-xl rounded-lg overflow-hidden">
        <Header />

        <main className="py-10">
          <div className="max-w-7xl mx-auto px-5">
            <Hero />
            <Team />
            <Services />
            <Projects projects={projects} />;
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
