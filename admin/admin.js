import { JOBS, JOBINFO } from "../data.js";
import {
  generateTable,
  removeJob,
  editJob,
  addJOB,
  filterBySpec,
  sort,
} from "./functions.js";

$(function () {
  const ART = $("article");
  localStorage.setItem("JOBS", JSON.stringify(JOBS));
  ART.html(generateTable(JOBS, JOBINFO));
  $("#add").on("click", function () {
    addJOB(JOBS);
    setLocalJobs(JOBS);
    ART.html(generateTable(JOBS, JOBINFO));
  });

  $(".remove").on("click", function () {
    let index = $(this).data("index");
    removeJob(JOBS, index);
    setLocalJobs(JOBS);
    ART.html(generateTable(JOBS, JOBINFO));
  });

  const HEADERS = $(".myHeader");
  let order = 0;

  HEADERS.on("click", function () {
    let index = $(this).data("index");
    let key = HEADERS[index];
    const ART = $("article");
    if (order % 2 == 0) {
      ART.html(sort(JOBS, key, 1, JOBINFO));
    } else {
      ART.html(sort(JOBS, key, -1, JOBINFO));
    }
    order += 1;
    console.log(order)
    return order;
  });

  $("#filterspec").on("change", function () {
    let filterCondition = this.value;
    let filterList = filterBySpec(JOBS, filterCondition);
    const ART = $("article");
    ART.html(generateTable(filterList, JOBINFO));
  });
});

function setLocalJobs(jobs) {
  localStorage.setItem("JOBS", JSON.stringify(jobs));
}
