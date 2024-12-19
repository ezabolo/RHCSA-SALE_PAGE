import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Success() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const details = localStorage.getItem('orderDetails');
    if (details) {
      setOrderDetails(JSON.parse(details));
    }
    // Clear the customer data from localStorage after successful payment
    localStorage.removeItem('customerData');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Head>
        <title>Payment Successful - RHCSA Bootcamp</title>
      </Head>

      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Thank you for purchasing the RHCSA Bootcamp. We will contact you shortly at your PayPal email address with your course access details and next steps.
          </p>

          {orderDetails && (
            <div className="mb-8 text-left bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Order ID:</span>{' '}
                  {orderDetails.orderId}
                </p>
                <p>
                  <span className="font-medium">Amount:</span>{' '}
                  {orderDetails.currency} {orderDetails.amount}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  {orderDetails.email}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{' '}
                  <span className="text-green-600">{orderDetails.status}</span>
                </p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <Link
              href="/"
              className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Homepage
            </Link>
            <p className="text-sm text-gray-500">
              Need help? Call us at{' '}
              <a
                href="tel:+17033092325"
                className="text-blue-600 hover:text-blue-700"
              >
                +1 (703) 309-2325
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
