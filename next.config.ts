import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  pageExtensions: ['tsx', 'mdx', 'ts', 'js'],
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'i.scdn.co'
      }
    ]
  }
};

const withMDX = createMDX();

export default withMDX(nextConfig);