import { JOBS } from "./data.js";

$(function () {
  const ART = $("article");

  ART.html(characters(JOBS));

  function characters(list) {
    let txt = "<div class='cardHolder'>";
    for (let index = 0; index < list.length; index++) {
      txt += "<div class='card'>";
      for (const key in list[index]) {
        if (key == "image") {
          txt += `<img src='${list[index].image}' alt="">`;
        } else {
          txt += `<p> ${list[index][key]} </p>`;
        }
      }
      txt += "<button type='button' class='partyAdd'>Add to party</button></div>";
    }
    txt += "</div>";
    console.log(txt);
    return txt;
  }
});

   const BG = $("#bg");
  $("#bgsub").on("click", function () {
    let bgimg = "./img/bg/" + BG.val();
    $("canvas").drawImage({
      layer: true,
      source: bgimg,
      x: 0,
      y: 0,
      width: 400,
      height: 300,
      fromCenter: false,
    });
  });
  let imgX = 100;
  let imgY = 100;
  let i = 0;
  $("#reset").on("click", function () {
    $("canvas").clearCanvas();
    let bgimg = "./img/bg/" + BG.val();
    $("canvas").drawImage({
      layer: true,
      source: bgimg,
      x: 0,
      y: 0,
      width: 400,
      height: 300,
      fromCenter: false,
    });
    $("canvas").drawImage({
      layer: true,
      draggable: true,
      source: "./img/char/warrior.png",
      x: imgX,
      y: imgY,
    });
    i = 1;
  });

  $("#add").on("click", function () {
    if (i < 4) {
      $("canvas").drawImage({
        layer: true,
        draggable: true,
        source: "./img/char/warrior.png",
        x: imgX,
        y: imgY,
      });
      i += 1;
    } else {
      alert("Too many characters!");
    }
  });
  $("#gen").on("click", function () {});

