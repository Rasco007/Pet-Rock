/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*function presionoMenuMovil() {
    var x = document.getElementsByClassName("mobile-links");
    if (x[0].style.display === "block") {
      x[0].style.display = "none";
    } else {
      x[0].style.display = "block";
    }
  }*/
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }