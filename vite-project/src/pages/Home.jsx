import React from 'react';
import dataArray from '../data';
import Card from '../Card.jsx';     


export default function Home() {
  return (
    <div className="card-grid">
      {dataArray.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}
