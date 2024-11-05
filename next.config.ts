import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  pageExtensions: ['tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

const withMDX = createMDX();

export default withMDX(nextConfig);