"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { github } from "@/data/Github";

export default function Github() {
  return (
    <section
      id="github"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center">
          GitHub <span className="text-indigo-500">Profile</span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Open-source projects, AI research, machine learning experiments,
          and software engineering work.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 mt-16">
        {github.stats.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-indigo-400">
              {item.value}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <a
          href={github.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-semibold transition"
        >
          <FaGithub />
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
}