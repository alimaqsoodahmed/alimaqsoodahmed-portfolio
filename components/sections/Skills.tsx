import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import { VscAzure } from "react-icons/vsc";

import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiOpencv,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiMlflow,
} from "react-icons/si";

const sections = [
  {
    title: "🧠 AI & Machine Learning",
    tech: [
      [FaPython, "Python"],
      [SiTensorflow, "TensorFlow"],
      [SiPytorch, "PyTorch"],
      [SiScikitlearn, "Scikit-Learn"],
      [SiPandas, "Pandas"],
      [SiOpencv, "OpenCV"],
    ],
  },

  {
    title: "💻 Backend Development",
    tech: [
      [SiFastapi, "FastAPI"],
      [SiFlask, "Flask"],
      [SiDjango, "Django"],
      [SiMysql, "MySQL"],
      [SiMongodb, "MongoDB"],
    ],
  },

  {
    title: "☁ Cloud & MLOps",
    tech: [
      [FaAws, "AWS"],
      [VscAzure, "Azure"],
      [SiGooglecloud, "Google Cloud"],
      [FaDocker, "Docker"],
      [FaGitAlt, "Git"],
      [FaGithub, "GitHub"],
      [SiMlflow, "MLflow"],
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 max-w-7xl mx-auto px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Tech <span className="text-indigo-500">Stack</span>
      </h2>

      <div className="space-y-12">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-2xl font-semibold mb-8">
              {section.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {section.tech.map(([Icon, name]) => (
                <div
                  key={name}
                  className="rounded-2xl bg-black/30 border border-white/10 p-6 flex flex-col items-center hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
                >
                  <Icon className="text-5xl mb-4 text-indigo-400" />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}