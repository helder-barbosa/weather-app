const axios = require('axios');
const APIkey = '';
const cityName = 'brasilia';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;

axios
  .get(url)
  .then((weatherData) => {
    const { main, name, sys, weather } = weatherData.data;

    const tempCelcius = main[0];
    const cityCountry = sys[2];
    const descripWeather = weather[2];

    console.log(name, tempCelcius, cityCountry, descripWeather);
  })

  .catch((err) => {
    console.log(err);
  });
