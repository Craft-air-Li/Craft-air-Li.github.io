const API_KEY = "7f4b832523121f64de0147cfd9c34dca";

const weatherList = {
    Thunderstorm:"weather(thunder).png",
    Drizzle:"weather(drizzle).png",
    Rain:"weather(rain).png",
    Snow:"weather(snow).png",
    Atmosphere:"weather(atoms).png",
    Clear:"weather(clear).png",
    Clouds:"weather(cloud).png"
};

function makeIcon(weather, iconPosition){
    weatherIcon = document.createElement("img");
    if(weather === "Thunderstorm"){
        weatherIcon.src = `img/${weatherList.Thunderstorm}`;
    }else if(weather === "Drizzle"){
        weatherIcon.src = `img/${weatherList.Drizzle}`;
    }else if(weather === "Rain"){
        weatherIcon.src = `img/${weatherList.Rain}`;
    }else if(weather === "Snow"){
        weatherIcon.src = `img/${weatherList.Snow}`;
    }else if(weather === "Atmosphere"){
        weatherIcon.src = `img/${weatherList.Atmosphere}`;
    }else if(weather === "Clear"){
        weatherIcon.src = `img/${weatherList.Clear}`;
    }else if(weather === "Clouds"){
        weatherIcon.src = `img/${weatherList.Clouds}`;
    }
    iconPosition.prepend(weatherIcon);
}



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = document.querySelector(".weather__city-name");
            const weatherIcon = document.querySelector(".weather__column");
            const degree = document.querySelector(".weather__degree");
            cityName.innerText = data.name;
            degree.innerText = `${Math.ceil(data.main.temp)}*`;
            const weather = data.weather[0].main;
            makeIcon(weather, weatherIcon);
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);