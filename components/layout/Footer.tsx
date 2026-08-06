"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-28">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-2xl font-bold">
              Muhammad{" "}
              <span className="text-indigo-500">
                Ali
              </span>
            </h2>

            <p className="text-gray-400 mt-2">
              AI Researcher • Machine Learning Engineer • LLM Developer
            </p>

          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/alimaqsoodahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/muhammad-ali-76b938182"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:malipallandri@gmail.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Muhammad Ali. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-indigo-400 hover:text-white transition mt-4 md:mt-0"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}