const { config } = require('dotenv');

const { parsed } = config();

module.exports = () => Object.fromEntries(
  Object.entries(parsed).map(([key, value]) => (
    [
      key,
      typeof value === 'string' ? JSON.stringify(value) : value,
    ]
  )),
);
