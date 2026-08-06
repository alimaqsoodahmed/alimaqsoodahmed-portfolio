"use client";

import { motion } from "framer-motion";
import { research } from "@/data/research";

export default function Research() {
  return (
    <section
      id="research"
      className="py-28 max-w-5xl mx-auto px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Research <span className="text-indigo-500">Journey</span>
      </h2>

      <div className="relative border-l-2 border-indigo-500 ml-5">

        {research.map((item, index) => (

          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="mb-14 ml-8 relative"
          >

            <div className="absolute -left-12 top-2 w-5 h-5 rounded-full bg-indigo-500"></div>

            <span className="text-indigo-400 font-bold">
              {item.year}
            </span>

            <h3 className="text-2xl font-bold mt-2">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}