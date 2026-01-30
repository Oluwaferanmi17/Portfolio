import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialIcons = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/OluwaferanmiAruaji",
      icon: <FaLinkedin />,
    },
    { href: "https://instagram.com/_feranmi_aruaji", icon: <FaInstagram /> },
    { href: "https://github.com/Oluwaferanmi17", icon: <FaGithub /> },
    { href: "https://twitter.com/yourusername", icon: <FaTwitter /> },
  ];

  return (
    // Removed ml-[11rem] and added responsive justification
    <div className="flex justify-center lg:justify-start gap-4 md:gap-6 mt-8">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 border-2 border-[#00ffee] text-[#00ffee] rounded-full flex items-center justify-center text-xl md:text-2xl transition-all"
          // Framer Motion handles the complex hover logic cleaner than standard CSS
          whileHover={{
            scale: 1.1,
            y: -5,
            backgroundColor: "#00ffee",
            color: "#000", // Black icon on cyan background looks sharper
            boxShadow: "0 0 20px #00ffee",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
