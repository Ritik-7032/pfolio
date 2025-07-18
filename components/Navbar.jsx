"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ${
        scroll ? "bg-gray-900 shadow-lg" : "bg-gray-900"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Ritik Kumar
        </Link>
        <ul className="hidden md:flex gap-6 text-lg text-white">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#educations" className="hover:text-blue-400">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
