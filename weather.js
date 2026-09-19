let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let output = document.getElementById("output");

let cities = {
    tehran: { lat: 35.6892, lon: 51.3890 },
    mashhad: { lat: 36.2605, lon: 59.6168 },
    isfahan: { lat: 32.6539, lon: 51.6660 },
    shiraz: { lat: 29.5918, lon: 52.5837 },
    tabriz: { lat: 38.0800, lon: 46.2919 },
    kerman: { lat: 30.2839, lon: 57.0834 },
    yazd: { lat: 31.8974, lon: 54.3569 },
    ahvaz: { lat: 31.3183, lon: 48.6706 },
    qom: { lat: 34.6416, lon: 50.8746 },
    rasht: { lat: 37.2808, lon: 49.5832 }
};

searchBtn.addEventListener("click", async function() {
    let city = cityInput.value.toLowerCase();

    if (!cities[city]) {
        output.textContent = "این شهر تو لیست ما نیست. یکی از این شهرها رو امتحان کن: Tehran, Mashhad, Isfahan, Shiraz, Tabriz";
        return;
    }

    output.textContent = "در حال جستجو...";

    let lat = cities[city].lat;
    let lon = cities[city].lon;

    try {
        let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true");
        let weatherData = await response.json();
        let temp = weatherData.current_weather.temperature;

        let icon = "";
        if (temp >= 30) {
            icon = "🔥";
        } else if (temp >= 15) {
            icon = "☀️";
        } else if (temp >= 0) {
            icon = "☁️";
        } else {
            icon = "❄️";
        }

        output.textContent = icon + " دمای هوای " + city + ": " + temp + " درجه سانتی‌گراد";
    } catch (error) {
        output.textContent = "متأسفانه مشکلی پیش اومد.";
    }
});