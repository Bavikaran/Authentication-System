import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars  
import { motion } from "framer-motion";
import { BookOpen, User, FileText, LogOut } from "lucide-react";

const FullScreenDashboard = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleLogout = () => {
    // Optionally, clear any authentication data (e.g., tokens, user info)
    // localStorage.removeItem('authToken');  // Example: Clear token

    navigate("/login");  // Redirect to login page
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center flex items-center justify-center"
    >
      <div className="w-full h-full max-h-screen overflow-y-auto bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-10 relative">
        
        {/* Logout Button */}
        <div className="absolute top-6 right-6 z-50">
          <button
            className="flex items-center gap-3 px-6 py-3 border-2 border--700 text-white text-lg font-bold rounded-full hover:bg-red-100 hover:text-red-700 transition-all duration-200"
            onClick={handleLogout}  // Set the onClick to handleLogout
          >
            <LogOut size={24} /> 
            Log Out
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-300 to-emerald-500 text-transparent bg-clip-text">
          🎓 Welcome, Student!
        </h1>
        <p className="text-white text-center max-w-xl mx-auto mb-10 text-lg drop-shadow-sm">
          This is your personalized learning space. Explore courses, track your progress, and unlock your full potential!
        </p>

        {/* Start Your Learning Journey */}
        <div className="w-full max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-purple-300 drop-shadow-md">
            Start Your Learning Journey
          </h2>
          <p className="text-white drop-shadow-sm">
            Stay ahead by exploring new knowledge every day. This dashboard helps you stay organized, motivated, and on track with your academic goals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-12">
          <div className="bg-white/80 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <BookOpen className="text-purple-600 mb-3" size={40} />
            <h3 className="font-semibold text-xl mb-2">Your Courses</h3>
            <p className="text-sm text-center text-gray-700 mb-4">
              Access all your enrolled courses and learning materials.
            </p>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full hover:brightness-110 transition">
              View Courses
            </button>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <FileText className="text-purple-600 mb-3" size={40} />
            <h3 className="font-semibold text-xl mb-2">Assignments</h3>
            <p className="text-sm text-center text-gray-700 mb-4">
              Submit assignments, view grades, and feedback from your lecturers.
            </p>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full hover:brightness-110 transition">
              View Assignments
            </button>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <User className="text-purple-600 mb-3" size={40} />
            <h3 className="font-semibold text-xl mb-2">Profile</h3>
            <p className="text-sm text-center text-gray-700 mb-4">
              Manage your profile information and account settings.
            </p>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full hover:brightness-110 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FullScreenDashboard;
