import sgMail from '@sendgrid/mail';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Email credentials:', {
    user: process.env.EMAIL_USER ? 'Set' : 'Not set',
    pass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
  });

  try {
    const { orderDetails } = req.body;
    console.log('Received order details:', orderDetails);

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'ezabolo@scenergylingk.com',
      from: process.env.SENDGRID_FROM_EMAIL, // verified sender email
      subject: 'New RHCSA Bootcamp Purchase',
      html: `
        <h2>New Purchase Details</h2>
        <p><strong>Order ID:</strong> ${orderDetails.id}</p>
        <p><strong>Amount:</strong> $${orderDetails.purchase_units[0].amount.value}</p>
        <p><strong>Customer Email:</strong> ${orderDetails.payer.email_address}</p>
        <p><strong>Customer Name:</strong> ${orderDetails.payer.name.given_name} ${orderDetails.payer.name.surname}</p>
        <p><strong>Purchase Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Status:</strong> ${orderDetails.status}</p>
        <hr>
        <p>This is an automated notification from your RHCSA Bootcamp sales page.</p>
      `
    };

    console.log('Attempting to send email...');
    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response);

    res.status(200).json({ message: 'Email notification sent successfully' });
  } catch (error) {
    console.error('Email error:', {
      message: error.message,
      response: error.response?.body,
    });
    res.status(500).json({ 
      message: 'Failed to send email notification',
      error: error.message
    });
  }
}
