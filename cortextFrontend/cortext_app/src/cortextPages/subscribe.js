import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust path as needed

export default function SubscribePage() {
  const { isLoggedIn, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate('/login');
    }
  }, [loading, isLoggedIn, navigate]);

  if (loading) return <p>Loading...</p>; // Optional: cinematic spinner

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
