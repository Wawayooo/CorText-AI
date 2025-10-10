import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../cortextPages_Styles/style.css';

export default function SubscribePage() {
  const { isLoggedIn, loading } = useAuth();
  const navigate = useNavigate();
  const [delayedReady, setDelayedReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedReady(true);
    }, 2000); // 2-second cinematic delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (delayedReady && !loading && !isLoggedIn) {
      navigate('/login');
    }
  }, [delayedReady, loading, isLoggedIn, navigate]);

  if (!delayedReady || loading) {
    return (
      <div style={loadingContainerStyle}>
        <div style={spinnerStyle}></div>
        <p style={loadingTextStyle}>Preparing your CorText experience...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Subscribe to CorText API</h1>
      <p>Choose a plan and get your API key to start integrating semantic medicine suggestions.</p>

      <Link to="/plans">
        <button style={buttonStyle}>View Plans</button>
      </Link>
    </div>
  );
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

const buttonStyle = {
  marginTop: '2rem',
  padding: '1rem 2rem',
  fontSize: '1rem',
  borderRadius: '8px',
  backgroundColor: '#4B9CD3',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
};

