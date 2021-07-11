const API_KEY = "ccc5393049972e2a3bb752e589af8f2e";
///너무 길다. 헷갈리지 않도록.

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    ///ALWAYS BACKTICKS for putting varibles inside string!!!!!
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child")
        const cityContainer = document.querySelector("#weather span:last-child")
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
    ///fetch는 바로 일어나지 않고 시간이 지난 뒤에 작동한다. 서버에서 받아오는 시간에 따라 달라진다.
};
function onGeoError() {
    alert("Can't find your place.")
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
///getCurrentPosition은 두가지 argument를 받는다.
///argument 1: 모든것이 잘 되었을 때 실행될 함수.
///argument 2: 문제가 발생했을 때 실행될 함수.

