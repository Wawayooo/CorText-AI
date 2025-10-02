import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to CorText AI</h1>
      <p>Your filipino clinical assistant for safe, semantic medicine suggestions.</p>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/subscribe">
          <button style={buttonStyle}>Subscribe for API Access</button>
        </Link>

        <Link to="/docs">
          <button style={buttonStyle}>View API Documentation</button>
        </Link>

        <Link to="/login">
          <button style={buttonStyle}>Login to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: '1rem',
  padding: '1rem 2rem',
  fontSize: '1rem',
  borderRadius: '8px',
  backgroundColor: '#4B9CD3',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
};
