import { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainApp from './components/MainApp'; // Your main app component

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