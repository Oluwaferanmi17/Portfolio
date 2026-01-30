import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const texts = ["FrontEnd", "BackEnd", "FullStack"];

const TypingReveal = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // 2 seconds per text
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="inline-block w-[10ch] h-[2.5rem] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute text-[#00ffee] font-semibold"
          style={{ textShadow: "0 0 15px #00ffee" }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypingReveal;
