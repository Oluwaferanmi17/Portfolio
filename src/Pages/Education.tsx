import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
const educationData = [
  {
    school: "Baze University",
    degree: "B.Sc. Software Engineering",
    year: "2022 – 2025",
    description:
      "Focused on software engineering, databases, and full-stack development.",
    certificateLink: "#", // Replace with real link if available
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
    <section className="min-h-screen bg-[#080808] px-6 sm:px-12 py-16 text-white">
      <h2 className="text-4xl font-bold text-center text-[#00ffee] mb-12">
        Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="border border-[#00ffee] rounded-2xl p-6 shadow-[0_0_25px_#00ffee] hover:shadow-[0_0_35px_#00ffee] transition duration-300"
          >
            <FaGraduationCap className="text-[#00ffee] text-3xl mb-3" />

            <h3 className="text-2xl font-bold text-[#00ffee] mb-1">
              {edu.school}
            </h3>
            <p className="italic text-white">{edu.degree}</p>
            <p className="text-sm text-gray-400 mb-3">{edu.year}</p>
            <p className="text-gray-300 mb-4">{edu.description}</p>

            {edu.certificateLink && (
              <a
                href={edu.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#00ffee] text-[#00ffee] rounded-full px-4 py-1 text-sm hover:bg-[#00ffee] hover:text-black transition duration-300"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Education;
