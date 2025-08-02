import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  BookOpen,
  Activity,
  Users,
} from 'lucide-react';

const App = () => {
  return (
    <div className="text-gray-800 font-inter">
      <main className="min-h-screen flex items-center justify-center px-6 md:px-12">
        {/* Flex container: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-purple-900">
              Welcome<br />
              <span className="text-purple-500">to edu-Hub</span>
            </h1>
            <p className=" mt-4 text-lg md:text-xl text-ash-600">
              At edu-Hub, we believe in empowering everyone to learn and grow. Our platform connects students with world-class courses taught by experienced instructors across diverse fields.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              {/* Login Button - Now a Link to navigate to login page */}
              <Link to="/login">
                <button className="bg-purple-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg">
                  Login
                </button>
              </Link>

              {/* SignUp Button - Link to navigate to signup page */}
              <Link to="/signup">
                <button className="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors duration-200 shadow-lg">
                  SignUp
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: SVG Image */}
          <div className="md:w-1/2">
            <img
              src="/edu.svg"
              alt="Education Illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
