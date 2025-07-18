# reCAPTCHA v3 Setup Guide

This guide will help you set up Google reCAPTCHA v3 for the contact form.

## 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to add a new site
3. Choose "reCAPTCHA v3"
4. Add your domain (e.g., `localhost` for development, your domain for production)
5. Accept the terms and click "Submit"
6. Copy both the **Site Key** and **Secret Key**

## 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# Gmail Configuration
GMAIL_USER=your_gmail_address@gmail.com
GMAIL_PASS=your_gmail_app_password
```

## 3. Gmail App Password Setup

For the Gmail configuration:

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Generate an "App Password" for your application
4. Use this app password in the `GMAIL_PASS` environment variable

## 4. Features

The contact form now includes:

- **reCAPTCHA v3 Integration**: Invisible bot protection
- **Client-side Token Generation**: Automatic token generation on form submission
- **Server-side Verification**: Token validation with Google's API
- **Score-based Validation**: Only accepts submissions with score ≥ 0.5
- **Error Handling**: Clear error messages for failed verifications
- **Success Feedback**: User-friendly success messages
- **Loading States**: Visual feedback during submission

## 5. How It Works

1. User fills out the contact form
2. On form submission, reCAPTCHA v3 generates a token invisibly
3. Token is sent to the server with form data
4. Server verifies the token with Google's API
5. If verification passes (score ≥ 0.5), email is sent
6. User receives success/error feedback

## 6. Security Features

- **Score Threshold**: Only accepts submissions with good bot scores
- **Token Validation**: Server-side verification prevents token spoofing
- **Rate Limiting**: Built-in protection against spam
- **Error Logging**: Failed verifications are logged for monitoring

## 7. Testing

For development, you can use reCAPTCHA's test keys:
- Site Key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- Secret Key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

These keys will always return a score of 0.9, making them perfect for testing. 