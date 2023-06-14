const option = document.querySelector('.optionValue');

option.onchange = (event) => {
  value = event.target.value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
  .then((res) => res.json())
  .then(function (res) {
    const city = res.name;
    const temp = res.main.temp;
    const pressure = res.main.pressure;
    const description = res.weather[0].description;
    const humidity = res.main.humidity;
    const speed = res.wind.speed;
    const deg = res.wind.deg;
    const arr = [city, temp, pressure, description, humidity, speed, deg];

    const p = [...document.getElementsByTagName("p")];
    arr.forEach((item, index) => {
      p[index].textContent = `${p[index].id} ${item}`;
    });
    const icon = document.getElementById("icon-weather");
    const iconID = res.weather[0].icon
    icon.src = `http://openweathermap.org/img/w/${iconID}.png`;
  })
};
option.dispatchEvent(new Event('change'));
