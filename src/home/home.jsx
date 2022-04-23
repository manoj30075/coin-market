import React from 'react';
import Markets from '../markets/markets';
import './home.css';

function Home() {
  const renderHeader = () => (
    <div className="header-row">
      <h1 className="header">Coins Market</h1>
    </div>
  );

  return (
    <div>
      {renderHeader()}
      <Markets />
    </div>
  );
}

export default Home;
