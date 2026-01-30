import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built with React, Tailwind CSS, and Framer Motion.",
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
    imageUrl: "https://via.placeholder.com/400x200?text=Portfolio", // Replace with real image
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack MERN application with authentication and Stripe payments.",
    liveLink: "https://myecommercestore.com",
    githubLink: "https://github.com/yourusername/ecommerce",
    imageUrl: "https://via.placeholder.com/400x200?text=E-commerce", // Replace with real image
  },
  // add more projects here
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-[#080808] px-6 sm:px-12 py-16 text-white">
      <h2 className="text-4xl font-bold text-center text-[#00ffee] mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const isBlurred = hoveredIndex !== null && !isHovered;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                border border-[#00ffee] rounded-2xl p-4 shadow-[0_0_25px_#00ffee]
                transition duration-300
                ${isBlurred ? "blur-sm opacity-50" : "opacity-100"}
                hover:shadow-[0_0_35px_#00ffee] cursor-pointer
                bg-[#111]
              `}
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-xl mb-4 w-full object-cover max-h-48"
              />

              <h3 className="text-2xl font-bold text-[#00ffee] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#00ffee] text-[#00ffee] px-3 py-1 rounded-full text-sm hover:bg-[#00ffee] hover:text-black transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#00ffee] text-[#00ffee] px-3 py-1 rounded-full text-sm hover:bg-[#00ffee] hover:text-black transition"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
