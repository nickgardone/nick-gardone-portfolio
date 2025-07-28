'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, XCircle, Loader } from 'lucide-react';

export default function ContactHealthCheck() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHealthData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/contact/health');
      const data = await response.json();
      setHealthData(data);
    } catch (err) {
      setError('Failed to fetch health data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Checking contact form health...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Contact Form Health Check</h1>
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <XCircle className="w-6 h-6 text-red-400" />
              <h2 className="text-xl font-semibold">Error</h2>
            </div>
            <p className="mt-3 text-red-200">{error}</p>
            <button
              onClick={fetchHealthData}
              className="mt-4 bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!healthData) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Contact Form Health Check</h1>
          <p>No health data available.</p>
        </div>
      </div>
    );
  }

  const statusColors = {
    fully_configured: 'bg-green-900/30 border-green-700 text-green-200',
    partially_configured: 'bg-yellow-900/30 border-yellow-700 text-yellow-200',
    not_configured: 'bg-red-900/30 border-red-700 text-red-200'
  };

  const statusIcons = {
    fully_configured: <CheckCircle className="w-6 h-6 text-green-400" />,
    partially_configured: <AlertCircle className="w-6 h-6 text-yellow-400" />,
    not_configured: <XCircle className="w-6 h-6 text-red-400" />
  };

  const connectionStatusColors = {
    success: 'bg-green-900/30 border-green-700 text-green-200',
    failed: 'bg-red-900/30 border-red-700 text-red-200',
    skipped: 'bg-blue-900/30 border-blue-700 text-blue-200',
    not_tested: 'bg-gray-900/30 border-gray-700 text-gray-200'
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Form Health Check</h1>
        
        {/* Overall Status */}
        <div className={`border rounded-lg p-6 mb-8 ${statusColors[healthData.status]}`}>
          <div className="flex items-center space-x-3">
            {statusIcons[healthData.status]}
            <h2 className="text-2xl font-semibold capitalize">
              {healthData.status.replace('_', ' ')}
            </h2>
          </div>
          <p className="mt-3">{healthData.message}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Configuration Status */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Configuration Status</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Environment</h4>
                <p className="text-gray-300 capitalize">{healthData.config.environment}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Gmail Configuration</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>User Set:</span>
                    <span className={healthData.config.gmail.userSet ? 'text-green-400' : 'text-red-400'}>
                      {healthData.config.gmail.userSet ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Password Set:</span>
                    <span className={healthData.config.gmail.passSet ? 'text-green-400' : 'text-red-400'}>
                      {healthData.config.gmail.passSet ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valid Configuration:</span>
                    <span className={healthData.config.gmail.configured ? 'text-green-400' : 'text-red-400'}>
                      {healthData.config.gmail.configured ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">reCAPTCHA Configuration</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Site Key Set:</span>
                    <span className={healthData.config.recaptcha.siteKeySet ? 'text-green-400' : 'text-red-400'}>
                      {healthData.config.recaptcha.siteKeySet ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Secret Key Set:</span>
                    <span className={healthData.config.recaptcha.secretSet ? 'text-green-400' : 'text-red-400'}>
                      {healthData.config.recaptcha.secretSet ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valid Configuration:</span>
                    <span className={(healthData.config.recaptcha.siteKeyConfigured && healthData.config.recaptcha.secretConfigured) ? 'text-green-400' : 'text-red-400'}>
                      {(healthData.config.recaptcha.siteKeyConfigured && healthData.config.recaptcha.secretConfigured) ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gmail Connection Test */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Gmail Connection Test</h3>
            
            <div className={`rounded-lg p-4 ${connectionStatusColors[healthData.gmailConnection.status]}`}>
              <div className="flex items-center space-x-2">
                {healthData.gmailConnection.status === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
                {healthData.gmailConnection.status === 'failed' && <XCircle className="w-5 h-5 text-red-400" />}
                {healthData.gmailConnection.status === 'skipped' && <AlertCircle className="w-5 h-5 text-blue-400" />}
                {healthData.gmailConnection.status === 'not_tested' && <AlertCircle className="w-5 h-5 text-gray-400" />}
                <span className="font-medium capitalize">
                  {healthData.gmailConnection.status.replace('_', ' ')}
                </span>
              </div>
              
              {healthData.gmailConnection.error && (
                <p className="mt-2 text-sm">{healthData.gmailConnection.error}</p>
              )}
              
              {healthData.gmailConnection.status === 'skipped' && (
                <p className="mt-2 text-sm">In development environment, email sending is simulated.</p>
              )}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          
          {healthData.recommendations.length > 0 ? (
            <ul className="space-y-2">
              {healthData.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recommendations at this time.</p>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={fetchHealthData}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Refresh Health Check
          </button>
        </div>
      </div>
    </div>
  );
}
