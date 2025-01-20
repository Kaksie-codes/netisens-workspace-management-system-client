import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import GoogleIcon from '/google.png'
import { app } from '../firebase';
import { AppContext } from "../context/AppContext";
import PrimaryBtn from "./buttons/PrimaryBtn";

const GoogleOauth = ({bgColors}) => {    
    const {setUserInfo} = useContext(AppContext);
    const [isLoading, setIsloading] = useState(false); 

    const handleClick = async () => { 
        try{
            setIsloading(true);
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider); 
            console.log({result});
            const res = await fetch(`http://localhost:3050/api/auth/google-auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }),
            })
            const data = await res.json();
            const { user, success, message} = data
            if(!success){
                toast.error(message);
                console.log(message)
            }else{
                toast.success(message);
                console.log(message);
                setTimeout(() => {
                    setUserInfo(user);
                }, 3000)
            }            
        }catch(err){
            console.log(`couldn't log in with google`, err);            
        }finally{
            setIsloading(false);
        }
    }

  return (    
    <PrimaryBtn
        text={isLoading ? 'Signing In...' : 'Continue with Google'}
        styles={`${bgColors} transition duration-500 text-white`}
        disabled={isLoading}
        onClick={handleClick}
        icon={<img src={GoogleIcon} alt="google icon" className="w-5" />}
    />
  )
}

export default GoogleOauth