import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Check if required environment variables are set
  const isDevEnvironment = process.env.NODE_ENV === 'development';
  const hasGmailConfig = process.env.GMAIL_USER && process.env.GMAIL_PASS && 
                        process.env.GMAIL_USER !== 'your_gmail_address@gmail.com' && 
                        process.env.GMAIL_PASS !== 'your_gmail_app_password';
  const hasRecaptchaConfig = process.env.RECAPTCHA_SECRET_KEY && process.env.RECAPTCHA_SECRET_KEY !== 'your_recaptcha_secret_key_here';
  
  // Check reCAPTCHA site key (public)
  const hasRecaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && 
                             process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY !== 'your_recaptcha_site_key_here';

  // Prepare response data
  const configStatus = {
    environment: isDevEnvironment ? 'development' : 'production',
    gmail: {
      configured: hasGmailConfig,
      userSet: !!process.env.GMAIL_USER,
      passSet: !!process.env.GMAIL_PASS,
      isPlaceholderUser: process.env.GMAIL_USER === 'your_gmail_address@gmail.com',
      isPlaceholderPass: process.env.GMAIL_PASS === 'your_gmail_app_password'
    },
    recaptcha: {
      secretConfigured: hasRecaptchaConfig,
      siteKeyConfigured: hasRecaptchaSiteKey,
      secretSet: !!process.env.RECAPTCHA_SECRET_KEY,
      siteKeySet: !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      isPlaceholderSecret: process.env.RECAPTCHA_SECRET_KEY === 'your_recaptcha_secret_key_here',
      isPlaceholderSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY === 'your_recaptcha_site_key_here'
    }
  };

  // Test Gmail connection if configured
  let gmailConnection = {
    status: 'not_tested',
    error: null
  };

  if (hasGmailConfig && !isDevEnvironment) {
    try {
      // Create a transporter to test the connection
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      // Verify the connection
      await transporter.verify();
      gmailConnection = {
        status: 'success',
        error: null
      };
    } catch (error) {
      gmailConnection = {
        status: 'failed',
        error: error.message
      };
    }
  } else if (isDevEnvironment) {
    gmailConnection = {
      status: 'skipped',
      error: 'In development environment, email sending is simulated'
    };
  }

  // Overall status
  const isFullyConfigured = hasGmailConfig && hasRecaptchaConfig && hasRecaptchaSiteKey;
  const isPartiallyConfigured = hasGmailConfig || hasRecaptchaConfig || hasRecaptchaSiteKey;

  return res.status(200).json({
    message: 'Contact form health check',
    status: isFullyConfigured ? 'fully_configured' : isPartiallyConfigured ? 'partially_configured' : 'not_configured',
    config: configStatus,
    gmailConnection,
    recommendations: getRecommendations(configStatus, gmailConnection)
  });
}

function getRecommendations(configStatus, gmailConnection) {
  const recommendations = [];

  // Gmail recommendations
  if (!configStatus.gmail.userSet) {
    recommendations.push('Set GMAIL_USER environment variable with your Gmail address');
  } else if (configStatus.gmail.isPlaceholderUser) {
    recommendations.push('Replace placeholder GMAIL_USER value with your actual Gmail address');
  }

  if (!configStatus.gmail.passSet) {
    recommendations.push('Set GMAIL_PASS environment variable with your Gmail App Password');
  } else if (configStatus.gmail.isPlaceholderPass) {
    recommendations.push('Replace placeholder GMAIL_PASS value with your actual Gmail App Password');
  }

  if (gmailConnection.status === 'failed') {
    recommendations.push(`Gmail connection failed: ${gmailConnection.error}. Check your credentials and network connection.`);
  }

  // reCAPTCHA recommendations
  if (!configStatus.recaptcha.siteKeySet) {
    recommendations.push('Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable with your reCAPTCHA v3 Site Key');
  } else if (configStatus.recaptcha.isPlaceholderSiteKey) {
    recommendations.push('Replace placeholder NEXT_PUBLIC_RECAPTCHA_SITE_KEY value with your actual reCAPTCHA v3 Site Key');
  }

  if (!configStatus.recaptcha.secretSet) {
    recommendations.push('Set RECAPTCHA_SECRET_KEY environment variable with your reCAPTCHA v3 Secret Key');
  } else if (configStatus.recaptcha.isPlaceholderSecret) {
    recommendations.push('Replace placeholder RECAPTCHA_SECRET_KEY value with your actual reCAPTCHA v3 Secret Key');
  }

  // Domain configuration recommendation
  if (configStatus.recaptcha.siteKeySet && !configStatus.recaptcha.isPlaceholderSiteKey) {
    recommendations.push('Ensure your production domain is added to your reCAPTCHA configuration in the Google Admin Console');
  }

  // Additional recommendations for common issues
  if (configStatus.environment === 'production' && !configStatus.gmail.configured) {
    recommendations.push('In production, both GMAIL_USER and GMAIL_PASS must be set with valid credentials. Refer to the Gmail Configuration section in CONTACT_FORM_TROUBLESHOOTING.md');
  }

  if (recommendations.length === 0) {
    recommendations.push('All configurations appear to be set correctly!');
  }

  return recommendations;
}
