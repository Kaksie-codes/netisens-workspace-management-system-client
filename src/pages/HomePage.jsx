import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import HomeSlider from "../components/homeslider/HomeSlider"


const HomePage = () => {
  return (
    <section className="relative w-full h-screen md:grid place-items-center overflow-hidden">
        <Link to={"/"} className='fixed top-2 left-2 z-[100]'>
          <Logo/>
        </Link>
          <div className="flex flex-col md:flex-row md:items-center container">
            <div className="mt-[50px] w-full md:flex-[0.4] md:w-[50%]">
                <h1 className="font-bold text-[#E28A06] text-3xl">Welcome</h1>
                <h2 className="font-extrabold text-5xl w-[200px] md:w-full text-[#13D10F]">Blessing Akpan</h2>
                <h2 className="font-bold text-[#E28A06] text-2xl ">to Netisens Workspace!</h2>
                <p></p>
            </div>
            <div className="md:flex-[0.6] md:w-[50%]">
                <HomeSlider/>
            </div>
          </div>
          <div className="text-center">
            <p>Workpace options for every need.</p>
            <p>Choose your preferred workspace</p>
          </div>
        
    </section>
  )
}

export default HomePage