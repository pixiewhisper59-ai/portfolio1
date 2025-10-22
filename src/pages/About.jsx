import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Layers } from "lucide-react";

const About = () => {
  return (
    <section
      className="
        relative flex flex-col items-center text-center
        min-h-screen px-6 md:px-24
      "
    >
      {/* Floating glow background */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 bg-purple-400/20 rounded-full blur-[100px] -z-10"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
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
          font-extrabold mb-4
          bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text
          drop-shadow-[0_0_10px_rgba(200,100,255,0.5)]
        "
      >
        About <span className="text-white">Me</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-base sm:text-lg md:text-2xl text-gray-300 mb-10"
      >
        Full Stack Web Developer passionate about creating modern web experiences
      </motion.h2>

      {/* About Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-3xl text-gray-400 text-sm sm:text-base leading-relaxed mb-12"
      >
        I specialize in building responsive and interactive web applications using modern technologies like PHP, Laravel, React, and Tailwind CSS. 
        My goal is to create smooth, efficient, and visually appealing websites that leave a lasting impression. 
        I enjoy learning new frameworks, exploring creative solutions, and contributing to meaningful projects.
      </motion.p>

      {/* Skills / Features Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white flex flex-col items-center gap-3 hover:shadow-[0_0_20px_rgba(200,100,255,0.5)] transition-all">
          <Code className="w-10 h-10 text-violet-400" />
          <h3 className="text-lg font-semibold">Frontend Development</h3>
          <p className="text-gray-300 text-sm text-center">
            Creating interactive and responsive user interfaces with React and Tailwind CSS.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white flex flex-col items-center gap-3 hover:shadow-[0_0_20px_rgba(200,100,255,0.5)] transition-all">
          <Server className="w-10 h-10 text-violet-400" />
          <h3 className="text-lg font-semibold">Backend Development</h3>
          <p className="text-gray-300 text-sm text-center">
            Building robust and efficient backends with PHP and Laravel for scalable applications.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white flex flex-col items-center gap-3 hover:shadow-[0_0_20px_rgba(200,100,255,0.5)] transition-all">
          <Layers className="w-10 h-10 text-violet-400" />
          <h3 className="text-lg font-semibold">Full Stack Projects</h3>
          <p className="text-gray-300 text-sm text-center">
            Integrating frontend and backend for seamless web applications with modern design.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
