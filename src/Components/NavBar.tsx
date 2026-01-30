import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md"
    >
      <header className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
        {/* Logo Section */}
        <motion.div
          className="text-2xl md:text-3xl font-extrabold text-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Oluwaferanmi{" "}
          <span
            style={{ textShadow: "0 0 20px #00ffee" }}
            className="text-[#00ffee]"
          >
            Aruaji
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg transition duration-300 ${isActive ? "text-[#00ffee] border-b-2 border-[#00ffee]" : "text-white hover:text-[#00ffee]"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 flex flex-col items-center gap-6 py-8 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl hover:text-[#00ffee]"
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
