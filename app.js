//Load HTML
function startLoadHTML() {
  button = document.getElementById("btn");
  button.addEventListener("click", fetchData);
}

//Funcion for button click
function fetchData() {
  search = document.getElementById("search").value; //get text field data
  result = document.getElementById("results"); //get result div

  const httpReq = new XMLHttpRequest(); //XMLHttpRequest object

  httpReq.onreadystatechange = function () {
    if (httpReq.readyState === XMLHttpRequest.DONE && httpReq.status === 200) {
      result.innerHTML = httpReq.responseText;
    }
  };
  httpReq.open(
    "GET",
    `http://localhost/info2180-lab4/superheroes.php?query=${search}`,
    true
  );
  httpReq.send();
}

document.addEventListener("DOMContentLoaded", startLoadHTML);
