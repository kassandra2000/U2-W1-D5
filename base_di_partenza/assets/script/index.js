const button = document.querySelector(".first");
const nav = document.querySelector("nav");
const path = document.querySelectorAll("path");
const arreyPath = [];
const arreyPath2 = [];
const scroll = window.addEventListener("scroll", (e) => {
  if (window.scrollY > 430) {
    nav.style.backgroundColor = "white";
    button.style.backgroundColor = "green";
  } else {
    nav.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
});

for (let i = 0; i < path.length; i++) {
  arreyPath.push(path[i]);
}
const g = document.querySelectorAll("g");
let j = 0;

for (let i = 0; i < arreyPath.length; i++) {
  if (g[i].getAttribute("opacity") == "1") {
    arreyPath2.push(g[i]);
  }
  
}
let k = 0;
console.log(arreyPath2[1].getAttribute("opacity"));
setInterval(() => {
  if (g[j].getAttribute("opacity") == "1") {
    arreyPath2.push(arreyPath[j]);
    arreyPath[j].style.opacity = "0";
    console.log(j);
    if (j > 189) {
      console.log("ciao");
      j = 0;
    }
  } else {
    arreyPath2[j].style.opacity = "1";
    if (j > 280) {
      j = 0;
    }
  }
  j++;
}, 20);

