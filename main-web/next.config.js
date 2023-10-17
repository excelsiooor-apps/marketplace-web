/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  pageExtensions: ['tsx', 'ts'],
  reactStrictMode: false,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'cdn.pixabay.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
