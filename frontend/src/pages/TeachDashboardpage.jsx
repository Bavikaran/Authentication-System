/*import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { User, Upload, BarChart2, Megaphone, LogOut } from "lucide-react";

const TeacherDashboard = () => {
  return (
    <motion.div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1470&q=80')`,
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full bg-white bg-opacity-90 p-10 relative overflow-y-auto">

        
        <button className="absolute top-6 right-6 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow">
          <LogOut size={18} />
          Logout
        </button>

        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
          👩‍🏫 Teacher Dashboard
        </h1>
        <p className="text-gray-700 text-center mb-10 text-lg">
          Welcome back! Here's everything you need to manage your class efficiently.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          
          <div className="bg-blue-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <User className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Manage Students</h2>
            <p className="text-gray-600 mb-4">View, edit, and monitor student details and academic records.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              View Students
            </button>
          </div>

         
          <div className="bg-green-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <Upload className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Upload Resources</h2>
            <p className="text-gray-600 mb-4">Share assignments, notes, and learning materials with your students.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              Upload Files
            </button>
          </div>

         
          <div className="bg-yellow-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <BarChart2 className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
            <p className="text-gray-600 mb-4">Analyze student performance and generate progress reports.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              View Reports
            </button>
          </div>

          
          <div className="bg-pink-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <Megaphone className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Send Announcements</h2>
            <p className="text-gray-600 mb-4">Keep students informed with important updates and messages.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeacherDashboard; */

import { useNavigate } from "react-router-dom"; 
// eslint-disable-next-line no-unused-vars  
import { motion } from "framer-motion";
import { User, Upload, BarChart2, Megaphone, LogOut } from "lucide-react";

const TeacherDashboard = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleLogout = () => {
    // Optionally, you can clear any authentication data, like tokens
    // localStorage.removeItem('authToken');  // Example: Clear token

    navigate("/login");  // Navigate to login page
  };

  return (
    <motion.div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1470&q=80')`,
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full bg-white bg-opacity-90 p-10 relative overflow-y-auto">

        {/* Logout Button */}
        <button
          className="absolute top-6 right-6 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow"
          onClick={handleLogout}  // Set onClick to handleLogout
        >
          <LogOut size={18} />
          Logout
        </button>

        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
          👩‍🏫 Teacher Dashboard
        </h1>
        <p className="text-gray-700 text-center mb-10 text-lg">
          Welcome back! Here's everything you need to manage your class efficiently.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Manage Students */}
          <div className="bg-blue-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <User className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Manage Students</h2>
            <p className="text-gray-600 mb-4">View, edit, and monitor student details and academic records.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              View Students
            </button>
          </div>

          {/* Upload Resources */}
          <div className="bg-green-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <Upload className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Upload Resources</h2>
            <p className="text-gray-600 mb-4">Share assignments, notes, and learning materials with your students.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              Upload Files
            </button>
          </div>

          {/* Track Progress */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <BarChart2 className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
            <p className="text-gray-600 mb-4">Analyze student performance and generate progress reports.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              View Reports
            </button>
          </div>

          {/* Send Announcements */}
          <div className="bg-pink-50 p-6 rounded-xl shadow flex flex-col items-center text-center">
            <Megaphone className="w-10 h-10 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700" />
            <h2 className="text-xl font-semibold mb-2">Send Announcements</h2>
            <p className="text-gray-600 mb-4">Keep students informed with important updates and messages.</p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeacherDashboard;

