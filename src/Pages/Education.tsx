import { motion } from "framer-motion";
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

const educationData = [
  {
    school: "Baze University",
    degree: "B.Sc. Software Engineering",
    year: "2022 – 2025",
    description:
      "Focused on software engineering, databases, and full-stack development.",
    certificateLink: "#",
  },
  {
    school: "FreeCodeCamp",
    degree: "Full Stack Web Development",
    year: "2023",
    description:
      "Completed 300+ hours of hands-on coding and real-world web projects.",
    certificateLink: "#",
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-[#080808] px-6 md:px-20 lg:px-40 py-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-[#00ffee] mb-16"
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[#111] border border-[#00ffee]/20 rounded-3xl p-8 hover:border-[#00ffee] transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffee]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#00ffee]/10 rounded-2xl">
                  <FaGraduationCap className="text-[#00ffee] text-3xl" />
                </div>
                <span className="text-sm font-mono text-[#00ffee]/70 bg-[#00ffee]/5 px-3 py-1 rounded-full border border-[#00ffee]/10">
                  {edu.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#00ffee] transition-colors duration-300">
                {edu.school}
              </h3>
              <p className="text-[#00ffee] font-medium mb-4">{edu.degree}</p>

              <p className="text-gray-400 leading-relaxed mb-6">
                {edu.description}
              </p>

              {edu.certificateLink && (
                <a
                  href={edu.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00ffee] hover:underline"
                >
                  View Certificate <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
