import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
// import SocialIcons from "../Components/SocialIcons";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs
      .sendForm(
        "service_kia5d29", // ✅ Your EmailJS Service ID
        "template_ubpfapq", // 🔁 Replace with your actual Template ID
        formRef.current,
        "nj53vrbXHWyWv2CA-" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent!");
          formRef.current?.reset();
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
        }
      );
  };
  return (
    <section className="min-h-screen bg-[#080808] px-6 py-16 text-white flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-[#00ffee] mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#00ffee] text-xl" />
            <span>aruajiferanmi@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#00ffee] text-xl" />
            <span>+234 812 121 3180</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#00ffee] text-xl" />
            <span>Kaduna, Nigeria</span>
          </div>
        </motion.div>
        {/* Right Column - Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail} // ✅ FIXED: now it works
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-transparent border border-[#00ffee] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffee] placeholder:text-gray-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-transparent border border-[#00ffee] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffee] placeholder:text-gray-400"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-3 bg-transparent border border-[#00ffee] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffee] placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="w-full p-3 bg-transparent border border-[#00ffee] text-[#00ffee] font-bold rounded-md hover:bg-[#00ffee] hover:text-black transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      {/* Social Icons */}
      {/* <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <SocialIcons />
      </motion.div> */}
    </section>
  );
};
export default Contact;
