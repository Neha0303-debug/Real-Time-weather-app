let input = document.querySelector("input");
let btn = document.querySelector(".search i");
let city = document.querySelector("#city");
let temp = document.querySelector("#temperature");
let weatherImg = document.querySelector(".forecast img");

const apiurl = "https://api.openweathermap.org/data/2.5/weather?appid=b28a848b9b593ca40bbb42520b74ca05&units=metric";



async function getweatherdata() {
    let q = input.value;
    const resp = await fetch(apiurl + `&q=${q}`);
    input.value = "";
    let data = await resp.json();
    console.log(data);
    city.innerText = data.name;
    temp.innerText = data.main.temp + ` °c`;
    setWeatherImg(data.weather[0].main);
    document.querySelector(".water").innerText = data.main.humidity+`%`;
    document.querySelector(".speed").innerText = data.wind.speed+`km/h`;
    document.querySelector(".temp").innerText = data.main.temp+` °c`;
}

function setWeatherImg(img) {
    if(img == "Clouds") {
        weatherImg.setAttribute("src", "cloudy.png");
    }else if(img == "Clear") {
        weatherImg.setAttribute("src", "sunny_weather.png");
    }else if(img == "Fog") {
        weatherImg.setAttribute("src", "foggy.png");
    }else if(img == "Rainy") {
        weatherImg.setAttribute("src", "rainy.png");
    }else if(img == "Thunder") {
        weatherImg.setAttribute("src", "thunder_rain.png");
    }
}

btn.addEventListener("click", () => {
    console.log(input.value);
    getweatherdata();
})
