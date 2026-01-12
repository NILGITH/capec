/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withNextIntl(nextConfig);
