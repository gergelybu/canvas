export function generateTable(list, header) {
  let txt = "<div class='jtable'><table><tr>";
  for (const key in header) {
    txt += `<th>${header[key]}</th>`;
  }
  txt += "<th>Remove</th><th>Edit</th></tr>";
  for (let index = 0; index < list.length; index++) {
    txt += "<tr>";
    for (const key in list[index]) {
      if (key == "image") {
        txt += `<td><img src='${list[index].image}' alt=""></td>`;
      } else {
        txt += `<td><p> ${list[index][key]} </p></td>`;
      }
    }
    txt += `<td><button type='button' class='remove' data-index='${index}'>Remove</button></td><td><button type='button' class='edit' data-index='${index}'>Edit</button></td></tr>`;
  }
  txt += "</table></div>";
  return txt;
}

export function removeJob(JOBS) {
  let index = $(this).data("index");
  JOBS.splice(index, 1);
  return JOBS;
}

export function editJob(JOBS) {
  //return JOBS;
}

export function addJOB(JOBS) {
  const newJob = {};
  const fieldset = $("fieldset");
  fieldset.children().each(function () {
    const id = $(this).attr("id");
    const val = $(this).val();
    if (val != "") {
      newJob[id] = val;
    }
  });
  JOBS.push(newJob);
  console.log(newJob);
  return JOBS;
}
