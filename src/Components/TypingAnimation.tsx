import { useState, useEffect } from "react";

const TypingAnimation = ({ texts = [""], speed = 150, delay = 2000 }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const handleTyping = () => {
      const currentString = texts[index] || "";

      if (!isDeleting) {
        if (charIndex < currentString.length) {
          setCurrentText((prev) => prev + currentString[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return (
    <span className="text-[#00ffee] font-semibold">
      {currentText}
      <span
        className="ml-1 inline-block animate-[blink_1s_steps(1)_infinite]"
        style={{ animationName: "blink" }}
      >
        |
      </span>
    </span>
  );
};
export default TypingAnimation;
