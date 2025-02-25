import { Link, useNavigate } from 'react-router-dom'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
import Input from '../components/Input'
import SignInImg from '/sign-in.png'
import Logo from '../components/Logo'
import GoogleOauth from '../components/GoogleOauth'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../store/slices/authSlice'


const SignInPage = () => {
  // const {setUserInfo, userInfo} = useContext(AppContext); 
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  console.log("SinInPage userInfo:", userInfo); // ✅ Should match AppContext state

  useEffect(() => {
    if(!!userInfo) {
      navigate('/profile');
    }
  }, [])

  const [formData, setFormData] = useState({    
    email: '',    
    password: '',    
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
  
    if (!formData.email.trim()) errors.email = 'email is required';
    if (!formData.password.trim()) errors.password = 'Password is required';
    if (!emailRegex.test(formData.email)) errors.email = 'Invalid email address';  
  
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
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({          
          email: formData.email,          
          password: formData.password
        }),
      });

      const data = await response.json()
      console.log('data', data);

      if(!data.success){        
        toast.error(data.message);
        throw new Error(data.message || 'Something went wrong');
      } 
      
      toast.success(data?.message);
      dispatch(setCredentials(data?.user));

      setFormData({        
        email: '',
        password: ''        
      });
      navigate('/profile');
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

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
            <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
              <div className='w-full'>
                <Input
                  placeholder={"Email Address"}
                  type={"email"}
                  input_styles="text-black"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder={"Password"}
                  type={"password"}
                  input_styles="text-black"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">{errors.password}</p>
                )}
              </div>
              <PrimaryBtn
                disabled={loading}
                text={loading ? 'Signing in...' : 'Sign In'}
                styles="mt-4 bg-[#0cf637] hover:bg-green-700 hover:text-white transition duration-500 text-black md:w-full xl:w-full"
              />
            </form>
            <div className='grid place-items-center mt-3 w-full'>
              <GoogleOauth bgColors={"bg-[#ff9d00] hover:bg-orange-700 md:w-full xl:w-full"}/>
            </div>            
            <p className='mt-4'>Don&apos;t have an account <Link to={"/signup"} className='text-[#0cf637] hover:underline'>Sign Up</Link></p>
            <p className='mt-4'><Link to={"/forgot-password"} className='text-[#0cf637] hover:underline'>Forgot password</Link></p>
          </div>
        </div>        
    </section>
  )
}

export default SignInPage