import React, { useState } from 'react';

const ProductPage = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Produkt 1', image: 'product1.jpg', price: 10, stock: 5 },
    { id: 2, name: 'Produkt 2', image: 'product2.jpg', price: 20, stock: 3 },
    { id: 3, name: 'Produkt 3', image: 'product3.jpg', price: 15, stock: 8 },
    { id: 4, name: 'Produkt 4', image: 'product4.jpg', price: 25, stock: 6 },
    { id: 5, name: 'Produkt 5', image: 'product5.jpg', price: 18, stock: 4 }
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    const updatedCart = [...cart, productId];
    setCart(updatedCart);
    addToCart(productId); 
  };

  return (
    <div>
      <h1>Produktsida</h1>
      <p>Kundvagn: {cart.length} produkter</p>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>Pris: {product.price} kr</p>
          <p>Lagersaldo: {product.stock}</p>
          {product.stock > 0 && <button onClick={() => handleAddToCart(product.id)}>Lägg till i kundvagnen</button>}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
