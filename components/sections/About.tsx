"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  Cpu,
  Code,
} from "lucide-react";

const timeline = [
  {
    year: "2024 – Present",
    icon: GraduationCap,
    title: "MS Artificial Intelligence",
    subtitle: "Air University, Islamabad",
    description:
      "Research focused on Intelligent Home Energy Management Systems using Deep Learning and Genetic Algorithms.",
  },

  {
    year: "2023 – Present",
    icon: Brain,
    title: "AI Researcher",
    subtitle: "Machine Learning • Deep Learning • LLMs",
    description:
      "Working on Computer Vision, Time-Series Forecasting, AI Agents, and Large Language Models.",
  },

  {
    year: "2022 – Present",
    icon: Cpu,
    title: "Machine Learning Engineer",
    subtitle: "Python • TensorFlow • PyTorch",
    description:
      "Developing AI solutions, predictive models, and intelligent automation systems.",
  },

  {
    year: "2021 – Present",
    icon: Code,
    title: "Software Developer",
    subtitle: "Full Stack & AI Applications",
    description:
      "Building web applications, APIs, dashboards, and AI-powered software using modern technologies.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-20"
      >
        About <span className="text-indigo-500">Me</span>
      </motion.h2>

      <div className="relative border-l border-indigo-500 ml-5">

        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              <div className="absolute -left-[52px] bg-indigo-600 rounded-full p-3">
                <Icon size={22} />
              </div>

              <span className="text-indigo-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <h4 className="text-gray-400">
                {item.subtitle}
              </h4>

              <p className="mt-4 text-gray-400 leading-8">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}