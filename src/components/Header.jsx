import { Link } from "react-router-dom"
import Logo from "./Logo"
import { HambergerMenu } from "iconsax-react"
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";


const Header = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <header className="h-[70px]">
        <div className="container px-4 flex items-center justify-between h-full">
            <Link to={"/"}>
                <Logo size={"small"}/>
            </Link>
            <div onClick={() => setShowNav(true)} className="block lg:hidden">
                <HambergerMenu size="32" color="#ffffff"/>
            </div>
            <div className={` ${showNav ? "inset-0 bg-white/10 fixed backdrop-blur-sm" : "hidden"}`}></div>
            {/* ${showNav ? "right-0 " : "right-[-100%]"}  w-[60%] h-screen text-2xl flex flex-col items-center gap-3 justify-center absolute transition-all duration-[1s] bottom-0 */}
            <ul className={`navbar bg-primary-color ${showNav ? "show" : ''} `}>
                <div onClick={() => setShowNav(false)} className={` ${showNav ? "absolute top-4 right-4 text-4xl text-white hover:text-orange-600" : "hidden"}`}>
                    <IoCloseCircleOutline  />                   
                </div>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/signin'}>Sign In</Link>
                </li>
                <li>
                    <Link to={'/signup'}>Sign Up</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header