import "./styles.css";

import { greeting, newContent } from "./main.js";
import { menu } from "./menu.js";
import { about } from "./about.js"

console.log(greeting);

const homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("click", () => {
    newContent();
});

const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", () => {
    menu();
});

const aboutButton = document.querySelector(".aboutButton");
aboutButton.addEventListener("click", () => {
    about();
});




