import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


import { Mail, Lock, Loader } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const { user } = useAuthStore.getState(); // get current user after login

      // Redirect based on userType
      if (user?.userType === 'student') {
        navigate("/student-dashboard");
      } else if (user?.userType === 'teacher') {
        navigate("/teacher-dashboard");
      } else {
        navigate("/"); // fallback
      }

    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-white/20 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    >
      <div className='p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text'>
          Welcome Back
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className='flex items-center mb-6'>
            <Link to='/forgot-password' className='text-sm text-blue-500 hover:underline'>
              Forgot password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full py-3 px-4 bg-gradient-to-r from-purple-700 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-emerald-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Loader className='w-5 h-6 animate-spin text-center mx-auto' /> : "Login"}
          </motion.button>
        </form>
      </div>

      <div className='px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center'>
        <p className='text-sm text-gray-900'>
          Don't have an account?{" "}
          <Link to='/signup' className='text-blue-600 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;
