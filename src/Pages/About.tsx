import { motion } from "framer-motion";
// import profilePic from "../assets/profile.jpg"; // replace with your image
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
    title: "Learned Database Management`and helped build APIs",
    desc: "Integrated MongoDB with prisma to manage and store application data.",
  },
];

const About = () => {
  return (
    <section className="min-h-screen px-[12%] py-16 bg-[#080808] text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-[#00ffee] text-shadow-md"
      >
        About Me
      </motion.h2>

      {/* Top section: photo + intro */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Profile Image */}
        <motion.img
          //   src={profilePic}
          alt="Profile"
          className="w-48 h-48 object-cover rounded-full border-4 border-[#00ffee] shadow-[0_0_25px_#00ffee]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textShadow: "0 0 10px #00ffee" }}
          className="max-w-xl"
        >
          <p className="text-lg leading-relaxed text-[#ccc]">
            I'm Oluwaferanmi Aruaji, a passionate developer with experience in
            frontend, backend, and fullstack development. I focus on building
            clean, responsive, and interactive web experiences with modern tools
            like React, Tailwind, Node.js, and Framer Motion.
          </p>
        </motion.div>
      </div>

      {/* Timeline Cards */}
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border-l-4 border-[#00ffee] pl-6 relative"
          >
            <div className="absolute left-[-10px] top-1 w-4 h-4 rounded-full bg-[#00ffee] shadow-[0_0_10px_#00ffee]" />
            <h3 className="text-xl font-bold text-[#00ffee]">{item.year}</h3>
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-[#ccc]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default About;
