"use client";
import { motion } from "framer-motion";
import { contacts } from "@/public/assets/assets";
import { useState } from "react";
import axios from "axios";

export default function Contac() {
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [status, setStatus] = useState(null); 

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await axios.post("/api/contact", form);
      if (response.data.success) {
        setForm({ name: "", email: "", message: "" });
        setStatus("success");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 text-center dark:bg-gray-900 bg-gray-100 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Let's connect and work together!
      </p>

 
      <motion.div
        className="flex justify-center gap-6 text-2xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {contacts.map(({ icon, link, label }, index) => (
          <a
            key={index}
            href={link}
            aria-label={label}
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </motion.div>

   
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer"
        >
          Send Message
        </button>

      
        {status === "success" && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4">Failed to send message. Try again.</p>
        )}
      </form>
    </section>
  );
}
