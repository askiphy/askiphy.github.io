'use strict';

var h1text = document.getElementById("h1text");
var h3text = document.getElementById("h3text");
var image = document.getElementById("image");
var color = 0;
setInterval(function () {
  h1text.style['text-decoration-color'] = "hsl(".concat(color, ", 100%, 50%)");
  h3text.style['text-decoration-color'] = "hsl(".concat(color, ", 100%, 50%)");
  image.style['border-color'] = "hsl(".concat(color, ", 100%, 50%)");
  color += 1;

  if (color == 360) {
    color = 0;
  }
}, 60);