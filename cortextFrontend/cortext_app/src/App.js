import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './cortextPages/home';
import SubscribePage from './cortextPages/subscribe';
import DocsPage from './cortextPages/docs';
import Login from './cortextPages/login';
import Signup from './cortextPages/signup';
import AdminLogin from './cortextPages/adminlogin';
import AdminDash from './cortextPages/adminDash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDash />} />
      </Routes>
    </Router>
  );
}

export default App;
