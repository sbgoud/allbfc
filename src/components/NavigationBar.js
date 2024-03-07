import React from 'react';

function NavigationBar({ onLogout }) {
  return (
    <nav className="navbar">
      <h1>BharatFreeCloud</h1>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default NavigationBar;
