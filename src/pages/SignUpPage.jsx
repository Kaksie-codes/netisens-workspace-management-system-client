// import Header from "../components/Header"
import Input from '../components/Input'
import BackgroundImg from '/signup-img.jpg'


const SignUpPage = () => {
  return (
    <section className="h-screen relative grid place-items-center overflow-y-hidden">
        <img src={BackgroundImg} alt="sign-up background" className='h-full w-full object-cover' />
        <form action="" className='absolute bg-white text-black w-[90%] p-4 rounded-3xl'>
          <p>Find your <span className='text-[#13D10F]'>perfect</span> space with our help.</p>
          <h1>Welcome!</h1>
          <p>Enter your info to proceed securely.</p>
          <div>
            <div>
              <Input type={"text"} placeholder={"Üsername"}/>
              <Input type={"password"} placeholder={"Password"}/>
              <Input type={"number"} placeholder={"Phone number"}/>
            </div>
            <div></div>
          </div>
        </form>
    </section>
  )
}

export default SignUpPage