import { useState } from 'react';
import { motion } from 'framer-motion';
import Dashboard from '../pages/Dashboard';
import Research from '../pages/Research';
import AdsCopilot from '../pages/AdsCopilot';
import Workforce from '../pages/Workforce';
import './MainApp.css';

const MainApp = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'research':
        return <Research />;
      case 'adsCopilot':
        return <AdsCopilot />;
      case 'workforce':
        return <Workforce />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>Audience Explorer</h1>
        </div>

        <div className="nav-links">
          <button 
            className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('dashboard')}
          >
            Dashboard
          </button>
          
          <button 
            className={`nav-item ${activePage === 'research' ? 'active' : ''}`}
            onClick={() => setActivePage('research')}
          >
            Research Library
          </button>
          
          <button 
            className={`nav-item ${activePage === 'adsCopilot' ? 'active' : ''}`}
            onClick={() => setActivePage('adsCopilot')}
          >
            Ads Copilot
          </button>
          
          <button 
            className={`nav-item ${activePage === 'workforce' ? 'active' : ''}`}
            onClick={() => setActivePage('workforce')}
          >
            Workforce
          </button>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default MainApp; 