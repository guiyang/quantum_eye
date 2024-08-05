// File: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_URL || 'http://backend:8000'}/api/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/api-debug',
        destination: `${process.env.BACKEND_URL || 'http://localhost:8000'}/api/hello`,
        permanent: false,
      },
    ];
  },
};

console.log('Backend URL:', process.env.BACKEND_URL || 'http://backend:8000');

export default nextConfig;