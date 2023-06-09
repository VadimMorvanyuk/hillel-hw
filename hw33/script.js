const p = [...document.getElementsByTagName("p")];
const option = document.querySelector(".optionValue");
let value = option.value;
fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    p.forEach((item) => {
      item.textContent = item.id;
    });
    const city = res.name;
    const temp = res.main.temp;
    const pressure = res.main.pressure;
    const description = res.weather[0].description;
    const humidity = res.main.humidity;
    const speed = res.wind.speed;
    const deg = res.wind.deg;
    const arr = [city, temp, pressure, description, humidity, speed, deg];
    arr.forEach((item, index) => {
      p[index].textContent += ` ${item}`;
    });
    const icon = document.getElementById("icon-weather");
    const iconID = res.weather[0].icon
    icon.src = `http://openweathermap.org/img/w/${iconID}.png`;
    
  });
option.onchange = (event) => {
  p.forEach((item) => {
    item.textContent = item.id;
  });
  value = event.target.value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      const city = res.name;
      const temp = res.main.temp;
      const pressure = res.main.pressure;
      const description = res.weather[0].description;
      const humidity = res.main.humidity;
      const speed = res.wind.speed;
      const deg = res.wind.deg;
      const arr = [city, temp, pressure, description, humidity, speed, deg];
      arr.forEach((item, index) => {
        p[index].textContent += ` ${item}`;
      });
      const icon = document.getElementById("icon-weather");
      const iconID = res.weather[0].icon
    icon.src = `http://openweathermap.org/img/w/${iconID}.png`;
    });
};
