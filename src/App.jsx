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

function App() {
  

  return (
    <div className='min-h-screen bg-primary-color text-white'>
      <Toaster/>      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        {/* <Route path='/profile' element={<ProfilePage/>}/> */}
        <Route path='/categories' element={<Categoriespage/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-of-service' element={<TermsOfService/>}/>
        <Route path='/users/:id/verify/:token' element={<UserVerificationPage/>}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
        <Route path='/verify-otp' element={<VerifyOTPPage/>}/>
        <Route path='/reset-password' element={<ResetPasswordPage/>}/>

        
        {/*Protected Routes  */}
        <Route path='' element={<PrivateRoutes/>}> 
          <Route path='/profile' element={<ProfilePage/>}/> 
        </Route>
      </Routes>
    </div>
  )
}

export default App
