export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { cart } = req.body;

    const response = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        application_context: {
          shipping_preference: 'NO_SHIPPING',
          user_action: 'PAY_NOW',
          brand_name: 'RHCSA Bootcamp',
          landing_page: 'LOGIN',
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`
        },
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: cart.amount.toString()
            },
            description: cart.description
          },
        ],
      }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    res.status(500).json({ error: 'Error creating PayPal order' });
  }
}
