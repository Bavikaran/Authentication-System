// src/pages/StudentDashboard.jsx

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const StudentDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-2xl mx-auto mt-10 w-full bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text">
          🎓 Student Dashboard
        </h2>

        <p className="text-gray-800 text-center mb-6">
          Welcome to your personalized learning space.
        </p>

        <div className="bg-gray-100 bg-opacity-60 rounded-lg p-5 shadow-inner">
          <ul className="list-disc list-inside text-gray-900 space-y-3 font-medium">
            <li>📚 View enrolled courses</li>
            <li>📝 Submit assignments</li>
            <li>📈 Track your grades</li>
            <li>💬 Connect with teachers</li>
          </ul>
        </div>
      </div>

      <div className="px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-900">
          Need help?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default StudentDashboard;
