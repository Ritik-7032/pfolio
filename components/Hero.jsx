"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-center h-screen px-4 bg-gray-900 transition-colors duration-500">
      <motion.img
        src="/assets/profil.png"
        alt="Ritik Kumar"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6 object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.35 }}
        transition={{ duration: 0.9 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Ritik Kumar
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Passionate <span className="font-semibold text-blue-400">DSA Enthusiast</span> &{" "}
        <span className="font-semibold text-blue-400">MERN Stack Developer</span> <br />
        Turning problems into scalable, elegant code.
      </motion.p>

      <div className="flex items-center justify-center mt-6">
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
          <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md mr-4">
            Let's Connect
          </a>
        </motion.div>

        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
          <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md mr-4">
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}