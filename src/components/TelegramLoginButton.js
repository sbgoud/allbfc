import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import CryptoJS from 'crypto-js'; 
import Cookies from 'js-cookie'; // Include Cookies library


const TelegramLogin = ({ onTelegramAuth }) => {
  const handleTelegramResponse = (response) => {
    onTelegramAuth(response); 
    // Fetch instructions from headers (implementation may change)
    const instructions = Cookies.get('telegram-auth'); 

    if (instructions && instructions.action === 'store_token') {
      const encryptedToken = CryptoJS.AES.encrypt(instructions.token, 'your-secret-key').toString(); 
      localStorage.setItem('bharatfreecloud_token', encryptedToken); 
    }
  };

  return (
    <TelegramLoginButton 
        dataOnauth={handleTelegramResponse} 
        botName="bharatfreecloud_bot" 
    />
  );
};

export default TelegramLogin;
