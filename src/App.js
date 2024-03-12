import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';  
import ProductPage from './ProductPage';  
import CartPage from './CartPage'; 
import CheckoutPage from './CheckoutPage';  

function App() {
  const [cart, setCart] = useState([]);
  const history = useHistory();

 
  const products = [
    { id: 1, name: 'Produkt 1', image: 'product1.jpg', price: 10, stock: 5 },
    { id: 2, name: 'Produkt 2', image: 'product2.jpg', price: 20, stock: 3 },
    { id: 3, name: 'Produkt 3', image: 'product3.jpg', price: 15, stock: 8 },
    { id: 4, name: 'Produkt 4', image: 'product4.jpg', price: 25, stock: 6 },
    { id: 5, name: 'Produkt 5', image: 'product5.jpg', price: 18, stock: 4 }
  ];

  const addToCart = (productId) => {
    const updatedCart = [...cart, productId];
    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const completePurchase = () => {
    
    products.forEach(product => {
      const cartItem = cart.find(productId => productId === product.id);
      if (cartItem) {
        product.stock -= 1;
      }
    });
    
    emptyCart();
    
    history.push('/');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar cartItemCount={cart.length} />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <ProductPage products={products} addToCart={addToCart} />
            </Route>
            <Route path="/cart">
              <CartPage cart={cart} emptyCart={emptyCart} checkout={completePurchase} products={products} />
            </Route>
            <Route path="/checkout">
              <CheckoutPage cart={cart} completePurchase={completePurchase} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
