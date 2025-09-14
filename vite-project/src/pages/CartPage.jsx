import React from 'react';
import { useCart } from '../CartContext';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: '2rem', background: 'var(--bg-color)', minHeight: '80vh' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img src={item.image_url} alt={item.name} style={{ width: '100px', marginRight: '1rem' }} />
              <div style={{ flex: 1 }}>
                <strong>{item.name}</strong> — {item.price}
              </div>
              <button onClick={() => removeFromCart(index)} style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '0.3rem 0.6rem' }}>
                Remove
              </button>
            </div>
          ))}
          <button disabled style={{ marginTop: '2rem', padding: '0.6rem 1rem', background: '#ccc', color: '#333' }}>
            Checkout (Coming Soon)
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
