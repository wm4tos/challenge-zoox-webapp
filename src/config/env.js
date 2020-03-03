const { config } = require('dotenv');

const { parsed } = config();

module.exports = () => Object.fromEntries(
  Object.entries(
    parsed || {
      API_URL: process.env.API_URL,
      PORT: process.env.PORT,
      STORE_KEY: process.env.STORE_KEY,
    }
  ).map(([key, value]) => (
    [
      key,
      typeof value === 'string' ? JSON.stringify(value) : value,
    ]
  )),
);
