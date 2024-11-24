// import Header from "../components/Header"
import { Link } from 'react-router-dom'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
import Input from '../components/Input'
import BackgroundImg from '/signup-img.jpg'


const SignUpPage = () => {
  return (
    <section className="min-h-screen lg:h-screen  relative grid place-items-center overflow-y-hidden">
        <img src={BackgroundImg} alt="sign-up background" className='h-full w-full object-cover' />
        <form action="" className='absolute bg-white text-black w-[90%] p-4 max-w-[600px] rounded-3xl'>
          <p>Find your <span className='text-[#13D10F]'>perfect</span> space with our help.</p>
          <h1>Welcome!</h1>
          <p>Enter your info to proceed securely.</p>
          <div className='flex flex-col gap-2 mt-6'>
            <div className='flex flex-col lg:flex-row gap-2 items-center w-full'>
              <Input type={"text"} placeholder={"Üsername"}/>
              <Input type={"email"} placeholder={"Email Address"}/>              
            </div>
            <div className='flex flex-col lg:flex-row gap-2 items-center w-full'>
              <Input type={"select"} placeholder={"Gender"}/>
              <Input type={"number"} placeholder={"Phone number"}/>              
            </div>
            <div className='flex flex-col lg:flex-row gap-2 items-center w-full'>
              <Input type={"password"} placeholder={"Password"}/>
              <Input type={"password"} placeholder={"Confirm Password"}/>              
            </div>            
          </div>
          <div className='mt-10 text-center'>
            <PrimaryBtn text="Get Started" styles="bg-[#ff9d00] hover:bg-orange-700 transition duration-500 text-white"/>
          </div>
          <p className='text-[#6D6A6A] text-base mt-4 text-center'>Dont have an account? <Link to={'/signup'} className='text-[#009de9] hover:underline'>Sign Up </Link> </p>
          <p className='text-[#6D6A6A] text-sm mt-4 text-center'>By filling the following information and clicking on this button you have agreed to our <Link to={""} className='underline'>Terms of Service</Link> and <Link to={""} className='underline'>Company Policy.</Link></p>
        </form>
    </section>
  )
}

export default SignUpPage