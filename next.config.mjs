/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/ai-api/:path*',
        destination: process.env.NEXT_PUBLIC_FLOWISE_URL + "/:path*",
      },
    ];
  }
};

export default nextConfig;
