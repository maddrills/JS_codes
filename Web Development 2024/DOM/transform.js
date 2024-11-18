"use strict";

let button = document.querySelector("button");

let clickCycle = true;

button.addEventListener("click", () => {
  if (clickCycle) {
    button.style.backgroundColor = "green";
    clickCycle = false;
  } else {
    button.style.backgroundColor = "aquamarine";
    clickCycle = true;
  }
});
