import React from 'react';

const stats = [
  { label: 'Users', value: 1200 },
  { label: 'Active Sessions', value: 87 },
  { label: 'Errors', value: 3 },
  { label: 'Revenue', value: '$4,500' },
];

function AdminDash() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        background: 'linear-gradient(135deg, #e3eafc 0%, #f9f9f9 100%)',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '2rem 3rem',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2a3a5e',
            marginBottom: '0.5rem',
            letterSpacing: '1px',
            textAlign: 'center',
          }}
        >
          CorText Admin Dashboard
        </h1>
        <p
          style={{
            color: '#6b7a99',
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '1.1rem',
          }}
        >
          Welcome to your system overview
        </p>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'linear-gradient(135deg, #f5f8ff 0%, #e9eefa 100%)',
                borderRadius: '10px',
                padding: '1.5rem 1rem',
                minWidth: '140px',
                textAlign: 'center',
                boxShadow: '0 2px 12px rgba(42,58,94,0.07)',
                border: '1px solid #e3eafc',
                transition: 'transform 0.2s',
              }}
            >
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  color: '#2a3a5e',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: '#6b7a99',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDash;