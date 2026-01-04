import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects({
  projects,
  title = "Our Projects",
  showFilters = true,
}) {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category?.includes(filter));

  return (
    <section
      id="projects"
      className="p-10 border border-slate-600 rounded-xl shadow-sm mb-8"
    >
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

      {/* FILTER BUTTONS */}
      {showFilters && (
        <div className="text-center mb-8 space-x-4">
          {["all", "MySQL", "HTML_CSS", "ReactJs"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                filter === type
                  ? "bg-emerald-400 text-slate-900 hover:bg-emerald-500"
                  : "bg-slate-600 text-slate-100 hover:bg-slate-500"
              }`}
            >
              {type === "all" ? "All Projects" : type.replace("_", " / ")}
            </button>
          ))}
        </div>
      )}

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-700 border border-slate-600 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-3">
                {project.description}
              </p>
              <p className="text-sm font-semibold text-slate-300">
                Tech Used:{" "}
                <span className="font-normal">{project.tech}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
