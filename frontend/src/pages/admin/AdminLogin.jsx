import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMail, HiLockClosed, HiEye, HiEyeOff, HiShieldCheck } from 'react-icons/hi';
import { authAPI } from '../../services/api';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await authAPI.login(formData.email, formData.password);

            // Save token to localStorage
            localStorage.setItem('auth_token', response.data.token);
            localStorage.setItem('admin_user', JSON.stringify(response.data));

            // Redirect to dashboard
            navigate('/admin');
        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4 font-prompt">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Login Card */}
            <div className="relative w-full max-w-md">
                {/* Logo & Title */}
                <div className="text-center mb-8 animate-fadeIn">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-xl mb-4 transform hover:scale-110 transition-transform duration-300">
                        <HiShieldCheck className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">SIAMESE FILMART</h1>
                    <p className="text-gray-600">Admin Dashboard</p>
                </div>

                {/* Login Form */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-slideIn">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">เข้าสู่ระบบ</h2>
                        <p className="text-gray-600 text-sm">กรุณาเข้าสู่ระบบเพื่อจัดการข้อมูล</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-shake">
                            <p className="text-red-600 text-sm flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                อีเมล
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <HiMail className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                    placeholder="admin@siamese.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                รหัสผ่าน
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <HiLockClosed className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <HiEyeOff className="h-5 w-5" />
                                    ) : (
                                        <HiEye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 transition-colors"
                                />
                                <span className="ml-2 text-sm text-gray-600">จดจำฉันไว้</span>
                            </label>
                            <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors">
                                ลืมรหัสผ่าน?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    กำลังเข้าสู่ระบบ...
                                </span>
                            ) : (
                                'เข้าสู่ระบบ'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-6 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">หรือ</span>
                        </div>
                    </div>

                    {/* Demo Credentials */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                        <p className="text-xs font-medium text-gray-700 mb-2">ข้อมูลทดสอบ:</p>
                        <div className="space-y-1 text-xs text-gray-600">
                            <p><span className="font-medium">Email:</span> admin@siamese.com</p>
                            <p><span className="font-medium">Password:</span> admin123</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-6 text-sm text-gray-600 animate-fadeIn">
                    <p>© 2025 SIAMESE FILMART. All rights reserved.</p>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
        </div>
    );
};

export default AdminLogin;
