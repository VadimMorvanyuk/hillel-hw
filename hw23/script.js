let img = document.getElementById('img');
let randomSrc = Math.floor(Math.random() * 9) + 1;
img.src = `${randomSrc}.jpg`;