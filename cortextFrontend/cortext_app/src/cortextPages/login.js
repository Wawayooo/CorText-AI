import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const MotionNavButton = motion(NavButton);
const MotionLinkButton = motion(LinkButton);


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
      alert('Please enter both email and password.');
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
     <div className="flex items-center justify-center min-h-screen w-screen" style={{ background: 'linear-gradient(135deg, #ffffffff, #c6cacbff, #ffffffff)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw' }}>
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '600px', padding: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '1rem', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
      >
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-white border border-white/10" style={{ width: '100%', maxWidth: '500px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="text-4xl font-bold text-center mb-8 tracking-wide text-white drop-shadow-md">
            Welcome Back
          </h2>

          <div className="space-y-6" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-sm"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-sm"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLogin}
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white shadow-md transition duration-300 ${
                loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
              }`}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </MotionButton>
          </div>

          {error && (
            <div className="mt-4 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <FooterContainer>
            <NavButton onClick={() => navigate('/')}>
              Go to Home
            </NavButton>
            <p>
              Need an account?{' '}
              <LinkButton onClick={() => navigate('/signup')}>
                Create Account
              </LinkButton>
            </p>
          </FooterContainer>

        </div>
      </motion.div>
    </div>
  );
}

