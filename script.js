const weather = document.getElementsByClassName("weather");
const city = document.getElementsByClassName("city");
const temp = document.getElementsByName("temp");
const description = document.getElementsByClassName("description");
const feels_like = document.getElementsByClassName("feels-like");
const pressure = document.getElementsByClassName("pressure");
const humidity = document.getElementsByClassName("humidity");
const wind = document.getElementsByClassName("wind");

const API_KEY = "181a20353bbf95fd9d755a8dc23067f5";

function getWeather() {
  //get lat and long for weather location
  navigator.geolocation.getCurrentPosition((location) => {
    let { latitude, longitude } = location.coords;

    fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeather(data);
      });
  });
}
getWeather();

function showWeather(data) {
  let { temp, description, feels_like, pressure, humidity, wind_speed } = data.current;

  weather.innerHTML = `<h2 class="city">Weather in City</h2>
  <h1 class="temp">${temp}</h1>
  <div class="description">${description}</div>
  <div class="feels-like">Feels like: ${feels_like}</div>
  <div class="pressure">Pressure: ${pressure}</div>
  <div class="humidity">Humidity: ${humidity}</div>
  <div class="wind">Wind Speed: ${wind_speed}</div>;
}
