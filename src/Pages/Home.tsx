import { motion } from "framer-motion";
import Buttons from "../Components/Buttons";
import SocialIcons from "../Components/SocialIcons";
import TypingAnimation from "../Components/TypingAnimation";
// import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <motion.main
      // Added min-h-screen and centered items vertically
      className="flex flex-col justify-center min-h-[90vh] px-6 md:px-20 lg:px-40"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Hi, It's <span className="text-[#00ffee]">Oluwaferanmi</span>
        </h1>

        {/* Using a flex container ensures "I'm a", the Animation, and "Engineer" stay on one line */}
        <div className="flex flex-wrap items-center text-4xl md:text-5xl font-bold mt-2 text-white">
          <span className="mr-3">I'm a</span>
          <TypingAnimation texts={["FrontEnd", "BackEnd", "FullStack"]} />
          <span className="text-[#00ffee] ml-3">Engineer.</span>
        </div>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
          Passionate about crafting beautiful and responsive digital
          experiences. I build modern web applications that are fast,
          interactive, and visually engaging and merging creativity with clean
          code to bring ideas to life.
        </p>

        <div className="mt-8">
          <SocialIcons />
        </div>

        <div className="mt-10">
          <Buttons />
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
