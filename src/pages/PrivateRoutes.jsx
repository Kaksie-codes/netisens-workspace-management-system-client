import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust the path to your AuthContext

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoutes;