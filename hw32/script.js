const showTime = () => {
  const currentDate = new Date();
  const hours = Math.floor(currentDate.getHours() / 10);
  const hours2 = currentDate.getHours() % 10;
  const minutes = Math.floor(currentDate.getMinutes() / 10);
  const minutes2 = currentDate.getMinutes() % 10;
  const seconds = Math.floor(currentDate.getSeconds() / 10);
  const seconds2 = currentDate.getSeconds() % 10;

  const changeSrc = (img, src) => {
    if (img.src !== src) {
      img.src = src;
    }
  };

  const hour1 = document.querySelector(".hour1");
  const hour2 = document.querySelector(".hour2");

  const min1 = document.querySelector(".min1");
  const min2 = document.querySelector(".min2");

  const sec1 = document.querySelector(".sec1");
  const sec2 = document.querySelector(".sec2");

  changeSrc(hour1, `./img/${hours}.png`);
  changeSrc(hour2, `./img/${hours2}.png`);

  changeSrc(min1, `./img/${minutes}.png`);
  changeSrc(min2, `./img/${minutes2}.png`);

  changeSrc(sec1, `./img/${seconds}.png`);
  changeSrc(sec2, `./img/${seconds2}.png`);

  setInterval(showTime, 1000);
};

showTime();
