/**
* $(function () {
  let JOBS = "data.json";
  readData(JOBS, print);
  
});

function megjelenit(data){
  list = data
  console.log(list)
}

function readData(JOBS, callbackFc) {
  fetch(JOBS, {
    method: "GET" vagy "post", "delete",
  })
  .then((response) => response.json())
  .then((data) => {
    callbackFc(data.JOBS);
  })
  .catch((error) => console.log(err));
} */