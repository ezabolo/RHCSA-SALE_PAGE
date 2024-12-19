import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 59900, // $599.00 in cents
      currency: 'usd',
      metadata: {
        course: 'Red Hat Linux Administration Bootcamp',
        email: 'eugene.zabolo@gmail.com'
      }
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      message: 'Error creating payment intent',
      error: error.message 
    });
  }
}
