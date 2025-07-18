"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-center bg-gray-900 transition-colors duration-500">
      <h2 className="text-4xl font-extrabold mb-12 text-white">Projects</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group flex flex-col bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={200}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-5 text-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
              </div>
              {project.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-800 text-blue-100 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}