import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import TermsOfService from './pages/terms-of-service'
import PrivacyPolicy from './pages/privacy-policy'
import Categoriespage from './pages/Categoriespage'

function App() {
  

  return (
    <div className='min-h-screen bg-primary-color text-white'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/categories' element={<Categoriespage/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-of-service' element={<TermsOfService/>}/>
      </Routes>
    </div>
  )
}

export default App
