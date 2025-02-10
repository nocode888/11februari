import { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainApp from './components/MainApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <MainApp />
      )}
    </>
  );
}

export default App; 