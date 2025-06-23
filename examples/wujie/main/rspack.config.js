const getMainConfig = require('../../../configs/rspack/main');

module.exports = getMainConfig({
  port: process.env.PORT || 8000
});