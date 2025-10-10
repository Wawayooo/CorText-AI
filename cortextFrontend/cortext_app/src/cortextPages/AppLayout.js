import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function AppLayout() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return React.createElement(
      'div',
      { style: loadingContainerStyle },
      React.createElement('div', { style: spinnerStyle }),
      React.createElement('p', { style: loadingTextStyle }, 'Loading CorText experience...')
    );
  }

  return React.createElement(Outlet, null);
}

const spinnerStyle = {
  display: 'inline-block',
  width: '24px',
  height: '24px',
  border: '3px solid rgba(255, 255, 255, 0.3)',
  borderTop: '3px solid #4B9CD3',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
  marginBottom: '1rem'
};

const loadingContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f4f8fc',
  color: '#4B9CD3',
  fontFamily: 'sans-serif'
};

const loadingTextStyle = {
  fontSize: '1.2rem',
  fontWeight: '500',
  textAlign: 'center'
};
