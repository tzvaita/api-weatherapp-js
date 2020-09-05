// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const mainCont = document.getElementById('content');

fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=efc2c4c4facd952727e77dae6934241e', { mode: 'cors' })
  .then((response) => response.json())
  .then((response) => {
    mainCont.innerHTML = response.main.temp;
    console.log(response);
  });