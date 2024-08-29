import './styles.css';
import { format } from 'date-fns';

const form = document.getElementById('form');
const locationInput = document.getElementById('location');
const cardsContainer = document.getElementById('cards');
const container = document.getElementById('weatherInformation');

const clearData = () => {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearData();
  getWeather(locationInput.value);
  form.reset();
});

async function getWeather(location) {
  try {
    const result = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days%2Ccurrent&key=SE8J97MQ2JY9LULFK7TRPEWZE`,
      { mode: 'cors' },
    );
    const weatherData = await result.json();
    container.appendChild(mainCard(weatherData));
    weatherData.days.slice(0, 12).forEach((day) => {
      cardsContainer.appendChild(cards(day));
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

const mainCard = (data) => {
  const icon = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('div');
  const condition = document.createElement('p');
  const temperature = document.createElement('p');
  const cardElement = document.createElement('div');

  temperature.textContent = data.currentConditions.temp + '°C';
  condition.textContent = data.currentConditions.conditions;

  icon.classList.add(data.currentConditions.icon);
  icon.classList.add('icon');
  title.textContent = data.timezone;
  description.appendChild(temperature);
  description.appendChild(condition);
  cardElement.appendChild(title);
  cardElement.appendChild(icon);
  cardElement.appendChild(description);
  cardElement.classList.add('main-card');
  return cardElement;
};

const cards = (data) => {
  const card = document.createElement('div');

  const icon = document.createElement('div');
  const dateContent = document.createElement('div');
  const day = document.createElement('p');
  const date = document.createElement('p');
  const currentTemp = document.createElement('p');
  const minmax = document.createElement('p');
  const conditions = document.createElement('p');

  icon.classList.add(data.icon);
  icon.classList.add('card-icon');
  day.textContent = format(data.datetime, 'iii');
  date.textContent = format(data.datetime, 'dd/MM');
  currentTemp.textContent = `${data.temp}°C`;
  minmax.textContent = `${data.tempmin}° / ${data.tempmax}°`;
  conditions.textContent = data.conditions;
  dateContent.appendChild(day);
  dateContent.appendChild(date);
  dateContent.classList.add('date-content');
  card.appendChild(icon);
  card.appendChild(dateContent);
  card.appendChild(currentTemp);
  card.appendChild(minmax);
  card.appendChild(conditions);
  card.classList.add('card');
  return card;
};

// default
getWeather('mexico');
