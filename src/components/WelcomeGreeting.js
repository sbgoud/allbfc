import React from 'react';

function WelcomeGreeting({ userData }) {
  return (
    <div className="welcome-greeting">
      <h2>Welcome, {userData.first_name}!</h2> 
    </div>
  );
}

export default WelcomeGreeting;
