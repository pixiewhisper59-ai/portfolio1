import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        flex flex-col pt-30 justify-content-center items-center text-center
        min-h-screen px-6
         md:pl-0
      "
    >
      {/* Floating glow background */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 bg-purple-400/20 rounded-full blur-[100px] -z-10"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-4xl sm:text-5xl md:text-6xl
          font-extrabold mb-3
          bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text
          drop-shadow-[0_0_10px_rgba(200,100,255,0.5)]
        "
      >
        Hi, I'm <span className="text-white">Ahmed Raza</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6"
      >
        Full Stack Web Developer | PHP · Laravel · React · Tailwind
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="
          max-w-xl sm:max-w-2xl text-gray-400 leading-relaxed mb-10
          text-sm sm:text-base
        "
      >
        I love building smooth, responsive, and modern web experiences — from powerful PHP backends to dynamic React
        frontends. Always exploring new technologies to create something meaningful.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <button
          onClick={() => navigate("/projects")}
          className="
            group bg-gradient-to-r from-violet-500 to-fuchsia-600
            text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold
            flex items-center justify-center gap-2
            hover:shadow-[0_0_20px_rgba(200,100,255,0.6)]
            transition-all
          "
        >
          <Code2 className="w-5 h-5" />
          View My Work
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="
            flex items-center justify-center gap-2
            border border-violet-400/50 text-violet-300
            px-6 py-3 rounded-full text-base sm:text-lg
            hover:bg-violet-500/10 transition-all
          "
        >
          <Sparkles className="w-5 h-5" />
          Contact Me
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
