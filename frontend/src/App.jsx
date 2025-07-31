import { Route, Routes } from "react-router-dom";
import StuDashboardpage from './pages/StuDashboardpage';
import TeachDashboardpage from './pages/TeachDashboardpage';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPasswordPage  from "./pages/ForgotPasswordPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"; 
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {

  return (
   
  
    <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage/>} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
       <Route path="/student-dashboard" element={<ProtectedRoute allowedRoles={['student']}><StuDashboardpage /></ProtectedRoute> }
/>

<Route
  path="/teacher-dashboard"
  element={
    <ProtectedRoute allowedRoles={['teacher']}>
      <TeachDashboardpage />
    </ProtectedRoute>
  }
/>

        
      </Routes>

  )
}

export default App;
