let menu = document.getElementById("menu");
let close = document.getElementById("close");

openMenu = () => {
  if ((menu.style.display = "block")) {
    (document.getElementById("ul").style.display = "flex") &&
      (document.getElementById("menu").style.display = "none") &&
      (document.getElementById("close").style.display = "block");
  }
};

closeMenu = () => {
  if ((close.style.display = "block")) {
    (document.getElementById("ul").style.display = "none") &&
      (document.getElementById("menu").style.display = "block") &&
      (document.getElementById("close").style.display = "none");
  }
};
