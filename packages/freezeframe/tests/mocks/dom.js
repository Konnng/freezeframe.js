/* eslint-disable no-param-reassign */

export default (window) => {
  window.HTMLCanvasElement.prototype.getContext = () => {
    return {
      drawImage() {}
    };
  };
  window.HTMLCanvasElement.prototype.addEventListener = (event, cb) => {
    cb(event);
  };
  window.HTMLImageElement.prototype.addEventListener = (event, cb) => {
    cb(event);
  };

  window.HTMLImageElement.prototype.getClientRects = () => ([{
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  }]);

  window.HTMLCanvasElement.prototype.getContext = function () {
      return {
          fillRect: function() {},
          clearRect: function(){},
          getImageData: function(x, y, w, h) {
              return  {
                  data: new Array(w*h*4)
              };
          },
          putImageData: function() {},
          createImageData: function(){ return []},
          setTransform: function(){},
          drawImage: function(){},
          save: function(){},
          fillText: function(){},
          restore: function(){},
          beginPath: function(){},
          moveTo: function(){},
          lineTo: function(){},
          closePath: function(){},
          stroke: function(){},
          translate: function(){},
          scale: function(){},
          rotate: function(){},
          arc: function(){},
          fill: function(){},
          measureText: function(){
              return { width: 0 };
          },
          transform: function(){},
          rect: function(){},
          clip: function(){},
      };
  }

  window.HTMLCanvasElement.prototype.toDataURL = function () {
      return "";
  }
};
