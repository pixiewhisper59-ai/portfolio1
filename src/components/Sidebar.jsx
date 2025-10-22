import React, { useState } from "react";
import { Home, User, Folder, Mail, Menu, X } from "lucide-react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <Home size={22} />, label: "Home" },
    { icon: <User size={22} />, label: "About" },
    { icon: <Folder size={22} />, label: "Projects" },
    { icon: <Mail size={22} />, label: "Contact" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full transition-all duration-500 ease-in-out
        ${isOpen ? "w-64" : "w-20"} 
        bg-white/10 backdrop-blur-lg border-r border-white/20
        shadow-xl flex flex-col justify-between z-50`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          {isOpen && <h1 className="text-white text-lg font-semibold">Portfolio</h1>}
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-4 space-y-1 flex-grow">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(item.label)}
              className={`flex items-center gap-4 px-4 py-3 mx-2 rounded-xl transition-all
                ${
                  activeSection === item.label
                    ? "bg-white/30 text-cyan-300"
                    : "text-white hover:bg-white/20"
                }`}
            >
              {item.icon}
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 text-center text-gray-400 text-xs border-t border-white/10">
          {isOpen && <p>© 2025 Ahmed Raza</p>}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
