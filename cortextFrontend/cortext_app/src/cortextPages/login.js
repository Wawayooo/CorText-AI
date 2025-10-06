import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const MainDivStyle = {
  background: 'linear-gradient(135deg, #ffffffff, #c6cacbff, #ffffffff)', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100vh', 
  width: '100vw'
}

const MotionDivStyle = {
  width: '100%', 
  maxWidth: '600px', 
  padding: '3.5rem', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  height: 'auto', 
  backgroundColor: '#ffffffff', 
  borderRadius: '1rem', 
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
  border: '1px solid rgba(255, 255, 255, 0.3)'
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #191717ff',
  fontSize: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'black',
  outline: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  // Add focus styles
  '&:focus': { borderColor: '#ffffffff', boxShadow: '0 0 0 3px rgba(39, 157, 190, 0.3)' },
  '&:hover': { borderColor: '#756f6fff' }
};

const MotionButton = motion(styled.button`
  width: 50%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover { background-color: #1288a9ff; color: white; font-size: 1.05rem; }
  &:active { background-color: #0a69d5ff;}
  transition: all 0.3s ease;
`);

const FooterContainer = styled.div`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #d1d5db; /* Tailwind's gray-300 */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  font-weight: 500;
  color: black; /* Tailwind's gray-200 */
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #a855f7; /* Tailwind's purple-500 */
    text-decoration: underline;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.4);
  }
`;

const LinkButton = styled.button`
  background: transparent;
  border: none;
  font-weight: 500;
  color: #93c5fd; /* Tailwind's blue-300 */
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #3b82f6; /* Tailwind's blue-500 */
    text-decoration: underline;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
  }
`;

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
      const res = await fetch('http://192.168.56.1:8000/api/login/', {
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
     <div className="flex items-center justify-center min-h-screen w-screen" style={MainDivStyle}>
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={MotionDivStyle}
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
            <p>
              Need an account?{' '}
              <LinkButton onClick={() => navigate('/signup')}>
                Create Account
              </LinkButton>
            </p>
            <NavButton onClick={() => navigate('/')}>
              Go to Homepage
            </NavButton>
          </FooterContainer>

        </div>
      </motion.div>
    </div>
  );
}

