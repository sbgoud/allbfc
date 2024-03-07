import React, { useState } from 'react';
import './styles/global.css'; // Your global CSS file
import TelegramLoginButton from './components/TelegramLoginButton';
import NavigationBar from './components/NavigationBar';
import WelcomeGreeting from './components/WelcomeGreeting';
import FileGrid from './components/FileGrid';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({}); // To store Telegram user data

  return (
    <div className="app-container">
      <NavigationBar onLogout={() => setIsLoggedIn(false)} /> {/* Placeholder logout function */}

      <div className="main-content">
        {isLoggedIn ? (
          <>
            <WelcomeGreeting userData={userData} />
            <FileGrid />
          </>
        ) : (
          <div className="login-area">
            <TelegramLoginButton onTelegramAuth={handleTelegramLogin} />
          </div>
        )}
      </div>
    </div>
  );

  function handleTelegramLogin(user) {
    setIsLoggedIn(true);
    setUserData(user);
  }
}

export default App;
