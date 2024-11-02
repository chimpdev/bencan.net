import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  }
};

export default nextConfig;