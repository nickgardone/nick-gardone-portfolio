// reCAPTCHA utility functions

export const loadRecaptchaScript = (siteKey) => {
  // If siteKey is not provided, resolve immediately
  if (!siteKey) {
    return Promise.resolve(null);
  }
  
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not defined'));
      return;
    }

    // If reCAPTCHA is already loaded
    if (window.grecaptcha) {
      resolve(window.grecaptcha);
      return;
    }

    // If script is already being loaded
    if (document.querySelector(`script[src*="recaptcha/api.js"]`)) {
      const checkInterval = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(checkInterval);
          resolve(window.grecaptcha);
        }
      }, 100);
      return;
    }

    // Load the script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      resolve(window.grecaptcha);
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load reCAPTCHA script'));
    };

    document.head.appendChild(script);
  });
};

export const executeRecaptcha = async (siteKey, action = 'contact_form') => {
  // If siteKey is not provided or is a placeholder, return a mock token
  if (!siteKey || siteKey === 'your_recaptcha_site_key_here') {
    console.warn('reCAPTCHA site key not provided or using placeholder, returning mock token');
    return 'mock-token';
  }
  
  try {
    const grecaptcha = await loadRecaptchaScript(siteKey);
    const token = await grecaptcha.execute(siteKey, { action });
    return token;
  } catch (error) {
    console.error('reCAPTCHA execution error:', error);
    // Return mock token if reCAPTCHA fails
    return 'mock-token';
  }
};

// This function is not needed as reCAPTCHA verification is handled in the contact API route
