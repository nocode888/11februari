import { useState } from 'react';
import { motion } from 'framer-motion';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConnect = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Initialize Meta SDK
      window.FB.init({
        appId: import.meta.env.VITE_META_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v18.0' // Use the latest version
      });

      // Login with Facebook
      await new Promise((resolve, reject) => {
        window.FB.login((response) => {
          if (response.authResponse) {
            resolve(response);
          } else {
            reject(new Error('User cancelled login or did not fully authorize.'));
          }
        }, { scope: 'public_profile,email,ads_management,ads_read' });
      });

      onLogin?.();
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="login-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div 
          className="login-icon"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path fill="#4267B2" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 16H6a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1z"/>
          </svg>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Audience Explorer
        </motion.h1>
        
        <motion.p 
          className="subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Connect your Meta account to get started
        </motion.p>

        <motion.div 
          className="features-grid"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: '📊', title: 'Ad Insights', desc: 'Analyze your ad performance' },
            { icon: '👥', title: 'Audience Data', desc: 'Understand your audience' },
            { icon: '🤖', title: 'AI Analysis', desc: 'Get AI-powered recommendations' },
            { icon: '💬', title: 'Comment Analysis', desc: 'Track engagement metrics' }
          ].map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="feature-item"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {error && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        )}

        <motion.button 
          className="connect-button"
          onClick={handleConnect}
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {isLoading ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
          ) : 'Connect to Meta'}
        </motion.button>

        <motion.div 
          className="terms"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p>
            By connecting, you agree to our{' '}
            <motion.a 
              href="#terms"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>{' '}
            •{' '}
            <motion.a 
              href="#privacy"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage; 