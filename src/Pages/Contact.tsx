import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
          setIsSending(false);
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
          setIsSending(false);
        },
      );
  };

  return (
    <section className="min-h-screen bg-[#080808] px-6 md:px-20 lg:px-40 py-24 text-white flex flex-col items-center">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#00ffee] mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400">
          Have a project in mind? Let's build something great together.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-16">
        {/* Contact Info Cards */}
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaEnvelope />,
              label: "Email",
              value: "aruajiferanmi@gmail.com",
            },
            {
              icon: <FaPhoneAlt />,
              label: "Phone",
              value: "+234 812 121 3180",
            },
            {
              icon: <FaMapMarkerAlt />,
              label: "Location",
              value: "Kaduna, Nigeria",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 p-6 bg-[#111] rounded-2xl border border-white/5 hover:border-[#00ffee]/30 transition-all group"
            >
              <div className="text-[#00ffee] text-2xl p-4 bg-[#00ffee]/10 rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  {item.label}
                </p>
                <p className="text-lg font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form Column */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex-[1.5] space-y-6 bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Full Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full p-4 bg-[#080808] border border-white/10 text-white rounded-xl focus:outline-none focus:border-[#00ffee] focus:ring-1 focus:ring-[#00ffee] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className="w-full p-4 bg-[#080808] border border-white/10 text-white rounded-xl focus:outline-none focus:border-[#00ffee] focus:ring-1 focus:ring-[#00ffee] transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Your Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me I'm hired"
              required
              className="w-full p-4 bg-[#080808] border border-white/10 text-white rounded-xl focus:outline-none focus:border-[#00ffee] focus:ring-1 focus:ring-[#00ffee] transition-all resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending}
            type="submit"
            className="w-full p-4 bg-[#00ffee] text-black font-bold rounded-xl shadow-[0_0_20px_rgba(0,255,238,0.3)] hover:shadow-[0_0_30px_rgba(0,255,238,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              "Sending..."
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
