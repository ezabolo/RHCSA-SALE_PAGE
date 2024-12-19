export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { orderID } = req.body;

    const response = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    res.status(500).json({ error: 'Error capturing payment' });
  }
}
