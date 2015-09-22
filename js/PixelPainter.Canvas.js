var PixelPainter = window.PixelPainter || {};

PixelPainter.Canvas = (function () {  
  var pixelCollection = [];
  var canvasElement;

  return {
    load: function(){
      //draw <canvas> element
      var canvasElement = document.createElement('canvas');
    },

    draw: function(pixel){

    },

    createPixel: function(){
      var pixel = new Pixel(23, 555);
      pixelCollection.push(pixel);
      this.draw(pixel);
    }
  }
})();
