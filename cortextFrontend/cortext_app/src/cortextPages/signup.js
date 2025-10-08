import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function Signup() {
  const [first_name, setFname] = useState('');
  const [last_name, setLname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [profile_image, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('/default-avatar.png'); // your default image path


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

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('profile_image', profile_image);

    try {
      const response = await fetch('http://192.168.56.1:8000/api/signup/', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        navigate('/login');
      } else {
        alert('Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred while signing up. Please try again.');
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
            type="file"
            accept="image/*"
            onChange={e => setProfileImage(e.target.files[0])}
          />

          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 mb-4 bg-white/10 rounded-md focus:outline-none"
            value={first_name}
            onChange={e => setFname(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 mb-4 bg-white/10 rounded-md focus:outline-none"
            value={last_name}
            onChange={e => setLname(e.target.value)}
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Age"
            className="w-full p-3 mb-4 bg-white/10 rounded-md focus:outline-none"
            value={age}
            onChange={e => setAge(e.target.value)}
            style={inputStyle}
          />
          
          <select
            className="w-full p-3 mb-4 bg-white/10 rounded-md focus:outline-none text-white"
            value={gender}
            onChange={e => setGender(e.target.value)}
            style={inputStyle}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>

          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 mb-4 bg-white/10 rounded-md focus:outline-none"
            value={address}
            onChange={e => setAddress(e.target.value)}
            style={inputStyle}
          />

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
  background: 'linear-gradient(135deg, #ffffffff, #c6cacbff, #ffffffff)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', overflow: 'scroll', paddingBottom: '2rem', paddingTop: '2rem'
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