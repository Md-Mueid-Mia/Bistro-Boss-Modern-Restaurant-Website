import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <h2 className='text-4xl py-10 text-center'>PAYMENT</h2>
            
            <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>

            </Elements>
        </div>
    );
};

export default Payment;