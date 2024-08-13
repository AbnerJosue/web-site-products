/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*', // Redirige las solicitudes a tu API Gateway
      },
    ];
  },
}

export default nextConfig;
