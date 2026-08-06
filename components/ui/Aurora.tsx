"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-indigo-600/20 blur-3xl"
        animate={{
          x: [-150, 250, -150],
          y: [-120, 150, -120],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          x: [120, -150, 120],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    </div>
  );
}