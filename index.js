const apiKey = "8758171a9d96de5ae2a79c3c67f37148";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const input = document.querySelector("#city-input");
const searchBtn = document.querySelector('.search-box button')


async function getWeatherReport(c) {
    const response = await fetch(url + c + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather-section').style.display = "none";
    }
    else {
        document.querySelector('.error').style.display = "none";
        const data = await response.json();
        console.log(data);

        const city = document.querySelector(".city-name")
        city.innerHTML = data.name;
        const temp = document.querySelector(".temp");
        temp.innerHTML = Math.round(data.main.temp)+'°C';
        const humidity = document.querySelector(".humidity");
        humidity.innerHTML = data.main.humidity + ' %';
        const wind = document.querySelector(".wind");
        wind.innerHTML = Math.round(data.wind.speed) + " km/h";
        const icon = document.querySelector(".weather-icon");
        if (data.weather[0].main == "Haze") {
            icon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Clear"){
            icon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Mist"){
            icon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Clouds"){
            icon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain"){
            icon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            icon.src = "images/drizzle.png";
        }
        const weatherSection = document.querySelector('.weather-section');
        weatherSection.style.display = "block";

    }
    input.value = "";
}

searchBtn.addEventListener("click", () => {
    getWeatherReport(input.value);
})

// getWeatherReport("pune");

