import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import '../styles/globals.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const paypalOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture"
};

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </PayPalScriptProvider>
  );
}

export default MyApp;
