const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0d0d0d 50%, #262626 75%, #000000 100%)',
  backgroundAttachment: 'fixed',
  position: 'relative',
  overflow: 'hidden',
  padding: '2rem',
  
  backgroundImage: `
    radial-gradient(circle at 25% 25%, rgba(192, 192, 192, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(220, 20, 60, 0.02) 0%, transparent 50%),
    linear-gradient(90deg, transparent 24%, rgba(192, 192, 192, 0.01) 25%, rgba(192, 192, 192, 0.01) 26%, transparent 27%),
    linear-gradient(0deg, transparent 24%, rgba(192, 192, 192, 0.01) 25%, rgba(192, 192, 192, 0.01) 26%, transparent 27%)
  `,
  backgroundSize: '100% 100%, 100% 100%, 80px 80px, 80px 80px'
};

const cardStyle = {
  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.95))',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  padding: '5rem',
  borderRadius: '25px',
  boxShadow: `
    0 20px 60px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(192, 192, 192, 0.2),
    inset 0 2px 8px rgba(255, 255, 255, 0.08),
    0 0 100px rgba(220, 20, 60, 0.1)
  `,
  width: '100%',
  maxWidth: '480px',
  color: '#ffffff',
  position: 'relative',
  border: '2px solid rgba(192, 192, 192, 0.2)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  
  animation: 'borderPulse 4s ease-in-out infinite',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column'
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '2.5rem',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #ffffff, #c0c0c0, #dc143c, #ffffff)',
  backgroundSize: '300% 300%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  animation: 'gradientFlow 4s ease-in-out infinite',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  
  '::before': {
    content: '"🔒"',
    position: 'absolute',
    left: '50%',
    top: '-2rem',
    transform: 'translateX(-50%)',
    fontSize: '2rem',
    opacity: 0.6
  }
};

const inputStyle = {
  width: '100%',
  padding: '1rem 1.25rem',
  marginBottom: '1.5rem',
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderRadius: '12px',
  border: '2px solid rgba(192, 192, 192, 0.2)',
  color: '#ffffff',
  fontSize: '1rem',
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  outline: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.2)',
  
  '::placeholder': {
    color: 'rgba(192, 192, 192, 0.5)',
    opacity: 1
  }
};

const inputFocusStyle = {
  ...inputStyle,
  background: 'rgba(255, 255, 255, 0.12)',
  borderColor: '#c0c0c0',
  boxShadow: `
    0 0 25px rgba(192, 192, 192, 0.15),
    inset 0 2px 6px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(220, 20, 60, 0.1)
  `,
  transform: 'translateY(-2px)'
};

const inputHoverStyle = {
  ...inputStyle,
  background: 'rgba(255, 255, 255, 0.1)',
  borderColor: 'rgba(192, 192, 192, 0.3)'
};

const buttonStyle = {
  width: '80%',
  padding: '1.1rem 2rem',
  background: 'linear-gradient(45deg, #dc143c, #ff1744)',
  border: '2px solid rgba(220, 20, 60, 0.5)',
  borderRadius: '12px',
  color: '#ffffff',
  fontWeight: '700',
  fontSize: '1.05rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  cursor: 'pointer',
  outline: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `
    0 6px 20px rgba(220, 20, 60, 0.4),
    0 0 30px rgba(220, 20, 60, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2)
  `,
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    transition: 'left 0.6s ease'
  }
};

const buttonHoverStyle = {
  ...buttonStyle,
  background: 'linear-gradient(45deg, #ff1744, #ff4569)',
  borderColor: 'rgba(255, 23, 68, 0.8)',
  transform: 'translateY(-4px)',
  boxShadow: `
    0 12px 35px rgba(220, 20, 60, 0.5),
    0 0 50px rgba(220, 20, 60, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.25)
  `
};

const buttonActiveStyle = {
  ...buttonStyle,
  background: 'linear-gradient(45deg, #b8102f, #dc143c)',
  transform: 'translateY(-1px)',
  boxShadow: `
    0 4px 15px rgba(220, 20, 60, 0.4),
    inset 0 3px 6px rgba(0, 0, 0, 0.3)
  `
};

const buttonDisabledStyle = {
  ...buttonStyle,
  background: 'linear-gradient(45deg, #4a5568, #718096)',
  borderColor: 'rgba(160, 174, 192, 0.3)',
  cursor: 'not-allowed',
  opacity: 0.6,
  transform: 'none',
  boxShadow: 'none'
};

const labelStyle = {
  display: 'block',
  color: '#c0c0c0',
  fontWeight: '600',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '0.6rem',
  fontFamily: "'Inter', 'Segoe UI', sans-serif"
};

const errorStyle = {
  width: '100%',
  padding: '0.9rem',
  marginBottom: '1.5rem',
  background: 'rgba(220, 20, 60, 0.15)',
  border: '1px solid rgba(220, 20, 60, 0.4)',
  borderRadius: '10px',
  color: '#ff6b6b',
  fontSize: '0.95rem',
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 12px rgba(220, 20, 60, 0.2)',
  animation: 'shake 0.5s ease-in-out'
};

const successStyle = {
  width: '100%',
  padding: '0.9rem',
  marginBottom: '1.5rem',
  background: 'rgba(74, 222, 128, 0.15)',
  border: '1px solid rgba(74, 222, 128, 0.4)',
  borderRadius: '10px',
  color: '#4ade80',
  fontSize: '0.95rem',
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 12px rgba(74, 222, 128, 0.2)'
};

const spinnerStyle = {
  display: 'inline-block',
  width: '20px',
  height: '20px',
  border: '3px solid rgba(255, 255, 255, 0.3)',
  borderTop: '3px solid #ffffff',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
  marginRight: '0.5rem'
};

const linkStyle = {
  display: 'block',
  marginTop: '1.5rem',
  textAlign: 'center',
  color: '#c0c0c0',
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontWeight: '500',
  
  ':hover': {
    color: '#ffffff',
    textShadow: '0 0 10px rgba(192, 192, 192, 0.5)'
  }
};

const securityBadgeStyle = {
  position: 'absolute',
  top: '-1rem',
  right: '-1rem',
  width: '60px',
  height: '60px',
  background: 'linear-gradient(45deg, #dc143c, #ff1744)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  boxShadow: '0 8px 20px rgba(220, 20, 60, 0.4)',
  animation: 'pulse 2s ease-in-out infinite'
};

const dividerStyle = {
  width: '100%',
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(192, 192, 192, 0.3), transparent)',
  margin: '2rem 0',
  position: 'relative'
};

const cssAnimations = `
  @keyframes gradientFlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes borderPulse {
    0%, 100% { 
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(192, 192, 192, 0.2),
        inset 0 2px 8px rgba(255, 255, 255, 0.08),
        0 0 100px rgba(220, 20, 60, 0.1);
    }
    50% { 
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(192, 192, 192, 0.4),
        inset 0 2px 8px rgba(255, 255, 255, 0.12),
        0 0 120px rgba(220, 20, 60, 0.2);
    }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
  }
`;

export {
  containerStyle,
  cardStyle,
  headingStyle,
  inputStyle,
  inputFocusStyle,
  inputHoverStyle,
  buttonStyle,
  buttonHoverStyle,
  buttonActiveStyle,
  buttonDisabledStyle,
  labelStyle,
  errorStyle,
  successStyle,
  spinnerStyle,
  linkStyle,
  securityBadgeStyle,
  dividerStyle,
  cssAnimations
};