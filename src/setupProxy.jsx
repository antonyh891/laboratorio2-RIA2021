const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://superheroapi.com/',
    createProxyMiddleware({
      target: 'https://superheroapi.com',
      changeOrigin: true,
    })
  );
};