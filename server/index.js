require('@babel/polyfill');
// Ignore those pesky styles
// require('ignore-styles');

// Set up babel to do its thing... env for the latest toys, react-app for CRA
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  // presets: ['env', 'react-app']
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties']
  ],
});

// Now that the nonsense is over... load up the server entry point
require('./server');