'use client';

import { useState, useEffect } from 'react';

export default function TestEnvVariables() {
  const [envStatus, setEnvStatus] = useState({
    gmailUser: 'Not checked',
    recaptchaSiteKey: 'Not checked',
    isProd: process.env.NODE_ENV === 'production'
  });

  const checkEnvVariables = () => {
    setEnvStatus({
      gmailUser: process.env.GMAIL_USER ? 
        `Set (${process.env.GMAIL_USER.substring(0, 3)}...${process.env.GMAIL_USER.slice(-10)})` : 
        'Not set',
      recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? 
        `Set (${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY.substring(0, 10)}...)` : 
        'Not set',
      isProd: process.env.NODE_ENV === 'production'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Environment Variables Test</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
              <span>Environment:</span>
              <span className={`px-2 py-1 rounded ${envStatus.isProd ? 'bg-red-500' : 'bg-green-500'}`}>
                {envStatus.isProd ? 'Production' : 'Development'}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
              <span>GMAIL_USER:</span>
              <span className={`px-2 py-1 rounded ${envStatus.gmailUser === 'Not set' ? 'bg-red-500' : 'bg-green-500'}`}>
                {envStatus.gmailUser}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
              <span>RECAPTCHA_SITE_KEY:</span>
              <span className={`px-2 py-1 rounded ${envStatus.recaptchaSiteKey === 'Not set' ? 'bg-red-500' : 'bg-green-500'}`}>
                {envStatus.recaptchaSiteKey}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={checkEnvVariables}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
        >
          Check Environment Variables
        </button>

        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 text-yellow-200">
          <h3 className="font-semibold mb-2">Important Notes:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>In production, actual values are masked for security</li>
            <li>If variables show as "Not set", you need to configure them in Vercel</li>
            <li>This test only verifies client-side accessible variables</li>
            <li>Server-side variables (like GMAIL_PASS) cannot be checked here</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
