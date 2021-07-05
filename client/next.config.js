module.exports = {
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant
    // eslint-disable-next-line no-param-reassign
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // delay before rebuilding
    };
    return config;
  },
  env: {
    STRAPI_BASE_URL:
      'http://sub.pg-at-env.eba-5dnijfwy.eu-west-1.elasticbeanstalk.com',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  future: {
    webpack5: false,
  },
  jsconfigPaths: true,
  target: 'server',
};
