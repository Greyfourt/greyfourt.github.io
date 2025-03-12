/**
 * @type {import('next').NextConfig}
 */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: 'export',
  // Add this for GitHub Pages with a custom domain or project site
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  // If you're using a custom domain, you can remove this
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // This is needed for GitHub Pages deployment
  images: {
    unoptimized: true
  },
  // Disable trailing slashes to match GitHub Pages behavior
  trailingSlash: false,
};

// Apply the next-intl plugin
module.exports = withNextIntl(nextConfig);
