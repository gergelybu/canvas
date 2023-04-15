import { JOBS, PARTY } from "../data.js";
import { gen, reset, characters, resetParty } from "./generate.js";

let partyMember = 0;

$(function () {
  function getLocalJobs() {
    const jobs = localStorage.getItem("JOBS");
    return jobs ? JSON.parse(jobs) : [];
  }
  const ART = $("article");
  const JOBS = getLocalJobs();
  ART.html(characters(JOBS));
  $(".partyAdd").on("click", function (event) {
    if (PARTY.length < 4) {
      let index = $(this).data("index");
      index = parseInt(index);
      let pic = JOBS[index].image;
      PARTY.push(pic);
      let txt = `<tr><td class="jobName" ><p>${JOBS[index].name}</p></td><td><button type='button' class='remParty' data-index=${PARTY.length}>❌</button></td><tr>`;
      $("#partyTable").append(txt);
      gen(PARTY);
    } else {
      alert("Too many party members!");
      console.log($(".remParty"));
    }
    reset(PARTY, BG);
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

  $("table").on("click", ".remParty", function (event) {
    let index = $(this).data("index");
    console.log(index);
    PARTY.splice(index - 1, 1);
    console.log(PARTY);
    reset(PARTY, BG), index;
    resetParty(PARTY, JOBS);
  });
});
