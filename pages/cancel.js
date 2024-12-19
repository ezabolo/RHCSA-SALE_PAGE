import Head from 'next/head';
import Link from 'next/link';

export default function Cancel() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Payment Cancelled - Linux Training Academy</title>
      </Head>

      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
            <svg
              className="h-6 w-6 text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Payment Cancelled
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Your payment was cancelled. No charges have been made to your account.
          </p>

          <div className="space-y-4">
            <Link
              href="/checkout"
              className="inline-block bg-[#47c1bf] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3aa8a6] transition-colors"
            >
              Try Again
            </Link>
            
            <p className="text-sm text-gray-500 mt-4">
              If you're experiencing any issues with the payment process,
              please don't hesitate to contact our support team.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-600">
            Need help? Call us at{' '}
            <a
              href="tel:+17033092325"
              className="text-[#47c1bf] font-bold hover:text-[#3aa8a6]"
            >
              +1 (703) 309 2325
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
