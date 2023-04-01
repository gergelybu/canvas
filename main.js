$(function () {
  $("canvas").drawImage({
    layer: true,
    source: "./img/field.png",
    x: 0,
    y: 0,
    width: 400,
    height: 300,
    fromCenter: false,
  });
  imgX = 100;
  imgY = 100;
  $("canvas").drawImage({
    layer: true,
    draggable: true,
    source: "./img/warrior.png",
    x: imgX,
    y: imgY,
  });
  $("#reset").on("click", function () {
    $("canvas").clearCanvas();
    $("canvas").drawImage({
      layer: true,
      source: "./img/field.png",
      x: 0,
      y: 0,
      width: 400,
      height: 300,
      fromCenter: false,
    });
    $("canvas").drawImage({
      layer: true,
      draggable: true,
      source: "./img/warrior.png",
      x: imgX,
      y: imgY,
    });
  });
});
