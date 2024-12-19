import { PayPalHttpClient, Environment } from "@paypal/checkout-server-sdk";

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

// Create PayPal client
const environment = new Environment.LiveEnvironment(clientId, clientSecret);
const client = new PayPalHttpClient(environment);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { customerData } = req.body;

    // Create order request
    const request = new PayPalOrder();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: '599.00'
        },
        description: 'Red Hat Linux Administration Bootcamp'
      }],
      application_context: {
        brand_name: 'SCENERGYLINK',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`
      }
    });

    // Create order
    const order = await client.execute(request);
    
    res.status(200).json({
      id: order.result.id
    });
  } catch (error) {
    console.error('PayPal order creation error:', error);
    res.status(500).json({ 
      message: 'Error creating PayPal order',
      error: error.message 
    });
  }
}
