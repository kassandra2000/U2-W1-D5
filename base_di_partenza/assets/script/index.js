const button = document.querySelector(".first");
const nav = document.querySelector("nav");
const path = document.querySelectorAll("path");
const scroll = window.addEventListener("scroll", (e) => {
  if (window.scrollY > 430) {
    nav.style.backgroundColor = "white";
    button.style.backgroundColor = "green";
  } else {
    nav.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
});

const pathDisplay = function () {
  for (let i = 0; i < path.length; i++) {
    path[i].style.opacity = 0;
    setTimeout(() => {
      path[i].style.opacity = 1;
    }, 1000);
    console.log(path[i]);
  }
};
pathDisplay()

// setInterval(pathDisplay, 1000);
