import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import Input from '../components/Input';
import Logo from '../components/Logo';
import toast from 'react-hot-toast';
import { AppContext } from '../context/AppContext';
import GoogleOauth from '../components/GoogleOauth';



const SignUpPage = () => {
  const {setUserInfo, userInfo} = useContext(AppContext); 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    gender: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // Clear error for that field
  };
  

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.username.trim()) errors.username = 'Username is required';
    if (!emailRegex.test(formData.email)) errors.email = 'Invalid email address';
    if (!formData.gender) errors.gender = 'Please select your gender';
    if (!formData.phone_number.trim()) errors.phone_number = 'Phone number is required';
    if (formData.password.length < 8)
      errors.password = 'Password must be at least 8 characters long';
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = 'Passwords do not match';
  
    console.log(errors); // Log errors to debug
    return errors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    // Set only if there are errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return;
    }
    

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          gender: formData.gender,
          phone_number: formData.phone_number,
          password: formData.password,
        }),
      });

      const data = await response.json()
      console.log('data', data);

      if(!data.success){        
        toast.error(data.message);
        throw new Error(data.message || 'Something went wrong');
      } 
      
      toast.success(data?.message);
      setUserInfo({name: 'Moses', age: 40})
      setFormData({
        username: '',
        email: '',
        gender: '',
        phone_number: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup min-h-screen  lg:h-screen relative grid place-items-center overflow-y-scroll">
      <Link to="/" className="fixed top-2 left-2 z-[100]">
        <Logo />
      </Link>
      {/* <img
        src={BackgroundImg}
        alt="sign-up background"
        className="h-full w-full max-h-full object-cover"
      /> */}
      {/* <div className="absolute inset-0 bg-black/50 z-50 h-full w-full"></div> */}
      <div className="absolute bg-white z-[100] text-black w-[90%] p-4 max-w-[700px] rounded-3xl my-6">
        <form
          onSubmit={handleSubmit}
          autoComplete="new"          
        >
          <p className="italic font-bold text-xl lg:text-2xl text-center">
            Find your <span className="text-[#13D10F]">perfect</span> space with
            our help.
          </p>
          <h1 className="text-4xl text-center poppins mt-4">Welcome!</h1>
          <p className="text-center font-medium mt-4">
            Enter your info to proceed securely.
          </p>
          {errors.general && (
            <p className="text-red-600 text-center">{errors.general}</p>
          )}
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex flex-col lg:flex-row gap-2 items-center w-full">
              <div className='w-full'>
                <Input
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                />
                 {errors.username && (
                  <p className="text-red-600 text-sm">{errors.username}</p>
                )}
              </div>
              <div className='w-full'>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-center w-full">
              <div className='w-full'>
                <Input
                  type="select"
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                />
                {errors.gender && (
                  <p className="text-red-600 text-sm">{errors.gender}</p>
                )}
              </div>
              <div className='w-full'>
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={formData.phone_number}
                  onChange={(e) => handleInputChange('phone_number', e.target.value)}
                />
                {errors.phone_number && (
                  <p className="text-red-600 text-sm">{errors.phone_number}</p>
                )}
              </div>
            </div> 
            <div className="flex flex-col lg:flex-row gap-2 items-center w-full">
              <div className="w-full">
                <Input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">{errors.password}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange('confirmPassword', e.target.value)
                  }
                />
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </div> 
          </div>
          <div className='grid place-items-center gap-2'>
            <div className="mt-10 text-center">
              <PrimaryBtn
                text={loading ? 'Signing Up...' : 'Get Started'}
                styles="bg-[#ff9d00] hover:bg-orange-700 transition duration-500 text-white"
                disabled={loading}
              />
            </div>        
          </div>            
        </form>
        <div className='grid place-items-center mt-3'>
          <GoogleOauth bgColors={"bg-black hover:bg-black/80"}/>
        </div>
        <p className="text-[#6D6A6A] text-base mt-4 text-center">
            Already have an account?{' '}
            <Link to={'/signin'} className="text-[#009de9] hover:underline">
              Sign in{' '}
            </Link>
          </p>
          <p className="text-[#6D6A6A] text-sm mt-4 text-center">
            By filling the following information and clicking on this button you
            have agreed to our{' '}
            <Link to="/terms-of-service" className="underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy-policy" className="underline">
              Privacy Policy.
            </Link>
          </p>        
      </div>
    </section>
  );
};

export default SignUpPage;
