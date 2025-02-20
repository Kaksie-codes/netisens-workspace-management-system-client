import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const PrivateRoutes = () => {
  const { userInfo } = useContext(AppContext);  
  console.log("PrivateRoutes - userInfo:", userInfo);
  return userInfo ? <Outlet/> : <Navigate to={'/signin'}/>
}

export default PrivateRoutes