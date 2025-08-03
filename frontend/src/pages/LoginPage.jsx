import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Lock, Loader } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore'; 
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    // Attempt to log in the user
    await login(email, password);

    // Get the current user after login
    const currentUser = useAuthStore.getState().user;

    if (currentUser?.isVerified) {
      // If verified, navigate to the appropriate dashboard
      navigate(currentUser?.userType === 'student' ? '/student-dashboard' : '/teacher-dashboard');
    } else {
      // If account is not verified, show an error message with verification prompt
      setErrorMessage(
        <p>
          Your account is not verified.{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => navigate('/verify-email')} // Navigate to the verification page
          >
            Please verify your email.
          </span>
        </p>
      );
    }
  } catch (err) {
    console.error("Login error:", err);

    // Check if the error is related to the user not being found or unverified account
    if (err.response?.data?.message === "User not found") {
      setErrorMessage("User does not exist. Please check your email.");
    } else if (err.response?.data?.message.includes("verification email")) {
      // If verification is required, show message and navigate to verification page
      setErrorMessage("Your account is not verified. A verification email has been sent. Please check your inbox.");
      navigate("/verify-email");
    } else {
      setErrorMessage(err.response?.data?.message || "Invalid credentials");
    }
  } finally {
    setIsLoading(false);
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

        {/* Displaying the errorMessage with the link */}
        {errorMessage && <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>}

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

        {/* Sign up Link */}
        <div className='text-center mt-4'>
          <p className='text-sm text-gray-900'>
            Don't have an account?{' '}
            <Link to='/signup' className='text-blue-600 hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
