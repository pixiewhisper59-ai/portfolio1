import React from "react";
import { motion } from "framer-motion";
import { Laptop, Database, Code } from "lucide-react";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind CSS.",
    icon: <Laptop className="w-10 h-10 text-violet-400" />,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack online store built with Laravel and React.",
    icon: <Database className="w-10 h-10 text-violet-400" />,
  },
  {
    title: "Task Management App",
    description: "A real-time todo app using React, Tailwind, and PHP backend.",
    icon: <Code className="w-10 h-10 text-violet-400" />,
  },
  {
    title: "Weather Dashboard",
    description: "Dynamic dashboard showing live weather data using API integration.",
    icon: <Laptop className="w-10 h-10 text-violet-400" />,
  },
  {
    title: "Blog Platform",
    description: "CMS-like blog system using Laravel and Blade templates.",
    icon: <Database className="w-10 h-10 text-violet-400" />,
  },
  {
    title: "Chat Application",
    description: "Real-time chat app built with React and WebSockets.",
    icon: <Code className="w-10 h-10 text-violet-400" />,
  },
];

const Projects = () => {
  return (
    <section
      className="
        relative flex flex-col items-center text-center
        min-h-screen px-6 md:px-24
      "
    >
      {/* Floating neon glow */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 bg-purple-400/20 rounded-full blur-[100px] -z-10"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
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
        My <span className="text-white">Projects</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-base sm:text-lg md:text-2xl text-gray-300 mb-12"
      >
        A selection of projects that showcase my skills in web development
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.03 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white flex flex-col items-center gap-4 hover:shadow-[0_0_25px_rgba(200,100,255,0.5)] transition-all"
          >
            <div>{project.icon}</div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-300 text-sm text-center">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
