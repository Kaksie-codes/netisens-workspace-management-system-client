import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import TermsOfService from './pages/terms-of-service'
import PrivacyPolicy from './pages/privacy-policy'
import Categoriespage from './pages/Categoriespage'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'
import UserVerificationPage from './pages/UserVerificationPage'
import ProfilePage from './pages/ProfilePage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import VerifyOTPPage from './pages/VerifyOTPPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import PrivateRoutes from './components/PrivateRoutes'
import DashboardPage from './pages/DashboardPage'
import { useEffect } from 'react'
import Cookies from 'js-cookie';

function App() {
//   useEffect(() => {
//     const accessToken = Cookies.get('accessToken');

//     if (!accessToken) {
//         console.log("No accessToken found in cookies. Dispatching logout.");
//         // dispatch(logout());
//     } else {
//         console.log("accessToken found in cookies:", accessToken);
//         // Optionally, you could verify the token here if you want to be extra sure
//         // before considering the user logged in.  You might have a
//         // separate action called something like `CHECK_AUTH_STATUS` that
//         // verifies the token with the backend and updates userInfo.
//     }
// }, []);

  return (
    <div className='min-h-screen bg-primary-color text-white'>
      <Toaster/>      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>        
        {/* <Route path='/profile' element={<ProfilePage/>}/> */}
        <Route path='/categories' element={<Categoriespage/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-of-service' element={<TermsOfService/>}/>
        <Route path='/users/:id/verify/:token' element={<UserVerificationPage/>}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
        <Route path='/verify-otp' element={<VerifyOTPPage/>}/>
        <Route path='/reset-password' element={<ResetPasswordPage/>}/> 
                 
        
        
        {/* Protected Routes  */}
        <Route path='' element={<PrivateRoutes/>}>  
          <Route path='/profile' element={<ProfilePage/>}/>         
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/admin' element={<DashboardPage/>}>
            <Route path='/admin/' element={<HomePage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
