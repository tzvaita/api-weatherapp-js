const getData = async (e) => {
  const apiKey = 'efc2c4c4facd952727e77dae6934241e';
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const city = document.getElementById('search').value;
  const unit = e.target.id === 'city-cel-btn' ? 'metric' : 'imperial';

  const fetchParams = `${url}?q=${city}&units=${unit}&APPID=${apiKey}`;

  try {
    const response = await fetch(fetchParams, { mode: 'cors' });

    if (response.ok) {
      const responseInfo = await response.json();
      const cityname = responseInfo.name;
      const tempInfo = responseInfo.main;
      const weatherInfo = responseInfo.weather[0];

      const cityInfo = {
        name: cityname,
        date: new Date(),
        temperature: tempInfo,
        weather: weatherInfo,
        unit: unit === 'metric' ? '°C' : '°F',
      };
      return cityInfo;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    return error;
  }
};

export default getData;