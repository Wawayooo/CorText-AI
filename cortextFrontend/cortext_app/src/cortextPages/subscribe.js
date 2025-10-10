import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../cortextPages_Styles/style.css';

export default function SubscribePage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = unknown
  const [loading, setLoading] = useState(true);
  const [delayedReady, setDelayedReady] = useState(false);

  // Check session status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://192.168.56.1:8000/api/check-auth/', {
          method: 'GET',
          credentials: 'include',
        });

        setIsLoggedIn(res.ok);
      } catch (err) {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Delay before showing content or redirecting
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Redirect if not logged in
  useEffect(() => {
    if (delayedReady && !loading && isLoggedIn === false) {
      navigate('/login');
    }
  }, [delayedReady, loading, isLoggedIn, navigate]);

  // Show loading spinner while waiting
  if (!delayedReady || loading || isLoggedIn === null) {
    return (
      <div style={loadingContainerStyle}>
        <div style={spinnerStyle}></div>
        <p style={loadingTextStyle}>Preparing your CorText experience...</p>
      </div>
    );
  }

  // Only render if logged in
  if (isLoggedIn) {
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

  return null; // fallback (shouldn’t be hit)
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
