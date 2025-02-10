import { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainApp from './components/MainApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Selalu render LoginPage jika belum login
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Render MainApp hanya jika sudah login
  return <MainApp />;
}

export default App; 