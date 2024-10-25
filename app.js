function startLoadHTML() {
  button = document.getElementById("btn");
  button.addEventListener("click", fetchData);
}

function fetchData() {
  const httpReq = new XMLHttpRequest();
  httpReq.onreadystatechange = function () {
    if (httpReq.readyState === XMLHttpRequest.DONE) {
      if (httpReq.status === 200) {
        alert(httpReq.responseText);
      } else {
        alert("There was a problem with the request.");
      }
    }
  };
  httpReq.open("GET", "http://localhost/info2180-lab4/superheroes.php");
  httpReq.send();
}

document.addEventListener("DOMContentLoaded", startLoadHTML);
