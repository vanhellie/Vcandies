import React from 'react';
import './FilteredProducts.css';

function FilteredProducts({ products }) {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default FilteredProducts;
