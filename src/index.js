// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import searchForm from './dom';
import getData from './getInfo';

const mainCont = document.getElementById('content');
const formCont = document.createElement('div');
const card = document.createElement('div');
const container = document.createElement('div');
card.className = 'card';
container.id = 'container';
card.appendChild(container);
formCont.appendChild(searchForm());
mainCont.appendChild(formCont);
mainCont.appendChild(card);


const submitted = document.getElementById('searchBtn');
submitted.addEventListener('click', (e) => {
  getData(e)
    .then(result => {
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
    });
  e.preventDefault();
});