// reCAPTCHA utility functions

export const loadRecaptchaScript = (siteKey) => {
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
  try {
    const grecaptcha = await loadRecaptchaScript(siteKey);
    const token = await grecaptcha.execute(siteKey, { action });
    return token;
  } catch (error) {
    console.error('reCAPTCHA execution error:', error);
    throw new Error('Failed to execute reCAPTCHA verification');
  }
};

export const verifyRecaptchaToken = async (token) => {
  try {
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}; 