module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      // Page Not Found
      { source: '/pageNotFound', destination: '/notFound/PageNotFound' },

      { source: '/bmw', destination: '/bmw/BMW' },

      { source: '/rangerover', destination: '/rangeRover/RangeRover' },

    ];
  },
};
