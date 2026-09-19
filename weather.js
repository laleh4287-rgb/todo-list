let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let output = document.getElementById("output");

let cities = {
    tehran: { lat: 35.6892, lon: 51.3890 },
    mashhad: { lat: 36.2605, lon: 59.6168 },
    isfahan: { lat: 32.6539, lon: 51.6660 },
    shiraz: { lat: 29.5918, lon: 52.5837 },
    tabriz: { lat: 38.0800, lon: 46.2919 }
};

searchBtn.addEventListener("click", function() {
    let city = cityInput.value.toLowerCase();

    if (!cities[city]) {
        output.textContent = "این شهر تو لیست ما نیست. یکی از این شهرها رو امتحان کن: Tehran, Mashhad, Isfahan, Shiraz, Tabriz";
        return;
    }

    output.textContent = "در حال جستجو...";

    let lat = cities[city].lat;
    let lon = cities[city].lon;

    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true")
        .then(function(response) {
            return response.json();
        })
        .then(function(weatherData) {
            let temp = weatherData.current_weather.temperature;
            output.textContent = "دمای هوای " + city + ": " + temp + " درجه سانتی‌گراد";
        })
        .catch(function(error) {
            output.textContent = "متأسفانه مشکلی پیش اومد.";
        });
});