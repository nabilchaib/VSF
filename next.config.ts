import path from 'node:path';

import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vetiversansfrontieres.org',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.vetiversansfrontieres.org',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        pathname: '/**'
      }
    ]
  }
};

export default withNextIntl(nextConfig);
