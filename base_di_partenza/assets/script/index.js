const button = document.querySelector(".first");
const nav = document.querySelector("nav");

const scroll = window.addEventListener("scroll", (e) => {
    if (window.scrollY > 430) {
        nav.style.backgroundColor = "white";
        button.style.backgroundColor = "green";
    } else {nav.style.backgroundColor = "#ffc017";
button.style.backgroundColor = "black";}
 
});


