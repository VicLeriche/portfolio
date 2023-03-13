window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 30) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
