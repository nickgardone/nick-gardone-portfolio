# Production Setup Guide for Contact Form

This guide will help you configure the contact form for production deployment on Vercel.

## 1. Gmail Configuration

To enable the contact form to send real emails, you need to set up Gmail with an App Password:

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### Step 2: Generate an App Password
1. In your Google Account settings, go to Security
2. Scroll down to "Signing in to Google" section
3. Click on "App passwords"
4. Select "Mail" as the app and "Other" as the device (name it "Portfolio Website")
5. Click "Generate"
6. Copy the 16-character password (this is your `GMAIL_PASS`)

## 2. reCAPTCHA v3 Setup

To protect your contact form from spam, you need to set up Google reCAPTCHA v3:

### Step 1: Create reCAPTCHA Keys
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to add a new site
3. Choose "reCAPTCHA v3"
4. Add your domain (e.g., `your-domain.vercel.app` for Vercel)
5. Accept the terms and click "Submit"
6. Copy both the **Site Key** and **Secret Key**

## 3. Vercel Environment Variables Setup

### Step 1: Access Your Vercel Project Settings
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your portfolio project
3. Click on "Settings" tab
4. Click on "Environment Variables" in the sidebar

### Step 2: Add Environment Variables
Add the following environment variables:

| Name | Description | Value |
|------|-------------|-------|
| `GMAIL_USER` | Your Gmail address | your-email@gmail.com |
| `GMAIL_PASS` | Your Gmail App Password | 16-character app password |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 Site Key | Your reCAPTCHA site key |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v3 Secret Key | Your reCAPTCHA secret key |

### Step 3: Redeploy Your Application
1. Go to the "Deployments" tab in your Vercel project
2. Click on the "..." menu for the latest deployment
3. Select "Redeploy" to apply the new environment variables

## 4. Verification

After deployment is complete:

1. Visit your contact page
2. Fill out the form with test information
3. Submit the form
4. Check your Gmail inbox for the received message

## 5. Troubleshooting

### If emails are not being received:
1. Check that all environment variables are correctly set in Vercel
2. Verify that your Gmail App Password is correct
3. Check the Vercel function logs for any error messages

### If reCAPTCHA is not working:
1. Ensure your domain is added to the reCAPTCHA configuration
2. Check that both reCAPTCHA keys are correctly set
3. Verify that you're using reCAPTCHA v3 (not v2)

## 6. Security Notes

- Never commit actual credentials to your repository
- Use Vercel's environment variables for all sensitive information
- Regularly rotate your Gmail App Password for security
- Monitor your reCAPTCHA usage in the Google Admin Console

## 7. Testing in Production

You can test the contact form functionality in production by:

1. Visiting your live contact page
2. Filling out the form with test data
3. Submitting the form
4. Checking your email for the received message

If everything is configured correctly, you should receive the email within a few seconds of submission.
