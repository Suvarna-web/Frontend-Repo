let menuBtn = document.querySelector(".menu");
let menuBox = document.querySelector(".meun-tools");
let clear = document.querySelector(".clear");
let loginPage = document.querySelector(".login");
let loginButton = document.querySelector(".loginBtn");
menuBtn.addEventListener("click", function () {
  menuBox.classList.replace("disable", "active");
});

clear.addEventListener("click", function () {
  menuBox.classList.replace("active", "disable");
});

loginButton.addEventListener("click", function () {
  if (loginPage.classList.contains("disableLogin")) {
    loginPage.classList.replace("disableLogin","activeLogin");
  }
  else{
    loginPage.classList.replace("activeLogin","disableLogin");
  }
});