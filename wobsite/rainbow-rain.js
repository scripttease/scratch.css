function rainbowRain() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var mySVG=document.createElementNS("http://www.w3.org/2000/svg", "svg");
  mySVG.setAttribute("width", "100%");
  mySVG.setAttribute("height", "35vh");

  mySVG.setAttribute("viewBox", 0, 0, 1600, 300);
  mySVG.setAttribute("preserveAspectRatio","xMidYMid slice");
  mySVG.setAttribute("class","rain-svg");
  svgMum = document.getElementById("rc1");
  svgMum.insertBefore(mySVG, svgMum.childNodes[0]);
0

  function drawRain() {
    var x = getRandomInt(0,1500);
    var y = getRandomInt(0,250);
    var s = Math.random() * 1.65;
    var r = getRandomInt(40,255);
    var g = getRandomInt(40,255);
    var b = getRandomInt(40,255);

    function pathAttrD() {
      return (
        "M" +             // Move pen to
          x + "," +       // x-coordinate
          y + "," +       // y-coordinate
          "c" +           // c indicates start of cubic bezier coordinates
          s*-6 + "," +    // s=scale, x-coord of first control point
          s*22.5 + "," +  // y-coord of first control point
          s*36 + "," +    // x-coord of second control point
          s*22.5 + "," +  // y-coord of second control point
          s*30 + "," +    // x-coord of last cubic bezier point
          s*0 +           // y-coord of last cubic bezier point
          "l" +           // line draw to
          s*-15 + "," +   // x-coord of line end
          s*-30           // y-coord of line end
      );
    };

    var svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath.setAttribute("class", "raindrop-path");
    svgPath.setAttribute("d", pathAttrD());
    svgPath.setAttribute("fill","rgb("+ r + "," + g + "," + b +")");
    mySVG.appendChild(svgPath);

    setTimeout(function() { svgPath.parentNode.removeChild(svgPath); }, 1000);

    setTimeout(function() { drawRain(); }, 500);
  };

  drawRain();

}

rainbowRain();
