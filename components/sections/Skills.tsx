import type { IconType } from "react-icons";

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

type Tech = {
  icon: IconType;
  name: string;
};

type Section = {
  title: string;
  tech: Tech[];
};

const sections: Section[] = [
  {
    title: "🧠 AI & Machine Learning",
    tech: [
      { icon: FaPython, name: "Python" },
      { icon: SiTensorflow, name: "TensorFlow" },
      { icon: SiPytorch, name: "PyTorch" },
      { icon: SiScikitlearn, name: "Scikit-Learn" },
      { icon: SiPandas, name: "Pandas" },
      { icon: SiOpencv, name: "OpenCV" },
    ],
  },

  {
    title: "💻 Backend Development",
    tech: [
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiFlask, name: "Flask" },
      { icon: SiDjango, name: "Django" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
  },

  {
    title: "☁️ Cloud & MLOps",
    tech: [
      { icon: FaAws, name: "AWS" },
      { icon: VscAzure, name: "Azure" },
      { icon: SiGooglecloud, name: "Google Cloud" },
      { icon: FaDocker, name: "Docker" },
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiMlflow, name: "MLflow" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 max-w-7xl mx-auto px-6"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Tech <span className="text-indigo-500">Stack</span>
        </h2>

        <p className="text-gray-400 mt-5">
          Technologies, frameworks and cloud platforms I use to build intelligent AI applications.
        </p>
      </div>

      <div className="space-y-12">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-8">
              {section.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {section.tech.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="rounded-2xl bg-black/30 border border-white/10 p-6 flex flex-col items-center hover:border-indigo-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="text-5xl mb-4 text-indigo-400" />
                  <p className="text-center font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}