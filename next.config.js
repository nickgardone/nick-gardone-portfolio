/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ['via.placeholder.com'],
  },
  // Ensure proper handling of headers for HTTPS redirects
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  // Enable compression for better performance
  compress: true,
  // Ensure proper handling of trailing slashes
  trailingSlash: false,
}

module.exports = nextConfig 