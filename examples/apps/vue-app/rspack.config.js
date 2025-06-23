const getChildConfig = require('../../../configs/rspack/child');

module.exports = getChildConfig({
  port: process.env.PORT || 8001,
  name: 'vue-app'
});