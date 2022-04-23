import React from 'react';
import { Row, Col } from 'antd';
import Markets from '../markets/markets';
import './home.css';

function Home() {
  const renderHeader = () => (
    <Row className="header-row">
      <Col offset={6} span={12}>
        <h1 className="header">Coins Market</h1>
      </Col>
    </Row>
  );

  return (
    <div>
      {renderHeader()}
      <Markets />
    </div>
  );
}

export default Home;
