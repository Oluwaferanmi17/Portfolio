import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Fix here

const SocialIcons = () => {
  return (
    <div className="flex gap-6 mt-4 text-2xl ml-[11rem] p-3">
      {[
        {
          href: "https://linkedin.com/in/yourusername",
          icon: <FaLinkedin />,
        },
        {
          href: "https://instagram.com/yourusername",
          icon: <FaInstagram />,
        },
        {
          href: "https://github.com/yourusername",
          icon: <FaGithub />,
        },
        {
          href: "https://twitter.com/yourusername",
          icon: <FaTwitter />,
        },
      ].map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textShadow: "0 0 25px #00ffee" }}
          className="p-2 border border-[#00ffee] text-[#00ffee] rounded-full hover:shadow-[0_0_25px_#00ffee] transition duration-300"
          whileHover={{
            scale: 1.2,
            y: -5,
            background: "#00ffee",
            color: "#fff",
          }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
