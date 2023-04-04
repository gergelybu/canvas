import { JOBS, PARTY } from "../data.js";
import { gen, reset, characters } from "./generate.js";

let partyMember = 0;

$(function () {
  const ART = $("article");
  const JOBS = getLocalJobs();
  ART.html(characters(JOBS));
    $(".partyAdd").on("click", function (event) {
    if (PARTY.length < 4) {
      let index = $(this).data("index");
      index = parseInt(index);
      let pic = JOBS[index].image;
      PARTY.push(pic);
       let txt = `<tr><td class="jobName" ><p>${JOBS[index].name}</p></td><td><button type='button' class='remove' data-index=${PARTY.length}>❌</button></td><tr>`;
      $("#partyTable").append(txt);
      gen(PARTY);
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
    reset(PARTY, BG);
    return BG;
  });

  function getLocalJobs() {
    const jobs = localStorage.getItem("JOBS");
    return jobs ? JSON.parse(jobs) : [];
  }

  /* under development
  $(".remove").on("click", function () {
    let index = $(this).data("index");
    console.log(index);
    PARTY.splice(index, 1);
    reset(PARTY);
  }); */
});
