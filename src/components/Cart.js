import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import './Cart.css';


Modal.setAppElement('#root');

function Cart({ cartItems, removeFromCart }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [orderCompleted, setOrderCompleted] = useState(false);


    const handleApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Transaction completed by ${name}`,
                showConfirmButton: false,
                timer: 2000
            });
            setOrderCompleted(true);
        });
    };

    const handleError = (err) => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Payment failed!',
            text: 'There was an issue with the PayPal transaction. Please try again.',
            showConfirmButton: true,
        });
    };

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };


    return (
        <div className='general-container'>

            <div>
                <h1 className='cart-header'>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className='cart-p'>Your cart is empty.</p>
                ) : (
                    <div className='cart-details'>
                        {cartItems.map((item, index) => (
                            <div key={`${item.id}-${index}`} style={{ marginBottom: '20px' }} onClick={() => openModal(item)} className='final-products'>
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            <div className='payment-container'>
                <h2>Complete Your Purchase</h2>
                <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>


                <PayPalScriptProvider options={{ "client-id": "Abi-HzrprCaxoVovHHdkIXii4Ey58qHtzUrls1N0UCC5mbrRkwV5PLXqFbXtY1NpOITwXApwIbA9bFvc" }}>
                    <PayPalButtons
                        style={{ layout: 'vertical' }}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
                                    },
                                }],
                            });
                        }}
                        onApprove={handleApprove}
                        onError={handleError}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
}

export default Cart;
