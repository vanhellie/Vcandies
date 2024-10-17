import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartItems }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Vanhellie Candies</Link>
                <ul className="nav-menu">
                    <li><Link to="/" className="nav-links">Home</Link></li>
                    <li><Link to="/products" className="nav-links">Products</Link></li>
                    <li><Link to="/about" className="nav-links">About</Link></li>
                    <li>
                        <Link to="/cart" className="nav-links cart-link">
                            Cart <span className="cart-count">{cartItems.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
