const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")

const getWeather = async (city) => {
    weather.innerHTML = `Loading...`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `${data.message}`
        return;
    }
    weather.innerHTML = `
     <div>
        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="">
      </div>
       <div>
          <h1>${data.main.temp} °C</h1>
          <h4>${data.weather[0].main}</h4>
      </div>
  `
}

form.addEventListener("submit", function (event) {
    /* console.log(search.value) */
    getWeather(search.value)
    event.preventDefault();
})