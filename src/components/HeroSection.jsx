import PrimaryBtn from './buttons/PrimaryBtn'
// import SecondaryBtn from './buttons/SecondaryBtn'
import Logo from './Logo'
import HeroImg from '/hero-img.png'

const HeroSection = () => {
  return (
    <section className='hero'>
        <div className="container px-4  grid gap-5 grid-cols-1 place-items-center lg:grid-cols-2 h-full ">
            <div className='h-[60vh] hidden lg:block max-h-[350px] xl:max-h-[400px] self-center px-10'>
                <img src={HeroImg} alt="hero image" className='h-full'/>
            </div>
            <div className='self-center'>
                <Logo size="big"/>
                <h1 className='text-5xl md:text-6xl xl:text-[96px] italic font-extrabold text-green-color'>Workspace</h1>
                <p className='text-xl my-5 xl:w-[450px]'>Innovative workspaces - public, private, and semi-private. Boost your productivity!</p>
                <div className="flex mt-5 flex-col max-sm:pr-5 md:flex-row items-center lg:items-start justify-start gap-4">
                  <PrimaryBtn text="Get Started" styles="bg-[#ff9d00] hover:bg-orange-700 transition duration-500"/>
                  <PrimaryBtn text="I'm already registered" styles="bg-[#ff9d00] hover:bg-orange-700 transition duration-500"/>
                  {/* <SecondaryBtn text="I'm already registered" styles="bg-primary-color"/> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection