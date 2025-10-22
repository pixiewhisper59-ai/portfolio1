import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vdkjnid", // ✅ Your service ID
        "template_1ke3edc", // ✅ Your template ID
        formRef.current,
        "8t2rAUMdrTkfFa6tM" // ✅ Your public key
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setSuccess("Oops! Something went wrong.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-24">
      {/* Floating glow background */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 bg-purple-400/20 rounded-full blur-[100px] -z-10"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3
                   bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text
                   drop-shadow-[0_0_10px_rgba(200,100,255,0.5)]"
      >
        Get in <span className="text-white">Touch</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-base sm:text-lg md:text-2xl text-gray-300 mb-10"
      >
        I’m always open to discuss new projects or opportunities.
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-xl flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="bg-white/10 backdrop-blur-xl text-white placeholder-gray-400
                     px-5 py-3 rounded-full border border-violet-400/30
                     focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="bg-white/10 backdrop-blur-xl text-white placeholder-gray-400
                     px-5 py-3 rounded-full border border-violet-400/30
                     focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="bg-white/10 backdrop-blur-xl text-white placeholder-gray-400
                     px-5 py-3 rounded-2xl border border-violet-400/30
                     focus:outline-none focus:ring-2 focus:ring-violet-400
                     transition-all resize-none"
          required
        />

        <button
          type="submit"
          className="group bg-gradient-to-r from-violet-500 to-fuchsia-600
                     text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold
                     flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(200,100,255,0.6)]
                     transition-all"
        >
          <Send className="w-5 h-5" />
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-400 mt-2">{success}</p>}
      </motion.form>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/923151084676?text=Hello!%20I%20want%20to%20connect%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500/70 backdrop-blur-lg border border-green-400/50
                   rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,100,0.5)]
                   hover:shadow-[0_0_35px_rgba(0,255,100,0.8)] hover:scale-110 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </section>
  );
};

export default Contact;
