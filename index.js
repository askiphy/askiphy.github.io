'use strict';

let h1text = document.getElementById("h1text");
let h2text = document.getElementById("h2text");
let image = document.getElementById("image");
let position = document.getElementById("position");
let stepOfGradient = 22.5;
let color = 0;

setInterval(function () {
  h1text.style['text-decoration-color'] = `hsl(${color}, 100%, 50%)`;
  h2text.style['text-decoration-color'] = `hsl(${color}, 100%, 50%)`;
  image.style['border-color'] = `hsl(${color}, 100%, 50%)`;
  position.style['background'] = `linear-gradient(45deg, hsl(${color - stepOfGradient * 2}, 100%, 50%) 0%, hsl(${color - stepOfGradient}, 100%, 50%) 25%, hsl(${color}, 100%, 50%) 50%, hsl(${color + stepOfGradient}, 100%, 50%) 75%, hsl(${color + stepOfGradient * 2}, 100%, 50%) 100%)`;

  color += 1;

  if (color == 360) {
    color = 0;
  }
}, 60);
