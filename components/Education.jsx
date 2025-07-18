"use client";

import { motion } from "framer-motion";

const educationList = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Indian Institute of Information Technology",
    duration: "2023 – 2027",
    logo: "/assets/iiitr.png",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Vivekanand Sr. Sec. School Rewari HR",
    duration: "",
    logo: "/assets/12th.jpeg",
  },
  {
    degree: "Secondary (10th)",
    institution: "Saheed amar singh public school Gurugram haryana",
    duration: "",
    logo: "/assets/10th.jpeg",
  },
];

export default function Education() {
  return (
    <section id="educations" className="py-20 px-6 bg-gray-900 transition-colors duration-500">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-3">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-20 h-20 object-contain rounded-7xl"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-300">{edu.institution}</p>
              </div>
            </div>
            {edu.duration && (
              <p className="text-sm text-gray-400">{edu.duration}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
