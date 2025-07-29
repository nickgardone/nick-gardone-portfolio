# How to Fix Contact Form Issues

This guide provides step-by-step instructions to resolve common issues with the contact form messaging tool.

## Step 1: Check the Health Page

1. Visit `/contact-health` on your deployed site
2. Review the configuration status and recommendations
3. Note any warnings or errors displayed

## Step 2: Verify Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Ensure the following variables are set:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_PASS`: Your Gmail App Password (16-character code)
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your reCAPTCHA v3 Site Key
   - `RECAPTCHA_SECRET_KEY`: Your reCAPTCHA v3 Secret Key

## Step 3: Check for Placeholder Values

Make sure you're not using placeholder values in production:
- `GMAIL_USER` should not be "your_gmail_address@gmail.com"
- `GMAIL_PASS` should not be "your_gmail_app_password"
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` should not be "your_recaptcha_site_key_here"
- `RECAPTCHA_SECRET_KEY` should not be "your_recaptcha_secret_key_here"

## Step 4: Verify Gmail Configuration

1. Ensure 2-Factor Authentication is enabled on your Google account
2. Generate a new App Password:
   - Go to Google Account Settings
   - Security > Signing in to Google > App passwords
   - Select "Mail" and "Other" (name it "Portfolio Website")
   - Copy the 16-character password
3. Update the `GMAIL_PASS` environment variable with the new App Password

## Step 5: Verify reCAPTCHA Configuration

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Select your site
3. Add your production domain to the domain list (e.g., `your-domain.vercel.app`)
4. Save changes

## Step 6: Redeploy Your Application

After making changes to environment variables:
1. Go to your Vercel project dashboard
2. Click on "Deployments"
3. Click "Redeploy" on the latest deployment or push a new commit to trigger a new deployment

## Step 7: Test the Form

1. Visit your contact page
2. Fill out the form with test data
3. Submit the form
4. Check if you receive the email at NGardone@Gmail.com

## Step 8: Check Vercel Function Logs

If the form still isn't working:
1. Go to your Vercel project dashboard
2. Click on the "Functions" tab
3. Find the `/api/contact` function
4. Click on recent invocations to see detailed logs
5. Look for error messages that indicate what's failing

## Emergency Fallback

If the contact form continues to fail:
1. Temporarily disable reCAPTCHA by removing the `RECAPTCHA_SECRET_KEY` environment variable
2. This will cause the form to use mock tokens and bypass reCAPTCHA verification
3. While not ideal for spam protection, it will allow the form to function

## Common Error Messages and Solutions

### "Email service not properly configured"
- Ensure both `GMAIL_USER` and `GMAIL_PASS` are set with valid credentials
- Verify that you're using an App Password, not your regular Gmail password

### "Spam protection not properly configured"
- Ensure both `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` are set
- Verify that your production domain is added to your reCAPTCHA configuration

### "reCAPTCHA verification failed"
- Check that your reCAPTCHA keys are configured for your production domain
- Ensure you're not using the test keys in production

## Additional Resources

- Refer to `CONTACT_FORM_TROUBLESHOOTING.md` for more detailed troubleshooting steps
- Use the `check-vercel-env.sh` script to verify environment variables
- Use the `test-contact-form.js` script to test the contact form functionality
