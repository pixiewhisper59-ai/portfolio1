import React, { useRef } from "react"; // Added useRef
import { motion } from "framer-motion";
import { Briefcase, BookOpen, Users } from "lucide-react";
import html2canvas from "html2canvas"; // Added html2canvas
import jsPDF from "jspdf"; // Added jsPDF

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Building responsive web apps using PHP, Laravel, React, and Tailwind.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2021 - 2023",
    description: "Designed interactive UI and user experiences with React and Tailwind.",
  },
  {
    role: "Junior Developer",
    company: "Startup Hub",
    period: "2020 - 2021",
    description: "Assisted in full-stack development projects and implemented backend logic.",
  },
];

const educationData = [
  {
    degree: "B.Sc Computer Science",
    institute: "University of Technology",
    period: "2017 - 2020",
  },
  {
    degree: "High School",
    institute: "City College",
    period: "2015 - 2017",
  },
];

const skillsData = ["React", "PHP", "Laravel", "Tailwind CSS", "JavaScript", "MySQL"];

const referencesData = [
  { name: "John Doe", role: "CTO at Tech Solutions", contact: "john@techsolutions.com" },
  { name: "Jane Smith", role: "Manager at Creative Web Studio", contact: "jane@creativeweb.com" },
];

const Resume = () => { // Corrected functional component definition
  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) {
      console.error("Resume element not found for PDF conversion.");
      return;
    }
    const canvas = await html2canvas(element, { scale: 2 }); // higher scale for better quality
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Ahmed_Raza_Resume.pdf");
  };

  return (
    <section className="relative flex flex-col items-center px-6 md:px-24 py-16 min-h-screen bg-black/40 text-white">
      <button
        onClick={handleDownload}
        className="mb-8 px-6 py-2 rounded-full bg-violet-500 hover:bg-violet-600 transition-all font-semibold text-white shadow-lg"
      >
        Download PDF
      </button>

      <div ref={resumeRef} className="w-full"> {/* The entire resume content is within this div */}
        {/* Floating glows */}
        <motion.div
          className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-[150px] -z-10"
          animate={{ x: [0, 150, -150, 0], y: [0, -100, 100, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-fuchsia-400/20 rounded-full blur-[120px] -z-10"
          animate={{ x: [0, -120, 120, 0], y: [0, 80, -80, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6
            bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text
            drop-shadow-[0_0_20px_rgba(200,100,255,0.5)]
          "
        >
          My <span className="text-white">Resume</span>
        </motion.h1>

        {/* Summary / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl text-gray-300 text-center mb-12 text-sm sm:text-base"
        >
          I am a passionate Full Stack Developer with experience building modern web applications using
          PHP, Laravel, React, and Tailwind. I enjoy creating interactive, responsive, and aesthetically
          appealing user interfaces while keeping backend performance in mind.
        </motion.p>

        {/* Experience Section */}
        <motion.div
          className="w-full max-w-5xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-violet-400" /> Experience
          </h2>
          <div className="flex flex-col gap-6">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-violet-400/20 hover:shadow-[0_0_25px_rgba(200,100,255,0.5)] transition-all"
              >
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-sm text-gray-300">{exp.company} • {exp.period}</span>
                <p className="mt-2 text-gray-300 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="w-full max-w-5xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-violet-400" /> Education
          </h2>
          <div className="flex flex-col gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-violet-400/20 hover:shadow-[0_0_25px_rgba(200,100,255,0.5)] transition-all"
              >
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-sm text-gray-300">{edu.institute} • {edu.period}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="w-full max-w-5xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-violet-400" /> Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {skillsData.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-purple-500/20 text-white text-sm border border-violet-400/30 hover:bg-purple-500/30 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* References Section */}
        <motion.div
          className="w-full max-w-5xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            References
          </h2>
          <div className="flex flex-col gap-4">
            {referencesData.map((ref, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-violet-400/20 text-gray-200 hover:shadow-[0_0_20px_rgba(200,100,255,0.4)] transition-all"
              >
                <p className="font-semibold">{ref.name}</p>
                <span className="text-sm">{ref.role} • {ref.contact}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;