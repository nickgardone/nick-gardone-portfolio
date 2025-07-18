'use client';

import { useState, useEffect } from 'react';
import { executeRecaptcha } from '../../utils/recaptcha';

export default function TestRecaptcha() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const testRecaptcha = async () => {
    setLoading(true);
    setError('');
    
    try {
      const recaptchaToken = await executeRecaptcha(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        'test_action'
      );
      setToken(recaptchaToken);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">reCAPTCHA v3 Test</h1>
        
        <button
          onClick={testRecaptcha}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
        >
          {loading ? 'Testing...' : 'Test reCAPTCHA'}
        </button>

        {error && (
          <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {token && (
          <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-400 mb-2">reCAPTCHA Token Generated Successfully!</p>
            <p className="text-xs text-gray-400 break-all">{token}</p>
          </div>
        )}

        <div className="mt-8 text-sm text-gray-400">
          <p>This page tests the reCAPTCHA v3 integration.</p>
          <p>Make sure you have set up your environment variables:</p>
          <ul className="list-disc list-inside mt-2">
            <li>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</li>
            <li>RECAPTCHA_SECRET_KEY</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 