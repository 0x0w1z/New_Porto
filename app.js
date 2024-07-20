const preloader = document.getElementById("preloader");
window.addEventListener(
  "load",
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1000)
);
// active on which page it is
// const activePage = window.location.pathname;
// const navLinks = document.getElementById("root", "router").forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add("active-hover");
//     console.log(link);
//   }
// });
