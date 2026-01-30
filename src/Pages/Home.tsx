import { motion } from "framer-motion";
import Buttons from "../Components/Buttons";
import SocialIcons from "../Components/SocialIcons";
import TypingAnimation from "../Components/TypingAnimation";
// import TypingReveal from "../Components/TypingReveal";
const Home = () => {
  return (
    <motion.main
      className="flex flex-col mt-[5rem]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      {" "}
      <h1 className="text-6xl font-bold ml-[10rem]">
        Hi, It's <span className="text-[#00ffee]">Oluwaferanmi</span>
      </h1>
      <p className="text-5xl ml-[10rem] mt-3">
        I'm a{" "}
        <TypingAnimation
          texts={["FrontEnd", "BackEnd", "FullStack"]}
          // speed={100}
          // delay={1000}
        />{" "}
        <span className="text-[#00ffee]">Engineer.</span>
      </p>
      {/* <p className="text-5xl ml-[10rem] mt-3">
        I'm a <TypingReveal /> <span className="text-[#00ffee]">Engineer.</span>
      </p> */}
      <p className="ml-[10rem] mt-5 text-lg text-gray-300 max-w-4xl">
        Passionate about crafting beautiful and responsive digital experiences.
        I build modern web applications that are fast, interactive, and visually
        engaging — merging creativity with clean code to bring ideas to life.
      </p>
      <SocialIcons />
      <Buttons />
    </motion.main>
  );
};

export default Home;
