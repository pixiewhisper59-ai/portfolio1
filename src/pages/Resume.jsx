import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/AhmedRaza_Resume.pdf"; // served from public/
  link.download = "AhmedRaza_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen text-white px-6 md:px-20 py-16 rounded-2xl overflow-hidden">
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-700/20 to-transparent animate-pulse"></div>

      {/* ✨ Glass Layer */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-purple-400/20 shadow-xl rounded-2xl p-6 md:p-12 z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center mb-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
              Ahmed Raza
            </h1>
            <p className="text-gray-300 mt-1">Full Stack Web Developer</p>
          </div>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 flex items-center gap-2 bg-purple-600/40 hover:bg-purple-700/60 text-white px-5 py-2 rounded-xl backdrop-blur-md transition-all duration-300 border border-purple-400/40"
          >
            <FaDownload />
            Download PDF
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-4 mb-10 text-sm text-gray-200"
        >
          <p><span className="text-purple-300 font-semibold">📞 Phone:</span> 0315 1084676</p>
          <p><span className="text-purple-300 font-semibold">📧 Email:</span> mrahmedrazabaig@gmail.com</p>
          <p><span className="text-purple-300 font-semibold">🌐 Portfolio:</span> ahmedraza9.netlify.app</p>
          <p><span className="text-purple-300 font-semibold">📍 Address:</span> House no R49, Sector 2, Kareemi Chorangi, Surjani Town, Karachi</p>
        </motion.div>

        {/* Profile */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-3">Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a dedicated Web Developer with a strong foundation in front-end technologies
            (HTML, CSS, JavaScript, TypeScript, React.js, Tailwind CSS, Bootstrap, jQuery) and back-end
            development using PHP and SQL. I specialize in building responsive, interactive, and
            user-friendly web applications with a focus on performance and design.
            I also have one year of experience as a Beforward Car Selling Agent, where I gained valuable
            insight into the automotive and auction industry, enhancing my ability to understand client needs
            and deliver practical, results-driven digital solutions.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Experience</h2>
          <div className="space-y-6">
            {[
              {
                title: "Beforward Car Selling Agent",
                duration: "Sept 2024 - Present",
                desc: "Handling international car sales and auctions, assisting clients in purchasing vehicles through the Beforward platform, and managing communication with exporters.",
              },
              {
                title: "Head of Data Entry — Envision Technologies",
                duration: "Jan 2022 - Aug 2024",
                desc: "Led a data management team, optimized workflows, and ensured data accuracy across multiple projects. Improved reporting efficiency by 40%.",
              },
              {
                title: "Junior Graphic Designer — Al Ramz Freelance Agency",
                duration: "Feb 2020 - Dec 2022",
                desc: "Created social media graphics, marketing materials, and visual branding for various clients to boost online presence.",
              },
              {
                title: "WordPress Developer — Gig Genius Freelance Agency",
                duration: "Feb 2019 - Jan 2020",
                desc: "Developed and maintained WordPress websites for small businesses, focusing on SEO optimization and responsive design.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, borderColor: "rgba(168,85,247,0.6)" }}
                className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-purple-400/30 transition"
              >
                <h3 className="text-xl font-semibold text-purple-200">
                  {exp.title}
                  {i === 0 && (
                    <span className="ml-2 text-xs text-purple-400 bg-purple-900/30 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-200">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Technical Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-200">
            {[
              "HTML / CSS / Bootstrap / TailwindCSS",
              "JavaScript / TypeScript / jQuery",
              "React.js / PHP / MySQL",
              "REST API / JSON / Git",
              "WordPress / Hosting / cPanel",
              "Microsoft Word / Excel",
            ].map((skill, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg text-center border border-purple-400/30 hover:border-purple-400/60 transition"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Soft Skills</h2>
          <p className="text-gray-300">
            Communication, Teamwork, Problem-Solving, Time Management, Critical Thinking,
            Decision-Making, Adaptability, Creativity, Emotional Intelligence, Client Handling.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Education & Certifications</h2>
          <ul className="text-gray-300 space-y-3">
            <li>🎓 Matriculation (Computer Science) — Meraj Public Secondary School</li>
            <li>🎓 Intermediate (Pre-Engineering) — Govt. Degree Boys College Buffer Zone, Karachi</li>
            <li>🏆 Full Stack Web Development Diploma — Aptech North Nazimabad (1 Year)</li>
          </ul>
        </motion.div>

        {/* Languages & Hobbies */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-3">Languages & Hobbies</h2>
          <p className="text-gray-300 mb-2">
            <span className="text-purple-300 font-semibold">Languages:</span> English, Urdu
          </p>
          <p className="text-gray-300">
            <span className="text-purple-300 font-semibold">Hobbies:</span> Exploring AI tools, creating automation scripts,
            learning new frameworks, and gaming.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
