import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started Web Development",
    desc: "Began my journey into frontend development with HTML, CSS, and JavaScript.",
  },
  {
    year: "2023",
    title: "Joined Freelance Platforms",
    desc: "Built responsive UIs and dashboards using React and Tailwind CSS.",
  },
  {
    year: "2024",
    title: "Learned Backend & Fullstack",
    desc: "Integrated Node.js and Express to become a fullstack developer.",
  },
  {
    year: "2025",
    title: "Database & APIs",
    desc: "Integrated MongoDB with Prisma to manage and store application data.",
  },
];

const About = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-40 py-20 bg-[#080808] text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} // Animates when user scrolls to it
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-[#00ffee] text-center lg:text-left"
      >
        About Me
      </motion.h2>

      {/* Top section: photo + intro */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Glow behind image */}
          <div className="absolute inset-0 bg-[#00ffee]/20 rounded-full blur-3xl"></div>
          <img
            src="https://via.placeholder.com/150" // Replace with your profilePic
            alt="Profile"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-[#00ffee] shadow-[0_0_30px_rgba(0,255,238,0.3)] relative z-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center lg:text-left"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            I'm{" "}
            <span className="text-[#00ffee] font-semibold">
              Oluwaferanmi Aruaji
            </span>
            , a developer who lives at the intersection of design and logic. I
            specialize in creating high-performance web applications that don't
            just work, they feel amazing to use.
          </p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 bg-[#111] border-l-4 border-[#00ffee] rounded-r-xl shadow-lg hover:shadow-[0_0_20px_rgba(0,255,238,0.15)] transition-all"
          >
            <span className="text-sm font-bold text-[#00ffee] tracking-widest uppercase">
              {item.year}
            </span>
            <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
