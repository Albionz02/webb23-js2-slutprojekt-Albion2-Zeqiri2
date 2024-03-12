import React from 'react';

const CheckoutPage = ({ cart, completePurchase, emptyCart }) => {
 
  const handlePurchase = () => {
    
    completePurchase();
  };

  return (
    <div>
      <h1>Kassa</h1>
      {cart.length > 0 ? (
        <div>
         
          <p>Genomför köpet för {cart.length} produkter?</p>
          <button onClick={handlePurchase}>Genomför köp</button>
        </div>
      ) : (
        <p>Kundvagnen är tom</p>
      )}
    </div>
  );
};

export default CheckoutPage;

