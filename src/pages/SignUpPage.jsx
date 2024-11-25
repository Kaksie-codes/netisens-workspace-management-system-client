import { Link } from 'react-router-dom'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
import Input from '../components/Input'
import BackgroundImg from '/signup-img.jpg'
import Logo from '../components/Logo'


const SignUpPage = () => {
  return (
    <section className="min-h-screen lg:h-screen  relative grid place-items-center overflow-y-hidden">
        <Link to={"/"} className='fixed top-2 left-2 z-[100]'>
          <Logo/>
        </Link>
        <img src={BackgroundImg} alt="sign-up background" className='h-full w-full object-cover' />
        <div className='absolute inset-0 bg-black/50 z-50'></div>
        <form action="" className='absolute bg-white z-[100] text-black w-[90%] p-4 max-w-[600px] rounded-3xl'>
          <p className='italic font-bold text-xl lg:text-2xl text-center'>Find your <span className='text-[#13D10F]'>perfect</span> space with our help.</p>
          <h1 className='text-4xl text-center poppins mt-4'>Welcome!</h1>
          <p className='text-center font-medium  mt-4'>Enter your info to proceed securely.</p>
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
          <p className='text-[#6D6A6A] text-base mt-4 text-center'>Already have an account? <Link to={'/signin'} className='text-[#009de9] hover:underline'>Sign in </Link> </p>
          <p className='text-[#6D6A6A] text-sm mt-4 text-center'>By filling the following information and clicking on this button you have agreed to our <Link to={"/terms-of-service"} className='underline'>Terms of Service</Link> and <Link to={"/privacy-policy"} className='underline'>Privacy Policy.</Link></p>
        </form>
    </section>
  )
}

export default SignUpPage