import { JOBS, JOBINFO } from "../data.js";
import {
  generateTable,
  removeJob,
  editJob,
  addJOB,
  filterBySpec,
  sorting,
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

  $(document).on("click", ".remove", function () {
    let index = $(this).data("index");
    removeJob(JOBS, index);
    setLocalJobs(JOBS);
    ART.html(generateTable(JOBS, JOBINFO));
  });

  const HEADERS = $(".myHeader");
  let order = 0;
  //$(document).on("click", HEADERS, function (event){ 
  HEADERS.on("click", function (event) {
    let key = event.target.id;
    const ART = $("article");
    if (order % 2 == 0) {
      sorting(JOBS, key, 1, JOBINFO));
      ART.html(generateTable(list, JOBINFO));
    } else {
      sorting(JOBS, key, -1, JOBINFO));
      ART.html(generateTable(list, JOBINFO));
    }
    order += 1;
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
