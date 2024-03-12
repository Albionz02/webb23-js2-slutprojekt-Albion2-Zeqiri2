import React from 'react';

const CartPage = ({ cart, emptyCart, checkout, products }) => {
  
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(productId => {
      const product = products.find(product => product.id === productId);
      totalPrice += product.price;
    });
    return totalPrice;
  };

  const handleCheckout = () => {
    checkout();
    alert('Tack för ditt köp!');
  };

  return (
    <div>
      <h1>Kundvagn</h1>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((productId, index) => {
              const product = products.find(product => product.id === productId);
              return (
                <li key={index}>
                  <h3>{product.name}</h3>
                  <p>Pris: {product.price} kr</p>
                </li>
              );
            })}
          </ul>
          <p>Totalt: {calculateTotalPrice()} kr</p>
          <button onClick={handleCheckout}>Betala</button>
          <button onClick={emptyCart}>Töm kundvagnen</button>
        </div>
      ) : (
        <p>Kundvagnen är tom</p>
      )}
    </div>
  );
};

export default CartPage;