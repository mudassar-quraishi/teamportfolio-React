import { useParams } from "react-router-dom";
import { team } from "../data/team";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/Profile/NavBar";
import About from "../components/Profile/About";
import Education from "../components/Profile/Education";
import Skills from "../components/Profile/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Profile/Certificates";
import { projects } from "../data/projects";

export default function Profile() {
  const { name } = useParams();
  const member = team.find((m) => m.slug === name);

  const memberProjects = projects;


  return (
    <div className="bg-slate-800 text-slate-100 leading-relaxed min-h-screen">
      <div className="max-w-7xl mx-auto my-8 bg-slate-700 shadow-xl rounded-lg overflow-hidden">
        <Header />

        <main className="py-10">
          <div className="max-w-7xl mx-auto px-5">
            <NavBar current={name} />
            <About member={member} />
            <Education  education ={member.education} />
            <Skills />
            <Projects
              projects={memberProjects}
              title="Projects"
              showFilters={false}
            />
            <Certificates certificates={member.certificates} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
