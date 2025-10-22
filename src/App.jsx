import React from "react";
import { BrowserRouter } from "react-router-dom";
import CapsuleNavbar from "./components/CapsuleNavbar";
import LiquidEther from "./components/Background";
import AppRoutes from "./routes/AppRoutes"; // ✅ Import centralized routes

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-black -z-10">
          <LiquidEther />
        </div>

        {/* Navbar */}
        <CapsuleNavbar />

        {/* Main Content */}
        <main className="pt-24 px-6 transition-all duration-700 min-h-screen">
          <AppRoutes /> {/* ✅ Just use AppRoutes */}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
