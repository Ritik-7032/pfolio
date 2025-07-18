"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiShadcnui,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "MERN Stack", icon: <FaServer /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "shadcn/ui", icon: <SiShadcnui /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#0f172a] transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-2 text-blue-400">{skill.icon}</div>
            <p className="text-sm font-medium text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
