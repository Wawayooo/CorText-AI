import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Login({ onMagicRedirect }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch('/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (data.step === 'admin_auth_required') {
        onMagicRedirect();
      } else if (data.message === 'User logged in') {
        navigate('/subscribe');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-white border border-white/10">
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide text-white drop-shadow-md">
          Welcome Back
        </h2>

        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-sm"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-sm"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
            disabled={loading}
            style={buttonStyle}
            className={`w-full py-3 rounded-lg font-semibold text-white shadow-md transition duration-300 ${
              loading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
            }`}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </motion.button>
        </div>

        {error && (
          <div className="mt-4 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <div className="mt-8 text-sm text-gray-300 flex flex-col gap-4 items-center">
          <button
            onClick={() => navigate('/')}
            className="hover:underline hover:text-purple-400 transition font-medium"
          >
            Go to Home
          </button>
          <p>
            Need an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-blue-400 hover:underline hover:text-blue-500 transition font-medium"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  fontSize: '0.95rem',
  borderRadius: '6px',
  backgroundColor: '#4B9CD3',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(75, 156, 211, 0.4)',
  transition: 'all 0.3s ease'
};
