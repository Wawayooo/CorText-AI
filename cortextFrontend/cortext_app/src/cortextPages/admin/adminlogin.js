import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = async () => {
    const res = await fetch('http://192.168.56.1:8000/api/admin-login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) {
      alert('Network response was not ok');
      return;
    }

    const data = await res.json();
    if (data.message === 'Admin fully authenticated') {
      // Redirect to admin dashboard
      window.location.href = '/adminDashboard';
    } else {
      alert(data.error);
    }
  };

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 bg-white/10 rounded-md focus:outline-none"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-white/10 rounded-md focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleAdminLogin}
          className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition"
        >
          Authenticate
        </button>
      </div>
    </motion.div>
  );
}
