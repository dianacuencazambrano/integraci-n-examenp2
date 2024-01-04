const axios = require('axios');

const authCode = process.env.AUTH_GEO;

const getGeoInfo = async (ciudad) => {
  try {
    const params = {
      auth: authCode,
      locate: ciudad,
      json: '1'
    };
    const response = await axios.get('https://geocode.xyz', { params });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error: ' + error.message });
  }
};

module.exports = { getGeoInfo };
