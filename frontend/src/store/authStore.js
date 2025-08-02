import { create } from 'zustand';
import axios from 'axios';

const API_URL = "https://backend-0482.onrender.com/api/auth";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  //  Signup Function
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
// Inside your useAuthStore definition
forgotPassword: async (email) => {
  set({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      "https://backend-0482.onrender.com/api/auth/forgot-password",
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


  //  Login Function
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

resetPassword: async (token, password) => {
  set({ isLoading: true, error: null });
  try {
    await axios.put(`https://backend-0482.onrender.com/api/auth/reset-password/${token}`, { password }, { withCredentials: true });
    set({ isLoading: false });
  } catch (err) {
    set({
      error: err.response?.data?.message || "Password reset failed",
      isLoading: false,
    });
    throw err;
  }
}


}));





