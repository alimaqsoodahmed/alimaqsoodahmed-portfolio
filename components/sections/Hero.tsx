"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Counter from "@/components/ui/Counter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
  FaRocket,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-32 md:pt-36 relative"
>
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 text-lg mb-5 font-medium">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            Muhammad
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ali
            </span>
          </h1>

          {/* Typing Animation */}

          <div className="text-3xl mt-8 font-semibold text-gray-300 min-h-[70px]">
            <TypeAnimation
              sequence={[
                "AI Researcher",
                2000,
                "Machine Learning Engineer",
                2000,
                "LLM Developer",
                2000,
                "Computer Vision Engineer",
                2000,
                "Deep Learning Enthusiast",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-2xl">
            Passionate about developing intelligent AI systems using Machine
            Learning, Deep Learning, Large Language Models, Computer Vision,
            Time-Series Forecasting, AI Agents, and modern software engineering
            to solve real-world problems.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              <FaRocket />
              Explore Projects
            </a>

            <a
              href="/resume/Muhammad_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300 hover:scale-105"
            >
              <FaDownload />
              Download CV
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/alimaqsoodahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/muhammad-ali-76b938182"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:malipallandri@gmail.com"
              className="hover:text-red-400 hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Statistics */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">

  <div>
    <h2 className="text-3xl font-bold text-indigo-400">
      <Counter end={10} />
    </h2>
    <p className="text-gray-400 text-sm">AI Projects</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-cyan-400">
      <Counter end={15} />
    </h2>
    <p className="text-gray-400 text-sm">ML Models</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-purple-400">
      <Counter end={5} />
    </h2>
    <p className="text-gray-400 text-sm">Research Areas</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-pink-400">
      <Counter end={3} />
    </h2>
    <p className="text-gray-400 text-sm">Years Coding</p>
  </div>

</div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src="/profile.png"
              alt="Muhammad Ali"
              className="relative w-96 h-96 object-cover rounded-full border-4 border-indigo-500 shadow-[0_0_80px_rgba(99,102,241,0.6)] hover:scale-105 transition duration-500"
            />

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-3xl text-gray-400"
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}