import { JOBS, PARTY } from "../data.js";

let partyMember = 0;

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
      txt += `<button type='button' class='partyAdd' data-index='${index}'>Add to party</button></div>`;
    }
    txt += "</div>";
    console.log(txt);
    return txt;
  }

  $(".partyAdd").on("click", function (event) {
    if (PARTY.length < 4) {
      let index = $(this).data("index");
      console.log(index);
      index = parseInt(index);
      let pic = JOBS[index].image;
      PARTY.push(pic);
    } else {
      alert("Too many party members!");
    }
    return PARTY;
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
  let imgX = 70;
  let imgY = 70;
  $("#gen").on("click", function () {
    for (let index = 0; index < PARTY.length; index++) {
      $("canvas").drawImage({
        layer: true,
        draggable: true,
        source: PARTY[index],
        x: imgX * (index + 1),
        y: imgY * (index + 1),
      });
    }
  });
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
    for (let index = 0; index < PARTY.length; index++) {
        $("canvas").drawImage({
          layer: true,
          draggable: true,
          source: PARTY[index],
          x: imgX * (index + 1),
          y: imgY * (index + 1),
        });
      }
  });
});
