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
        const { data } = res;
        const sortedDataOnTrustRank = data.sort((a, b) => a.trust_score_rank - b.trust_score_rank);
        // set 10 first markets
        setMarkets(sortedDataOnTrustRank.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      render: (text) => <a href={text}>{text}</a>,
    },
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="logo" />,
    },
    {
      title: 'Trust rank',
      dataIndex: 'trust_score_rank',
      key: 'trust_score_rank',
    },
  ];

  return (
    <div className="table-header">
      {loading ? (
        <div>Loading...</div>
      ) : <Table dataSource={markets} columns={columns} pagination={false} />}
    </div>
  );
}

export default Markets;
