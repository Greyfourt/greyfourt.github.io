/**
 * @type {import('next').NextConfig}
 */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

// Configure Next.js for GitHub Pages
const nextConfig = {
  // This is required for static exports (GitHub Pages)
  output: 'export',
  
  // Required for image optimization in static export
  images: {
    unoptimized: true
  }
};

// Apply the next-intl plugin
module.exports = withNextIntl(nextConfig);
