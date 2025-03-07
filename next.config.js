/**
 * @type {import('next').NextConfig}
 */

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl({
  output: "export",
});

module.exports = nextConfig;
module.exports = withNextIntl(nextConfig);

