var iconClose = document.querySelector(".icon-close");
var iconMenu = document.querySelector(".icon-menu");
var navList = document.querySelector(".nav__list");
var overLay = document.querySelector(".overLay");
iconMenu.addEventListener("click", function (e) {
  overLay.style.display = "block";
  navList.style.display = "block";
  iconMenu.style.display = "none";
  iconClose.style.display = "block";
});
iconClose.addEventListener("click", function (e) {
  overLay.style.display = "none";
  navList.style.display = "none";
  iconMenu.style.display = "block";
  iconClose.style.display = "none";
});
