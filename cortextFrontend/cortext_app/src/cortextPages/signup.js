import React, { useState } from 'react';
import { hover, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, set2ndPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
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

    const res = await fetch('/api/signup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
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
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    >
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md text-white" style={{ padding: '5rem', borderRadius: '1rem', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)' , width: '100%', maxWidth: '600px', height: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.1)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h2 className="text-2xl font-bold mb-6 text-center"
          style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold'}}>Create Account</h2>
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

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition"
          style={buttonStyle}
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </motion.div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  outline: 'none',
  transition: 'all 0.3s ease'
};
const buttonStyle = styled.button`{
  width: '50%',
  padding: '0.75rem 1rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: 'black',
  color: 'white',
  outline: 'none',
  transition: 'all 0.3s ease'
  cursor: pointer;
  &:hover {
    background-color: #22a1e5ff;
    color: black;
  }
}`;