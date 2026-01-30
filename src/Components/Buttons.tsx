import { motion } from "framer-motion";
const Buttons = () => {
  return (
    <div className="ml-[10rem] mt-5 flex gap-4">
      <motion.button
        className="underline bg-[#00ffee] rounded-full text-black p-2 border border-[#00ffee] shadow-[0_0_25px_#00ffee] transition duration-300 w-32"
        style={{ textShadow: "0 0 25px #00ffee" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Hire Me
      </motion.button>
      <motion.button
        className="underline text-[#00ffee] rounded-full border-[#00ffee] border p-2 shadow-[0_0_25px_#00ffee] transition duration-300 w-32"
        style={{ textShadow: "0 0 25px #00ffee" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Contact
      </motion.button>
    </div>
  );
};
export default Buttons;
