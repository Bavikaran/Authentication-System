import { Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import StuDashboardpage from './pages/StuDashboardpage';
import TeachDashboardpage from './pages/TeachDashboardpage';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"; 
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ResetPasswordPage from './pages/ResetPasswordPage';
import LandingPage from './pages/LandingPage'; // Assuming you have this component

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-violet-400 flex items-center justify-center relative overflow-hidden'>
      <FloatingShape color="bg-purple-600" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-pink-600" size="w-60 h-60" top="50%" left="70%" delay={5} />
      <FloatingShape color="bg-orange-600" size="w-48 h-48" top="40%" left="-10%" delay={2} />

      <Routes>
        {/* Make LandingPage the first route */}
        <Route path='/' element={<LandingPage />} /> {/* This will be the default route */}
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
        
        {/* Protected Routes */}
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StuDashboardpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher-dashboard"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <TeachDashboardpage />
            </ProtectedRoute>
          }
        />

        {/* Other routes like sign up, etc. */}
        <Route path='/signup' element={<SignUpPage />} /> {/* Can be used for sign up if needed */}
      </Routes>
    </div>
  );
}

export default App;


