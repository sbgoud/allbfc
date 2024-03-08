import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import CryptoJS from 'crypto-js'; 
import Cookies from 'js-cookie'; // Include Cookies library


const TelegramLogin = ({ onTelegramAuth }) => {
  const handleTelegramResponse = (response) => {
    onTelegramAuth(response); 
    // Fetch instructions from headers (implementation may change)
    const instructions = Cookies.get('stel_token', { domain: 'oauth.telegram.org' }); 
    console.log("Instructions:", instructions); // Log 1

    if (instructions && instructions.action === 'store_token') {
        const tokenToEncrypt = instructions.token;
        console.log("Token before encryption:", tokenToEncrypt); // Log 2
      const encryptedToken = CryptoJS.AES.encrypt(instructions.token, 'developedbyshashank').toString(); // secret key
      console.log("Encrypted Token:", encryptedToken); // Log 3 
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
