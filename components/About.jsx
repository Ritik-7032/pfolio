"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-200 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm <span className="font-semibold">Ritik Kumar</span>, a passionate{" "}
          <span className="font-semibold">Full Stack Developer</span> with expertise in the{" "}
          <span className="text-blue-500 dark:text-blue-400">MERN Stack</span>. I enjoy building
          scalable web applications, solving real-world problems, and continuously learning new technologies.
        </motion.p>

        {/* College Info */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          I'm currently pursuing my B.Tech degree from{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">
        Indian Institute of Information Technology Ranchi
          </span>, where I'm honing my skills in software development and engineering.
        </motion.p>
      </div>
    </section>
  );
}
