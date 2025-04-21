import React from "react";
import { useNavigate } from "react-router-dom";

const Launch = () => {
  const navigate = useNavigate();

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('../bg3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative text-center px-28 py-8 bg-black bg-opacity-60 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Login Successful</h1>
        <p className="text-lg mb-6">
          Continue to page
          <i className="ri-arrow-right-up-line ml-2"></i>
        </p>

        <button onClick={() => navigate("/home")} className="px-6 py-3 bg-gray-300 text-black rounded-md text-lg hover:bg-gray-400 transition">
            Launch
        </button>
      </div>
    </main>
  );
};

export default Launch;
