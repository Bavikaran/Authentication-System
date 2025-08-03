import { create } from 'zustand';
import axios from 'axios';

const API_URL = "https://backend-0482.onrender.com/api/auth";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  // Signup Function
  signup: async (email, password, name, userType) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(
        `${API_URL}/signup`,
        { email, password, name, userType },
        { withCredentials: true }
      );

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  // Forgot Password Function
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(
        `${API_URL}/forgot-password`,
        { email },
        { withCredentials: true }
      );

      set({ isLoading: false });
      console.log("Reset email sent:", response.data.message);
    } catch (err) {
      console.error("Forgot password error:", err);
      set({
        error: err.response?.data?.message || "Failed to send reset link",
        isLoading: false,
      });
      throw err;
    }
  },

  // Login Function
 login: async (email, password) => {
  set({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      { withCredentials: true }
    );

    set({
      user: response.data.user,
      isAuthenticated: true,
      isLoading: false,
    });
  } catch (error) {
    set({
      error: error.response?.data?.message || "Login failed",
      isLoading: false,
    });
    throw error;
  }
},
  // Reset Password Function
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });  // Start loading and clear previous errors

    try {
      const response = await axios.put(
        `${API_URL}/reset-password/${token}`,
        { password },
        { withCredentials: true }
      );

      set({ isLoading: false });  // Set loading state to false
      console.log('Password reset successful:', response.data.message);
    } catch (err) {
      set({
        error: err.response?.data?.message || "Password reset failed",
        isLoading: false,
      });

      console.error('Error during password reset:', err.response?.data || err.message);
      throw err;  // Optionally re-throw the error if you want to handle it elsewhere
    }
  },

  // Check Auth (Optional, for initial loading/checking of user authentication)
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get(`${API_URL}/check-auth`, { withCredentials: true });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      set({
        isAuthenticated: false,
        isCheckingAuth: false,
      });
    }
  }
}));
