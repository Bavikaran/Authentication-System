import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import PasswordStrengthMeter from '../components/PasswordStrenthMeter';
import { User, Mail, Lock, Loader } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [strength, setStrength] = useState(0);
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const updateStrength = (newStrength) => {
    setStrength(newStrength);
  };

  useEffect(() => {
    console.log('Password strength:', strength);
  }, [strength]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name, userType); // Added userType
      navigate('/verify-email');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp} noValidate>
          <Input
            icon={User}
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <div className="mt-4">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full pl-4 pr-3 py-2 bg-gray-100 bg-opacity-50 rounded-lg border border-purple-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-black placeholder-gray-500 transition duration-200"
              required
            >
              <option value="" disabled>
                Select User Type
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

          <PasswordStrengthMeter password={password} updateStrength={updateStrength} />

          {strength < 3 && password.length > 0 && (
            <p className="text-sm text-red-600 mt-1">
              Please enter a stronger password to continue.
            </p>
          )}

          <motion.button
            type="submit"
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-700 
                      to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-emerald-700 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : 'Sign Up'}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-900">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
