import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  // trailingSlash: process.env.NODE_ENV === 'production', // 배포환경을 윟마
  // assetPrefix: '.', // 정적 배포(s3+cloudfront)시 리소스 주소 깨짐
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
