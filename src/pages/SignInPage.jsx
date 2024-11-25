import { Link } from 'react-router-dom'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
import Input from '../components/Input'
import SignInImg from '/sign-in.png'
import Logo from '../components/Logo'


const SignInPage = () => {
  return (
    <section className='h-screen grid grid-cols-1 sm:grid-cols-[40%_60%] p-3 '>
       <Link to={"/"} className='fixed top-4 left-5 z-[100]'>
          <Logo/>
        </Link>
        <div className='bg-white hidden sm:grid h-full place-items-center rounded-3xl  w-full overflow-hidden'>
          <img src={SignInImg} alt="Sign on Image" className=' w-full h-[90vh] mb-[-40px]' />
        </div>
        <div className='h-full grid place-items-center w-full'>
          <div className='w-[90%] mx-auto max-w-[450px]'>
            <h1 className='font-bold text-5xl mb-4'>Sign In</h1>
            <Input placeholder={"Email Address"} type={"email"} input_styles="text-black"/>
            <PrimaryBtn text="Sign In" styles="mt-4 bg-[#0cf637] hover:bg-green-700 hover:text-white transition duration-500 text-black md:w-full xl:w-full"/>
            <p className='mt-4'>Don&apos;t have an account <Link to={"/signup"} className='text-[#0cf637] hover:underline'>Sign Up</Link></p>
          </div>
        </div>        
    </section>
  )
}

export default SignInPage