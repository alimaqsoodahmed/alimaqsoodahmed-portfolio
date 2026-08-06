import {
  Brain,
  Cpu,
  Database,
  GraduationCap,
  Code,
  Sparkles,
} from "lucide-react";

export default function About() {
  const items = [
    {
      icon: <GraduationCap size={22} />,
      title: "Education",
      text: "MS Artificial Intelligence",
    },
    {
      icon: <Brain size={22} />,
      title: "Research",
      text: "Machine Learning • Deep Learning • LLMs",
    },
    {
      icon: <Cpu size={22} />,
      title: "Focus",
      text: "Computer Vision • AI Agents",
    },
    {
      icon: <Database size={22} />,
      title: "Experience",
      text: "Time-Series Forecasting & Data Science",
    },
    {
      icon: <Code size={22} />,
      title: "Development",
      text: "Python • FastAPI • Django",
    },
    {
      icon: <Sparkles size={22} />,
      title: "Goal",
      text: "Building practical AI systems",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
          I'm an AI Researcher passionate about developing intelligent,
          scalable, and data-driven solutions using Machine Learning,
          Deep Learning, Computer Vision, and Large Language Models.
          I enjoy solving real-world problems through research,
          software engineering, and modern AI technologies.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-indigo-500 transition"
          >
            <div className="text-indigo-500 mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}