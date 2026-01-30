import { motion } from "framer-motion";

const Buttons = () => {
  return (
    // justify-center on mobile, start on desktop. Removed ml-[10rem].
    <div className="flex flex-row justify-center lg:justify-start gap-6 mt-10">
      <motion.button
        className="px-8 py-3 bg-[#00ffee] text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,255,238,0.4)] hover:shadow-[0_0_30px_rgba(0,255,238,0.6)] transition-shadow duration-300 min-w-[140px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
      </motion.button>

      <motion.button
        className="px-8 py-3 border-2 border-[#00ffee] text-[#00ffee] font-bold rounded-full hover:bg-[#00ffee]/10 transition-colors duration-300 min-w-[140px]"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(0,255,238,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </motion.button>
    </div>
  );
};

export default Buttons;
