import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center justify-between
          px-6 py-3
          rounded-full
          backdrop-blur-lg bg-white/10
          border border-violet-400/30
          text-white shadow-[0_0_25px_rgba(180,80,255,0.3)]
          transition-all duration-300
          w-[90vw] md:w-auto
        "
      >
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-violet-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-violet-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-violet-300 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-violet-300 transition-colors">
              Contact
            </Link>
          </li>
          <li>
             <Link to="/resume" onClick={() => setOpen(false)} className="hover:text-violet-300 transition-colors">
            Resume
          </Link> 
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-violet-300 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            mt-3 md:hidden flex flex-col items-center gap-3
            backdrop-blur-lg bg-white/10
            border border-violet-400/30
            rounded-2xl text-white py-4 px-6
            w-[90vw] mx-auto shadow-[0_0_25px_rgba(180,80,255,0.3)]
            animate-fadeIn
          "
        >
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-violet-300 transition-colors">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-violet-300 transition-colors">
            About
          </Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-violet-300 transition-colors">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-violet-300 transition-colors">
            Contact
          </Link>
          <Link to="/resume" onClick={() => setOpen(false)} className="hover:text-violet-300 transition-colors">
            resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
