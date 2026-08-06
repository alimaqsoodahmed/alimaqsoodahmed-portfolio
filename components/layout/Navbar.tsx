"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070a]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#07070a]/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-black text-white hover:text-indigo-400 transition"
        >
          Muhammad <span className="text-indigo-500">Ali</span>
        </a>

        {/* Navigation */}

        <ul className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-indigo-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

      </nav>
    </header>
  );
}