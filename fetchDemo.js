let output = document.getElementById("output");

output.textContent = "در حال دریافت اطلاعات...";

fetch("https://api.open-meteo.com/v1/forecast?latitude=35.7&longitude=51.4&current_weather=true")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        output.textContent = "دمای هوای تهران: " + data.current_weather.temperature + " درجه سانتی‌گراد";
    })
    .catch(function(error) {
        output.textContent = "متأسفانه نتونستیم اطلاعات رو دریافت کنیم. لطفاً بعداً دوباره امتحان کنید.";
    });