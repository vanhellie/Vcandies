import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Cart from './components/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './redux/cartSlice';

function App() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleAddToCart = (product, quantity) => {
        dispatch(addToCart({ ...product, quantity }));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <Router>
            <div>
                <Navbar cartItems={cartItems} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products addToCart={handleAddToCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
