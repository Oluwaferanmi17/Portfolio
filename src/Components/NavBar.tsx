import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }}>
      <header className="bg-rgba(0, 0, 0, 0.3) p-5 py-6">
        <motion.ul className="flex flex-row justify-center items-center gap-4 text-xl  mt-6 ">
          <motion.span
            className="text-3xl font-extrabold text-white cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 underline"
            whileHover={{ scale: 1.1 }}
          >
            Oluwaferanmi{" "}
            <span
              style={{ textShadow: "0 0 25px #00ffee" }}
              className="text-[#00ffee] mr-[5rem]"
            >
              Aruaji
            </span>
          </motion.span>
          <div className="flex flex-row gap-8 cursor-pointer">
            <NavLink
              to="/"
              className="text-white underline hover:text-[#00ffee]"
            >
              Home{" "}
            </NavLink>
            <NavLink
              to="/about"
              className="text-white underline hover:text-[#00ffee] "
            >
              About
            </NavLink>
            <NavLink
              to="/education"
              className="text-white underline hover:text-[#00ffee]"
            >
              Education
            </NavLink>
            <NavLink
              to="/projects"
              className="text-white underline hover:text-[#00ffee]"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white underline hover:text-[#00ffee]"
            >
              Contact
            </NavLink>
          </div>
        </motion.ul>
      </header>
    </motion.nav>
  );
};

export default NavBar;
