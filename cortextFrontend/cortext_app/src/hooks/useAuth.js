import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust path as needed

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
