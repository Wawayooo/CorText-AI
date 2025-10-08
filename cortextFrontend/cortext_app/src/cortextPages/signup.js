import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, set2ndPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password || !password2) {
      alert('Fill all the fields to Sign-Up');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      alert('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }

    if (password !== password2) {
      alert('Passwords do not match.');
      return;
    }

    const res = await fetch('http://192.168.56.1:8000/api/signup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password, password2 })
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    if (data.message === 'User created successfully') {
      alert('Signup successful! You can now log in.');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen" style={MainDivStyle}>
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-xl w-full max-w-md text-white" style={InnerDivStyle}>
          <h2 className="text-2xl font-bold mb-6 text-center"
            style={{ color: 'skyblue', fontSize: '2rem', fontWeight: 'bold'}}>Create Account</h2>
          <input
            type="email"  
            placeholder="Email"
            className="w-full p-3 mb-4 bg-white/10 rounded-md focus:outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-white/10 rounded-md focus:outline-none"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mb-6 bg-white/10 rounded-md focus:outline-none"
            onChange={e => set2ndPassword(e.target.value)}
            value={password2}
            style={inputStyle}
          />

          <MotionButton
            onClick={handleSignup}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </MotionButton>

          <p className="mt-4 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const MainDivStyle = {
  background: 'linear-gradient(135deg, #ffffffff, #c6cacbff, #ffffffff)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw'
}

const InnerDivStyle = {
  backgroundColor: '#ffffffff', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px', height: 'auto', padding: '4rem', borderRadius: '15px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)'
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
  '&:hover': {cursor: 'pointer'}
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