import { JOBS, JOBINFO } from "../data.js";
import { generateTable, removeJob, editJob, addJOB } from "./functions.js";

$(function () {
  const ART = $("article");
  localStorage.setItem("JOBS", JSON.stringify(JOBS));
  ART.html(generateTable(JOBS, JOBINFO));
  $("#add").on("click", function () {
    addJOB(JOBS),  setLocalJobs(JOBS), ART.html(generateTable(JOBS, JOBINFO));
  });
  $(".remove").on("click", function () {
    removeJob(JOBS),  setLocalJobs(JOBS), ART.html(generateTable(JOBS, JOBINFO));
  });
});

function setLocalJobs(jobs) {
    localStorage.setItem("JOBS", JSON.stringify(jobs));
  }