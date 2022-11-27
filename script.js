const searchButton = document.getElementById("search");
searchButton.addEventListener("click", customSubmit);
const myAppId = "fd0d5ce918d0195763177fe84d694955";
const weather = document.getElementById("weather");
let city;
let weatherData;
const icon = document.getElementById("wicon");

async function customSubmit(event) {
  event.preventDefault();
  const formInput = document.getElementById("city");
  city = formInput.value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${myAppId}`, {mode: 'cors'});
  weatherData = await response.json();
  displayWeather();
}

async function displayWeather() {
  weather.textContent = weatherData.weather[0].main;
  weather.textContent += `, ${weatherData.main.temp} C`;
  let iconId = weatherData.weather[0].icon;
  let iconUrl = await fetch(`https://openweathermap.org/img/w/${iconId}.png`, {mode: 'cors'});
  icon.setAttribute("src", iconUrl.url);
}
