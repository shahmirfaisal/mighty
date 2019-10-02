window.onload = function() {
  var navBtn = document.querySelector(".nav-btn"),
    sideDrawer = document.querySelector(".side-drawer"),
    backdrop = document.querySelector(".backdrop"),
    i = document.querySelector(".close-sideDrawer");

  navBtn.addEventListener("click", openSideDrawer);
  i.addEventListener("click", closeSideDrawer);
  backdrop.addEventListener("click", closeSideDrawer);

  function openSideDrawer() {
    sideDrawer.style.transform = "translateX(0)";
    backdrop.style.display = "block";
  }

  function closeSideDrawer() {
    sideDrawer.style.transform = "translateX(120%)";
    backdrop.style.display = "none";
  }
};
