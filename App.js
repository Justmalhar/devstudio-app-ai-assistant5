
import React from 'react';
import './App.css'; // Assuming a separate CSS file for additional styling

/**
 * Main App Component
 * Welcome to your new application created with Devstudio.ai
 */

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '50px', color: '#333' }}>
      <header style={{ backgroundColor: '#4A90E2', padding: '20px', borderRadius: '8px', color: 'white' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Welcome to ai-assistant5!</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Your app was generated by <strong>Devstudio.ai</strong>, an AI-powered
          app development tool that transforms ideas into fully functional code.
        </p>
      </header>

      <main style={{ marginTop: '30px', textAlign: 'center' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2>Features of Devstudio.ai</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              🔥 <strong>Real-time Code Generation</strong> — Watch as your app takes shape instantly within the editor.
            </li>
            <li style={{ marginBottom: '10px' }}>
              🚀 <strong>Instant Deployment</strong> — Ready to ship apps with seamless integration to Vercel.
            </li>
            <li style={{ marginBottom: '10px' }}>
              🎨 <strong>Customizable UI</strong> — Easily modify the design and structure with live preview.
            </li>
            <li style={{ marginBottom: '10px' }}>
              📦 <strong>Modern Frameworks</strong> — Leverages the power of React.js, Supabase, and Clerk for authentication.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Get Started with Devstudio.ai</h2>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <button 
              style={{
                padding: '10px 20px',
                backgroundColor: '#4A90E2',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              onClick={() => alert('Explore more features at https://devstudio.ai')}
            >
              Explore Devstudio.ai
            </button>
          </div>
          <p style={{ fontSize: '1rem' }}>
            Start building today and let AI handle the code for you. Discover the future of app development with Devstudio.ai.
          </p>
        </section>

        <section>
          <h2>Sample Visual Elements</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '150px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>📱 Mobile Ready</h3>
              <p style={{ fontSize: '0.9rem' }}>Optimized for mobile devices with responsive layouts.</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '150px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>💻 Web Apps</h3>
              <p style={{ fontSize: '0.9rem' }}>Full-stack web applications with modern frameworks.</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '150px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>🔐 Secure</h3>
              <p style={{ fontSize: '0.9rem' }}>Built-in authentication and security best practices.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ marginTop: '50px', color: '#888', fontSize: '0.9rem' }}>
        <p>© 2024 Devstudio.ai. All rights reserved.</p>
      </footer>
    </div>
  );
};
  