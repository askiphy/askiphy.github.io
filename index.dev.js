'use strict';

var h1text = document.getElementById("h1text");
var h2text = document.getElementById("h2text");
var image = document.getElementById("image");
var position = document.getElementById("position");
var stepOfGradient = 22.5;
var color = 0;
setInterval(function () {
  h1text.style['text-decoration-color'] = "hsl(".concat(color, ", 100%, 50%)");
  h2text.style['text-decoration-color'] = "hsl(".concat(color, ", 100%, 50%)");
  image.style['border-color'] = "hsl(".concat(color, ", 100%, 50%)");
  position.style['background'] = "linear-gradient(45deg, hsl(".concat(color - stepOfGradient * 2, ", 100%, 50%) 0%, hsl(").concat(color - stepOfGradient, ", 100%, 50%) 25%, hsl(").concat(color, ", 100%, 50%) 50%, hsl(").concat(color + stepOfGradient, ", 100%, 50%) 75%, hsl(").concat(color + stepOfGradient * 2, ", 100%, 50%) 100%)");
  color += 1;

  if (color == 360) {
    color = 0;
  }
}, 60);