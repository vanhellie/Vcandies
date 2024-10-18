import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import './Cart.css';

Modal.setAppElement('#root');

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
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

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className='general-container'>
            <h1>Your cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>) : (
                <div className='cart-details'>
                    {cartItems.map((item) => (
                      <div key={item.id} style={{ marginBottom: '20px' }} className='final-products'>
                      <h2>{item.name}</h2>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFromCart(item.id);
        }}>
            Remove
        </button>
    </div>
))}

                </div>
            )}

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

            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <h2>Item Details</h2>
                {selectedItem && (
                    <>
                        <h3>{selectedItem.name}</h3>
                        <p>Price ${selectedItem.price}</p>
                        <p>Quantity: {selectedItem.quantity}</p>
                    </>
                )}
                <button onClick={() => setIsModalOpen(false)}>Fechar</button>
            </Modal>
        </div>
    );
}

export default Cart;
