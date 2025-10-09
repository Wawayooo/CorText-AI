import React from 'react';

const projects = [
  { id: 1, name: 'Project Alpha', description: 'NLP research project' },
  { id: 2, name: 'Project Beta', description: 'Text analytics dashboard' },
];

const features = [
  { name: 'Create Project', icon: '➕' },
  { name: 'Import Data', icon: '📂' },
  { name: 'Analytics', icon: '📊' },
  { name: 'Settings', icon: '⚙️' },
];

const handleLogout = async () => {
  try {
    const response = await fetch('http://192.168.56.1:8000/api/logout/', {
      method: 'POST',
      credentials: 'include', // ensures cookies/session are sent
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // Optional: show "Logged out"
      // Redirect or update UI
      window.location.href = '/login'; // or use navigate('/login') if using React Router
    } else {
      console.error('Logout failed');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>CorText Dashboard</h1>
        <p style={styles.subtitle}>Manage your projects and explore features</p>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Your Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} style={styles.projectCard}>
              <h3 style={styles.projectName}>{project.name}</h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <button style={styles.openBtn}>Open</button>
            </div>
          ))}
          <div style={styles.newProjectCard}>
            <button style={styles.addBtn}>+ New Project</button>
          </div>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <div style={styles.featuresGrid}>
          {features.map(feature => (
            <div key={feature.name} style={styles.featureCard}>
              <span style={styles.featureIcon}>{feature.icon}</span>
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </section>
      <button style={styles.buttonStyle} onClick={handleLogout}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    background: '#f7f9fb',
    minHeight: '100vh',
    padding: '32px',
  },
  header: {
    marginBottom: '32px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '2.5rem',
    color: '#2d3748',
  },
  subtitle: {
    color: '#718096',
    marginTop: '8px',
  },
  section: {
    marginBottom: '32px',
  },
  sectionTitle: {
    color: '#4a5568',
    marginBottom: '16px',
  },
  projectsGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  projectCard: {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    padding: '20px',
    minWidth: '220px',
    flex: '1 0 220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  projectName: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#2b6cb0',
  },
  projectDesc: {
    color: '#718096',
    margin: '8px 0 16px 0',
    fontSize: '0.95rem',
  },
  openBtn: {
    background: '#3182ce',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  newProjectCard: {
    background: '#e2e8f0',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '220px',
    height: '100px',
  },
  addBtn: {
    background: '#38a169',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  featuresGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  featureCard: {
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    minWidth: '140px',
    fontWeight: '500',
    color: '#2d3748',
  },
  featureIcon: {
    fontSize: '1.5rem',
  },
  buttonStyle: {
    background: '#e21b09ff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};