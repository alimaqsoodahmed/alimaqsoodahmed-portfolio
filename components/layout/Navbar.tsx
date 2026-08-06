"use client";

import { useState, useEffect } from "react";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Research",
  "GitHub",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/50 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <h1 className="text-2xl font-black">
          Muhammad{" "}
          <span className="text-indigo-400">Ali</span>
        </h1>

        <ul className="hidden md:flex gap-10">

          {links.map((item) => (

            <li key={item}>

              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition"
              >
                {item}
              </a>

            </li>

          ))}

        </ul>

      </nav>
    </header>
  );
}