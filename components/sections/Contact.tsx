"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 max-w-6xl mx-auto px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center">
          Get In <span className="text-indigo-500">Touch</span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Interested in collaborating on AI, Machine Learning,
          Deep Learning, LLMs, or research projects?
          Feel free to contact me.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mt-16">

        {/* Contact Info */}

        <div className="space-y-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <FaEnvelope className="text-3xl text-indigo-400 mb-3" />
            <h3 className="font-bold text-xl">Email</h3>
            <p className="text-gray-400">
              malipallandri@gmail.com
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <FaLinkedin className="text-3xl text-cyan-400 mb-3" />
            <h3 className="font-bold text-xl">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/muhammad-ali-76b938182"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400"
            >
              linkedin.com/in/muhammad-ali-76b938182
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <FaGithub className="text-3xl text-indigo-400 mb-3" />
            <h3 className="font-bold text-xl">GitHub</h3>
            <a
              href="https://github.com/alimaqsoodahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400"
            >
              github.com/alimaqsoodahmed
            </a>
          </div>

        </div>

        {/* Contact Form */}

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-indigo-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-indigo-500"
          />

          <textarea
            rows={6}
            placeholder="Your Message..."
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-indigo-500"
          />

          <button
            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}