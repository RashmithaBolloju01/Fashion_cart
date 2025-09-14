import React from 'react';
import './App.css';

export default function Card({ product }) {
  return (
    <div className="card">
      <div className="card-name">{product.name}</div>
      <img
        src={product.image_url}
        alt={product.name}
        height="300"
        className="card-image"
      />
      <div className="card-price">{product.price}</div>
    </div>
  );
}
