export const API_KEY = "60a2feb86d0a482dcf08f58825ef4e49";


// let currCity = "mumbai";
// let units = "metric";

// // Selectors
// let city = document.querySelector(".weather__city");
// let datetime = document.querySelector(".weather__datetime");

// // convert countrycode to Name
// function convertCountryCode(country){
//     let regionnames = new Intl.DisplayNames(["en"],{type:"region"});
//     return regionnames.of(country)
// }
// // convert timestamp 
// function convertTimestamp(timestamp,timezone){
//    const convertTimezone = timezone / 3600;  // convert secs to hrs
//    const date = new Date(timestamp*1000);
//    const options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     timeZone: `Etc/GMT${convertTimezone >= 0?"-":"+" }${Math.abs(convertTimezone)}`,
//     hour12:true,
//    }
//    return date.toLocaleString("en-US",options)
// }

// function getWeather () {
    
//     const API_KEY = "60a2feb86d0a482dcf08f58825ef4e49";
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(resp => resp.json()).then(data => {  
//     console.log(data);
//     city.innerHTML= `${data.name},${convertCountryCode(data.sys.country)}`
//     console.log(data.dt,data.timezone)
//     datetime.innerHTML= `${convertTimestamp(data.dt,data.timezone)}` })
//     // const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`);
//     // const data = await resp.json();
   
   
     
// }

// document.body.addEventListener('load',getWeather())


// // [data].forEach(element => {
// //     weather_body.innerHTML = `<h1 class="weather__city">${element.name},${element.sys.country}</h1>
// //     <div class=""weather__datetime>${convertTimestamp(element.dt,element.timezone)}</div>
// //     <div class="weather__forecast">${element.weather['0']['main']}</div>` 
// // }); 