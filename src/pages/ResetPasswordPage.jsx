import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import InputBox from '../components/InputBox';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify'; // Ensure toast is installed and configured
import Logo from '../components/Logo'; // Ensure Logo component is properly imported

const ResetPasswordPage = () => {
  const { userInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    const validationErrors = {};
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!passwordRegex.test(formData.password))
      validationErrors.password = 'Password must include uppercase, lowercase, and numbers';
    if (formData.password.length < 8)
      validationErrors.password = 'Password must be at least 8 characters long';
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = 'Passwords do not match';

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/resetPassword`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newPassword: formData.password,
        }),
      });

      const data = await response.json();
      if (!data.success) {
        toast.error(data.message);
        throw new Error(data.message || 'Something went wrong');
      }

      toast.success('Password updated successfully');
      setFormData({
        password: '',
        confirmPassword: '',
      });
      navigate('/'); // Redirect to home or login page
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {userInfo ? (
        <Navigate to="/" />
      ) : (
        <section className="grid place-items-center bg-grey min-h-screen">
          <Link to={'/'} className="flex items-center justify-center gap-1 fixed top-3 left-6">
            <Logo />
          </Link>
          <div className="h-auto bg-white w-auto relative overflow-hidden p-4 md:p-12 rounded-20 shadow-lg">
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className="text-4xl text-green-600 font-extrabold capitalize text-center mb-12">
                Reset Password
              </h1>
              <InputBox
                name="password"
                type="password"
                placeholder="New Password"
                onChange={(e) => handleInputChange('password', e.target.value)}
                value={formData.password}
                errorMessage={errors.password}
              />
              <InputBox
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                value={formData.confirmPassword}
                errorMessage={errors.confirmPassword}
              />
              {errors.general && (
                <p className="text-red-500 text-center mt-2">{errors.general}</p>
              )}
              <PrimaryBtn
                onClick={handleSubmit}
                disabled={loading}
                text={loading ? 'Updating...' : 'Update Password'}
                styles="mt-4 bg-green-500 hover:bg-green-700 hover:text-white transition duration-500 text-black md:w-full"
              />
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default ResetPasswordPage;
