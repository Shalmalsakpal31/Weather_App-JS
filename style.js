// import file

import {
    API_KEY,
} from './style2.js';

let currCity = "mumbai";
let units = "metric";

// Selectors
let city = document.querySelector(".weather__city");
let datetime = document.querySelector(".weather__datetime");
let weather__icon = document.querySelector('.weather__icon');
let weather__forecast = document.querySelector(".weather__forecast");
let weather__temperature = document.querySelector(".weather__temperature");
let weather__minimax = document.querySelector(".weather__minimax");
let weather__realfeel = document.querySelector(".weather__realfeel");
let weather__humidity = document.querySelector(".weather__humidity")
let weather__Wind = document.querySelector(".weather__Wind")
let weather__sunset = document.querySelector(".weather__sunset")

// search 
document.querySelector(".weather__search").addEventListener('submit', event => {
    let search = document.querySelector(".weather__searchform");
    // prevent default action
    event.preventDefault();
    // change current city
    currCity = search.value;
    // get weather forecast
    getWeather();
})

// units
document.querySelector(".weather_units_celsius").addEventListener('click', () => {
    if (units !== 'metric') {
        units = "metric"
        getWeather()
    }
})

document.querySelector(".weather_units_farenheit").addEventListener('click', () => {
    if (units !== 'imperial') {
        units = "imperial"
        getWeather()
    }
})

//  convert timestamp to time
function convertTimestampT(timestamp) {
    let dataObj = new Date(timestamp * 1000);

    let hrs = dataObj.getUTCHours().toString().padStart(2, 0);
    let min = dataObj.getUTCMinutes().toString().padStart(2, 0);

    return dataObj.toLocaleString("en-US", hrs)
}



// convert countrycode to Name
function convertCountryCode(country) {
    let regionnames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionnames.of(country)
}
// convert timestamp 
function convertTimestamp(timestamp, timezone) {
    const convertTimezone = timezone / 3600;  // convert secs to hrs
    const date = new Date(timestamp * 1000);
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: `IST/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        hour12: true,
    }
    return date.toLocaleString("en-US", options)
}



function getWeather() {

   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(resp => resp.json()).then
        (data => {
            console.log(data)

            city.innerHTML = `${data.name},${convertCountryCode(data.sys.country)}`;
            //  datetime.innerHTML = `${convertTimestamp(data.dt, data.timezone)}`;
            weather__icon.innerHTML = `  <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="" />`
            weather__forecast.innerHTML = `<p>${data.weather[0].main}`
            weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
            weather__minimax.innerHTML = `<p>Min:${data.main.temp_min.toFixed()}&#176</p><p>Max:${data.main.temp_max.toFixed()}&#176</p>`
            weather__realfeel.innerHTML = `<p>${data.main.feels_like.toFixed()}&#176</p>`
            weather__humidity.innerHTML = `<p>${data.main.humidity.toFixed()}%</p>`
            weather__Wind.innerHTML = `<p>${data.wind.speed.toFixed()}m/s</p>`
            weather__sunset.innerHTML = `<p>${convertTimestampT(data.sys.sunset)}</p>`
        })

}

document.body.addEventListener('load', getWeather())
