const city = document.getElementsByClassName("city");
const temp = document.getElementsByName("temp");
const description = document.getElementsByClassName("description");
const humidity = document.getElementsByClassName("humidity");
const wind = document.getElementsByClassName("wind");

const API_KEY = "181a20353bbf95fd9d755a8dc23067f5";

function getWeather() {
  //get lat and long for weather location
  navigator.geolocation.getCurrentPosition((location) => {
    let { latitude, longitude } = location.coords;

    fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
  });
}
