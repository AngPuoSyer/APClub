const path = require('path')

module.exports = {
  resolve: {
    roots: [__dirname],
    alias: {
      '@core': path.resolve(__dirname, 'apps/backend/'),
      '@generated': path.resolve(__dirname, 'prisma/@generated'),
    },
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
  },
};
