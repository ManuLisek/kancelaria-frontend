/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'radiant-duck-cdb851e05b.strapiapp.com',
      'radiant-duck-cdb851e05b.media.strapiapp.com'
    ],
  },
  
  async rewrites() {
    return [
      {
        source: '/specjalizacje',
        destination: '/specialties',
      },
      {
        source: '/specjalizacje/:slug*',
        destination: '/specialties/:slug*',
      },
      {
        source: '/blog-prawny',
        destination: '/blog',
      },
      {
        source: '/blog-prawny/:slug*',
        destination: '/blog/:slug*',
      },
      {
        source: '/pomoc-prawna-online',
        destination: '/onlineLegalAid',
      },
      {
        source: '/kontakt',
        destination: '/contact',
      },
    ];
  },
}

module.exports = nextConfig;