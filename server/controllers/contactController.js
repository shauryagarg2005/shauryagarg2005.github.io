
/**
 * Controller for handling contact form submissions
 */

// This function would typically send an email, but for now just logs it
// You can integrate a real email sending service like Nodemailer later
const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message' });
    }

    // Log the message (replace with actual email sending logic later)
    console.log('Contact Form Submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // In a real application, you would send an email here
    // For example, using Nodemailer or a service like SendGrid

    return res.status(200).json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Server error, please try again later' });
  }
};

module.exports = {
  sendContactEmail
};
