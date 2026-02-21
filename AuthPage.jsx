import { useState } from 'react';
import { Breadcrumb, Button, Input } from '../components';
import { Mail, Lock, User } from 'lucide-react';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert(`${isLogin ? 'Login' : 'Sign up'} successful!`);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: isLogin ? 'Login' : 'Sign Up' }]} />

        {/* Auth Form */}
        <div className="max-w-md mx-auto mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {isLogin ? 'Welcome Back' : 'Join Us'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field (Sign Up Only) */}
            {!isLogin && (
              <Input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                icon={User}
              />
            )}

            {/* Email */}
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
            />

            {/* Password */}
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              icon={Lock}
            />

            {/* Confirm Password (Sign Up Only) */}
            {!isLogin && (
              <Input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                icon={Lock}
              />
            )}

            {/* Remember Me / Forgot Password (Login Only) */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              disabled={submitted}
            >
              {submitted ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </form>

          {/* Toggle Auth Type */}
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>

          {/* Social Login */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              Or continue with
            </p>
            <div className="flex gap-4">
              <button className="flex-1 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                Google
              </button>
              <button className="flex-1 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
