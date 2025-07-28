# Contact Form Troubleshooting Guide

This guide will help you diagnose and fix issues with the contact form in production.

## 1. Common Issues and Solutions

### Environment Variables Not Set
**Symptoms**: 
- Form submission fails with "Email service not configured" or "Spam protection not configured"
- No emails are received
- Vercel function logs show configuration errors

**Solution**:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_PASS`: Your Gmail App Password (16-character code)
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your reCAPTCHA v3 Site Key
   - `RECAPTCHA_SECRET_KEY`: Your reCAPTCHA v3 Secret Key
4. Redeploy your application

### Gmail Configuration Issues
**Symptoms**:
- Form submission fails with "Failed to send email"
- Vercel function logs show authentication errors
- Emails are not received

**Solution**:
1. Ensure 2-Factor Authentication is enabled on your Google account
2. Generate a new App Password:
   - Go to Google Account Settings
   - Security > Signing in to Google > App passwords
   - Select "Mail" and "Other" (name it "Portfolio Website")
   - Copy the 16-character password
3. Update the `GMAIL_PASS` environment variable with the new App Password
4. Redeploy your application

### reCAPTCHA Domain Configuration
**Symptoms**:
- Form submission fails with "reCAPTCHA verification failed"
- reCAPTCHA test page shows errors
- Console shows reCAPTCHA script loading errors

**Solution**:
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Select your site
3. Add your production domain to the domain list (e.g., `your-domain.vercel.app`)
4. Save changes
5. Redeploy your application

## 2. How to Check Vercel Function Logs

1. Go to your Vercel project dashboard
2. Click on the "Functions" tab
3. Find the `/api/contact` function
4. Click on recent invocations to see detailed logs
5. Look for error messages that indicate what's failing

## 3. Using the Vercel Environment Check Script

You can use the provided bash script to quickly check if all required environment variables are set in your Vercel project:

1. Make sure you have the Vercel CLI installed:
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Run the environment check script from your project directory:
   ```bash
   ./check-vercel-env.sh
   ```

The script will show you which environment variables are set and which are missing.

## 4. Using the Health Check Endpoint

The portfolio includes a health check endpoint that can help diagnose configuration issues:

1. Visit `/contact-health` on your deployed site
2. The page will automatically run a health check and display the results
3. Review the configuration status and recommendations
4. Follow the recommendations to fix any issues

The health check verifies:
- Environment variable configuration
- Gmail connection (in production)
- reCAPTCHA configuration

## 5. Testing in Stages

### Test reCAPTCHA Integration
1. Visit `/test-recaptcha` on your deployed site
2. Click "Test reCAPTCHA"
3. If successful, you'll see a token generated
4. If it fails, check your reCAPTCHA configuration

### Test API Endpoint Directly
1. Use a tool like Postman or curl to test the endpoint:
   ```bash
   curl -X POST https://your-domain.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "message": "This is a test message",
       "recaptchaToken": "mock-token"
     }'
   ```

## 6. Debugging Checklist

Before each deployment, verify:

- [ ] Gmail App Password is current and valid
- [ ] reCAPTCHA keys are configured for your production domain
- [ ] All environment variables are set in Vercel
- [ ] No placeholder values are being used in production
- [ ] Recent Vercel function logs show no errors

## 7. Emergency Fallback

If the contact form continues to fail:

1. Temporarily disable reCAPTCHA by removing the `RECAPTCHA_SECRET_KEY` environment variable
2. This will cause the form to use mock tokens and bypass reCAPTCHA verification
3. While not ideal for spam protection, it will allow the form to function

## 8. Monitoring

Set up monitoring for your contact form:

1. Check Vercel function logs regularly
2. Set up email notifications for form submissions
3. Monitor reCAPTCHA usage in the Google Admin Console

## 9. Security Notes

- Never commit actual credentials to your repository
- Regularly rotate your Gmail App Password
- Monitor your reCAPTCHA usage for unusual activity
- Keep your dependencies updated

## 10. Support

If you continue to experience issues:

1. Check the Vercel function logs for specific error messages
2. Verify all environment variables are correctly set
3. Test each component individually (reCAPTCHA, email sending)
4. Reach out to Vercel support if the issue appears to be platform-related
