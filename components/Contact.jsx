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

export function Contact() {
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
      className="py-16 px-6 text-center bg-gray-900 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
      <p className="text-gray-400 mb-4">Let's connect and work together!</p>

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
        className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
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
