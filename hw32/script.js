const showTime = () => {
  const container = document.querySelector(".container");
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).split("");
  const minutes = String(currentDate.getMinutes()).split("");
  const seconds = String(currentDate.getSeconds()).split("");

  if (seconds[1] === undefined) {
    seconds[1] = seconds[0];
    seconds[0] = 0;
  }
  if (minutes[1] === undefined) {
    minutes[1] = minutes[0];
    minutes[0] = 0;
  }
  if (hours[1] === undefined) {
    hours[1] = hours[0];
    hours[0] = 0;
  }
  const sec1 = document.createElement("img");
  const sec2 = document.createElement("img");
  sec1.src = `./img/${seconds[0]}.png`;
  sec2.src = `./img/${seconds[1]}.png`;

  const min1 = document.createElement("img");
  const min2 = document.createElement("img");
  min1.src = `./img/${minutes[0]}.png`;
  min2.src = `./img/${minutes[1]}.png`;

  const hour1 = document.createElement("img");
  const hour2 = document.createElement("img");
  hour1.src = `./img/${hours[0]}.png`;
  hour2.src = `./img/${hours[1]}.png`;
  const time = document.createElement("div");
  time.append(hour1, hour2, min1, min2, sec1, sec2);

  container.replaceChildren(time);
};

setInterval(showTime, 1000);
