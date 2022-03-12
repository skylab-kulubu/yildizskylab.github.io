const scrollButton = document.getElementById("scrollbutton");
const viewHeight = document.querySelector("section#intro").offsetHeight;

window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (
    document.body.scrollTop > viewHeight ||
    document.documentElement.scrollTop > viewHeight
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeinfo() {
  document.querySelector(".crewinfo").style.display = "none";
  document.querySelector(".crews").scrollIntoView();
}
