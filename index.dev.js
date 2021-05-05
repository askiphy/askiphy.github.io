'use strict';

var h1text = document.getElementById("h1text");
var h3text = document.getElementById("h3text");
var image = document.getElementById("image");
var position = document.getElementById("position");
var color = 0;
setInterval(function () {
  h1text.style['text-decoration-color'] = "hsl(".concat(color, ", 100%, 50%)");
  h3text.style['text-decoration-color'] = "hsl(".concat(color, ", 100%, 50%)");
  image.style['border-color'] = "hsl(".concat(color, ", 100%, 50%)");
  position.style['background'] = "linear-gradient(45deg, hsl(".concat(color - 45, ", 100%, 50%) 0%, hsl(").concat(color, ", 100%, 50%) 50%, hsl(").concat(color + 45, ", 100%, 50%) 100%)");
  color += 1;

  if (color == 360) {
    color = 0;
  }
}, 60);