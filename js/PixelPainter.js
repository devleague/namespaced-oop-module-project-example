'use strict';

var PixelPainter = window.PixelPainter || {};

var PaintManager = {
  init: function(){
    PixelPainter.Canvas.load();
  }
};

window.onload = function(){
  PaintManager.init();
}