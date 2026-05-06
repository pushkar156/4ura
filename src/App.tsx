import React from 'react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div className="glass" style={{ 
        padding: '3rem', 
        borderRadius: '24px', 
        maxWidth: '500px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem', 
          color: 'var(--accent-color)',
          fontFamily: "'League Spartan', sans-serif"
        }}>
          AURA 3.0
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--secondary-color)',
          marginBottom: '2rem'
        }}>
          Your premium real-time ordering ecosystem is initializing.
        </p>
        <div style={{ 
          backgroundColor: 'var(--accent-color)', 
          color: 'white', 
          padding: '1rem 2rem', 
          borderRadius: '50px',
          fontWeight: '600',
          display: 'inline-block'
        }}>
          Foundation Ready
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', color: 'var(--secondary-color)', fontSize: '0.9rem' }}>
        Theme: {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'} (Detected)
      </div>
    </div>
  );
}

export default App;
