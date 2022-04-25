import React, { useState, useEffect } from 'react';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { get } from './services/network/axios';
import Home from './home/home';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  const [exchangeId, setExchangeId] = useState('');
  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.split('/');
    const exchangeIdTemp = urlParts[urlParts.length - 1];
    if (exchangeIdTemp) {
      setExchangeId(exchangeIdTemp);
      get(`/exchange/${exchangeId}`).then((res) => {
        console.log(res.data);
      });
    }
  }, []);

  return (
  // <Router>
  //   <Routes>
  //     <Route exact path="/" component={Home} />
  //   </Routes>
  // </Router>
    <Home />
  );
}

export default App;
