import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import CryptoJS from 'crypto-js'; 
import Cookies from 'js-cookie'; // Include Cookies library


const TelegramLogin = ({ onTelegramAuth }) => {
  const handleTelegramResponse = (response) => {
    onTelegramAuth(response); 
    // Fetch instructions from headers (implementation may change)
    const instructions = Cookies.get('telegram-auth'); 
    console.log("Instructions:", instructions); // Log 1

    if (instructions && instructions.action === 'store_token') {
        const tokenToEncrypt = instructions.token;
        console.log("Token before encryption:", tokenToEncrypt); // Log 2
      const encryptedToken = CryptoJS.AES.encrypt(instructions.token, 'your-secret-key').toString(); 
      console.log("Encrypted Token:", encryptedToken); // Log 3 
      localStorage.setItem('bharatfreecloud_token', encryptedToken); 
    }
  };

  return (
    <TelegramLoginButton 
        dataOnauth={handleTelegramResponse} 
        botName="7137528102:AAF1o57ztPpfpkkOqk15C5jwSRLpRGv-McM" 
    />
  );
};

export default TelegramLogin;
