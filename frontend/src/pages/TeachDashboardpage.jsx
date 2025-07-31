// src/pages/TeacherDashboard.jsx

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const TeacherDashboard = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">👩‍🏫 Teacher Dashboard</h1>
        <p className="text-gray-700 mb-6">Welcome! Manage your teaching tools below.</p>

        <ul className="list-disc ml-6 text-gray-800 space-y-2">
          <li>🧑‍🎓 View and manage students</li>
          <li>📤 Upload resources and assignments</li>
          <li>📊 Track student progress</li>
          <li>💬 Send announcements</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TeacherDashboard;
