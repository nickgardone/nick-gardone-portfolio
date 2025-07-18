import nodemailer from 'nodemailer';
import validator from 'validator';

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success && data.score >= 0.5; // Score threshold of 0.5
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, recaptchaToken } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Sanitize inputs
  const sanitizedEmail = validator.normalizeEmail(email);
  const sanitizedName = validator.escape(validator.trim(name));
  const sanitizedMessage = validator.escape(validator.trim(message));

  // Validate email
  if (!validator.isEmail(sanitizedEmail || '')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Validate name (letters, spaces, hyphens, apostrophes, 2-50 chars)
  if (!validator.isLength(sanitizedName, { min: 2, max: 50 }) || !/^[a-zA-Z\s\-']+$/.test(sanitizedName)) {
    return res.status(400).json({ message: 'Invalid name. Only letters, spaces, hyphens, and apostrophes allowed (2-50 chars).' });
  }

  // Validate message (10-1000 chars)
  if (!validator.isLength(sanitizedMessage, { min: 10, max: 1000 })) {
    return res.status(400).json({ message: 'Message must be between 10 and 1000 characters.' });
  }

  // Validate reCAPTCHA token
  if (!recaptchaToken) {
    return res.status(400).json({ message: 'reCAPTCHA verification required' });
  }

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: sanitizedEmail,
      to: 'NGardone@Gmail.com',
      subject: `New Contact Form Submission from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
} 