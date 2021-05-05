'use strict';

let h1text = document.getElementById("h1text");
let h3text = document.getElementById("h3text");
let image = document.getElementById("image");
let position = document.getElementById("position");

let color = 0;

setInterval(function () {
  h1text.style['text-decoration-color'] = `hsl(${color}, 100%, 50%)`;
  h3text.style['text-decoration-color'] = `hsl(${color}, 100%, 50%)`;
  image.style['border-color'] = `hsl(${color}, 100%, 50%)`;
  position.style['background'] = `linear-gradient(45deg, hsl(${color - 45}, 100%, 50%) 0%, hsl(${color}, 100%, 50%) 50%, hsl(${color + 45}, 100%, 50%) 100%)`;

  color += 1;

  if (color == 360) {
    color = 0;
  }
}, 60);
