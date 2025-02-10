import { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      // Here you would implement Meta login logic
      const metaAppId = import.meta.env.VITE_META_APP_ID;
      const metaAppToken = import.meta.env.VITE_META_APP_TOKEN;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onLogin?.();
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path fill="#4267B2" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 16H6a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1z"/>
          </svg>
        </div>
        
        <h1>Welcome to Audience Explorer</h1>
        <p className="subtitle">Connect your Meta account to get started</p>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3>Ad Insights</h3>
            <p>Analyze your ad performance</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">👥</div>
            <h3>Audience Data</h3>
            <p>Understand your audience</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">🤖</div>
            <h3>AI Analysis</h3>
            <p>Get AI-powered recommendations</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <h3>Comment Analysis</h3>
            <p>Track engagement metrics</p>
          </div>
        </div>

        <button 
          className="connect-button"
          onClick={handleConnect}
          disabled={isLoading}
        >
          {isLoading ? 'Connecting...' : 'Connect to Meta'}
        </button>

        <div className="terms">
          <p>
            By connecting, you agree to our{' '}
            <a href="#terms">Terms of Service</a> • <a href="#privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 