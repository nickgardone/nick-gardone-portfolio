# How to Fix the Contact Form in Production

This document provides a step-by-step guide to fix the contact form issues that have been failing in production.

## Root Cause Analysis

The contact form has been failing in production due to missing or incorrect environment variable configuration. The form requires specific environment variables to be set in your Vercel project for proper operation:

1. `GMAIL_USER` - Your Gmail address
2. `GMAIL_PASS` - Your Gmail App Password
3. `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Your reCAPTCHA v3 Site Key
4. `RECAPTCHA_SECRET_KEY` - Your reCAPTCHA v3 Secret Key

## Solution Overview

I've implemented several improvements to help diagnose and fix these issues:

1. Enhanced error reporting in both frontend and backend
2. Created comprehensive troubleshooting documentation
3. Added diagnostic tools to verify configuration
4. Implemented a health check system to identify issues

## Step-by-Step Fix

### Step 1: Verify Current Configuration

First, check the current status of your contact form configuration:

1. Visit `/contact-health` on your deployed site
2. Review the configuration status and recommendations
3. Note any missing or incorrect configurations

Alternatively, you can use the test script:
```bash
# Test against your deployed site
SITE_URL=https://your-domain.vercel.app node test-contact-form.js
```

### Step 2: Configure Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:

| Variable Name | Description | Value |
|---------------|-------------|-------|
| `GMAIL_USER` | Your Gmail address | your-email@gmail.com |
| `GMAIL_PASS` | Your Gmail App Password | 16-character app password |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 Site Key | Your reCAPTCHA site key |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v3 Secret Key | Your reCAPTCHA secret key |

### Step 3: Generate Gmail App Password

If you haven't already:

1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account Settings > Security
3. Generate an "App Password" for your application
4. Select "Mail" and "Other" (name it "Portfolio Website")
5. Copy the 16-character password
6. Use this as your `GMAIL_PASS` value

### Step 4: Configure reCAPTCHA

If you haven't already:

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new reCAPTCHA v3 site or use an existing one
3. Add your production domain to the domain list (e.g., `your-domain.vercel.app`)
4. Copy both the Site Key and Secret Key
5. Use these as your `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` values

### Step 5: Redeploy Your Application

1. Go to the "Deployments" tab in your Vercel project
2. Click on the "..." menu for the latest deployment
3. Select "Redeploy" to apply the new environment variables

### Step 6: Test the Contact Form

1. Visit your contact page
2. Fill out the form with test information
3. Submit the form
4. Check your Gmail inbox for the received message

## Diagnostic Tools

### Health Check Page (`/contact-health`)

This page provides a comprehensive overview of your contact form configuration:
- Overall status (fully configured, partially configured, not configured)
- Detailed configuration status for Gmail and reCAPTCHA
- Gmail connection test results
- Actionable recommendations for fixing issues

### Environment Variable Test (`/test-env`)

This page verifies that client-side accessible environment variables are properly set:
- Shows whether `GMAIL_USER` and `RECAPTCHA_SITE_KEY` are configured
- Indicates if you're in development or production environment

### reCAPTCHA Test (`/test-recaptcha`)

This page tests the reCAPTCHA integration:
- Verifies that the reCAPTCHA script loads correctly
- Tests token generation functionality

## Troubleshooting Common Issues

### Issue: "Email service not configured"

**Solution**: 
1. Verify that `GMAIL_USER` and `GMAIL_PASS` are set in Vercel environment variables
2. Ensure the values are not placeholder values
3. Check that your Gmail App Password is correct

### Issue: "Spam protection not configured"

**Solution**:
1. Verify that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` are set
2. Ensure the values are not placeholder values
3. Check that your production domain is added to your reCAPTCHA configuration

### Issue: "Failed to send email"

**Solution**:
1. Check Vercel function logs for detailed error messages
2. Verify your Gmail credentials are correct
3. Ensure 2-Factor Authentication is enabled on your Google account
4. Confirm your Gmail App Password is valid

## Monitoring and Maintenance

After fixing the issues:

1. Regularly check Vercel function logs for any errors
2. Monitor your email delivery success
3. Check reCAPTCHA usage in the Google Admin Console
4. Rotate your Gmail App Password periodically for security

## Additional Resources

- [Production Setup Guide](PRODUCTION_SETUP.md) - Detailed setup instructions
- [Contact Form Troubleshooting Guide](CONTACT_FORM_TROUBLESHOOTING.md) - Comprehensive troubleshooting steps
- [reCAPTCHA Setup Guide](RECAPTCHA_SETUP.md) - reCAPTCHA configuration instructions
- [Contact Form Fixes Summary](CONTACT_FORM_FIXES_SUMMARY.md) - Summary of all changes made

## Support

If you continue to experience issues after following these steps:

1. Check the Vercel function logs for specific error messages
2. Verify all environment variables are correctly set
3. Test each component individually using the diagnostic pages
4. Reach out to Vercel support if the issue appears to be platform-related
