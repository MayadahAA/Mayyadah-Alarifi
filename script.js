const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
}

toggleDarkModeButton.addEventListener("click", toggleDarkMode);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}