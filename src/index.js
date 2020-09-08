// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import getData from './getInfo';

const mainCont = document.getElementById('content');
const formCont = document.createElement('div');
const card = document.createElement('div');
const container = document.createElement('div');
card.className = 'card';
container.id = 'container';
card.appendChild(container);
mainCont.appendChild(formCont);
mainCont.appendChild(card);

const displayAll = (result) => {
  const displayInfo = document.getElementById('container');
  displayInfo.innerHTML = `
      <h2>${result.name}</h2>
      <h3>${result.date}</h3>
      
      <div class="temperature-info">
      <img src="http://openweathermap.org/img/wn/${result.weather.icon}@2x.png" alt="${result.weather.icon}" class= "circle-icon"><img>
      <h1>${result.temperature.temp}${result.unit} </h1>
      </div>
      <h5> Min:${result.temperature.temp_min}${result.unit} / Max:${result.temperature.temp_max}${result.unit}</h5>
      <div class="details">
      <h4>Details</h4>
      <p>Feels like: ${result.temperature.feels_like} ${result.unit} </p>
      <p>Humidity: ${result.temperature.humidity} %</p>
      <p>Pressure: ${result.temperature.pressure} hpA</p>
      </div>`;
};

const renderReject = () => {
  document.querySelector('.card-body').style.display = 'block';
  const divInfo = document.getElementById('city-info');
  divInfo.innerHTML = `
  <h4>Couldnt find city, please type another one!</h4>`;
  document.getElementById('search').reset();
};

const renderBackground = (result) => {
  document.body.style.backgroundColor = 'lightblue';
  const weatherToSearch = result.weather.main;
  switch (weatherToSearch) {
    case 'Rain':
    case 'Drizzle':
    case 'Squall':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/Il9f7ZhytEiI0/giphy.gif')";
      break;
    case 'Snow':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/FoVi0LDjy1XS8/giphy.gif')";
      break;
    case 'Clear':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/G1T5M0qT6ZJlu/giphy.gif')";
      break;
    case 'Thunderstom':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.gif')";
      break;
    case 'Smoke':
    case 'Fog':
    case 'Haze':
    case 'Mist':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/3nQWWe5X1PD8s/giphy.gif')";
      break;
    case 'Clouds':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif')";
      break;
    case 'Tornado':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/MXvDhlmD0eB5qNvvjZ/giphy.gif')";
      break;
    case 'Sand':
    case 'Dust':
    case 'Ash':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/EaVouuqujYqiI/giphy.gif')";
      break;
    default:
      document.body.style.backgroundImage = 'none';
      break;
  }
};

const changeUnits = (e) => {
  getData(e)
    .then(result => {
      document.querySelector('.card-body').style.display = 'none';
      displayAll(result);
      renderBackground(result);
    })
    .catch(() => {
      renderReject();
      document.getElementById('search').defaultValue = '';
    });
};
const buttonCelsius = document.getElementById('city-cel-btn');
buttonCelsius.addEventListener('click', changeUnits);

const buttonFarenheit = document.getElementById('city-far-btn');
buttonFarenheit.addEventListener('click', changeUnits);