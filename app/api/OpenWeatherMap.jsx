var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=782a2109112372fdffe493c96cfde134&units=metric';

module.exports = {
  getTemp: function(location) {
      var encodedLocation = decodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function (response) {

          if (response.data.cod && response.data.message) {
              throw new Error(response.data.message);
          } else {
              return response.data;
          }
      }, function (response) {
          throw new Error('City not found');
      });
  }
};