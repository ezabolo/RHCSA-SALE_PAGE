import { useState } from 'react';
import { useRouter } from 'next/router';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '599.00',
            currency_code: 'USD'
          },
          description: 'Red Hat Linux Administration Bootcamp'
        }
      ]
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      const orderDetails = {
        orderId: details.id,
        currency: details.purchase_units[0].amount.currency_code,
        amount: details.purchase_units[0].amount.value,
        email: details.payer.email_address,
        status: details.status
      };
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      router.push('/success');
    } catch (err) {
      console.error('Payment capture failed:', err);
      setError('Failed to complete payment. Please try again.');
    }
  };

  const handleCreditCardSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 59900,
          currency: 'usd',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: 'eugene.zabolo@gmail.com',
          },
        },
      });

      if (confirmError) {
        throw confirmError;
      }

      if (paymentIntent.status === 'succeeded') {
        const orderDetails = {
          orderId: paymentIntent.id,
          currency: paymentIntent.currency,
          amount: (paymentIntent.amount / 100).toFixed(2),
          email: 'eugene.zabolo@gmail.com',
          status: 'COMPLETED'
        };
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        router.push('/success');
      }
    } catch (err) {
      console.error('Payment failed:', err);
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Checkout</h2>
            <p className="mt-2 text-lg text-gray-600">RHCSA Bootcamp Access</p>
          </div>

          <div className="space-y-6">
            {/* Price Display */}
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Amount:</span>
                <span className="text-2xl font-bold text-gray-900">$599</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  id="credit-card"
                  name="payment-method"
                  type="radio"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="credit-card" className="text-gray-900 font-medium">
                  Credit Card
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  id="paypal"
                  name="payment-method"
                  type="radio"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="paypal" className="text-gray-900 font-medium">
                  PayPal
                </label>
              </div>
            </div>

            {/* Credit Card Form */}
            {paymentMethod === 'card' && (
              <form onSubmit={handleCreditCardSubmit} className="mt-6 space-y-4">
                <div className="rounded-md border border-gray-300 p-4">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!stripe || loading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Processing...' : 'Pay with Credit Card'}
                </button>
              </form>
            )}

            {/* PayPal Button */}
            {paymentMethod === 'paypal' && (
              <div className="mt-6">
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={(err) => {
                    console.error('PayPal error:', err);
                    setError('PayPal payment failed. Please try again.');
                  }}
                  style={{ layout: 'vertical' }}
                />
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm mt-2">{error}</div>
            )}

            {/* Security Notice */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <LockClosedIcon className="h-4 w-4" />
                <span>Your payment is secure and encrypted</span>
              </div>
              <p>Need help? Call us at <a href="tel:+17033092325" className="text-blue-600 hover:text-blue-500">+1 (703) 309 2325</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
