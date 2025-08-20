import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgLogin from '../assets/bglogin.jpg';
import logoUnion from '../assets/Union.png';

const SignUp = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign up attempt:', formData);
      setIsLoading(false);
      // Handle sign up logic here
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Sign Up Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Tab Selection */}
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === 'general' 
                  ? 'text-black' 
                  : 'text-gray-400'
              }`}
              style={{ fontFamily: 'Futura' }}
            >
              general
            </button>
            <div className="w-px h-4 bg-gray-300 mx-4"></div>
            <button
              onClick={() => setActiveTab('exhibitor')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === 'exhibitor' 
                  ? 'text-black' 
                  : 'text-gray-400'
              }`}
              style={{ fontFamily: 'Futura' }}
            >
              exhibitor
            </button>
          </div>

          {/* Header */}
          <div>
            <h2 
              className="text-3xl font-bold text-gray-900 mb-2 text-center"
              style={{ fontFamily: 'Futura' }}
            >
              SIGN UP
            </h2>
            <p 
              className="text-sm text-gray-600 mb-8 text-center"
              style={{ fontFamily: 'Futura' }}
            >
              {activeTab}
            </p>
            <div className="w-full h-px bg-gray-300 mb-8"></div>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="firstName" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{ fontFamily: 'Futura' }}
                >
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  style={{ fontFamily: 'Futura' }}
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label 
                  htmlFor="lastName" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{ fontFamily: 'Futura' }}
                >
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                  style={{ fontFamily: 'Futura' }}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Futura' }}
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                style={{ fontFamily: 'Futura' }}
                placeholder="Enter email address"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Futura' }}
              >
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                style={{ fontFamily: 'Futura' }}
                placeholder="Enter phone number"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Futura' }}
              >
                Password *
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                style={{ fontFamily: 'Futura' }}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center top-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label 
                htmlFor="confirmPassword" 
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Futura' }}
              >
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                style={{ fontFamily: 'Futura' }}
                placeholder="Confirm password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center top-8"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showConfirmPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Create Account Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                style={{
                  background: '#F9C712',
                  fontFamily: 'Futura',
                  fontWeight: 700,
                  fontSize: '16px'
                }}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <span 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Futura' }}
              >
                Have an account already?{' '}
                <Link
                  to="/login"
                  className="font-medium text-black underline hover:text-gray-700"
                  style={{ fontFamily: 'Futura' }}
                >
                  Log in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Background Image with Logo */}
      <div 
        className="hidden lg:block relative flex-1 m-4 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${bgLogin})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <img 
              src={logoUnion} 
              alt="Siamese FilmArt Logo" 
              className="w-48 h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
