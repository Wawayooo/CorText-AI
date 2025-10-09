// ===============================================
// NEXUS - Professional Dashboard Styles
// Complete User Profile & Project Management
// ===============================================

// Main Container - Full Dashboard Layout
export const container = {
  minHeight: '100vh',
  width: '100%',
  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0d0d0d 50%, #262626 75%, #000000 100%)',
  backgroundAttachment: 'fixed',
  color: '#ffffff',
  padding: '2rem',
  position: 'relative',
  overflow: 'auto',
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  
  // Animated background pattern
  backgroundImage: `
    radial-gradient(circle at 25% 25%, rgba(192, 192, 192, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(169, 169, 169, 0.02) 0%, transparent 50%),
    linear-gradient(90deg, transparent 24%, rgba(192, 192, 192, 0.01) 25%, rgba(192, 192, 192, 0.01) 26%, transparent 27%)
  `,
  backgroundSize: '100% 100%, 100% 100%, 80px 80px'
};

// Header Section - Top Banner
export const header = {
  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.95))',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '2px solid rgba(192, 192, 192, 0.2)',
  borderRadius: '25px',
  padding: '3rem 2rem',
  marginBottom: '3rem',
  textAlign: 'center',
  boxShadow: `
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 2px 4px rgba(255, 255, 255, 0.08)
  `,
  position: 'relative',
  overflow: 'hidden'
};

// Main Title
export const title = {
  fontSize: '3.5rem',
  fontWeight: '700',
  background: 'linear-gradient(45deg, #ffffff, #c0c0c0, #ffffff)',
  backgroundSize: '300% 300%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '0.5rem',
  textTransform: 'uppercase',
  letterSpacing: '4px',
  animation: 'gradientFlow 4s ease-in-out infinite'
};

// Subtitle
export const subtitle = {
  fontSize: '1.2rem',
  color: '#a0a0a0',
  fontWeight: '400',
  letterSpacing: '1px'
};

// User Profile Section - Enhanced Profile Card
export const userProfileSection = {
  background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(51, 51, 51, 0.95))',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '2px solid rgba(192, 192, 192, 0.2)',
  borderRadius: '25px',
  padding: '2.5rem',
  marginBottom: '3rem',
  boxShadow: `
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 2px 4px rgba(255, 255, 255, 0.08)
  `,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative'
};

// User Profile Container - Flex Layout
export const userProfileContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  flexWrap: 'wrap'
};

// Profile Image Container
export const profileImageContainer = {
  position: 'relative',
  flexShrink: 0
};

// Profile Image
export const profileImage = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  border: '4px solid #c0c0c0',
  objectFit: 'cover',
  boxShadow: `
    0 0 40px rgba(192, 192, 192, 0.3),
    inset 0 2px 4px rgba(0, 0, 0, 0.3)
  `,
  transition: 'all 0.4s ease'
};

// Profile Image Hover State
export const profileImageHover = {
  ...profileImage,
  transform: 'scale(1.05)',
  borderColor: '#d3d3d3',
  boxShadow: `
    0 0 60px rgba(192, 192, 192, 0.5),
    inset 0 4px 8px rgba(0, 0, 0, 0.2)
  `
};

// Default Avatar (when no image)
export const defaultAvatar = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  border: '4px solid #c0c0c0',
  background: 'linear-gradient(45deg, #1a1a1a, #333333)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '4rem',
  color: '#c0c0c0',
  boxShadow: `
    0 0 40px rgba(192, 192, 192, 0.3),
    inset 0 2px 4px rgba(0, 0, 0, 0.3)
  `
};

// User Info Container
export const userInfoContainer = {
  flex: 1,
  minWidth: '300px'
};

// User Name
export const userName = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '0.5rem',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
};

// User Email
export const userEmail = {
  fontSize: '1.2rem',
  color: '#c0c0c0',
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
};

// User Details Grid
export const userDetailsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  marginTop: '1.5rem'
};

// Detail Item
export const detailItem = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(192, 192, 192, 0.1)',
  borderRadius: '12px',
  padding: '1rem',
  transition: 'all 0.3s ease'
};

// Detail Item Hover
export const detailItemHover = {
  ...detailItem,
  background: 'rgba(255, 255, 255, 0.08)',
  borderColor: 'rgba(192, 192, 192, 0.2)',
  transform: 'translateY(-2px)'
};

// Detail Label
export const detailLabel = {
  fontSize: '0.85rem',
  color: '#a0a0a0',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '0.5rem',
  fontWeight: '600'
};

// Detail Value
export const detailValue = {
  fontSize: '1.1rem',
  color: '#ffffff',
  fontWeight: '500'
};

// Admin Badge
export const adminBadge = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  background: 'linear-gradient(45deg, #dc143c, #ff1744)',
  border: '1px solid rgba(220, 20, 60, 0.5)',
  borderRadius: '20px',
  color: '#ffffff',
  fontSize: '0.85rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: '0 4px 15px rgba(220, 20, 60, 0.3)',
  marginTop: '1rem'
};

// Magic Admin Badge
export const magicAdminBadge = {
  ...adminBadge,
  background: 'linear-gradient(45deg, #8b5cf6, #a78bfa)',
  border: '1px solid rgba(139, 92, 246, 0.5)',
  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
  animation: 'pulse 2s ease-in-out infinite'
};

// Section Container
export const section = {
  marginBottom: '3rem'
};

// Section Title
export const sectionTitle = {
  fontSize: '2rem',
  fontWeight: '600',
  color: '#c0c0c0',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  position: 'relative',
  paddingBottom: '1rem',
  
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '80px',
    height: '3px',
    background: 'linear-gradient(90deg, #c0c0c0, transparent)',
    borderRadius: '2px'
  }
};

// Projects Grid
export const projectsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '2rem',
  marginBottom: '2rem'
};

// Project Card
export const projectCard = {
  background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(51, 51, 51, 0.95))',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '2px solid rgba(192, 192, 192, 0.2)',
  borderRadius: '20px',
  padding: '2rem',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05)
  `,
  position: 'relative',
  overflow: 'hidden'
};

// Project Card Hover
export const projectCardHover = {
  ...projectCard,
  transform: 'translateY(-10px)',
  borderColor: 'rgba(192, 192, 192, 0.4)',
  boxShadow: `
    0 20px 50px rgba(0, 0, 0, 0.5),
    0 0 80px rgba(192, 192, 192, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.1)
  `
};

// Project Name
export const projectName = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#ffffff',
  marginBottom: '1rem',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
};

// Project Description
export const projectDesc = {
  fontSize: '1rem',
  color: '#a0a0a0',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  minHeight: '60px'
};

// Open Project Button
export const openBtn = {
  width: '100%',
  padding: '0.9rem',
  background: 'linear-gradient(45deg, #1a1a1a, #333333)',
  border: '2px solid #c0c0c0',
  borderRadius: '10px',
  color: '#ffffff',
  fontWeight: '600',
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
};

// Open Button Hover
export const openBtnHover = {
  ...openBtn,
  background: 'linear-gradient(45deg, #333333, #4d4d4d)',
  borderColor: '#d3d3d3',
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
};

// New Project Card
export const newProjectCard = {
  background: 'transparent',
  border: '2px dashed rgba(192, 192, 192, 0.3)',
  borderRadius: '20px',
  padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '250px',
  transition: 'all 0.3s ease',
  cursor: 'pointer'
};

// New Project Card Hover
export const newProjectCardHover = {
  ...newProjectCard,
  borderColor: 'rgba(192, 192, 192, 0.5)',
  background: 'rgba(255, 255, 255, 0.02)'
};

// Add New Project Button
export const addBtn = {
  padding: '1.5rem 3rem',
  background: 'transparent',
  border: '2px solid #c0c0c0',
  borderRadius: '12px',
  color: '#c0c0c0',
  fontSize: '1.5rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '2px'
};

// Add Button Hover
export const addBtnHover = {
  ...addBtn,
  background: 'rgba(192, 192, 192, 0.1)',
  borderColor: '#d3d3d3',
  color: '#ffffff',
  transform: 'scale(1.05)'
};

// Features Grid
export const featuresGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '1.5rem',
  marginBottom: '3rem'
};

// Feature Card
export const featureCard = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(192, 192, 192, 0.2)',
  borderRadius: '15px',
  padding: '2rem 1rem',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  color: '#c0c0c0',
  fontWeight: '500'
};

// Feature Card Hover
export const featureCardHover = {
  ...featureCard,
  background: 'rgba(255, 255, 255, 0.08)',
  borderColor: 'rgba(192, 192, 192, 0.4)',
  transform: 'translateY(-5px)',
  color: '#ffffff',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
};

// Feature Icon
export const featureIcon = {
  fontSize: '3rem',
  filter: 'grayscale(0.3)',
  transition: 'all 0.3s ease'
};

// Logout Button
export const buttonStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  padding: '1rem 2.5rem',
  background: 'linear-gradient(45deg, #dc143c, #ff1744)',
  border: '2px solid rgba(220, 20, 60, 0.5)',
  borderRadius: '12px',
  color: '#ffffff',
  fontWeight: '700',
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  boxShadow: `
    0 6px 20px rgba(220, 20, 60, 0.4),
    0 0 30px rgba(220, 20, 60, 0.2)
  `,
  zIndex: 1000
};

// Logout Button Hover
export const buttonStyleHover = {
  ...buttonStyle,
  background: 'linear-gradient(45deg, #ff1744, #ff4569)',
  transform: 'translateY(-3px)',
  boxShadow: `
    0 10px 30px rgba(220, 20, 60, 0.5),
    0 0 50px rgba(220, 20, 60, 0.3)
  `
};

// Edit Profile Button
export const editProfileBtn = {
  padding: '0.75rem 1.5rem',
  background: 'linear-gradient(45deg, #1a1a1a, #333333)',
  border: '2px solid #c0c0c0',
  borderRadius: '10px',
  color: '#ffffff',
  fontWeight: '600',
  fontSize: '0.95rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginTop: '1rem'
};

// Edit Profile Button Hover
export const editProfileBtnHover = {
  ...editProfileBtn,
  background: 'linear-gradient(45deg, #333333, #4d4d4d)',
  borderColor: '#d3d3d3',
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
};

// Stats Container (for additional user stats)
export const statsContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem',
  marginBottom: '3rem'
};

// Stat Card
export const statCard = {
  background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(51, 51, 51, 0.95))',
  border: '2px solid rgba(192, 192, 192, 0.2)',
  borderRadius: '20px',
  padding: '2rem',
  textAlign: 'center',
  transition: 'all 0.3s ease'
};

// Stat Card Hover
export const statCardHover = {
  ...statCard,
  transform: 'translateY(-5px)',
  borderColor: 'rgba(192, 192, 192, 0.4)',
  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
};

// Stat Number
export const statNumber = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#c0c0c0',
  display: 'block',
  marginBottom: '0.5rem'
};

// Stat Label
export const statLabel = {
  fontSize: '1rem',
  color: '#a0a0a0',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

// Loading Spinner
export const loadingSpinner = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  border: '5px solid rgba(192, 192, 192, 0.2)',
  borderTop: '5px solid #c0c0c0',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite'
};

// CSS Animations String (add to global CSS)
export const cssAnimations = `
  @keyframes gradientFlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.02); opacity: 0.9; }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Responsive Styles Object
export const responsiveStyles = {
  '@media (max-width: 768px)': {
    title: {
      fontSize: '2.5rem'
    },
    userName: {
      fontSize: '2rem'
    },
    profileImage: {
      width: '100px',
      height: '100px'
    },
    projectsGrid: {
      gridTemplateColumns: '1fr'
    },
    userProfileContainer: {
      flexDirection: 'column',
      textAlign: 'center'
    }
  }
};

// Export all as default object
export default {
  container,
  header,
  title,
  subtitle,
  userProfileSection,
  userProfileContainer,
  profileImageContainer,
  profileImage,
  profileImageHover,
  defaultAvatar,
  userInfoContainer,
  userName,
  userEmail,
  userDetailsGrid,
  detailItem,
  detailItemHover,
  detailLabel,
  detailValue,
  adminBadge,
  magicAdminBadge,
  section,
  sectionTitle,
  projectsGrid,
  projectCard,
  projectCardHover,
  projectName,
  projectDesc,
  openBtn,
  openBtnHover,
  newProjectCard,
  newProjectCardHover,
  addBtn,
  addBtnHover,
  featuresGrid,
  featureCard,
  featureCardHover,
  featureIcon,
  buttonStyle,
  buttonStyleHover,
  editProfileBtn,
  editProfileBtnHover,
  statsContainer,
  statCard,
  statCardHover,
  statNumber,
  statLabel,
  loadingSpinner,
  cssAnimations,
  responsiveStyles
};