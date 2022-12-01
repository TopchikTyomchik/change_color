"use strict"
const buttonElement = document.querySelector(".main-block__btn");
const bodyElement = document.body;
const hexcodeElement = document.querySelector(".hex-code span");



let hexIndex = ['0','1','2','3','4','5','6','7','8','9', 'A','B','C','D','E','F'];

function generateHexColor() {
   let hexColor = "#";
   for (let i = 0; i < 6; i++) {
      hexColor +=  hexIndex[getRandomhexIndex()] 
   }
   return hexColor;
}



function change() {
   const backgoundColor = generateHexColor();
   bodyElement.style.backgroundColor = backgoundColor;
   hexcodeElement.innerHTML = backgoundColor;
}

function getRandomhexIndex() {
   return Math.floor(Math.random() * hexIndex.length)
}

buttonElement.addEventListener("click", change)