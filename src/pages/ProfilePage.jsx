import React, { useEffect } from 'react'
import Dashboardwrapper from '../components/dashboardwrapper'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const fetchUserInfo = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/getUser`, {
            method: "GET",
            credentials: "include", // Ensures the cookie is sent
        });

        const data = await response.json();
        console.log("API Response:", data); // ✅ Check if API returns correct data

        if (data.success) {
            // setUserInfo(data.user);
            console.log('running test');
            console.log('succeeded in getting userData >>', data.user);
            toast.success(data.message);
        } else {
            // setUserInfo(null);
            console.log('failed to get userdata >>');
            if (data && (data.message === "Unauthorized, invalid token" || data.message === "Unauthorized, no token")) { // Check for specific error, also check if data exists
                localStorage.removeItem('userInfo');
                console.log('no token found');
                toast.error("Session expired. Please log in again.");
                navigate('/signin');
            } else if (data && data.message) { // Handle other potential backend errors
                toast.error(data.message);
            }
        }
    } catch (error) {
        console.error("Error fetching user info:", error);
        toast.error("An error occurred while fetching user data."); // User-friendly error message
    }
};
   
    // Run once on mount to check if user is already logged in
    useEffect(() => {
      console.log("Fetching user info on mount...");
      fetchUserInfo();
    }, []);
  return (
    <Dashboardwrapper>
      <div>ProfilePage</div>
    </Dashboardwrapper>
  )
}

export default ProfilePage