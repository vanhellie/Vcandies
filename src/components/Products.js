import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './Products.css';

function Products() {
    const [searchTerm, setSearchTerm] = useState('');
    const products = useSelector((state) => state.products);
    const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();

    const handleQuantityChange = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: value,
        }));
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: quantities[product.id] || 1 }));
    };

    return (
        <div>
            <div className='products'>
                <h1>Products</h1>
            </div>

            <div className='search'>
                <input
                    type="text"
                    placeholder="Search for a product"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="products-container">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-item">
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
                        <p>Price: ${product.price}</p>

                        <input 
                            type="number" 
                            min="1" 
                            value={quantities[product.id] || 1}
                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        />
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
