import { Link } from 'react-router-dom';

export default function SubscribePage() {

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Subscribe to CorText API</h1>
      <p>Choose a plan and get your API key to start integrating semantic medicine suggestions.</p>
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
