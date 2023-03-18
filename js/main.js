const loader = document.querySelector('.js-loader');

let rotation = 0;

setInterval(() => {
  rotation += 10;
  loader.style.transform = `rotate(${rotation}deg)`;
}, 30);





