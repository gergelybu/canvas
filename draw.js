let canvas = $("<canvas/>", { width: 240, height: 160, id: "draw" });
let myCanvas = $("#draw");
let img = "<img src='./img/warrior.png' alt='' id=war'>)";
console.log(img);
//let ctx = canv.getContext('2d');

$(function () {
  $("body").append(canvas);
  canvas.css("background-image", "url(./img/field.png)");
  let ctx = $("#draw")[0].getContext('2d');
  ctx.drawImage(img, 100, 80);
});
