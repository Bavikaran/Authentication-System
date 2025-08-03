import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Lock, Loader } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore'; 
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerificationLoading, setIsVerificationLoading] = useState(false); // To show verification loading
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Attempt to log the user in
      await login(email, password);

      // Now that the login is successful, retrieve the latest user data
      const currentUser = useAuthStore.getState().user;

      // Check if the account is verified
      if (currentUser?.isVerified) {
        // Redirect to the appropriate dashboard based on userType
        if (currentUser?.userType === 'student') {
          navigate('/student-dashboard');
        } else if (currentUser?.userType === 'teacher') {
          navigate('/teacher-dashboard');
        } else {
          navigate('/'); // Redirect to a default dashboard or home
        }
      } else {
        // If the account is not verified, show an error message
        setErrorMessage(
          <>
            Your account is not verified.{' '}
            <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={handleVerification}
            >
              Please verify your email.
            </span>
          </>
        );
      }
    } catch (err) {
      console.error("Login error:", err);

      // Check if the error is due to "User not found"
      if (err.response?.data?.message === "User not found") {
        setErrorMessage("User does not exist. Please check your email.");
      } else {
        setErrorMessage(err.response?.data?.message || "Invalid credentials");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async () => {
    try {
      setIsVerificationLoading(true);
      // Trigger the API call to send the verification email
      await axios.post("https://backend-0482.onrender.com/api/auth/send-verification-email", { email });
      setErrorMessage("Verification email has been sent. Please check your inbox.");
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setErrorMessage("Failed to resend verification email. Please try again.");
    } finally {
      setIsVerificationLoading(false);
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

        {/* Show loading text when verification email is being sent */}
        {isVerificationLoading && <p className="text-center text-sm text-blue-500">Sending verification email...</p>}
      </div>
    </motion.div>
  );
};

export default LoginPage;
