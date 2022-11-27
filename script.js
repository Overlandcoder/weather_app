const searchButton = document.getElementById("search");
searchButton.addEventListener("click", customSubmit);
const myAppId = "fd0d5ce918d0195763177fe84d694955";

async function customSubmit(event) {
  event.preventDefault();
  const formInput = document.getElementById("city");
  const city = formInput.value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myAppId}`, {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
}
