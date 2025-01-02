import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  pageExtensions: ['tsx', 'mdx', 'ts', 'js'],
  images: {
    remotePatterns: [
      {
        hostname: 'i.scdn.co'
      }
    ]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.node/,
      use: 'node-loader'
    });

    return config;
  }
};

const withMDX = createMDX();

export default withMDX(nextConfig);