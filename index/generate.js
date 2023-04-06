export function characters(list) {
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
  return txt;
}

export function gen(PARTY) {
  let imgX = 70;
  let imgY = 70;
  for (let i = 0; i < PARTY.length; i++) {
    $("canvas").drawImage({
      layer: true,
      draggable: true,
      source: PARTY[i],
      x: imgX * (i + 1),
      y: imgY * (i + 1),
    });
  }
}

export function reset(PARTY, BG) {
  let imgX = 70;
  let imgY = 70;
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
  gen(PARTY);
}

export function resetParty(PARTY, JOBS, index) {
  let txt = "";
  for (let i = 0; i < PARTY.length; i++) {
    for (let j = 0; j < JOBS.length; j++) {
      console.log(PARTY[i] == JOBS[j].image);
      if (PARTY[i] == JOBS[j].image) {
        txt += `<tr><td class="jobName" ><p>${JOBS[j].name}</p></td><td><button type='button' class='remParty' data-index=${PARTY.length}>❌</button></td><tr>`;
      }
    }
  }
  $("#partyTable").html(txt);
}
