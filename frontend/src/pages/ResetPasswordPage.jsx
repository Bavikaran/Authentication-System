import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Input from '../components/Input';
import { Lock, Loader } from 'lucide-react';
import { useAuthStore } from '../store/authStore'; 

const ResetPasswordPage = () => {
  const { token } = useParams(); // Get reset token from URL
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { resetPassword, isLoading, error, setError } = useAuthStore(); // Use the error state from the store

  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, password);  // Call the reset password function from the store
      setSuccess(true);  // Set success state to true
      setTimeout(() => navigate('/login'), 2000);  // Redirect to login after 2 seconds
    } catch (err) {
      console.error("Reset failed", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-purple-600 text-transparent bg-clip-text">
          Reset Password
        </h2>

        {success ? (
          <p className="text-green-500 text-center">Password reset successful! Redirecting...</p>
        ) : (
          <form onSubmit={handleReset}>
            <p className="text-gray-700 text-center mb-4">Enter your new password</p>

            <Input
              icon={Lock}
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>  // Display error if exists
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-emerald-500 hover:to-purple-500 transition duration-200"
            >
              {isLoading ? <Loader className="animate-spin mx-auto" /> : "Update Password"}
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ResetPasswordPage;
