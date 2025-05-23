/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // 画像サイズ設定
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    // リモートパターンのみを使用
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'via.placeholder.com',
      'placehold.co',
      'imagedelivery.net'
    ],
  },
  // 開発環境でのHMRの安定性を向上
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    // services-convergenceディレクトリを除外
    config.externals = [...(config.externals || []), {
      'services-convergence': 'services-convergence'
    }];

    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // services-convergenceディレクトリを除外するパス設定
  onDemandEntries: {
    exclude: ['services-convergence/**/*'],
  },
};

module.exports = nextConfig; 