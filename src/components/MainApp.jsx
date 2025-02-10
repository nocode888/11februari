import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardHome } from './DashboardHome';
import { DataIntelligenceCenter } from './DataIntelligenceCenter';
import { AdsVisualManager } from './AdsVisualManager';
import { Workforce } from './Workforce';
import { AdsCopilot } from './ai/AdsCopilot';
import { AIChatbot } from './AIChatbot';

const MainApp = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardHome />;
      case 'intelligence':
        return <DataIntelligenceCenter />;
      case 'visual':
        return <AdsVisualManager />;
      case 'workforce':
        return <Workforce />;
      case 'copilot':
        return <AdsCopilot />;
      default:
        return <DashboardHome />;
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
            className={`nav-item ${activePage === 'intelligence' ? 'active' : ''}`}
            onClick={() => setActivePage('intelligence')}
          >
            Data Intelligence
          </button>
          
          <button 
            className={`nav-item ${activePage === 'visual' ? 'active' : ''}`}
            onClick={() => setActivePage('visual')}
          >
            Visual Manager
          </button>
          
          <button 
            className={`nav-item ${activePage === 'workforce' ? 'active' : ''}`}
            onClick={() => setActivePage('workforce')}
          >
            Workforce
          </button>

          <button 
            className={`nav-item ${activePage === 'copilot' ? 'active' : ''}`}
            onClick={() => setActivePage('copilot')}
          >
            Ads Copilot
          </button>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>

      {/* AI Chatbot akan selalu tersedia di semua halaman */}
      <AIChatbot 
        type="audience"
        onInterestsGenerated={(interests) => {
          console.log('Generated interests:', interests);
        }}
      />
    </div>
  );
};

export default MainApp; 