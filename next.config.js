/** @type {import('next').NextConfig} */
const webpack = require('webpack')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ignore optional dependencies that are not needed for web builds
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@react-native-async-storage/async-storage': false,
      'pino-pretty': false,
    }

    // Ignore these modules during webpack bundling
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^@react-native-async-storage\/async-storage$/,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^pino-pretty$/,
      })
    )

    return config
  },
}

module.exports = nextConfig

