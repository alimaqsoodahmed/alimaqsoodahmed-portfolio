import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold">
          Featured <span className="text-indigo-500">Projects</span>
        </h2>

        <p className="text-gray-400 mt-5">
          Some of my AI, Machine Learning and Research projects.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project) => (

          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
          >

            <div className="mb-6">

              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-3xl">

                🤖

              </div>

            </div>

            <h3 className="text-2xl font-bold mb-4">

              {project.title}

            </h3>

            <p className="text-gray-400 mb-6 leading-7">

              {project.description}

            </p>

            <div className="flex flex-wrap gap-2 mb-8">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

            <div className="flex gap-4">

              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
              >
                <FaExternalLinkAlt />
                Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}