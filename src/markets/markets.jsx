import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
// eslint-disable-next-line import/named
import { get } from '../services/network/axios';

function Markets() {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get('/exchanges')
      .then((res) => {
        setMarkets(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = {
    id: {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    name: {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    symbol: {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    rank: {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    price_usd: {
      title: 'Price (USD)',
      dataIndex: 'price_usd',
      key: 'price_usd',
    },
    price_btc: {
      title: 'Price (BTC)',
      dataIndex: 'price_btc',
      key: 'price_btc',
    },
    '24h_volume_usd': {
      title: '24h Volume (USD)',
      dataIndex: '24h_volume_usd',
      key: '24h_volume_usd',
    },
    market_cap_usd: {
      title: 'Market Cap (USD)',
      dataIndex: 'market_cap_usd',
      key: 'market_cap_usd',
    },
    available_supply: {
      title: 'Available Supply',
      dataIndex: 'available_supply',
      key: 'available_supply',
    },
    total_supply: {
      title: 'Total Supply',
      dataIndex: 'total_supply',
      key: 'total_supply',
    },
    max_supply: {
      title: 'Max Supply',
      dataIndex: 'max_supply',
      key: 'max_supply',
    },
    percent_change_1h: {
      title: '% Change 1h',
      dataIndex: 'percent_change_1h',
      key: 'percent_change_1h',
    },
    percent_change_24h: {
      title: '% Change 24h',
      dataIndex: 'percent_change_24h',
      key: 'percent_change_24h',
    },
  };

  return (
    <div>
      <h1>Markets</h1>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : <Table dataSource={markets} columns={columns} />}
      </div>
    </div>
  );
}

export default Markets;
